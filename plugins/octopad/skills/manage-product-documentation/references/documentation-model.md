# Product documentation model

Use the smallest set of durable artifacts that makes the product understandable and safe to change. Adopt clear existing vocabulary instead of renaming established systems merely to fit this model.

## Product Overview

Keep one Product Overview per offer: the head page whose At a glance block the Organization Overview shows. It holds the offer's purpose, intended experience, design pillars, non-goals, and relationships above system specs, and a Marketing section that product marketing writes. Products sold together to one audience at one price share one. Keep it distinct from the Product Map, which only indexes.

## Product Map

Shape and contents: [artifact-shapes.md](artifact-shapes.md). A portfolio index may route to several product maps but never restates their product truth.

## Product Spec

Keep one evolving Product Spec per significant product system. A system is significant when it owns a coherent user capability, durable behavior, or boundary that people need to reason about independently. Create or adopt it at `idea` once a discussion develops that boundary or behavior far enough to become real design work; a build decision is not required. Keep `idea`, `explored`, `accepted`, `implemented`, `merged`, `released`, and `retired` distinct.

Use the shape in [artifact-shapes.md](artifact-shapes.md) and the writing rules in SKILL.md (Write for the reader). What a spec does not hold has a home: vision and offer in the Product Overview; a choice and its rejected alternatives in a Decision; precise shared invariants in a Behavioral Contract; a research trail, dated cases and reviews with lasting value in a supporting record; delivery on Tasks and pull requests; release chronology on the release record; superseded text on the history page; files, internal symbols and mechanical constants in code, while limits users meet stay in the spec. Update the existing spec as the system evolves. Split only when distinct system boundaries have emerged. Supersede or link duplicates after preserving unique facts and links; require explicit approval before destructive consolidation.

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

Create a targeted Engineering Reference only for important knowledge that is stable and not cheaply derivable, such as a non-obvious operational constraint, durable integration convention, or difficult data-model rationale. Link it from the Architecture Map and affected Product Specs. Prefer a Decision for a choice and its rationale; prefer code for mechanics.

## Relationships and provenance

Use links instead of duplicated prose. Maintain useful edges when they exist:

- Product Map → Product Spec → active work stream or Tasks;
- Product Spec → Decisions, Behavioral Contract, Architecture Map section, released user docs;
- Task or work stream → Product Spec and PR;
- PR or release → documentation impact and exact draft or shipped revision.

For each material claim, make it possible to answer:

- What source supports it?
- At which exact source revision or dated authoritative record was it observed, with which method and limits?
- In a Product Spec: is it in Behavior or Principles (released, covered by a Verified line) or in Next with its state label?

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
