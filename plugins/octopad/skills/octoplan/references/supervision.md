# Octoplan supervision

## Contents

- Enter or resume
- Phase 4: advance the ready frontier
- Resolve problems within the mandate
- Worker prompt
- Proof and review
- Phase 5: reconcile change and interruption
- Phase 6: prove closure or hand off

## Enter or resume

- Before a takeover, apply [recovery.md](recovery.md).
- Native continuity objects belong to the runtime; they never replace Octopad authority.
- Projects and memory help retrieval; they never replace current Octopad state.

- Continue only while the Brief, review coverage, review floor, scope and effects match; compare drift as [planning.md](planning.md#phase-3-challenge-and-activate) and [records.md](records.md#guard-control-changes-and-preserve-review-binding) say.
- On withdrawn authority, an undisclosed or ambiguous effect, or unsupported saved state, pause the affected work and read [recovery.md](recovery.md).
- On resume, before dispatch, check the remaining work against the unit rules in [planning.md](planning.md#phase-2-compose-the-plan) (Phase 2, "Tasks and units"), and send nonconforming scope to the planner for a bounded repair under its [change rule](planning.md#changes), keeping completed work, task identities and valid authority.

- Before a spawn, an effect, a close or a gate clearance, check current ownership and authority.
- Receiving a message never expands a role's authority.

- In every message that reports delivery state or hands the user a decision, put one progress line in everyday words right under the `**Octoplan · Step 3 of 3: Delivery**` banner ([One visible program](../SKILL.md#one-visible-program)): `Progress: 2 of 51 tasks done, 1 in progress, 48 waiting · waiting for your review of the two pilots` for a graph, or `Progress: task 3 of 8 · writing the third spec` for a sequence. A short answer to a status question needs neither.
- Count the tasks from their current status in Octopad, never from memory. After the dot, say in a few words where the work stands and, when it waits, on whom.
- Keep the countable outcome unit and the kill question in the records and the consequence handoff, not in this line.
- With the desktop open, post delivery state there with `desktop` `report`, as [Run controls report](../SKILL.md#run-controls-report) says; chat keeps decisions and explanations.
- When behavior is the output, quote the observed behavior verbatim.
- Write what the user reads as [One visible program](../SKILL.md#one-visible-program) says, persist evidence, and use the [consequence handoff](#consequence-handoff) for every wait.

## Phase 4: advance the ready frontier

Repeat until the integrated outcome is proved or no safe work remains:

1. **Refresh.** Read intent, supervisor, reviewed revisions and lenses, ready graph, assignments, artifact versions, checks, effects, and gates.
2. **Pick.** After a compaction, first recover in the same session under [After a compaction](../SKILL.md#after-a-compaction). Choose a ready unassigned task whose prerequisite shared choices are settled and whose specification, units included, holds no placeholder, and set it `in_progress`. Never assign an executor another person's claimed task; record the conflict for reconciliation.
3. **Route.** Dispatch the task on its saved worker route for this runtime to one fresh executor, with sufficient bounded context and explicit effect coverage. The executor builds the task's units in order as commits on the task's branch, in one workspace, then runs the task's review and its fixes ([worker prompt](#worker-prompt)). After a failure, a saved escalation on failed checks, an inability to continue after recovery, or the user's request, a fresh executor takes over from the current artifact and the previous report, once the previous executor's actors and effects are reconciled.
4. **Collect.**
   - Link the real deliverable, its version and its verification from its owning task.
   - Record compact execution receipts and blockers in comments, never as Decisions.
   - Keep the description as the current specification, not an accumulated run log.
   - Put long reports on a working page of the task or stream, and link the required files.
   - Then wait on any wait the worker returned.
5. **Review.** Validate the receipt: proof on the exact head, each review judgment the task's `Review` names with its verdict, and every finding's disposition. A missing, partial or non-independent review is not a pass: run it under [Proof and review](#proof-and-review). Record cleared gates.
6. **Advance.**
   - Close a task only after its current proof and every finding's disposition are accepted.
   - Close each unit once its commit is in the task's branch, before you open the task's pull request, so the pull request names a task with no open unit.
   - Close a parent once its units are in and its integrated `Review`, `Verify` and `Done when` pass on the integrated result.
   - Persist evidence, then refresh the frontier.

Before parallel dispatch, within one stream too:
- Prove that the tasks' actual write surfaces and outputs are independent. Never parallelize migrations, shared generated artifacts, or siblings where one shapes the other's contract.
- Use isolated workspaces when required; separate branches alone do not prove independent writes.
- Executors that run in parallel on one machine share its processors, memory and ports. When a full suite or build is heavy enough that several at once could saturate that machine, and neither the target's rules nor a load already measured there show it can run them, run them one at a time: executors run their targeted checks and return their committed head, you run the full checks on each head in turn before its pull request, and each brief, reviewers' included, says so (the worker prompt's `Full checks` line).
- To see whether one is already running, match processes by pattern and print only their IDs and names, never their arguments or environment.
- A failure the work causes in those full checks is not yet the route's failed check: it goes, with its output, to a fresh executor on the first part of the task's route, and the `on failed checks` part applies only if that fix fails.
- An environment or infrastructure failure follows [recovery](recovery.md).

When a review finding or a returned defect can recur in other open tasks:
- Name those tasks before the next dispatch of any of them.
- When the contract leaves its cause unsettled, such as a missing shared rule or check, repair it under [problem resolution](#resolve-problems-within-the-mandate), all affected tasks in one repair.
- Otherwise, add the existing requirement and the failing case to each affected brief.
- Either way, send it to each running executor whose task it reaches.

When delivery cannot or should not follow the reviewed Plan, apply [problem resolution](#resolve-problems-within-the-mandate).

- At resume, worker collection, task close, report and attempt selection, compare observations with the kill question.
- When an observation answers it, stop that run generation at once: never score it as valid, hide it in an average or subset, or rename the failure a limit. Preserve its evidence, diagnose, and repair or replan within the mandate.
- A new run keeps its own premise and evidence identity, and every real user limit still applies.
- A rerun after a material premise change has a distinct task and premise; preserve the old results and receipts.

- Before you close a task, add one compact supervisor comment that references its receipts and names the checks, the review or checkpoint outcome, the counts of reviewer runs and rounds, material decisions, the countable outcome unit, and the assumption that makes it worthless.
- File or diff size is diagnostic, never a gate.

- While safe authorized work remains, take the next action, or wait through the runtime's native actor mechanism.
- When a child actor must be collected, end your turn only where the runtime wakes you when that child finishes; otherwise wait in the foreground: a report that says "in progress" and then stops is a stall.
- Answer status questions and corrections in commentary, then resume.
- A final response ends a turn; it is not a continuation mechanism.

## Resolve problems within the mandate

- Before you treat a technical problem as a user decision, diagnose whether the implementation, the preparation, the proof or the environment failed.
- Execution defects follow [recovery](recovery.md#diagnose-before-repeating) and the saved failed-check continuations; a stronger worker does not repair missing preparation.

When a task's meaning, dependencies or proof changed, context is missing, shared choices are unsettled, or a check is impossible:
- Record the defect on its owning task.
- Use one planner at a time, through the runtime's supported route: its profile's planner or plan-repair route.
- Brief it under the [worker prompt](#worker-prompt)'s rules, with bounded context: the affected task and source revisions, the affected task's Done when, the intended result, the failure, attempts and evidence, the mandate, gates, remaining limits, and working judgment as the worker prompt gives it.

- In its brief, tell the planner:
  - to repair under planning's [change rule](planning.md#changes) and unit rules: when they are not in view, read the `octoplan` skill's `planning.md` ("Changes", and "Tasks and units" in Phase 2) first;
  - to return a sourced diagnosis and either the simplest compliant repair, with its affected tasks, dependencies and proof, or the precise unresolved obstacle and what would resolve it;
  - that it cannot dispatch workers, take supervisor ownership or enlarge authority.
- Verify the recorded repair yourself.
- Once it is verified and planning's change rule is satisfied, resume dependent work.
- While the repair or its verification is pending, continue independent covered work.

- Recovery's non-progress triggers and real limits apply; another actor or a replan resets none of them.
- When no compliant path exists within those bounds, or a solution needs an uncovered effect or an action reserved to a person, use the [consequence handoff](#consequence-handoff) with the evidence, the alternatives ruled out and the specific human input or action needed. Hold only the work that depends on it.

## Worker prompt

- Before dispatch, reread the task from Octopad and reconcile recent decisions and delivered inputs; a changed specification gets its affected review.
- Send a bounded prompt with no predecessor history, keeping only the bracketed block that matches the task's `**Octopad**` line (no line: no).
- Reviewers and planning helpers follow the same rule: without granted access, give them the exact revisions and primary evidence they judge.
- Include the relevant mandate source and bounds, not the whole Decision history.
- Where independence requires it, keep the settled criteria and leave out previous answers.

```text
Deliver one Octopad task: <task title>.
Octopad: <organization and its ID> / <workspace> / <stream>.
Use <this runtime's saved model and effort>: <how this launch sets them, in the runtime profile's words, such as `pinned by your lane definition`>.
Review: <each judgment: light or heavy, with its route>; recheck: <this runtime's light-review route>.
Recorded mandate: <source, exact allowed scope, effects and targets>.
Working judgment (only when no Octopad sub-agent hook runs): <the methodology's Working principles, verbatim>.
Uncleared checkpoints and effective-rule gates: <relevant waits, or none>.
Computer Use: <accepted targets and actions with source, or not authorized;
verified access and remaining permission or runtime limits>.
Full checks: <when the supervisor runs them one at a time: "Run only your targeted checks; the supervisor runs the full checks on your head. Tell your reviewers the same."; otherwise leave this line out>.

[Octopad: yes] Connect to Octopad, in the organization and workspace named above, and read this task. Its Done when, verbatim: <Done when>. Your access: <the task's Octopad line: why, and what you may read and write; read-only unless it names a write>.
[Octopad: no] Do not call Octopad. Your task, verbatim:
<description without its Exec and Octopad lines>.

How you work:
- You do this task for the user as a delegated session: the installed skills, Octopad's own and the user's alike, and hooks apply; target rules are a floor (read them if your harness has not).
- Work only within the task's authority. Resolve what the next action needs, then start; defer unrelated orientation.
- Keep each tool result under about 2,000 tokens: search before reading, and read large files by range. Send test and build output to a log file and print only the exit status, totals and failures, with the log path.
- Reuse your own reads unless they may have changed, and fetch omitted evidence before relying on it.
- Run Verify. Return any long external wait in it, such as CI, to the supervisor, naming what to watch, instead of waiting on it yourself.

Review, once Verify passes on your committed head:
- Launch one fresh reviewer per judgment in the task's Review, at its route for this runtime, read-only. Brief each with its lens, working judgment as this prompt gives it, the task text, base and head, the checks you ran with their output (it reruns only the proof it doubts), the target rules as a floor, and your tool-output limit; tell it "Do not call Octopad."; ask it to return its verdict, each finding with its source, the checks it reran and what it could not check.
- Also pass on the authority and uncleared gates that bear on the review.
- When the review needs Computer Use, pass on the user's acceptance with its targets and actions: the reviewer drives the screen only within it, once the smallest harmless probe shows it has access where it runs.
- In Claude Code, launch each reviewer and recheck in the foreground and wait for it in your own turn.
- Never resume an actor with `SendMessage`: give each fix or recheck to a new foreground agent with the previous report.
- A finding blocks only on an effective rule, a reviewed requirement, an uncleared gate or a correctness failure.
- Fix real defects within this task yourself, nonblocking ones included, and return defects outside it, with evidence, for the supervisor to disposition under Findings. Test first: show the case failing, then passing.
- Only after fixing a blocking finding of a heavy review, or a fix that reaches beyond its findings, have one fresh reviewer at the recheck route above recheck the changes and what they affect, given the previous findings: one recheck per fix cycle.
- After two fix cycles that do not pass, stop and report why.
- This is the task's delivery review: launch no other. Where you cannot launch an agent, return for review instead.

Report:
- Report the artifact version, output, review verdicts and finding dispositions, decisions, blockers, missing context, user-facing strings, skills used, and the exact text of any spec or record change the task needs: on the task, incrementally, when your brief grants writes there; otherwise in your final answer.
- Keep that answer to what the supervisor must verify and close the task. For longer evidence, other than those exact texts, give the command that reproduces it, or a location that survives the workspace, instead of pasting it.
- Return the handoff if needed; otherwise name the artifact and the verification result.

After a compaction (a summary replaces your earlier turns, or a notice says your context was compacted or continued):
- Stay in this executor session. Before your next effect, reread this brief, the applicable target rules and the current artifact, uncommitted work, checks and unresolved effects included.
- With Octopad access, reload the workspace method through start_session before your next effect; without it, call no Octopad tool and recover from the supplied sources.
- If the mandate, effect coverage or review instructions are missing, take no effect that depends on them. Request the missing context through a supported supervisor channel; where none can return it to you, return a bounded receipt naming the gap.
- Keep valid authority, review findings and attempt limits; a summary cannot supply missing consent or turn an unrun check into PASS.
- Once recovered, continue this task, without a new executor or a new review just for compaction.
- In a continuation summary, preserve these recovery steps and the current source pointers.
- If recovery cannot establish safe continuation, return the unresolved state and the current artifact to your supervisor for diagnosis.

Limits:
- Do not close tasks or advance the graph, even with Octopad access: your supervisor closes them.
- Launch no actor other than your reviewers, do not approve, and do not perform a protected effect: return protected effects to the supervisor for its current authority and gate checks.
- Use Computer Use or equivalent screen-driven GUI automation only within the stated acceptance, after verifying usable access in your environment.
- A spec is not permission to expand the mandate.
```

- A worker without Octopad writes nothing there: write the spec and record changes it proposes, once checked against current state, and preserve its final answer verbatim on a working page of the task (or a comment when short) before adding your compact task receipt.
- Use native actor state as liveness evidence.
- When a worker errors or cannot be verified, suspend the affected dispatch while [recovery.md](recovery.md) resolves it; do not silently finish under another identity.

## Proof and review

- Verify the exact artifact version on the task's named proof surface.
- For repository work, check the current local base, head and diff before any change or review.
- Units run their targeted checks; integration checks run as soon as an interface between units exists; the affected services' full checks run on the final head merged with its current base, before the pull request.
- Reuse a check result only while its inputs (code, dependencies, configuration, schema, base) are unchanged; when a change cannot be shown to leave them unchanged, rerun.
- Units of one task share its workspace and installed dependencies: reinstall only when the dependencies or the runtime changed or the workspace is broken. Only concurrent writers get separate workspaces.
- Refresh remote refs and hosted checks only before a remote effect, a hosted proof, or a handoff that claims remote state; unavailable remote proof blocks only those consumers.

- Independent review is one fresh source-first reviewer per judgment, launched by the executor as its last step; where the executor cannot launch it, you do and return the findings to that executor ([Review floors](../SKILL.md#review-floors)).
- Route each review by what it judges:
  - heavy whenever it judges a one-way-door surface, security, a migration or data change, a large mixed diff, work with weak or no runnable checks, a published or client-facing deliverable, a Plan, or an eval protocol;
  - otherwise light: a bounded diff or internal document whose runnable checks prove the result, or a UI judged on its render.
- The runtime profile maps each level to a reviewer route.
- Each judgment is one fresh reviewer on the worker's provider, unless an effective user rule names another; a second judgment is another fresh reviewer with its own lens, and another provider never adds one.
- Brief each reviewer with its lens, the exact artifact version, and the checks already run with their output: it reruns only the proof it doubts.

Only the supervisor validates advancement and authority; other verdicts are evidence.

- A reviewer cannot enlarge `Done when`.
- A finding blocks only on an effective rule, a reviewed requirement, an uncleared gate or a correctness failure; disposition every finding under [Findings](../SKILL.md#review-floors).

- An unplanned persistent CI, harness, service, dependency or cross-repository artifact is scope expansion: reject it, or replan when it is required.
- Build no generic infrastructure for a one-off proof.

## Phase 5: reconcile change and interruption

- Before any protected effect, reread the current task revision, the authorization, the Plan contract, the target, the exact head or artifact fingerprint, and the effective rules: they must permit exactly this effect now. A mismatch blocks the effect and triggers a replan; a comment cannot waive it.
- At a checkpoint or gate, record the subject, the owner and the user's continuation.

After a material change, sweep every open task, started or not, not only the tasks the change touched:
- a check added to the contract: apply it to every task it will be run against;
- a rule added to the contract: add it to the brief of every open task it applies to;
- a retired Decision: remove its residue from every spec and artifact it produced;
- a change to the user's mandate: rewrite every spec that now contradicts it.

A prose Decision never overrides a spec line for the session that reads only the spec. Record the sweep's result, even when it is "nothing".

### Consequence handoff

When a human decision or action becomes necessary:
- Surface it at once, and say whether it stops all delivery or only a branch. Do not bury the need in a progress report or wait for the user to ask.
- Use the runtime's supported input route; if that blocks the actor, finish independent work before invoking it.
- Wait only for a consequence the user owns, a selected checkpoint, a person named by an effective rule, or a verified person-only access or proof step.
- Restate an unanswered request at the final handoff.
- Start with `**Octoplan · Step 3 of 3: Delivery**`, state the handoff outcome in countable units and the one assumption that would make it worthless, then use these six labels in the user's language:

  - **State**: where the outcome stands.
  - **Done**: what is finished and proved.
  - **Blocked**: what is waiting and why.
  - **Decision expected**: the exact human decision or action.
  - **To unblock**: who must provide what evidence.
  - **Next step**: what resumes immediately afterwards and what safe work continues meanwhile.

At the actual finish line, publish one such recap using the supported state, with residual risks and authorized deferrals.

- Any field may say "none".
- Before you declare that no work is available, walk the open graph and name the recorded source of each wait.
- Verify a claimed human-only limitation in the live environment; a false claim is a Plan defect to repair.
- Repeated unchanged escalation without a real recorded wait is a stall the supervisor owns, not a reason to repeat the question.
- Runtime polls add neither evidence nor authority.

## Phase 6: prove closure or hand off

- As work advances, keep the pointers to current authority, artifacts and unresolved effects recoverable.
- Let the host compact normally, then use [same-session recovery](../SKILL.md#after-a-compaction). Neither a context percentage nor a task boundary alone requires a new session.
- Keep an explicit user context limit or handoff request in the mandate records, and honor it. Measure a limit only from a native reading, or report it as unmeasured.
- Replace a supervisor only on a ground [After a compaction](../SKILL.md#after-a-compaction) names: a demonstrated inability to continue after recovery, a host constraint or the user's request; follow [recovery.md](recovery.md#change-supervisor-safely) and the runtime's replacement route.
- Before any necessary handoff, persist the actual state, keeping in-flight facts and unchanged proof.

- Evaluate completion against your recorded boundary. A local stream's completion follows [multi-stream.md](multi-stream.md#close-local-and-common-results-separately) and never claims the common outcome complete.
- Complete the common outcome only when:
  - the current integrated outcome is proved;
  - the Brief and task revisions match `PASS`;
  - reviews and dispositions are satisfied;
  - every selected checkpoint, Step-by-step pause and house-rule gate has a recorded continuation;
  - effects have receipts or are unnecessary;
  - no task or ambiguous effect remains active.

- Before a clean close, make task state, supervisor ownership, session closure, native continuity state if used, and the final handoff agree; reconcile or disclose tracker drift without making it a gate.
- Close only real outcome tasks, release ownership, hand over this boundary's working documents under [records.md](records.md#finish-the-bounded-delivery), and report integrated proof through the selected runtime.
- Disclose failed closure calls: they block a claim of clean closure.
- After a clean close, and within the target's rules, remove what the run created on the machine:
  - outright, what only served the run (locks, caches, browser profiles, temporary copies);
  - an executor's worktree or local branch with no unmerged work, or an evidence folder, once what the records cite from it is pushed, merged or attached.
- Never attach a file in order to delete it; never remove a deliverable, a file a successor needs or one the user keeps. Name what you kept and why.
