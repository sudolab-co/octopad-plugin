---
name: octopad-crm
description: "Use where the CRM is on, or the user wants it on, when a customer's contact, company or deal comes up, when what a customer did or said is to be recorded, when an octobot is launched or followed, when drafts, proposals or quarantined identities wait for a decision, when an approved draft is sent or its reply comes in, when the distill is read or changed, and when records are imported or synced. Not for competitors or market-wide customer voice (manage-market-intelligence)."
---
Version: 2.1.0

# Before anything

- The CRM exists only in a workspace where it is switched on and the user is a member:
  - to find a CRM workspace, look for the `_(CRM)_` mark that `list_workspaces` puts after its name;
  - to know whether the CRM is on in a workspace, and which octobot features the organization has, call `crm_status`; its answer settles it, even where the mark is missing.
- When a CRM tool refuses, or is not offered, outside such a workspace, treat that as the answer, not as a fault to work around.
- When the user wants the CRM on, send them to the workspace's Settings, under Modules (on the desktop: Settings, then General, then Modules), where an owner or admin of the organization turns it on: no tool does it. Once on, it cannot be turned off.
- After it is turned on, each person reconnects their AI to see the CRM tools.
- Never report the CRM as on until `crm_status` says so.
- When you set up the CRM, decide whether the team uses Deals:
  - Deals is for a team that follows sales discussions through stages until they are won or lost;
  - for a team that does not, such as a product tracking its own users or a network of contacts with no sales to follow, switch Deals off with `crm_pipeline_stages` `set_deals_enabled`, so it is not shown an empty Deals tab.
