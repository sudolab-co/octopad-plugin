# Delivery

## Start or resume

1. Read the stream's latest update, the tasks with their status and comments, and the target's state.
2. If the latest update says another supervisor runs this delivery, or tasks this session did not start are in progress, ask the user before you take over.
3. One supervisor runs the whole plan, even across several streams. On each, post one stream update with `work_streams` `set_status`: in `line`, that you supervise from this date, naming your session and runtime; in `note`, the mandate ([Record the mandate](planning.md#record-the-mandate)).
4. Do what your runtime profile asks of a starting supervisor.

Under the Step 3 banner, give one progress line in everyday words, counted from the tasks' status in Octopad: `Progress: 2 of 9 tasks done, 1 in progress, 6 waiting · waiting for your review of the pricing page`.

## Run the tasks

Repeat until every task is done or no safe work remains:

1. **Pick** a ready task: prerequisites done, no placeholder, claimed by no one else. Set it `in_progress`.
2. **Brief** one fresh executor on the task's saved route for this runtime, with the [executor brief](#executor-brief), after rereading the task from Octopad. Give an executor without Octopad access the task's attached files at a path it can read.
3. **Check** its report: confirm the decisive checks on the exact commit or result from a source the executor did not write (hosted results, or one rerun), and that any review the `Review` line names came back with each finding handled.
4. **Close** each subtask once its commit is in the branch, then push and open the pull request as the mandate allows; close the task once `Done when` holds. Write the spec or record changes the executor returned; a change that waits for a later event, such as a release reaching production, first gets its own task, as the `octopad-planning-and-work-design` skill (section "Shaping the work") says. Add one short comment: the checks, the pull request or commit, the review outcome, any decision taken.

- When a defect or finding can recur in other open tasks, add the rule and the failing case to their briefs before dispatch, and send it to the running executors it reaches. When the plan lacks the rule itself, first [fix the plan](#fix-the-plan) for all affected tasks at once.
- Run tasks in parallel only when their writes are proved independent: different files and outputs, separate workspaces. Never parallelize migrations, shared generated files, or tasks where one shapes the other.
- When parallel full test suites or builds could saturate one machine, executors run only their targeted checks and you run the full checks on each head, brought up to date with its base, in turn before its pull request. To check for a running suite, match processes by pattern and print only their IDs and names.
- To wait for an agent or a check, end your turn only where your runtime wakes you; otherwise wait in the foreground. A message that says "in progress" and stops is a stall.

## Fix problems

- **The work fails its checks:** launch a fresh executor with the current result and the failure, on the route's `on failed checks` part when it has one.
- **A service fails** (timeouts, saturation, quota): stop the affected calls, note it on the task, continue independent work, and resume once the service is healthy.
- **A usage limit hits one model:** run that work on its saved route in the other runtime, or hold it until the limit resets. Spend money only when the mandate covers it.
- **An effect's outcome is uncertain** (a timeout after a push or a send): check the target, and retry only when it shows the effect absent.
- You perform the protected effects executors return, which is not task work. Before each, reread the task, the mandate and the target: they must allow exactly this effect now.

### Fix the plan

When a task's meaning, dependencies or checks are wrong, context is missing or a shared choice is unsettled:
- Note the defect on its task and hold only the tasks it affects.
- Launch one planner sub-agent at your profile's plan repair route, with the affected tasks and their `Done when`, the failure and its evidence, and the mandate. Tell it to read planning.md's "Draft the plan" and "Changes", and to call no Octopad tool. It returns a diagnosis and the full text of each changed or new task, both routes and `Review` included, or the exact obstacle; it dispatches no one and cannot widen the mandate.
- When the returned text changes a task's meaning, dependencies, checks, effects or review, launch one fresh reviewer on it at your profile's plan review route, read-only and told to call no Octopad tool, with the affected tasks as saved, the failure and the mandate ([Changes](planning.md#changes)). Fix each real defect in the text before you write it.
- Write the repair, reread it as saved, then resume.

## Executor brief

Send no history from other tasks, and keep only the bracketed block that matches the task's `Octopad` line.

```text
Deliver one Octopad task: <task title>.
Octopad: <organization and its ID> / <workspace> / <stream>.
Model and effort: <saved route>: <how this launch sets them, such as `pinned by your lane definition`>.
Review: <none; or one reviewer at <route for this runtime>, attacking <focus>>.
Mandate: <the effects and targets this task may perform, and the limits>.
Working judgment (only when no Octopad sub-agent hook runs): <the methodology's Working principles, verbatim>.
Human gates not yet cleared: <relevant ones, or none>.
Computer Use: <accepted targets and actions with their source, or not authorized>.
Full checks: <only when the supervisor runs them: "Run only your targeted checks.">

[Octopad: yes] Read this task in Octopad, in the organization and workspace above. Its Done when, verbatim: <Done when>. Your access: <the task's Octopad line>.
[Octopad: no] Do not call Octopad. Your task, verbatim:
<description without its Exec and Octopad lines>

How you work:
- Installed skills and hooks apply; the target's rules are a floor. Act only within the mandate: approve nothing, close no task, and return any protected effect to the supervisor.
- Keep each tool result under about 2,000 tokens: search before reading, and send test and build output to a log file, printing only the status, totals and failures.
- Build the units in order, one commit each, and commit before you return. Run Verify; return a long external wait, such as hosted CI, instead of waiting on it.
- If Review names a reviewer, launch it once Verify passes on your committed head: fresh, read-only, in the foreground, with the task, base and head, your checks with their output, the target's rules, and "Do not call Octopad." Fix each real defect in the task, test first, or say how you checked where no test can. Ask for no second review and launch no other agent. Return defects outside the task with their evidence.
- After two failed fix cycles, stop and report why.
- After a compaction, stay this task's executor in this session. Before your next effect, reread this brief, the target's rules and the current work, uncommitted changes included; with Octopad access, call start_session first. A summary never supplies consent or turns an unrun check into a pass: ask the supervisor for what is missing. Then continue, with no new executor or review.

Report: the commit or result, the checks and their outcome, the review verdict and each finding's handling, decisions, blockers, missing context, user-facing strings, and the exact text of any spec or record change the task needs. For long evidence, give a command or a lasting path, not a paste.
```

## Finish

- The delivery is done when every task is closed with its proof and every checkpoint has the user's go. Before you say no work remains, name what each open task waits on.
- Publish the final recap with the labels of [What the user reads](../SKILL.md#what-the-user-reads), naming each remaining item by its task, and post a stream update saying the delivery finished and what remains.
- Remove what the run left on the machine that serves nothing now: locks, caches, temporary copies, worktrees and local branches with no unmerged work. Keep deliverables and anything a record cites.

## Stop or hand over

Replace a supervisor only when it cannot continue after recovery, the host forces it, or the user asks. Return work to direct collaboration only when the user asks.

1. Stop dispatching; collect or stop running executors and background commands.
2. Check each uncertain effect, and write the current state on the tasks.
3. Post a stream update saying this supervisor stopped, and why.
4. For a successor, launch it as your profile says, or give the user the pointer from [Launch](planning.md#launch). The successor checks that you stopped before it acts.
