---
name: octopad-notepad
description: "Use when the user says what they want, prefer, judge or decide that no Octopad object holds, when a Notepad reminder's subject comes up, when work changes a task, stream or goal a Notepad entry names, and at an opening with no precise ask. Also use it when the user asks to be reminded, what was in progress, what to work on, where a note is or how to see their Notepad, when they name a priority or change their order, when orientation shows only an excerpt or no priorities, or names Notepad entries to review or blocks to convert, and before writing to the Notepad. Not for shared pages."
---
Version: 10.0.0

# Whose memory

One Notepad belongs to one user in one organization, across that user's workspaces and AI sessions. Use the personal Notepad Octopad identifies, never one selected by title, marker or pin. Authorship records origin: any authorized session of the same user may maintain an entry after checking the evidence.

Use the native `notepad` tool. If the tool or its storage is unavailable, say so and keep the pending context in the conversation. Never migrate, remove or rewrite a legacy shared page implicitly. A read-only connection cannot create or maintain a Notepad.

The Notepad keeps three things no other Octopad object holds: the user's priorities, notes on what they said that will matter later, and reminders to bring something back when a subject comes up. Everything else lives in Octopad: work in tasks, what the team needs in Knowledge, the state of the work in the task tree and its reports. A Notepad that repeats them goes stale and misleads every session.

The document holds three note blocks, `compass` (Priorities), `premises` (Notes) and `reminders`, plus the `last_briefing` block; `open_loops` and `context_gaps` are the older form (see Older entries). Before you write, condense, move or recover an entry, read [the entry format](references/entry-format.md).

# What to write

Nobody tells you "note this": recognize it yourself. Write, without asking, what passes all three tests:

1. It comes from the user: what they want, prefer, judge or decide. Not the state of the work, and not your own conclusion.
2. It will still hold in the coming days.
3. No Octopad object holds it, and it is not something to do.

It is then a priority if it changes what they want to work on or in what order (see Priorities), a reminder if it must come back on a subject or at their own call (see Reminders), and otherwise a note.

What fails the tests goes straight to where it lives, never through the Notepad:

- Something to do is a task, dated when they gave a date, depending on the task that carries what it waits for, or `blocked` with what it waits for when nothing in Octopad carries it. Never `on_hold`, which gets no notice when the wait ends.
- A choice or fact the team needs is Knowledge.
- The state of the work is written nowhere: the task tree and its reports hold it.

In doubt, write nothing: a missed note costs the user one repetition, a wrong one misleads every later session.

| The user says | You write |
|---|---|
| "First the billing fix, then the new onboarding" | Priorities: billing before onboarding, with that reason |
| "I'm picking the onboarding back up while the agents run" | Nothing: their order did not change |
| "When we talk product, stick to what customers can use today" | A note |
| "Maybe an export to spreadsheets one day, to be seen" | A note: an idea they have not committed to |
| "We no longer change the old API" | A Decision: the team needs it |
| "Remind me on the 2nd to read the contract" | A task due on the 2nd |
| "Test it on staging once that pull request merges" | A task depending on the pull request's task |
| "When we talk about the landing page, the demo video serves there too" | A reminder, brought back by the landing page |

When the user commits to a noted idea, create its task and retire the note in the same turn.

Before writing, read the whole document and update the subject's entry instead of adding one; retire what their new word settles or contradicts. Make each word count: a heading, one or two sentences, then the entry's keys. Never cut an intention or limit to fit. Keep a reference only when it retrieves unique context: a local file path alone is not retrievable from another session.

# When to read

- Sub-agents and task workers, connected or not, skip this routine.
- The session brief carries the Notepad. If it shows only an excerpt, read the whole document with `notepad(action: "get")` first.
- Read it again when the user opens a genuinely new subject or returns after a break, to see other sessions' changes. Do not read it again at every message on the same subject.
- A session opening or a what-next question alone needs no entry, apart from the missing-priorities rule below.
- If it cannot be read, say reminders could not be checked, never that there are none, and continue independent work.

# In conversation

- To the user it is the AI Notepad, a product name that stays in English in every language. Asked where a note is, say they can read it from the gear on their Pad, with the entry their interface shows in their language: Show AI Notepad in English, Afficher l’AI Notepad in French, Mostrar AI Notepad in Spanish. Say too that it changes through you.
- The one question a day that Review allows, about an entry you cannot settle yourself, is the only time you ask the user about the Notepad.
- Asked what to work on, combine the task tree with their priorities in order, and explain the recommendation. Store no project list: a priority holds a few references, not its work.
- When a request touches an entry, say so and build on it instead of starting over. Check its references first: a merged pull request or a finished task is not a next step to repeat, but intent it left unsettled stays.
- Asked where things stood, answer from the tasks and their records. Separate active entries from material recovered from history: history is not current intent.

# Reminders

"Remind me of X when we talk about Y" asks to bring X back, never to do X now.

