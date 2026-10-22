# Octoplan Brief and Plan

## Changes

A changed user outcome or foundational boundary returns to Brief. A changed graph, task meaning, route, verifier, deliverable, review trigger, disclosure, checkpoint, or gate returns affected work to Plan and focused review, except a repair that only re-cuts reviewed work along the unit rules or changes a route within its profile's rubric: the planner checks it against those rules and records it, without a fresh review.

## Phase 1: confirm the Brief

Ask one natural question at a time only about expensive-to-change foundations. State reasonable assumptions; never make the user design implementation.

Every new or materially changed outcome receives a scaled Brief playback and explicit confirmation. Replay its persisted interpretation on resume without asking again when unchanged. Where confirmation is missing, use this localized Markdown shape:

```markdown
**Octoplan · Step 1 of 3 — Brief**

**Purpose, audience, and ownership**
<why, for whom, and who owns consequence decisions>

**Outcome and proof**
<what must exist and how the user will know>

**Boundaries**
<in, out, and what must never break>

**Sources, constraints, and assumptions**
<only what can change the result>

**Known consequences**
<plain-language effects already visible, or none known yet>

**Confirm**
<one direct confirmation question>
```

After confirmation, persist those fields and their confirmation source in the existing owning record, or the contract working document when shared fields have no home. An interpretation records the accepted reading, rejected reading and countable success; reuse it only while material fields match.

### Qualify delivery

Check the actual host route, tools, access and continuation limits through the preflight below before recommending autonomy. Apply this to the bounded entrusted portion, not to every future task of an ongoing stream.

Authorized planning includes its required review and safe preflight, subject to the runtime's delegation permissions. Resolve any missing reviewer-launch permission with Brief confirmation; delivery actors and other effects still require their own authority.

Questions that affect the outcome or coverage must be resolved before dependent work. Optional asynchronous questions may accompany independent reads; elapsed time never supplies a required answer.

## Phase 2: compose the Plan

Quote requests for simplicity or efficiency. Put useful supervisor handoff seams in the existing sequencing rationale, not extra tasks or per-task token budgets.

Map the full path's secrets without values, credentials, remote surfaces, permissions, effects, human inputs and continuation limits. Check the capacities and actual inputs that constrain this plan, including tool versions or automatic writers when they affect the result. Preflight without effects; distinguish authority from credential entry and tool availability from usable access. For an uncertain capability that could stop the promised outcome, run the smallest authorized probe on the actual target and proof surface. Documentation, a tool declaration or a mock cannot establish that path. If it cannot yet be probed, schedule the probe as early as its inputs allow, name it as a possible first stop, and bound the promise to what is verifiable. Never bypass a failed connector on its service. Diagnose technical failures and evaluate alternatives within the applicable tool and service restrictions before classifying them as human work; never circumvent a permission or safety refusal. Give each confirmed person-only access requirement one human task; only its consumers depend on it. An unavailable code host blocks remote refresh, push, PRs, hosted CI or proof, not local-checkout reads, edits, or tests. Local versus remote never changes authority.

Computer Use and equivalent screen-driven GUI automation require explicit user acceptance of the disclosed targets and actions, including for verification or recovery; Full autonomy alone grants none. When the route needs Computer Use, disclose its purpose, device and apps, actions, visible use of the user's computer, and any setup the user must perform. Obtain any missing scoped acceptance before a GUI probe; reuse valid explicit acceptance without asking again. Verify usable access with the smallest harmless authorized probe in the execution environment, including required system and app permissions. Carry the scope, acceptance and access state into the reviewed summary before the autonomy choice. If refused, unavailable or revoked, adapt through permitted interfaces or expose the person-only step, preserving the outcome and proof requirements.

Before review, distinguish each independently executable effect and bounded target. Compare it with any recorded mandate, quote its source, and classify it as covered, awaiting the initial mandate or a new decision, or subject to a selected checkpoint or effective-rule gate. Use the Plan contract and owning tasks for this coverage; no extra register. Uncovered or ambiguous effects wait.

```markdown
**Octoplan · Step 2 of 3 — Plan**

1. <step and observable result>
2. <step and observable result>

**Disclosed effects**
- <coverage or required decision> <one independently executable consequence, bounded target, and when it occurs; include any Computer Use scope, acceptance and verified access or remaining setup>

**What can finish without you**
<verifiable result before the first intervention, or no useful delivery yet>

**Human interventions and limits**
- <who does what, its trigger, what it blocks and what continues; distinguish required approval from access, proof or runtime limits, unknowns and any session the user must open; or none known>

**User checkpoints in Checkpoints mode**
- <subject and owner, or none>

**Open questions**
- <unresolved follow-ups that do not change this Plan, or none>

**First ready work**
- <the first safe step and any independent branch that can start with it>

**Autonomy and next action**
<recommended mode with its trade-off and one request for the missing mandate; or recorded mode, bounds and next action without asking again>
```

