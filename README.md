# Octopad plugin

The Octopad plugin connects your AI to Octopad and loads its skills and Octoplan.

## Install

Claude Code:

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
