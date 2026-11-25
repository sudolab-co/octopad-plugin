---
name: manage-product-documentation
description: "Records each product system's intent, real behavior and release state. Use before judging why a product behaves as it does, even in one run, or whether or how to change it; when the user explores or settles how it behaves, or asks what it does today or whether a page still matches the code; when a test, a measurement, an incident or an analysis shows how a system really behaves or fails; when a system ships, rolls back or retires; before saying a change owes no documentation; and before drafting a pull request body or writing up a release or user documentation. A shipped skill is product behavior. Not for internal notes or marketing copy (manage-product-marketing)."
---
Version: 7.8.0

# Manage Product Documentation

## Resolve the product first

- Before you select a document to change, establish the affected products from current evidence by [Resolve product scope](references/product-scope-and-seams.md#resolve-product-scope): a workspace, repository, project, document or search result is not a product selection.
- Choose the owning system by the need it serves, not by its delivery mechanism (an AI instruction, a hook, a tool).
- Give a capability its own spec, linked from the affected specs, when its reader must understand it independently, with its own need, data or rules.
- Never split a spec for length alone: element subsections let a reader take a long spec in parts.
- Recheck ownership as the design changes and before building.

## Work from product intent

Before you judge, diagnose or redesign a behavior, or choose how to serve a user need, establish the requested outcome and constraints from the request, the owning Product Spec, the Tasks and records its Direction links for the work, and the Decisions that change its scope. When the user asks to redesign a system, its current choices and Decisions are what the design may replace, not limits on it: design the target from the need, then name each recorded Decision it would replace.

How much of the spec to read:
- A narrow fix whose cause is known and that needs no product choice: only the spec's purpose, constraints and the clause it restores, which you name first.
- Otherwise, for a product choice, a change that spans the product or has unclear boundaries, and when the spec has no subsection for the element you judge: the whole spec.
- To judge, quote or edit one or a few elements that have subsections: read the outline (`pages` `get` with `outline: true`); then, in one call, `sections: ["Need", "Outcome", "<each section without subsections, or larger than its heading and subsections together>", "<each of those elements' headings>", "All elements"]` (a heading returns every subsection that uses it); then each part they cross-reference whose pointer bears on what you judge.
- When a full read is required, an outline, a section read, a summary or a truncated result is not one: get the missing text, or name the access limit and leave dependent conclusions unresolved.
- Read other specs or history only when a dependency, a contradiction or the request calls for them.

- When you edit a spec you read in parts, use `pages` `update` with `content_updates` only, never `content`, and read the edited subsections back to check that the change landed there.
- When no spec owns the behavior, say so, keep establishing the facts, and leave conclusions about its intended behavior unresolved.
- Before your first change, record the spec's version id or `updated_at` on the task or PR as the baseline, and judge your edits against that revision, reconciled with material source changes and explicit user directions during the work. When the baseline is missing or its version was pruned, name that gap and leave dependent conclusions unresolved.

Before you conclude or hand off, check the result against that intent in the existing task, PR or reply, not in a new document or approval step:
- each need within the request: covered with evidence, still unmet, or out of the request with its reason;
- the source-defined scenarios it touches: which were checked and which were not;
- an accepted need the request does not cover: keep it visible, without making it an instruction to build it;
- a design or fix that a Known limits line bears on: say how it takes that limit into account.

- Never narrow the request to fit the result. When you change or regroup the means, the need stays: name where it is now served, or the attributed Decision that retires or replaces it.
- For a required review, use these primary sources, not only the author's summary or rewritten spec.
- When asked what a system does today, or whether a page still matches the code, take its intent from the spec and its current behavior from code, tests, its Known limits and release evidence. Name each gap as a defect or an unbuilt promise; never present intent as current behavior.

## Write for the reader

A Product Spec gives whoever must decide, build, change or judge a system what code cannot. Describe in it the intended product, built or not, with the limits work has established.

- Keep a line only if a reader without it could build the wrong thing, undo a choice or break a promise.
  - Leave out what the code does and how, and values and steps chosen while building (screens, wording, parameters, size limits, budgets, ordering): code, tests, the design document, Tasks and release records hold them.
  - Keep a value or an observed behavior only when it is the promise or the known limit itself; never invent a need or a reason to keep a line.
  - Example: not "`create` requires `title`; at most 80 characters" but "each item says in one line what it is for; input is never cut silently".
- Write intent (Need, Outcome, Direction, Choices) in short full sentences, each choice with its reason, and one bullet per promise or non-goal.
- Mark what is undecided `[open]`, never guessed. Use only two labels, `[open]` and `[idea <date>]` in Open questions; move an accepted line to Direction, Choices or Promises, unlabelled.
- Always write Need and Outcome, `[open]` while unknown; omit other empty sections. Keep the headings below word for word.
- Write each fact once, linked elsewhere, in the page's language and the workspace's style, with no transitions, history or comments on sources. Keep no changelog or history page per spec unless the workspace's rule keeps one: chronology lives on the release record or changelog.
- Put in each section only its own content:

```markdown
# <System name>
## Need
- When <situation>, I want <motivation>, so <outcome>. (Whom it serves and their situation; never personas or features.)
## Outcome
<The result sought.> Signal: <what shows it is reached>.
## Direction
- <An accepted direction beyond what exists> (<its Task or stream>).
## Choices
- <A choice that shapes the system>, because <reason> (<its Decision, when one exists>). (A rejected alternative: only a link to its Decision.)
## Promises
- <What it must always or never do for the people it serves: rules protecting their work, data or privacy, accessibility, safety, compatibility, a guarantee they rely on; its conditions and audience when limited>.
## Non-goals
- <What it could reasonably do and deliberately does not>: <reason>; <neighbouring owner (link)>.
## Known limits
- <One limit work established: how it really behaves or fails, and what that imposes on whoever designs, changes or judges it> (<source>, <date>; <Engineering Reference for bulk detail>).
## Open questions
- [open] <undecided point>. (Never a settled choice: Choices, Decision.)
- [idea <date>] <direction>; read <supporting record> before assessing or building it.
## Links
<Product Map> · <Architecture Map> · <Decisions> · <supporting records> · <contracts> · <related specs> · <design document> · <code entry point>. (Nothing else.)
```

- Put everything else in its home, linked when still needed: a replaced design or text (page versions); who chose when (Decision); a defect, even one breaking a promise (Task, linked); negated bugs ("does not crash"); a measurement that constrains no design (the test or script that measures it); exploration narrative (supporting record).
- When a section covers several elements of the product (a screen, a tool, a step of a flow, a group of rules), give each element a `###` subsection, under the same heading in every section where it appears, so a reader can fetch one element across the spec:
  - put a rule that holds for every element in a subsection headed `All elements`, in every language, and write no text outside the subsections;
  - put a rule for some elements but not all under one of them, cross-referenced from each of the others; when an element's rule depends on another element, cross-reference that element's section and heading;
  - when you write to such a section that has no subsections, read the whole spec and give it its subsections in the same edit, a move that changes no content; read it back and check that every old line survived.

The preservation rule, when content leaves a spec or an Architecture Map:
- Remove delivery history, and text whose home (code, tests, Task, Decision) you have read and found holding it, without a list.
- Before anything else leaves, a need, choice, promise, constraint, scenario, rationale or unresolved finding included, list each one on the Task, pull request or reply, never on the page, as kept, moved (where), replaced or unresolved. A move between sections or a link change needs no list.
- Write moved text to its destination and read it back first.
- Give a substantive rewrite a reviewer who did not write it, who checks both directions: nothing needed lost, nothing kept that the "Keep a line only if" rule rejects.

## Stop before writing

The Product Fact rule: before you create or activate a Product Fact, read evidence competent to prove its exact claim, product scope and state, as [Product Facts](references/documentation-model.md#product-facts) defines it. When that evidence cannot be found, create no Fact or dependent approved copy, and name the gap.

1. Before writing, confirm the connected Octopad organization and the relevant workspace, and each repository and branch from current evidence. Before you create a Page, file it in the Product folder of its scope.
2. Before you create, and before you declare something absent, search and read likely matches, not only titles. Reuse and link existing pages, streams, tasks, Decisions, repository docs and PRs. Supersede or redirect duplicates non-destructively, after preserving their unique facts and links; never delete content or overwrite history automatically.
3. Before you write a negative, prove it. `No documentation impact` is a claim about the maintained set of every affected product: write it only with the receipt [Proving no documentation impact](references/pull-requests.md#proving-no-documentation-impact) sets.
   - Search alone, or an inventory of the wrong product, proves nothing.
   - When behavior changed while no page owns it, that is a gap: record one documentation-debt item instead of closing the question.
4. Treat unknown facts as unknown: ask only when an unresolved system boundary, product intent or authority conflict would materially change the result. An explicit unresolved authority conflict that affects this change always does: preserve both sources and ask, instead of choosing or rewriting either one. Otherwise use a concise `Unknown`, `Unverified` or documentation-debt marker and keep working.
5. Never fabricate architecture, behavior, ownership, dates, metrics, source revisions, release state or customer evidence, nor a value to make a template look complete: write an explicit unknown. Derive technical facts from current code and repository configuration when available.
6. In a spec, never claim a system is built or released beyond what a Known limits line establishes with its source and date; put that claim in user documentation or a Product Fact, with its evidence. Never present an old observation as current. In an At a glance block, write answers only; keep their provenance in the page body.
7. Never copy private local paths, personal or customer identifiers, or unnecessary source bodies into Octopad; prefer a safe repository link, public revision or redacted summary that proves the claim without exposing unrelated data.

## Capture exploration without waiting for a build decision

During product discussion, silently classify the likely documentation impact as `no impact`, `existing-system change`, `new system` or `technical-only`, and make the smallest useful update for that class ([definitions and updates](references/lifecycle-playbooks.md#brainstorm-and-design-maturity)).

Once a discussion, not a passing thought, develops a real user problem, system boundary, behavior, contract or meaningful alternative, in the same turn:
1. Create or adopt the owning Product Spec.
2. Add an `[idea]` line to its Open questions holding the direction and open questions, not the discussion, or update the line the subject already has.
3. Put a choice between alternatives in a Decision.
4. Put exploration or detailed design with lasting value in a supporting record linked from the line: what the exploration established, never its raw material (a transcript, the full output of a research or an analysis); for the original, open the `octopad-knowledge-evidence` skill, section "Where knowledge is written". Before you assess, accept or build the idea, read that record.
5. Add its Product Map line.
6. Remove any duplicate parked entry, preserving its unique content in the spec.

- Record the thinking without claiming approval or delivery, and without inventing an execution Task. On acceptance, move the line to Direction or Choices in that same spec; work tracking owns execution.
- When the user settles how the product behaves, read the owning Product Spec before you answer, write the behavior into it in the same turn, before it is built, and log it as a Decision with the `knowledge` tool too.
- At the end of a brainstorm, and whenever an idea comes up in passing during other work, park each remaining passing idea the user engaged with and left open, without asking, under the [parking rule](references/lifecycle-playbooks.md#brainstorm-and-design-maturity).

## Record what work establishes about a system

When work (a test, a measurement, an incident, a diagnosis, an analysis or an audit of that system) establishes a limit of a system, meaning a way it really behaves or fails that whoever later designs, changes or judges it must take into account:
- First search the spec and the records it links: when a limit is already written there, even as the reason of another line, move it under Known limits or update it there with the new evidence, and never present it as a discovery.
- In the same turn and without asking, write it as a line under Known limits in the owning spec, even while that work stays open; a task comment, a report or a note alone does not record it.
- Put a limit several systems share in the spec of the system it belongs to, linked from the others.
- When no spec owns the system, record the limit as Key Information on the work's stream or task, say no spec owns it, and file one documentation-debt item.
- When later evidence shows a limit no longer holds, replace or remove its line and name that evidence on the Task.

Not limits: a result that confirms the intended behavior, a defect to fix, a measurement that constrains no design. Recording a limit is not a repair of the documentation: an audit of the documentation set still only reports.

## Preserve lifecycle and product scope

- Keep `idea`, `explored`, `accepted`, `implemented`, `merged`, `released` and `retired` distinct; never infer one from another. When an existing record uses `proposed` or `approved`, keep its vocabulary and map it explicitly to the same evidence boundary.
- Code or tests can prove implementation, not approval or release; a pull request, a proposed source revision; a merge, only that a revision reached its base branch.
- Mark behavior as released or shipped only after verifying the repository's actual release policy and release evidence: a merge is not a production release unless that policy proves it.
- Attribute every lifecycle claim and Product Fact to its product. A shared component can have one canonical spec, but deployment, activation, rollback, availability and claim scope advance separately for each consuming product: never let evidence for one product promote another.

The delivery rule:
- Record progress, pull requests, heads, tests, reviews, releases and implementation, merge and release states on Tasks, pull requests, release records and Product Facts; none changes a spec.
- Change a spec only when a need, the outcome, a direction, a choice, a promise or a non-goal changes, or a known limit is established or lifted, including when building reveals one. A version bump alone changes no spec.
- When a change needs no spec edit, still name the spec in the repository's documentation-impact mark.
- When a needed spec edit is blocked or must wait for a later event, such as a release reaching production, name there the spec, what it waits for and the task that makes the edit: create or reuse that task first, as the `octopad-planning-and-work-design` skill (section "Shaping the work") says. When the edit is blocked, that task is documentation-debt work.
- An `[idea]` or `[open]` line is not delivery: write an `[idea]` line under [Capture exploration](#capture-exploration-without-waiting-for-a-build-decision) and an `[open]` mark under [Write for the reader](#write-for-the-reader).

## Pull requests

- Before you draft a PR body, outlines and groundwork included, fix its `Octopad-Task:` line or sync documentation with a pull request, read [pull-requests.md](references/pull-requests.md): the body records the change's documentation impact and ends with exactly one `Octopad-Task:` line holding the task's bare id from Octopad.
- Once a pull request to the repository's default branch is open and ready for review, set its task `pending_review`: merging it closes the task, so get its acceptance before the merge.
- To link an open pull request to its task, or to fix its line, edit the body (for example `gh pr edit`): Octopad reads the line again whenever the body changes.

## Load the needed guidance

- Before you create, adopt, split, merge, substantially restructure or materially reshape product documentation (a Product Map, Product Spec, Behavioral Contract, Architecture Map, Ideas page or documentation-debt Task), write the spec of a text users' AIs read, such as a skill, or write a page this skill owns other than a Product Spec or the Product Map (which carry no verification section), read [documentation-model.md](references/documentation-model.md).
- For setup, brainstorm classification and parking, implementation context, release sync, audits (before the first maintained-content read) and drafts of user documentation, release notes or Product Facts, read only the section of [lifecycle-playbooks.md](references/lifecycle-playbooks.md) the work needs.
- When the workspace contains several products, a shared component changes, a Product Fact moves, or another documentation skill owns a downstream output, read [product-scope-and-seams.md](references/product-scope-and-seams.md).

## Keep human authority narrow and meaningful

- Administer templates, folders, links, classifications, drafts, parked ideas, routine sync, and safe metadata or link repair without asking, except in an audit alone.
- An audit inspects a bounded maintained set and reports its gaps; it repairs nothing, safe metadata and links included, unless the request also asks for repairs.
- Ask the user only for:
  - material ambiguity in product intent or a significant system boundary;
  - an unresolved conflict over which source is authoritative;
  - a consequential decision not already handled by the normal product or repository review;
  - deletion, irreversible overwrite, or another destructive consolidation.
- Record a direction already given without asking for it again.

The pre-release rule:
- Before release, base a user-documentation or release-note draft on approved, implemented or merged evidence only when it stays clearly labeled pre-release and cites the exact source revision.
- Draft Product Facts and marketing claims only from evidence meeting the Product Fact rule in [Stop before writing](#stop-before-writing).
- Keep every review the product or repository requires.

This skill acts only while an AI runs: it cannot observe GitHub or update Octopad after the AI stops. Never claim it enables background synchronization: that needs a separately authorized event or automation trigger.

## Work with the other documentation skills

- This skill owns product behavior, release truth, Product Facts, and each Product Overview except its Marketing section, which `manage-product-marketing` owns with ICP, positioning, pricing and approved claims.
- For what the other documentation skills own, read [Pass changes between owners](references/product-scope-and-seams.md#pass-changes-between-owners).
- For a pure marketing request, draft nothing here: open the `manage-product-marketing` skill when it is available; otherwise name that owner and hand the request over without inventing copy.

When owned product truth changes:
1. Update this family's canonical records and, in the same turn, the Product Overview's `offer_and_availability` when the change alters it.
2. Identify every affected downstream output, and hand each one to its owner.
3. When that owner's skill is available, the same request authorizes the downstream edit and its own gates are satisfied, open that skill and continue rather than leaving known stale text behind.

- On a correction or rollback, leave the Fact-to-output dependency visible, so affected messages can be reviewed without rewriting unrelated products or outputs.

## Administer the documentation system

- Keep one Product Overview per offer, one Product Map per product and one evolving Product Spec per significant system.
- You own the Overview's At a glance key `offer_and_availability`; hold it to the evidence the Product Fact rule ([Stop before writing](#stop-before-writing)) asks.
- For what each artifact holds, and when a Behavioral Contract, an Architecture Map or an Engineering Reference is warranted, read [documentation-model.md](references/documentation-model.md).
- When a context load makes no product choice, load the smallest slice needed.
