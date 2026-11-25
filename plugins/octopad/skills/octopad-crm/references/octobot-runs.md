# Running octobots

- A run starts with `crm_runs` `launch`, or with `crm_outreach` `draft`, which creates the same prospect run. Rehearse a real run first with `dry_run`, which calls no model, writes nothing and counts nothing.
- For an Enrich run on contacts that targets a segment, the spend `crm_runs` states counts `max_records` contacts. Run a `dry_run` first: its summary, read with `get`, says how many contacts it would really enrich, often fewer. Email alone is often enough to buy.
- Cost:
  - Distill and Prospect make one model call per contact folded or drafted, which Octopad pays for.
  - Where the organization has Scout and Enrich, on Octopad's FullEnrich access they spend Octopad credits: Scout per candidate it proposes, Enrich per value it finds (an email, a phone or a company's details), never for a value not found. A real launch there sets aside the most the run may spend before it starts. On the organization's own FullEnrich key they spend no Octopad credits.
  - The costs `crm_runs` `get` and `list` show are estimates at list price, not charges.
- Daily budget: each organization has a daily budget for Distill and Prospect model calls, counted in contacts per UTC day, 200 unless Octopad set another.
  - A distill or prospect launch reserves its `max_records` (fewer when it names fewer contacts and no segment), a preview reserves 3, and the nightly distill takes from the same budget. Nothing is refunded when a run does less than it reserved.
  - Past the budget, a launch or preview is refused and nothing is created or spent; the refusal says what to do.
- Before you report a run that did nothing, read its summary with `crm_runs` `get`:
  - `pending` means it waits for Octopad's runner: check again later.
  - A dry run writes nothing by design.
  - A distill run folds only the contacts that are due. "No contact target due a fold" means each was up to date, had nothing to summarize yet, had its AI summary off or was no longer a live contact. `crm_runs` `explain_due` says which, contact by contact.
  - A prospect run that drafted nothing says why in its summary; a failed run says why in its last error.
