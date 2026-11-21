---
name: octopad-planning-and-work-design
description: "Use when agreed work has an end state and needs three or more tasks over more than one sitting; when a request holds several deliverables or a step another member carries out; when you are about to create, change, complete, rename, merge, split or archive a stream or a goal, or learn of such a change; when one stream waits on or continues another; when a task leaves its stream by archive, deletion or move; when a result, a decision or a new task changes what a stream's remaining tasks assume; before laying out several tasks as a plan; when the number of tasks, nesting, prerequisites, priority order, a date or repeating work is undecided or wrong; and when a test would launch AI sessions, take a person's time or cost money. When the prepared work could benefit from delivery by agents, such as work that needs no choice from the user at each step, open the `octoplan` skill for that delivery."
---
Version: 7.4.0

# From a need to prepared work

- A stream and its Octoplan share one brief and one work graph: Octoplan is that work delivered by agents under an agreed autonomy. Never create a second brief or work graph for it.
- This skill owns the preparation both share.
- The `octoplan` skill owns the delivery mandate, the executable preparation, its review and its activation.

## Brief only what the request needs

- Read the existing stream, tasks, decisions and relevant sources first.
- Establish the purpose, the intended result and its proof, the boundaries and constraints, the unknowns that matter and who decides the consequences.
- Ask about a missing foundation only when it could change the result, in the user's terms; ask no technical question of someone who said they are not technical.
- Settle yourself what the sources already settle.
- Play back the intended result in proportion to the request, and confirm a material interpretation before work that depends on it; a clear capture can need one sentence, not an interview.
- A small job may need one task in an existing stream, or no new stream: create a goal, a task tree or Octoplan records only when the work needs them, never to fill a form.
- A stream's task count and duration never set how much autonomy agents get.

## Choosing how to deliver

Before you offer agent delivery or change how work is delivered, read [Choosing how to deliver](references/choosing-delivery.md) when:
- agents could usefully deliver the prepared work;
- the user asks for agent delivery;
- work moves between agents and direct collaboration.

# Shaping the work

- Where a task's scope is ambiguous at its edge, write down what it does not cover: an unstated exclusion is how two people build the same half twice.
- Count the deliverables before the tasks: a deliverable can be shipped, reviewed or closed on its own, and each one is a top-level task.
- Cut each deliverable into the smallest units that make sense in the logic of its work: parts each finished and checked on its own, split at natural seams, an atomic change kept whole. Those units are its subtasks; a deliverable of one unit has none.
- Open no top-level task whose only job is to hold the others: an umbrella restates the stream and delivers nothing.
- Checking a deliverable, getting it accepted and delivering it (sending, publishing, deploying) stay in its Done when. Two steps are their own tasks: a chosen test, and a step another member carries out as their own work, such as a deploy or migration.
- Keep an effort flat by default: the stream, its top-level tasks and the dependencies between them.
- Keep deliverables made one after another flat: top-level tasks joined by dependencies.
- A chosen test is its own task, one per system it tests, such as a signup flow or a reminder service. Put all that system's cases in its What, each with what it proves, beside its run budget, never also in a deliverable's Done when.
- Make a test task depend on each task it tests and on each step another member runs for them, such as their deploy or migration.
- Give a test its levels, such as a protocol to approve and then its runs, as subtasks, never one subtask per case. Accepting its result is its reviewer's yes, never a task.
- A subtask never falls due after its parent.
- Join two deliverables only where one truly cannot start until the other lands: an edge added for tidiness serializes work that could run side by side.
- Dependencies carry order; priority says how much a thing matters within that order. When you want priority to make something happen sooner, find the missing dependency or the user's call on order instead.
- Add a preparation task only for a real prerequisite that the others cannot start without, such as a shared contract they must all follow; two unrelated fixes stay independent, whatever order they are done in.
- When the user wants an order no prerequisite imposes, open the `octopad-notepad` skill, section "Priorities", and keep that order in their priorities, with its reason in the `why:` of the priority it concerns, where they have a Notepad. Never invent a prerequisite for it, and never lower a sibling's priority to push it down.
- Link two subtasks by a dependency only where one truly blocks the other, which is rare. That link never replaces a dependency between their parent tasks: where the parents need one, link them too.
- When a task takes up or continues another task's result without waiting on it, such as a fix opened after a review, link it `builds_on` with what it takes from that result; keep `depends_on` for a real wait. Link no duplicate: cancel it, naming the task it duplicates.

