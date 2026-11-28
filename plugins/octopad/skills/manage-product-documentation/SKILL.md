---
name: manage-product-documentation
description: "Use before you judge what the product does or why, even from a single run of it, or whether and how to change it; when the user explores or settles how the product behaves or voices an idea about it; when asked what it does today or whether a page still matches the code; when work shows how a product system really behaves or fails; when a system ships, rolls back or retires; before saying a change needs no documentation update; when drafting a pull request body or writing up a release or user documentation; and when setting up, auditing or reshaping product documentation. A shipped skill is product behavior. Not for internal notes or marketing copy (manage-product-marketing)."
---
Version: 8.0.0

# Manage Product Documentation

Read the first three sections at every opening.

## Work from product intent

- Before you select a document to change, establish the affected products from current evidence, as [Resolve product scope](references/product-scope-and-seams.md#resolve-product-scope) says: a workspace, repository, project, document or search result is not a product selection.
- Choose the owning system by the need it serves, not by its delivery mechanism (an AI instruction, a hook, a tool). Recheck ownership as the design changes and before building.
- Keep one evolving Product Spec per significant system, split only as [Product Spec](references/documentation-model.md#product-spec) says.
- When no spec owns the behavior, say so, keep establishing the facts, and leave conclusions about its intended behavior unresolved.

How much of a spec to read:
- A narrow fix with a known cause and no product choice: only the spec's purpose, constraints and the clause it restores, which you name first.
- Otherwise, for a product choice, a change across the product, unclear boundaries or an element with no subsection: the whole spec. An outline, a section read, a summary or a truncated result is not a whole read: get the missing text, or name the access limit and leave dependent conclusions unresolved.
- To judge, quote or edit one or a few elements that have subsections: the outline (`pages` `get` with `outline: true`); then, in one call, `sections: ["Need", "Outcome", "<each section without subsections, or larger than its heading and subsections together>", "<each of those elements' headings>", "All elements"]` (a heading returns every subsection that uses it); then each part they cross-reference whose pointer bears on what you judge.
- Other specs or history only when a dependency, a contradiction or the request calls for them.

- Before your first change, record the spec's version id or `updated_at` on the task or PR as the baseline, and judge your edits against that revision, reconciled with material source changes and explicit user directions during the work. When the baseline is missing or its version was pruned, name that gap and leave dependent conclusions unresolved.

1. Before you judge, diagnose or redesign a behavior, or choose how to serve a user need, establish the requested outcome and constraints from the request, the owning spec, the Tasks and records its Direction links for the work, and the Decisions that change its scope.
2. When the user asks to redesign a system, its current choices and Decisions are what the design may replace, not limits on it: design the target from the need, then name each recorded Decision it would replace.
3. Before you build, add the context [Implementation context retrieval](references/lifecycle-playbooks.md#implementation-context-retrieval) lists.
4. Before you conclude or hand off, check the result against that intent in the existing task, pull request or reply, not in a new document or approval step:
   - each need within the request: covered with evidence, still unmet, or out of the request with its reason;
   - the source-defined scenarios it touches: which were checked and which were not;
   - an accepted need the request does not cover: keep it visible, without making it an instruction to build it;
   - a design or fix that a Known limits line bears on: say how it takes that limit into account.

- Never narrow the request to fit the result. When you change or regroup the means, the need stays: name where it is now served, or the attributed Decision that retires or replaces it.
- For a required review, use these primary sources, not only the author's summary or rewritten spec.

When the user asks what a system does today, or whether a page still matches the code: take its intent from the spec and its current behavior from code, tests, its Known limits and release evidence. Name each gap as a defect or an unbuilt promise; never present intent as current behavior.

## Preserve lifecycle and product scope

- Mark unknown facts `Unknown`, `Unverified` or with a documentation-debt marker and keep working. Never fabricate architecture, behavior, ownership, dates, metrics, source revisions, release state or customer evidence, nor a value to make a template look complete.
- Derive technical facts from current code and repository configuration when available. Never present an old observation as current.
- Keep `idea`, `explored`, `accepted`, `implemented`, `merged`, `released` and `retired` distinct; never infer one from another. A record that uses `proposed` or `approved` keeps its words, mapped explicitly to the same evidence boundary.
- Code or tests can prove implementation, not approval or release; a pull request, a proposed source revision; a merge, only that a revision reached its base branch. Mark behavior released or shipped only after you verify the repository's actual release policy and release evidence: a merge is not a production release unless that policy proves it.
- Attribute every lifecycle claim and Product Fact to its product; for a component several products share, follow [Store shared truth once](references/product-scope-and-seams.md#store-shared-truth-once).
- Never copy private local paths, personal or customer identifiers, or unnecessary source bodies into Octopad; prefer a safe repository link, public revision or redacted summary that proves the claim without exposing unrelated data.

When a system ships, rolls back or retires (the delivery rule below decides whether its spec changes):
- At each release that reaches users, run the [Release sync](references/lifecycle-playbooks.md#release-sync) pass.
- On a rollback or correction, revise or retire current truth as [Rollbacks and history](references/product-scope-and-seams.md#rollbacks-and-history) says.
- Pass what changed to [its other owners](#work-with-the-other-documentation-skills).

### The delivery rule

For every delivery, a pull request, a merge or a release:
- Record progress, pull requests, heads, tests, reviews, releases and implementation, merge and release states on Tasks, pull requests, release records and Product Facts; none changes a spec.
- Change a spec only when a need, the outcome, a direction, a choice, a promise or a non-goal changes, or a known limit is established or lifted, including when building reveals one. A version bump alone changes no spec.
- When a change needs no spec edit, still name the spec in the repository's documentation-impact mark.
- When a needed spec edit is blocked or must wait for a later event, such as a release reaching production, name there the spec, what it waits for and the task that makes the edit: create or reuse that task first, as the `octopad-planning-and-work-design` skill (section "Shaping the work") says. When the edit is blocked, that task is documentation-debt work.

## Stop before writing

- Before writing, confirm the connected organization, workspace and each repository and branch from current evidence. File a new page in its scope's Product folder.
- Before you create, and before you declare something absent, search and read likely matches, not only titles. Before you write a negative, prove it.
- Reuse and link existing pages, streams, tasks, Decisions, repository docs and pull requests. Supersede or redirect a duplicate non-destructively, after preserving its unique facts and links; never delete content or overwrite history automatically.
- Administer templates, folders, links, classifications, drafts, parked ideas, routine sync, and safe metadata or link repair without asking, except in an audit alone. Record a direction already given without asking for it again.
- Ask the user only for:
  - material ambiguity in product intent or a significant system boundary that would change the result;
  - an unresolved conflict over which source is authoritative. When it is explicit and affects this change, preserve both sources and ask, instead of choosing or rewriting either;
  - a consequential decision the normal product or repository review does not already handle;
  - deletion, irreversible overwrite, or another destructive consolidation.

A `No documentation impact` claim covers the maintained set of every affected product.
- Write it only with the receipt [Proving no documentation impact](references/pull-requests.md#proving-no-documentation-impact) sets. Search alone, or an inventory of the wrong product, proves nothing.
- When behavior changed while no page owns it, that is a gap: record one documentation-debt item instead of closing the question.

## Write for the reader

When you write to a Product Spec, or content leaves a spec or an Architecture Map:
- When you edit a spec you read in parts, use `pages` `update` with `content_updates` only, never `content`, and read the edited subsections back to check that the change landed there.
- Change a spec only as [the delivery rule](#the-delivery-rule) allows.

### What a spec holds

- Keep a line only if a reader without it could build the wrong thing, undo a choice or break a promise. Keep a value or an observed behavior only when it is the promise or the known limit itself; never invent a need or a reason to keep a line.
- Never claim a system is built or released beyond what a Known limits line establishes with its source and date; put that claim in user documentation or a Product Fact, with its evidence.
- Use the headings Need, Outcome, Direction, Choices, Promises, Non-goals, Known limits, Open questions and Links word for word. Always write Need and Outcome, `[open]` while unknown; omit other empty sections.
- Mark what is undecided `[open]`, never guessed. Use only two labels, `[open]` and `[idea <date>]` in Open questions; move an accepted line to Direction, Choices or Promises, unlabelled. Neither label is delivery.
- For section content, element subsections and the spec of a text users' AIs read, use [Product Spec](references/documentation-model.md#product-spec).

### When content leaves a spec or an Architecture Map

The preservation rule:
- Remove delivery history, and text whose home (code, tests, Task, Decision) you have read and found holding it, without a list.
- Before anything else leaves, a need, choice, promise, constraint, scenario, rationale or unresolved finding included, list each one on the Task, pull request or reply, never on the page, as kept, moved (where), replaced or unresolved. A move between sections or a link change needs no list.
- Write moved text to its destination and read it back first.
- Give a substantive rewrite a reviewer who did not write it, who checks both directions: nothing needed lost, nothing kept that the "Keep a line only if" rule rejects.

## Capture exploration without waiting for a build decision

When the user explores how the product behaves, or an idea about it comes up for later or in passing:
- Silently classify its likely documentation impact and make the smallest useful update for that class ([Brainstorm and design maturity](references/lifecycle-playbooks.md#brainstorm-and-design-maturity)).
- Once a discussion, not a passing thought, develops a real user problem, system boundary, behavior, contract or meaningful alternative, in the same turn:
  1. Create or adopt the owning Product Spec.
  2. Add an `[idea]` line to its Open questions holding the direction and open questions, not the discussion, or update the line the subject already has.
  3. Put a choice between alternatives in a Decision.
  4. Put lasting exploration or detailed design in a supporting record linked from the line: what it established, never its raw material (a transcript or the full output of research or analysis); for the original, open the `octopad-knowledge-evidence` skill, section "Where knowledge is written".
  5. Add its Product Map line.
  6. Remove any duplicate parked entry, preserving its unique content in the spec.
- Record the thinking without claiming approval or delivery, and invent no execution Task. Before you assess, accept or build an idea, read its supporting record.
- At the end of a brainstorm, and whenever an idea comes up in passing during other work, park each remaining passing idea the user engaged with and left open, without asking, as [Parking](references/lifecycle-playbooks.md#parking) says.

When the user settles how the product behaves, read the owning spec before you answer:
- Write it as accepted in Direction, Choices or Promises of that spec in the same turn, before it is built, moving its `[idea]` line there; work tracking owns its execution.
- Log it as a Decision with the `knowledge` tool too.

## Record what work establishes about a system

When work (a test, a measurement, an incident, a diagnosis, an analysis or an audit of that system) shows how a system really behaves or fails, in a way whoever later designs, changes or judges it must take into account:
- First search the spec and the records it links: when the limit is already written there, even as the reason of another line, move it under Known limits or update it there with the new evidence, and never present it as a discovery.
- In the same turn and without asking, write it as a line under Known limits in the owning spec, even while that work stays open: a task comment, a report or a note alone does not record it.
- Put a limit several systems share in the spec of the system it belongs to, linked from the others' specs.
- When no spec owns the system, record the limit as Key Information on the work's stream or task, say no spec owns it, and file one documentation-debt item.
- When later evidence shows a limit no longer holds, replace or remove its line and name that evidence on the Task.
- Not limits: a result that confirms the intended behavior, a defect to fix, a measurement that constrains no design.
- Recording a limit does not repair the documentation: an audit of the documentation set still only reports.

## Load the needed guidance

When release notes, user documentation, a Product Fact or a marketing claim resting on one is drafted or revised:
- The Product Fact rule: before you draft, create or activate a Product Fact or a marketing claim, read evidence competent to prove its exact claim, product scope and state, as [Product Facts](references/documentation-model.md#product-facts) defines it; without it, create no Fact or dependent approved copy, and name the gap.
- Draft and reconcile user documentation and release notes, pre-release drafts included, as [Downstream documents](references/lifecycle-playbooks.md#downstream-documents) says, and keep every review the product or repository requires.

## Pull requests

When you draft a pull request body, outlines and groundwork included, fix its `Octopad-Task:` line, or sync documentation with a pull request: the body records the change's documentation impact and ends with exactly one `Octopad-Task:` line holding the task's bare id from Octopad. Write it as [The PR body](references/pull-requests.md#the-pr-body) says, then follow [Pull request and delivery sync](references/pull-requests.md#pull-request-and-delivery-sync), which also sets the task's status once it is open.

## Work with the other documentation skills

When owned product truth changes, a Product Fact moves, or a request or output belongs to another documentation skill:
- This skill owns product behavior, release truth, Product Facts and each Product Overview except its Marketing section, which `manage-product-marketing` owns with ICP, positioning, pricing and approved claims.
- Update this skill's canonical records. When the change alters the Product Overview's `offer_and_availability`, update that key in the same turn. Then hand each affected output to its owner as [Pass changes between owners](references/product-scope-and-seams.md#pass-changes-between-owners) says, which also covers a pure marketing request.

## Administer the documentation system

Keep one Product Overview per offer, one Product Map per product and one evolving Product Spec per significant system.

When product documentation is set up or audited, or a page of it, other than a spec's content, is created, adopted, split, merged or substantially reshaped:
- Shape the page as the [documentation model](references/documentation-model.md#contents) says in the section named after its type.
- To set up documentation, follow [Greenfield setup](references/lifecycle-playbooks.md#greenfield-setup) or [Existing-product setup](references/lifecycle-playbooks.md#existing-product-setup).
- In an audit, inspect a bounded maintained set and report its gaps. Repair nothing, safe metadata and links included, unless asked for repairs. Read [Maintenance and audit](references/lifecycle-playbooks.md#maintenance-and-audit) before the first read of maintained content.
