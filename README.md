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

Start a new conversation and ask to use Octopad. Sign in to Octopad in the browser when asked.

## What runs on your machine

In Claude Code, and in Cowork where plugin hooks run, a short shell script (`plugins/octopad/claude-session/claude-session.sh`) runs at each session start and when the Octopad connection opens. It keeps a SHA-256 digest of the session id, one small file per Claude Code process, in a private temp folder (`$TMPDIR/octopad-claude-<uid>/`), and sends that digest to Octopad so a resumed conversation is recognized. The session id itself never leaves your machine. claude.ai chat and Codex run neither. On Windows the script sends nothing; without Git Bash, Claude Code runs it in PowerShell and shows a warning about that at the start of each session.

## Maintaining the skills

Each skill's only source is its folder under `plugins/octopad/skills/`; the Claude and Codex distributions install the same files. Change a shared rule once, and keep tool names and model routes in Octoplan's runtime profiles (`octoplan/references/claude-runtime.md`, `octoplan/references/codex-runtime.md`). When shared behavior changes, validate and review both installed paths. Never edit an installed cache or keep a second copy by hand.

The session script's tests run with Node and no dependencies: `node --test 'tests/*.test.mjs'`. They live outside `plugins/octopad`, so they do not ship.
