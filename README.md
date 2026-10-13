# Octopad plugin

The Octopad plugin connects your AI to Octopad and loads its skills and Octoplan.

## Install

Claude app (chat and Cowork, on the web or the desktop app): open [**Customize > Plugins**](https://claude.ai/customize/plugins), select **Add > Add marketplace**, enter `sudolab-co/octopad-plugin`, then add **Octopad**. Open it, go to its **Connectors** tab and connect Octopad. For updates, turn on **Sync automatically** for the marketplace.

The plugin then also reaches Claude Code signed in to the same account, at its next session. Claude Code signs in to Octopad separately: run `/mcp` and connect the entry provided by the Octopad plugin. If `/mcp` also lists an Octopad connector from your claude.ai account, both reach the same Octopad; you can disable that connector there.

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
