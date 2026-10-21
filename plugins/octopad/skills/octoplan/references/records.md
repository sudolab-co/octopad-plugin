# Delivery records

Tasks are the Plan: specifications, dependencies, routes, verification, progress and task evidence. Keep no shadow control plane: never mirror state into a Plan page, private control object, scheduler, or artifact ledger.

## Working documents, one home for each record

- **Contract:** only shared confirmed intent and its source, stakes (decision served, blast radius, reversibility, countable success, kill question and actual user limits), outcome proof, boundaries, constraints, effects, access, checkpoints and gates missing from their existing homes. Reference task specifications and effective rules instead of copying them. Omit this document when the genuine owning task already holds the complete frame.
- **Journal:** a small current-supervision header, followed by control receipts: exact consent, source, time, mode and bounds; plan reviews and dispositions; activation; changes, revocations, gate continuations, ownership transfers and closure. The header holds one entry per disjoint boundary it covers, naming the boundary, current actor, exact route, native continuity reference if used, and active, released or closed state. One supervisor owns a given work boundary. Receipts preserve their predecessors. Append-only is an agent rule, not server enforcement.

Use working pages of a real owning task or active stream, in an ordinary folder. An ongoing stream can own temporary documents for a bounded delivery; name its outcome, covered tasks and finish line in the records. Never invent a task or stream just to host them. The owner must remain open while its documents serve active work; shared work uses the genuine integration/outcome task or an owning stream that remains active for that boundary.

Before creation or takeover, read existing working-document pointers, current owners and in-flight work. Reuse one canonical journal for the same boundary. Different document or mandate identities never justify overlapping active ownership. Link the journal and any contract from covered tasks, preserving existing page links; their owner also lists them as working pages. Record each document's workspace and identity in the journal. Across workspaces, read through the owning workspace with actual access; do not invent cross-workspace page links. Verify the working mark and owner after creation. Missing capability pauses affected work; no ordinary-page or Key Information fallback grants it or missing authority.

The journal links required task evidence rather than copying it. Keep no polls, progress board, task specifications or house-rule history there. Do not create automatic Brief, Stakes, Plan-contract, delivery-authorization or supervisor Decisions.

## Guard control changes and preserve review binding

Claim, release or replace the journal's current supervision with `pages(action: "update", content_updates, expected_updated_at)` using the revision just read. Preserve all receipts. Consent, activation, revocation and gate-continuation writes also use guarded updates; ordinary evidence may append. On conflict, reread and reconcile before acting, never overwrite.

Reviews name exact task identities and revisions, and the contract identity and revision, or the owning task when it supplies that frame. Keep review and activation receipts in the journal, separate from the reviewed contract. Reconcile drift and refresh affected judgments; never carry PASS over a changed premise or overwrite an old receipt. Adding a receipt or changing supervision does not change the contract revision. Reread before every guarded write: Octopad advances a task's `updated_at` on its own after a write and when a dependency closes, with no text change, so a value copied from a write receipt or a handoff goes stale, and drift is judged by comparing content, never timestamps alone. A changed task or contract timestamp still requires reread and evidence of unchanged material content: an evidenced status-only update revokes neither a content review nor the mandate, and changed or unprovable content gets the affected recheck. Preserve the comparison evidence. Page undo history is not permanent review evidence.

Keep superseded consent, reviews and transfers as history. Current scope is the latest applicable, unretracted consent within its actual bounds, never a header's assertion or an old receipt in isolation.

## Finish the bounded delivery

Archive the contract and journal by their page IDs with `pages(action: "update", page_id, folder_id: <Archive UUID>, expected_updated_at)`; resolve that folder in their own workspace. Keep the working mark and owner so direct recovery remains possible. Preserve a document as an ordinary reference only when it actually outlives this delivery.

In an ongoing stream, archive only this mandate's documents, never all stream working pages or the stream itself. Shared records stay active until their whole boundary closes. Do not promise retrieval isolation or server-sealed receipts.
