---
name: octopad-crm
description: "Use where the CRM is on, or the user wants it on, when a customer's contact, company or deal comes up, when what a customer did or said needs recording, when an octobot is launched or followed, when its drafts, proposals or quarantined identities wait on a decision, when an approved draft is sent or its reply recorded, when the distill is read or changed, and when records are imported or synced. Not for competitors or market-wide customer voice (manage-market-intelligence)."
---
Version: 2.0.0

# Before anything

- The CRM exists only in a workspace where it is switched on and the user is a member; `crm_status` says whether it is, and which octobot features the organization has, and `list_workspaces` marks each workspace that has it. Elsewhere the CRM tools refuse, or are not offered at all, and that is the answer, not a fault to work around.
- Turning the CRM on: no tool does it. An owner or admin of the organization turns it on in the workspace's Settings, under Modules (on the desktop, Settings, then General, then Modules); there is no off switch yet. Each person then reconnects their AI to see the CRM tools. Send the user there; never report the CRM as on until `crm_status` says so.
- When you set up the CRM for a team that follows no sales, switch Deals off with `crm_pipeline_stages` `set_deals_enabled`, so it is not shown an empty Deals tab.
- Three sets of tools. The record tools are there in every CRM workspace: records, search, segments, pipeline stages, custom fields, company memberships and each record's working space (`crm_record`). The octobot tools come to an organization once Octopad opens them to it: `crm_runs` (Distill and Prospect runs), `crm_outreach`, `crm_actions` and `crm_signals`. Some organizations have more octobot features; `crm_status` lists the ones this organization has. When a tool or action is missing or refused, use the fallback this skill names, say once that the rest is not available to this organization, and never report the absence as an error.

# Reading a customer

- A contact has a card, its current summary: read it first, then the brief and recent entries. A company or a deal has no card: read its brief and latest hand-off. `build_context` in contact, company or opportunity mode returns these for one record or a batch.
- A campaign or a list is read in one batch call, never one record at a time.
- Say how fresh a contact's card is; a stale or missing card is reported as such, never passed off as current understanding.
- An empty result, a record you cannot reach and a partial batch failure are each stated plainly; none of them means the customer does not exist.

# Writing about a customer

Each kind of fact has one home; pick it on purpose.

- Something that happened, such as a reply, a meeting or an event in another system, is a signal, written in one batch with `crm_signals`. Without that tool, append an entry of type `activity` instead.
- A note, a finding or a hand-off is an entry, written with `crm_record` `append_entry`. Entries are never edited; a correction is a new entry. On a hand-off set `handoff_to` and name the person in the body.
- What the team now understands about the customer, its strategy or the next action is the brief, written with `crm_record` `upsert_brief`. Change the brief only when that understanding really changed: routine events go to fields and signals.
- A field on the record is written with the record tools.

# Who owns a value

- A value a person entered or approved is theirs. Replace it only on your member's explicit instruction, and say whose value it replaces.
- When your evidence disagrees with such a value, say so and let a person decide; do not write over it.
- Your own confidence never authorizes a write. A placeholder, a guess or a vendor's filler value never becomes a record value.
- When a customer you hear about has no record, create one once `crm_search` finds none, and say so in your recap.
- Never fill a record from outside sources unless the user asks.

# Acting for the user

- You act with your member's permissions and in their name. Approve or reject proposals with `crm_actions` `decide`, and resolve quarantined identities with `resolve_identity` where the organization has it. A rejection always carries its `reason`, so the same value is not proposed again. List what is pending before a bulk decision, and say what an approval does when it is not obvious:
  - an approved outreach batch approves its drafts, and Octopad sends none of them; pass the drafts you reviewed as `draft_ids`;
  - where the organization has Scout, an approved scout batch adds every candidate in it, unless you pass `candidate_ids` (read them with `candidates`): then only those are added and the rest are rejected.
- An agent key is not a person. A connection that uses an agent key may list drafts, read an approved one in full, send it with its own mail tool and record the send and the reply. It may not approve or reject a draft, decide a proposal, resolve a quarantined identity or switch a contact's AI summary, and it never uses Octopad's own sending. Those wait for the member, from their own connected AI or in the CRM screens.
- Archive a record only on explicit instruction. Permanent deletion needs the same confirmation a person would give in the app, and so does removing a custom field, since its values go with it by default.
- When a create is refused because the organization reached its record allowance, tell the user where the allowance is raised. Never delete or archive records to make room.

# Octobots, outreach, the distill and imports

Each procedure lives in a reference: read the one you need before your first call for it, not after.

- Before you rehearse, launch, follow or explain an octobot run, read [Running octobots](references/octobot-runs.md).
- Before you approve, reject, list or send a draft, record a send or a reply, or record a message sent outside a draft, read [Sending an approved draft](references/outreach.md).
- Before you read or change the distill's directions, questions, nightly switch or re-folds, or filter on its answers, read [Running the distill](references/distill.md).
- Before you import records or keep another system in step, read [Bringing records in](references/imports.md). A handful of records needs only the record tools. Never ask for a sync token in chat, and never paste one anywhere.
- No AI summary: when a person asks not to be summarised, `crm_contacts` `update` with `ai_summary_off: true`: the distill stops and every reader withholds the card, which is kept, not deleted. The record's brief stays readable and embedded, so never restate the withheld summary there. It is a member's switch, refused over an agent key. Where the organization has source sync, an adapter that owns `ai_summary_off_source` can switch a contact off too, and then only that adapter can switch it back on.
- Picking prospect contacts: where the workspace's outreach privacy gate is on, a prospect run (`crm_runs` `launch` or `crm_outreach` `draft`), dry runs included, refuses a segment that filters on a fact the gate withholds from outreach (the `crm_runs` and `crm_outreach` descriptions name them), on the AI-summary switch or on a distill answer. To pick prospect contacts by such a filter, put it in a segment and target the segment, where the gate can check it; never launch on the contacts the same filter returns through `crm_search`, `crm_contacts` `list` or `crm_segments` `run`.

# Linking customers to work

- An issue a customer raised becomes a task in the workspace that owns that work. Name the record in the task, and append an entry on the record that names the task, so each side leads to the other.
- Move the specific item across, never access: people on the task do not need the CRM, and customer data goes into the task only as far as the work needs it.
- A reply to the customer that comes out of that work stays for a person to approve before it goes out.
