---
name: octopad-knowledge-evidence
description: "Use when a conversation surfaces something someone outside it will need: a decision, a key fact, a risk, an open question, what a customer's words establish beyond that customer, or how a system works as an analysis establishes it. Also use it when new evidence changes a recorded item, when the user shares a file or document, when a page or file is written, linked or tagged, before saying whether something is on record or answering a question about the corpus, and when the corpus is cleaned up. Chooses where each item goes and how a claim about the corpus is proved. Not for spec content (manage-product-documentation) or one customer's facts (octopad-crm)."
---
Version: 3.5.0

# Where knowledge is written

Choose the branch for each thing on purpose, never by habit: `knowledge`, `pages` or `files`, the three that hold durable workspace context. Retrieval reaches only the branch a thing went into.

- When a conversation surfaces something someone outside this task or conversation will need, record it in the same turn without asking:
  - in one update to the item that owns it;
  - with scope, source and source date (unknown if you do not know).
- Keep a customer's own words with their source: their CRM record where the CRM is on, otherwise the task or working page of the work that heard them.
- Record beyond that customer only what their words establish beyond them, citing the customer and the date:
  - as Key Information;
  - or as market voice: what customers say about the market or one competitor, as short expressions with source and date, on the market report or that competitor's page or entry; open the `manage-market-intelligence` skill, section "The pages", for how.
- Keep on the task what only this task needs.
- When you write a date or time in a record's text, name its time zone:
  - the source's, when it gives one;
  - otherwise the user's, when you know it;
  - otherwise UTC.
- In a date field, put the bare day the user means.

Write with `knowledge`, as one atomic item, what someone outside the current task or conversation will need:
- a fact others will rely on;
- a choice that binds work beyond its task;
- a question no open task will settle;
- an uncertain harm.

- Keep checks, receipts, approvals, blockers and notes about your own tools on the task, or in chat when there is no task.
- File a fixable gap as a task.
- Write with `pages` the reference that outlives the effort, such as how a system is built or what a meeting settled.
- Never keep or offer research or analysis for one decision as an ordinary page: cite the decisive sources in that Decision's rationale.
- Put material later sessions need for bounded work on a working page of its real task or active stream.
- Move lasting findings to their proper home: Key Information, a reference page, or an open task they inform.
- Put a limit of a product system, one that whoever designs or judges it must take into account, where the `manage-product-documentation` skill (section "Record what work establishes about a system") says, never on the working page: open it.
- When lasting knowledge has no home, create one (a page, in the folder that fits if one does, or Key Information) and say where.
- Keep operational consent, supervision and receipts with their work, where they stay readable after archiving.
- When you hand the work over:
  1. Finish moving lasting findings.
  2. Keep as an ordinary page each working page that is, as a whole, reference that outlives the effort: `pages` update with `working_page: false`.
  3. Archive the rest: `pages` update with `folder_id` set to the Archive folder.
- When a delivery ends inside a stream that goes on, archive only that delivery's own pages, and leave the stream and its other work active.
- When the work reopens, take the pages it needs out of Archive.
- Never delete a working page silently: when the workspace needs room, propose to the user deleting archived working pages.
- Octopad keeps only processed information: what it keeps comes back into the AIs' working memory, and raw material fills it with noise. Raw material is a source not yet worked down to what matters: a transcript, a recording, an export, an email thread, a screenshot of messages, the full output of a research or an analysis.
  - Record what matters from it, and tell the user you kept the extract, not the original.
  - Advise keeping the original outside Octopad, linked from the work it serves. When a drive of the user's (such as Google Drive) is connected to you, offer to put it there.
  - When the user asks to keep the original in Octopad, keep it and say where. In the same reply, tell them that Octopad is made for processed information and that raw material would fill its memory with noise, and advise keeping it outside, linked from the work.
- Keep authoritative documents (statutes, contracts, price grids, signed quotes) as files.
- When the user hands over an authoritative document, keep it in the turn it arrives:
  1. When its home is not obvious, work it out first: what stays in chat is gone once the session closes.
  2. Put it into `files`.
  3. Attach it to the task it belongs to.
- With each extract drawn from raw material, keep a pointer to the original where one exists and is permitted. Otherwise label the extract unverified.

Wire what belongs together:
- a page or a file onto the task it informs;
- a Key Information item, through its `links`, onto what it bears on (concerns: a task, page, stream, goal or file), what it comes from (source) and the task that settles it (closed_by), each with a one-line reason;
- one task onto another, with the reason the dependency exists.

# Keeping knowledge true