# What a goal carries

- A goal names one destination the whole team shares, written as the place to reach ("Reach 50 active accounts"), never as an activity, and never split into targets per person: those do not move a team whose work is interlocked.
- Say in the goal's `description` how it will be judged: one to three signals, one of them primary, readable while the work runs and not only on the closing day. Where the route is known, use an outcome target: a measure, its current value and the threshold it must reach.
- Where the work is new and the route unknown, use a learning signal instead, such as "document 3 methods that work": a number fixed before anyone has walked the ground aims the team at the wrong thing.
- Give a goal a `deadline` only when the date is real. In the goal's own `description`, never only on a linked stream, say on one line why the goal matters now and, with a deadline, on another why that date:
  `Why now: two enterprise pilots stalled on this gap last quarter.`
  `Deadline 2026-11-30: renewal date of the affected contract.`
- When they are real, add to the `description`, each on its own line, what the goal pursues and leaves out, what must not degrade on the way, and what would make the team drop it:
  `Scope: self-serve accounts; enterprise deals left out.`
  `Guardrail: support load stays under 20 tickets a week.`
  `Stop if: fewer than 5 active accounts after the beta.`
- When part of one goal serves part of another goal of the organization, link them with `link_goal`, saying which part serves which; a goal may serve several goals or none. When a goal changes, closes or is dropped, check that its links still hold.
- Once a goal not yet closed has streams and none of them is active or paused, propose closing it to the user, with the outcome they name.

# Which stream work belongs to

- File work yourself and say where: this session's workspace, or another whose description fits the work better. When no workspace fits the work, ask the user where to file it; otherwise never ask where to file work.
- Agreed work: reuse a goal and a stream that fit it, and open a new stream only when the work has an end state and takes three or more tasks over more than one sitting.
- A single task: match its stream as `work_stream_id` says; with no stream, give it the tags already in use that fit it.
- Where no goal fits the work, propose the one that would, with its outcome and why; create it on the user's confirmation, and continue independent authorized work meanwhile.
- When you find that one stream waits on or continues another, link them through `links`. Weigh a stream's `depends_on` link when you choose what to pick up next; it never blocks.
- For work that repeats, create the repeating task itself and file it like any task: a stream is where work sits, never the work.

# Laying out a plan

- The plan is the task tree: top-level tasks with their dependencies, priority, impact and real due dates. Keep it there, not in a page or a list of your own.
- Before you start the first task, land everything the ask names in one pass: the goal, the stream, and every task you already know, in as few `batch_tasks` calls as its limits allow, with assignments and dependencies.
- When a stream's whole work follows one logic, mark its main parts: start each top-level task's title with its phase, `P1 · <title>`, `P2 · <title>`. Subtasks carry no prefix, and a phase is never a parent task.
- When parts of an effort have their own success condition, owner, gate or schedule, make each its own stream under the same goal, linked `depends_on` for order or `builds_on` for a continuation. Keep phase prefixes for parts that one Definition of Success covers.
- When new work arrives after a stream's Definition of Success is met, or serves another result, start a new stream linked `builds_on`.
- When a later task can be written only once the task it waits for is done, say in that dependency's rationale what it takes from it. Copy no sentence across edges.

**Laying out a five-week launch.**

User, on 2026-04-26: *"Lay out the launch: research, then design, then build, then ship, across the next five weeks."*