- Only what no task can carry. A reminder brings something back when a subject comes up and there is nothing to do, or proposes resuming paused work the user will restart at their own call. Something to do at a date or after an event is a task (see What to write): create it, dated when they gave a date, and say so in one line.
- Octopad tells a task's assignee and creator when the last dependency they can see is done, unless the task is `on_hold`, and when its linked pull request merges.
- Unasked, set a reminder only from what the user said, and say so in one line: something that must come back on a subject, or work they will come back to at their own call.
- Capture. `when:` names the subject that brings it back, with the user's own logic when they combine several. `remind:` says what to bring back, or which task to propose resuming.
- When the reminder concerns known work, add one `refs:` line with only its relevant, verified `task:<uuid>`, `stream:<uuid>` or `goal:<uuid>` references, full ids separated by commas. Include a stream or goal only when that relationship is established, and omit the line when no reference is known.
- Add `repeat:` only when asked. Record the actual request, never a hypothetical example, and clarify only an ambiguity that changes the trigger. Keep one reminder per subject: add to an existing one rather than write a second.
- Match a subject by meaning and scope, not words alone: "the demo shoot" can match "demo video". A mere mention or example does not match, and a doubtful match does not fire.
- Say it in the conversation. When a reminder's subject comes up in a main session, say it there once, whatever the request, then set `last_delivered:` to the date and your session by a conditional save.
- A `last_delivered:` means it was said, not that the user acted: do not say it again in another conversation unless it has `repeat:`, which brings it back once in each conversation where its subject comes up. A session that stops between saying it and saving may let it come back once more.
- Follow the answer. Done or dropped: retire it. Later: replace its `when:` and clear `last_delivered:`. No answer: it stays, said no more.
- Delivered never means X is done: complete no task and do not do X on that ground.

# Review

Orientation names the notes and reminders to review: their `review_on:` date has come, or they are unchanged for 30 days. Age makes an entry a question, never a removal. For each one named:

1. Check its `exit:` and references with the tools you have. When the record shows it settled (the user committed to it and a task holds it, Knowledge records it, or they dropped it), retire it, name it in the save's reason, and say so in one line.
2. About what you cannot settle, ask at most one entry a day (claim `followup:`, see Claims), in one line at the end of your answer, never in its place: keep, change or drop? Keep: add `updated_by:` today and remove `review_on:`. Later: set `review_on:` to their date. Drop: retire it. No answer: set `review_on:` to 30 days later.

# Priorities

The `compass` holds at most one `### Priorities` entry: what the user wants to do, in the order they want it, and why. A priority holds their intent only: what, why, and the logic between priorities when they give one, such as what comes first or what waits on what. It is not a stream: it may span streams and goals. Priorities are the user's direction, not a queue. They never change a task's Priority field, shared impact or goals, never authorize execution, and the task tree stays the plan.

- Format. The Pad reads only the form the template shows, and flags any other line. Write at most 8 priorities, one line each, numbered from 1 in their order. A line holds a short name, then `| why:` when their reason is known, then `| refs:`, then `| deadline: <their words>` only when the user dated it, and no other `|`.
- The name is a few words in the user's terms and stays stable: the Pad keys its section on it, so reword it only on their word.
- `why:` says in one or two short sentences what they want and why, and how it relates to another priority only when they said so. Adapt it to what they said, and leave it out rather than invent a reason.
- `refs:` holds 1 to 4 comma-separated references, each `goal:`, `stream:` or `task:` with the item's full id: the goal it serves, its stream, its key task, never a list of its work.
- Besides its lines, the entry holds only its `entry_id:`, `by:` and `updated_by:` lines. Keep the heading and the labels in English, whatever the user's language.
- Intent, never progress. Write no status, progress, current task, journal, quote or dated note in a priority: the work and its records hold them. A call on work order ("first the rules, then the Desktop") is their order, with its reason in the `why:` of the priority it concerns, never a separate entry.
- Their word applies at once. Save what they add, drop, reorder or reword, without asking. What they are doing now ("I'm picking X back up", "while Y runs I do Z") changes neither their order nor their intent: write nothing. Never undo their correction without a new fact.
- Start from their work when there are no priorities. When you read the full owner Notepad in a known format and it has neither a Priorities nor a Focus themes entry, or only an empty one, infer up to 8 priorities from the work they do, own or wait on and the facts making it pressing. Use the format above and verified references, and invent neither work nor intent. Each inferred `why:` says it is your proposal from their work, not their stated reason. Save as Save says, use the saved priorities at once, and announce them as "Say what you changed and why" says. Ask no setup question when the evidence supports the arrangement.
- An unreadable or unknown-format Notepad, or an existing malformed entry, is not an empty one: never infer or overwrite priorities on that basis. If the evidence leaves the arrangement uncertain, apply "Resolve doubt at its source".
- Only the user dates a priority. Write a deadline as they said it, precise ("2026-09-18") or vague ("before the third week of September"). Never set, infer or borrow one from a task, stream or goal; change or remove it only on their word.
- Keep the priorities true yourself. When a fact about work they do, own or wait on changes what deserves their attention first, such as a blocked priority, a defect hurting users, a High task or a deadline coming near, move the priority it fits, or add one if none fits. Never reorder against an order the user stated, which only their word changes: propose it instead. Keep any mark that a `why:` is your proposal. Retire a priority once its purpose is met or dropped, not when its current tasks close. Otherwise leave the entry as it is: progress and what they work on now are no reason to edit it.
- Another person's work enters the user's priorities only on their yes. When it can affect their own work, ask first, naming its place, first, before or after a named priority, and your reason; save it on their yes.
- Say what you changed and why. One line in the conversation names the change, its basis and a one-word undo, for example: "I moved Billing first because its deadline is 2026-11-20; say undo to reverse it." On that word, reverse only your still-present change through the same conditional save, keeping later edits and unrelated entries; never restore a whole old document. Their undo is a correction: reapply the proposal only on a new fact. Your reason lives in that line, never in the Notepad.
- Resolve doubt at its source. Save the user's stated direction at once, even while you propose changes of your own. If your proposed addition or move is uncertain, leave it unsaved, keep the existing priorities, propose the change and ask one question. For any other doubt, verify the facts first.

