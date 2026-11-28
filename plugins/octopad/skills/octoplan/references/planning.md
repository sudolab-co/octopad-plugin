# Brief and plan

## Brief

- Read [Brief only what the request needs](../../octopad-planning-and-work-design/SKILL.md#brief-only-what-the-request-needs) and [Prepare enough to choose how to deliver](../../octopad-planning-and-work-design/references/choosing-delivery.md#prepare-enough-to-choose-how-to-deliver) before briefing. Keep the brief there; reuse its confirmation while the outcome is unchanged.
- Read the stream, its tasks and the sources first, and settle yourself what they settle. Ask only about choices costly to change later, one question at a time, stating reasonable assumptions. Never make the user design the implementation.
- When the outcome names a population (every user, AI client, platform or plan), list its variants and give each a task, a measurement or a named limit; a task covering only some names them.

Get the user's explicit confirmation of a brief scaled to the work:

```markdown
**Step 1 of 3: Brief**

**Why and for whom**
**Result and proof**
**Limits** <in, out, what must not break>
**Assumptions** <only those that could change the result>
**Known consequences**
**Confirm** <one direct question>
```

## Check the path before you promise

- List what the work needs: access, credentials (never their values), tools, human inputs, and whether this host can launch and wake a supervisor.
- Probe an uncertain capability that could stop the outcome with the smallest harmless check on the real target: a document or a mock proves no path.
- A step only a person can do, such as granting an access, becomes one human task; only the tasks that need it wait for it.
- For Computer Use, disclose the purpose, the device and apps, the actions and any setup; after the user's explicit acceptance, check access with a harmless probe.

## Draft the plan

- Give each deliverable one task. Cut it into the smallest coherent units, each built and checked alone, at natural seams (schema, server, client, AI-facing text), never mid-change.
- Make several units subtasks with `What`, `How` and `Verify`, built in order by one executor. In code, each is a commit of the task's pull request. One pull request finishes its task; split work too large for one reviewer into more tasks.
- Create no task for a read, a login, a review or a merge unless a person owns a distinct result. Give each dependency a one-line reason, and each user-facing text one owner task.

Each executable task carries:

```markdown
**Why**
**What** <one job, its non-goals, and the effects it may perform with their targets>
**How** <exact files or sources, required result, constraints, edge cases>
**Verify** <runnable checks, each naming its proof surface>
**Done when**
**Exec**
Claude: <route from the Claude profile, with its reason>
Codex: <route from the Codex profile, with its reason>
**Review** <none, with why; or one reviewer, its focus and both routes; plus any human reviewer the target's rules require>
**Octopad** <no; or yes, with why and what the executor may read and write, read-only unless it names a write>
```

- `How` gives the result and its constraints; name a technique only when evidence shows it fits.
- Write only paths, commands, versions and behavior you read or measured this session; mark the rest unknown.
- A spec or record update is no reason for `Octopad: yes`: the executor returns the text and the supervisor writes it.
- Settle choices shared by units: each value's writers and order, each input's producer, overlapping pull requests, tasks and Decisions, and rules sibling surfaces would otherwise choose separately. Put unsettled choices in a first design or probe task.

Checks:
- Plan only checks someone can run, matched to `Done when`.
- For a pull request, cover each check its host runs, locally where cheaper than a failed round, else as a hosted result to wait on; a local pass never stands in for the hosted gate. Name as excluded a check the target's rules ignore or one already failing on the base.
- For each check the result rests on, say how it could pass on a broken outcome, and show it does not; when tests can bypass the changed code, disable that code once and show the check fails.
- Run a measurement or research task end to end on two or three real inputs, one with a known answer, before scaling it.
- Attach to its task anything a check needs that sits on one machine only, or name that machine as a limit.
- Plan a change through the target's staging environment, when it has one, before production.

Routes:
- Choose each task's `Exec` once per runtime, from each profile's rubric and the judgment left after preparation. Keep a saved route, or one the user chose, unless [Changes](#changes) applies; never substitute one silently.
- A route with an `on failed checks` part is one route.
- A step only one runtime supports names its equivalent in the other, or the gap as a blocker.
- Set `Review` from the [review rule](../SKILL.md#review) and each profile's review column.

## Review the draft

Before writing anything into Octopad, give the whole draft to fresh reviewers under [Review](../SKILL.md#review), at your profile's plan review route. Include the brief, sources, effects, target's rules and "Do not call Octopad." Ask them to attack missing work, a simpler cut, unit size, shared choices, dependencies, false-passing checks, routes, `Review`, effects and consent against the user's request, and what finishes if the user leaves after agreeing.

It answers `PASS`, `REVISE` with findings, or a question only the user can answer. Apply the findings; one that changes the brief goes back to the user. Run no second round.

## Write the plan into Octopad

- Write the tasks, subtasks and dependencies once. Reread each task as saved and fix any missing heading, route or reason.
- Add ` (octoplanned)` to the stream's name. For a planning-only request, instead post a stream update saying the plan is `Not authorized for delivery`, and stop.

## Propose delivery

```markdown
**Step 2 of 3: Plan**

1. <task title: what it produces>
**What agents will do on their own** <each effect, its target and when; any Computer Use>
**What can finish without you**
**Where you are needed** <who does what, its trigger, what it blocks; or none>
**Autonomy** <recommended mode, its trade-off, and one question: the mode and what agents may do without asking>
```

- Right after the banner, name any immediate stop that prevents useful unattended work. Describe stops by their trigger, never by a time estimate.
- Add what your runtime profile asks you to say before the launch. When a mandate the user gave still covers the plan, ask only what is missing.

### Record the mandate

Before the launch, never only in chat:
- Post one stream update with `work_streams` `set_status`: in `line`, the date, the mode, and the allowed effects with their targets; in `note`, the limits and the user's decisive words.
- Make each task's `What` match the effects the answer allows.
- Where `work_streams` offers no `set_status`, every update this skill posts or reads is a comment on the plan's first task instead.

Every later Octoplan update repeats the mandate in its `note`. When the latest update lacks it, take the effects from the tasks and ask the user only for the rest, such as the mode.

### Launch

Launch the supervisor as your profile says: a fresh top-level session at the supervisor route, never a sub-agent. Where the host cannot, end your turn with this pointer, one line naming the supervisor's model and effort, and one sentence asking the user to open a new session with it. Then do no delivery work; answer only about a defect in the plan.

```text
Octoplan: run the delivery of <each stream it covers, by name and ID>.
Octopad · Organization: <organization> · Workspace: <workspace>
User language: <the language the user writes in>
```

## Changes

- A changed outcome or limit goes back to the brief with the user.
- A change to a task's meaning, dependencies, checks, effects or review gets one review of the changed tasks.
- Re-cutting along the unit rules, or a route change within its profile's rubric, needs no review: note it on the task.
