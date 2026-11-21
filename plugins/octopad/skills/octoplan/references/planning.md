# Octoplan Brief and Plan

## Contents

- Changes
- Phase 1: confirm the Brief
- Phase 2: compose the Plan
- Phase 3: challenge and activate

## Changes

- When the user's outcome or a foundational boundary changes, return to the Brief.
- When the graph, a task's meaning, a route, a verifier, a deliverable, a review trigger, a disclosure, a checkpoint or a gate changes, return the affected work to Plan and a focused review.
- Except: a repair that only re-cuts reviewed work along the unit rules, or changes a route within its profile's rubric, needs no fresh review; the planner checks it against those rules and records it.

## Phase 1: confirm the Brief

- Ask only about foundations that are expensive to change, one natural question at a time.
- State reasonable assumptions; never make the user design the implementation.

- For every new or materially changed outcome, play back a Brief scaled to it and get the user's explicit confirmation of it.
- On resume, when the outcome is unchanged, replay its persisted interpretation without asking again.
- Where that confirmation is missing, use this shape, in the user's language:

```markdown
**Octoplan · Step 1 of 3: Brief**

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

- After the user confirms the Brief, persist those fields and the source of that confirmation in the existing owning record, or in the contract working document when shared fields have no home.
- Record an interpretation with the accepted reading, the rejected reading and the countable success; reuse it only while its material fields match.

### Qualify delivery

- Before you recommend autonomy, check the actual host route, tools, access and continuation limits through the preflight in Phase 2 below.
- Check only the bounded portion entrusted to agents, not every future task of a stream that goes on.

- Authorized planning covers its required review and safe preflight, within the runtime's delegation permissions.
- When launching a reviewer needs a permission that is missing, settle it with the Brief confirmation; delivery actors and other effects still need their own authority.

- Resolve a question that affects the outcome or coverage before the work that depends on it.
- You may ask an optional question asynchronously, alongside independent reads; elapsed time never supplies a required answer.

## Phase 2: compose the Plan

- Quote the user's requests for simplicity or efficiency.
- Record any necessary session handoff in the existing sequencing rationale.
- Do not create handoffs, extra tasks or per-task token budgets in anticipation of normal compaction.

Preflight:
- Map the full path: secrets without their values, credentials, remote surfaces, permissions, effects, human inputs and continuation limits.
- Check the capacities and actual inputs that constrain this plan, tool versions or automatic writers included when they affect the result.
- Preflight without effects. Tell authority apart from credential entry, and a tool's availability from usable access.
- When an uncertain capability could stop the promised outcome, run the smallest authorized probe on the actual target and proof surface. Documentation, a tool declaration or a mock cannot establish that path.
- When it cannot be probed yet, schedule the probe as early as its inputs allow, name it as a possible first stop, and bound the promise to what is verifiable.
- Never bypass a failed connector on its service.
- Before you class a technical failure as human work, diagnose it and evaluate alternatives within the applicable tool and service restrictions. Never get around a permission or safety refusal.
- Give each confirmed person-only access requirement one human task; only its consumers depend on it.
- An unavailable code host blocks remote refresh, push, pull requests, hosted CI or proof, not reads, edits or tests in the local checkout. Local versus remote never changes authority.

Computer Use and any equivalent screen-driven GUI automation:
- They need the user's explicit acceptance of the disclosed targets and actions, for verification or recovery too; Full autonomy alone grants none.
- When the route needs them, disclose the purpose, the device and apps, the actions, the visible use of the user's computer, and any setup the user must do.
- Before a GUI probe, get any missing scoped acceptance; reuse a valid explicit acceptance without asking again.
- Verify usable access with the smallest harmless authorized probe in the execution environment, required system and app permissions included.
- Before the autonomy choice, carry the scope, the acceptance and the access state into the reviewed summary.
- When acceptance is refused, or access is unavailable or revoked, adapt through permitted interfaces or expose the person-only step, keeping the outcome and proof requirements.

Before review, identify each independently executable effect and its bounded target, compare it with any recorded mandate, quote that mandate's source, and class the effect as one of:
- covered;
- awaiting the initial mandate or a new decision;
- subject to a selected checkpoint or an effective-rule gate.

Keep this coverage in the Plan contract and the owning tasks, in no extra register. An uncovered or ambiguous effect waits.

```markdown
**Octoplan · Step 2 of 3: Plan**