# Older entries

Earlier versions kept interrupted threads, missing context and dated or event reminders here; tasks now carry them. When orientation names blocks in the older form, or you read a reminder that waits on a date or an event, convert those entries once: in the first main session that meets them, after answering the user's first request, in one save of its own whose reason names each entry and its outcome. Then say what changed in one line.

- An `open_loops` or `context_gaps` entry: what passes What to write becomes a note. Progress, history and what the work's records already hold are dropped, and the save keeps them in private history. In doubt, it becomes a note.
- A reminder that waits on a date or an event: when a task already carries that wait (its due date, a dependency, its blocked reason), retire the reminder. Otherwise keep it, list such reminders in one line with the task each calls for, and create those tasks on the user's yes, in a workspace only they read when the reminder is private. Retire each reminder once its task reads back.
- A note without `exit:` gets one.
- A `### Focus themes` entry is the Priorities list under its former name, and may carry `currently on:` parts, `moved <date>:` notes or a separate entry for the user's call on work order. Rewrite them into one `### Priorities` entry: keep each name, the order, the `entry_id:`, the refs, any deadline, the user's intent, reason and logic, and any mark that a `why:` is your proposal. Fold a work-order call into the order and the `why:` it concerns, its end condition included. Drop progress and dated AI notes.
- When both a Priorities and a Focus themes entry hold lines, the user's word wins over an AI proposal, then the newer `by:` or `updated_by:` date. Never convert a malformed or unknown-format entry.

Never copy a note's private text into a shared task or page without the user's yes. If a step fails, keep the entry as it was.

# Maintain

- In a main session, when your work changes a task, stream or goal an entry names, repair its stale references in the same turn, without asking. Keep unique context and the reminder's commitment.
- Before each write, resolve the verified stale pointers and duplicates you meet on the subject, whoever wrote them. Anything else waits for Review.
- You may condense any entry if every intention, limit and exit survives. Merge duplicates only after keeping each one's unique context and origin.
- An entry whose meaning is uncertain stays.

# Save

Carry only the intended changes in each save, and keep unrelated entries.

# Claims

The automatic briefing and the review question each reach the user at most once a day, whichever session acts.

- Claim the occasion by a conditional save of its `last_briefing` line, `date:` for the briefing and `followup:` for the review, and act only once that save succeeds.
- On a revision conflict, re-read and redo every check.
- Another session's claim dated today blocks you. An explicit request from the user is always answered.

# Briefing

Where the `pad` tool is offered, the first Smart Report is the daily briefing: when the Pad is due, `octopad-pad` writes it, and no other automatic briefing follows. An explicit request to organize their work still gets steps 2 and 3.

Where the `pad` tool is not offered, brief only at an opening with no precise ask, or when the user asks to organize their work, and only if `last_briefing` holds no claim for today:

1. Claim it: set `date:` to today and your session, keeping the other fields.
2. Weigh their priorities, in order, against the current task tree, and explain the proposed order in your answer.
3. Brief in a handful of sentences, not an inventory: where things stopped, at most one relevant note, and where to start and why. A plan is a proposal until the user answers.

# Leave the active document, remain recoverable

- Engaged work belongs in a task, confirmed durable information in Knowledge, and a working rule the user confirms in Knowledge.
- A private note is no permission to disclose it. Promote it only when the user's request already authorizes that audience and content; otherwise ask.
- Before retiring an entry, read the destination back and check it holds the entry's substance: a link to an incomplete destination is not enough.
- Remove an entry from the active document only with verified evidence or the user's explicit decision; the save's reason names the entry, the outcome and any destination.
- Each save keeps the previous text in private history, as long as the `notepad` tool states. Use `list_history` or `search_history`, then `get_history`. If history is unavailable, keep the entry rather than remove it.
- To recover context, read the relevant version, check what is still true, and add only the useful part through the same conditional save. Never restore a whole old document over newer work to recover one entry.

Make no deletion to make room, infer no expiry from age and no promotion from repetition, and leave no cleanup waiting for an absent author.