- The CRM tools come in three sets:
  - record tools, in every CRM workspace: `crm_contacts`, `crm_companies` and `crm_deals` (records), `crm_search`, `crm_segments`, `crm_pipeline_stages`, `crm_fields` (custom fields), `crm_contact_companies` (company memberships), `crm_record` (each record's working space) and `crm_status`;
  - octobot tools, once Octopad opens them to the organization: `crm_runs` (Distill and Prospect runs), `crm_outreach`, `crm_actions` and `crm_signals`;
  - more octobot features, for some organizations only: `crm_status` lists the ones this organization has.
- When a tool or action is missing or refused, use the fallback this skill names, say once that the rest is not available to this organization, and never report the absence as an error.

# Reading a customer

- When you read a contact, read its card (its current AI summary) first, then its brief and recent entries.
- When you read a company or a deal, read its brief and latest hand-off: they have no card.
- Read them with:
  - `build_context` in contact, company or opportunity mode, for one record (`id`) or a batch (`ids`, up to 200): it returns a contact's card and, for every record, the latest hand-off, the open next actions and the brief, the longer parts cut short;
  - `crm_record` `get_brief` for the whole brief, and `list_entries` for the recent entries.
- When you read a campaign or a list, read it in one batch call (`build_context` with `ids`, up to 200 records), never one record at a time.
- When you report what a contact's card says, say how fresh it is: its `**Card:**` line gives the date it was distilled, and an `**Out of date:**` line says why it may no longer hold.
- Report a stale or missing card as such; never pass it off as current understanding.
- When a read returns nothing, reaches a record you cannot open, or fails for part of a batch, say so plainly; none of them means the customer does not exist.

# Writing about a customer

Put each kind of fact in its one home, chosen on purpose:

- When something happened, such as a reply, a meeting or an event in another system, write it as a signal with `crm_signals`, all of them in one batch call. Without `crm_signals`, append an entry of type `activity` with `crm_record` `append_entry` instead.
- Write a note, a finding or a hand-off as an entry with `crm_record` `append_entry`.
- To correct an entry, append a new one: entries are never edited.
- On a hand-off, set `handoff_to` and name the person in the body.
- Write what the team now understands about the customer, its strategy or the next action in the brief, with `crm_record` `upsert_brief`.
- Change the brief only when that understanding really changed; put routine events in fields and signals.
- Write a field on the record with `crm_contacts`, `crm_companies` or `crm_deals`: `update` for one record, `batch_update` for many in one call.
- When a customer's own words come up that someone outside this conversation will need, keep them on their record in the same turn, without asking: append an entry of type `note` that quotes the words that matter, with who said them, where and when (unknown if you do not know). When they change what the team understands, update the brief too.
- When their words establish something beyond that customer, record that too, citing the customer and the date: open the `octopad-knowledge-evidence` skill, section "Where knowledge is written".

# Who owns a value

- Treat a value a person entered or approved as theirs: replace it only on your member's explicit instruction, and say whose value it replaces.
- When your evidence disagrees with such a value, say so and let a person decide; do not write over it.
- Never treat your own confidence as authority to write.
- Never write a placeholder, a guess or a vendor's filler value as a record value.
- When a customer you hear about has no record, search for it with `crm_search` first; when it finds none, create the record without asking (`crm_contacts` or `crm_companies` `create`), file what the customer said or did on it, and say so in your recap at the end of the exchange.
- Fill a record from outside sources only when the user asks.

# Acting for the user

- You act with your member's permissions and in their name.
- Approve or reject proposals with `crm_actions` `decide`. Where the organization has it, resolve quarantined identities with `crm_actions` `resolve_identity`.
- Give every rejection its `reason`, so the same value is not proposed again.
- Before a bulk decision, list what is pending. Say what an approval does when it is not obvious:
  - an approved outreach batch approves its drafts; Octopad sends none of them, so send each as [Sending an approved draft](references/outreach.md) says. Pass the drafts you reviewed as `draft_ids`;
  - where the organization has Scout, an approved scout batch adds every candidate in it, unless you pass `candidate_ids` (read them with `candidates`): then only those are added and the rest are rejected.
- An agent key is not a person. A connection that uses an agent key:
  - may list drafts, read an approved one in full, send it with its own mail tool when its instruction asks it to, and record the send and the reply;
  - may not approve or reject a draft, decide a proposal, resolve a quarantined identity or switch a contact's AI summary, and never uses Octopad's own sending: those wait for the member, from their own connected AI or in the CRM screens.
- Archive a record only on explicit instruction. Removing a custom field (`crm_fields` `remove`) needs the same confirmation a person would give in the app, since its values go with it by default.
- When a create or a sync is refused because the organization reached its record allowance, tell the user how to raise it, as the refusal says: add CRM billing in Settings → Modules or, on the largest published plan, contact Octopad to size a plan. Never delete or archive records to make room.

# Octobots, outreach, the distill and imports

Each procedure lives in a reference: read the one you need before your first call for it, not after.

- Before you rehearse, launch, follow or explain an octobot run, read [Running octobots](references/octobot-runs.md).
- Before you approve, reject, list or send a draft, record a send or a reply, or record a message sent outside a draft, read [Sending an approved draft](references/outreach.md).
- Before you read or change the distill's directions, questions, nightly switch or re-folds, or filter on its answers, read [Running the distill](references/distill.md).
- Before you import records or keep another system in step, read [Bringing records in](references/imports.md). A handful of records needs only the record tools.
- Never ask for a sync token in chat, and never paste one anywhere.
- No AI summary. When a person asks not to be summarized, call `crm_contacts` `update` with `ai_summary_off: true`: the distill stops and every reader withholds the card, which is kept, not deleted. The record's brief stays readable and embedded, so never restate the withheld summary there. It is a member's switch, refused over an agent key. Where the organization has source sync, an adapter that owns `ai_summary_off_source` can switch a contact off too, and then only that adapter can switch it back on.
- Picking prospect contacts. Where the workspace's outreach privacy gate is on, a prospect run (`crm_runs` `launch` or `crm_outreach` `draft`), dry runs included, refuses a segment that filters on a fact the gate withholds from outreach (the `crm_runs` and `crm_outreach` descriptions name them), on the AI-summary switch or on a distill answer.
  - To pick prospect contacts by such a filter, put it in a segment and target the segment, where the gate can check it.
  - Never launch on the contacts the same filter returns through `crm_search`, `crm_contacts` `list` or `crm_segments` `run`.

# Linking customers to work

- When a customer raises an issue, create a task for it in the workspace that owns that work.
- Name the record in the task, and append an entry on the record that names the task, so each side leads to the other.
- Move the specific item into the task, never access to the CRM: people on the task do not need the CRM.
- Put customer data into the task only as far as the work needs it.
- A reply to the customer that comes out of that work is a draft: send it only after a member approves it.
