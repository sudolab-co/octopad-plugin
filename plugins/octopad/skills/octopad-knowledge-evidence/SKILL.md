---
name: octopad-knowledge-evidence
description: "Use when a conversation surfaces something someone outside it will need: a decision, a key fact, a risk, an advisory, an open question or what a customer's words establish beyond that customer. Also use it when new evidence changes a recorded item, when the user shares a file or document, when a page or file is written, linked or tagged, before saying whether something is on record or answering a question about the corpus, and when the corpus is cleaned up. Chooses where each item goes and how a claim about the corpus is proved. Not for spec content (manage-product-documentation) or one customer's facts (octopad-crm)."
---
Version: 3.3.0

# Where knowledge is written

Three branches hold durable workspace context: `knowledge`, `pages` and `files`. Retrieval reaches only the branch a thing went into, so choose the branch on purpose, never by habit.

- When a conversation surfaces something someone outside this task or conversation will need (a key fact, a decision, an open question, a risk, what a customer's words establish beyond that customer, or what an analysis establishes about how a system works, even when you were asked to change nothing), record it in the same turn without asking, in one update to the item that owns it, with scope, source and source date (unknown if you do not know). A customer's own words stay with their source: their CRM record where the CRM is on, otherwise the task or working page of the work that heard them; only what they establish beyond that customer is recorded beyond it, citing the customer and the date: as Key Information, or as market voice: what customers say about the market or one competitor, as short expressions with source and date, on the market report or that competitor's page or entry, as `manage-market-intelligence` says. What only this task needs stays on the task. When new evidence changes a recorded item, update it in the same turn.
- A date or time you write in a record's text names its time zone: the source's when it gives one, otherwise the user's when you know it, otherwise UTC. A date field takes the bare day the user means.
- Write with `knowledge`, as one atomic item, what someone outside the current task or conversation will need: a fact others will rely on, a choice that binds work beyond its task, a question no open task will settle, an uncertain harm.
- Keep checks, receipts, approvals, blockers and notes about your own tools on the task, or in chat when there is no task. A fixable gap is a task.
- Write with `pages` the reference that outlives the effort, such as how a system is built or what a meeting settled. Research or analysis for one decision is never kept or offered as an ordinary page: its Decision's rationale cites the decisive sources.
- Put material later sessions need for bounded work on a working page of its real task or active stream, an ongoing stream included. An analysis's findings go there without asking, even when the user asked you to change nothing: the page changes nothing they asked you to leave alone. Move lasting findings to their proper home: Key Information, a reference page, or an open task they inform. A limit of a product system that whoever designs or judges it must take into account goes straight to Known limits in that system's Product Spec, as `manage-product-documentation` says, not to the working page. For lasting knowledge with no home, propose one or ask.
- Keep operational consent, supervision and receipts with their work, where they stay readable after archiving.
- When you hand the work over, finish moving lasting findings first. Then keep each working page that is, as a whole, reference that outlives the effort, and archive the rest.
- A bounded delivery in an ongoing stream archives only its own documents, leaving the stream and other work active. When the work reopens, take the pages it needs out of Archive.
- Keep no raw material (transcripts, recordings, exports, email threads, screenshots of messages): record what matters, and tell the user you kept the extract, not the file. Authoritative documents (statutes, contracts, price grids, signed quotes) stay files. When the user explicitly asks to keep the original, keep it and say where.
- When the user hands over an authoritative document, put it into `files` on the turn it arrives and attach it to the task it belongs to. Work out that home first when it is not obvious: what stays in chat is gone once the session closes.
- With each extract drawn from raw material, keep a pointer to the original where one exists and is permitted. Otherwise label the extract unverified.
- When the user asks you to publish a text, publish it. If the text needs a read the user has not given it, ask first whether they want to read it or publish now.
- Wire what belongs together: a page or a file onto the task it informs, a page or a file onto the Key Information item it supports, one task onto another with the reason the dependency exists.

# Keeping knowledge true

- When what you write or read changes an item, such as a later decision, merged or shipped work, the code, an ended effort or a moved value, update it once, carrying the evidence and the status it should now have.
- Keep what was reported, proposed and decided apart, and never record a report as verified.
- When you check a fact and find it still true, save it with `mark_verified: true`, edited or not.
- When the running code contradicts a fact, or a path or a name in a decision, the item follows the code.
- The code, its commit or pull request and their author show what was built, not who chose it. On that ground alone a decision is neither superseded nor reversed: it keeps its choice until a source records the new choice and its chooser. Without such a source, ask the user which holds, for each decision on its own, never through a cleanup batch's yes. File a task for a choice they confirm still holds, unless one exists.
- Update a fact in place.
- Close a question only on a complete answer. A partial answer stays open, with what is settled in its text. A question waiting on a person's answer or approval closes only with it. A deferred question reopens when its event happens.
- Mark a risk mitigated when evidence shows the harm can no longer happen as written, and occurred when it happened.
- Edit a decision in place, naming what moved it, when its choice holds but a detail is wrong or moved, or a later decision replaced one of its parts.
- Record a changed choice as a new decision: restate in it every clause of the old one that still holds, then set `superseded_by` on each old decision it wholly replaces. A decision that only shares the subject stays active.
- Set a decision `reversed`, with the reason in its text, when its choice was dropped with nothing in its place, when its own term has passed, or when a decision of another workspace wholly replaces it, which you name since `superseded_by` stays within one workspace. Shorten the old wording to fit the reason.
- Also reverse a decision that only steered how an effort ran, such as its plan, order, method, test setup, dates or definition of success, once that effort ended with no open work relying on it. A choice about what an effort delivered stays active.
- If a clause of a decision you would reverse still binds, put it in a new decision that supersedes this one instead.
- Treat age, similarity and finished work as reasons to check an item, never alone as reasons to change or remove it.
- When a stream is completed or archived, settle its open questions and risks, and reverse the decisions that only steered how it ran. Find them with `knowledge` `list` and `stream_filter`, per kind, then a `search` for unscoped ones about it. Leave a stream archived to resume, as its tracker says, as it is.
- Delete only an item that never belonged: an approval, a tooling note, or a copy of a page or of another item in the same workspace. Update, answer, mitigate, supersede or reverse an item that was once true. An item only partly an approval keeps its lasting part by an edit.
- Create an item of the wrong kind again as the right kind, with its tags and links, then delete the old one. An accepted risk filed as a decision is one example.

# Cleaning up the corpus

When the user asks to audit or clean Key Information, read [Cleaning up the corpus](references/corpus-cleanup.md) before you list the first item. It holds the whole procedure, from the count to the batch the user approves.

# Tagging what you create

- Keep the broad tag beside a narrow one, `frontend` as well as `date-picker`: this vocabulary has no hierarchy.
- Stop as soon as the next tag would only echo one already there, repeat a structured field such as status, assignee, stream or category, catch something incidental rather than the subject, or be so narrow that no second item could share it. There is no number to reach.
- On a Key Information item, tag what the item is about, never what its `category` already says.

# Proving a claim about the corpus

Fit the method to what the claim has to hold up: reading all of a corpus, its summaries or a search are all valid.

- Building a complete set: settle each doubtful item with one check aimed at that item alone. Three doubtful items are three checks, neither a read of everything nor a shrug.
- A claim about content, such as whether a page still says X or whether Y appears at all: `search` the text and quote the passages that match, never answer from the directory.
- A compound question, such as every page about X that mentions Y: take the directory for X, then `search` for Y. A hit inside that set proves its page. A page of the set the search did not return stays doubtful until one check aimed at it settles it, or the answer says it covers only what was checked.
- Quoting, rewriting or editing: pull the whole page with `pages(action:"get")`, and only a page the steps above already named; for a Product Spec, `manage-product-documentation` sets how much to read. Reading in full replaces neither building the set nor proving the claim.
- A search proves what it finds, never that nothing else matches: its results are ranked and capped, sometimes below the limit you asked for.
- Claim none or every only from a complete inventory of the scope, with each item it leaves doubtful checked. Otherwise say what the answer covers.
- Read low confidence as a claim not yet proven: sharpen the query, or open the one weak hit and settle it. It is no licence to work through the pages one by one.
- Within a turn, reuse what `build_context` returned instead of fetching it again; in a later turn, read a value again before you state it as current or copy it into a write. Read a source again only when its owning skill requires it fresh before a write, such as a spec's revision before you edit the spec, or when something learned since makes the snapshot doubtful. Then recheck that item's identity, content and revision before the write that depends on it. This never widens the scope or opens a new outside investigation.

# When two sources disagree

- Say what the search turned up, and raise any clash with a decision already on record before you put a direction forward.
- When two sources conflict, first check they are the same workspace, the same page, the same version and the same origin. Then suspend only the point in dispute, and leave everything else that is established standing.
