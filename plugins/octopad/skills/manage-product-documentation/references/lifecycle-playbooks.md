# Product documentation lifecycle playbooks

## Greenfield setup

Use when there is no product documentation, repository, or established system model.

Begin this setup after the user explicitly asks to establish product documentation or a substantive design discussion needs its first owner. A passing idea alone is not setup authority.

1. Confirm the product, users, problem, and current evidence state from the conversation. Ask only about a material missing boundary or intent.
2. Follow the workspace's existing folder and page-preparation guidance, then create the Product Map index from [artifact-shapes.md](artifact-shapes.md), one line per known feature. Do not invent milestones, architecture, integrations, or implementation choices.
3. From here on, park passing ideas under [Brainstorm and design maturity](#brainstorm-and-design-maturity).
4. Once discussion develops a real system boundary, behavior, contract, or meaningful alternative, add its Map line and create its Product Spec with an `[idea]` entry holding confirmed material and open questions. Do not invent execution work. Advance it only when later evidence supports the next state.
5. Reuse the user's work stream and Tasks or create only the finite execution work needed by the normal workflow. Link that work to the spec; do not copy its changing status into the page.
6. Do not create an Architecture Map as if architecture exists. Before code exists, retain only confirmed technical constraints or Decisions. Create the map once code gives evidence of stable architecture, in Octopad or in the repository when the team wants it beside the code.

Example: a user mentions three collaboration features and discusses shared review in enough detail to establish its boundary. Create or adopt that system's spec at `idea`, leave implementation architecture unknown, and park only the other ideas the user engaged with and left open. Create execution work only after a separate commitment requires it.

## Existing-product setup

Use before creating structure for a product that already has code, docs, or Octopad history.

1. Bound the inventory: connected Octopad organization and workspaces, repositories, default and release branches, docs locations, and active work streams.
2. Search Octopad Pages, Tasks, work streams, and Decisions by product terms and likely synonyms. Read candidate bodies and links before judging duplicates.
3. Inspect repository READMEs, docs indexes, architecture records, contribution rules, release policy, and current code structure. Treat stale or generated docs as time-bounded evidence, not automatic canon.
4. Build a temporary adoption table: artifact, current authority, evidence revision, model destination, duplicate or conflict, and action.
5. Designate or reshape one Product Map for this product documentation set. Adopt existing product or feature docs as evolving Product Specs when they already own coherent system boundaries.
6. Preserve useful unique content and inbound links before consolidation. Use redirects, superseded markers, or links by default. Require explicit approval before deleting content or irreversibly overwriting history.
7. Adopt one credible architecture overview wherever it already lives, and record that home. Otherwise create the smallest canonical Architecture Map from verified code and configuration, in Octopad or in the repository when the team wants it beside the code.
8. Link existing streams, Tasks, Decisions, PRs, and docs. Do not recreate completed history or replace an Octoplan task graph with a documentation-owned plan.
9. Mark conflicts, gaps, and unverifiable claims as documentation debt. Ask about authority only when evidence and normal review cannot resolve it.

## Brainstorm and design maturity

Classify impact continuously without making the conversation feel like a form, and make the smallest useful update for the class:

- `no impact`: a rejected or abandoned idea, or work outside product documentation. Create no documentation artifact beyond a parked idea line.
- `existing-system change`: idea, explored, accepted, or later behavior inside a known system boundary. Update the evolving Product Spec with clearly labeled proposed or approved behavior and link the existing execution work.
- `new system`: substantive design establishing a new coherent capability or responsibility, beginning at `idea`. Add its Product Map line and create its Product Spec with an `[idea]` entry, under SKILL.md's substantive-design rule.
- `technical-only`: implementation or operational work with no product behavior change. Update architecture or a targeted Engineering Reference only when the change creates durable, non-derivable knowledge.

If the product or system boundary remains materially ambiguous after reading current context, ask one focused question and continue unaffected organization work.

Parking: one `[idea <date parked>]` line per idea, carrying the idea and the problem it addresses, in the Next section of the Product Spec it concerns, or on the product documentation set's single Ideas page when it concerns no existing system yet; move the line to that system's spec once one exists. Creating that page on first use and linking it from the Product Map is part of parking, not a separate authority. Add no owner, priority, status, origin or rationale, and keep each line within the persisted-evidence rules. Never park an idea the user turned down or dropped. A line leaves the list when the idea is committed, where ordinary commitment handling takes over, or when the user rejects it; remove it rather than replacing it with a rejected or abandoned line, and put any useful rejection reason in history. Moving or removing a parked line, or dropping an emptied section, is routine list maintenance, not the content deletion that needs approval. Before a Product Map exists, keep ideas in the conversation and follow the setup playbooks.

## Implementation context retrieval

1. Establish the affected system, intended outcome and reading scope under [Work from product intent](../SKILL.md#work-from-product-intent).
2. Add the applicable Behavioral Contract clauses, Architecture Map slice and active Task to that product context.
3. Inspect current code for files, symbols, imports, dependencies, tests, schemas, and runtime configuration. Prefer current derivation over stored inventories.
4. Carry forward exact source and documentation revisions.
5. Put new enforceable behavior in executable checks where feasible. Update prose only for durable knowledge or user behavior.

Do not load every Product Spec or the whole repository merely because the Product Map links to them.

## Pull request and delivery sync

1. Determine documentation impact: none, existing-system change, new system, or technical-only. Record it on the PR in the repository's normal way, naming affected documents or carrying the proven negative receipt. A `none` follows SKILL.md's no-impact protocol. `technical-only` does not imply `none` when durable architecture or an Engineering Reference changed.
2. Link the existing Task or work stream to the PR through the repository's normal fields; the spec's Next entry links the Task.
3. Record exact head and base revisions on the pull request or Task. Re-check after material drift.
4. Change the spec only as SKILL.md's delivery rule allows.
5. Verify coverage under [Work from product intent](../SKILL.md#work-from-product-intent), using code, tests and the actual diff rather than the PR description alone.
6. Draft pre-release user documentation or release notes when useful, under SKILL.md's pre-release rule; never as shipped wording, Product Facts or marketing claims.
7. After merge, replace the change's label with `[merged PR #n]`; for a change merged in parts, give each part its own state. Do not label the behavior released.
8. When evidence remains missing, mark the update stale or unverified and create or reuse documentation-debt work.

Follow repository review and merge controls. This skill grants no merge authority and creates no separate approval system.

## Release sync

Run one full pass per release, when changes actually reach users. This pass is the safety net that keeps shipped truth current: it must end with either updated docs or named debt, never a silent skip. Keep one durable record per release — a release page or runbook entry: step 9 writes it, and step 2 reads the previous one. On the first pass ever, no previous record exists; bound on the oldest evidence you can verify and say so.

1. Verify the repository's release policy, exact released revision, and included changes.
2. Bound the release window. Read the boundary the previous release pass recorded: an exact revision, or failing that a date resolved to a revision. Collect every change between that boundary and this release's exact revision. Never bound on a moving branch head or a bare date; a date boundary silently drops same-day changes. When the boundary is imprecise, over-collect toward the older side and say so in the closing record — a duplicate is visible, a dropped change is not.
3. Consume each change's documentation-impact mark when the delivery workflow records one. A mark naming a maintained doc puts that doc on the update list with the change as evidence. Recheck an explicit `none` against the diff and its receipt. A missing or wrong owner is resolved by adopting or creating the smallest authorized owner when the evidence is sufficient; otherwise file documentation debt. A mark naming another family's doc is a handoff, not an edit order.
4. Re-read each affected draft against released code and observed product behavior when available.
5. Fold each released change into the affected spec's Principles and Behavior, only for the part and audience released, replacing the lines it supersedes and merging duplicates; keep its still-applicable constraints and scenarios; remove its Next entry once nothing in it is unmet; replace the Verified lines checked. Update relevant Architecture Map sections.
6. Keep unverified claims out of shipped truth. Track them as documentation debt.
7. Resolve and open each existing product authority affected by the release, including the Product Map and any Product Facts whose dependencies moved. A Product Facts page is born only with the first substantiated public claim; its prior absence is normal. Create or adopt a missing ordinary owner when the released evidence and session authority support it, or record the exact gap. Only a document the product context explicitly marks as locked requires exact before/after approval before editing.
8. Reconcile pre-release user documentation or release notes against verified released evidence before removing their label. Draft or revise Product Facts here. Hand marketing claims and final marketing wording to product marketing. Preserve every review and publication gate.
9. Close the loop on the release record: the boundary covered and this release's exact revision (the next pass's lower bound), each doc updated with its evidence, each canon outcome (not needed, validated and applied, pending task, or escalated), and a link to the documentation-debt work.

If repository policy explicitly proves that merge equals release, record that policy as evidence. Otherwise keep merge and release separate.

## Maintenance and audit

1. Verify the Product Map points to one current spec per significant system and, when architecture exists, one canonical Architecture Map.
2. Check links, ownership metadata, lifecycle labels, source revisions, and last-verification times.
3. Repair safe metadata and broken links directly when the correct target is unambiguous.
4. For each page you will change, check intent and coverage under [Work from product intent](../SKILL.md#work-from-product-intent). Then compare claims with current code, release evidence, Decisions, and user-facing behavior. Mark unsupported claims stale or unverified instead of guessing.
5. Consolidate duplicates only after preserving unique knowledge and history. Require explicit approval before deletion or irreversible overwrite.
6. Review parked ideas and the Ideas page. Propose removing lines whose problem has lapsed, in one batch; do not remove them silently.
7. Check each spec section against its line in SKILL.md's Write for the reader: content that belongs elsewhere, duplicates, unlabelled states, words that do not count. Prune under its preservation rule.
8. Create or reuse one bounded documentation-debt Task for related missing evidence, unresolved conflicts, or substantial rewrites. Do not create one task per broken link.
9. Report repairs, remaining uncertainty, and the evidence needed to resolve it.

## Downstream documents

For user docs, release notes, and Product Facts, plus handoffs to marketing:

1. For pre-release user documentation or release notes, start from approved, implemented, or merged evidence, label the draft pre-release, and bind it to the exact source revision.
2. For Product Facts, apply SKILL.md's Product Fact evidence rule (Stop before writing). Route marketing claims and final marketing wording to product marketing with those Facts as inputs.
3. Verify every capability, limit, outcome, compatibility statement, and metric.
4. Separate current behavior from future intent. Exclude internal implementation detail unless the audience needs it.
5. Draft the smallest audience-appropriate change and retain source links in the working artifact when possible.
6. Reconcile every pre-release draft after release, then obtain required publication approval. Do not publish merely because the draft is complete.
