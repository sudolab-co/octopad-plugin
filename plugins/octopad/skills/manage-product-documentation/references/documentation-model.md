# Product documentation model

## Contents

- Product Overview
- Product Map
- Product Spec: Spec sections, Element subsections
- Ideas page
- Behavioral Contract
- Architecture Map
- Engineering References
- Documentation-debt Task
- Relationships and provenance
- Product Facts

- Use the smallest set of durable artifacts that makes the product understandable and safe to change.
- Adopt clear existing vocabulary and page conventions instead of renaming established systems merely to fit this model; only a Product Spec's section headings are fixed.
- Use the shapes below as adaptable shapes, not forms that must be filled: omit irrelevant sections.
- Keep durable knowledge in Pages, or in the repository docs that already hold it; keep finite execution, owners and current status in existing streams and Tasks.
- When an Octoplan-created stream or task graph exists, reuse it; do not require Octoplan, and do not create a parallel planning system.
- Every page type below except a Product Spec and the Product Map also takes a verification section, as [Relationships and provenance](#relationships-and-provenance) says.

## Product Overview

- A head page (`head_type: product_overview`) for purpose, experience, design pillars, non-goals and relationships above system specs, with a Marketing section that `manage-product-marketing` writes.
- Keep one Product Overview per offer: give products sold together to one audience at one price one shared Overview; give a product its own only when its audience or its price differs.
- Its At a glance keys `audience_and_need`, `promise` and `conditions` belong to `manage-product-marketing`. This skill owns the key `offer_and_availability`: hold it to the Product Fact rule ([Load the needed guidance](../SKILL.md#load-the-needed-guidance)).
- In an At a glance block, write answers only; keep their provenance in the page body.
- Keep it distinct from the Product Map, which only indexes.

## Product Map

- Keep one Product Map per product: the index of every system, nothing else.
- When an existing index already serves as the entry point, adopt it.
- A portfolio index may route to several Product Maps; never restate their product truth in it.

```markdown
# Product Map

Index of every system and its spec.
Overview: <link> · Architecture: <link> · Ideas: <link>

## <Area>
- [<System>](<spec link>): <one-liner, telex>
- <System>: <one-liner>; no spec (<documentation-debt Task link>)
```

- Write one line per named feature, reusing the spec link when several share a spec.
- When a feature's audience is limited, say so in its one-liner (for example "early access").
- For a feature with no spec, link its documentation-debt Task when one exists.
- In the header, link each Product Overview, and list the Engineering References of the maintained set on one line.
- Write no state, gaps, active work or verification.

## Product Spec

- Keep one evolving Product Spec per significant product system: a coherent user capability, durable behavior or boundary that people need to reason about independently, with its own need, data or rules. Give such a capability its own spec, linked from the affected specs. Split specs only at such a boundary, never for length alone: element subsections let a reader take a long spec in parts.
- Put vision and offer in the Product Overview and precise shared invariants in a Behavioral Contract.
- A dropped promise or choice leaves with the Decision that drops it.
- In a spec of a text users' AIs read, such as a skill, keep its promises with their conditions, exceptions, authority boundaries and failure cases, and link that text at its released revision for the mechanics; never restate it rule by rule.

### Spec sections

A Product Spec gives whoever must decide, build, change or judge a system what code cannot. Describe in it the intended product, built or not, with the limits work has established.

- Example: not "`create` requires `title`; at most 80 characters" but "each item says in one line what it is for; input is never cut silently".

```markdown
# <System name>
## Need
- When <situation>, I want <motivation>, so <outcome>. (Whom it serves and their situation; never personas or features.)
## Outcome
<The result sought.> Signal: <what shows it is reached>.
## Direction
- <An accepted direction beyond what exists> (<its Task or stream>).
## Choices
- <A choice that shapes the system>, because <reason> (<its Decision, when one exists>). (A rejected alternative: only a link to its Decision.)
## Promises
- <What it must always or never do for the people it serves: rules protecting their work, data or privacy, accessibility, safety, compatibility, a guarantee they rely on; its conditions and audience when limited>.
## Non-goals
- <What it could reasonably do and deliberately does not>: <reason>; <neighbouring owner (link)>.
## Known limits
- <One limit work established: how it really behaves or fails, and what that imposes on whoever designs, changes or judges it> (<source>, <date>; <Engineering Reference for bulk detail>).
## Open questions
- [open] <undecided point>. (Never a settled choice: Choices, Decision.)
- [idea <date>] <direction>; read <supporting record> before assessing or building it.
## Links
<Product Map> · <Architecture Map> · <Decisions> · <supporting records> · <contracts> · <related specs> · <design document> · <code entry point>. (Nothing else.)
```

- Put in each section only its own content.
- Write intent (Need, Outcome, Direction, Choices) in short full sentences, each choice with its reason, and one bullet per promise or non-goal.
- Write each fact once, linked elsewhere, in the page's language and the workspace's style, with no transitions, history or comments on sources. Keep no changelog or history page per spec unless the workspace's rule keeps one: chronology lives on the release record or changelog.
- Put everything else in its home, linked when still needed:
  - what the code does and how, and values and steps chosen while building (screens, wording, parameters, size limits, budgets, ordering): code, tests, the design document, Tasks and release records;
  - a replaced design or text: page versions;
  - who chose when: Decision;
  - a defect, even one breaking a promise: Task, linked;
  - negated bugs ("does not crash");
  - a measurement that constrains no design: the test or script that measures it;
  - exploration narrative: supporting record.

### Element subsections

When a section covers several elements of the product (a screen, a tool, a step of a flow, a group of rules), give each element a `###` subsection, under the same heading in every section where it appears, so a reader can fetch one element across the spec:
- put a rule that holds for every element in a subsection headed `All elements`, in every language, and write no text outside the subsections;
- put a rule for some elements but not all under one of them, cross-referenced from each of the others; when an element's rule depends on another element, cross-reference that element's section and heading;
- when you write to such a section that has no subsections, read the whole spec and give it its subsections in the same edit, a move that changes no content; read it back and check that every old line survived.

## Ideas page

The product documentation set's single page for ideas with no system yet, kept by the [parking rule](lifecycle-playbooks.md#parking):

```markdown
# Ideas

Ideas with no system yet. One line each.

- [idea <date>] <idea>, <the problem it addresses>.
```

## Behavioral Contract

Create a Behavioral Contract only when at least one condition applies:

- safety, privacy, permissions, billing, data integrity, or another consequential risk needs precision;
- multiple components depend on the same exact behavior;
- ambiguous edge cases repeatedly cause defects or disagreement;
- compatibility or migration behavior must remain stable.

- Link its enforceable parts to tests, types, schemas, lint or CI.
- Do not copy an executable invariant into prose and then treat the prose as enforcement.

```markdown
# <Behavior>: Behavioral Contract

## Scope
<Boundary and actors.>
## Inputs and preconditions
<Exact conditions.>
## Outputs and effects
<Observable behavior.>
## Invariants and failure behavior
<Rules, edge cases, and failure semantics.>
## Compatibility or migration
<Only when applicable.>
## Enforcement and evidence
- Tests, types, schemas, lint, or CI: <links>
- Source revision or release: <exact value>
```

## Architecture Map

Keep architecture intentionally asymmetric: one short map per product, not one engineering document per Product Spec.

- Keep the map in Octopad by default, beside the Product Map it serves, where the workspace's own search reaches it.
- A repository file is the alternative, for a team that wants architecture to change in the same review as the code: choose a docs location consistent with that repository, treat that file as canonical, and keep the Octopad entry as its link, ownership, status, related systems and verification metadata.
- Name one canonical home; do not maintain both. Adopt an existing map where it already lives rather than moving it.
- Create the map only once code gives evidence of stable architecture; otherwise leave it uncreated and record the gap.
- Give the map's Octopad page, or the Octopad entry of a repository map, the page subtype "Architecture Map", and give it to no other page; each product keeps its own map. When two marked pages describe one product, keep the mark on the canonical one.
- Link the map, with the URL Octopad returns for it, from its Product Map and from the Links of each of that product's specs.
- Keep the heading "How the systems connect" word for word.

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
- Whenever content leaves the map, follow the preservation rule ([When content leaves a spec or an Architecture Map](../SKILL.md#when-content-leaves-a-spec-or-an-architecture-map)).

```markdown
# Architecture Map

## Components and boundaries
<Major runtime or deployable components, and the boundaries that shape most changes.>
## How the systems connect
1. <Flow>: <the action that starts it> → <component> → <component> → <its effect>.
## Data and external services
<Stable stores, copies that must change together, and external dependencies.>
## Canonical code and enforcement
<Repository locations and executable contracts, without a file inventory.>
## Release model
<How released state is actually established.>
## Related product systems
<Links to Product Specs and targeted Engineering References.>
## Verification
- <Date>, <claims checked>, against <exact revision>: <method>; <limits>.
- Gaps: <explicit unknowns>
```

## Engineering References

- Create a targeted Engineering Reference only for important knowledge that is stable and not cheaply derivable, such as a non-obvious operational constraint, a durable integration convention or a difficult data-model rationale. Never create one per Product Spec by default.
- Link it from the Architecture Map and the affected Product Specs; link one that details a known limit from that limit's line.
- Prefer a Decision for a choice and its rationale, and code for mechanics.

## Documentation-debt Task

- Keep one bounded Task for related gaps, never one task per broken link.
- For a subtask, use `parent_task_id`; give every dependency edge its rationale.
- State why the missing or stale knowledge matters, what evidence or repair is needed, and what proves completion.
- Link the affected pages, repository locations, PRs, releases and Decisions.
- Do not copy the Task's status into those pages.

## Relationships and provenance

Maintain useful edges when they exist:

- Product Map → Product Spec → active stream or Tasks;
- Product Spec → Decisions, Behavioral Contract, Architecture Map section, released user docs;
- Task or stream → Product Spec and PR;
- PR or release → documentation impact and exact draft or shipped revision.

For each material claim, make it possible to answer what source supports it, and at which exact source revision or dated authoritative record it was observed, with which method and limits.

Verification sections:
- Give a Product Spec (intent and its known limits) and the Product Map (an index) no verification section.
- Give every other page this skill owns one, in the page or, for published user documentation, in its release record.
- Write one line per group of claims checked together, naming scope, source and exact revision, date, method and limits.
- Let a new check replace the lines it covers and no other.

## Product Facts

Evidence competent for a Fact, which the Product Fact rule ([Load the needed guidance](../SKILL.md#load-the-needed-guidance)) requires, retrieved or supplied:
- A claim of shipped or released behavior, or of software's current capabilities or availability, needs verified release evidence, whether or not its wording mentions a release.
- A fact about a non-software offer, service or physical specification needs the relevant authoritative decision, service record or technical evidence for its exact state; approval or validation alone proves neither availability nor launch.
- A named artifact, or an assurance that evidence is available, is a pointer, not proof.

- Give each Fact:
  - exact claimable wording;
  - dated evidence, verified state and product scope;
  - tier, region, platform, or other limits;
  - wording constraints;
  - owner;
  - re-review trigger;
  - status: `active`, `retired`, or `superseded`.
- Never put roadmap intent or `coming soon` in Product Facts.
- On correction or rollback, revise or retire current truth and preserve the version history, as [Rollbacks and history](product-scope-and-seams.md#rollbacks-and-history) says.
