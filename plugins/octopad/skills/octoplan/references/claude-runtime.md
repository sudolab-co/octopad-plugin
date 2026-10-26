# Claude runtime

## Routes and enforcement

When planning in Claude, check exact models, efforts and agent definitions before saving routes; from Codex, Claude checks them before launch. Use this rubric when available; a different model set requires an explicit recorded mapping in planning, never silent substitution.

| Remaining task judgment | Declared route |
|---|---|
| Mechanical or small bounded execution: every choice settled in the task, little local judgment, runnable acceptance checks that prove the result | `Sonnet 5.5 · high, Opus 5.5 · medium on failed checks` |
| Bounded execution with settled choices, real local judgment and runnable acceptance checks that prove the result; hard document, open-design and audit work take their own rows | `Opus 5.5 · medium, high on failed checks` |
| Bounded code, configuration or command-line work with unresolved judgment or weak checks, including cross-file coordination and consequential changes | `Opus 5.5 · high` |
| Hard bounded document or knowledge work, including cross-document coordination; a mixed task takes this row when its document part is the hard one | `Opus 5.5 · xhigh` |
| Open design or uncertain long-horizon approach | `Fable 5.1 · xhigh`, subject to the conditions below; otherwise `Opus 5.5 · xhigh` |
| Broad read-only audit or exhaustive verification | `Opus 5.5 · xhigh`; separate `/effort ultracode` only on explicit opt-in |

The default lane set is `Sonnet 5.5 · high`, `Opus 5.5 · medium`, `Opus 5.5 · high`, `Opus 5.5 · xhigh`, `Opus 5.5 · max`, `Fable 5.1 · xhigh`. `low` is not recommended. Code, configuration and command-line delivery stops at `high`. Among workers, `xhigh` goes to the hard document, open-design and broad-audit rows above, where more checking finds more; any other worker gets it only with a recorded reason, such as `high` having proved insufficient on that task. Plan composition and a repair that changes outcome, effects, shared choices or proof use the open-design row; a repair that only re-cuts or re-routes reviewed work uses `Opus 5.5 · high`. `max` needs a recorded reason: `xhigh` proved insufficient, or explicitly unconstrained work justifies it. Give `xhigh` and `max` routes a large output budget, and never raise effort only because the model changed.

Every Fable recommendation requires availability and explicit acceptance of data-retention terms. The saved condition is mandatory 30-day retention; verify current terms. If either fails, recommend compatible Opus and record a saved-route change through planning before launch. A recommendation is not data-handling consent. A route that needs acceptance, such as Fable's, is saved only once its conditions hold; otherwise save its profile's fallback.

Check actual support before recommending `/effort ultracode`, preserve explicit opt-in, and save native effort separately. Never save `effort: ultra` or enable a workflow to bypass the ordinary ownership and authority rules.

A read-only lookup that a supervisor or planner delegates, whose every returned item it can confirm by opening the cited path and line, may run on `Haiku 5.5 · high`, only when a runnable check of correctness and completeness was defined before the route is chosen. It is not a saved task route, never applies to a task, a deliverable or a review, and it lowers no review route or floor.

On manual launches, exact model and effort are binding settings the user sets. On supervised launches, inspect existing lane definitions that pin model and effort together: this plugin ships one per default lane, named under its plugin prefix, such as `octopad:octoplan-opus-high`, and the environment may define others. Dispatch the lane matching the saved Claude route. Do not create or alter lane definitions as an incidental planning step. If no matching lane exists, pass the exact model and effort on the launch call where it accepts them. Where it can set only model, pass that exact model and make effort an explicit request in the worker prompt: `requested, not enforced: this launch call cannot set it — run at it if you can; if you cannot, say so in your status line`. With a matching lane use `pinned by your lane definition`. Explain the request-only limit once per run; never claim observed effort from a prompt. Positive route mismatch or unavailable model pauses the affected actor.

Claude reviews run on Opus 5.5, whatever the worker's model: `high` for a light review, `xhigh` for a heavy one ([supervision.md](supervision.md)); a saved Claude review route stronger than its level is lowered only through a recorded Plan update. The supervisor runs at `Opus 5.5 · high`: executors and reviewers run in their own lanes, so a stronger worker or review route never raises the supervisor's effort. Common review and upstream-premise floors apply.

## Runtime facts

Re-measure these when the harness changes.

