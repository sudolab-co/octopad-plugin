---
name: octoplan
description: "Use when prepared work could benefit from delivery by agents, when the user wants agents to carry a stream to its outcome, before proposing how agents should organize, plan or deliver a stream, and when the user names, resumes or supervises an Octoplan. Opening it authorizes no delivery. Not for preparing the stream itself (octopad-planning-and-work-design)."
---
Version: 10.6.0

# Octoplan

## After a compaction

This section binds every supervisor and executor. A compaction may bring back this file without its references: after one, reopen each reference your next action needs.

Compaction is normal continuity in the same session, not a reason to retire a supervisor or executor. When a summary replaces your own earlier turns, or a notice says your context was compacted or continued, recover before the next dispatch or effect:

1. Reconcile the current mandate, ownership, active actors, pending effects and human gates from their owning records and the actual delivery target:
   - Inspect native actor state and the boundary's current-supervision header, active work and unresolved effects, even when the summary omits them.
   - Use the summary as a source pointer, never as permission, proof of completion or a complete inventory.
   - Beyond those recovery checks, read only what the next action depends on; keep checks and reviews whose inputs are demonstrably unchanged.
2. Once that state is established, continue in the same role and session:
   - Keep the existing workers, valid authority and pending decisions.
   - A stop, release or retirement stays binding: recovery never reactivates a released or replaced actor.
   - Do not recreate actors, reclaim unchanged ownership, restart preparation or ask for a new confirmation because of compaction.
   - Missing material evidence holds only the work that needs it: resolve it through [recovery.md](references/recovery.md#reconcile-effects-before-retrying).

Around recovery:
- A predecessor's brief or report is not a compaction of your own context.
- When you prepare a continuation summary, include the method reload, current source pointers and unresolved effects, so this same actor can recover.
- Neither a summary's next step nor the client's resume instruction bypasses recovery.
- Compaction alone never replaces an actor.
- Replace a supervisor only on a demonstrated inability to continue after recovery, a host constraint or the user's request.
- Executor failure and saved escalation routes follow [supervision.md](references/supervision.md#phase-4-advance-the-ready-frontier).
- Every actual replacement keeps the cessation and ownership rules in [recovery.md](references/recovery.md).

## One visible program

Once the user enters Octoplan planning or delivery, start each message that reports state or hands the user a decision with the applicable banner, in every runtime; a short status answer needs none. Merely qualifying or offering agent delivery during ordinary stream preparation does not start this program or impose its banners:

```markdown
**Octoplan · Step 1 of 3: Brief**
**Octoplan · Step 2 of 3: Plan**
**Octoplan · Step 3 of 3: Delivery**
```

- Put the banner first in the message, before any incident narrative, explanation or table.
- Write what the user reads in everyday words: name what will happen and who does it. Keep this skill's vocabulary out of it, along with any synonym doing the same job; say the thing itself instead.
- Ask about a consequence the user owns in words they can answer. Technical uncertainty goes to diagnosis or review: the user never certifies technical correctness.
- Records written for other sessions, such as Decisions, tasks, receipts, prompts and pointer blocks, keep the precise wording.
- A launch brief or pointer names the language the user writes in; the session it starts addresses the user in it until they write in another.

From the need to delivery:
- The user describes the need. Apply the common brief and preparation in [octopad-planning-and-work-design](../octopad-planning-and-work-design/SKILL.md), including for a direct Octoplan request. Reuse valid confirmed intent and the same graph.
- The planner qualifies the delivery path, records and reviews the smallest adequate Plan, then shows its summary and human interventions before agreeing autonomy and launching a fresh supervisor through the selected runtime.
- The supervisor owns delivery of the Brief's outcome, including adapting the approach and resolving incidents within the mandate.
- An executor produces its task's deliverable and has it reviewed.
- Internal roles add no user-facing stage.

## Load only what the work needs

Load and report only the coordination, routing and recovery mechanics the work needs.

- For the Brief, autonomy, the Plan, its review and activation, read [planning.md](references/planning.md).
- For delivery or a resume, read [supervision.md](references/supervision.md).
- Select the runtime profile from the actual host, not the model's name:
  - in Claude Code, [claude-runtime.md](references/claude-runtime.md);
  - in Codex, [codex-runtime.md](references/codex-runtime.md);
  - in Cursor, which runs the saved Claude routes, [cursor-runtime.md](references/cursor-runtime.md).
- Read only that profile when you launch, resume or check capabilities.
- When you choose routes, read the route sections of both the Claude and the Codex profiles: every task names a route for each runtime ([planning.md](references/planning.md#phase-2-compose-the-plan)).
- On an unknown host, establish its capabilities before you promise autonomous delivery.
- Before you read or write a delivery contract or journal, read [records.md](references/records.md).
- Only for multiple streams, read [multi-stream.md](references/multi-stream.md).
- Before duplicable or hard-to-undo effects, or on ambiguity, shared-infrastructure distress, a usage quota or rate limit, actor failure, repeated non-progress, takeover or replan, read [recovery.md](references/recovery.md).
- Only when the selected runtime requires a manual launch or handoff, read [continuation.md](references/continuation.md).

## Shared foundation

- F1, control plane:
  - Read current Octopad and target state.
  - In every durable record, use verified sources, revisions or hashes, and read time.
  - Re-derive moving numbers, link live state, and copy no secrets or unnecessary private text.
- F3, progressive complexity:
  - Keep your tool output small, as every actor does, and say so in every brief you delegate, as the [worker prompt](references/supervision.md#worker-prompt) does.
  - Smaller output never narrows what a check or review covers.
- F5, falsifiable plan:
  - Verify material premises.
  - Record what would kill the run.
  - Challenge the complete artifact graph before activation.
- F7, ready work moves:
  - Advance safe ready branches inside the mandate.
  - A wait or failure blocks only work that needs it.
  - A failed trial is evidence to diagnose, not proof that the entire mission must stop.
  - A failed worker, proof route, reviewer verdict or run generation is not by itself a human decision: a verdict describes the reviewed artifact's validity, not whether all authorized diagnosis must stop.
- F8, invariant safety:
  - Autonomy changes interruptions, never applicable rules, verification, review, persistence or the evidence floor.
  - Exact-artifact consent and actions reserved to a person by effective rules remain explicit gates; no mode removes them.
- F10, integrated closure:
  - Close only from current integrated evidence: `built`, `reviewed`, `merged`, `applied`, `verified`, `released`, `accepted`, or the domain equivalent.
  - Silence, timeouts, irrelevant green checks and unrun checks are not PASS.
  - An unavailable verifier blocks.
- F13, protected effects:
  - Disclose any effect that bills money to any party or cannot be undone, even when no house rule names it.
  - Its authorization must cover the actual effect and target.
- F14, environment intact:
  - Effective target rules, installed skills, hooks, permissions, privacy and legal boundaries remain binding.
  - Each actor loads guidance applicable to its work; Octoplan does not replace it or prescribe a fixed catalog.
  - User acceptance never overrides runtime restrictions or transfers system or app permissions to another actor.
- F15, rigor sized to the stakes:
  - Read every verification, review and recheck against the recorded stakes, in both directions: reversible internal work gets the floor and nothing more; irreversible or outward work gets the full floors.
  - Verification that outgrows the decision it protects is a defect, the same as verification that falls short.
  - Two consecutive rounds that add process without changing what ships trigger F15, not a third round.
- F16, no unmeasured technical claims: write into a record only a path, command, version, count or behavior you read or measured in this session; write what you cannot measure now as unknown, never as fact.

## Autonomy and authority

When an earlier explicit choice applies, reuse it: show the reviewed Plan and ask only for a missing consequence decision or a launch choice the runtime requires.

- Full autonomy:
  - Continue covered work and report progress.
  - Ordinary corrections, replanning, review and supervisor changes preserve the mandate.
  - A new outcome, authority need, protected effect, user-owned consequence or substantive gate needs only its own new decision; technical choices and dependency placement alone do not.
  - Ask only when the user owns a new consequence or a rule requires their decision.
- Checkpoints: also pause at the selected checkpoints. Default to every protected effect, human step and Plan landing; the user may adjust this set within applicable rules.
- Step-by-step: pause after each agreed step.

Mode and effect coverage are separate:
- An effect written into a task after the choice is not thereby authorized: send workers only the authority actually given.
- When an effect needs clarification, keep the chosen mode: ask only for that delta and continue independent covered work; do not convert Full autonomy to Checkpoints to represent it.
- An uncovered effect that was found and rejected is not an authority delta: report it, keep the mode and continue; do not offer the user a new choice of mode.
- Cancelling a task the Plan replaces, whatever its stream, is not an authority delta either: cancel it yourself, with a comment on what its replacement adopts. If that task is in progress for someone else, or inside another live supervisor's boundary, it stays a conflict to reconcile instead.

## Review floors

- A Plan:
  - Before activation, give it one fresh independent review; activate only with every applicable lens at PASS.
  - For eight or more tasks, or for schema, permissions, money, privacy, destructive operations, publishing or deployment, use at least two independent judgments with distinct lenses.
  - A count-only trigger may reduce to one judgment for internal reversible work with deterministic proof; named risk triggers and stricter effective rules may not.
- A deliverable:
  - Every material executable change and every published or client-facing deliverable gets one fresh independent review of the whole deliverable, run by its executor as its last step. For a task with units, that review covers its integrated diff, which covers its units, the parent and its pull request at once.
  - Where the executor cannot launch it, the supervisor does and returns the findings to that executor.
  - Add a second focused judgment only for a one-way-door surface, or for an expertise the Plan names that the first lens lacks.
  - Low-risk non-material internal work may close on machine checks plus supervisor verification.
- A unit: review it on its own only when the Plan names a risk later work must not build on unchecked.
- Staging: when the target offers staging, land changes there before production, within the applicable access and authorization limits. Unavailable access is a gate, not permission to skip staging.
- Findings:
  - Resolve real defects within the mandate, including nonblocking ones: nonblocking is not false.
  - Disposition each finding as fixed, deferred to a named task with authority and rationale, or dismissed with evidence.
  - Required work outside the task gets an owning task under planning's [change rule](references/planning.md#changes), created or reused by an actor with record authority; record mandate coverage before dispatch.
- A Plan fix: give a stable fix to a Plan one targeted recheck of the changes and the conclusions they affect, by the same reviewer where the runtime can resume it.
- A deliverable fix:
  - Prove it with a test that fails before it and passes after.
  - Only when it fixes a blocking finding of a heavy review, or reaches beyond its findings, also give it one targeted recheck per fix cycle, by a fresh reviewer at the light-review route, given the previous findings.
- Any recheck:
  - A recheck is never a fresh floor, and a replacement reviewer adds no judgment.
  - The supervisor may recheck a repair whose blast radius is one reversible internal record.

## Run controls report

With the desktop open, post the run's controls with `desktop` `report` from the Brief on; the `report` parameter's text gives the fields and limits.
