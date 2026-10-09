---
name: octopad-planning-and-work-design
description: Use for a new or existing stream, a brief, or a delivery-mode choice, even when the user never names Octoplan. How work is shaped and how a whole effort is laid out — the number of tasks a request really is, what each one must settle before anyone could run it, nesting, the scales, dates and repeating work, together with goals, streams, order and dependencies, and what an effort owes when it ends or changes shape. Use it when an ask arrives with its own boundaries still open, when several tasks are laid out together as a roadmap, a plan or a launch, when the user wants work already on the board cleared away, re-homed or put right, and when a stream or a goal has moved on from what its tracker still says.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-planning-and-work-design"` when you open this skill.

Version: 4.2.0

# From a need to prepared work

A stream and an Octoplan use the same brief and work graph. Octoplan is the delivery of that work by agents under an agreed level of autonomy, not a second object. This skill owns the common preparation; [Octoplan](../octoplan/SKILL.md) owns its delivery mandate, executable preparation, review and activation.

## Brief only what the request needs

Read the existing stream, tasks, decisions and relevant sources first. Establish the purpose, intended result and proof, boundaries, constraints, important unknowns and who decides consequences. Ask about missing foundations that could change the result; resolve what the sources already settle yourself. Play back the intended result in proportion to the request, and confirm material interpretations before work that depends on them. A clear capture can need only a sentence, not an interview. Creation or planning is not permission to deliver.

An ongoing stream needs its area of responsibility and routing boundaries, not an invented finish line. A small job may need one task in an existing stream or no new stream. Do not manufacture a goal, task tree or Octoplan records to complete a form. The stream rules below choose the work's home; their task count and duration are never thresholds for autonomy.

## Prepare enough to choose how to deliver

Identify the deliverables, settled choices, real dependencies, usable proof, required inputs, accesses and human interventions. Work within the requested scope: outline only what matters now, leave later details for when their inputs exist. Keep this preparation on the owning stream and tasks, linking sources and existing confirmations. Record only lasting choices as Decisions; Octoplan puts missing shared delivery fields on working documents. Keep no second brief or progress list.

Evaluate the bounded work agents could actually finish and verify between human interventions, using the current tools and access. Compare that useful work with the cost of dispatch, handoffs and review. Use judgment, not a task count, duration threshold or autonomy score. A few required review or production gates do not rule out useful agent work between them; keep every gate and its owner. If the next meaningful steps depend on repeated user choices, continue direct collaboration and reconsider when those choices settle. Do not pitch orchestration on every turn.

When useful agent delivery is plausible, open [Octoplan](../octoplan/SKILL.md) to qualify the actual runtime route and review the smallest adequate Plan. Before the autonomy choice, show its summary of what agents can finish without the user and every known intervention, including access, proof and continuation limits. The user need not know the name Octoplan. Opening that skill or accepting a brief grants no delivery authority. If the benefit or capability is unproved, continue authorized preparation or collaboration and name the concrete gap; do not promise unattended delivery through it.

Planning-only means the user's request or context limits the outcome to a plan, such as "only the plan" or "we will decide whether to execute later". A missing mandate, or "create the stream/Octoplan" within a delivery discussion, does not establish that limit. For useful agent delivery without a mandate, ask once for autonomy and covered effects after the reviewed Plan summary; keep an unanswered choice pending without treating silence as consent. For an actual planning-only request, do not solicit delivery unless the user changes that scope. Respect an explicit pause or postponement.

## Keep the same work when delivery changes

Adopt the same stream and task identities, decisions, evidence and progress when moving from collaboration to agent delivery. Carry forward valid explicit brief confirmation; Octoplan checks its source and fills only missing preparation and authority. A stream name or existing graph proves neither confirmation nor a mandate. Never restart completed work or treat old evidence as current without checking its scope.

For an ongoing stream, agree a bounded delivery within it; finishing that mandate does not complete the ongoing stream. Separate a new time-bound initiative only when its actual scope calls for it under the rules below, never just to turn on agent delivery. On resume, check current state and ownership; an existing valid Octoplan follows its own continuation rules without a duplicate choice. Returning to direct collaboration requires reconciling active agents and pending effects through Octoplan recovery first, not leaving them running under a superseded mandate.

# Shaping the work

