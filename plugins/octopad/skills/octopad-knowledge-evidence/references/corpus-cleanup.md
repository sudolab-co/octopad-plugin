# Cleaning up the corpus

When the user asks to audit or clean Key Information:

- List every item of each kind in scope with `knowledge` `list`, through every page it returns, and count them.
- Work in batches by subject or stream, so a decision is read beside the ones that may replace it.
- Check each item against its evidence: later decisions, task and stream state, the code that runs, the page that owns the subject. Note per item the action (keep, verify, ask the user, update, answer, defer, mitigate, mark occurred, supersede by a named successor, reverse, delete, move to a task, a page or its right kind), its evidence and why it went stale.
- Before showing a batch, have a fresh reviewer check every proposed change against its evidence, and a sample of the items kept whose subject the code or a later decision touched; the usual errors are a new text with a wrong or stale detail or a dropped clause, a new decision that repeats one on record, a related decision taken for a replacement or a real successor missed, a reverse of a choice still applied or not built yet, and a new decision, a supersede or a reverse resting on the code rather than on a source of the choice.
- Show the user the exact batch, each item's current and new text, and apply it only on their yes to that batch. Keep that batch on the cleanup's working page, so any change can be undone.
- Apply item by item with `expected_updated_at`; a conflict voids that item's change until it is read again and shown again. Then list again, check the counts and statuses, and name any item left unapplied.
- Report how many items went stale for each cause.