State any immediate intervention or unproved path that prevents useful unattended work right after the banner. If no useful work can finish before an immediate intervention, resolve it through authorized preparation or state that delivery awaits it; do not present delivery as ready to run unattended. Describe the first expected stop by its trigger, not an invented time estimate.

Planning-only permission never authorizes Delivery: label it `Not authorized for delivery` and stop after persisting the reviewed graph. A genuine planning-only request skips the autonomy choice and never launches delivery. A later Delivery request refreshes sources, rules, review binding, and any missing choice before activation.

Every executable task carries:

```markdown
**Why**
<why this deliverable exists and what it builds on>

**What**
<one job, scope, and important non-goals>

**How**
<verified paths or sources, required outcome and constraint, edge cases, and only a precedent verified to fit this case>

**Verify**
<exact commands or checks available now, naming the real proof surface>

**Done when**
<accepted end state in the real system of record>

**Exec**
Claude: <exact model and effort from the Claude profile, with reason>
Codex: <exact model and effort from the Codex profile, with reason>

**Review**
<targeted checks; on a deliverable, each review judgment with its lens and its Claude and Codex routes; on a unit, only an early review the Plan needs, with the risk it settles; any human reviewer required by effective rules>

**Octopad**
<no by default; yes only when the work or its proof needs direct access. A spec or record update is not such a need: the worker returns the exact text and its supervisor writes it>
```

Use the live schema. Every edge carries a rationale. Add `**Preconditions**` only for a live prior artifact or maturing event.

Write `How` as outcome and constraint. Prescribe a technique or precedent only when verified evidence makes it fit. Prepare the task for an efficient capable worker: settled choices, precise sources, constraints, edge cases, expected output, and runnable acceptance checks, so the worker need not rediscover project decisions. Settle before dispatch every shared choice a unit relies on: each shared value's writers and their order, with an interleaving check in `Verify`; each consumed input's producing unit and the state it needs; each overlapping open pull request, active task or Decision, adopted, depended on or excluded in the contract. What cannot be settled yet becomes a design or probe unit first, and only the units that rely on its result wait for it; local implementation choices stay with the worker. Reference live inputs and predecessor outputs precisely; do not copy the whole project or invent details. Choose `Exec` from the judgment remaining after preparation, once per runtime, each from its own profile's rubric. A review route saved on a task names both runtimes the same way, as alternatives: only the running runtime's route runs, and two listed routes never make two judgments. Check each route against `How`, `Verify` and access: a step only one runtime supports names its equivalent in the other, or that route records the gap as a blocker. Check availability in the runtime you plan in; the other runtime checks its route before launch, and an unavailable model pauses only that actor.

Preserve saved routes, including earlier exceptions and lane requests, as floors; do not normalize them to defaults. Never substitute silently. A route with an `on failed checks` part is one saved route: when the work itself fails its acceptance checks, the supervisor records it and, once the first worker has stopped, dispatches one continuation on the second part from the reconciled artifact with the same brief, instead of returning the defect to that worker; plan and infrastructure failures follow recovery. Both attempts count toward recovery's two-cycle trigger. Any other escalation requires diagnosis and a Plan change under [Changes](#changes) before replacement, never weakening or silent substitution.

Plan only runnable `Verify` steps. Use the preflight access task when a remote surface is unavailable; a seat or UI only a person can exercise is a named human checkpoint, never verification.

Design a defeat proof for each load-bearing check: name how it could pass while the claimed outcome is broken, then show that it does not. Match the method to the actual surface and stakes; a self-produced claim cannot verify itself. When tests can bypass a changed executable production path, require negative proof at the real call site: disable the relevant call, filter or write in the task's workspace, after committing its work and with no concurrent writer, demonstrate that the relevant check fails, restore it and demonstrate that it passes. Choose the smallest set covering the material bypass risks, not one mutation for every path. For declarative configuration, CSS or static content, use a direct falsification on the real proof surface, such as demonstrating that a broken value or rendered state is detected; do not invent a call site. Every `Verify` slot names its proof surface and runnable check matched to `Done when`.

Do not create tasks for reads, logins, tool calls, status, approvals, reviews, merges, or publications unless a person owns a distinct artifact. Cut each deliverable into the smallest units that make sense in the logic of the work: one coherent change that can be built and checked on its own. Split at natural seams (in code: schema or migration, then server, then client, then AI-facing text), never mid-change, and keep an atomic change whole. A deliverable of one unit is one task; a deliverable of several is one task with one subtask per unit. Each subtask has its own **What**, **How** and **Verify**; one executor builds them in order, and in code they are commits of the task's pull request. Keep each task's pull request one coherent change a single reviewer can judge well; past that, it holds more than one deliverable: split it into more tasks, never into more reviews. A parent keeps its integrated `Verify`, `Review` and `Done when`, its `Review` being the one delivery review of its units, and its `Exec` routes that executor by its hardest unit. Consumed outputs need dependency edges. Give each user-facing text surface one final-wording owner. Require exact user-facing strings and surfaces. Put them on an unstarted owner task without changing its specification; replan if that owner started.

