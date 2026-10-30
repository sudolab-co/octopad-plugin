---
name: octopad-planning-and-work-design
description: "Use while a request's task count, prerequisites, nesting, scores, dates or repetition are undecided or wrong, and before laying out several tasks as a roadmap, plan or launch, creating or changing a stream or goal, or taking a task out of its stream by archive, deletion or move. Delivery by agents: octoplan."
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-planning-and-work-design"` when you open this skill.

Version: 5.3.0

# From a need to prepared work

A stream and an Octoplan use the same brief and work graph. Octoplan is the delivery of that work by agents under an agreed level of autonomy, not a second object. This skill owns the common preparation; [Octoplan](../octoplan/SKILL.md) owns its delivery mandate, executable preparation, review and activation.

## Brief only what the request needs

Read the existing stream, tasks, decisions and relevant sources first. Establish the purpose, intended result and proof, boundaries, constraints, important unknowns and who decides consequences. Ask about missing foundations that could change the result; resolve what the sources already settle yourself. Play back the intended result in proportion to the request, and confirm material interpretations before work that depends on them. A clear capture can need only a sentence, not an interview. Creating a stream or a plan grants no agent-delivery mandate and does not pause work the user already asked you to execute. A request limited to planning stays limited to planning.

An ongoing stream needs its area of responsibility and routing boundaries, not an invented finish line. A small job may need one task in an existing stream or no new stream. Do not manufacture a goal, task tree or Octoplan records to complete a form. The stream rules below choose the work's home; their task count and duration are never thresholds for autonomy.

## Choosing how to deliver

When agents could usefully deliver the prepared work, when the user asks for agent delivery, or when work moves between agents and direct collaboration, read [Choosing how to deliver](references/choosing-delivery.md) before you offer or change how it is delivered.

# Shaping the work

- Where a task's scope is ambiguous at its edge, write down what it does NOT cover; an unstated exclusion is how two people build the same half twice.
- Count the deliverables before you count tasks: a deliverable is something that could be shipped, reviewed or closed on its own, and the number of those is the number of top-level tasks — no more and no fewer.
- Cut each deliverable into the smallest units that make sense in the logic of its work: parts each finished and checked on its own, split at natural seams, never mid-change, an atomic change kept whole. Those units become its subtasks; a deliverable of one unit has none.
- Never open a top-level task whose only job is to hold the others beneath it. An umbrella restates the stream and delivers nothing of its own.
- Checking a deliverable, getting it accepted and delivering it are not parts of it: they stay in its Done when, as the methodology says. Deliverables made one after another stay flat all the same: top-level tasks joined by dependencies.
- A subtask may not fall due after the task above it.
- Join two deliverables only where one truly cannot start until the other lands; an edge added for tidiness serialises work that could have run side by side.
- Order is what dependencies carry, and priority says how much a thing matters within an order already settled. Reaching for priority to make something happen sooner is the sign that a real dependency, or the user's call on order, is missing.
- Add a preparation task only for a real prerequisite, something the others cannot start without, such as a shared contract they must all follow; two unrelated fixes stay independent, whatever order they are done in. When the user wants an order no prerequisite imposes, keep it as their call on work order, with its reason, in their Notepad where they have one: never invent a prerequisite for it, and never lower a sibling's priority to push it down.
- Between two subtasks a dependency is optional and stands in for nothing at the level above: wire one only where that subtask genuinely blocks that other one, which is rare.

# The scales

- Priority is read inside one stream and never across streams: High (3) is urgent or holds up other work, Normal (2) is the default, Low (1) is worth doing with nothing waiting on it.
- Impact runs 1 to 5 — 5 serves the primary goal, 4 serves a secondary goal or clears the way for a 5, 3 keeps the stream healthy or unblocks something, 2 is a small improvement, 1 is cosmetic.
- Score every leaf, meaning any task with no subtasks, a top-level one included; a task that has subtasks takes its figure from them, so leave it unset there.
- The same holds inside one batch: a row that other rows in the call nest under is averaged from those rows and carries no impact of its own.
- A parent whose subtasks arrive in a LATER call is the exception — score it, since there is nothing yet to average, and it is recomputed once the children land.
- The AI score is computed for you. Never write one by hand.

# What a goal carries

- A goal names one destination the whole team shares, put as the place to reach ("Reach 50 active accounts") and never as an activity to perform; targets split per person do not move a team whose work is interlocked.
- Say in the goal's `description` how it will be judged: one to three signals, one of them primary, chosen so they can be read while the work runs and not only on the closing day. Where the route is known that is an outcome target — a measure with the threshold it has to reach.
- Where the work is new and the route is not known yet, take a learning signal — "document 3 methods that work" — in its place: a number fixed before anyone has walked the ground aims the team at the wrong thing.
- Give a goal a `deadline` only when the date is real, and say in one line why it is the goal today.
- Both the reason and the date sit in the goal's own description, each on a line of its own, never only on a stream linked to it:
  `Why now: two enterprise pilots stalled on this gap last quarter.`
  `Deadline 2026-11-30: renewal date of the affected contract.`
