---
name: octopad-session
description: Use first when the user asks for Octopad or onboarding, and as soon as the conversation concerns something the user organizes or follows over time, at work or in their own life (a company, a project, a product, code, customers, a team, plans, or their own affairs: paperwork, a move, a household), even if they never name Octopad. Loads their workspace's context and method. A sub-agent opens it only when its brief grants Octopad access.
---
Version: 36.0.0

# Start an Octopad plugin session

1. Work in the workspace the user names or the context makes clear. Stay in that workspace's organization: never pick a workspace of another organization yourself.
2. Call `start_session` with this skill's `Version:` as `plugin_version`.
3. When "Situations: which skill section to read" sends a request to a skill, open `../<skill>/SKILL.md`, beside this skill, and check its path: never use a personal or standalone skill of the same name in its place. If you cannot open that file, work from the methodology alone.

Where the `pad` tool is offered, when another person's work can affect the user's own, offer to add it to their priorities as the `octopad-pad` skill (section "Priorities") says.
