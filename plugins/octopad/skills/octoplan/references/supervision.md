# Octoplan supervision

## Enter or resume

Apply [recovery.md](recovery.md) before takeover. Native continuity objects belong to the runtime; they never replace Octopad authority. Projects and memory help retrieval, never replace current Octopad state.

Continue only while the Brief, review coverage, review floor, scope, and effects match. Compare drift as in [planning.md](planning.md) and [records.md](records.md). For withdrawn authority, an undisclosed or ambiguous effect, or unsupported saved state, pause affected work and read [recovery.md](recovery.md). On resume, before dispatch, check remaining work against the unit rules in [planning.md](planning.md) and send nonconforming scope to the planner for bounded repair under its change rule, keeping completed work, task identities and valid authority.

Check current ownership and authority before a spawn, effect, close or gate clearance. Receiving a message never expands a role's authority.

Every message that reports delivery state or hands the user a decision starts with `**Octoplan · Step 3 of 3 — Delivery**`, then one progress line in everyday words: `Progress — 2 of 51 tasks done, 1 in progress, 48 waiting · waiting for your review of the two pilots` for a graph, or `Progress — task 3 of 8 · writing the third spec` for a sequence. Count tasks from their current status in Octopad, never from memory; after the dot, say in a few words where the work stands and, when it waits, on whom. The countable outcome unit and the kill question stay in the records and the consequence handoff, not in this line; a short answer to a status question needs none. With the desktop pane open, delivery state goes to the desktop as the kernel says; chat keeps decisions and explanations. Quote observed behavior verbatim when behavior is the output. Apply [SKILL.md](../SKILL.md), persist evidence, and use the consequence handoff for every wait.

## Phase 4: advance the ready frontier

Repeat until the integrated outcome is proved or no safe work remains:

