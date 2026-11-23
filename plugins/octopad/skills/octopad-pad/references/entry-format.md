# Entry format of the person's priorities, notes and reminders

Read this before you write, condense, move or recover an entry.

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
when: <the subject that brings it back>
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

- `compass`, which the user sees as Priorities: what they want to work on, in their order.
- `premises`, which the user sees as Notes: what they said that passes What to write and is neither a priority nor a reminder, such as a preference, a way of working with them or an idea they have not committed to. Its `exit:` names what makes it leave: they commit to it, they change or drop it, or Octopad records it elsewhere.
- `reminders`: something to bring back when a subject comes up.
- `last_briefing`: the day's briefing claim and review claim and, while there are no priorities, the day you asked what matters (Priorities in the skill). A missing line means no claim, or no question asked.
- `open_loops` and `context_gaps` are the older form: never write to them (Older entries in the skill says how to convert them).

## Keys

- Add an optional key only when its rule applies: `refs:` on any entry; `priority:` on a note or reminder; `repeat:` and `last_delivered:` on reminders; `review_on:` on notes and reminders.
- `priority:` names one priority on the list, as its line names it: Today's brief shows the entry under that priority, and at the bottom when no priority on the list matches. One line at most. When a priority is renamed, the same save rewrites every `priority:` line that named it.
- Give each entry a stable `entry_id:`. Keep it across edits and moves, and assign one when you first maintain an entry that lacks it.
- Keep the original `by:` line. Record a later intervention on an `updated_by:` line in the same form, never replacing the origin.
- Write your runtime's actual session id, never an invented label. If the runtime exposes none, write `unavailable`, and sign each claim with a random token you keep for this conversation, so no two sessions share a claim.
- Mark an unknown origin `by: unknown`, and keep the entry.
- Write dates in the user's known time zone. If none is known, use UTC and say so. Daily limits apply per user and organization.
