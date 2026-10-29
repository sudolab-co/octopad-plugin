# Compact artifact shapes

Use these as adaptable shapes, not forms that must be filled. Omit irrelevant sections. Preserve the product's existing vocabulary and page conventions, except a Product Spec's section headings, which readers parse.

## Product Map

```markdown
# Product Map

Index of every system and its spec. State, audience, limits and verification live in each spec.
Overview: <link> · Architecture: <link> · Ideas: <link>

## <Area>
- [<System>](<spec link>): <one-liner, telex>
- <System>: <one-liner>; no spec (<task link>)
```

One line per named feature, reusing the spec link when several share a spec; audience in the one-liner when limited ("early access"); a feature with no spec links its documentation-debt Task when one exists. The header links each Product Overview and lists the Engineering References of the maintained set on one line. No state, gaps, active work or verification.

## Product Spec

```markdown
# <System name>

## Need
- When <situation>, I want <motivation>, so <outcome>.

## Outcome
<The result sought.> Signal: <what shows it is reached>.

## Direction
<Where it is going, in a sentence or two> (<Task or stream link>).

## Choices
- <Choice>, because <reason> (<Decision link when one exists>).

## Promises
- <Always or never, for whom; condition when limited>.

## Non-goals
- <What it deliberately does not do>: <reason>; <neighbouring owner (link)>.

## Open questions
- [open] <undecided point>.
- [idea <date>] <direction>; read <supporting record> before assessing or building it.

## Links
<Product Map> · <Architecture Map> · <Decisions> · <related specs and contracts> · <design document> · <code entry point>
```

Omit empty sections. What each section holds: SKILL.md, Write for the reader. A dropped promise or choice leaves with the Decision that drops it; page versions keep its text. Split specs only at a system boundary ([documentation-model.md](documentation-model.md)).

## Ideas

```markdown
# Ideas

Ideas with no system yet. One line each.

- [idea <date>] <idea>, <the problem it addresses>.
```

## Behavioral Contract

```markdown
# <Behavior> — Behavioral Contract

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

```markdown
# Architecture Map

## Components and boundaries
<Major runtime or deployable components only.>

## Data and external services
<Stable stores, flows, and external dependencies.>

## Canonical code and enforcement
<Repository locations and executable contracts, without a file inventory.>

## Release model
<How released state is actually established.>

## Related product systems
<Links to Product Specs and targeted Engineering References.>

## Verification
- Source revision: <exact value>
- Gaps: <explicit unknowns>
```

## Documentation-debt Task

Keep one bounded Task for related gaps. Give its description literal `Why`, `What`, and `Done when` sections. Provide `impact` from 1 to 5 and `impact_rationale`. For a subtask, use `parent_task_id`; for every dependency edge, include its rationale. State why the missing or stale knowledge matters, what evidence or repair is needed, and what proves completion. Link the affected pages, repository locations, PRs, releases, and Decisions. Do not copy the Task's status into those pages.