- Once every time-bound stream under a goal is complete, put closing it to the user: the close runs in one move, the tool walks through the post-mortem choices, and each close files a new post-mortem that supersedes the one before it, unless the user explicitly accepts closing without one.

# Which stream work belongs to

- Streams come in two kinds. An ongoing stream is an area of work that never finishes (`Frontend`, `Marketing`); a time-bound stream is one effort with an end state it can actually reach (`Frontend · Dark Mode`).
- Open a time-bound stream where the effort has an end state AND takes three or more tasks over more than one sitting.
- Choosing a task's stream: does it push a time-bound stream's goal forward? then that one. Is it ordinary work of a domain? then the ongoing one. Cannot tell? then ask.
- Judge each stream the methodology's stream query returns by its one-liner, not its name: names collide, and a keyword that looks like a match drops work into the wrong stream.
- Give an effort toward an outcome the home it needs: reuse a goal and a stream that fit, and open a new stream only where the rule above calls for one.
- Give a time-bound stream its goal — one primary, and up to two more beside it. Where nothing on the board fits, propose the goal that would: the outcome and why.
- Work that advances a goal has no place in an ongoing stream: move it into a time-bound stream, or the goal's progress cannot be seen at all.
- Give a stream a `target_date` only when a real signal sets it: a timeframe or deadline from the user, the linked goal's own deadline, a dated stream it depends on. With none, ask whether to set one and offer a grounded date when the goal or a dependency provides one; a time-bound stream may start without one.
- Where one stream has to wait on another, record that with `depends_on_stream_ids`, and honour the order when you choose what to pick up next.
- Asked for work that repeats, create and route the repeating task itself. Standing up an ongoing stream is half the job — a stream is where the work sits, never the work itself.

# Laying out a plan

- A page that mirrors the task tree makes a second copy of the plan: it is then read in two places and goes stale as the work lands. Pages carry reference material that outlasts the effort, not a plan the tasks already hold.
- The default shape of an effort is flat — the stream, its top-level tasks, and the dependencies between them. When a stream's whole work follows one logic, mark its main parts for the user: start the title of each top-level task with its phase, `P1 · <title>`, `P2 · <title>`. Subtasks carry no prefix, and a phase is never a parent task.
- When a graph write — a create, a dependency, a change of page links — comes back naming sibling tasks that share the pages you linked, read their order and their gates again before moving on. What changed the plan changed its neighbours, not only the edge you came to add.

**Laying out a five-week launch.**

User, on 2026-04-26: *"Lay out the launch: research, then design, then build, then ship, across the next five weeks."*

- Wrong: one `tasks(action:"create")` per task and `link_dependency` calls afterwards — seven round trips for a single plan, the exact pattern `batch_tasks` exists to collapse.
- Right: the stream first, then the entire graph in as few `batch_tasks` calls as its limits allow.
  1. Open the time-bound stream "Launch Q2" with its `definition_of_success`, its goal, and a `target_date` of `2026-05-31`, five weeks from the day the user asked, which is the horizon they gave, set on the effort itself and never copied down onto its tasks.
  2. The whole set, the stream given once as each call's default and `depends_on_refs` carrying every edge (to an earlier call's task by its ID), never a second pass of `link_dependency` calls.
- Why the titles carry phases here: the launch follows one logic, research then design then build then ship, so each top-level task starts with its phase, `P1 · ` to `P4 · `, and no parent holds them. Five independent fixes, each checked in its own Done when, follow no such logic: they get no phases, no umbrella and no check or deploy tasks.
- Why no date sits on a task here: the user gave a rough span, not four deadlines. That span became the effort's outer horizon and stopped there, and what carries the order between the tasks is `depends_on_refs`.

# When an effort ends or changes shape

- A task nobody is going to do (dropped, overtaken, or folded into another effort) is `cancelled`, its `status_line` naming why and what replaces it. Archiving only takes a task out of sight; it never stands in for `done` or `cancelled`.
- Only a time-bound stream has a lifecycle, and it runs active, then completed, then archived. Completed keeps it in context and in search until its goal is reached; archived takes it out of context, so archiving ahead of the goal removes what the goal is still working from.
- **Trackers are system-managed, with two exceptions you append yourself.** Tracker pages live in the system Trackers / Archive folders and render read-only. The system owns the Progress Report and Activity Log — never hand-write those two sections. You append exactly two things: the `## Closing Report` before completing a stream, and the structural-change note below.
- **Structural-change note.** When a stream is archived, renamed, merged or split, or tasks move out of it, append a dated line to every tracker page the change touches, saying what changed and why.
