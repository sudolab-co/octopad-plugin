---
name: octopad-crm
description: "Use where the CRM is on, or the user wants it on, when a customer's contact, company or deal comes up, when what a customer did or said is to be recorded, when an octobot is launched or followed, when drafts, proposals or quarantined identities wait for a decision, when an approved draft is sent or its reply comes in, when the distill is read or changed, and when records are imported or synced. Reads and writes customer records and runs octobots, outreach, the distill and imports. Not for competitors or market-wide customer voice (manage-market-intelligence)."
---
Version: 2.3.0

# Before anything

- The CRM exists only in a workspace where it is switched on and the user is a member:
  - to find a CRM workspace, look for the `_(CRM)_` mark that `list_workspaces` puts after its name;
  - to know whether the CRM is on in a workspace, and which octobot features the organization has, call `crm_status`: its answer settles it, even where the mark is missing.
- When a CRM tool refuses, or is not offered, outside such a workspace, treat that as the answer, not as a fault to work around.
- When the user wants the CRM on, send them to the workspace's Settings, under Modules (on the desktop: Settings, General, Modules), where an owner or admin of the organization turns it on: no tool does it. Once on, it cannot be turned off.
- After it is turned on, each person reconnects their AI to see the CRM tools.
- Never report the CRM as on until `crm_status` says so.
- When you set up the CRM, switch Deals off with `crm_pipeline_stages` `set_deals_enabled` for a team that follows no sales discussions through stages to won or lost, such as a product tracking its own users or a network of contacts with no sales to follow, so it is not shown an empty Deals tab.
- The CRM tools come in three sets:
  - record tools, in every CRM workspace: `crm_contacts`, `crm_companies`, `crm_deals`, `crm_search`, `crm_segments`, `crm_pipeline_stages`, `crm_fields`, `crm_contact_companies`, `crm_record` and `crm_status`;
  - octobot tools, once Octopad opens them to the organization: `crm_runs`, `crm_outreach`, `crm_actions` and `crm_signals`;
  - more octobot features, for some organizations only: `crm_status` lists the ones this organization has.
- When a tool or action is missing or refused, use the fallback this skill names, say once that the rest is not available to this organization, and never report the absence as an error.

# Reading a customer

- When you read a contact, read its card (its current AI summary) first, then its brief and recent entries.
- When you read a company or a deal, read its brief and latest hand-off: they have no card.
- Read them with `build_context` in contact, company or opportunity mode, which cuts the longer parts short; read the whole brief with `crm_record` `get_brief` and the recent entries with `list_entries`.
- When you read a campaign or a list, read it in one batch call (`build_context` with `ids`, up to 200 records), never one record at a time.
- When you report what a contact's card says, say how fresh it is: its `**Card:**` line gives the date it was distilled, and an `**Out of date:**` line says why it may no longer hold.
- Report a stale or missing card as such; never pass it off as current understanding.
- When a read returns nothing, reaches a record you cannot open, or fails for part of a batch, say so plainly; none of them means the customer does not exist.

# Writing about a customer

Put each kind of fact in its one home:

- When something happened, such as a reply, a meeting or an event in another system, write it as a signal with `crm_signals`. Without `crm_signals`, append an entry of type `activity` with `crm_record` `append_entry`.
- Write a note, a finding or a hand-off as an entry with `crm_record` `append_entry`.
- To correct an entry, append a new one.
- On a hand-off, set `handoff_to` and name the person in the body.
- Write what the team now understands about the customer, its strategy or the next action in the brief, with `crm_record` `upsert_brief`.
- Change the brief only when that understanding really changed; put routine events in fields and signals.
- Write a field on the record with `crm_contacts`, `crm_companies` or `crm_deals`: `update` for one record, `batch_update` for many in one call.
- When a customer's own words come up that someone outside this conversation will need, keep them on their record in the same turn, without asking: append an entry of type `note` that quotes the words that matter, with who said them, where and when (unknown if you do not know). When they change what the team understands, update the brief too.
- When their words establish something beyond that customer, record that too, citing the customer and the date: open the `octopad-knowledge-evidence` skill, section "Where knowledge is written".

# Who owns a value

- Treat a value a person entered or approved as theirs: replace it only on your member's explicit instruction, and say whose value it replaces.
- When your evidence disagrees with such a value, say so and let a person decide.
- Never treat your own confidence as authority to write.
- Never write a placeholder, a guess or a vendor's filler value as a record value.
- When a customer you hear about has no record, search for it with `crm_search` first; when it finds none, create the record without asking (`crm_contacts` or `crm_companies` `create`), file what the customer said or did on it, and say so in your recap at the end of the exchange.
- Fill a record from outside sources only when the user asks.

