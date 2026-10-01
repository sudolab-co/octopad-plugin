# Codex runtime

Load only in Codex. Apply common [planning](planning.md), [supervision](supervision.md) and [recovery](recovery.md); this profile adds native mechanics and compatibility.

## Exact routes

Select workers by the judgment remaining after preparation. Consider `gpt-6-luna` at `xhigh` first, including substantial implementation with settled choices and reliable checks; record why another route is needed. These are routing defaults, not measured cost rankings. Save exact model, effort and reason.

| Role or remaining work | Default route |
|---|---|
| Planner | `gpt-6-astra · effort xhigh` |
| Supervisor | `gpt-6.1-sol · effort high` |
| Worker: settled choices and reliable verification | `gpt-6-luna · effort xhigh` |
| Worker: bounded judgment beyond that first candidate | `gpt-6.1-sol · effort high` |
| Worker: several unresolved reasoning steps in a prepared task | `gpt-6-astra · effort medium` |
| Reviewer: bounded verification with reliable checks | `gpt-5.6-sol · effort high` |
| Worker or reviewer: difficult reasoning or hard-to-detect errors | `gpt-6-astra · effort high` |
| Worker or reviewer: weak verification or high consequences | `gpt-6-astra · effort xhigh` |

These defaults do not override an explicit user choice of an available model and effort. Record that choice and reason; capability, independent-review and evidence requirements still apply.

Astra `max` is exceptional after diagnosis, never automatic. Default role admission: planner = `gpt-6-astra` at `xhigh|max`; supervisor = `gpt-6.1-sol` at `high`; worker = `gpt-6-luna` at `xhigh`, `gpt-6.1-sol` at `high` or `gpt-6-astra` at `medium|high|xhigh|max`; reviewer = `gpt-5.6-sol` at `high` or `gpt-6-astra` at `high|xhigh|max`. Review floors do not depend on worker price. Repair insufficient preparation before escalating effort.

Valid routes saved before 5.1.0 remain valid; the new defaults apply when preparing new plans. This includes the Sol 6 and Luna 6 routes published in 4.2.0 and saved v18 routes valid under 1.3.0: Luna workers `max`; Sol planners `xhigh|max`, supervisors, reviewers and workers `high|xhigh|max`; Astra planners and supervisors `xhigh|max`, reviewers `high|xhigh|max`, workers `low|medium|high|xhigh|max`. Keep exact saved model IDs and efforts, including active actors; an older Luna or Sol route does not select its successor. A saved-route change returns to Plan and affected review before dispatch; unavailable or invalid routes pause only the affected actor. Never substitute silently.

Native evidence exposing model and effort must match the saved values exactly. Positive mismatch pauses that actor. Requested settings, prompts and titles are declarations, not observations. Where native metadata is absent, continue with the declared route and record once on the first affected receipt that it is not independently observable here; missing metadata alone is neither a failed review nor `INFEASIBLE`. Reusing a session for a role requires a matching saved route under this same rule; prompting cannot change its model.

## Native work

Create the supervisor in a fresh native chat. Create workers, reviewers and bounded planning helpers with `collaboration.spawn_agent`, `fork_turns: "none"`, and the saved model and effort. Pass a bounded brief and evidence pointers; do not fork the planning history into delivery.

Batch independent reads in one `functions.exec` call with `Promise.allSettled`; inspect every result. Keep dependent operations sequential. Cap tool output; retrieve omitted evidence before relying on it.

Yield long commands while independent work continues. Use `functions.wait` only after `functions.exec` returns a running cell; use `write_stdin` for a session returned by `exec_command`. Await every started command before closing the turn.

Use `request_user_input_async` when exposed. Continue independent work while the question is pending; hold work that requires the answer until it arrives.

## Launch a separate supervisor chat

The planner prepares and hands off; a separate, user-accessible native chat supervises delivery directly and launches its workers and reviewers. Do not put another supervisor subagent inside that chat or retain the planner as a permanent relay.

At autonomy choice, propose the separate chat and exact supervisor model and effort together, and explain how the user follows delivery there. Inspect actual session-creation and child delegation, follow-up, wait, status and stop capabilities. Tool declarations are not end-to-end proof. `create_thread` requires an explicit user request for a new chat and, for its `model` field, an explicit model choice. Acceptance of the proposed chat and model covers both; reuse only choices actually made. Full autonomy or a saved route alone covers neither. Before creation, ask only for a missing choice, without reopening the mandate. Do not launch with an unknown host default to discover whether it matches the saved route. When native launch is unavailable, give the [manual continuation](continuation.md) instead; never silently substitute a child supervisor.

After the reviewed Plan is visible and launch authority holds:

1. Reconcile any recorded supervisor and pending creation before launching. Resume a valid owner; never create a second chat for an unchanged active delivery. Follow [recovery](recovery.md) for replacement or uncertain creation.
2. Use `list_projects` before `create_thread` for repository work, then the matching project; use projectless for work without a repository. Honor the requested destination and the tool's default (`local`); choose `worktree` only when explicitly requested and supported. Verify the directory before dispatch. Parallel repository workers need separate checkouts bound to their work, otherwise serialize them.
3. Create a fresh chat at the accepted and saved supervisor model and effort; the saved route alone never authorizes a model override. Give it the owned streams and boundary, Octopad context, mandate and ownership pointers, and indispensable environment facts. State that this chat is the supervisor and delegates task work directly. A returned `clientThreadId` is pending setup, not an active supervisor; resolve the real `threadId` through native status before addressing it.
4. The receiving chat reads durable state, verifies predecessor cessation if applicable, and claims the supervisor Decision with the current `expected_updated_at` before dispatch. It reports its identity, ownership, effective route, first action or actual wait, and any capability gap.
5. The planner uses `wait_threads` or the exposed equivalent to verify that startup receipt and observed state, then gives the user the native chat link and ends its planning role. Creation alone is not delivery startup. If startup fails, reconcile the existing chat and effects before retrying; report the precise blocker or manual fallback.

