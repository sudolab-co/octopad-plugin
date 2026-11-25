# Codex runtime

## Routes

Put the cost of an accepted result before elapsed time. Choose the effort from the judgment left after preparation, never through a ladder of attempts.

| Executor: judgment left after preparation | Route | Review |
|---|---|---|
| Settled choices; checks prove the result. Consider it first, substantial implementation included | `gpt-6-luna · xhigh, gpt-6.1-sol · high on failed checks` | none |
| Settled choices, real local judgment; checks prove the result | `gpt-6.1-sol · high` | none |
| A bounded choice left open, reliable checks | `gpt-6.1-sol · high` | one |
| Several unresolved reasoning steps, architecture design or a broad audit | `gpt-6.1-sol · xhigh` | one |
| Weak checks or high consequences; particularly hard reasoning | `gpt-6.1-sol · max` | one |

Planner, and plan repair: `gpt-6.1-sol · xhigh`, or `max` with a reason. Supervisor: `gpt-6.1-sol · high`. Reviewer: `gpt-6.1-sol · max` for the plan and for a change that cannot be undone, else `gpt-6.1-sol · high`.

Astra (`gpt-6-astra`), unless the user chose it, serves only a bounded intervention on a particularly difficult scientific problem (tool-assisted research, specialist physics), on hard spatial or 3D reasoning under coupled geometric constraints (a provisional hypothesis, not a proven ranking), or on a reasoning failure that persists after Sol `max` with complete inputs and working tools; never on missing access, a broken configuration or an incomplete brief. Record the problem and why its benefit justifies its cost: a domain label proves nothing. Save it at `high`, `xhigh` with a reason, `max` only on a diagnosis that the lower effort fails. Sol stays the supervisor.

- A user's explicit choice of an available model wins over these defaults. A saved route keeps its exact model and effort, older IDs included: defaults never reroute a running agent or an existing plan. An unavailable model holds only its agent.
- Where native metadata shows an agent's model and effort, a mismatch with its route, or with its part of an `on failed checks` route, pauses that agent. Where it shows none, continue and say so once in the task's closing comment.

## Native work

- Create executors, reviewers and planner helpers with `collaboration.spawn_agent`, `fork_turns: "none"`, and the saved model and effort.
- Batch independent reads in one `functions.exec` call with `Promise.allSettled`, and inspect every result. Await every started command before ending the turn.
- Ask with `request_user_input_async` where exposed and allowed; otherwise ask in chat.
- Local, cloud and remote sessions do not share capabilities: move work only where its sources, rules and checks are proved present. Computer Use cannot control ChatGPT itself.

## Launch the supervisor

The supervisor is a separate native chat the user can open, and launches executors itself. `create_thread` needs the user's explicit request for a new chat and, for its `model` field, an explicit model choice: the user's acceptance of the proposed chat with its model and effort covers both; Full autonomy or a saved route alone covers neither. So the launch proposal names them, and how the user follows the delivery there. Give no compaction advice.

1. If a supervisor chat already runs this delivery, resume it; never create a second.
2. For repository work, call `list_projects` and use the matching project; otherwise go projectless. Keep the `local` destination unless the user asks for `worktree`. Parallel repository executors need separate checkouts.
3. Create the chat at the accepted model and effort with the [pointer](planning.md#launch). A returned `clientThreadId` is pending: resolve the real `threadId` through native status.
4. Use `wait_threads` to see the supervisor's first report, then give the user the chat link and stop.

## In the supervisor chat

- Collect agents with `collaboration.wait_agent`, resolve uncertain state with `list_agents`, and use `send_message` for running agents and `followup_task` for resumable ones. An ended agent turn is not a finished task.
- Where an executor cannot launch its reviewer, launch it yourself and pass the findings to the executor with `followup_task`.
- End a turn with agents running only where native wake-up is demonstrated; otherwise wait in the active turn. Add no loop, hook or scheduler.
- Create a native Goal only on the user's explicit request, with no token budget unasked. Its objective is the whole delivery with its proof; executors never create one.
- After a compaction, continue in the same chat.
- Replace a supervisor automatically only when a native mechanism proves the previous one stopped; otherwise give the pointer and end. Never wake a stopped supervisor.
