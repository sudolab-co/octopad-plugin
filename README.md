# Octopad plugin

The Octopad plugin connects your AI to Octopad and loads its skills and Octoplan.

## Install

Claude app (chat and Cowork, on the web or the desktop app): open [**Customize > Plugins**](https://claude.ai/customize/plugins), select **Add > Add marketplace**, enter `sudolab-co/octopad-plugin`, then add **Octopad**. Open it, go to its **Connectors** tab and connect Octopad. For updates, turn on **Sync automatically** for the marketplace.

The plugin then also reaches Claude Code signed in to the same account, at its next session, or after `/reload-plugins` in an open one. Claude Code signs in to Octopad separately: run `/mcp` and connect the entry provided by the Octopad plugin. If `/mcp` also lists an Octopad connector from your claude.ai account, both reach the same Octopad; you can disable that connector there.

Claude Code alone, installed from the command line (this install stays on that machine and does not reach the Claude app):

```bash
claude plugin marketplace add sudolab-co/octopad-plugin
claude plugin install octopad@octopad-plugin
```

Then turn on updates, which Claude Code leaves off for this marketplace: run `/plugin`, open **Marketplaces**, select `octopad-plugin` and enable auto-update. Without it, the plugin stays on the version you installed; `claude plugin marketplace update octopad-plugin`, then `claude plugin update octopad@octopad-plugin`, refreshes it by hand.

Codex CLI or the ChatGPT desktop app:

```bash
codex plugin marketplace add sudolab-co/octopad-plugin
codex plugin add octopad@octopad-plugin
```

To refresh it later: `codex plugin marketplace upgrade octopad-plugin`.

Cursor: open **Customize > Plugins**, search for **Octopad** in the Cursor Marketplace and install it. Cursor opens the Octopad sign-in the first time the connection is used. On a Teams or Enterprise plan, an admin can instead import `https://github.com/sudolab-co/octopad-plugin` as a team marketplace under **Dashboard > Plugins & MCPs**. Octoplan has no Cursor runtime profile yet, so in Cursor it checks what the host can do before it offers to deliver work through agents.

Start a new conversation and ask to use Octopad. Sign in to Octopad in the browser when asked.

## What runs on your machine

In Claude Code, and in Cowork where plugin hooks run, a short shell script (`plugins/octopad/claude-session/claude-session.sh`) runs at each session start and when the Octopad connection opens. It keeps a SHA-256 digest of the session id, one small file per Claude Code process, in a private temp folder (`$TMPDIR/octopad-claude-<uid>/`), and sends that digest to Octopad so a resumed conversation is recognized. The session id itself never leaves your machine. claude.ai chat, Codex and Cursor run neither. On Windows the script sends nothing; without Git Bash, Claude Code runs the hook command in PowerShell, where it does nothing, and shows a warning about that at the start of each session.

## Maintaining the skills

Each skill's only source is its folder under `plugins/octopad/skills/`; the Claude, Codex and Cursor distributions install the same files. Each has its own manifest (`.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/`) and MCP configuration (`.mcp.json`, `.mcp.codex.json`, `mcp.json`); a release moves all three manifests and `octopad-session`'s `Version:` together. Change a shared rule once, and keep tool names and model routes in Octoplan's runtime profiles (`octoplan/references/claude-runtime.md`, `octoplan/references/codex-runtime.md`). When shared behavior changes, validate and review both installed paths. Never edit an installed cache or keep a second copy by hand.

The tests run with Node and no dependencies: `node --test 'tests/*.test.mjs'`. They live outside `plugins/octopad`, so they do not ship.