The supervisor talks to the user in its own chat. Cross-chat messaging follows the tool's explicit human-authorization rule; a received agent message does not authorize a reply. Do not depend on automatic replies to the planner. For a Plan defect, use a bounded planner subagent, or an existing planner only when the runtime and messaging authority permit it; the supervisor retains delivery ownership.

For multiple streams, default to one chat supervising the common outcome. Several chats require disjoint boundaries and qualified lifecycle and cross-chat coordination under actual tool permissions. Reserve capacity for workers and fresh reviewers; serialize when capacity is insufficient. Do not add a coordinator chat or fall back to a reused reviewer while claiming independence.

## Continue in the supervisor chat

Use `collaboration.wait_agent` to collect workers and reviewers, `list_agents` to resolve uncertain state, `send_message` for running children and `followup_task` for resumable children. An ended child turn is not a completed deliverable. Before resuming it, check the latest user instruction, authority, ownership, receipt, gates and native state. Resume the same healthy actor for bounded corrections; reconcile uncertain effects first. Never resume a stopped, retiring or retired actor. Two comparable returns without accepted progress trigger diagnosis, not repeated "continue" messages.

While safe authorized work remains, dispatch, collect or wait in this chat. Report progress and answer status questions in commentary, then continue. End a turn with outstanding children only where native wake-up is demonstrated; otherwise wait in the active turn. An open sidebar chat is not proof of a running supervisor. Explain actual continuation limits at mode choice; user stop wins, and no agent or Goal guarantees work after its runtime ends. Add no worker loop, hook or scheduler. Scheduled follow-up needs its own explicit request.

At a real wait or finish, report the evidence under common supervision. Account for independent branches before claiming no safe work. Do not repeatedly wake an unchanged legitimate wait. An idle supervisor means its turn ended, not that the mandate is complete; on user resume, reconcile state and continue in the same chat when valid.

## Hand off without overlapping owners

At a natural boundary, persist in-flight facts, reconcile children and uncertain effects, and record pending retirement under [recovery](recovery.md). Use automatic replacement only when an authorized native mechanism can prove the predecessor stopped before successor dispatch. A supervisor cannot prove its own future cessation or treat a retirement comment as proof. Without that mechanism, provide the manual successor pointer and end; the receiver verifies cessation and claims ownership before work. Preserve valid authority and pending user decisions; never wake the retired owner.

After launch, replacement or a status request, name the scope, accessible chat, observed state, latest receipt and next action or wait. Keep opaque IDs in the ownership record. Never label pending setup or an idle actor "running".

## Optional session-owned Goal

Offer an optional Goal at autonomy choice only when supported and no incompatible unfinished Goal prevents creation. Use `create_goal` only on explicit user request, after authorization; set `token_budget` only when explicitly requested. Delivery needs no Goal.

A Goal stays with the session that created it. Record that owner; children never create, mutate or inherit it. An explicit Goal request for the delivery chat is handled there. A Goal already in the planner stays there without becoming a delivery prerequisite or a reason to add a relay. Only its actual owner can complete it, after verifying its whole objective, and must report final usage when budgeted. Handoff and task completion alone never complete or transfer it.

Refresh with `get_goal`; never mutate unrelated Goals. `blocked` obeys the tool's threshold: the same impasse on at least three consecutive genuine Goal turns, without meaningful in-scope progress. Polls are not turns; resumed blocked Goals restart that audit. Never complete to stop, save budget or enable handoff. An older Goal remains with its original parent: reconcile its owner and actors, preserve its history, and continue without a new Goal unless separately requested and legitimately creatable.

## Read existing plans unchanged

Existing parent-relay and child-supervisor deliveries retain that topology while valid. Their parent collects and, after checking current authority, receipts and actor state, resumes the same healthy supervisor with `followup_task`; it does not dispatch workers or close tasks. User stop, retirement, uncertain effects, gates and real limits prevent unsafe continuation. Never launch a native chat alongside that owner merely because the skill was updated. A requested topology migration needs affected Plan review, predecessor cessation and guarded ownership transfer under [recovery](recovery.md).

Accept both new common Decision names and these exact saved aliases: `Octoplan 18 brief`, `Octoplan 18 stakes`, `Octoplan 18 plan contract`, and `Octoplan 18 delivery authorization`. Read the existing supervisor Decision by its recorded ownership content; the old source required a stream Decision but did not prescribe a fixed supervisor title. Reuse its identity, revision guards, current receipts and exact route. New plans use common names; resumed records retain their existing aliases. Valid Decisions, task text, receipts and authority need no rename, migration or duplicate go.

A release never renumbers the v18 plan-contract generation. Common recovery validates current state and handles invalid or pre-v18 private control objects as history, never execution authority. A similar name cannot grant PASS or consent.
