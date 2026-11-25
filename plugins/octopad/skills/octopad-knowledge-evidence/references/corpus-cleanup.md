# Cleaning up the corpus

1. List every item of each kind in scope with `knowledge` `list`, through every page it returns, and count them.
2. Work in batches by subject or stream, so a decision is read beside the ones that may replace it.
3. Check each item against its evidence: later decisions, task and stream state, the code that runs, the page that owns the subject. Note per item:
   - the action: keep, verify, ask the user, update, answer, defer, mitigate, mark occurred, supersede by a named successor, reverse, delete, or move to a task, a page or its right kind;
   - its evidence;
   - why it went stale.
4. Before showing a batch, have a fresh reviewer check every proposed change against its evidence, and a sample of the kept items whose subject the code or a later decision touched. The usual errors:
   - a new text with a wrong or stale detail or a dropped clause;
   - a new decision that repeats one on record;
   - a related decision taken for a replacement, or a real successor missed;
   - a reverse of a choice still applied or not built yet;
   - a new decision, a supersede or a reverse resting on the code rather than on a source of the choice.
5. Show the user the exact batch, each item's current and new text. Keep that batch on the cleanup's working page, so any change can be undone.
6. Apply item by item with `expected_updated_at`; a conflict voids that item's change until it is read and shown again. Then list again, check the counts and statuses, and name any item left unapplied.
7. Report how many items went stale for each cause.
