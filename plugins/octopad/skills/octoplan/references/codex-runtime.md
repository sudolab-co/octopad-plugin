# Codex runtime

## Exact routes

Consider `gpt-6-luna` at `xhigh` first, including substantial implementation with settled choices and reliable checks; record why another route is needed. Save exact model, effort and reason.

| Role or remaining work | Default route |
|---|---|
| Planner | `gpt-6-astra · effort xhigh` |
| Supervisor | `gpt-6.1-sol · effort high` |
| Worker: settled choices and reliable verification | `gpt-6-luna · effort xhigh, gpt-6.1-sol · effort high on failed checks` |
| Worker: bounded judgment beyond that first candidate | `gpt-6.1-sol · effort high` |
| Worker: several unresolved reasoning steps in a prepared task | `gpt-6-astra · effort medium` |
| Reviewer: light review ([supervision.md](supervision.md)) | `gpt-6.1-sol · effort high` |
| Worker or reviewer: difficult reasoning or hard-to-detect errors | `gpt-6-astra · effort high` |
| Worker: weak verification or high consequences; reviewer: heavy review | `gpt-6-astra · effort xhigh` |

These defaults do not override an explicit user choice of an available model and effort. Record that choice and reason; capability, independent-review and evidence requirements still apply.

Astra `max` is exceptional after diagnosis, never automatic. Default role admission: planner = `gpt-6-astra` at `xhigh|max`; supervisor = `gpt-6.1-sol` at `high`; worker = `gpt-6-luna` at `xhigh`, `gpt-6.1-sol` at `high` or `gpt-6-astra` at `medium|high|xhigh|max`; reviewer = `gpt-6.1-sol` at `high` or `gpt-6-astra` at `high|xhigh|max`.

Native evidence exposing model and effort must match the actor's saved Codex route exactly; for an `on failed checks` route, each actor's native evidence must match its own part of the route. Positive mismatch pauses that actor. Requested settings, prompts and titles are declarations, not observations. Where native metadata is absent, continue with the declared route and record once on the first affected receipt that it is not independently observable here; missing metadata alone is neither a failed review nor `INFEASIBLE`. Reusing a session for a role requires a matching saved route under this same rule; prompting cannot change its model.

## Native work

Create the supervisor in a fresh native chat. Create workers, reviewers and bounded planning helpers with `collaboration.spawn_agent`, `fork_turns: "none"`, and the saved model and effort. Pass a bounded brief and evidence pointers.

Batch independent reads in one `functions.exec` call with `Promise.allSettled`; inspect every result. Keep dependent operations sequential.

Yield long commands while independent work continues. Use `functions.wait` only after `functions.exec` returns a running cell; use `write_stdin` for a session returned by `exec_command`. Await every started command before closing the turn.

Use `request_user_input_async` when exposed and permitted for the question, otherwise ask visibly in chat; use the required approval route for protected effects. A posted request is not proof that a system notification reached the user.

Local, cloud and remote sessions do not share capabilities automatically; move work only to an authorized destination proved to have its necessary sources, rules and proof. Computer Use cannot control ChatGPT itself.

## Launch a separate supervisor chat

The planner prepares and hands off; a separate, user-accessible native chat supervises delivery directly and launches its workers and reviewers. Do not put another supervisor subagent inside that chat or retain the planner as a permanent relay.

At autonomy choice, propose the separate chat and exact supervisor model and effort together, and explain how the user follows delivery there. Inspect actual session-creation and child delegation, follow-up, wait, status and stop capabilities. Tool declarations are not end-to-end proof. `create_thread` requires an explicit user request for a new chat and, for its `model` field, an explicit model choice. Acceptance of the proposed chat and model covers both; reuse only choices actually made. Full autonomy or a saved route alone covers neither. Before creation, ask only for a missing choice, without reopening the mandate. Do not launch with an unknown host default to discover whether it matches the saved route.

After the reviewed Plan is visible and launch authority holds:

