---
name: octopad-notepad
description: Maintain the user's personal Notepad between AI sessions. Load when session orientation exposes their Notepad and you will write, refresh, promote or recover an entry, when wrapping up with useful next steps to preserve, or when the user asks what was left in progress. A session opening alone is not a trigger. Never treat a shared legacy page as a private Notepad.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-notepad"` when you open this skill.

Version: 2.1.0

# Whose memory

One Notepad belongs to one user in one organization, across that user's workspaces and AI sessions. Use the personal Notepad identified by Octopad, never one selected by title, a content marker or another person's pin. A signature records an entry's origin; it does not reserve its maintenance to the session that wrote it. Any authorized session of the same user can maintain it after checking the evidence.

Use the native `notepad` tool and its current revision. A shared legacy page is not a private fallback. If the personal tool or storage is unavailable, report the missing capability and preserve the pending context in the conversation; do not migrate, remove or rewrite a legacy page implicitly. A read-only connection cannot create or maintain a Notepad.

# Two blocks

The active document holds state, not these rules. Use the literal XML block boundaries below, in this order, with Markdown entry headings inside them. Empty blocks are valid; do not add a third block or replace the tags with Markdown section headings.

```markdown
# Notepad

<open_loops>
### An interrupted subject
entry_id: <stable id>
<context missing from the durable records>
next: <verified next step and reference>
by: <agent and model> | session <full id> | <YYYY-MM-DD>
</open_loops>

<premises>
### An intention without engaged work
entry_id: <stable id>
<what the user said, with its context>
exit: <condition that would settle it>
by: <agent and model> | session <full id> | <YYYY-MM-DD>
</premises>
```

- `open_loops`: a thread interrupted before its end. Each carries its own `next:`, the best known next step for that subject. Keep one entry per subject, updating it across conversations. Several subjects can stay separate; there is no global focus pointer.
- `premises`: what the user said they want, believe or judged, while it is neither engaged work nor durable knowledge. Each carries an `exit:` stating what would settle it: engagement in named work, confirmation as durable knowledge, or the user's explicit abandonment. An old intention can still be useful. Waiting for the user does not by itself turn it into a task.

Use a heading for each entry and a stable `entry_id:`. Preserve an existing identifier across edits and moves; assign one when adding an entry or first maintaining an older entry without one. Keep the original `by: <agent and model> | session <full id> | <YYYY-MM-DD>` line. Record a later intervention on an `updated_by:` line in the same form; never substitute yourself for the origin. Mark an unknown origin as `by: unknown`, without inventing it or deleting the entry.

# Admit what would otherwise be lost

Before adding, read the complete active document and check for an existing entry on the same subject. Prefer updating it to adding another conversation's copy. Keep entries brief, with durable references instead of copied task status, priority, owner, dependencies, facts or decisions. A local file path alone is not a retrievable source for another session; keep the unique context or a verified accessible reference.

Two moments require checking what needs to survive:

- Work or context with no trace elsewhere: work in an external tool, a verdict without a task, or an intention with no follow-up. Preserve its useful substance before leaving the thread.
- Wrapping up with next steps left: preserve the order and the reason for a transition that existing tasks or knowledge do not already carry. One short line per step, its reference where available, and `next:` for the first remaining step. Update the subject's existing loop. If the durable objects already preserve everything needed to resume, add nothing.

The task tree remains the plan. A Notepad entry must add missing continuity, not become a second backlog. There is no minimum entry count and no limit of five that justifies removing useful context.

# Use and maintain together

- When a request touches an entry, use its context and check its references against the current source before suggesting its `next:`. A merged PR or completed task is not a next step to repeat. Preserve any remaining intent that completion did not settle.
- At an opening with no specific ask, offer the most relevant verified next step in one sentence. Mention an older intention only when relevant, not because it is the oldest. Silence does not mean consent or abandonment.
- Before a write, resolve verified stale pointers and duplicates encountered in the active document, regardless of their author. Merge duplicates only after preserving each one's unique context and origin. Age is a reason to check, never proof of expiry. An uncertain entry stays active until its meaning can be checked.
- When the user asks where things stood, distinguish active threads from historical material recovered through the Notepad's history. History is not automatically current intent.

# Save without losing another session's work

Read the complete current document with `notepad(action: "get")` before changing it. An injected excerpt or summary is never a document to write back. Use `update` with the complete content incorporating only the intended changes, `expected_revision` from that read, and a concise `reason` naming affected entries and any verified destination. Preserve unrelated entries.

The native save must atomically preserve the complete previous document in private history and update the active document. If either part fails, neither change may be treated as saved. On a revision conflict, re-read and reapply the intended change to the new state; never retry the old whole document with a fresh revision. Read back after success before claiming the update or retirement happened.

# Leave the active document, remain recoverable

- Engaged work belongs in a Task; confirmed durable information belongs in Knowledge. A private note is not permission to disclose it: use a shared destination only when the user's request already authorizes that audience and content; otherwise keep it private and ask before promotion. Create or update the authorized destination, then read it back and check that it preserves the entry's useful substance. A link to an incomplete destination does not justify retirement.
- Remove a completed loop or an exited premise from the active document only with verified evidence or the user's explicit decision. The save's reason identifies the entry, outcome and destination when there is one. A partially completed thread keeps its remaining context and a verified next step.
- The save archives the previous complete text and provenance in private history. History is bounded: it keeps the newest snapshots up to 10 MB and 1000 versions, always at least the latest 20, and each save deletes older ones. Use `list_history` or `search_history`, then `get_history` for the full version. If history is unavailable, keep the entry active rather than remove it.
- Only the owner can purge their history, with `purge_history`. It permanently deletes their snapshots, so use it only when the user asks and confirm with them first.
- To recover historical context, read the relevant version, verify what is still true, then add only the useful part to the current document through the same conditional save. Never restore an old whole document over newer work merely to recover one entry.

No deletion to make room, no expiry inferred from age, no promotion inferred from repeated mentions, and no cleanup waiting for an absent author. The active document stays useful because its contents are checked and retired safely, not because older work disappears.
