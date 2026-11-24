# Claude runtime

## Routes

Check the exact models, efforts and lane agents available before you save or launch routes. A different model set needs a mapping recorded in the plan, never a silent substitution.

| Judgment left after preparation | Route | Review |
|---|---|---|
| Every choice settled, little local judgment; checks prove the result | `Sonnet 5.5 · high, Opus 5.5 · medium on failed checks` | none |
| Choices settled, real local judgment; checks prove the result | `Opus 5.5 · medium, high on failed checks` | none |
| Code or configuration with unresolved judgment or weak checks | `Opus 5.5 · high` | one |
| Hard document or knowledge work | `Opus 5.5 · xhigh` | one |
| Open design, uncertain approach | `Fable 5.2 · xhigh` when its conditions hold, else `Opus 5.5 · xhigh` | one |
| Broad read-only audit | `Opus 5.5 · xhigh` | one |

- Start from the first row that fits. A higher route names the judgment that rules out each cheaper row, such as a choice left open or a result its checks cannot prove; size alone raises none.
- Code work stops at `high`. `xhigh` outside the last three rows, and any `max`, need a recorded reason, such as `high` having failed on that task. `/effort ultracode` only on the user's explicit opt-in, never saved as an effort.
- Fable needs availability and the user's explicit acceptance of its data-retention terms (30 days at the last check); otherwise save Opus.
- Planner, and a plan repair that changes outcome, effects or checks: the open-design row. Other repairs: `Opus 5.5 · high`. Supervisor: `Opus 5.5 · high`. Reviewer: `Opus 5.5 · xhigh` for the plan and for a change that cannot be undone, else `Opus 5.5 · high`.
- Dispatch the plugin's lane agent matching the route, such as `octopad:octoplan-opus-high`, which pins model and effort; never create or change one while planning. With no match, pass model and effort on the launch call; where it takes only the model, write in the brief: `effort requested, not enforced: say so if you cannot run at it`.
- A lane pins a family, not a version. A newer version is the saved route: note it once in the task's closing comment and check Fable's conditions against it. An older version, another family or another effort pauses that agent.

## Runtime facts

Measured in Claude Code; measure again when the harness changes.

- The harness wakes only the main session: a background agent's completion and its `SendMessage` land there. So the supervisor is a main session with executors as background sub-agents, and an executor runs its reviewer in the foreground and never uses `SendMessage`.
- Concurrent sub-agents are capped across the session, reviewers included. Over the cap a launch fails with `Concurrent subagent limit reached`: do not retry; dispatch below the cap, or ask the user to raise `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`.
- An isolated agent's worktree is removed when the agent ends without changing it (measured 2026-11-13). Results it does not commit go to a path outside the worktree that its brief names; a code executor commits before it returns.
- A top-level session starts only through a native session-launch tool, and reports each turn end to its starter until detached. A start may not apply the requested effort: read the metadata and set it after. The app refuses a start on a turn begun by another session's message or an automated event: there the agent can only propose the session.
- Where the `ccd_pr` tools exist, the desktop app binds each pull request a session opens to it. With the user's auto-archive setting on, merging or closing a bound pull request archives the session and stops it, and nothing wakes it (measured 2026-11-16). `set_monitor` with `auto_archive_on_close: false`, set before any binding, holds for every later one (measured 2026-11-18).

## Launch the supervisor

Before you propose the launch:
- Read the auto-compact value for the supervisor's model (such as `claude-opus-5-5`) in `~/.claude/settings.json`: `modelSettings.<model id>.autoCompactWindow`, else the top-level `autoCompactWindow`. Read only those keys, for example with `jq '.modelSettings["<model id>"].autoCompactWindow // .autoCompactWindow' ~/.claude/settings.json`.
- When it is above about 400,000 tokens, absent or unreadable, say in the launch proposal that an Octoplan works best with compaction near 400,000 tokens, because the supervisor runs continuously, and name the setting: `/autocompact 400000`, or the launch option `--autocompact`. Change no setting.
- Where the `ccd_pr` tools exist, say that the supervisor will turn off auto-archive for its own session, and that Claude Code may ask the user to approve that call.

With a session-launch tool, start the supervisor with the [pointer](planning.md#launch) at `Opus 5.5 · high`, in its own worktree for a repository; check its metadata, set any setting that differs, and detach it. Without one, or when the app refuses, give the pointer.

The supervisor's first action, before any pull request: `set_monitor` with `auto_archive_on_close: false`, checked with `get_status`. The launch agreement covers it; never change the user's account setting. If the switch stays on, tell the user at once that the first merge will stop delivery unless they turn auto-archive off.

## Run and wait

- Launch each executor in the background on the lane matching the task's Claude route, with worktree isolation when another writer works in the same repository. With the desktop open, the report shows the task `working` with its executor.
- A plan repair runs as a planner sub-agent; once it returns, you launch its reviewer in the foreground ([Fix the plan](supervision.md#fix-the-plan)).
- With no other safe work, end the turn on what wakes the main session: a background agent, or a background command that exits when its condition holds, such as every pull-request check finished, or a person's wait changing (a merge, a task's status). On waking, check the result and the current head before you act.
- To replace the supervisor, with a session-launch tool and a mandate that covers it, start the successor as the planner did; otherwise propose the session where the app allows it, or give the pointer. The successor checks the previous session's metadata, or the user's word, that it no longer runs.