# Acting for the user

- You act with your member's permissions and in their name.
- When an octobot's proposal, outreach draft or quarantined identity waits for a decision, decide it only on the instruction of the member you act for; one instruction can cover a whole queue.
- Approve or reject proposals with `crm_actions` `decide`. Where the organization has it, resolve quarantined identities with `crm_actions` `resolve_identity`.
- Before a bulk decision, list what is pending, and say what an approval does when it is not obvious:
  - an approved outreach batch approves its drafts, and Octopad sends none of them: send each as [Sending an approved draft](references/outreach.md#sending-an-approved-draft) says;
  - where the organization has Scout, an approved scout batch adds every candidate in it, unless you pass `candidate_ids`.
- A member's approval of a draft covers its send: send that exact draft once, without asking again; when the user approves it in this conversation, send it then. Leave unsent a draft the approval did not cover.
- When a task's work produces a reply to a customer, treat it as a draft: send it only after a member approves it, as above.
- An agent key is not a person. A connection that uses an agent key:
  - may list drafts, read an approved one in full, send it with its own mail tool when its instruction asks it to, and record the send and the reply;
  - may not approve or reject a draft, decide a proposal, resolve a quarantined identity or switch a contact's AI summary, and never uses Octopad's own sending: those wait for the member, from their own connected AI or in the CRM screens.
- Archive a record only on explicit instruction.
- When a create or a sync is refused because the organization reached its record allowance, tell the user how to raise it, as the refusal says. Never delete or archive records to make room.

# Octobots, outreach, the distill and imports

- Before a paid octobot launch (`crm_runs` `launch` other than a dry run, or `crm_outreach` `draft`):
  - once Octopad has said in this conversation that it could not get the user's answer, or when the tool's description does not say the call asks the user to approve it: first tell the user what the run does, on how many records at most and what it may spend, and launch only after their confirmation;
  - otherwise, make the call: the tool asks the user, and their answer there is their confirmation;
  - where the organization has Enrich, the user picks the values to buy (`fields`) for an Enrich run: ask when their request does not say.
- Make a change that adds model spend only on the user's instruction in chat, and tell them its cost: before, when you propose it; with the result, which states it, when they asked for it. These changes are:
  - turning the nightly distill on or raising its cap (`crm_runs` `set_schedule`);
  - saving or restoring directions (`crm_runs` `set_directions`, `restore_directions`);
  - a re-fold request (`crm_runs` `request_refold`) or switching a field's re-fold flag (`crm_fields` `set_refold`);
  - a distill preview (`crm_runs` `preview_distill`).

Each procedure lives in a reference: read the one you need before your first call for it.

- Before you rehearse, launch, follow or explain an octobot run, read [Running octobots](references/octobot-runs.md#running-octobots).
- Before you approve, reject, list or send a draft, record a send or a reply, or record a message sent outside a draft, read [Sending an approved draft](references/outreach.md#sending-an-approved-draft).
- Before you read or change the distill's directions, questions, nightly switch or re-folds, read [Running the distill](references/distill.md#running-the-distill).
- Before you import records or keep another system in step, read [Bringing records in](references/imports.md#bringing-records-in-from-another-system). A handful of records needs only the record tools.
- Never ask for a sync token in chat, and never paste one anywhere.
- When a person asks not to be summarized, call `crm_contacts` `update` with `ai_summary_off: true`. The record's brief stays readable and embedded, so never restate the withheld summary there.
- When you pick prospect contacts where the workspace's outreach privacy gate is on, by a fact the gate withholds from outreach (the `crm_runs` and `crm_outreach` descriptions name them), the AI-summary switch or a distill answer:
  - put that filter in a segment and target the segment, where the gate can check it;
  - never launch on the contacts the same filter returns through `crm_search`, `crm_contacts` `list` or `crm_segments` `run`.

# Linking customers to work

- When a customer raises an issue, create a task for it in the workspace that owns that work.
- Name the record in the task, and append an entry on the record that names the task, so each side leads to the other.
- Move the specific item into the task, never access to the CRM: people on the task do not need the CRM.
- Put customer data into the task only as far as the work needs it.
- Send a reply to the customer that comes out of that work as "Acting for the user" says.