Match proof to the deliverable and its real target. Source or test inspection cannot satisfy rendered-UI or live-API acceptance, and an aggregate cannot satisfy a no-regression decision:

- **Repository:** exact repository, base/head, changed surfaces, applicable checks, review state, and migration/backout evidence when relevant.
- **Content:** exact document revision, factual sources, audience, approval, and publication target.
- **Research:** exact question, retained source set, citation coverage, uncertainty, and synthesis revision.
- **Operations:** exact target, dry run, approval, execution receipt, and rollback evidence.

For measurement, comparison, visual proof, or research synthesis, review the upstream premise before the output with verdict `PASS`, `INPUT UNFIT`, or `INFEASIBLE`; the latter two stop dispatch and scoring, and downstream qualification cannot rescue the input. Before scaling an evaluation, run each of its branches end to end on two or three real inputs, one with a known answer.

## Phase 3: challenge and activate

Materialize the graph before review so judgments bind exact task revisions. Two checklists from one reviewer are one judgment. One identity never impersonates two judgments. A stale judgment or identity reuse at the two-review floor is unreviewed.

Give reviewers confirmed intent, the contract, task graph, journal, relevant lasting knowledge, sources, effects, interruption semantics and rules. Include the existing mandate's exact quote, source and coverage, or mark delivery authority as awaiting the initial choice and review the proposed bounds. Each reads the bounded current evidence and stays read-only. Missing production access cannot be presented as a completed live review.

Across the required lenses, attack mandate fidelity, upstream premise, missing work, simpler decomposition, unit size, unsettled shared choices, rehearsal evidence, dependencies, failure containment, consumers, proof, assumptions, route fit, effects, authority, and gates. Ask what verified result remains possible if the user leaves after go; reject an autonomy recommendation that conceals an immediate stop or rests on unproved access. Check a planning-only classification against the user's request and context, not only the planner's label; flag an omitted autonomy question when delivery is intended. Assign integration and conflict for broad parallel work, and distinct privacy, security, data loss, reversibility, permissions, spend, or public-effect lenses when triggered.

Accept only `PASS`, `REVISE`, `INFEASIBLE`, or `HUMAN_DECISION`, with stable keyed findings, checks, evidence, and dispositions.

Put one `OCTOPLAN_PLAN_REVIEW` receipt per judgment in the journal, separate from the contract, as [records.md](records.md) defines. Name exact task IDs and `updated_at` revisions reviewed, contract identity and revision or its genuine owning task, identities, lens, route, rules, verdict, round, findings, dispositions, checks and evidence. A superseding review or authorization links, never overwrites, its predecessor.

Before showing the Plan and before activation, confirm the current task and contract revisions against the PASS receipts under [records.md](records.md) and record the comparison and current revision.

### Persist and hand off

After the Brief is confirmed:

1. complete only missing shared contract fields in their working document, or the genuine owning task; establish the linked journal with exact work coverage and unclaimed supervision, keeping task routes and specifications on tasks;
2. define each user checkpoint and house-rule gate by subject and owner.

Before review, reread every executable task from Octopad (what was saved, not what you remember writing) and check: Exec with a route per runtime, Review, and Octopad lines with their reasons; every protected effect named in plain consequence words; `How` names the specific files or sources; every claim measured this session (F16); every `Verify` slot with its proof surface and load-bearing checks with their risk- and surface-appropriate defeat proof; units cut as above, each with its own What, How and Verify; one job per unit; shared choices settled; every gap a Question, a Decision, or a placeholder. Fix failures on the spot, then recheck the fixed task.

Mark the stream ` (octoplanned)` only when the graph, required working documents, actual knowledge items and receipts exist.

Show the reviewed Plan summary. For useful agent delivery without an applicable mandate, recommend **Full autonomy**, **Checkpoints**, or **Step-by-step** with one trade-off, and ask once for the mode and bounded delivery authority. Include any runtime-required launch choice in that proposal. Where sessions launch natively, that proposal says the planner opens the supervisor session and that a supervisor may open its successor; the recorded answer states whether that successor launch is covered. Preserve the answer's exact words, source, time, mode and bounds in the journal through a guarded update. Change the contract, with focused review, only when the answer changes its reviewed coverage. Then record an activation receipt there, after task and contract revisions match PASS, naming those identities and revisions, the applicable consent, activating Plan message, effect bounds, checkpoints and house-rule gates. This binding is the planner's evidence operation, not a new user approval, and cannot expand coverage. Preserve earlier consent and activation receipts.

For authorized Delivery, launch the fresh supervisor or qualified disjoint supervisors selected by the reviewed topology through the actual runtime; confirm each creation and guarded ownership. Planning and execution must not share a heavy inherited conversation. Follow the runtime profile for the destination, launch permissions, startup proof and the planner's exit; executors start only after activation. If the real environment cannot provide that route, use its declared manual fallback from [continuation.md](continuation.md). Report that limitation honestly: a saved handoff is not an active supervisor.
