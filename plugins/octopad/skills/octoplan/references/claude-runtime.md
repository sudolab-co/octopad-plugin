# Claude runtime

Read its Routes and enforcement section when choosing Claude routes from either runtime; load the rest only in Claude. Apply common [planning](planning.md), [supervision](supervision.md) and [recovery](recovery.md); this profile adds Claude routes and capability checks, assuming no Codex tools or Goals.

## Routes and enforcement

When planning in Claude, check exact models, efforts and agent definitions before saving routes; from Codex, Claude checks them before launch. Use this rubric when available; a different model set requires an explicit recorded mapping in planning, never silent substitution.

| Remaining task judgment | Declared route |
|---|---|
| Bounded execution with settled choices and runnable acceptance checks that prove the result, mechanical copy included; hard document, open-design and audit work take their own rows | `Opus 5.5 · medium, high on failed checks` |
| Bounded code, configuration or command-line work with unresolved judgment or weak checks, including cross-file coordination and consequential changes | `Opus 5.5 · high` |
| Hard bounded document or knowledge work, including cross-document coordination; a mixed task takes this row when its document part is the hard one | `Opus 5.5 · xhigh` |
| Open design or uncertain long-horizon approach | `Fable 5.1 · xhigh`, subject to the conditions below; otherwise `Opus 5.5 · xhigh` |
| Broad read-only audit or exhaustive verification | `Opus 5.5 · xhigh`; separate `/effort ultracode` only on explicit opt-in |

The default lane set is `Opus 5.5 · medium`, `Opus 5.5 · high`, `Opus 5.5 · xhigh`, `Opus 5.5 · max`, `Fable 5.1 · xhigh`. These are declared routing policies, not price rankings. Sonnet is no longer a default route. `low` is not recommended, and `medium` serves checkable bounded work. Code, configuration and command-line delivery stops at `high`. `xhigh` goes to reviews and to the hard document, open-design and broad-audit rows above, where more checking finds more; any other worker gets it only with a recorded reason, such as `high` having proved insufficient on that task. Plan composition and plan repair beyond a wording fix use the open-design row. `max` needs a recorded reason: `xhigh` proved insufficient, or explicitly unconstrained work justifies it. Give `xhigh` and `max` routes a large output budget, and never raise effort only because the model changed.

Every Fable recommendation requires availability and explicit acceptance of data-retention terms. The saved condition is mandatory 30-day retention; verify current terms. If either fails, recommend compatible Opus and record a saved-route change through planning before launch. A recommendation is not data-handling consent.

`ultra`/`ultracode` is not a native effort above `max`. The declared `/effort ultracode` session mode combines `xhigh` with workflow orchestration; the prompt keyword requests a workflow at the session's effort. Check actual support before recommending it, preserve explicit opt-in, and save native effort separately. Never save `effort: ultra` or enable a workflow to bypass the ordinary ownership and authority rules.

On manual launches, exact model and effort are binding settings the user sets. On supervised launches, inspect existing lane definitions that pin model and effort together, such as the environment's agent definitions. Dispatch the lane matching the saved Claude route. Do not create or alter lane definitions as an incidental planning step. If no matching lane exists and the exposed launch call can set only model, pass that exact model and make effort an explicit request in the worker prompt: `requested, not enforced: this launch call cannot set it — run at it if you can; if you cannot, say so in your status line`. With a matching lane use `pinned by your lane definition`. Explain the request-only limit once per run; never claim observed effort from a prompt. Positive route mismatch or unavailable model pauses the affected actor.

Preserve saved routes, including earlier exceptions and lane requests, as floors; do not normalize them to defaults. A substitution, an unavailable model and any mismatch keep the rules above. `Opus 5.5 · medium, high on failed checks` is one saved route: when the work itself fails its acceptance checks, the supervisor records it and, once the medium worker has stopped, dispatches one `high` continuation from the reconciled artifact with the same brief, instead of returning the defect to that worker; plan and infrastructure failures follow recovery. Both attempts count toward recovery's two-cycle trigger, and the supervisor floor counts the `high` attempt. Any other escalation requires diagnosis, planning and affected review before replacement, never weakening or silent substitution. Review uses the Claude worker route's model at `xhigh`, retaining stronger saved Claude review routes; the supervisor supports at least the strongest saved Claude worker route. Select the planner against actual judgment using this rubric. Common review and upstream-premise floors apply.

## Runtime facts

Re-measure these when the harness changes.

- The main session is the only actor the harness wakes: a background agent's completion and its `SendMessage` land there, never in the subagent that spawned it. A subagent that ends its turn is not woken when its own children finish. So the supervisor runs as a main session; its batch leads run as its background subagents and launch workers and reviewers in the foreground.
- A subagent launched with the Agent tool can itself launch subagents, and `SendMessage` resumes a completed agent from its transcript.
- `ListAgents` reports a stopped agent as `killed` or `completed`; that listing is the cessation proof for a worker. An agent stopped with `TaskStop` takes its in-process children with it; still inspect the target for half-written artifacts.
- The desktop app can report the context fill of the current session, and of another session by id. The terminal exposes no such reading.
- Claude starts a new top-level session only through a native session-launch tool. When none is exposed, the user opens the session from a pointer block.
- A session started with a native session-launch tool reports each turn end to its starter until detached. A start may not apply the requested effort; session metadata shows the effort and whether the session is running, and effort can be set after the start.
- The app documents that it refuses a start on a turn begun by another session's message or an automated event, where the agent can only propose the session; a started session can therefore start one only on a turn its user began.

