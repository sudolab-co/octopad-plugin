# Product scope and documentation seams

Read beyond [Resolve product scope](#resolve-product-scope) only when several products, a shared component or another documentation owner is involved.

## Resolve product scope

1. Use products explicitly selected in the conversation or assigned task; a workspace, repository or project need not be one product.
2. Without an explicit selection, read each Product Map's capability entries and the candidate Specs. Keep every product whose Spec describes the behavior being changed. Maps route to owners; their wording does not prove exclusive ownership.
3. Eliminate a candidate only when evidence puts it outside the requested scope; a missing keyword is not exclusion evidence. Do not rank plausible owners by name, result order, detail or apparent relevance, or choose the best match.
4. Count the remaining products:
   - zero: search further, then record the gap or ask;
   - one: proceed;
   - more than one: ask which products are intended, and leave their documents unchanged until answered; continue unaffected work.
5. When Maps are missing or stale, use an established portfolio index, further evidence or a question.

## Store shared truth once

- Give a component used by several products one canonical technical or product source.
- From each affected product, link to it, and record there only that product's own adoption, release, availability, limits and Product Facts.
- Do not copy the shared behavior into parallel specs.
- Deployment, activation, rollback, availability and claim scope advance separately for each consuming product: never let evidence for one product promote another.

When the component changes:

- update the shared source once;
- determine affected products from explicit dependencies;
- evaluate implementation, merge, deployment, activation, rollback, and release per product;
- update only products supported by evidence;
- preserve products outside that evidence unchanged.

## Pass changes between owners

| Truth or output | Owner | On change |
|---|---|---|
| Each Product Overview's Marketing section: ICP, positioning, pricing, campaigns, approved claims and messages | `manage-product-marketing` | Consume Product Facts; revise owned outputs when a dependency changes. |
| Durable activity context and the Activity Overview | `manage-activity-context` | Preserve directly owned context. |
| Market evidence: the market report, competitor pages, and what people experience, say, resist and compare | `manage-market-intelligence` | Revise the comparisons that rest on a changed capability; leave target, positioning, promise and price choices to `manage-product-marketing`. |
| Technical and user-documentation craft | `technical-writing` | Improve expression without changing facts, ownership, evidence state, or publication gates. |

- For a pure marketing request, draft nothing in this skill: open the `manage-product-marketing` skill when it is available; otherwise name that owner and hand the request over without inventing copy.
- When owned product truth changes, after updating this skill's records and the Overview's `offer_and_availability` ([Work with the other documentation skills](../SKILL.md#work-with-the-other-documentation-skills)):
  1. Identify every affected downstream output, and hand each one to its owner.
  2. When that owner's skill is available, the same request authorizes the downstream edit and its own gates are satisfied, open that skill and continue rather than leaving known stale text behind.
- On a correction or rollback, leave the Fact-to-output dependency visible, so affected messages can be reviewed without rewriting unrelated products or outputs.
- Each owner updates its own At a glance keys in the same turn as the change; the server composes the Organization Overview from them.
- A handoff does not grant access or mutation authority.
- When the downstream skill is unavailable or its gate is closed, leave a precise handoff naming the changed source and the affected output.

## Rollbacks and history

- When a rollback changes current truth for the affected product, revise or retire its current Product Facts, released behavior, user docs and release notes using the rollback evidence, while preserving the version history.
- Archive a whole page only when its owning question or product is obsolete; do not archive a still-current spec merely because one claim stopped being true.
