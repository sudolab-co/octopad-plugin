# Compact artifact shapes

- Use these as adaptable shapes, not forms that must be filled.
- Omit irrelevant sections; a Product Spec still always has Need and Outcome.
- Preserve the product's existing vocabulary and page conventions, except a Product Spec's section headings, which readers parse.

## Contents

- Product Map
- Product Spec
- Ideas
- Behavioral Contract
- Architecture Map
- Documentation-debt Task

## Product Map

```markdown
# Product Map

Index of every system and its spec.
Overview: <link> · Architecture: <link> · Ideas: <link>

## <Area>
- [<System>](<spec link>): <one-liner, telex>
- <System>: <one-liner>; no spec (<task link>)
```

- Write one line per named feature, reusing the spec link when several share a spec.
- When a feature's audience is limited, say so in its one-liner (for example "early access").
- For a feature with no spec, link its documentation-debt Task when one exists.
- In the header, link each Product Overview, and list the Engineering References of the maintained set on one line.
- Write no state, gaps, active work or verification.

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

## Known limits
- <What is established and what it imposes> (<source>, <date>; <Engineering Reference link when detail is needed>).

## Open questions
- [open] <undecided point>.
- [idea <date>] <direction>; read <supporting record> before assessing or building it.

## Links
<Product Map> · <Architecture Map> · <Decisions> · <related specs and contracts> · <design document> · <code entry point>
```

- Always write Need and Outcome; omit other empty sections. What each section holds: SKILL.md, Write for the reader.
- A dropped promise or choice leaves with the Decision that drops it; page versions keep its text.
- Split specs only at a system boundary ([documentation-model.md](documentation-model.md#product-spec)).

## Ideas

```markdown
# Ideas

Ideas with no system yet. One line each.

- [idea <date>] <idea>, <the problem it addresses>.
```

## Behavioral Contract

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

What each section keeps, and the home of everything else: [documentation-model.md](documentation-model.md#architecture-map).

## Documentation-debt Task

- Keep one bounded Task for related gaps.
- For a subtask, use `parent_task_id`; for every dependency edge, include its rationale.
- State why the missing or stale knowledge matters, what evidence or repair is needed, and what proves completion.
- Link the affected pages, repository locations, PRs, releases and Decisions.
- Do not copy the Task's status into those pages.