## Launch the supervisor

The supervisor is a fresh top-level session at the saved supervisor route, never a subagent of the planner and never a full-history fork. The user talks to it directly. It follows common supervision through batch leads, below, and starts no session but its successor. Check the supervisor route and lane definitions before promising delivery.

After the reviewed Plan is visible and authority holds, the planner launches one supervisor per approved disjoint boundary. If a native session-launch tool is exposed, it starts the session with the supervisor pointer, reads the started session's model and effort where its metadata shows them and sets any that differs (a supervisor whose route still differs pauses), detaches it, and records both session identities in the journal header; this first launch has no predecessor to stop. Otherwise it ends its turn with the supervisor pointer block and settings line from [continuation.md](continuation.md), one per boundary, and one plain sentence telling the user to open a new session with it. The Plan summary names any manual launch and states that a successor session may wait for the user to open it. The planner does no delivery work after launch and answers nothing but a plan defect. The supervisor reads current state and claims guarded current supervision in the journal.

A plan defect goes to the planner session recorded in the journal when it is open, not running, below the handoff limit by its context reading, and messaging can notify the supervisor when it goes idle; otherwise to a bounded planner subagent the supervisor starts. The route is chosen once per defect. The supervisor records the defect on the affected task, holds only that branch and sends the defect only to the chosen planner, requesting the idle notice for the session route; either planner repairs and reviews it within its turn, its helpers in the foreground; the planner session records the repair and replies, a subagent returns it. If the planner session goes idle without recording the repair, the branch stays held and the supervisor reports it as a blocker. The supervisor sends the planner nothing but plan defects; a technical question never goes to the user.

No parent relay remains after launch, so the shared relay duties map as follows: each supervisor answers the user and returns closure proof and the final recap in its own session; and the Plan names one supervisor as the cross-stream change coordinator.

Use the common worker mandate, including for workers without Octopad; task text never grants authority and uncovered effects never convert Full autonomy into Checkpoints. Dispatch parallel workers that write to the same repository with worktree isolation on the Agent call, so each works in its own checkout.

For multiple streams, apply [multi-stream.md](multi-stream.md). Default to one supervisor session. Several need every condition there, including worker and reviewer capacity, plus one pointer block each. Separate supervisor sessions coordinate through Octopad: each rereads dependency state there at every task boundary, and the user relays a decision only one of them can receive. The designated cross-stream coordinator routes bounded repair to a suitable planner without taking another owner's work.

## Run each batch through a batch lead

The supervisor session keeps its context for coordination. It picks a batch of ready tasks, sets them in progress and starts a fresh batch lead for them in the background: a subagent at the supervisor route, granted Octopad reads of the journal, contract and those tasks, and writes of receipts and working pages on those tasks only, briefed with the mandate and gates. The batch lead runs Route, Collect and Review from Phase 4 of [supervision.md](supervision.md) for those tasks: it launches workers and reviewers in the foreground, waits for them in its turn, preserves their answers and records receipts. It returns a short receipt per task: proof links, findings with proposed dispositions, and anything it stopped at. It closes no task, clears no gate, changes no supervision record and starts no session or other batch lead; it stops at any protected effect, checkpoint, user question, plan defect or long external wait and returns it.

The supervisor validates each receipt against the task's records, closes or returns each task, and refreshes the frontier before dependent work; it handles what was returned, the user and the handoff itself. Batches run in parallel only when their write surfaces are independent, as workers do. Size a batch to end well within its lead's context; one that grows heavy returns at the next task boundary with what remains.

## Wait without spending context

For an internal wait on workers, reviewers or checks, once no other safe ready work remains, end the turn on something the harness wakes the main session for: a background agent, or a background command that exits when its condition holds. For pull-request checks, that command exits when every check is terminal, success and failure alike. On waking, reconcile a failed command and the current PR head before acting on the result. Where background wake-up is unavailable, wait in the active turn per [supervision.md](supervision.md). The outcome, a human gate and a handoff end the turn under common supervision. Never end on "in progress" otherwise.

## Hand off at the limit

The supervisor reads its context before each batch and after each receipt, and hands off under the limit in [supervision.md](supervision.md) Phase 6.

To hand off: stop dispatch, collect or stop in-flight batch leads and background commands, reconcile uncertain effects and persist state per [recovery.md](recovery.md), then record the release in the journal with the current `expected_updated_at`. Where a session-launch tool is exposed, this turn allows a start and the recorded mandate covers it, start the successor as the planner did and record its identity in the journal header. Otherwise propose the session where the app allows it, or emit the supervisor pointer block and settings line, with one plain sentence telling the user that delivery waits until they open it. Then end the turn; a released supervisor does no delivery work, and if woken it names its successor and stops.

Cessation proof here: the journal shows the release, no actor remains in flight, and the predecessor session is not running by its metadata; when status cannot be read, the user confirms that the previous session has stopped, and until then the boundary waits. The user can ask for a handoff at any time.
