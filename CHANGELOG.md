# Changelog

## 11.1.0 - 2026-10-01 (unreleased, Codex)

Octoplan 5.1.0 uses `gpt-6.1-sol` at `high` for new Codex supervisors and workers with bounded judgment. It also restores the `gpt-6-luna` at `xhigh` first-candidate route published in Octoplan 4.2.0, which was missing from this repository's imported profile. The table and role admission now name the same exact models and efforts.

Existing saved plans and running actors keep their exact model IDs and efforts until an explicit replan and affected review. Planner and reviewer defaults, the shared delivery contract and the Claude runtime are unchanged; the Claude distribution remains 11.0.0. Availability must still be checked on the target host. These defaults are not a measured cost or performance comparison.

## 11.0.0 - 2026-10-01 (unreleased)

Streams and Octoplan now share a proportionate brief and preparation. The AI can offer delivery by agents when there is useful work to complete between human interventions, without requiring the user to know the name Octoplan.

Switching to agent delivery keeps the same stream, tasks, decisions, evidence and progress. A bounded delivery inside an ongoing stream does not complete that stream. Existing valid confirmations and mandates carry forward; creating a stream, preparing a plan or staying silent never authorizes delivery. Required reviews and human gates remain in place.

Shared protocol update for Claude Code and Codex: Octoplan 5.0.0 and octopad-planning-and-work-design 2.0.0. Existing valid delivery contracts need no migration. The companion server kernel change has its own deployment gate.
