---
name: octoplan
description: Use when prepared work may benefit from delivery by agents, even without the name Octoplan, or when the user invokes, plans, resumes or supervises an Octoplan. Qualify the route before offering delivery; opening this skill never authorizes execution. Generic stream preparation belongs to octopad-planning-and-work-design.
---
A worker, reviewer or planning helper without Octopad access in its brief calls no Octopad tool, `skill_opened` included: it works from the evidence given and returns missing sources and proposed record changes to its delegating session.

If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octoplan"` when you open this skill.

Version: 8.1.0

# Octoplan

## One visible program

Use the applicable banner as the first line of each message that reports state or hands the user a decision once the user enters Octoplan planning or delivery, in both environments; a short status answer needs none. Merely qualifying or offering agent delivery during ordinary stream preparation does not start this program or impose its banners:

```markdown
**Octoplan · Step 1 of 3 — Brief**
**Octoplan · Step 2 of 3 — Plan**
**Octoplan · Step 3 of 3 — Delivery**
```

The banner is the first line of the message, before any incident narrative, explanation, or table. What the user reads is written in everyday words: name what will happen and who does it, and keep this skill's vocabulary out of it, along with any synonym doing the same job; say the thing itself instead. Ask about a consequence the user owns in words they can answer; technical uncertainty goes to diagnosis or review, and the user never certifies technical correctness. Name tasks by title, never by an ID or ID prefix. Records written for other sessions (Decisions, tasks, receipts, prompts, pointer blocks) keep the precise wording and exact IDs.

The user describes the need. Apply the common brief and preparation in [octopad-planning-and-work-design](../octopad-planning-and-work-design/SKILL.md), including for a direct Octoplan request. Reuse valid confirmed intent and the same graph. The planner qualifies the delivery path, records and reviews the smallest adequate Plan, then shows its summary and human interventions before agreeing autonomy and launching a fresh supervisor through the selected runtime. The supervisor owns delivery of the Brief's outcome, including adapting the approach and resolving incidents within the mandate. An executor produces its task's deliverable and has it reviewed. Internal roles add no user-facing stage.

## Load only what the work needs

Load and report only coordination, routing, and recovery mechanics the work needs.

- Read [planning.md](references/planning.md) for Brief, autonomy, Plan, review, and activation.
- Read [supervision.md](references/supervision.md) for Delivery or resume.
- Select the profile from the actual host, not the model's name: [codex-runtime.md](references/codex-runtime.md) in Codex; [claude-runtime.md](references/claude-runtime.md) in Claude Code. Read only that profile when launching, resuming, or checking capabilities. When choosing routes, read both profiles' route sections: every task names a route for each runtime ([planning.md](references/planning.md)). Unknown hosts must establish capabilities before promising autonomous delivery.
- Read [records.md](references/records.md) before reading or writing a delivery contract or journal.
- Read [multi-stream.md](references/multi-stream.md) only for multiple streams.
- Read [recovery.md](references/recovery.md) before duplicable or hard-to-undo effects, or for ambiguity, shared-infrastructure distress, actor failure, repeated non-progress, takeover, or replan.
- Read [continuation.md](references/continuation.md) only when the selected runtime requires a manual launch or handoff.

## Shared foundation

