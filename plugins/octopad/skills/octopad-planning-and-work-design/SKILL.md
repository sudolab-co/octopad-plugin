---
name: octopad-planning-and-work-design
description: "Use when agreed work has an end state and needs three or more tasks over more than one conversation; before laying out several tasks as a plan; a request holds several deliverables or a step another member carries out; you create or change a stream or goal, learn of a change, or a number goal's primary signal gets a new figure; the user keeps on purpose a stream that looks finished or idle; one stream waits on another or matters to it; a task leaves its stream by archive, deletion or move; a result, decision or new task changes a fact that a stream's remaining tasks rely on; the number of tasks, nesting, prerequisites, priority order, a date or repeating work is undecided or wrong; or a test launches AI sessions, takes a person's time, costs money or fails. Changes include completing, cancelling, deleting, renaming, merging, splitting and archiving. When prepared work could benefit from delivery by agents, open the `octoplan` skill."
---
Version: 8.5.0

# From a need to prepared work

- A stream and its Octoplan (the same work, delivered by agents under an agreed autonomy) share one brief and one work graph: never create a second brief or work graph for it.

## Brief only what the request needs

- Read the existing stream, tasks, decisions and relevant sources first.
- Establish the purpose, the intended result and its proof, the boundaries and constraints, the unknowns that matter and who decides the consequences.
- Before laying out a stream or its Octoplan, ask the user up front what settles its **Definition of Success**, scope and limits that the request and workspace leave open. Settle the brief before laying out the work.
- For a smaller request, ask about a missing foundation only when it could change the result.
- Play back the intended result in proportion to the request, and confirm a material interpretation before work that depends on it.
- Create a goal, a task tree or Octoplan records only when the work needs them.
- A stream's task count and duration never set how much autonomy agents get.

## Choosing how to deliver

