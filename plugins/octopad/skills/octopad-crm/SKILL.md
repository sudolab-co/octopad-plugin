---
name: octopad-crm
description: "How a workspace's CRM is read, written and kept true: customer contacts, companies and deals, their cards, briefs, entries and signals, who owns a value, what a connected AI may do for its member, outreach drafts, background agent runs and the distill that writes contact cards, and how another system's records come in. Use in a workspace where the CRM is on, whenever a customer's record is looked up, written, searched or linked to work, when something that happened with a customer is recorded, when drafts, proposals or quarantined identities wait for a decision, when the distill's directions, questions or nightly re-fold are read or changed, and when records are imported or synced. Not for tracking competitors or market-wide customer voice."
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-crm"` when you open this skill.

Version: 1.1.0

# Before anything

- The CRM exists only in a workspace where it is switched on and the user is a member; `crm_status` says whether it is. Elsewhere the CRM tools refuse, and that refusal is the answer, not a fault to work around.
- Customer records live in the CRM, not in the workspace corpus: the workspace `search` does not index them. Find a record with `crm_search` or the record tools.
- Show people and companies by name. A UUID is for the next call, not for the user.
- **Two sets of tools.** Records, search, segments, pipeline stages, custom fields, company memberships and each record's working space (`crm_record`) are there in every CRM workspace. The tools for background agents (octobots) and what they feed are available only to some organizations: `crm_signals`, `crm_actions`, `crm_interventions`, `crm_source_sync`, `crm_outreach` and `crm_runs`. When one is missing, use the fallback this skill names, say once that the rest is not available to this organization, and never report the absence as an error.

# Reading a customer

- A contact has a card, its current summary: read it first, then the brief and recent entries. A company or a deal has no card: read its brief and latest hand-off. `build_context` in contact, company or opportunity mode returns these for one record or a batch.
- A campaign or a list is read in one batch call, never one record at a time.
- Say how fresh a contact's card is; a stale or missing card is reported as such, never passed off as current understanding.
- An empty result, a record you cannot reach and a partial batch failure are each stated plainly; none of them means the customer does not exist.

# Writing about a customer

Each kind of fact has one home; pick it on purpose.

- **Something that happened** (a reply, a meeting, an event in another system) is a signal, written in one batch with `crm_signals`. Without that tool, append an entry of type `activity` instead.
- **A note, a finding or a hand-off** is an entry, written with `crm_record` `append_entry`. Entries are never edited; a correction is a new entry. On a hand-off set `handoff_to` and name the person in the body.
- **What the team now understands about the customer, its strategy or the next action** is the brief, written with `crm_record` `upsert_brief`. Read it first and pass its revision so a colleague's edit is never overwritten; show a conflict to the user, never retry blindly. Change the brief only when that understanding really changed: routine events go to fields and signals.
- **A field on the record** is written with the record tools. An update replaces the whole `custom_fields` object and the whole tag list: resend every existing value with the change, or use `batch_update` with `custom_fields_mode: "merge"` where the tool offers it. A custom field must exist in the catalogue before a value lands in it. Removing a field from the catalogue erases its values by default: treat it as a deletion.
- A conclusion reached in this conversation that the team will need is written to the record before the conversation ends.

# Who owns a value

- A value a person entered or approved is theirs. Replace it only on your member's explicit instruction, and say whose value it replaces.
- When your evidence disagrees with such a value, say so and let a person decide; do not write over it.
- Your own confidence never authorizes a write. A placeholder, a guess or a vendor's filler value never becomes a record value.
- Fill an empty field or create a record when the user asks for it; do not enrich records on your own initiative.

# Acting for the user

- You act with your member's permissions and in their name. On their instruction you may approve or reject proposals and resolve quarantined identities with `crm_actions`. A rejection always carries its reason, so the same value is not proposed again. List what is pending before a bulk decision, and say what an approval does when it is not obvious: an approved scout batch adds every candidate in it.
- Archive a record only on explicit instruction. Permanent deletion needs the same confirmation a person would give in the app.
- Launch a background agent run with `crm_runs` only on the user's instruction. Runs can spend paid credits: rehearse with `dry_run`, and state the record cap before the real run.
- An outreach draft is approved, edited or rejected with a reason in `crm_outreach`. Sending stays a rehearsal until a workspace admin has made the workspace live; never change the sending configuration yourself, and before a send say whether it will really go out.
- A message sent through a separately authorized tool is recorded afterwards with `crm_interventions`, one phase at a time, for a contact, on the email, in-app or assistant channel, and never with the message body. A reply to a recorded intervention is its `responded` phase, which already writes the signal. A call or a message on another channel is a signal or an entry.
- When a create is refused because the organization reached its record allowance, tell the user where the allowance is raised. Never delete or archive records to make room.

# Running the distill

