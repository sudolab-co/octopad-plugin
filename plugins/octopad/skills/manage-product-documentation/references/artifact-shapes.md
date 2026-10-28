# Compact artifact shapes

Use these as adaptable shapes, not forms that must be filled. Omit irrelevant sections. Preserve the product's existing vocabulary and page conventions.

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

Purpose: <user, problem, outcome; 1-3 lines>. Out of scope: <system (link)>, ...

## Principles
- <released rule code cannot show>: <why>.

## Behavior
- <released rule, one line; audience when limited>.
- Scenario: <regression case worth guarding>, when not obvious from the rules.
Limits
- <limit or known defect users meet> (<task link>).

## Next
**[accepted <date>] <change>.** <links: Decision, Task or stream>.
- <need → intended behavior; principles it adds; constraints; acceptance scenarios; open choices>.
**[idea <date>] <direction>.** <supporting record link, read before assessing or building>.
- <direction; open questions>.

## Verified
- <scope>: <source and revision>, <date>; <method and limits>.

Links: <Product Map> · <Architecture Map> · <related specs and contracts> · <code entry point>
```

Omit empty sections. What each section holds: SKILL.md, Write for the reader. A retired or rolled-back behavior leaves Behavior (page versions keep its text); a released claim that can no longer be verified keeps its line, marked `[unverified]` with its debt link. When part of a change is released, fold that part into Principles and Behavior with its still-applicable constraints and scenarios; keep unmet parts in Next with their state; remove the entry once nothing in it is unmet. Split only at a system boundary ([documentation-model.md](documentation-model.md)).

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