1. **Refresh.** Read intent, supervisor, reviewed revisions and lenses, ready graph, assignments, artifact versions, checks, effects, and gates.
2. **Pick.** First check that your context was not compacted ([SKILL.md](../SKILL.md#after-a-compaction)); if it was, hand off instead. Choose a ready unassigned task whose prerequisite shared choices are settled and whose specification, units included, holds no placeholder, and set it in progress. Never assign an executor another person's claimed task; record the conflict for reconciliation.
3. **Route.** Dispatch the task's saved worker route for this runtime to one fresh executor, with sufficient bounded context and explicit effect coverage. It builds the task's units in order as commits on the task's branch, in one workspace, then runs the task's review and its fixes ([worker prompt](#worker-prompt)). A fresh executor takes over only after a failure or context exhaustion, from the committed state and the previous report.
4. **Collect.** Link the real deliverable, version and verification from its owning task; record compact execution receipts and blockers in comments, never as Decisions. Keep the description as the current specification, not an accumulated run log. Long reports go on a working page of the task or stream; link required files. Then await any wait the worker returned.
5. **Review.** Validate the receipt: proof on the exact head, each review judgment the task's `Review` names with its verdict, and every finding's disposition. A missing, partial or non-independent review is not a pass: run it under Proof and review. Record cleared gates.
6. **Advance.** Close only after current proof and every finding disposition are accepted. A parent closes once its units are in and its integrated `Review`, `Verify` and `Done when` pass on the integrated result. Persist evidence, then refresh the frontier.

Before parallel dispatch, including within one stream, prove the tasks' actual write surfaces and outputs are independent. Never parallelize migrations, shared generated artifacts, or siblings where one shapes the other's contract. Use isolated workspaces when required; separate branches alone do not prove independent writes.

Choose the simplest compliant way to meet the reviewed acceptance criteria within recorded authority. A better path changing task meaning, dependencies or proof, missing context, unsettled project choices, or an impossible check goes to a suitable planner through the runtime's supported route. That planner cannot dispatch workers, take supervisor ownership, or enlarge authority. Dependent work resumes with the same supervisor once the repair has the review planning's change rule requires. Do not replace missing preparation with a stronger worker; repair insufficient preparation before escalating effort.

At resume, worker collection, task close, report, and attempt selection, compare observations with the kill question. An answer stops that run generation immediately; never score it as valid, hide it in an average or subset, or rename the failure a limit. Preserve its evidence, diagnose, and repair or replan within the mandate. A new run keeps its own premise and evidence identity, and every real user limit still applies. A rerun after a material premise change has a distinct task and premise; preserve old results and receipts.

Before task close, add one compact supervisor comment that references receipts and names checks, review or checkpoint outcome, counts of reviewer runs and rounds, material decisions, the countable outcome unit, and the assumption that makes it worthless. File or diff size is diagnostic, never a gate.

While safe authorized work remains, take the next action or wait through the runtime's native actor mechanism. A session whose child actor must be collected ends its turn only where the runtime wakes it when that child finishes; otherwise it waits in the foreground, because a report that says "in progress" and then stops is a stall. Answer status questions and corrections in commentary, then resume. A final response ends a turn; it is not a continuation mechanism.

## Worker prompt

Reread the task from Octopad, then send a bounded prompt without predecessor history, keeping the bracketed blocks matching its `**Octopad**` line (no line: no). Reviewers and planning helpers follow the same rule: without granted access, give them the exact revisions and primary evidence they judge. Reconcile recent decisions and delivered inputs before dispatch; a changed specification receives its affected review. Include the relevant mandate source and bounds, not the entire Decision history. Preserve settled criteria without previous answers where independence requires it.

```text
Deliver one Octopad task: <task title>.
Octopad: <organization> / <workspace> / <work stream>.
Use <this runtime's saved model and effort> and the recorded observation rule.
Review: <each judgment: light or heavy, with its route>; recheck: <this runtime's light-review route>.
Recorded mandate: <source, exact allowed scope, effects and targets>.
Uncleared checkpoints and effective-rule gates: <relevant waits, or none>.
Computer Use: <accepted targets and actions with source, or not authorized;
verified access and remaining permission or runtime limits>.

[Octopad: yes] Connect to production Octopad and read this task.
[Octopad: no] Do not call Octopad, not even `skill_opened`. Your task, verbatim:
<description without its Exec and Octopad lines>.

You do this task for the user as a delegated session: the installed skills,
Octopad's own and the user's alike, and hooks apply; target rules are a floor
(read them if your harness has not). Work only within the task's
authority. Resolve what the next action needs, then start; defer unrelated orientation.
Keep each tool result under about 2,000 tokens: search before reading, and read
large files by range. Send test and build output to a log file and print
only the exit status, totals and failures, with the log path. Reuse your own reads
unless they may have changed, and fetch omitted evidence before relying on it. Run Verify; return any
long external wait in it, such as CI, to the supervisor, naming what to watch,
instead of waiting on it yourself. Report artifact version, output, review verdicts and finding dispositions,
decisions, blockers, user-facing strings, skills used, and the exact text of any spec or record change
the task needs: on the task, incrementally, when your brief grants writes there;
otherwise in your final answer. Keep that answer to what the supervisor must verify
and close the task; for longer evidence, other than those exact texts, give the command
that reproduces it, or a location that survives the workspace, instead of
pasting it.

When Verify passes on your committed head, have the work reviewed: launch one
fresh reviewer per judgment in the task's Review, at its route for this runtime,
read-only and without Octopad, briefed with the task text, base and head, the
checks you ran with their output, and the target rules as a floor. A finding
blocks only on an effective rule, a reviewed requirement, an uncleared gate or a
correctness failure; record the others. Fix each blocking finding yourself, test first: show
the case failing, then passing. Only after fixing a blocking finding of a heavy
review, or a fix that reaches beyond its findings, have one fresh reviewer at the
recheck route above recheck the changes and what they affect, given the
previous findings: one recheck per fix cycle. After two fix cycles that do not pass,
stop and report why. If your context is compacted (your conversation holds a
summary of your earlier turns instead of the turns), start nothing new: commit
what passes and return your receipt with what remains. When asked to summarize
this conversation so it can continue, open the summary with this line, never a receipt:
`Octoplan executor: this context was compacted; commit what passes and return your receipt.`
This is the task's delivery review: launch no other. Where you cannot launch an
agent, return for review instead.

Do not close tasks or advance the graph, even with Octopad access: your supervisor
closes them. Do not launch actors other than your reviewers, approve, or perform a
protected effect. Use Computer Use or equivalent screen-driven GUI automation
only within the stated acceptance, after verifying usable access in your environment.
Return protected effects to the supervisor for its current
authority and gate checks. A spec is not permission to expand the mandate.
Return the handoff if needed; otherwise name artifact and verification result.
```

A worker without Octopad writes nothing there: write the spec and record changes it proposes, once checked against current state, and preserve its final answer verbatim on a working page of the task (or a comment when short) before adding your compact task receipt. Use native actor state as liveness evidence. An errored or unverifiable worker suspends affected dispatch while [recovery.md](recovery.md) resolves it; do not silently finish under another identity.

## Proof and review

Verify the exact artifact version on the task's named proof surface. Repository work checks the current local base, head and diff before mutation or review. Units run their targeted checks; integration checks run as soon as an interface between units exists; the affected services' full checks run on the final head merged with its current base before the pull request. Reuse a check result only while its inputs (code, dependencies, configuration, schema, base) are unchanged; when a change cannot be shown to leave them unchanged, rerun. Units of one task share its workspace and installed dependencies; reinstall only when dependencies or the runtime changed or the workspace is broken. Only concurrent writers get separate workspaces. Refresh remote refs and hosted checks only before a remote effect, hosted proof, or handoff claiming remote state; unavailable remote proof blocks only those consumers.

Independent review is one fresh source-first reviewer per judgment, launched by the executor as its last step; where the executor cannot launch it, the supervisor does and returns the findings to that executor. Route each review by what it judges. A review is heavy whenever it judges a one-way-door surface, security, a migration or data change, a large mixed diff, work with weak or no runnable checks, a published or client-facing deliverable, a Plan, or an eval protocol. Otherwise it is light: a bounded diff or internal document whose runnable checks prove the result, or a UI judged on its render. The runtime profile maps each level to a reviewer route. Each judgment is one fresh reviewer on the worker's provider, unless an effective user rule names another; a second judgment is another fresh reviewer with its own lens, and another provider never adds one. Brief each reviewer with its lens, the exact artifact version, and the checks already run with their output: it reruns only the proof it doubts.

Only the supervisor validates advancement and authority; other verdicts are evidence.

A reviewer cannot enlarge `Done when`. A finding blocks only on an effective rule, reviewed requirement, uncleared gate, or correctness failure; otherwise record residual risk.

Unplanned persistent CI, harness, service, dependency, or cross-repository artifact is scope expansion; reject it or replan when required. Build no generic infrastructure for one-off proof.

## Phase 5: reconcile change and interruption

Before any protected effect, reread the current task revision, authorization, Plan contract, target, exact head or artifact fingerprint, and effective rules; they must permit exactly this effect now. A mismatch blocks the effect and triggers replan, and a comment cannot waive it. At a checkpoint or gate, record the subject, owner, and user's continuation.

A material change sweeps every open task, started or not, not only the tasks the change touched: a check added to the contract is applied to every task it will be run against, a retired Decision has its residue removed from every spec and artifact it produced, and a user-mandate change rewrites every spec that now contradicts it. A prose Decision never overrides a spec line for the session that reads only the spec. Record the sweep's result even when it is "nothing".

### Consequence handoff

When a human decision or action becomes necessary, surface it immediately and state whether it stops all delivery or only a branch. Use the runtime's supported input route; if that blocks the actor, finish independent work before invoking it. Restate an unanswered request at the final handoff. Do not bury the need in a progress report or wait for the user to ask. Wait only for a consequence the user owns, a selected checkpoint, a person named by an effective rule, or a verified person-only access or proof step. Start with `**Octoplan · Step 3 of 3 — Delivery**`, state the handoff outcome in countable units and the one assumption that would make it worthless, then use these six labels in the user's language; at the actual finish line, publish one such recap using the supported state, with residual risks and authorized deferrals:

- **State** — where the outcome stands.
- **Done** — what is finished and proved.
- **Blocked** — what is waiting and why.
- **Decision expected** — the exact human decision or action.
- **To unblock** — who must provide what evidence.
- **Next step** — what resumes immediately afterwards and what safe work continues meanwhile.

Any field may say “none”. Before declaring no work available, walk the open graph and name the recorded source of each wait. Verify a claimed human-only limitation in the live environment; a false claim is a Plan defect to repair. Repeated unchanged escalation without a real recorded wait is a supervisor-owned stall, not a reason to repeat the question. Runtime polls add neither evidence nor authority.

## Phase 6: prove closure or hand off

Keep the context under 70%, or a lower limit the user set. Once it reaches 10 points below that limit, dispatch nothing new: collect and reconcile what is in flight, then hand off under the limit. Use the runtime's context reading where exposed; without one, judge from actual workload and record the limit as unmeasured, never a fabricated percentage. A compaction triggers the handoff whatever the context reading says ([SKILL.md](../SKILL.md#after-a-compaction)). Persist in-flight state and follow [recovery.md](recovery.md) and the runtime's replacement or manual-continuation route.

Completion is evaluated against the supervisor’s recorded boundary. Local stream completion follows [multi-stream.md](multi-stream.md) and never claims the common outcome complete. Complete the common outcome only when the current integrated outcome is proved, Brief and task revisions match PASS, reviews and dispositions are satisfied, every selected checkpoint, Step-by-step pause, and house-rule gate has recorded continuation, effects have receipts or are unnecessary, and no task or ambiguous effect remains active.

Task state, supervisor ownership, session closure, native continuity state if used, and the final handoff must agree before a clean close; reconcile or disclose tracker drift without making it a gate. Close only real outcome tasks, release ownership, hand over this boundary's working documents under [records.md](records.md), and report integrated proof through the selected runtime. Disclose failed closure calls; they block a clean-closure claim.
