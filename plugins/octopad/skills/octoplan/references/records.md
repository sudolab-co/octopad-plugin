# Delivery records

- Keep the Plan in its tasks: specifications, dependencies, routes, verification, progress and task evidence.
- Keep no shadow control plane: never mirror that state into a Plan page, a private control object, a scheduler or an artifact ledger.

## Working documents, one home for each record

- **Contract:** only what is missing from its existing homes among: the shared confirmed intent and its source; the stakes (decision served, blast radius, reversibility, countable success, kill question and actual user limits); outcome proof; boundaries; constraints; effects; access; checkpoints and gates.
  - Reference task specifications and effective rules instead of copying them.
  - Leave this document out when the genuine owning task already holds the complete frame.
- **Journal:** a small current-supervision header, followed by control receipts.
  - Header: one entry per disjoint boundary it covers, naming the boundary, the current actor, the exact route, the native continuity reference if used, and the state: active, released or closed. One supervisor owns a given work boundary.
  - Receipts: exact consent, with its source, time, mode and bounds; plan reviews and dispositions; activation; changes, revocations, gate continuations, ownership transfers and closure. Receipts preserve their predecessors.
  - Keep it append-only yourself: the server does not enforce it.

- Use working pages of a real owning task or active stream (`pages` create with `working_task_id` or `working_stream_id`), in an ordinary folder, or unfiled (`folder_override: true`) when none fits; never in Archive or Trackers.
- A stream that goes on after this delivery can own its temporary documents: name the delivery's outcome, covered tasks and finish line in the records.
- Never invent a task or stream just to host them.
- Keep the owner open while its documents serve active work; shared work uses the genuine integration or outcome task, or an owning stream that stays active for that boundary.

- Before creation or takeover, read the existing working-document pointers, current owners and in-flight work.
- Reuse one canonical journal for the same boundary. Different document or mandate identities never justify overlapping active ownership.
- Link the journal and any contract from the covered tasks, preserving their existing page links; their owner also lists them as working pages.
- Record each document's workspace and identity in the journal.
- Across workspaces, read through the owning workspace with actual access; do not invent cross-workspace page links.
- After creation, verify each document's working mark and owner.
- A missing capability pauses the affected work: no ordinary-page or Key Information fallback grants it or missing authority.

- In the journal, link required task evidence instead of copying it; keep no polls, progress board, task specifications or house-rule history there.
- Do not create automatic Brief, Stakes, Plan-contract, delivery-authorization or supervisor Decisions.

## Guard control changes and preserve review binding

- To claim, release or replace the journal's current supervision, use `pages(action: "update", content_updates, expected_updated_at)` with the revision just read. Preserve all receipts.
- Write consent, activation, revocation and gate continuations with guarded updates too; ordinary evidence may append.
- On conflict, reread and reconcile before acting; never overwrite.

- Reviews name exact task identities and revisions, and the contract's identity and revision, or the owning task when it supplies that frame.
- Keep review and activation receipts in the journal, apart from the reviewed contract.
- Reconcile drift and refresh the affected judgments; never carry `PASS` over a changed premise or overwrite an old receipt.
- Adding a receipt or changing supervision does not change the contract revision.
- Judge drift by comparing content, never timestamps alone. A changed task or contract timestamp still requires a reread and evidence of unchanged material content: an evidenced status-only update revokes neither a content review nor the mandate, and changed or unprovable content gets the affected recheck. Preserve the comparison evidence.
- Page undo history is not permanent review evidence.

- Keep superseded consent, reviews and transfers as history.
- Take the current scope from the latest applicable, unretracted consent within its actual bounds, never from a header's assertion or an old receipt in isolation.

## Finish the bounded delivery

- Archive the contract and journal by their page IDs with `pages(action: "update", page_id, folder_id: <Archive UUID>, expected_updated_at)`, resolving that folder in their own workspace.
- Keep their working mark and owner, so direct recovery remains possible.
- Preserve a document as an ordinary reference (`working_page: false`) only when it actually outlives this delivery.

- When the delivery ends inside a stream that goes on, archive only this mandate's documents, never all the stream's working pages or the stream itself.
- Shared records stay active until their whole boundary closes.
- Do not promise retrieval isolation or server-sealed receipts.