1. <step and observable result>
2. <step and observable result>

**Disclosed effects**
- <allowed by what the user already said, the decision it needs, or the checkpoint or rule it stops at> <one independently executable consequence, bounded target, and when it occurs; include any Computer Use scope, acceptance and verified access or remaining setup>

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
<recommended mode with its trade-off and one request for what agents may do without asking; or recorded mode, bounds and next action without asking again>
```

- Right after the banner, state any immediate intervention or unproved path that prevents useful unattended work.
- When no useful work can finish before an immediate intervention, resolve it through authorized preparation or state that delivery waits for it; do not present delivery as ready to run unattended.
- Describe the first expected stop by its trigger, not by an invented time estimate.

- Planning-only permission never authorizes Delivery: label the Plan `Not authorized for delivery` and stop once the reviewed graph is persisted.
- For a genuine planning-only request, skip the autonomy choice and never launch delivery.
- When the user later asks for Delivery, refresh sources, rules, review binding and any missing choice before activation.

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
Claude: <exact model and effort from the Claude profile, with the reason it requires>
Codex: <exact model and effort from the Codex profile, with the reason it requires>

**Review**
<targeted checks; on a deliverable, each review judgment with its lens and its Claude and Codex routes; on a unit, only an early review the Plan needs, with the risk it settles; any human reviewer required by effective rules>

**Octopad**
<no by default; yes only when the work or its proof needs direct access, with why and what the worker may read and write, read-only unless it names a write. A spec or record update is not such a need: the worker returns the exact text and its supervisor writes it>
```

- Use the `tasks` tool's live schema: the fields and headings it requires now.
- Give every dependency edge a rationale.
- Add `**Preconditions**` only for a live prior artifact or a maturing event.

- Write `How` as outcome and constraint. Prescribe a technique or precedent only when verified evidence makes it fit.
- Prepare the task for an efficient capable worker: settled choices, precise sources, constraints, edge cases, expected output and runnable acceptance checks, so the worker need not rediscover project decisions. Local implementation choices stay with the worker.
- Reference live inputs and predecessor outputs precisely; do not copy the whole project or invent details.

Before dispatch, settle every shared choice a unit relies on:
- each shared value's writers and their order, with an interleaving check in `Verify`;
- each consumed input's producing unit and the state it needs;
- each overlapping open pull request, active task or Decision: adopted, depended on or excluded in the contract;
- when several units apply one design or specification to sibling surfaces, each rule they would otherwise decide one by one where that design meets existing content, settled in the contract, such as what a table does when its columns do not fit the narrowest width checked.

What cannot be settled yet becomes a design or probe unit first; only the units that rely on its result wait for it.

Before review, attach to its owning task whatever `How` or `Verify` needs that sits on one machine only, such as a proof script, a reference image or a baseline (one archive when there are many), or have a planned unit commit it to the target where the target's rules allow, so that another machine, runtime or reviewer can run the task. The supervisor places an attached input where a worker without Octopad can read it. When it must stay on that machine, name it among the Plan's continuation limits.

Routes:
- Choose `Exec` from the judgment remaining after preparation, once per runtime, each from its own profile's rubric. Cursor runs the Claude route, so a task names no Cursor route.
- A review route saved on a task names both runtimes the same way, as alternatives: only the running runtime's route runs, and two listed routes never make two judgments.
- Check each route against `How`, `Verify` and access: a step only one runtime supports names its equivalent in the other, or that route records the gap as a blocker.
- Check availability in the runtime you plan in; the other runtime checks its route before launch, and an unavailable model pauses only that actor.

