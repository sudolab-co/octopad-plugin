# Changelog

## 13.0.1 - Unreleased

Codex loads a separate MCP configuration with a 15,000-token output budget for start_session. Claude Code keeps its compatible configuration. The session skill requests a 20,000-token emission budget in Codex Code Mode, stores the response and recovers its entire text in bounded emissions before acting.

The CRM skill's existing description is quoted so its YAML frontmatter parses. This does not deploy the server, change installed plugins or raise other tools' output limits.

## 13.0.0 - 2026-10-04

Octoplan 6.0.0 and octopad-planning-and-work-design 3.0.0 put the reviewed Plan summary before the autonomy choice. It names what agents can finish and verify without the user, the first expected intervention, who must act, affected work and continuation limits. Existing applicable mandates carry forward without a second approval.

Planning probes uncertain capabilities on the actual target before relying on them; unproved access limits the promise. Supervisors own the Brief's outcome, repair the affected Plan when methods change its meaning or proof, and surface human needs promptly while continuing independent work. Both runtime profiles disclose manual session handoffs; Codex also distinguishes native input, notification delivery and capabilities across environments. Computer Use requires disclosed scope, explicit user acceptance and verified access; delegates inherit those bounds, not system permissions. Refusal or unavailable access requires an allowed alternative or a visible human intervention, without weaker proof.

Shared update for Claude Code and Codex. Both distributions move to 13.0.0. Review, acceptance criteria, protected effects, runtime-specific permissions and saved-route compatibility remain binding. No automatic Goal, schedule or migration of active delivery is introduced.

## 12.0.0 - 2026-10-03

octopad-crm 1.1.0 lets the AI run the CRM's contact summaries for the user instead of sending them to the settings page. A new section names the tool and action for each setting and, where one applies, what it costs: the workspace's directions and questions, with a preview before saving; the nightly switch and its cap; which field changes trigger a new summary; summarising chosen contacts now; filtering contacts on their answers; switching a contact's summary off; and reading the spend. Settings change only on the user's instruction, after the AI says what they will cost.

Where the outreach privacy check is on, the AI picks prospects by an answer, the summary switch or a sensitive usage or activity field only through a segment, so the check can refuse it, never by launching on contacts found another way. The import guidance now says that registering a source creates the custom fields it declares.

Shared update for Claude Code and Codex. Both distributions move to 12.0.0; no saved state changes.

## 11.2.0 - 2026-10-01 (Codex)

Octoplan 5.2.0 starts Codex delivery in a separate supervisor chat when the user has requested or accepted that destination. This chat owns delivery and launches workers and reviewers directly. The planner verifies startup, links the chat and finishes its planning role; no permanent relay or nested supervisor is added.

Launch respects the native tools' permissions, pending setup and directory checks. Resume reuses the recorded owner. Replacement requires predecessor cessation and guarded ownership transfer; unavailable native launch or safe replacement uses a stated manual handoff. Existing child-supervisor deliveries and session-owned Goals remain with their owners until an authorized transition.

Codex capability update only. Model routes, delivery authority and review floors are unchanged; the Claude distribution remains 11.0.0. Shared references defer session mechanics to the runtime profile. This release does not promise continuation after a runtime stops or prove local installation.

## 11.1.0 - 2026-10-01 (Codex)

Octoplan 5.1.0 uses `gpt-6.1-sol` at `high` for new Codex supervisors and workers with bounded judgment. It also restores the `gpt-6-luna` at `xhigh` first-candidate route published in Octoplan 4.2.0, which was missing from this repository's imported profile. The table and role admission now name the same exact models and efforts.

Existing saved plans and running actors keep their exact model IDs and efforts until an explicit replan and affected review. Planner and reviewer defaults, the shared delivery contract and the Claude runtime are unchanged; the Claude distribution remains 11.0.0. Availability must still be checked on the target host. These defaults are not a measured cost or performance comparison.

## 11.0.0 - 2026-10-01

Streams and Octoplan now share a proportionate brief and preparation. The AI can offer delivery by agents when there is useful work to complete between human interventions, without requiring the user to know the name Octoplan.

Switching to agent delivery keeps the same stream, tasks, decisions, evidence and progress. A bounded delivery inside an ongoing stream does not complete that stream. Existing valid confirmations and mandates carry forward; creating a stream, preparing a plan or staying silent never authorizes delivery. Required reviews and human gates remain in place.

A missing delivery mandate is distinguished from a user request limited to planning. When agent delivery is intended and useful, the AI asks once for autonomy and covered effects before concluding preparation. Explicit planning-only requests, pauses, postponements and unanswered choices remain respected. Plan reviews check this reading against the user's request and context.

Shared protocol update for Claude Code and Codex: Octoplan 5.0.0 and octopad-planning-and-work-design 2.0.0. Existing valid delivery contracts need no migration. The companion server kernel change has its own deployment gate.