- The main session is the only actor the harness wakes: a background agent's completion and its `SendMessage` land there, never in the subagent that spawned it. So the supervisor runs as a main session and launches executors as its background subagents; an executor launches its reviewers in the foreground and waits for them in its own turn.
- `Haiku 5.5` requires Claude Code 2.1.293 or later; below that the model is rejected as unrecognized and the request falls back to another model.
- A subagent launched with the Agent tool can itself launch subagents. Concurrent subagents are capped across the session, reviewers included; a launch over the cap fails with `Concurrent subagent limit reached`; do not retry it, so size dispatch below the current cap, or ask the user to raise it (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`). `SendMessage` resumes a completed agent from its transcript.
- `ListAgents` reports a stopped agent as `killed` or `completed`; that listing is the cessation proof for a worker. An agent stopped with `TaskStop` takes its in-process children with it; still inspect the target for half-written artifacts.
- The desktop app can report the context fill of the current session, and of another session by id. The terminal exposes no such reading.
- Claude starts a new top-level session only through a native session-launch tool. When none is exposed, the user opens the session from a pointer block.
- A session started with a native session-launch tool reports each turn end to its starter until detached; one that shares its starter's checkout cannot be detached. A start may not apply the requested effort; session metadata shows the effort and whether the session is running, and effort can be set after the start.
- The app documents that it refuses a start on a turn begun by another session's message or an automated event, where the agent can only propose the session; a started session can therefore start one only on a turn its user began.

## Launch the supervisor

The supervisor is a fresh top-level session at the saved supervisor route, never a subagent of the planner. In a repository, it starts in its own worktree, never in its starter's checkout, and references durable state by absolute path. The user talks to it directly. It follows common supervision, running each task through one executor as below, and starts no session but its successor. Check the supervisor route and lane definitions before promising delivery.

After the reviewed Plan is visible and authority holds, the planner launches one supervisor per approved disjoint boundary. If a native session-launch tool is exposed, it starts the session with the supervisor pointer, reads the started session's model and effort where its metadata shows them and sets any that differs (a supervisor whose route still differs pauses), detaches it, and records both session identities in the journal header; this first launch has no predecessor to stop. Otherwise it ends its turn with the supervisor pointer block and settings line from [continuation.md](continuation.md), one per boundary, and one plain sentence telling the user to open a new session with it. The Plan summary names any manual launch and states that a successor session may wait for the user to open it. The planner does no delivery work after launch and answers nothing but a plan defect. The supervisor reads current state and claims guarded current supervision in the journal.

A plan defect goes to the planner session recorded in the journal when it is open, not running, below the handoff limit by its context reading, and messaging can notify the supervisor when it goes idle; otherwise to a bounded planner subagent the supervisor starts. The route is chosen once per defect. The supervisor records the defect on the affected task, holds only that branch and sends the defect only to the chosen planner, requesting the idle notice for the session route; either planner repairs it under planning's change rule within its turn, its helpers in the foreground; the planner session records the repair and replies, a subagent returns it. If the planner session goes idle without recording the repair, the branch stays held and the supervisor reports it as a blocker. The supervisor sends the planner nothing but plan defects.

No parent relay remains after launch, so the shared relay duties map as follows: each supervisor answers the user and returns closure proof and the final recap in its own session.

For multiple streams, separate supervisor sessions coordinate through Octopad: each rereads dependency state there at every task boundary, and the user relays a decision only one of them can receive.

## Run each task through one executor

The supervisor keeps its context for coordination. For each task it picks under Pick in [supervision.md](supervision.md), it launches one executor in the background: the lane matching the task's saved Claude route, briefed with the [worker prompt](supervision.md#worker-prompt), with worktree isolation when another writer runs in the same repository. Where the desktop is open, the supervisor's report keeps that task in `working` with a line naming its executor and refreshes it at each receipt. The executor launches each fresh reviewer in the foreground at the lane matching the task's Review route, waits for it in its own turn, and, where [SKILL.md](../SKILL.md) calls for a targeted recheck, launches one fresh foreground reviewer for it with the previous findings and the fix diff. It never resumes an actor with `SendMessage`, whose result would land in the supervisor's session instead. It returns a short receipt: branch and head, checks with their output, each review verdict with every finding's disposition, and anything it stopped at.

## Wait without spending context

For the supervisor's internal wait on executors or checks, once no other safe ready work remains, end the turn on something the harness wakes the main session for: a background agent, or a background command that exits when its condition holds. For pull-request checks, that command exits when every check is terminal, success and failure alike. On waking, reconcile a failed command and the current PR head before acting on the result. When every remaining wait is a person's, end the turn on a background command that exits when one of those waits changes state where it can be read, such as a pull request merging or a task changing status, then reconcile that change, including a task closed by someone else.

## Hand off at the limit

The supervisor reads its context before each dispatch and after each receipt.

To hand off: stop dispatch, collect or stop in-flight executors and background commands, reconcile uncertain effects and persist state per [recovery.md](recovery.md), then record the release in the journal. Where a session-launch tool is exposed, this turn allows a start and the recorded mandate covers it, start the successor as the planner did and record its identity in the journal header. Otherwise propose the session where the app allows it, or emit the supervisor pointer block and settings line, with one plain sentence telling the user that delivery waits until they open it, and, where only a proposal was possible, that their next message to this session lets it start the successor. Then end the turn. A released supervisor does no delivery work. While its successor is pending, on the user's next message it reconciles their current instructions and starts the successor as above if the recorded authority still covers it; otherwise it names its successor and stops.

Cessation proof here: the journal shows the release, no actor remains in flight, and the predecessor session is not running by its metadata, which the successor rereads after its own first reads, since the turn that started it may still be open; when status cannot be read, the user confirms that the previous session has stopped, and until then the boundary waits. The user can ask for a handoff at any time.
