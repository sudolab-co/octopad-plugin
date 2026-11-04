# Cursor runtime

## Routes and enforcement

Cursor runs a task's saved Claude route; a Plan names no Cursor route. Choose, save and condition routes, including review routes, the supervisor route and Fable's conditions, under [claude-runtime.md](claude-runtime.md#routes-and-enforcement); this section says only how Cursor runs them.

A saved route becomes a Cursor model ID with its effort as a bracket parameter: `Sonnet 5.5` is `claude-sonnet-5-5`, `Opus 5.5` is `claude-opus-5-5`, `Fable 5.1` is `claude-fable-5-1`, `Haiku 5.5` is `claude-haiku-5-5`, so `Opus 5.5 · high` is `claude-opus-5-5[effort=high]`. Cursor's model pages name `low`, `medium`, `high` and `max` effort, and Cursor's own Advisor plugin pins `xhigh` (`grok-4.6[effort=xhigh]`); `xhigh` on a Claude model and any effort on Fable were not observed. An effort value the account rejects pauses that actor. Never run a saved route on a fast variant or on a model only Cursor offers (Composer, Grok, GPT-5.6, Gemini); a user's explicit choice of one is a route change through [planning.md](planning.md#changes). In Cursor, Fable's availability condition includes approving its data-retention policy in the Cursor dashboard when Privacy Mode is on.

Cursor runs a compatible model instead of the configured one, without failing, when a team admin blocks the model, the plan does not include it, or a legacy request-based plan lacks Max Mode, where subagents run Composer whatever their definition says. A definition or a launch request is therefore a declaration, not an observation. The subagent's task card shows which model ran; a supervisor that cannot read it continues with the declared route and records once, on the first affected receipt, that the model is not independently observable here. A positive mismatch, from the card or the user, pauses that actor.

On manual launches, exact model and effort are binding settings the user picks in the model picker. On supervised launches, dispatch the lane definition matching the saved Claude route: this plugin ships one per default lane in `cursor-agents/`, with the Claude lanes' names, each pinning model and effort in its `model:` line. The Task tool takes the lane's bare name, `subagent_type: "octoplan-opus-high"`; check the first task card of each lane in a run. Do not create or alter lane definitions as an incidental planning step. If no matching lane exists, pass the route on the Task tool's `model`, which takes a slug, not a definition's model ID: Cursor's plugins show `cursor-grok-4.6-xhigh` and `composer-2.5`, and the slug form for a Claude model was not observed. When the Task tool rejects a slug, read the valid slugs from its error and use the one with the saved family and effort; with none, that actor pauses, and no nearest slug stands in.

## Runtime facts

Read on 2026-11-04 from Cursor's documentation and from Cursor's own plugins (`github.com/cursor/plugins` at `bb68f23`); none was measured in a run. Re-measure these when Cursor changes, and correct this list from what a run shows.

- The Task tool launches subagents, in the foreground (the call returns the result) or in the background (the call returns at once). Its launch, as `advisor/skills/advisor/SKILL.md` writes it: `subagent_type` (a plugin agent's bare `name`), `model` (a slug), `description`, `run_in_background`, and `resume` with an agent ID. Background subagents write their output under `~/.cursor/subagents/`, which the parent can read.
- The main agent and its direct subagents can launch subagents; a subagent launched by a subagent cannot. Supervisor, executor and reviewer fit; a reviewer launches nothing.
- Each run returns an agent ID; `resume` with that ID, and no `model`, continues the subagent with its model and context, including a finished background subagent.
- Subagents share the parent's checkout unless the launch asks for isolation; an isolated subagent gets its own worktree and branch on the same machine, and its changes stay on that branch until merged.
- Subagents inherit the parent's tools, MCP servers included. A cloud subagent (`/in-cloud`) uses the team's MCP configuration instead; Octoplan does not use cloud subagents.
- A plugin's agent files take `model` with bracket effort, `readonly` and `is_background`: `advisor/agents/advisor-subagent.md` sets `model: grok-4.6[effort=xhigh]` and `readonly: true`; `cursor-team-kit/agents/ci-watcher.md` sets `model: fast` and `is_background: true`.
- Not documented or shown: whether a background subagent's completion starts a turn in an idle parent, and how many subagents may run at once.
- Cursor compacts a long chat on its own; the `preCompact` hook observes it and cannot block it. What survives compaction was not measured.
- No documented tool lets an agent start a top-level chat or message another chat. Cloud Agents and Projects start agents through Cursor's API or Agents Window, outside this profile.

## Launch the supervisor

The supervisor is a fresh top-level Agent chat at the saved supervisor route, never a subagent of the planner. The user talks to it directly. It follows common supervision, running each task through one executor as below.

After the reviewed Plan is visible and authority holds, the planner ends its turn with the supervisor pointer block and settings line from [continuation.md](continuation.md), one per approved disjoint boundary, and one plain sentence telling the user to open a new Agent chat with it at the route the settings line names; in a repository, also to start that chat in its own worktree (the Agents Window offers one; in the editor, begin it with `/worktree`). The Plan summary names this manual launch and states that a successor chat may also wait for the user to open it. The planner does no delivery work after launch and answers nothing but a plan defect. The supervisor reads current state and claims guarded current supervision in the journal.

For common [problem resolution](supervision.md#resolve-problems-within-the-mandate), use a bounded planner subagent, which runs its helpers, review included, in the foreground. If it returns no repair, use common problem resolution's handoff.

Each supervisor answers the user and returns closure proof and the final recap in its own chat. For multiple streams, separate supervisor chats coordinate through Octopad: each rereads dependency state there at every task boundary, and the user relays a decision only one of them can receive.

## Run each task through one executor

The supervisor keeps its context for coordination. For each task it picks under Pick in [supervision.md](supervision.md), it launches one executor: the lane matching the task's saved Claude route, briefed with the [worker prompt](supervision.md#worker-prompt), in an isolated worktree when another writer runs in the same repository. Launch executors in the background only once a background completion has been seen to start a turn in an idle supervisor in this Cursor version; until then launch them with `run_in_background: false`, independent ones in one message, so the turn collects them all.

The executor launches each fresh reviewer in the foreground at the lane matching the task's Review route and waits for it in its own turn; where [SKILL.md](../SKILL.md) calls for a targeted recheck, it launches one fresh foreground reviewer with the previous findings and the fix diff. Where the executor cannot launch a reviewer, the supervisor does and resumes that executor with `resume` and its agent ID, without `model`, passing the findings. The executor returns a short receipt: branch and head, checks with their output, each review verdict with every finding's disposition and anything it stopped at.

## Wait without spending context

Foreground subagents end inside the supervisor's turn. For pull-request checks, once no other safe ready work remains, wait in the active turn on a command that exits when every check is terminal, success and failure alike; on its exit, reconcile a failed command and the current PR head before acting on the result. Add no hook, loop or scheduler to wake a chat. When every remaining wait is a person's, report the evidence under common supervision and end the turn: the user's next message resumes the same chat, which reconciles what changed, including a task closed by someone else.

## Recover or replace a session

After compaction, the supervisor reloads the method and recovers in the same chat under [SKILL.md](../SKILL.md#after-a-compaction). Workers do the same through their worker prompt. Neither compaction nor context fill alone calls for a successor; use the steps below only for a necessary replacement or a user's handoff request.

To hand off: stop dispatch, collect in-flight subagents or confirm from their output that they stopped, reconcile uncertain effects and persist state per [recovery.md](recovery.md), then record the release in the journal. Emit the supervisor pointer block and settings line with one plain sentence telling the user that delivery waits until they open a new chat with it, then end the turn. A released supervisor does no delivery work; on the user's next message it names its successor and stops.

Cessation proof here: the journal shows the release, no subagent remains in flight, and the user confirms that the previous chat has stopped, since no tool reads another chat's state; until then the boundary waits. The user can ask for a handoff at any time.