1. Reconcile any recorded supervisor and pending creation before launching. Resume a valid owner; never create a second chat for an unchanged active delivery. Follow [recovery](recovery.md) for replacement or uncertain creation.
2. Use `list_projects` before `create_thread` for repository work, then the matching project; use projectless for work without a repository. Honor the requested destination and the tool's default (`local`); choose `worktree` only when explicitly requested and supported. Verify the directory before dispatch. Parallel repository workers need separate checkouts bound to their work, otherwise serialize them.
3. Create a fresh chat at the accepted and saved supervisor model and effort; the saved route alone never authorizes a model override. Give it the owned streams and boundary, Octopad context, mandate and ownership pointers, any explicit Goal request with its exact source and scope, and indispensable environment facts. State that this chat is the supervisor and delegates task work directly. A returned `clientThreadId` is pending setup, not an active supervisor; resolve the real `threadId` through native status before addressing it.
4. The receiving chat reads durable state, verifies predecessor cessation if applicable, and claims current supervision in the canonical journal before dispatch. It reports its identity, ownership, effective route, first action or actual wait, and any capability gap.
5. The planner uses `wait_threads` or the exposed equivalent to verify that startup receipt and observed state, then gives the user the native chat link and ends its planning role. Creation alone is not delivery startup. If startup fails, reconcile the existing chat and effects before retrying; report the precise blocker or manual fallback.

The supervisor talks to the user in its own chat. Cross-chat messaging follows the tool's explicit human-authorization rule. Do not depend on automatic replies to the planner. For a Plan defect, use a bounded planner subagent, or an existing planner only when the runtime and messaging authority permit it; the supervisor retains delivery ownership.

Do not add a coordinator chat or fall back to a reused reviewer while claiming independence.

## Continue in the supervisor chat

Use `collaboration.wait_agent` to collect workers and reviewers, `list_agents` to resolve uncertain state, `send_message` for running children and `followup_task` for resumable children. An ended child turn is not a completed deliverable. Before resuming it, check the latest user instruction, authority, ownership, receipt, gates and native state. Where an executor cannot spawn its reviewer, launch the reviewer yourself and give the findings to that executor with `followup_task`. Never resume a stopped, retiring or retired actor.

End a turn with outstanding children only where native wake-up is demonstrated; otherwise wait in the active turn. Explain actual continuation limits at mode choice, including any handoff the user must start; user stop wins, and no agent or Goal guarantees work after its runtime ends. Add no worker loop, hook or scheduler. Scheduled follow-up needs its own explicit request.

At a real wait or finish, report the evidence under common supervision. Do not repeatedly wake an unchanged legitimate wait. An idle supervisor means its turn ended, not that the mandate is complete; on user resume, reconcile state and continue in the same chat when valid.

## Hand off without overlapping owners

How Codex words its compaction summary, and whether it brings this skill's main file back afterwards, is unmeasured. Where it does not, the compaction rule reaches a compacted supervisor only through the line its summary opens with.

At a natural boundary, or after a compaction ([SKILL.md](../SKILL.md#after-a-compaction)), persist in-flight facts, reconcile children and uncertain effects, and record pending retirement under [recovery](recovery.md). Use automatic replacement only when an authorized native mechanism can prove the predecessor stopped before successor dispatch. Without that mechanism, provide the manual successor pointer and end; the receiver proves cessation under [recovery](recovery.md) and claims ownership before work. Preserve valid authority and pending user decisions; never wake the retired owner.

After launch, replacement or a status request, name the scope, accessible chat, observed state, latest receipt and next action or wait.

## Internal supervisor Goal

A native Goal keeps this supervisor chat working across turns within host limits. An optional native Goal is never a delivery prerequisite, never another option to offer at autonomy choice, and plan-only work creates none. After claiming ownership, read `get_goal` and reuse a compatible active Goal this chat owns. Create one only when an explicit user request or system or developer instruction permits it (never the mandate, Full autonomy, this skill or a launch prompt), no unfinished Goal blocks it, and mandate, gates and ownership allow it. Set `token_budget` only on explicit request, never renewed. Otherwise deliver without a Goal and never ask for one. Leave unrelated Goals alone; never reuse or evade a paused, blocked or budget-limited Goal through another Goal, actor or turn. The objective is the whole Brief outcome in this boundary with its proof and Brief and contract references, never a gate or task subset; record it and its permission source in the journal header. On resume, refresh and reconcile it; it grants no effect and repeats no gate question. Set `paused` only on the user's explicit pause, `blocked` only after one impasse for three consecutive genuine Goal turns (polls are not turns; a user resume restarts the count); report token usage at completion if budgeted. A native Goal is completed by its actual owner only when that Goal's whole objective is achieved, never merely to replace it. Children and successors never create, change or inherit it; reconcile it before replacement and on a user-mandate change.