- **F1, control plane.** Read current Octopad and target state. Every durable record uses verified sources, revisions or hashes, and read time; re-derive moving numbers, link live state, and copy no secrets or unnecessary private text.
- **F3, progressive complexity.** Every actor keeps tool output small, and every delegated brief says so as the [worker prompt](references/supervision.md#worker-prompt) does. Smaller output never narrows what a check or review covers.
- **F5, falsifiable plan.** Verify material premises, record what would kill the run, and challenge the complete artifact graph before activation.
- **F7, ready work moves.** Advance safe ready branches inside the mandate. A wait or failure blocks only work that needs it. A failed trial is evidence to diagnose, not proof that the entire mission must stop. A failed worker, proof route, reviewer verdict, or run generation is not by itself a human decision; a verdict describes the reviewed artifact's validity, not whether all authorized diagnosis must stop.
- **F8, invariant safety.** Autonomy changes interruptions, never applicable rules, verification, review, persistence, or the evidence floor. Exact-artifact consent and actions reserved to a person by effective rules remain explicit gates; no mode removes them.
- **F10, integrated closure.** Close only from current integrated evidence: `built`, `reviewed`, `merged`, `applied`, `verified`, `released`, `accepted`, or the domain equivalent. Silence, timeouts, irrelevant green checks, and unrun checks are not PASS. An unavailable verifier blocks.
- **F13, protected effects.** Disclose any effect that bills money to any party or cannot be undone, even when no house rule names it. Its authorization must cover the actual effect and target.
- **F14, environment intact.** Effective target rules, installed skills, hooks, permissions, privacy, and legal boundaries remain binding. Each actor loads guidance applicable to its work; Octoplan does not replace it or prescribe a fixed catalog. User acceptance never overrides runtime restrictions or transfers system or app permissions to another actor.
- **F15, rigor sized to the stakes.** Every verification, review, and recheck is read against the recorded stakes, in both directions: reversible internal work gets the floor and nothing more, irreversible or outward work gets the full floors. Verification that outgrows the decision it protects is a defect, the same as verification that falls short. Two consecutive rounds that add process without changing what ships trigger F15, not a third round.
- **F16, no unmeasured technical claims.** Every path, command, version, count, or behavior written into a record was read or measured in this session; what cannot be measured now is written as unknown, never as fact.

## Autonomy and authority

Reuse an earlier applicable explicit choice, showing the reviewed Plan and asking only for a missing consequence decision or runtime-required launch choice.

- **Full autonomy.** Continue covered work and report progress. Ordinary corrections, replanning, review, and supervisor changes preserve the mandate. A new outcome, authority need, protected effect, user-owned consequence, or substantive gate needs only its own new decision. Technical choices and dependency placement alone do not. Ask only when the user owns a new consequence or a rule requires their decision.
- **Checkpoints.** Also pause at the selected checkpoints. Default to every protected effect, human step, and Plan landing; the user may adjust this set within applicable rules.
- **Step-by-step.** Pause after each agreed step.

Mode and effect coverage are separate. An effect written into a task after the choice is not thereby authorized; send workers only the authority actually given. Preserve the chosen mode when an effect needs clarification. Ask only for that delta and continue independent covered work; do not convert Full autonomy to Checkpoints to represent it. An uncovered effect that was found and rejected is not an authority delta: report it, keep the mode, and continue; do not offer the user a new choice of mode. Cancelling a task the Plan replaces, whatever its stream, is not an authority delta either: cancel it yourself, with a comment on what its replacement adopts; a task in progress for someone else, or inside another live supervisor's boundary, stays a conflict to reconcile.

## Review floors

Every Plan needs one fresh independent review before activation; activation needs every applicable lens at PASS. Use at least two independent judgments with distinct lenses for eight or more tasks, or schema, permissions, money, privacy, destructive operations, publishing, or deployment. A count-only trigger may reduce to one for internal reversible work with deterministic proof; named risk triggers and stricter effective rules may not. Every material executable change and every published or client-facing deliverable gets one fresh independent review of the whole deliverable, run by its executor as its last step: for a task with units, its integrated diff, which covers its units, the parent and its pull request at once; where the executor cannot launch it, the supervisor does and returns the findings to that executor. A unit is reviewed on its own only when the Plan names a risk later work must not build on unchecked. A second focused judgment is added only for a one-way-door surface or for an expertise the Plan names that the first lens lacks. Low-risk non-material internal work may close on machine checks plus supervisor verification. When the target offers staging, changes land there before production, within the applicable access and authorization limits; unavailable access is a gate, not permission to skip staging. Disposition each finding as fixed, deferred with authority and rationale, or dismissed with evidence. A stable fix to a Plan gets one targeted recheck of the changes and the conclusions they affect, by the same reviewer where the runtime can resume it. A deliverable fix is proved by a test that fails before it and passes after; only when it fixes a blocking finding of a heavy review, or reaches beyond its findings, does it also get one targeted recheck per fix cycle, by a fresh reviewer at the light-review route given the previous findings. A recheck is never a fresh floor, and a replacement reviewer adds no judgment; a repair whose blast radius is one reversible internal record may be rechecked by the supervisor.