- Keep saved routes, earlier exceptions and lane requests included, as floors; do not normalize them to defaults, and never substitute one silently.
- A route with an `on failed checks` part is one saved route. When the work itself fails its acceptance checks, the supervisor records the failure and, once the first worker has stopped, dispatches one continuation on the second part, from the reconciled artifact with the same brief, instead of returning the defect to that worker. Plan and infrastructure failures follow recovery.
- Both attempts count toward recovery's two-cycle trigger ([recovery.md](recovery.md#diagnose-before-repeating)).
- Any other escalation needs a diagnosis and a Plan change under [Changes](#changes) before replacement, never a weakening or a silent substitution.

- Plan only runnable `Verify` steps.
- When a remote surface is unavailable, use the preflight's human access task; a seat or UI only a person can exercise is a named human checkpoint, never verification.
- For a change that ships through a pull request, read which checks its host runs on that pull request and cover each in the task's `Verify`: run locally where that costs less than a failed pull-request round, otherwise as a hosted result the supervisor waits on. A check the target's rules ignore, or one already failing on the base, is not covered: name it there as excluded.
- Never take a local pass for that hosted gate.

- For each load-bearing check, design a defeat proof: name how the check could pass while the claimed outcome is broken, then show that it does not. Match the method to the actual surface and stakes; a self-produced claim cannot verify itself.
- When tests can bypass a changed executable production path, require negative proof at the real call site: in the task's workspace, after committing its work and with no concurrent writer, disable the relevant call, filter or write, show that the relevant check fails, restore it and show that it passes. Choose the smallest set that covers the material bypass risks, not one mutation for every path.
- For declarative configuration, CSS or static content, use a direct falsification on the real proof surface, such as showing that a broken value or rendered state is detected; do not invent a call site.
- Every `Verify` slot names its proof surface and a runnable check matched to `Done when`.

Tasks and units:
- Create no task for a read, login, tool call, status, approval, review, merge or publication unless a person owns a distinct artifact.
- Cut each deliverable into the smallest units that make sense in the logic of the work: one coherent change that can be built and checked on its own. Split at natural seams (in code: schema or migration, then server, then client, then AI-facing text), never mid-change, and keep an atomic change whole.
- A deliverable of one unit is one task; a deliverable of several is one task with one subtask per unit. Each subtask has its own **What**, **How** and **Verify**; one executor builds them in order, and in code they are commits of the task's pull request.
- The task a pull request names has no open subtask when the pull request names it: its supervisor closes each unit once its commit is in, before the pull request is opened ([supervision](supervision.md#phase-4-advance-the-ready-frontier)).
- Keep each task's pull request one coherent change a single reviewer can judge well; past that, it holds more than one deliverable: split it into more tasks, never into more reviews.
- A parent keeps its integrated `Verify`, `Review` and `Done when`, its `Review` being the one delivery review of its units, and its `Exec` routes that executor by its hardest unit.
- Give consumed outputs dependency edges.
- Give each user-facing text surface one final-wording owner, and require exact user-facing strings and surfaces. Put them on an unstarted owner task without changing its specification; replan if that owner started.

Match proof to the deliverable and its real target. Source or test inspection cannot satisfy rendered-UI or live-API acceptance, and an aggregate cannot satisfy a no-regression decision:

- **Repository:** exact repository, base/head, changed surfaces, applicable checks, review state, and migration/backout evidence when relevant.
- **Content:** exact document revision, factual sources, audience, approval, and publication target.
- **Research:** exact question, retained source set, citation coverage, uncertainty, and synthesis revision.
- **Operations:** exact target, dry run, approval, execution receipt, and rollback evidence.

- For a measurement, comparison, visual proof or research synthesis, review the upstream premise before the output, with the verdict `PASS`, `INPUT UNFIT` or `INFEASIBLE`. `INPUT UNFIT` and `INFEASIBLE` stop dispatch and scoring; downstream qualification cannot rescue the input.
- Before scaling an evaluation, run each of its branches end to end on two or three real inputs, one of them with a known answer.

## Phase 3: challenge and activate

- Materialize the graph before review, so that judgments bind exact task revisions.
- Two checklists from one reviewer are one judgment; one identity never counts as two judgments.
- Where [Review floors](../SKILL.md#review-floors) require two judgments, a stale judgment or a reused identity counts as unreviewed.

- Give reviewers the confirmed intent, the contract, the task graph, the journal, relevant lasting knowledge, sources, effects, interruption semantics and rules.
- Include the existing mandate's exact quote, source and coverage, or mark delivery authority as awaiting the initial choice and give the proposed bounds for review.
- Each reviewer reads the bounded current evidence and stays read-only. Give a reviewer without an Octopad grant the exact revisions it judges, and tell it: "Do not call Octopad."
- Never present missing production access as a completed live review.

- Across the required lenses, attack: mandate fidelity, the upstream premise, missing work, a simpler decomposition, unit size, unsettled shared choices, rehearsal evidence, dependencies, failure containment, consumers, proof, assumptions, route fit (each route meets its runtime profile, saved floors kept), effects, authority and gates.
- Ask what verified result remains possible if the user leaves right after confirming delivery; reject an autonomy recommendation that conceals an immediate stop or rests on unproved access.
- Check a planning-only classification against the user's request and context, not only the planner's label; flag an omitted autonomy question when delivery is intended.
- For broad parallel work, assign integration and conflict lenses; when triggered, assign distinct privacy, security, data loss, reversibility, permissions, spend or public-effect lenses.

Accept only `PASS`, `REVISE`, `INFEASIBLE`, or `HUMAN_DECISION`, with stable keyed findings, checks, evidence, and dispositions.

- Put one `OCTOPLAN_PLAN_REVIEW` receipt per judgment in the journal, apart from the contract, as [records.md](records.md#guard-control-changes-and-preserve-review-binding) defines.
- In each, name the exact task IDs and `updated_at` revisions reviewed, the contract's identity and revision or its genuine owning task, the identities, lens, route, rules, verdict, round, findings, dispositions, checks and evidence.
- A superseding review or authorization links its predecessor and never overwrites it.

Before you show the Plan, and again before activation, check the current task and contract revisions against the `PASS` receipts under [records.md](records.md#guard-control-changes-and-preserve-review-binding), and record the comparison and the current revision.

### Persist and hand off

After the user confirms the Brief:

1. Complete only the missing shared contract fields, in their working document or in the genuine owning task.
2. Set up the linked journal with exact work coverage and unclaimed supervision; keep task routes and specifications on the tasks.
3. Define each user checkpoint and house-rule gate by subject and owner.

Before review, reread every executable task from Octopad (what was saved, not what you remember writing) and check:
- `Exec` with a route per runtime, `Review`, and `Octopad` lines with their reasons; each `Exec` meets its runtime profile, saved floors kept;
- every protected effect is named in plain consequence words;
- `How` names the specific files or sources;
- nothing `How` or `Verify` needs sits on one machine only, unless the Plan names that limit;
- every claim was measured this session (F16);
- every `Verify` slot has its proof surface, and each load-bearing check a defeat proof suited to its risk and surface;
- units are cut as above, each with its own What, How and Verify, one job per unit;
- shared choices are settled;
- every gap is a Question, a Decision or a placeholder.

Fix each failure on the spot, then recheck the fixed task.

Add ` (octoplanned)` to the stream's name only once the graph, the required working documents, the actual knowledge items and the receipts exist.

Show the reviewed Plan summary.
- Write it as [One visible program](../SKILL.md#one-visible-program) says: keep this skill's words out of it, in any language, and say the thing itself; the template's headings and the three mode names stay. For example: graph (the order the tasks run in), edge or dependency (what waits on what), route or lane (which AI, at which effort, does each task), verifier or `Verify` (the check that proves a result), journal, contract or receipt (the delivery record), mandate (what agents may do without asking), supervisor or executor (the agent that runs the delivery, the agent that does a task).
- For useful agent delivery without an applicable mandate, recommend **Full autonomy**, **Checkpoints** or **Step-by-step** with one trade-off, and ask once for the mode and the bounded delivery authority. Their answer is the explicit confirmation that delivery by Octoplan agents needs (What needs the user's confirmation first). Include any launch choice the runtime requires in that proposal.
- Where sessions launch natively, say in that proposal that this conversation opens the session that runs the delivery, and that the delivery session may open another to continue it; the recorded answer states whether that successor launch is covered.
- Preserve the answer's exact words, source, time, mode and bounds in the journal through a guarded update.
- Change the contract, with a focused review, only when the answer changes its reviewed coverage.
- Then, once task and contract revisions match the `PASS` receipts, record an activation receipt in the journal naming those identities and revisions, the applicable consent, the activating Plan message, the effect bounds, the checkpoints and the house-rule gates. This binding is the planner's evidence operation, not a new confirmation from the user, and cannot expand coverage.
- Preserve earlier consent and activation receipts.

For authorized Delivery:
- Launch, through the actual runtime, the fresh supervisor, or the qualified disjoint supervisors, that the reviewed topology selects; check each creation and its guarded ownership.
- Planning and execution never share a heavy inherited conversation.
- Follow the runtime profile for the destination, launch permissions, startup proof and the planner's exit. Executors start only after activation.
- When the real environment cannot provide that route, use its declared manual fallback from [continuation.md](continuation.md), and report that limit honestly: a saved handoff is not an active supervisor.
