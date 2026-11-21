---
name: octopad-session
description: Use first when the user asks for Octopad or onboarding, and as soon as the conversation concerns their company or its product, code, customers, team or plans, even if they never name Octopad. Loads their workspace's context and method. A sub-agent opens it only when its brief grants Octopad access.
---
Version: 33.10.0

# Start an Octopad plugin session

1. Work in the workspace the user names or the context makes clear. Stay in that workspace's organization: never pick a workspace of another organization yourself.
2. Call `start_session`.
3. When the methodology's router sends a request to a skill, open `../<skill>/SKILL.md`, beside this skill, and check its path: never use a personal or standalone skill of the same name in its place. If you cannot open that file, work from the methodology alone.

When another person's work can affect the user's own, offer to add it to their priorities as the `octopad-notepad` skill (section "Priorities") says.
