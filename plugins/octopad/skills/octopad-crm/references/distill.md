# Running the distill

The distill writes each contact's card: its summary and the answers to the workspace's questions. Run its settings for the user through these tools rather than sending them to the settings page. The directions, questions and nightly switch live in `crm_runs`.

- Directions and questions: read them with `crm_runs` `get_directions`. Before saving a change, offer to try it with `preview_distill` (1 to 3 contacts, one model call each). Save with `set_directions` on the user's instruction, the directions and every question in one save: the saves a day that change what the model reads are limited, and each queues re-folds. Restore an earlier version with `restore_directions`, at the cost of a save.
- While the nightly switch (`crm_runs` `get_schedule`) is off, nothing is folded on a schedule, so a requested re-fold waits.
- Which field changes re-fold a summary: `crm_fields` `set_refold`; false suits a field that changes every day. Switching it makes every contact holding a value due one re-fold, one model call each inside the nightly cap, so switch it only on the user's instruction.
- Why a contact is due, or not: `crm_runs` `explain_due` says it for each contact.
- Re-fold later or now: `crm_runs` `request_refold` queues a re-fold of the chosen contacts for the nightly job; `crm_runs` `launch` with kind `distill` folds now and bills now. Leave anything that can wait to the nightly job.
