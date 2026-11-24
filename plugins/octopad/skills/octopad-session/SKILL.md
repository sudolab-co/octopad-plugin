---
name: octopad-session
description: Use first when the user asks for Octopad or onboarding, and as soon as the conversation concerns something the user organizes or follows over time, at work or in their own life (a company, a project, a product, code, customers, a team, plans, or their own affairs: paperwork, a move, a household), even if they never name Octopad. Loads their workspace's context and method. A sub-agent opens it only when its brief grants Octopad access.
---
Version: 35.7.0

# Start an Octopad plugin session

1. Work in the workspace the user names or the context makes clear. Stay in that workspace's organization: never pick a workspace of another organization yourself.
2. Call `start_session`, with `unattended: true` only when its parameter says so.
3. When the methodology's router sends a request to a skill, open `../<skill>/SKILL.md`, beside this skill, and check its path: never use a personal or standalone skill of the same name in its place. If you cannot open that file, work from the methodology alone.

When another person's work can affect the user's own, offer to add it to their priorities as the `octopad-pad` skill (section "Priorities") says.
