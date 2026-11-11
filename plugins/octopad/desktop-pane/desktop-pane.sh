# Octopad: remind the AI to put the Octopad desktop on screen right after it loads it.
# Claude Code only; POSIX sh, run as `/bin/sh <this file>` by a PostToolUse hook on the
# Claude desktop app's Browser pane tools, browser_batch included (its nested navigate
# carries the same "url" key).
#
# Why here: in the Claude desktop app, loading a page in the Browser pane leaves the pane
# hidden until the app's own show command runs, while the tool answers "Browser pane
# opened". The Octopad server never sees that tool call, so its instructions arrive
# before the moment that matters; this hook speaks at that moment.
#
# Reads the hook input on stdin. When the loaded address is an Octopad desktop page or
# desktop sign-in link, prints a PostToolUse additionalContext; otherwise prints nothing.
# Always exits 0 with empty stderr, so it can never block or break a tool call.

PATH=/usr/bin:/bin:/usr/sbin:/sbin
LC_ALL=C
export PATH LC_ALL

input=$(head -c 65536 2>/dev/null)

# The tool's own "url" argument, on octopad.app (production or staging) or a local
# development server: the conversation's desktop, or the sign-in link that lands on it.
desktop='"url"[[:space:]]*:[[:space:]]*"(https://([a-z0-9-]+\.)?octopad\.app|http://localhost(:[0-9]+)?)/(org/[^"/?#]+/desktop|auth/desktop)([?#/][^"]*)?"'

if printf '%s' "$input" | grep -Eq "$desktop" 2>/dev/null; then
  printf '%s' '{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":"Octopad: you loaded the Octopad desktop, but loading does not put it on screen. Now call mcp__Claude_Browser__tabs_select with the desktop tab\u0027s tabId, then mcp__ccd_view__show_pane with pane \"preview\" (load them with your tool search if they are deferred), then mcp__Claude_Browser__tabs_context: only \"currently displayed\" with the desktop tab active proves the user sees it; if it still says hidden, check once more. If show_pane says this session is in no window, the desktop is not shown: say so, and show it at the user\u0027s next message. Say the desktop is shown only after that check."}}'
fi
exit 0
