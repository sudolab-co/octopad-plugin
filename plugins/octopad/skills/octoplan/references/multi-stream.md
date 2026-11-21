# Multi-stream coordination

## Choose the smallest useful topology

- Parallel tasks alone do not justify several streams. Keep one stream when one local success definition covers the work.
- When independently verifiable results contribute to one common outcome and benefit from separate ownership, gates or cadence, use several streams.
- Give each stream its own `definition_of_success`, with the detailed proof on its canonical tasks and contract.
- When an existing stream has none:
  - if its context says the organization's Update has not sorted it yet, state its local success condition in the contract instead, and leave the stream unchanged for this delivery;
  - otherwise propose its `definition_of_success` with the Brief, and write it on the user's confirmation.
- Unrelated outcomes remain independent Plans.

- When the streams share a destination, reuse a suitable goal; create no extra program object.
- A common native graph uses the same workspace and dependency capabilities the target actually supports.
- Across workspaces, use an identifiable delivered version and a receiving task that proves compatibility; never invent a cross-workspace edge, automatic wake-up or additional human gate.

## Explain the connection in the shared contract

- For one common outcome, reuse one contract and journal under [records.md](records.md#working-documents-one-home-for-each-record).
- The contract explains only what is missing elsewhere: common proof, stream responsibilities and local success conditions, interfaces, safe parallelism, integration order and responsible actors. Name its maintainer.
- Link canonical IDs and applicable revisions instead of copying task specifications, progress, receipts, history or authority.
- Do not add a per-stream contract merely to repeat this information; additional local records need a real distinct boundary.

- Put executable specifications and dependency edges on the owning tasks, and an interface's executable definition on its owning task or linked specification.
- A newer explanatory view never overrides current consent or a reviewed contract.

## Define interfaces and integration early

- For each seam, record on the owning task or specification: producer, consumer, exchanged artifact, identifiable revision and compatibility proof. Use a hash only when needed to identify the exact bytes.
- One actor owns the interface definition, normally its producer; the consumer owns its compatibility evidence.
- Integration verifies the assembled versions and does not become a second interface writer.

Resolve a dependency cycle through a stable contract milestone or regroup work that cannot be separated; never dispatch a cycle as independent work.

- Name an integration owner from the start. Use integration tasks, adding a separate stream only for substantial independently managed work.
- Test interfaces early, then prove the final combination of exact versions. Local `PASS` does not prove compatibility or common completion.
- Local permissions do not add up to publication, deployment, acceptance or another protected effect: integration needs existing authority covering its actual targets and effects, or only that missing delta is requested.

## Review the graph and assign owners

- In the Plan, show one plain-language line per step across the streams, and name independent branches.
- Review the complete graph, local success definitions, interfaces, integration proof and effect coverage.
- Check shared schemas, migrations, generated artifacts, wording, repositories, services and publication targets for conflicting writers.

- Default to one supervisor covering the common outcome.
- Use several only with disjoint write and decision boundaries, a concrete efficiency benefit, qualified native lifecycle support, and capacity left for workers and reviewers; reserve that capacity before launching more supervisors.
- A worker or reviewer is not another supervisor. Several streams can reference one common owner. No permanent global supervisor is required.

- The runtime profile determines dialogue and supervisor lifecycle. Each supervisor owns advancement inside its recorded boundary.
- In the shared contract, assign one existing actor as **cross-stream change coordinator**, with its current ownership in the journal. This responsibility adds no permanent agent and gives no right to write another owner's deliverable.

## Repair only affected work

A changed interface, a split, a merge, a new or removed stream, or a changed dependency is a material Plan change:
1. The designated coordinator identifies all affected producers, consumers and integration tasks, asks their owners to pause affected dispatch, and starts a bounded repair with a suitable planner through the selected runtime.
2. Each owner reconciles its own active actors and effects.
3. The coordinator records the targeted review in the journal and checks that the revised contract is shared before affected owners resume under the existing mandate.
4. Recheck changed consumers and final integration.

## Close local and common results separately

- A stream closes when its own success definition and gates are proved, even while independent streams continue; its supervisor may finish that boundary without claiming the common outcome complete. Completing a stream that still holds open tasks first needs the user's confirmation of a complete plan for them (What needs the user's confirmation first).
- The integration owner closes the common result only when current assembled evidence covers every required stream and seam, with no unresolved required effect.

- From existing receipts and native logs, assess accepted local and integrated results, avoidable human restarts, the delay from a dependency being ready to work resuming, irrelevant re-reviews, and total orchestration cost.
- State coverage and unknowns; add no manual metrics register or instrumentation merely to satisfy this guidance.
