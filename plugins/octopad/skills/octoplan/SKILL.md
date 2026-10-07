---
name: octoplan
description: Use when prepared work may benefit from delivery by agents, even without the name Octoplan, or when the user invokes, plans, resumes or supervises an Octoplan. Qualify the route before offering delivery; opening this skill never authorizes execution. Generic stream preparation belongs to octopad-planning-and-work-design.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octoplan"` when you open this skill.

Version: 6.2.1

# Octoplan

An Octoplan is a stream whose bounded delivery is entrusted to agents with an agreed level of autonomy. Adopt its prepared work graph, then advance every safe ready branch until the outcome is proved or a real human consequence decision is required. Octopad holds the plan, authority, evidence, and progress. The agent environment supplies live planning, delegation, review, and supervision.

## One visible program

Use the applicable banner as the first line once the user enters Octoplan planning or delivery, in both environments. Merely qualifying or offering agent delivery during ordinary stream preparation does not start this program or impose its banners:

```markdown
**Octoplan · Step 1 of 3 — Brief**
**Octoplan · Step 2 of 3 — Plan**
**Octoplan · Step 3 of 3 — Delivery**
```

The banner is the first line of the message, before any incident narrative, explanation, or table. What the user reads is written in everyday words: name what will happen and who does it, and keep this skill's vocabulary out of it, along with any synonym doing the same job; say the thing itself instead: "your team's own rules already require this", "this cannot be undone", "this sends an email". Records written for other sessions (Decisions, tasks, receipts, prompts) keep the precise wording.

The user describes the need. Apply the common brief and preparation in [octopad-planning-and-work-design](../octopad-planning-and-work-design/SKILL.md), including for a direct Octoplan request. Reuse valid confirmed intent and the same graph. The planner qualifies the delivery path, records and reviews the smallest adequate Plan, then shows its summary and human interventions before agreeing autonomy and launching a fresh supervisor through the selected runtime. The supervisor owns delivery of the Brief's outcome, including adapting the approach and resolving incidents within the mandate. An executor produces its task's deliverable. Internal roles add no user-facing stage.

## Load only what the work needs

- Read [planning.md](references/planning.md) for Brief, autonomy, Plan, review, and activation.
- Read [supervision.md](references/supervision.md) for Delivery or resume.
- Select the profile from the actual host, not the model's name: [codex-runtime.md](references/codex-runtime.md) in Codex; [claude-runtime.md](references/claude-runtime.md) in Claude Code. Read only that profile when choosing routes, launching, resuming, or checking capabilities. Unknown hosts must establish capabilities before promising autonomous delivery.
- Read [multi-stream.md](references/multi-stream.md) only for multiple streams.
- Read [recovery.md](references/recovery.md) before duplicable or hard-to-undo effects, or for ambiguity, shared-infrastructure distress, actor failure, repeated non-progress, takeover, or replan.
- Read [continuation.md](references/continuation.md) only when the selected runtime requires a manual launch or handoff.

## Shared foundation

