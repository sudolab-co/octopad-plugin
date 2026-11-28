# Bringing records in from another system

- A handful of records: create or update them with the record tools; `batch_update` covers many at once.
- A larger import, or a system kept in step over time:
  - Where the organization has source sync, an organization owner or admin registers the source once with `crm_source_sync`, declaring the fields it owns. For each owned custom field the workspace lacks, declare its type in `custom_fields`: ask the user, and never guess a type.
    - Then send the full current state as a snapshot in parts; if a part is refused as too large, split it smaller.
    - Sync with `dry_run` first and show the user the plan. Pass `allow_large_drop` only after checking that the source really shrank.
  - Without source sync, use the record tools.
- A customer's own software pushing on its own schedule: where the organization has source sync, an organization owner or admin sets the connection up in the app, and its token is shown to them once.
- Where the organization has source sync:
  - Two active sources of one workspace never own the same field of the same record kind, and registration refuses the overlap.
  - Leave that field out, or ask an owner or admin to disable the source that owns it.
  - When a source's value differs from a value a person set, the difference waits as a `crm_actions` proposal for a person's decision: tell the user it is there.
