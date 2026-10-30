---
name: octopad-knowledge-evidence
description: "Use before recording, updating or cleaning up a decision, fact, risk, advisory or open question, before writing, linking or tagging a page or file, when the user shares a file or document, and before saying whether something is on record or answering a question about the corpus. Spec content belongs to manage-product-documentation, customer facts to octopad-crm."
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "octopad-knowledge-evidence"` when you open this skill.

Version: 2.5.0

# Where knowledge is written

- Three branches hold durable workspace context — `knowledge`, `pages` and `files`. Retrieval reaches only the branch a thing went into, so the branch is chosen on purpose and never by habit.
- What someone outside the current task or conversation will need is an atomic item, written with `knowledge`: a fact others will rely on, a choice that binds work beyond its task, a question no open task will settle, an uncertain harm. Checks, receipts, approvals, blockers and notes about your own tools stay on the task, or in chat when there is no task; a fixable gap is a task.
- Reference that outlives the effort — how a system is built, what a meeting settled — is a page, written with `pages`. Research or analysis for one decision is never kept or offered as an ordinary page: its Decision's rationale cites the decisive sources.
- Material later sessions need for bounded work goes on a working page of its real task or active stream, including an ongoing stream. Lasting findings move to their proper home (Key Information, a reference page, an open task they inform); propose a home for, or ask about, lasting knowledge that has none. Operational consent, supervision and receipts stay with their work and remain consultable after archiving.
- When you hand the work over, finish moving lasting findings, then keep each working page that is, as a whole, reference that outlives the effort, and archive the rest. A bounded delivery in an ongoing stream archives only its own document IDs, leaving the stream and other work active. When the work reopens, take the pages it needs out of Archive.
- An authoritative document the user hands over: put it into `files` on the turn it arrives and attach it to the task it belongs to, working out that home first when it is not obvious; what stays in chat is gone once the session closes.
- With each extract drawn from raw material, keep a pointer to the original where one exists and is permitted; otherwise label the extract unverified.
- Wire what belongs together: a page or a file onto the task it informs, a page or a file onto the Key Information item it supports, one task onto another with the reason the dependency exists.
- Search the pages before you attach one, so what lands on the task is the best of them and not the first.
- Skip the search-and-link step where it cannot pay: a placeholder, a user who has declined it, input too thin to match anything (ask once), or a batch, where one search covers the whole topic.

# Keeping knowledge true

- When what you write or read changes an item (a later decision, merged or shipped work, the code, an ended effort, a moved value), fix the item in that turn, in one update carrying the evidence and the status it should now have. Check each detail of the new text against its source, not only the one that moved, and keep every clause that still holds.
- When the code that runs contradicts a fact, or a path or a name in a decision, the item follows the code. The code, its commit or PR and their author show what was built, not who chose it: on that ground alone a decision is neither superseded nor reversed, and keeps its choice until a source records the new choice and its chooser. Without one, ask the user which holds, for each decision on its own, never through a cleanup batch's yes, and file a task, unless one exists, for a choice they confirm still holds.
- A fact is updated in place.
- A question closes only on a complete answer: a partial one stays open, with what is settled in its text. One waiting on a person's answer or approval closes only with it. A deferred question reopens when its event happens.
- A risk is mitigated when evidence shows the harm can no longer happen as written, and marked occurred when it happened.
- A decision whose choice holds but whose detail is wrong or moved, or whose part a later decision replaced, is edited in place, naming what moved it. A changed choice is a new decision: restate in it every clause of the old one that still holds, then set `superseded_by` on each old one it wholly replaces; one that only shares the subject stays active.
- A decision is set `reversed`, the reason in its text (shorten the old wording to fit), when its choice was dropped with nothing in its place, when its own term has passed, when it only steered how an effort ran (its plan, order, method, test setup, dates or definition of success) and that effort ended with no open work relying on it, or when a decision of another workspace wholly replaces it (name it: `superseded_by` stays within one workspace). If a clause still binds, put it in a new decision that supersedes this one instead. A choice about what an effort delivered stays active.
- Age, similarity and finished work are reasons to check an item, never by themselves to change or remove it.
- When a stream is completed or archived, settle its open questions and risks and reverse, as above, the decisions that only steered how it ran (`knowledge` `list` with `stream_filter`, per kind, then a `search` for unscoped ones about it). A stream archived to resume, as its tracker says, is left as it is.
- Delete only an item that never belonged (an approval, a tooling note, a copy of a page or of another item in the same workspace); one that was once true is updated, answered, mitigated, superseded or reversed, and one only partly an approval keeps its lasting part by an edit. An item of the wrong kind (an accepted risk filed as a decision) is created as the right kind, with its tags and links, then deleted.

# Cleaning up the corpus

When the user asks to audit or clean Key Information, read [Cleaning up the corpus](references/corpus-cleanup.md) before you list the first item: it holds the whole procedure, from the count to the batch the user approves.

# Tagging what you create

- Everything you create is tagged — a task, a page, a file, a Key Information item, a stream, a goal — so that someone who did not create it can still find it.
- Run the facets from broad to narrow and add a tag wherever a facet genuinely applies: first the product area or theme, then the feature or component, then the kind of work, its technology or its integration.
- A narrow tag never replaces the broad one; both stand, `frontend` as well as `date-picker`, because this vocabulary has no hierarchy.
- Stop as soon as the next tag would only echo one already there, repeat a structured field (its status, its assignee, its stream, its category), catch something incidental rather than the subject, or be so narrow that no second item could ever share it. There is no number to reach.
- Reuse a tag that already carries the meaning — list them with `manage_tags` when you are unsure — because a near-duplicate is minted without complaint and only an admin ever reconciles it.
- Mint a new tag only when nothing in the vocabulary fits: a tag forced onto an item is worse than a tag that did not exist yet.
- On a Key Information item, never tag what its `category` already says; tag what the item is about.

# Proving a claim about the corpus

- There is no one right way to read a corpus — all of it, its summaries, a search — so fit the method to what the claim has to hold up.
- **Building a complete set:** settle each doubtful item with one check aimed at that item alone: three doubtful items are three checks, neither a read of everything nor a shrug.
- **A claim about content** — whether a page still says X, whether Y appears at all — is settled by `search`ing the text and quoting the passages that match, never from the directory.
- **A compound question,** such as every page about X that mentions Y, takes the directory for X, then a `search` for Y: a hit inside that set proves its page, while a page of the set the search did not return stays doubtful until one check aimed at it settles it, or the answer says it covers only what was checked.
- **Quoting, rewriting or editing** — pull the whole page with `pages(action:"get")`, and only a page the steps above have already named; reading in full stands in neither for building the set nor for proving the claim.
- **Nothing found is not proof that nothing exists.** Widen the terms and try again, then rerun `search` with `include_archived`, or open the candidates you did identify. A search proves what it finds, never that nothing else matches: its results are ranked and capped, sometimes below the limit you asked for. Claim none or every only from a complete inventory of the scope with each item it leaves doubtful checked; otherwise say what the answer covers.
- Low confidence means the claim is not yet proven: sharpen the query, or open the one weak hit and settle it. It is not a licence to work through the pages one by one.
- Reuse what `build_context` returned instead of fetching it again. Read a source again only when its owning skill requires it fresh before a write (a spec's revision before you edit the spec, for instance) or when something learned since makes the snapshot doubtful; then recheck that item's identity, content and revision before the write that depends on it. This never widens the scope or opens a new outside investigation.

# When two sources disagree

- Say what the search turned up, and raise any clash with a decision already on record before you put a direction forward.
- When two sources conflict, check first that they are the same workspace, the same page, the same version and the same origin; then suspend only the point in dispute and leave standing everything else that is established.
