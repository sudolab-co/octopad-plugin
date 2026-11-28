# Cursor runtime

## Routes

Cursor runs the saved Claude routes, reviewer and supervisor included, chosen under [claude-runtime.md](claude-runtime.md#routes); a plan names no Cursor route.

- Map a route to its model ID and bracketed effort: `Opus 5.5 · high` is `claude-opus-5-5[effort=high]`, `Sonnet 5.5` is `claude-sonnet-5-5`, `Fable 5.1` is `claude-fable-5-1`. The Fable 5.2 mapping is unverified: hold that agent until its mapping is known; use no older version instead.
- Cursor documents `low`, `medium`, `high` and `max`; `xhigh` on a Claude model and any effort on Fable were not observed. An effort the account rejects pauses that agent.
- Never run a route on a fast variant or a Cursor-only model (Composer, Grok, GPT, Gemini); a user's choice of one is a route change.
- Fable also needs its data-retention policy approved in the Cursor dashboard when Privacy Mode is on.
- Cursor may run another model without failing: when an admin blocks the model, when the plan lacks it, or on a legacy plan without Max Mode, where sub-agents run Composer. The task card shows which model ran; a mismatch pauses that agent. When you cannot read it, continue and say so once in the task's closing comment.
- Use a `cursor-agents/` lane only when its pinned model and effort match the saved route. The Task tool takes its bare name, such as `subagent_type: "octoplan-opus-high"`; check each lane's first task card. With no match, pass a verified route slug as `model`; after rejection, use a matching slug from the error, or pause that agent.

## Runtime facts

Read on 2026-11-04 from Cursor's documentation and plugins, not measured in a run; correct them from what a run shows.

- The Task tool launches sub-agents in the foreground or the background (`run_in_background`); `resume` with an agent ID and no `model` continues one.
- The main agent and its direct sub-agents can launch sub-agents; a sub-agent's sub-agent cannot.
- Sub-agents share the parent's checkout unless launched with isolation, and inherit its tools and MCP servers.
- Unknown: whether a background completion wakes an idle parent, how many sub-agents may run at once, and what survives Cursor's own compaction.
- No documented tool lets an agent start a top-level chat or message another chat.

## Launch, run and wait

- Give no compaction advice.
- The planner ends its turn with the [pointer](planning.md#launch) and asks the user to open a new Agent chat with it at `claude-opus-5-5[effort=high]`, for a repository in its own worktree (the Agents Window offers one; in the editor, begin with `/worktree`).
- Launch one executor per task on its lane, in an isolated worktree when another writer works in the same repository. Until a background completion has been seen to wake an idle supervisor in this Cursor version, use `run_in_background: false`, with independent executors in one message.
- Where an executor cannot launch its reviewer, launch it yourself and `resume` the executor without `model`, passing the findings.
- Wait for pull-request checks in the active turn on a command that exits once every check finished. When every wait is a person's, report and end the turn; the user's next message resumes the same chat.
- For a successor, give the pointer; the user confirms that the previous chat stopped.
