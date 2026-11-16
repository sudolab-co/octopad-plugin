---
name: octopad-session
description: Use first when the user asks for Octopad or onboarding, and as soon as the conversation concerns their company or its product, code, customers, team or plans, even if they never name Octopad. Loads their workspace's context and method. A sub-agent opens it only when its brief grants Octopad access.
---
Version: 32.0.0

# Start an Octopad plugin session

1. Use the Octopad MCP connection bundled with this plugin. If another Octopad connection is also listed, such as a connector or an entry added by hand, tell the user once and keep to the bundled one for the whole conversation. If you cannot tell which listed connection is the bundled one, ask the user.
2. Work in the workspace the user names or the context makes clear. Stay in the user's organization: never pick another one.
3. Call `start_session`.
4. When the methodology's router sends a request to a module, open `../<module>/SKILL.md`, next to this skill in this plugin. Check the path of the file you open: a personal or standalone skill with the same name never replaces it. If the bundled file cannot be opened, work from the methodology alone.

Where the bundled connection offers the `followup` tool, follow something only when the user asks to be kept informed of it. When another person's work can affect the user's own, offer to add it to their priorities as `../octopad-notepad/SKILL.md` says.