- **F1, control plane.** Read current Octopad and target state. Every durable record uses verified sources, revisions or hashes, and read time; re-derive moving numbers, link live state, and copy no secrets or unnecessary private text. Keep no shadow control plane.
- **F2, adaptive topology.** Reuse the work that owns the outcome. Use the fewest streams, tasks, and edges that expose independent deliverables and real waits.
- **F3, progressive complexity.** Load and report only coordination, routing, and recovery mechanics the work needs.
- **F4, confirmed intent.** Every new or materially changed outcome receives a scaled Brief playback and explicit confirmation. Replay its persisted interpretation on resume without asking again when unchanged.
- **F5, falsifiable plan.** Verify material premises, record what would kill the run, and challenge the complete artifact graph before activation.
- **F6, state-bound review.** Reviews name the exact task and contract revisions inspected. Reconcile drift and refresh affected judgments; never carry PASS over a changed premise or overwrite an old receipt.
- **F7, ready work moves.** Advance safe ready branches inside the mandate. A wait or failure blocks only work that needs it. A failed trial is evidence to diagnose, not proof that the entire mission must stop.
- **F8, invariant safety.** Autonomy changes interruptions, never applicable rules, verification, review, persistence, or the evidence floor.
- **F9, recoverable ownership.** One supervisor owns a given work boundary, recorded in stream Decisions. Before retry or replacement, inspect the authoritative target. A successor proves its predecessor stopped before acting. Use `expected_updated_at` on guarded Octopad updates.
- **F10, integrated closure.** Close only from current integrated evidence: `built`, `reviewed`, `merged`, `applied`, `verified`, `released`, `accepted`, or the domain equivalent. Silence, timeouts, irrelevant green checks, and unrun checks are not PASS.
- **F11, consequence language.** Ask about a consequence the user owns, in words they can answer. Technical uncertainty goes to diagnosis or review; the user does not certify technical correctness.
- **F12, one program.** Brief, Plan, and Delivery keep the same banners and experience across environments.
- **F13, protected effects.** Disclose any effect that bills money to any party or cannot be undone, even when no house rule names it. Its authorization must cover the actual effect and target.
- **F14, environment intact.** Effective target rules, installed skills, hooks, permissions, privacy, and legal boundaries remain binding. Each actor loads guidance applicable to its work; Octoplan does not replace it or prescribe a fixed catalog. Computer Use and equivalent screen-driven GUI automation require explicit user acceptance of the disclosed targets and actions, including for verification or recovery; Full autonomy alone grants none. Apply the [planning preflight](references/planning.md) before relying on this route. Every delegated worker, reviewer and planning brief carries the accepted scope and its source, or `not authorized`, plus known access limits. User acceptance never overrides runtime restrictions or transfers system or app permissions to another actor.
- **F15, rigor sized to the stakes.** Every verification, review, and recheck is read against the stakes Decision, in both directions: reversible internal work gets the floor and nothing more, irreversible or outward work gets the full floors. Verification that outgrows the decision it protects is a defect, the same as verification that falls short; every round spends the user's time and money against the same stakes the work does.
- **F16, no unmeasured technical claims.** Every path, command, version, count, or behavior written into a record was read or measured in this session; what cannot be measured now is written as unknown, never as fact. A precise-sounding wrong fact invites no check, which is what makes it worse than a vague one.

## Autonomy and authority

After Brief confirmation, prepare and review the smallest adequate Plan. Show the reviewed summary of what agents can finish without the user and every known intervention, then ask once for the mode and bounded delivery mandate. If no useful work can finish before an immediate intervention, resolve it through authorized preparation or state that delivery awaits it; do not present delivery as ready to run unattended. Planning-only requests make no delivery choice. Reuse an earlier applicable explicit choice, showing the reviewed Plan and asking only for a missing consequence decision or runtime-required launch choice. Brief confirmation alone permits planning; silence adds no authority.

- **Full autonomy.** Continue covered work and report progress. Ordinary corrections, replanning, review, and supervisor changes preserve the mandate. A new outcome, authority need, protected effect, user-owned consequence, or substantive gate needs only its own new decision. Technical choices and dependency placement alone do not.
- **Checkpoints.** Also pause at the selected checkpoints. Default to every protected effect, human step, and Plan landing; the user may adjust this set within applicable rules.
- **Step-by-step.** Pause after each agreed step.

Mode and effect coverage are separate. An effect written into a task after the choice is not thereby authorized; send workers only the authority actually given. Preserve the chosen mode when an effect needs clarification. Ask only for that delta and continue independent covered work. An uncovered effect that was found and rejected is not an authority delta: report it, keep the mode, and continue; do not offer the user a new choice of mode. A plan defect, a failed check, or an unmeasured technical claim is never a user question either; it goes to a planner or a reviewer. Exact-artifact consent and actions reserved to a person by effective rules remain explicit gates; no mode removes them.

## Review floors

Every Plan needs one fresh independent review before activation. Use at least two independent judgments with distinct lenses for eight or more tasks, or schema, permissions, money, privacy, destructive operations, publishing, or deployment. A count-only trigger may reduce to one for internal reversible work with deterministic proof; named risk triggers and stricter effective rules may not. Every material executable change and every published or client-facing deliverable gets a fresh independent review, with a second focused lens for a one-way-door surface. Low-risk non-material internal work may close on machine checks plus supervisor verification. When the target offers staging, changes land there before production, within the applicable access and authorization limits; unavailable access is a gate, not permission to skip staging. Disposition each finding as fixed, deferred with authority and rationale, or dismissed with evidence. A stable fix to a reviewed text gets one targeted recheck by the same reviewer of the changed clauses only, never a fresh floor; a repair whose blast radius is one reversible internal record may be rechecked by the supervisor. Two consecutive rounds that add process without changing what ships trigger F15, not a third round.

## One source, native adaptations

This entrypoint and its references are maintained in `plugins/octopad/skills/octoplan/` in [sudolab-co/octopad-plugin](https://github.com/sudolab-co/octopad-plugin). Both installable distributions contain the same source files. Change common guarantees once; keep tool names, model routes, and compatibility readers in the runtime profiles. Validate and review both installed paths when shared behavior changes. Never edit installed caches or hand-maintain a second common copy.