- Where a task's scope is ambiguous at its edge, write down what it does NOT cover; an unstated exclusion is how two people build the same half twice.
- Count the deliverables before you count tasks: a deliverable is something that could be shipped, reviewed or closed on its own, and the number of those is the number of top-level tasks — no more and no fewer.
- One reason licenses nesting: a single deliverable breaks into parts, each finished and checked on its own, that fit together into it. Those parts become its subtasks, and nothing else earns a subtask.
- Never open a top-level task whose only job is to hold the others beneath it. An umbrella restates the stream and delivers nothing of its own.
- Checking a deliverable, getting it accepted and delivering it (sending, publishing, deploying) are not parts of it: they stay in its Done when, never tasks or subtasks of their own. Only a step another person carries out as their own work, such as a deploy they run, can be its own task; an acceptance never is, even when someone else gives it. While only a yes or no on the result is left, the task waits in `pending_review` for its approver (the creator unless one is named): ask the approver now if they are in the conversation; when the yes came outside Octopad, tell the user who must record it (the approver, the creator or an admin); a refusal sends the task back with `reject_completion` and its reason. While it waits on an outside event, such as a run or a reply carrying something the work needs, it is `blocked`. Deliverables made one after another stay flat all the same: top-level tasks joined by dependencies, not phases.
- A subtask may not fall due after the task above it.
- Join two deliverables only where one truly cannot start until the other lands; an edge added for tidiness serialises work that could have run side by side.
- Order is what dependencies carry, and priority says how much a thing matters within an order already settled. Reaching for priority to make something happen sooner is the sign that a dependency is missing.
- To hold sibling top-level tasks in a chosen order, add or reuse a preparation task and hang the others off it; never push a blocked sibling down the ranking by dropping its priority.
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
- Both the reason and the date sit in the goal's own description, each on a line of its own, never only on a stream linked to it:
  `Why now: two enterprise pilots stalled on this gap last quarter.`
  `Deadline 2026-11-30 — renewal date of the affected contract.`
- Once every time-bound stream under a goal is complete, put closing it to the user: the close runs in one move, the tool walks through the post-mortem choices, and each close files a new post-mortem that supersedes the one before it.

# Which stream work belongs to

- Streams come in two kinds. An ongoing stream is an area of work that never finishes (`Frontend`, `Marketing`); a time-bound stream is one effort with an end state it can actually reach (`Frontend · Dark Mode`).
- Open a time-bound stream where the effort has an end state AND takes three or more tasks over more than one sitting.
- Choosing a task's stream: does it push a time-bound stream's goal forward? then that one. Is it ordinary work of a domain? then the ongoing one. Cannot tell? then ask.
- Settle that by reading each stream's description in the Strategy block. Names collide, and a keyword that looks like a match drops work into the wrong stream.
- Give a time-bound stream its goal — one primary, and up to two more beside it. Where nothing on the board fits, propose the goal that would.
- Work that advances a goal has no place in an ongoing stream: move it into a time-bound stream, or the goal's progress cannot be seen at all.
- Where one stream has to wait on another, record that with `depends_on_stream_ids`, and honour the order when you choose what to pick up next.
- Asked for work that repeats, create and route the repeating task itself. Standing up an ongoing stream is half the job — a stream is where the work sits, never the work itself.

# Laying out a plan

- A page that mirrors the task tree makes a second copy of the plan: it is then read in two places and goes stale as the work lands. Pages carry reference material that outlasts the effort, not a plan the tasks already hold.
- The default shape of an effort is flat — the stream, its top-level tasks, and the dependencies between them. The second licence to nest is a phase: an effort whose phases each hold several deliverables takes one parent per phase, and nothing else earns a parent.
- When a graph write — a create, a dependency, a change of page links — comes back naming sibling tasks that share the pages you linked, read their order and their gates again before moving on. What changed the plan changed its neighbours, not only the edge you came to add.

**Laying out a five-week launch.**

User: *"Lay out the launch — research, then design, then build, then ship — across the next five weeks."*

- Wrong: one `tasks(action:"create")` per task and `link_dependency` calls afterwards — seven round trips for a single plan, the exact pattern `batch_tasks` exists to collapse.
- Right: the stream first, then ONE `batch_tasks` call holding the entire graph.
  1. Open the time-bound stream "Launch Q2" with its `definition_of_success`, its goal, and a `target_date` of `2026-05-31`, which is the five-week horizon the user gave, set on the effort itself and never copied down onto its tasks.
  2. ONE `batch_tasks` call for the whole set, the stream given once as the call's default and `depends_on_refs` carrying the order inside it, and never a second pass of `link_dependency` calls over edges the same batch already carried.
- Why the nesting is right here: each of the four phases really does hold several deliverables. A flat effort — five fixes, each checked in its own Done when — stays top-level tasks joined by dependencies, with no umbrella, no phase parents and no check or deploy tasks.
- Why no date sits on a task here: the user gave a rough span, not four deadlines. That span became the effort's outer horizon and stopped there, and what carries the order between the tasks is `depends_on_refs`.

# When an effort ends or changes shape

- Archiving a task says two things at once: it no longer matters, and nobody is going to do it — dropped down the list, overtaken, or folded into another effort.
- Only a time-bound stream has a lifecycle, and it runs active, then completed, then archived. Completed keeps it in context and in search until its goal is reached; archived takes it out of context, so archiving ahead of the goal removes what the goal is still working from.
- **Trackers are system-managed, with two exceptions you append yourself.** Tracker pages live in the system Trackers / Archive folders and render read-only. The system owns the Progress Report and Activity Log — never hand-write those two sections. You append exactly two things: the `## Closing Report` before completing a stream, and the structural-change note below.
