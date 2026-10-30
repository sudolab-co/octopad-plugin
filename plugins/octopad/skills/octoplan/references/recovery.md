# Octoplan recovery

## Reconcile effects before retrying

Before an external non-idempotent effect that could duplicate or be hard to undo, add `OCTOPLAN_ACTION <stable-key>` to the owning task with the exact target, delivery-authorization source, intended effect, and pre-effect state. Use that key for one intent and at most one retry. Use native idempotency and `expected_updated_at` on guarded Octopad updates.

After a timeout or incomplete response, assume neither success nor failure. Inspect the authoritative target. If the effect is present, record its receipt. Retry only when authoritative evidence proves it absent, using the same key. If presence remains unknown, leave the action unresolved and block only descendants that need it. Never replay a whole batch to repair one uncertain item. For an evidence gap, refresh the authoritative source; never infer success.

## Stop for shared-infrastructure distress

Shared-infrastructure timeouts, saturation, quota exhaustion, or state contamination stop affected calls before ordinary retries. Record the system, event count, duration, and data magnitude, and name them in the handoff; resume those calls only from a reviewed clean state. Continue safe diagnosis and independent work. No native continuation feature overrides this containment.

A usage quota or rate limit on one AI model or runtime account is not distress: run the affected work on its saved route in the other runtime where available, or on that runtime's paid continuation only where recorded authority covers the spend (F13); otherwise hold only that work until the limit resets or the user authorizes the spend (F7).

## Reconcile actors before replacement

Treat an actor, a message or an effect as created only after its call returns or an authoritative result, such as the native target, confirms it. Before any retry or replacement, inspect that target. A successor must confirm that its predecessor stopped before acting; if that cannot be proved, pause only the affected branch. A release record, retirement comment or guarded page update is not cessation proof, and a supervisor cannot prove its own future cessation.

## Diagnose before repeating

- **Execution defect:** the executor fixes it in its own turn; once it has stopped, send bounded fixes to a fresh executor with the current diff and the findings.

Two comparable cycles without accepted artifact, review, or integrated proof, or two fix cycles on one unit or task that do not pass, stop that strategy, review rounds included: diagnose whether the implementation, specification, verifier or environment failed, then dispatch one materially different attempt or record the precise blocker, counted per unit or task, not per worker; two consecutive task closes that advance no countable outcome unit trigger a replan. These internal triggers require no new user go and allow no endless trials; real attempt, spend and user limits stay binding across replans and actor or reviewer identities. Preserve the strongest evidence.

## Change supervisor safely

The current supervisor reaches a safe task boundary and persists in-flight facts, actors, effects, and evidence on their owning tasks. Stop or reconcile child workers before replacement; do not abandon uncertain effects. Use the runtime's replacement mechanism or the manual fallback in [continuation.md](continuation.md), with a bounded pointer to durable state. After the cessation proof above, the successor rereads and updates ownership with the current `expected_updated_at`. Native continuity ownership follows the selected runtime and is not transferred by a task comment.

## Replan without stale state

For a user-mandate change, reconcile every affected open specification and artifact or actor left active, including supervisor ownership, workers, pending actions, PRs, migrations, and effects. A superseded comment alone is not reconciliation. Never resume a withdrawn mandate.

## Resume unknown saved state

For an unknown, unsupported, or invalid contract, reconcile any live actors and effects first. Preserve verifiable facts and authority that still applies, but never upgrade stale PASS or infer missing consent. Rebuild and review only the unproved scope; ask for an actually changed Brief or missing consequence decision.

## Hand off durably

Before dispatch, the successor re-proves the decision served, premise, kill question, standing authority, pending effects, one supervisor per boundary, active actors, and person-waits; no new go is needed without an authority delta. Chat is never the only copy of authority, progress, or an ambiguous effect.
