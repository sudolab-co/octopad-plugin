# Product documentation model

Use the smallest set of durable artifacts that makes the product understandable and safe to change. Adopt clear existing vocabulary instead of renaming established systems merely to fit this model.

Keep durable knowledge in Pages, or in the repository docs that already hold it. Keep finite execution, owners, and current status in existing work streams and Tasks. Reuse an existing Octoplan-created stream or task graph when present; do not require Octoplan and do not create a parallel planning system.

## Product Overview

One per offer, a head page (`head_type: product_overview`; at most 10 live per organization and per workspace) for purpose, experience, design pillars, non-goals and relationships above system specs, with a Marketing section that `manage-product-marketing` writes; the Organization Overview shows its At a glance block. Products sold together to one audience at one price share one; a product gets its own only when its audience or its price differs. Its At a glance key `offer_and_availability` is yours, held to the evidence a Product Fact needs; `audience_and_need`, `promise` and `conditions` are product marketing's. Keep it distinct from the Product Map, which only indexes.

## Product Map

Keep exactly one per product: the index of every system, nothing else. Adopt an existing index when it already serves as the entry point. Shape and contents: [artifact-shapes.md](artifact-shapes.md). A portfolio index may route to several product maps but never restates their product truth.

## Product Spec

Keep one evolving Product Spec per significant product system: a coherent user capability, durable behavior or boundary that people need to reason about independently. Create or adopt it at `idea` once a discussion develops that boundary or behavior far enough to become real design work; a build decision is not required. Before adding a capability to an existing spec, check it belongs there: one its reader must understand on its own, with its own need, data or rules, gets its own spec, linked from the first; never for length alone.

Use the shape in [artifact-shapes.md](artifact-shapes.md); what each section holds, and the home of everything else, is in SKILL.md (Write for the reader). Vision and offer live in the Product Overview; precise shared invariants in a Behavioral Contract; replaced text in page versions. Update the existing spec as the system evolves.

## Behavioral Contract

Create a Behavioral Contract only when at least one condition applies:

- safety, privacy, permissions, billing, data integrity, or another consequential risk needs precision;
- multiple components depend on the same exact behavior;
- ambiguous edge cases repeatedly cause defects or disagreement;
- compatibility or migration behavior must remain stable.

State inputs, outputs, invariants, failure behavior, compatibility, and evidence. Link enforceable parts to tests, types, schemas, lint, or CI. Do not copy an executable invariant into prose and then treat the prose as enforcement.

## Architecture Map

Keep architecture intentionally asymmetric: one short map, not one engineering document per Product Spec.

Keep the map in Octopad by default, beside the Product Map it serves, where the workspace's own search reaches it. A repository file is the alternative, for a team that wants architecture to change in the same review as the code; choose a docs location consistent with that repository, treat that file as canonical, and keep the Octopad entry as its link, ownership, status, related systems, and verification metadata. Name one canonical home and do not maintain both. Adopt an existing map where it already lives rather than moving it. Create the map only once code gives evidence of stable architecture; otherwise leave it uncreated and record the gap.

Include only stable orientation:

- major runtime or deployable components;
- data stores and external services;
- important boundaries and directional relationships;
- where to find current code and enforceable contracts;
- how release state is determined.

Do not manually inventory every file, symbol, import, endpoint, or dependency. Derive those from current code when needed.

## Engineering References

Create a targeted Engineering Reference only for important knowledge that is stable and not cheaply derivable, such as a non-obvious operational constraint, durable integration convention, or difficult data-model rationale. Link it from the Architecture Map and affected Product Specs. Prefer a Decision for a choice and its rationale; prefer code for mechanics. Never create one per Product Spec by default.

## Relationships and provenance

Maintain useful edges when they exist:

- Product Map → Product Spec → active work stream or Tasks;
- Product Spec → Decisions, Behavioral Contract, Architecture Map section, released user docs;
- Task or work stream → Product Spec and PR;
- PR or release → documentation impact and exact draft or shipped revision.

For each material claim, make it possible to answer:

- What source supports it?
- At which exact source revision or dated authoritative record was it observed, with which method and limits?

Use explicit unknowns instead of placeholder facts. Never invent a value to make a template look complete.

## Product Facts

Create Product Facts only under the evidence rule in SKILL.md (Stop before writing). Keep them attributable to one product; a shared component does not make its release state universal. Each Fact carries:

- exact claimable wording;
- dated evidence, verified state and product scope;
- tier, region, platform, or other limits;
- wording constraints;
- owner;
- re-review trigger;
- status: `active`, `retired`, or `superseded`.

Never put roadmap intent or `coming soon` in Product Facts. On correction or rollback, revise or retire current truth and preserve the version history. Product marketing consumes these Facts and owns the claims and messages derived from them.