The distill writes each contact's card: its summary and the answers to the workspace's questions. Run its settings for the user through these tools rather than sending them to the settings page, and change one only on the user's instruction, after saying what it will cost. The directions, questions and nightly switch live in `crm_runs`, which only organizations with the octobot tools have.

- **Directions and questions.** Read them with `crm_runs` `get_directions`. Try a draft first with `preview_distill` on 1 to 3 contacts: nothing is saved, it costs one model call per contact, 10 previews a workspace a day, and it is refused while the nightly switch is off. Then save with `set_directions`: directions up to 4,000 characters, at most 10 questions, each key a lowercase slug of at most 40 characters, a choice with 2 to 10 options. Put the directions and every question in one save: only 10 saves or restores a UTC day may change what the model reads (a label-only save is free). Such a save requests a re-fold of every contact, which the nightly job bills at one model call each inside its cap. `list_directions_versions` shows the kept versions (the current one, the 20 newest that changed what the model reads, any a card was folded under and any current in the last hour; a pruned version cannot be restored); `restore_directions` brings one back as a new version, at the cost of a save.
- **The nightly switch.** `get_schedule` reads it. `set_schedule` takes `enabled` and an optional `nightly_cap` (1 to 200, 20 unless set), and only an organization owner or admin may change it. On, it summarises the contacts not yet summarised and re-folds the contacts due a re-fold, up to the cap a night at one model call each: a recurring spend to confirm with the user. Off, nothing is folded on a schedule, so a requested re-fold waits.
- **Which field changes re-fold a summary.** `crm_fields` `set_refold` on a contact or company field; false suits a field that changes every day. Switching it makes every contact holding a value due one re-fold, one model call each inside the nightly cap. A source adapter that declares `triggers_refold` for a field sets the flag again each time it registers.
- **Re-fold now.** `crm_runs` `launch` with kind `distill` folds chosen contacts or segments now and bills now: at most 50 a run (`max_records`, 10 unless set), and only the contacts due a fold unless `min_new_signals` is 0. Rehearse with `dry_run`. Anything that can wait, leave to the nightly job.
- **Filtering on answers.** `crm_search`, `crm_contacts` `list` and `crm_segments` filters take `{field: "answers.<key>", operator: "eq", value: <an answer> or "unknown"}`. Only an answer to the current question matches, and a contact whose AI summary is off never does. `"unknown"` means the distill looked and found no evidence: a contact not yet folded under the current question matches nothing, `"unknown"` included. Where the workspace's outreach privacy gate is on, a prospect run (`crm_runs` `launch` or `crm_outreach` `draft`) refuses a segment that filters on feature usage, same-domain colleague counts, goal titles, the analytics objection flag, the AI-summary switch or a distill answer, dry runs included. So to pick prospect contacts by one of those, put the filter in a segment and target the segment, where the gate can check it; never launch on the contacts such a filter returns through `crm_search`, `crm_contacts` `list` or `crm_segments` `run`.
- **No AI summary.** When a person asks not to be summarised, `crm_contacts` `update` with `ai_summary_off: true`: the distill stops and every reader withholds the card, which is kept, not deleted. The record's brief stays readable and embedded, so never restate the withheld summary there. It is a member's switch, refused over an agent key. A source adapter that owns `ai_summary_off_source` can switch a contact off too, and then only that adapter can switch it back on.
- **Spend.** `crm_runs` `get` gives one run's model calls, tokens and estimated cost; the first page of `list` gives them by month, previews apart. Both are estimates at list price, not charges.

# Linking customers to work

- An issue a customer raised becomes a task in the workspace that owns that work. Name the record in the task, and append an entry on the record that names the task, so each side leads to the other.
- Move the specific item across, never access: people on the task do not need the CRM, and customer data goes into the task only as far as the work needs it.
- A reply to the customer that comes out of that work stays for a person to approve before it goes out.

# Bringing records in from another system

- **A handful of records:** create or update them with the record tools; `batch_update` covers many at once. This route is always available.
- **A larger import or a system kept in step over time:** an organization owner or admin registers the source once with `crm_source_sync`, declaring the fields it owns. For each owned custom field the workspace lacks, declare its type in `custom_fields` (ask the user; never guess a type, it cannot change once created) and registration creates it; an owned custom field that neither exists nor is declared refuses the registration. Then send the full current state as a snapshot in parts; if a part is refused as too large, split it smaller. Sync with `dry_run` first and show the user the plan. A record left out of a snapshot counts as missing, and a missing record is reported, never archived or deleted. Pass `allow_large_drop` only after checking that the source really shrank.
- **A customer's own software pushing on its own schedule:** an organization owner or admin sets the connection up in the app, and its token is shown to them once. Never ask for a token in chat and never paste one anywhere.
- Each field has one owning source. When a source's value differs from a value a person set, the difference waits for a person's decision; tell the user where to decide it.
