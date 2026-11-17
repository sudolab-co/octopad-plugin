---
name: octopad-planning-and-work-design
description: "Use when agreed work has an end state and needs three or more tasks over more than one sitting, when a request holds several deliverables or a step another member carries out, and when a result, a decision or a new task changes what a stream's remaining tasks assume. Also use it before laying out several tasks as a plan, when a stream or a goal is created, changed, renamed, merged, split or archived, when a task leaves its stream by archive, deletion or move, when the number of tasks, nesting, prerequisites, priority order, a date or repeating work is undecided or wrong, and before proposing a test that costs AI sessions, a person's time or money. Delivery by agents: octoplan."
---
Version: 7.1.0

# From a need to prepared work

A stream and an Octoplan share one brief and one work graph: Octoplan is that work delivered by agents under an agreed autonomy, not a second object. This skill owns the shared preparation. [Octoplan](../octoplan/SKILL.md) owns the delivery mandate, the executable preparation, review and activation.

## Brief only what the request needs

- Read the existing stream, tasks, decisions and relevant sources first.
- Establish the purpose, the intended result and its proof, the boundaries and constraints, the unknowns that matter and who decides the consequences.
- Ask about a missing foundation only when it could change the result, in the person's terms: no technical question to someone who said they are not technical. Settle yourself what the sources already settle; where to file the work, its workspace and stream, is always yours to settle.
- Play back the intended result in proportion to the request, and confirm a material interpretation before work that depends on it. A clear capture can need one sentence, not an interview.
- An ongoing stream needs its area of responsibility and its routing boundaries, not an invented finish line.
- A small job may need one task in an existing stream, or no new stream. Create a goal, a task tree or Octoplan records only when the work needs them, never to complete a form.
- The stream rules below choose the work's home. Their task count and duration never set how much autonomy agents get.

## Choosing how to deliver

When agents could usefully deliver the prepared work, when the user asks for agent delivery, or when work moves between agents and direct collaboration, read [Choosing how to deliver](references/choosing-delivery.md) before you offer or change how it is delivered.

# Shaping the work

- Where a task's scope is ambiguous at its edge, write down what it does not cover. An unstated exclusion is how two people build the same half twice.
- Count the deliverables before you count tasks. A deliverable is something that could be shipped, reviewed or closed on its own, and their number is the number of top-level tasks.
- Cut each deliverable into the smallest units that make sense in the logic of its work: parts each finished and checked on its own, split at natural seams, an atomic change kept whole. Those units become its subtasks; a deliverable of one unit has none.
- Open no top-level task whose only job is to hold the others. An umbrella restates the stream and delivers nothing.
- Checking a deliverable, getting it accepted and delivering it (sending, publishing, deploying) stay in its Done when, except a chosen test and a step another member carries out as their own work, such as a deploy or migration, each its own task.
- Keep deliverables made one after another flat: top-level tasks joined by dependencies.
- A chosen test is its own task, one per system it tests, such as a signup flow or a reminder service. Put all that system's cases in its What, each with what it proves, beside its run budget, never also in a deliverable's Done when.
- Make a test task depend on each task it tests and on each step another member runs for them, such as their deploy or migration.
- Give a test its levels, such as a protocol to approve and then its runs, as subtasks, never one subtask per case. Accepting its result is its reviewer's yes, never a task.
- A subtask may not fall due after the task above it.
- Join two deliverables only where one truly cannot start until the other lands. An edge added for tidiness serializes work that could run side by side.
- Dependencies carry order; priority says how much a thing matters within that order. Reaching for priority to make something happen sooner means a real dependency, or the user's call on order, is missing.
- Add a preparation task only for a real prerequisite that the others cannot start without, such as a shared contract they must all follow. Two unrelated fixes stay independent, whatever order they are done in.
- When the user wants an order no prerequisite imposes, open `../octopad-notepad/SKILL.md` and keep that order in their priorities, with its reason in the `why:` of the priority it concerns, where they have a Notepad. Never invent a prerequisite for it, and never lower a sibling's priority to push it down.
- Wire a dependency between two subtasks only where one genuinely blocks the other, which is rare. It stands in for nothing at the level above.