- When new evidence, or anything you write or read, changes a recorded item (such as a later decision, merged or shipped work, the code, an ended effort or a moved value), update it once, in the same turn, carrying the evidence and the status it should now have.
- Keep what was reported, proposed and decided apart, and never record a report as verified.
- When you check a fact and find it still true, save it with `mark_verified: true`, edited or not.
- When the running code contradicts a fact, or a path or a name in a decision, update the item to follow the code.
- The code, its commit or pull request and their author show what was built, not who chose it. On that ground alone, neither supersede nor reverse a decision: it keeps its choice until a source records the new choice and its chooser.
- Without such a source, ask the user which holds, for each decision on its own, never through a cleanup batch's confirmation.
- When the user confirms a choice still holds, file a task for it, unless one exists.
- Update a fact in place.
- Close a question only on a complete answer:
  - keep it open on a partial answer, with what is settled in its text;
  - close a question waiting on a person's answer or approval only with that answer or approval;
  - reopen a deferred question when its event happens.
- Mark a risk:
  - mitigated, when evidence shows the harm can no longer happen as written;
  - occurred, when it happened.
- When a decision's choice holds but a detail is wrong or moved, or a later decision replaced one of its parts, edit it in place, naming what moved it.
- When a choice changes, record it as a new decision:
  1. Restate in it every clause of the old one that still holds.
  2. Set `superseded_by` on each old decision it wholly replaces.
  3. Leave active a decision that only shares the subject.
- Set a decision `reversed`, with the reason in its text, when:
  - its choice was dropped with nothing in its place;
  - its own term has passed;
  - a decision of another workspace wholly replaces it: name that decision, since `superseded_by` stays within one workspace.
- When you reverse one, shorten the old wording to fit the reason.
- Once an effort ended with no open work relying on it, also reverse each decision that only steered how it ran, such as its plan, order, method, test setup, dates or definition of success. Leave active a choice about what the effort delivered.
- When a clause of a decision you would reverse still binds, put it in a new decision that supersedes this one instead.
- Treat age, similarity and finished work as reasons to check an item, never alone as reasons to change or remove it.
- When a stream is completed, archived or cancelled:
  1. Find its open questions and risks and the decisions that only steered how it ran: `knowledge` `list` with `stream_filter`, per kind, then a `search` for unscoped ones about it.
  2. Settle the questions and risks, and reverse those decisions.
- Leave as it is a stream archived to resume, as its tracker says.
- Delete only an item that never belonged: an approval, a tooling note, or a copy of a page or of another item in the same workspace.
- Update, answer, mitigate, supersede or reverse an item that was once true.
- When an item is only partly an approval, keep its lasting part by an edit.
- When an item has the wrong kind, such as an accepted risk filed as a decision, create it again as the right kind, with its tags and links, then delete the old one.

# Cleaning up the corpus

When the user asks to audit or clean Key Information, read [Cleaning up the corpus](references/corpus-cleanup.md) before you list the first item. It holds the whole procedure, from the count to the batch the user confirms.

# Tagging what you create

- Keep the broad tag beside a narrow one, `frontend` as well as `date-picker`: this vocabulary has no hierarchy.
- Stop adding tags as soon as the next one would:
  - only echo one already there;
  - repeat a structured field such as status, assignee, stream or category;
  - catch something incidental rather than the subject;
  - or be so narrow that no second item could share it.
- Set no target count: there is no number to reach.
- On a Key Information item, tag what the item is about, never what its `category` already says.

# Proving a claim about the corpus

Fit the method to what the claim has to hold up: reading all of a corpus, its summaries or a search are all valid.

- When you build a complete set, settle each doubtful item with one check aimed at that item alone: three doubtful items are three checks, neither a read of everything nor a shrug.
- For a claim about content, such as whether a page still says X or whether Y appears at all, `search` the text and quote the passages that match; never answer from the directory.
- For a compound question, such as every page about X that mentions Y:
  1. Take the directory for X, then `search` for Y.
  2. Count a hit inside that set as proof for its page.
  3. Treat a page of the set the search did not return as doubtful until one check aimed at it settles it, or say the answer covers only what was checked.
- Before quoting, rewriting or editing, pull the whole page with `pages(action:"get")`, and only a page the steps above already named:
  - for a Product Spec, read as much as the `manage-product-documentation` skill (section "Work from product intent") sets;
  - reading in full replaces neither building the set nor proving the claim.
- Report no search result as all there is: a search proves what it found, not that nothing else exists, and its results are ranked and capped, sometimes below the limit you asked for.
- Claim none or every only from a complete inventory of the scope, with each item it leaves doubtful checked. Otherwise say what the answer covers.
- Read low confidence as a claim not yet proven: sharpen the query, or open the one weak hit and settle it. It is no licence to work through the pages one by one.
- Within the turn, read a source again only:
  - when its owning skill requires it fresh before a write, such as a spec's revision before you edit the spec;
  - or when something learned since makes the snapshot doubtful.
- Then recheck that item's identity, content and revision before the write that depends on it.
- A reread never widens the scope or opens a new outside investigation.

# When two sources disagree

- When two sources conflict:
  1. Check first that they are the same workspace, the same page, the same version and the same origin.
  2. Then suspend only the point in dispute, and leave everything else that is established standing.
