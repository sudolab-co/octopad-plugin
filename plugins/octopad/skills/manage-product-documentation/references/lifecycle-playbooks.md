# Product documentation lifecycle playbooks

## Contents

- Greenfield setup
- Existing-product setup
- Brainstorm and design maturity
- Implementation context retrieval
- Release sync
- Maintenance and audit
- Downstream documents

Pull request and delivery sync: [pull-requests.md](pull-requests.md#pull-request-and-delivery-sync).

## Greenfield setup

Use when there is no product documentation, repository, or established system model. Begin this setup only after the user explicitly asks to establish product documentation or a substantive design discussion needs its first owner; a passing idea alone is not setup authority.

1. Confirm the product, users, problem, and current evidence state from the conversation. Ask only about a material missing boundary or intent.
2. Create the [Product Map](documentation-model.md#product-map) index, filed as SKILL.md's "Stop before writing" step 1 says, one line per known feature. Do not invent milestones, architecture, integrations, or implementation choices.
3. From here on, park passing ideas under [Brainstorm and design maturity](#brainstorm-and-design-maturity). Once discussion develops a real system boundary, behavior, contract, or meaningful alternative, follow SKILL.md, section "Capture exploration without waiting for a build decision", and invent no execution work.
4. Reuse the user's stream and Tasks or create only the finite execution work the normal workflow needs. Link that work to the spec; do not copy its changing status into the page.
5. Do not create an Architecture Map as if architecture exists: before code exists, retain only confirmed technical constraints or Decisions, and create the map once code gives evidence of stable architecture, under [its rule](documentation-model.md#architecture-map).

## Existing-product setup

Use before creating structure for a product that already has code, docs, or Octopad history.

1. Bound the inventory: connected Octopad organization and workspaces, repositories, default and release branches, docs locations, and active streams.
2. Search Octopad Pages, Tasks, streams, and Decisions by product terms and likely synonyms. Read candidate bodies and links before judging duplicates.
3. Inspect repository READMEs, docs indexes, architecture records, contribution rules, release policy, and current code structure. Treat stale or generated docs as time-bounded evidence, never as current truth on their own.
4. Build a temporary adoption table: artifact, current authority, evidence revision, model destination, duplicate or conflict, and action.
5. Designate or reshape one Product Map for this product documentation set. Adopt existing product or feature docs as evolving Product Specs when they already own coherent system boundaries.
6. Preserve useful unique content and inbound links before consolidation, by redirects, superseded markers, or links by default. Get the user's explicit confirmation before deleting content or irreversibly overwriting history.
7. Adopt one credible architecture overview wherever it already lives, and record that home. Otherwise create the smallest canonical Architecture Map from verified code and configuration, in the home [its rule](documentation-model.md#architecture-map) sets.
8. Link existing streams, Tasks, Decisions, PRs, and docs. Do not recreate completed history or replace an Octoplan task graph with a documentation-owned plan.
9. Mark conflicts, gaps, and unverifiable claims as documentation debt. Ask about authority only when evidence and normal review cannot resolve it.

## Brainstorm and design maturity

Classify impact continuously without making the conversation feel like a form, and make the smallest useful update for the class:

- `no impact`: a rejected or abandoned idea, or work outside product documentation. Create no documentation artifact, not even a parked idea line.
- `existing-system change`: idea, explored, accepted, or later behavior inside a known system boundary. Update the evolving Product Spec, an unaccepted idea in Open questions and accepted intent in its section, and link the existing execution work.
- `new system`: substantive design establishing a new coherent capability or responsibility, beginning at `idea`. Add its Product Map line and create its Product Spec with an `[idea]` entry, as SKILL.md, section "Capture exploration without waiting for a build decision", says.
- `technical-only`: implementation or operational work with no product behavior change. Update the Architecture Map only under [its rule](documentation-model.md#architecture-map), and a targeted Engineering Reference only when the change creates durable, non-derivable knowledge.

If the product or system boundary remains materially ambiguous after reading current context, ask one focused question and continue unaffected organization work.

Parking:
- Write one `[idea <date parked>]` line per idea, carrying the idea and the problem it addresses, and linking its `idea` task when one exists:
  - in the Open questions of the Product Spec it concerns;
  - or, when it concerns no existing system yet, on the product documentation set's single [Ideas page](documentation-model.md#ideas-page); move the line to that system's spec once one exists.
- Creating that page on first use and linking it from the Product Map is part of parking, not a separate authority.
- Add no owner, priority, status, origin or rationale, and keep each line within the persisted-evidence rule (SKILL.md, "Stop before writing" step 7).
- Never park an idea the user turned down or dropped.
- A line leaves the list when the idea is committed, where ordinary commitment handling takes over, or when the user rejects it: remove it rather than replacing it with a rejected or abandoned line, and put any useful rejection reason in history.
- Moving or removing a parked line, or dropping an emptied section, is routine list maintenance, not the content deletion that needs the user's confirmation.
- Before a Product Map exists, park the idea in the Product Spec it concerns when one exists; otherwise file it as a `todo` task tagged `idea` with no date, or reuse the one already filed, say where, and follow the setup playbooks.

## Implementation context retrieval

1. Establish the affected system, intended outcome and reading scope under SKILL.md, section "Work from product intent".
2. Add the applicable Behavioral Contract clauses and active Task to that product context. When the change touches more than one system, or a connection, data store or external service, read the Architecture Map's components and connections before you choose an approach.
3. Inspect current code for files, symbols, imports, dependencies, tests, schemas, and runtime configuration. Prefer current derivation over stored inventories.
4. Carry forward exact source and documentation revisions.
5. Put new enforceable behavior in executable checks where feasible. Update prose only for durable knowledge or user behavior.

Do not load every Product Spec or the whole repository merely because the Product Map links to them.

## Release sync

- Run one full pass per release, when changes actually reach users; end it with updated docs or named debt, never a silent skip.
- Keep one durable record per release, a release page or runbook entry: step 9 writes it, and step 2 reads the previous one.
- On the first pass ever, no previous record exists: bound on the oldest evidence you can verify, and say so.

1. Verify the repository's release policy, exact released revision, and included changes. If that policy explicitly proves that merge equals release, record the policy as evidence; otherwise keep merge and release separate.
2. Bound the release window. Read the boundary the previous release pass recorded: an exact revision, or failing that a date resolved to a revision. Collect every change between that boundary and this release's exact revision. Never bound on a moving branch head or a bare date; a date boundary silently drops same-day changes. When the boundary is imprecise, over-collect toward the older side and say so in the closing record: a duplicate is visible, a dropped change is not.
3. Consume each change's documentation-impact mark when the delivery workflow records one:
   - a mark that names a task for an edit waiting on this release: make the edit, then close that task;
   - a mark naming a maintained doc: put that doc on the update list, with the change as evidence;
   - an explicit `none`: recheck it against the diff and its receipt;
   - a missing or wrong owner: adopt or create the smallest authorized owner when the evidence is sufficient; otherwise file documentation debt;
   - a mark naming another family's doc: a handoff, not an edit order.
4. Re-read each affected draft against released code and observed product behavior when available.
5. Edit a spec only as SKILL.md's delivery rule allows, where the release settled a direction or changed a need, the outcome, a choice, a promise or a non-goal, or established or lifted a known limit: fold what it settled into Choices or Promises and remove the Direction line once nothing in it is still ahead. Check the Architecture Map against the released changes under [its rule](documentation-model.md#architecture-map), and edit it only where a component, a connection, a data store or external service, a code home or the release model changed; the release's history stays on its record (step 9).
6. Keep unverified claims out of shipped truth. Track them as documentation debt.
7. Resolve and open each existing product authority affected by the release, including the Product Map and any Product Facts whose dependencies moved. A Product Facts page is born only with the first substantiated public claim; its prior absence is normal. Create or adopt a missing ordinary owner when the released evidence and session authority support it, or record the exact gap. Only a document the product context explicitly marks as locked requires exact before/after approval before editing.
8. Reconcile pre-release user documentation or release notes against verified released evidence before removing their label. Draft or revise Product Facts here. Hand marketing claims and final marketing wording to `manage-product-marketing`. Preserve every review and publication gate.
9. Close the loop on the release record: the boundary covered and this release's exact revision (the next pass's lower bound), each doc updated with its evidence, the outcome for each product authority of step 7 (not needed, validated and applied, pending task, or escalated), and a link to the documentation-debt work.

## Maintenance and audit

An audit alone changes no page: steps 3 to 7 then list what they would change, applied only once the request asks for repairs. Step 8 still files the debt, as the methodology files any gap found.

1. Verify the Product Map points to one current spec per significant system and, when architecture exists, one canonical Architecture Map.
2. Check links, ownership metadata, and, where a page carries them, lifecycle labels, source revisions and last-verification times.
3. Repair safe metadata and broken links directly when the correct target is unambiguous.
4. For each page you will change, check intent and coverage under SKILL.md, section "Work from product intent". Check a spec against the requests and Decisions it rests on, never rewritten to match code: an accepted promise not yet built stays, its gap a Task. Check each Known limits line against its source and newer evidence. Compare other pages' claims with current code, release evidence, Decisions and user-facing behavior; mark unsupported claims stale or unverified instead of guessing.
5. Consolidate duplicates only after preserving unique knowledge and history. Get the user's explicit confirmation before a deletion or an irreversible overwrite.
6. Review parked ideas and the Ideas page. Propose removing lines whose problem has lapsed, in one batch; do not remove them silently.
7. Check each spec section against SKILL.md, section "Write for the reader": lines the "Keep a line only if" rule rejects, content that belongs elsewhere, duplicates, undecided points not marked `[open]`, several elements without a subsection each. Prune under its preservation rule. Check the Architecture Map against [its rule](documentation-model.md#architecture-map) the same way: lines that belong elsewhere, and its length.
8. Create or reuse one bounded [documentation-debt Task](documentation-model.md#documentation-debt-task) for related missing evidence, unresolved conflicts, or substantial rewrites.
9. Report repairs, remaining uncertainty, and the evidence needed to resolve it.

## Downstream documents

For user docs, release notes, and Product Facts, plus handoffs to marketing:

1. Pre-release user documentation and release notes follow SKILL.md's pre-release rule (section "Keep human authority narrow and meaningful").
2. For Product Facts, apply [the Product Fact rule](documentation-model.md#product-facts). Route marketing claims and final marketing wording to `manage-product-marketing` with those Facts as inputs.
3. Verify every capability, limit, outcome, compatibility statement, and metric.
4. Separate current behavior from future intent. Exclude internal implementation detail unless the audience needs it.
5. Draft the smallest audience-appropriate change and retain source links in the working artifact when possible.
6. Reconcile every pre-release draft after release, before it is published.
