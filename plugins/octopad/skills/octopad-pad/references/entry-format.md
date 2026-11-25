# Entry format of the person's priorities, notes and reminders

The document holds state, not these rules. Use the blocks below as literal XML boundaries, with `###` entry headings inside. A block may be empty or absent, but the document keeps at least one. Use only these blocks, and keep their tags: never turn them into Markdown headings.

```markdown
# Priorities, notes and reminders

<compass>
### Priorities
entry_id: <stable id>
1. <short name in the user's terms> | why: <what they want and why, with its link to another priority if they gave one> | refs: goal:<uuid>, stream:<uuid>, task:<uuid>
2. <short name the user dated> | why: <their intent> | refs: task:<uuid> | deadline: <their words>
by: <agent and model> | session <session id> | <YYYY-MM-DD>
</compass>

<premises>
### A note
entry_id: <stable id>
<what the user said, with the context that makes it usable>
exit: <what makes it leave>
priority: <the name of the priority it concerns, as listed>
by: <agent and model> | session <session id> | <YYYY-MM-DD>
</premises>

<reminders>
### What to bring back
entry_id: <stable id>
when: <the subject that brings it back, with the user's own logic when they combine several>
remind: <what to say, or the paused task to propose resuming>
refs: task:<uuid>
by: <agent and model> | session <session id> | <YYYY-MM-DD>
</reminders>

<last_briefing>
date: <YYYY-MM-DD> | session <session id>
followup: <YYYY-MM-DD> | session <session id> | <entry_id>
priorities_asked: <YYYY-MM-DD> | session <session id>
</last_briefing>
```

## What each block holds

- `premises` (Notes): what passes What to write and is neither a priority nor a reminder, such as a preference, a way of working with them or an idea they have not committed to. Its `exit:` names what makes it leave: they commit to it, they change or drop it, or Octopad records it elsewhere.
- `last_briefing`: the day's briefing claim and review claim and, while there are no priorities, the day you asked what matters. A missing line means no claim, or no question asked.
- `open_loops` and `context_gaps` are the older form: never write to them.

## Entries and keys

- An entry is a heading, one or two sentences, then its keys. Never cut an intention or limit to fit.
- Keep a reference only when it retrieves unique context: a local file path alone is not retrievable from another session.
- Add an optional key only when its rule applies: `refs:` on any entry; `priority:` on a note or reminder; `repeat:` and `last_delivered:` on reminders; `review_on:` on notes and reminders.
- When a note or reminder concerns one priority on their list, give it one `priority:` line, naming that priority as its line does: Today's brief shows the entry under that priority, and at the bottom when no priority on the list matches.
- When a reminder concerns known work, give it one `refs:` line with only its relevant, verified `task:<uuid>`, `stream:<uuid>` or `goal:<uuid>` references, full ids separated by commas. Include a stream or goal only when that relationship is established, and omit the line when no reference is known.
- Give each entry a stable `entry_id:`. Keep it across edits and moves, and assign one when you first maintain an entry that lacks it.
- Keep the original `by:` line. Record a later intervention on an `updated_by:` line in the same form, never replacing the origin. Mark an unknown origin `by: unknown`, and keep the entry.
- Write your runtime's actual session id, never an invented label. If the runtime exposes none, write `unavailable`, and sign each claim with a random token you keep for this conversation, so no two sessions share a claim.
- Write dates in the user's known time zone. If none is known, use UTC and say so. Daily limits apply per user and organization.

## The Priorities entry

- The Pad reads only the template's form and flags any other line. Write at most 8 priorities, one line each, numbered from 1 in their order: a short name, then `| why:` when their reason is known, then `| refs:`, then `| deadline: <their words>` only when the user dated it, and no other `|`.
- The name is a few words in the user's terms. When you rename a priority, rewrite in the same save the `priority:` line of each note and reminder that named it.
- `why:` says in one or two short sentences what they want and why, and how it relates to another priority only when they said so. Adapt it to what they said, and leave it out rather than invent a reason.
- `refs:` holds 1 to 4 comma-separated references, each `goal:`, `stream:` or `task:` with the item's full id: the goal it serves, its stream, its key task, never a list of its work.
- Besides its lines, the entry holds only its `entry_id:`, `by:` and `updated_by:` lines. Keep the heading and the labels in English, whatever the user's language.