# What a goal carries

- A goal names one destination the whole team shares, written as the place to reach ("Reach 50 active accounts"), never as an activity. Targets split per person do not move a team whose work is interlocked.
- Say in the goal's `description` how it will be judged: one to three signals, one of them primary, readable while the work runs and not only on the closing day. Where the route is known, use an outcome target: a measure with the threshold it must reach.
- Where the work is new and the route unknown, use a learning signal instead, such as "document 3 methods that work". A number fixed before anyone has walked the ground aims the team at the wrong thing.
- Give a goal a `deadline` only when the date is real, and say in one line why the goal matters now.
- Put the reason and the date in the goal's own description, each on its own line, never only on a linked stream:
  `Why now: two enterprise pilots stalled on this gap last quarter.`
  `Deadline 2026-11-30: renewal date of the affected contract.`
- Once every time-bound stream under a goal is complete, put closing the goal to the user. The close runs in one move and the tool walks through the post-mortem choices. Each close files a new post-mortem that supersedes the one before it, unless the user explicitly accepts closing without one.

# Which stream work belongs to

- A stream is one effort toward a precise result, with a Definition of Success; its target date is optional. Open one where agreed work has an end state and takes three or more tasks over more than one sitting.
- To choose a task's stream, look in this session's workspace, or in another whose description fits the work better once the person confirms it, as the session's workspace list asks. If the task pushes a time-bound stream's goal forward, use that stream; if it is ordinary work of a domain, use the ongoing one. If several fit, take the one whose one-liner fits closest. If none fits, open a new time-bound stream when the rule above calls for one, otherwise leave the task without a stream. Then say where you filed the work; never ask where to file it.
- Give an effort toward an outcome the home it needs: reuse a goal and a stream that fit, and open a new stream only where the rule above calls for one.
- Give a time-bound stream one primary goal, and at most two more beside it. Where nothing on the board fits, propose the goal that would, with the outcome and why.
- Move work that advances a goal out of an ongoing stream into a time-bound one, or the goal's progress cannot be seen.
- When you find that one stream waits on or continues another, link them with the kind and a one-line reason. When you choose what to pick up next, weigh a `depends on` link: it informs and never blocks.
- Asked for work that repeats, create and route the repeating task itself. A stream is where the work sits, never the work.

# Laying out a plan

- The plan is the task tree: top-level tasks with their dependencies, priority, impact and real due dates. Keep it there, not in a page or a list of your own.
- Everything the ask names lands in one pass: the goal, the stream, and every task in as few `batch_tasks` calls as its limits allow, with assignments and dependencies. Add nothing in a second pass that you already knew.
- Keep an effort flat by default: the stream, its top-level tasks and the dependencies between them.
- When a stream's whole work follows one logic, mark its main parts: start each top-level task's title with its phase, `P1 · <title>`, `P2 · <title>`. Subtasks carry no prefix, and a phase is never a parent task.
- When parts of an effort have their own success condition, owner, gate or schedule, make each its own stream under the same goal, linked `depends on` for order or `builds on` for a continuation. Keep phase prefixes for parts that one Definition of Success covers.
- When new work arrives after a stream's Definition of Success is met, or serves another result, start a new stream linked `builds on`.
- When a later task can be written only once the task it waits for is done, say in that dependency's rationale what it takes from it. Copy no sentence across edges.

**Laying out a five-week launch.**

User, on 2026-04-26: *"Lay out the launch: research, then design, then build, then ship, across the next five weeks."*

- Wrong: one `tasks(action:"create")` per task, then `link_dependency` calls: seven round trips for one plan, the pattern `batch_tasks` exists to collapse.
- Right: the stream first, then the whole graph in as few `batch_tasks` calls as its limits allow.
  1. Open the time-bound stream "Launch Q2" with its `definition_of_success`, its goal and a `target_date` of `2026-05-31`, five weeks from the day the user asked. That horizon sits on the effort, never copied onto its tasks.
  2. Send the whole set with the stream given once as each call's default and `depends_on_refs` carrying every edge, an earlier call's task by its ID. Make no second pass of `link_dependency` calls.
