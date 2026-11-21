# Product documentation model

- Use the smallest set of durable artifacts that makes the product understandable and safe to change.
- Adopt clear existing vocabulary instead of renaming established systems merely to fit this model.

- Keep durable knowledge in Pages, or in the repository docs that already hold it.
- Keep finite execution, owners and current status in existing streams and Tasks.
- When an Octoplan-created stream or task graph exists, reuse it; do not require Octoplan, and do not create a parallel planning system.

## Product Overview

- Keep one per offer: a head page (`head_type: product_overview`) for purpose, experience, design pillars, non-goals and relationships above system specs, with a Marketing section that `manage-product-marketing` writes. The Organization Overview shows its At a glance block.
- Give products sold together to one audience at one price one shared Overview; give a product its own only when its audience or its price differs.
- You own its At a glance key `offer_and_availability`; hold it to the evidence a Product Fact needs. The keys `audience_and_need`, `promise` and `conditions` belong to `manage-product-marketing`.
- Keep it distinct from the Product Map, which only indexes.

## Product Map

- Keep exactly one per product: the index of every system, nothing else.
- When an existing index already serves as the entry point, adopt it.
- For its shape and contents, read [artifact-shapes.md](artifact-shapes.md#product-map).
- A portfolio index may route to several product maps; never restate their product truth in it.

## Product Spec

- Keep one evolving Product Spec per significant product system: a coherent user capability, durable behavior or boundary that people need to reason about independently.
- Once a discussion develops that boundary or behavior far enough to become real design work, create or adopt its spec at `idea`; a build decision is not required.
- For which system owns a capability, follow [Resolve the product first](../SKILL.md#resolve-the-product-first).

- Use the shape in [artifact-shapes.md](artifact-shapes.md#product-spec). For what each section holds, and the home of everything else, follow SKILL.md, section "Write for the reader".
- Put vision and offer in the Product Overview and precise shared invariants in a Behavioral Contract; replaced text stays in page versions.
- Update the existing spec as the system evolves.

## Behavioral Contract

Create a Behavioral Contract only when at least one condition applies:

- safety, privacy, permissions, billing, data integrity, or another consequential risk needs precision;
- multiple components depend on the same exact behavior;
- ambiguous edge cases repeatedly cause defects or disagreement;
- compatibility or migration behavior must remain stable.

- State inputs, outputs, invariants, failure behavior, compatibility and evidence.
- Link enforceable parts to tests, types, schemas, lint or CI.
- Do not copy an executable invariant into prose and then treat the prose as enforcement.

## Architecture Map

Keep architecture intentionally asymmetric: one short map per product, not one engineering document per Product Spec.

- Keep the map in Octopad by default, beside the Product Map it serves, where the workspace's own search reaches it.
- A repository file is the alternative, for a team that wants architecture to change in the same review as the code: choose a docs location consistent with that repository, treat that file as canonical, and keep the Octopad entry as its link, ownership, status, related systems and verification metadata.
- Name one canonical home; do not maintain both.
- Adopt an existing map where it already lives rather than moving it.
- Create the map only once code gives evidence of stable architecture; otherwise leave it uncreated and record the gap.

- Give the map's Octopad page, or the Octopad entry of a repository map, the page subtype "Architecture Map", and give it to no other page; each product keeps its own map.
- Link the map, with the URL Octopad returns for it, from its Product Map and from the Links of each of that product's specs: when a workspace holds several maps, Octopad serves a task the one its linked pages point to.
- Keep the heading "How the systems connect" word for word: Octopad finds the section by it. Octopad serves that section in a code-work task briefing, asks for a check when a task with a linked pull request is delivered, and warns when an edit leaves the map past its size line.
- When two marked pages describe one product, keep the mark on the canonical one.

Its reader is an AI or a person about to change something that crosses systems: the map shows how the systems connect end to end, so they see what else the change touches before they start. Include only stable orientation:

- major runtime or deployable components and the boundaries between them;
- how the systems connect: the main end-to-end flows, one line each, from the action that starts a flow through each component it crosses;
- data stores and external services;
- where to find current code and enforceable contracts;
- how release state is determined.

Keep a line only if a reader without it could break a connection, a boundary or the release path. Put everything else in its home, linked when still needed:

- one system's intent, choices, promises and known limits: its Product Spec;
- one system's mechanics: code and tests, or an Engineering Reference when the knowledge is stable and not derivable from code;
- delivery history (pull requests, releases, commits, migration applies, run ids): the pull request and the release record;
- counts, sizes and other measurements: the test or script that measures them;
- inventories of files, symbols, imports, endpoints, jobs or dependencies: current code, derived when needed;
- open questions about one system: a Task or a recorded question, not the map's Verification.

- Describe in the map the code on the default branch, the base every change starts from; when released state differs in a way a reader needs, say so in one line.
- When a change lands that alters a component, a connection, a data store or external service, a code home or the release model, update the map; check it at each release sync.
- Keep it short enough to read whole before a change: at most 20,000 characters of page text. When a system's detail would push past that, move it to its home.
- Before durable content leaves the map, list it under SKILL.md's preservation rule, as for a spec.

## Engineering References

- Create a targeted Engineering Reference only for important knowledge that is stable and not cheaply derivable, such as a non-obvious operational constraint, a durable integration convention or a difficult data-model rationale.
- Link it from the Architecture Map and the affected Product Specs; link one that details a known limit from that limit's line.
- Prefer a Decision for a choice and its rationale, and code for mechanics.
- Never create one per Product Spec by default.

## Relationships and provenance

Maintain useful edges when they exist:

- Product Map → Product Spec → active stream or Tasks;
- Product Spec → Decisions, Behavioral Contract, Architecture Map section, released user docs;
- Task or stream → Product Spec and PR;
- PR or release → documentation impact and exact draft or shipped revision.

For each material claim, make it possible to answer:

- What source supports it?
- At which exact source revision or dated authoritative record was it observed, with which method and limits?

- Use explicit unknowns instead of placeholder facts.
- Never invent a value to make a template look complete.

## Product Facts

- Create Product Facts only under the Product Fact rule in SKILL.md, section "Stop before writing".
- Keep each Fact attributable to one product; a shared component does not make its release state universal.
- Give each Fact:
  - exact claimable wording;
  - dated evidence, verified state and product scope;
  - tier, region, platform, or other limits;
  - wording constraints;
  - owner;
  - re-review trigger;
  - status: `active`, `retired`, or `superseded`.

- Never put roadmap intent or `coming soon` in Product Facts.
- On correction or rollback, revise or retire current truth and preserve the version history.
- `manage-product-marketing` consumes these Facts and owns the claims and messages derived from them.