- Wrong: one `tasks(action:"create")` per task, then `link_dependency` calls: seven round trips for one plan, the pattern `batch_tasks` exists to collapse.
- Right: the stream first, then the whole graph in as few `batch_tasks` calls as its limits allow.
  1. Open the stream "Launch Q2" with its `definition_of_success`, its goal and a `target_date` of `2026-05-31`, five weeks from the day the user asked. That horizon sits on the effort, never copied onto its tasks.
  2. Send the whole set with the stream given once as each call's default and `depends_on_refs` carrying every edge, an earlier call's task by its ID. Make no second pass of `link_dependency` calls.
- Why the titles carry phases: the launch follows one logic, research then design then build then ship, so each top-level task starts with `P1 · ` to `P4 · ` and no parent holds them. Five independent fixes, each checked in its own Done when, follow no such logic: they get no phases, no umbrella, and a test task only when one is needed, as Shaping the work says.
- Why no task carries a date: the user gave a rough span, not four deadlines. The span became the effort's horizon and stopped there; `depends_on_refs` carries the order between the tasks.

# When an effort ends or changes shape

- Each time a task is added to, reopened in or closed in a stream, and as soon as the user gives an instruction that affects the stream, check the stream's tasks and Definition of Success against the user's instructions and the actual results, not only against each other, before dependent work continues:
  1. Read only its Definition of Success and, for each open top-level task, its title, one-liner, status, status line and the rationale of its dependencies; open a task's description only where the check touches it.
  2. Put right what no longer matches and nothing else: the order and its dependencies; a task made false, rewritten in place; a task left short, made precise now that what it waited for exists; a task made useless, `cancelled`; a missing task, created; work already started on the old basis, checked before it goes further. When you change a Done when or the Definition of Success, tell the user the old text, the new and why; lowering what one requires when the user did not ask for it needs their confirmation first. Record a Definition of Success change as a Decision scoped to the stream, with the old text, the new and why.
  3. Tell the user in one line what moved; when nothing moved, write nothing.
- Keep the tracker's Scope and Rationale true: correct them in place when the work shows they no longer hold.
- Record a split, merge or move in the links and Decisions it changes, not as a dated line on a tracker.

# Design a costly test

A test is costly when, over all its runs, it launches AI sessions, takes a person's time or costs money.

Octopad imposes no test: you decide whether one is needed, under the person's own instructions. When one is chosen:

1. Show the person the fields below and ask them in that message to confirm them, unless they already confirmed these exact fields.
   - When a field changes, show them again: a confirmation of anything else does not count.
2. Once they confirm, or when the person's own instructions ask for this test, create it as its own task with these fields in it, as Shaping the work says.
   - Run nothing before they confirm its fields.
3. Before its first run, confirm that the revision it needs is deployed.

- **Decision:**
  - the observable result and its threshold, and what you do on pass, on fail and on an inconclusive result;
  - on fail, set the test task `blocked` with its reason and send the task at fault back to `in_progress`; a leaf whose What covers the fix carries it, and the fix's pull request names that leaf.
- **Method and ceiling:**
  - the cheapest method able to establish that result, and why each cheaper one cannot;
  - treat the method the person suggests as one option, not the brief;
  - the smallest series that could change the decision: a large expected effect needs few runs, and distinct real cases come before repeats of one;
  - never claim how often something happens from one AI run: it shows only that it can;
  - a numeric ceiling on runs, retries and grading included, and for AI runs on the tokens they may use, counting the context each run reloads and their output;
  - say so when nothing can stop the runs at that token ceiling;
  - a stop rule, set before the first result;
  - at the ceiling, stop, report and leave any extension to the person;
  - the model the question is about, kept;
  - every other agent on the smallest model that does its job.
- **Proof:**
  - a known failing case the test must catch and a sound case it must pass;
  - after the runs, every attempt, aborted ones included, reconciled with its traces, and what it changed, restored and checked.