- When agents could usefully deliver the prepared work, the user asks for agent delivery, or work moves between agents and direct collaboration, read [Choosing how to deliver](references/choosing-delivery.md#choosing-how-to-deliver) before you offer agent delivery or change how work is delivered.

# Shaping the work

- Count the deliverables before the tasks: a deliverable can be shipped, reviewed or closed on its own, and each one is a top-level task.
- Cut each deliverable into the smallest units that make sense in the logic of its work: parts each finished and checked on its own, split at natural seams, an atomic change kept whole. Those units are its subtasks; a deliverable of one unit has none.
- Open no top-level task whose only job is to hold the others.
- When an existing task only repeats its stream's **Definition of Success** and delivers nothing of its own, move its subtasks to the top level. Preserve their dependencies and needed content, then delete the empty task.
- Where a task's scope is ambiguous at its edge, write down what it does not cover.
- Checking a deliverable, getting it accepted and delivering it (sending, publishing, deploying) stay in its Done when. Three steps are their own tasks:
  - a chosen test;
  - a step another member carries out as their own work, such as a deploy or migration;
  - work that waits for an event after its task closes, such as a spec edit due once a release reaches production when a merge closes the task. When you defer such work, create or reuse its task then, depending on the task that brings the event, or, when no member's task brings it, `blocked` with the event as its reason.
- Keep an effort flat by default: the stream, its top-level tasks and the dependencies between them.
- Keep deliverables made one after another flat: top-level tasks joined by dependencies.
- Give a chosen test one task per system it tests, such as a signup flow or a reminder service. Put all that system's cases in its What, each with what it proves, beside its run budget, never also in a deliverable's Done when.
- Make a test task depend on each task it tests and on each step another member runs for them.
- Give a test its levels, such as a protocol to approve and then its runs, as subtasks, never one subtask per case. Accepting its result is its reviewer's yes, never a task.
- Give a subtask no due date after its parent's.
- Join two deliverables only where one truly cannot start until the other lands.
- Dependencies carry order; priority says how much a thing matters within that order. When you want priority to make something happen sooner, find the missing dependency or the user's call on order instead.
- Add a preparation task only for a real prerequisite the others cannot start without, such as a shared contract they must all follow; two unrelated fixes stay independent, whatever order they are done in.
- When the user wants for their own work an order no prerequisite imposes, open the `octopad-pad` skill, section "Priorities", and keep that order in their priorities, with its reason in the `why:` of the priority it concerns, where the `pad` tool is offered. Never invent a prerequisite for it, and never lower a sibling's priority to push it down.
- Link two subtasks by a dependency only where one truly blocks the other, which is rare. That link never replaces a dependency between their parent tasks: where the parents need one, link them too.

# What a goal carries

- Record a number goal's new primary-signal figure with `goals` `record_measurement`: its `note` saying where it comes from, and its `sources` when a record holds it. A number goal is judged from that figure, never from its done tasks.
- A goal names one destination everyone involved shares, written as the place to reach ("Reach 50 active accounts"), never as an activity, and never split into targets per person: those do not move people whose work is interlocked.
- Say in `success_criterion` how the goal will be judged met: one to three signals, one of them primary, readable while the work runs and not only on the closing day.
- Where the route is known, make the primary signal an outcome target: `nature: "number"`, the measure's current value in `baseline_value`, the threshold it must reach in `target_value` and its unit in `target_unit`.
- Where the work is new and the route unknown, use a learning signal instead, such as "document 3 methods that work".
- Say in the goal's own `rationale`, never only on a linked stream, why the goal matters now. Give a goal a `deadline` only when the date is real, and then say in `rationale` why that date too.
- Write `goal_scope`, `guardrails` and `stop_condition` as concrete, checkable lines, for example `Self-serve accounts; enterprise deals left out.`, `Support load stays under 20 tickets a week.`, `Fewer than 5 active accounts after the beta.`
- When the team chooses an order between goals that no prerequisite imposes, write it, with its reason, in the `description` of each goal it concerns, which every member reads: never as an invented dependency, and never only in one person's priorities. Before you propose an order across goals, or what to pick up next among them, read the `description` of the goals concerned.
- When part of one goal serves part of another goal of the organization, link them with `goals` `link_goal`; a goal may serve several goals or none. When a goal changes, closes or is dropped, check that its links still hold.
- Once a goal not yet closed is the primary goal of streams and none of them is active or paused, propose closing it to the user, with the outcome they name.

# Which stream work belongs to

- Agreed work: reuse a goal and a stream that fit it, and open a new stream only when the work has an end state and takes three or more tasks over more than one conversation.
- Before you create a stream or a goal, read the active streams nearest to it in meaning, whatever their goal (`build_context(mode: "work_stream", query)`), then the links of each that fits (`work_stream_name`), the paused streams `work_streams` `list` shows, and the goals orientation lists: reuse one, or link the new one to it, rather than duplicate it.
- Where no goal fits the work, propose the one that would, with its outcome and why, and create it on the user's confirmation.
- For work that repeats, create the repeating task itself and file it like any task: a stream is where work sits, never the work.

# Links between pieces of work

- Between two tasks or two streams of one workspace, use `depends_on` when one waits on the other, and a link (kind `link`) for any other tie that passes the test below, each with a one-line reason.
- Link two items when, if one changed or ended tomorrow, the AI working on the other would need to know. Write the link when you create work that comes from another item, such as a fix opened after a review, and when a result or a decision shows that one item changes what another assumes.
- When you find that one stream waits on another, link them through `work_streams` `links`. Weigh that `depends_on` link when you choose what to pick up next; it never blocks.
- Send the link with the write that creates the work: in the `tasks` create call for one task, in the `work_streams` create call for a stream; after `batch_tasks`, add each link with `tasks` `link_dependency` in the same turn.
- Never use kind `link` for a wait, for two items that only share a stream or goal, or for a shared topic; a page, Key Information or a goal never takes this kind.
- When a task duplicates another, cancel it, naming the task it duplicates; never link the two.
- Write the line from the item that holds the link: why the other matters to it, in one line. Rewrite it when it no longer says why.
- When you record a decision that changes a task or a stream, read that task's or stream's links, both ways. Correct in this turn each linked item the decision changes; when a correction needs the user's confirmation, ask for it and leave the link of kind `link` to review until the correction is made or the user declines it. Then confirm that link, rewrite its line or remove it.

# Laying out a plan

- Settle the brief before layout, as "Brief only what the request needs" says.
- The plan is the task tree: top-level tasks with their dependencies, priority, impact and real due dates. Keep it there, not in a page or a list of your own.
- Before you start the first task, land everything the ask names in one pass: the goal, the stream and every task you already know, with assignments and dependencies, in as few `batch_tasks` calls as its limits allow.
- When a stream's whole work follows one logic, mark its main parts: start each top-level task's title with its phase, `P1 · <title>`, `P2 · <title>`. Subtasks carry no prefix, and a phase is never a parent task.
- When parts of an effort have their own success condition, owner, gate or schedule, make each its own stream under the same goal, linked `depends_on` for order, or by a link whose line says what one takes from the other. Keep phase prefixes for parts that one Definition of Success covers.
- When new work arrives after a stream's Definition of Success is met, or serves another result, start a new stream, linked to the first with a line saying what it takes from it.
- When a later task can be written only once the task it waits for is done, say in that dependency's rationale what it takes from it. Copy no sentence across edges.

- After the brief is settled and the stream laid out, tell the user in a few lines what you created: its goal, its links to other streams and the order of its tasks. Give the recap even with the Desktop beside the chat.

For a launch laid out in phases, see [Launch example](references/plan-example.md#launch-example).

# When an effort ends or changes shape

- When the user keeps on purpose a stream that looks finished or idle, write that in its update, and why when they say, where `work_streams` offers `set_status`.
- When the user keeps a stream open for work to come, create or reuse the task for that work now. Record what brings it back: a date they give, a dependency, `blocked` with the event it waits for, or `on_hold` when only their decision resumes it.
- Before you delete a stream that holds tasks, or archive, cancel or complete one that still holds open tasks, even when the user asked for it, propose a complete plan: each task's fate (finished, changed, cancelled, archived, trashed, moved to another stream, or kept with no stream, with a goal of its own or none) and why. Then wait for their confirmation of that plan.
- Run the stream check when you add, reopen or close a task in a stream, move one in or out, or set one `pending_review`, or when the user gives an instruction that affects a stream.
- Also check a stream when it is paused, completed, cancelled or archived. Once it is no longer open, check only its links to review.
- Check each stream concerned once before dependent work continues, even when a batch changes several of its tasks. For a move, check both the stream it left and the one it joined.
- Check its tasks and **Definition of Success** against the user's instructions and the actual results, not only against each other.
- Run the check in three steps:
  1. Read only its Definition of Success and, for each open top-level task, its title, one-liner, status, status line and the rationale of its dependencies, and its links to other streams marked to review; open a task's description only where the check touches it.
  2. Put right what no longer matches and nothing else: the order and its dependencies; a task made false, rewritten in place; a task left short, made precise now that what it waited for exists; a task made useless, `cancelled`; a missing task, created; each link to review, handled as the read's line on links to review says; work already started on the old basis, checked before it goes further. Change a Done when or the Definition of Success only as the Octopad methodology and the `work_streams` tool say.
  3. Tell the user in one line what moved; when nothing moved, write nothing.
- Keep the tracker's Scope and Rationale true: correct them in place when the work shows they no longer hold.
- Record a split, merge or move in the links and Decisions it changes, not as a dated line on a tracker.

# Design a costly test

A test is costly when, over all its runs, it launches AI sessions, takes a person's time or costs money.

Before proposing a costly test, weigh what a mistake would do before correction against the test's cost. Propose no test when acting and correcting cost less.

Octopad imposes no test: you decide whether one is needed, under the person's own instructions. When one is chosen, run nothing before the person confirms its fields:

1. Write the fields [Costly test fields](references/costly-test.md#costly-test-fields) lists, show them to the person and ask them in that message to confirm them, unless they already confirmed these exact fields.
   - When a field changes, show them again: a confirmation of anything else does not count.
2. Once they confirm, or when the person's own instructions ask for this test, create it as its own task with these fields in it, as Shaping the work says.
3. Before its first run, confirm that the revision it needs is deployed.
4. On fail, set the test task `blocked` with its reason and send the task at fault back to `in_progress`; a leaf whose What covers the fix carries it, and the fix's pull request names that leaf.
