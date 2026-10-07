---
name: octopad-session
description: Use first when the user asks for Octopad or onboarding, and as soon as the conversation concerns their company or its product, code, customers, team or plans, even if they never name Octopad. Loads their workspace's context and method.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-session"` when you open this skill.

Version: 14.7.1

# Start an Octopad plugin session

1. Use the Octopad MCP connection bundled with this plugin. If another Octopad connection is also listed, such as a connector or an entry added by hand, tell the user once and keep to the bundled one for the whole conversation; if you cannot tell which listed connection that is, ask the user. Work in the workspace the user names or the context makes clear. Never pick another organization, change authentication, install another connection or work around an access refusal.
2. Call `start_session` with the workspace (`workspace_name` or `workspace_id`) and your model identifier as `agent_type`. In Codex Code Mode (`functions.exec`), use `max_output_tokens: 20000`, keep this read in its own cell, save the returned result with `store` and emit its complete text. A bare `await` does not put that text into the model's context. If output is marked truncated, emit the entire saved text in order, one chunk of at most 2,000 Unicode code points per cell, and read every chunk before acting. Use `Array.from` to split at code-point boundaries. The 20,000-token request and 2,000-code-point chunks are Octopad recovery choices, not Codex defaults; a larger request does not guarantee delivery through every host. Recover from the saved result, without calling `start_session` again. If a session is already open for that workspace, reuse it: never end or restart it. Call `start_session` again only when the user moves to another workspace or the server says the workspace has no active session.
3. Read the methodology that `start_session` returns before you act, and follow it. It is the method for this workspace. A module in this plugin adds detail to it and never relaxes one of its rules. If the result carries an **Octopad desktop (early access)** line near its top, follow it.
4. When the methodology's router sends a request to a module, open `../<module>/SKILL.md`, next to this skill in this plugin. Check the path of the file you open: never use a personal or standalone skill with the same name in its place. If the bundled file cannot be opened, work from the methodology alone.
5. Opening a module never widens the scope of the request, your permissions or what you may publish.

Octoplan ships in the same plugin: [octoplan](../octoplan/SKILL.md). Open it when the router or the user calls for it, with the same path check. It never delivers without the user's explicit go.
