# Octoplan recovery

## Reconcile effects before retrying

- Before an external non-idempotent effect that could duplicate or be hard to undo, add `OCTOPLAN_ACTION <stable-key>` to the owning task, with the exact target, the delivery-authorization source, the intended effect and the state before the effect. Use that key for one intent and at most one retry.
- Use native idempotency, and `expected_updated_at` on guarded Octopad updates.

After a timeout or an incomplete response, assume neither success nor failure, and inspect the authoritative target:
- When the effect is present, record its receipt.
- Retry only when authoritative evidence proves it absent, using the same key.
- When its presence stays unknown, leave the action unresolved and block only the descendants that need it.

Never replay a whole batch to repair one uncertain item. For an evidence gap, refresh the authoritative source; never infer success.

## Stop for shared-infrastructure distress

- On shared-infrastructure timeouts, saturation, quota exhaustion or state contamination, stop the affected calls before ordinary retries.
- Record the system, event count, duration and data magnitude, and name them in the handoff; resume those calls only from a reviewed clean state.
- Continue safe diagnosis and independent work.
- No native continuation feature overrides this containment.

A usage quota or rate limit on one AI model or runtime account is not distress. For the affected work:
- run it on its saved route in another runtime where one is available;
- or on that runtime's paid continuation, only where recorded authority covers the spend (F13);
- otherwise hold only that work until the limit resets or the user authorizes the spend (F7).

## Reconcile actors before replacement

- Treat an actor, a message or an effect as created only after its call returns or an authoritative result, such as the native target, shows it.
- Before any retry or replacement, inspect that target.
- Before it acts, a successor proves that its predecessor stopped; if that cannot be proved, pause only the affected branch.
- A release record, retirement comment or guarded page update is not cessation proof, and a supervisor cannot prove its own future cessation.

## Diagnose before repeating

- **Execution defect:** the executor fixes it in its own turn; once it has stopped, send bounded fixes to a fresh executor with the current diff and the findings.

- Two comparable cycles without an accepted artifact, review or integrated proof, or two fix cycles on one unit or task that do not pass, stop that strategy, review rounds included; count them per unit or task, not per worker.
- Then diagnose whether the implementation, specification, verifier or environment failed, and dispatch one materially different attempt or record the precise blocker.
- Two consecutive task closes that advance no countable outcome unit trigger a replan.
- These internal triggers need no new confirmation from the user and allow no endless trials; real attempt, spend and user limits stay binding across replans and across actor or reviewer identities.
- Preserve the strongest evidence.

## Change supervisor safely

1. The current supervisor reaches a safe task boundary and persists in-flight facts, actors, effects and evidence on their owning tasks.
2. It stops or reconciles child workers before replacement, and abandons no uncertain effect.
3. It uses the runtime's replacement mechanism or the manual fallback in [continuation.md](continuation.md), with a bounded pointer to durable state.
4. After the cessation proof above, the successor rereads ownership and updates it with the current `expected_updated_at`.

Native continuity ownership follows the selected runtime; a task comment does not transfer it.

## Replan without stale state

- When the user's mandate changes, reconcile every affected open specification and every artifact or actor left active, supervisor ownership, workers, pending actions, pull requests, migrations and effects included. A superseded comment alone is not reconciliation.
- Never resume a withdrawn mandate.

## Resume unknown saved state

When a contract is unknown, unsupported or invalid:
- First reconcile any live actors and effects.
- Preserve verifiable facts and the authority that still applies, but never upgrade a stale `PASS` or infer missing consent.
- Rebuild and review only the unproved scope; ask for an actually changed Brief or a missing consequence decision.

## Hand off durably

- Before dispatch, the successor re-proves the decision served, the premise, the kill question, standing authority, pending effects, one supervisor per boundary, active actors and person-waits. Without an authority delta, it needs no new confirmation from the user.
- Never leave chat as the only copy of authority, progress or an ambiguous effect.