- Why the titles carry phases: the launch follows one logic, research then design then build then ship, so each top-level task starts with `P1 · ` to `P4 · ` and no parent holds them. Five independent fixes, each checked in its own Done when, follow no such logic: they get no phases, no umbrella, and a test task only when one is needed, as the methodology says.
- Why no task carries a date: the user gave a rough span, not four deadlines. The span became the effort's horizon and stopped there; `depends_on_refs` carries the order between the tasks.

# When an effort ends or changes shape

- Keep the stream's tasks and its Definition of Success coherent and correct. Check them each time a task is added to or closed in the stream, and as soon as the person gives an instruction that affects the stream, before dependent work continues:
  1. Read light: the Definition of Success, one line per open top-level task (title, status, status line) and the rationale of its dependencies. Open a description only where the check touches that task.
  2. Compare them with the person's instructions and the actual results, not only with each other.
  3. Put right what no longer matches and nothing else: the order and its dependencies; a task made false, rewritten in place; a task left short, made precise now that what it waited for exists; a task made useless, `cancelled`; a missing task, created; work already started on the old basis, checked before it goes further.
  4. Change a Done when or the Definition of Success only on the person's yes: show the old text, the new text and why, unless they asked for the change. Record a Definition of Success change as a Decision scoped to the stream, with old, new and why.
  5. Tell the person in one line what moved. When nothing moved, write nothing.
- Keep the tracker's Scope and Rationale true: correct them in place when the work shows they no longer hold.
- Only a time-bound stream has a lifecycle: active, then completed, then archived. Completed keeps it in context and in search until its goal is reached. Archived takes it out of context, so archiving before the goal is reached removes what the goal still works from.
- Tracker pages live in the system Trackers and Archive folders and render read-only.
- Before you complete a stream, append its `## Closing Report` to its tracker.
- Record a split, merge or move in the links and Decisions it changes, not as a dated line on a tracker.
- When a stream is completed or archived, settle its open questions as `../octopad-knowledge-evidence/SKILL.md` says.

# Design a costly test

A test is costly when, over all its runs, it launches AI sessions, takes a person's time or costs money.

Octopad imposes no test: you decide whether one is needed, under the person's own instructions. A test is worth it only when its result could change what someone does.

1. Weigh it against acting without it, by what a mistake would do before you could correct it, not by whether its text can be edited: who acts on it, what it sends, writes or ships, and to how many. When acting and correcting cost less than the test, act within the usual approvals and watch real use: propose no test.
2. Otherwise the test must cost less than the harm it prevents. The method the person suggests is one option, not the brief.
3. If the test is still worth it, show the person the fields below and ask for the go in that message, unless they already approved these exact fields. When a field changes, show them again: a go given to anything else is no go.
4. Create the test as its own task, as Shaping the work says, with these fields in it, on that go or when the person's own instructions ask for this test. Run nothing before the go on its fields.
5. Before its first run, confirm that the revision it needs is deployed.

- **Decision:** the observable result and its threshold, and what you do on pass, on fail and on an inconclusive result. On fail, set the test task `blocked` with its reason and send the task at fault back to `in_progress`; a leaf whose What covers the fix carries it, and the fix's pull request names that leaf. If no result would change what you do, run nothing.
- **Method and ceiling:** the cheapest method able to establish that result, and why each cheaper one cannot; the smallest series that could change the decision. A large expected effect needs few runs, and distinct real cases come before repeats of one. Then a numeric ceiling on runs, retries and grading included, and for AI runs on the tokens they may use, counting the context each run reloads and their output, with a stop rule set before the first result. Say so when nothing can stop the runs at that token ceiling. At the ceiling, stop and report: only the person extends it. Keep the model the question is about; every other agent uses the smallest model that does its job.
- **Proof:** a known failing case the test must catch and a sound case it must pass. Then every attempt, aborted ones included, reconciled with its traces, and what it changed, restored and checked.

One AI run shows that something can happen, never how often.
