# Octopad: let the Octopad server recognize a Claude Code conversation that resumes
# in a new process. Claude Code only; POSIX sh, run as `/bin/sh <this file> <mode>`.
#
#   hook    SessionStart hook. Reads the hook input on stdin and, for a valid
#           session_id, records a SHA-256 digest of it for the claude process that
#           runs this script. Prints nothing.
#   header  headersHelper of the Octopad MCP server. Prints the recorded digest of
#           the claude process that runs it as {"x-octopad-claude-session": ...},
#           or {} when there is none.
#
# Records: ${TMPDIR:-/tmp}/octopad-claude-<uid>/<pid>.json, one per claude process,
# holding {"pid","start","value"}; the folder is private (0700) and refused when it
# is a symlink, someone else's, or open to group or others. The raw session id never
# leaves this script. Any failure means no header; both modes always exit 0 with
# empty stderr, so they can never block or break the Octopad connection.

PATH=/usr/bin:/bin:/usr/sbin:/sbin
LC_ALL=C
TZ=UTC
export PATH LC_ALL TZ
umask 077

octopad_supported() {
  # macOS and Linux only: Git Bash, MSYS and Cygwin on Windows fail closed.
  case "$(uname -s 2>/dev/null)" in
    Darwin | Linux) return 0 ;;
  esac
  return 1
}

octopad_is_pid() {
  case "$1" in
    '' | *[!0-9]*) return 1 ;;
  esac
  [ "$1" -gt 1 ]
}

# The claude process that runs this script: its parent, or, when Claude Code ran
# the command through a shell, the first ancestor that is not a shell. Never
# CLAUDE_PID or another inherited variable: a process started from a session's
# shell inherits those.
octopad_owner() {
  p=$PPID
  hops=0
  while octopad_is_pid "$p"; do
    c=$(ps -o comm= -p "$p" 2>/dev/null) || return 1
    case "${c##*/}" in
      '') return 1 ;;
      sh | bash | dash | zsh | ksh | ash)
        [ "$hops" -lt 2 ] || return 1
        hops=$((hops + 1))
        p=$(ps -o ppid= -p "$p" 2>/dev/null | tr -d ' ') || return 1
        ;;
      *)
        printf '%s\n' "$p"
        return 0
        ;;
    esac
  done
  return 1
}

# Start time of a process, so a record of an earlier process that had the same
# PID never matches.
octopad_start() {
  s=$(ps -o lstart= -p "$1" 2>/dev/null) || return 1
  s=$(printf '%s\n' "$s" | sed 's/^ *//; s/ *$//')
  case "$s" in
    '' | *[!A-Za-z0-9:\ ]*) return 1 ;;
  esac
  printf '%s\n' "$s"
}

octopad_dir() {
  base=${TMPDIR:-/tmp}
  case "$base" in
    /*) ;;
    *) return 1 ;;
  esac
  uid=$(id -u 2>/dev/null) || return 1
  case "$uid" in
    '' | *[!0-9]*) return 1 ;;
  esac
  printf '%s/octopad-claude-%s\n' "${base%/}" "$uid"
}

# The records folder is used only when it is a real directory owned by this user
# and closed to group and others.
octopad_dir_safe() {
  [ -d "$1" ] && [ ! -L "$1" ] || return 1
  info=$(ls -ldn "$1" 2>/dev/null) || return 1
  set -f
  set -- $info
  set +f
  [ "$3" = "$(id -u)" ] || return 1
  case "$1" in
    drwx------ | drwx------@ | drwx------.) return 0 ;;
  esac
  return 1
}

octopad_hex64() {
  case "$1" in
    *[!0-9a-f]*) return 1 ;;
  esac
  [ "${#1}" -eq 64 ]
}

octopad_sha256() {
  if command -v sha256sum >/dev/null 2>&1; then
    sha256sum
  elif command -v shasum >/dev/null 2>&1; then
    shasum -a 256
  elif command -v openssl >/dev/null 2>&1; then
    openssl dgst -sha256 -r
  else
    return 1
  fi
}

octopad_hook() {
  octopad_supported || return 0
  input=$(head -c 65536 2>/dev/null)
  printf '%s\n' "$input" | grep -q '"hook_event_name"[[:space:]]*:[[:space:]]*"SessionStart"' || return 0
  sid=$(printf '%s\n' "$input" | sed -n 's/.*"session_id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')
  case "$sid" in
    *[!0-9a-fA-F-]*) return 0 ;;
    ????????-????-????-????-????????????) ;;
    *) return 0 ;;
  esac
  pid=$(octopad_owner) || return 0
  start=$(octopad_start "$pid") || return 0
  dir=$(octopad_dir) || return 0
  [ -e "$dir" ] || [ -L "$dir" ] || mkdir -m 700 "$dir" 2>/dev/null
  octopad_dir_safe "$dir" || return 0
  value=$(printf 'octopad-claude-session:%s' "$sid" | octopad_sha256 | cut -c1-64)
  octopad_hex64 "$value" || return 0
  find "$dir/." ! -name . -prune -type f -mtime +6 -exec rm -f {} + 2>/dev/null
  tmp="$dir/.$pid.$$.tmp"
  if printf '{"pid":%s,"start":"%s","value":"%s"}\n' "$pid" "$start" "$value" >"$tmp"; then
    mv -f "$tmp" "$dir/$pid.json" || rm -f "$tmp"
  else
    rm -f "$tmp"
  fi
}

# Prints the header JSON or nothing. Waits for the hook (which Claude Code may run
# after this helper) only when the folder holds a record from the last 7 days, so a
# machine whose hooks never run pays no wait.
octopad_header() {
  octopad_supported || return 0
  pid=$(octopad_owner) || return 0
  start=$(octopad_start "$pid") || return 0
  dir=$(octopad_dir) || return 0
  octopad_dir_safe "$dir" || return 0
  recent=$(find "$dir/." ! -name . -prune -type f -name '*.json' -mtime -7 2>/dev/null | head -n 1)
  [ -n "$recent" ] || return 0
  file="$dir/$pid.json"
  want="{\"pid\":$pid,\"start\":\"$start\",\"value\":\""
  tries=0
  while [ "$tries" -lt 40 ]; do
    if [ -f "$file" ] && [ ! -L "$file" ]; then
      rec=$(cat "$file" 2>/dev/null)
      case "$rec" in
        "$want"*'"}')
          value=${rec#"$want"}
          value=${value%'"}'}
          if octopad_hex64 "$value"; then
            touch "$file" 2>/dev/null
            printf '{"x-octopad-claude-session":"%s"}' "$value"
            return 0
          fi
          ;;
      esac
    fi
    sleep 0.05 2>/dev/null || return 0
    tries=$((tries + 1))
  done
}

case "$1" in
  hook)
    octopad_hook >/dev/null 2>&1
    ;;
  header)
    out=$(octopad_header 2>/dev/null)
    [ -n "$out" ] || out='{}'
    printf '%s\n' "$out"
    ;;
esac
exit 0
