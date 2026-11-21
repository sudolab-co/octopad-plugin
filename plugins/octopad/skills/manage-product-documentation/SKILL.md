---
name: manage-product-documentation
description: "Use before judging why a product behaves as it does, even in one run, or whether or how to change it, when the user explores or settles how it behaves, when asked what it does today or whether a page still matches the code, when a test, a measurement, an incident or an analysis shows how a system really behaves or fails, when a system ships, rolls back or retires, before writing up a pull request, a release or user documentation, and before saying a change owes no documentation. A shipped skill is product behavior. Not for internal notes or marketing copy (manage-product-marketing)."
---
Version: 7.5.0

# Manage Product Documentation

- Keep a living account of what the user wants each part of the product to achieve and why, attributed, even before code exists.
- Organize and link the documents so the user's AI can find and apply the right context, without making the user administer the structure.

## Resolve the product first

Before selecting a document to change, establish the affected products by [Resolve product scope](references/product-scope-and-seams.md#resolve-product-scope); a workspace name, document or search result is not a product selection.

- Choose the owning system by the need it serves, not by its delivery mechanism (an AI instruction, a hook, a tool).
- Give a capability its own spec, linked from the affected specs, when its reader must understand it independently, with its own need, data or rules.
- Never split a spec for length alone: element subsections let a reader take a long spec in parts ([Write for the reader](#write-for-the-reader)).
- Recheck ownership as the design changes and before building.

## Work from product intent

Before you judge, diagnose or redesign a behavior, and before you choose how to serve a user need, establish the requested outcome and constraints from:
- the request;
- the owning Product Spec;
- the Tasks and records its Direction links for the work;
- the Decisions that change its scope.

When the user asks to redesign a system, its current choices and Decisions are what the design may replace, not limits on it: design the target from the need, then name each recorded Decision it would replace.

How much of the spec to read:
- A narrow fix whose cause is already known and that needs no product choice: only the spec's purpose, constraints and the clause it restores. Name that clause first.
- Otherwise, for a product choice, for a change that spans the product or whose boundaries are unclear, and when the spec has no subsection for the element you judge: the whole spec.
- To judge, quote or edit one or a few elements that have subsections:
  1. Read the outline (`pages` get with `outline: true`).
  2. In one call, read Need, Outcome, every section without subsections or larger than its heading and subsections together, the subsections the outline shows for those elements, and the `All elements` ones (`sections: ["Need", "Outcome", "<each such section>", "<element heading>", "All elements"]`; a heading returns every subsection that uses it).
  3. Read each part they cross-reference whose pointer bears on what you judge.
- When a full read is required, an outline, a section read, a summary or a truncated result is not one: retrieve the missing text, or name the access limit and leave dependent conclusions unresolved.
- Read other specs or history when a dependency, a contradiction or the request calls for them, not by default.

When you edit a spec you read in parts, use `content_updates` only, never `content`, and read the edited subsections back to check that the change landed there.

When no spec owns the behavior, say so, keep establishing the facts, and leave conclusions about its intended behavior unresolved.

Before you conclude or hand off, check the result against that intent, in the existing task, PR or reply, not in a new document or approval step:
- each need within the request: covered with evidence, still unmet, or out of the request with its reason;
- the source-defined scenarios it touches: which were checked and which were not;
- an accepted need the request does not cover: keep it visible, without making it an instruction to build it;
- a design or fix that a Known limits line bears on: say how it takes that limit into account.

Never narrow the request to fit the result.

- When you change or regroup the means, the need stays: name where it is now served, or the attributed Decision that retires or replaces it.
- Before your first change, record the spec's version id or `updated_at` on the task or PR as the baseline. Judge your edits against that revision, reconciled with material source changes and explicit user directions during the work.
- When the baseline is missing or its version has been pruned, name that gap and leave dependent conclusions unresolved.
- Record a direction already given without asking for it again; an unresolved authority conflict still follows step 4 of [Stop before writing](#stop-before-writing).
- For a required review, use these primary sources, not only the author's summary or rewritten spec.

When asked what a system does today, or whether a page still matches the code:
- take its intent from the spec;
- take its current behavior from code, tests, its Known limits and release evidence;
- name each gap as a defect or an unbuilt promise; never present intent as current behavior.

## Write for the reader

A Product Spec gives the AI or person who must decide, build, change or judge a system what code cannot: what the people it serves need, the result sought, where it is going, the choices already made and why, and what it must never do. Describe in it the intended product, built or not, with the limits work has established.

- Keep a line only if a reader without it could build the wrong thing, undo a choice or break a promise.
  - Leave out what the code does, how it does it, values and steps chosen while building (screens, wording, parameters, size limits, budgets, ordering) and delivery history (pull requests, revisions, reviews, releases): code, tests, the design document, Tasks and release records hold them.
  - Keep a value or an observed behavior only when it is the promise or the known limit itself.
  - Never invent a need or a reason to keep a line.
  - Example: not "`create` requires `title`; at most 80 characters" but "each item says in one line what it is for; input is never cut silently".
- Write intent (Need, Outcome, Direction, Choices) in short full sentences, each choice with its reason; write one bullet per promise or non-goal.
- Mark what is undecided `[open]`; never guess it.
- Always write Need and Outcome, `[open]` while unknown, so readers recognize a spec; omit other empty sections.
- Write no transitions, history or comments on sources.
- Write each fact once; link it elsewhere.
- Write in the page's language and the workspace's style.
- Put in each section only its own content, and everything else in its home, linked when still needed:

| Section | Holds | Never holds, and its home |
|---|---|---|
| Need | Who it serves and their situation, as job stories: "When <situation>, I want <motivation>, so <outcome>." | Personas; features. |
| Outcome | The result sought and the signal that shows it is reached. | Delivery status (Task). |
| Direction | Where the system is going beyond what exists: each accepted direction, with its Task or stream linked. | Progress, branches, test runs (Task, pull request); a replaced design (page versions). |
| Choices | Choices that shape the system, each with its because; a rejected alternative as a link to its Decision. | Who chose when (Decision); how code implements it. |
| Promises | What the system must always or never do for the people it serves: rules protecting their work, data or privacy, accessibility, safety and compatibility, and any guarantee they rely on; conditions and audience when limited. | How a promise is kept (code, tests); a defect breaking it (Task, linked). |
| Non-goals | What it could reasonably do and deliberately does not, with the reason; neighbouring owners, linked. | Negated bugs ("does not crash"). |
| Known limits | What work has established about how the system really behaves or where it fails, that whoever designs, changes or judges it must take into account: one bullet per limit, saying what it imposes, with its source and date; bulk detail in a linked Engineering Reference. | A defect to fix (Task, linked); a measurement that constrains no design (the test or script that measures it); how the code works. |
| Open questions | Undecided points, each `[open]`; ideas not yet accepted, each `[idea <date>]` with its direction and the supporting record to read before assessing or building it. | Exploration narrative (supporting record); a settled choice (Choices, Decision). |
| Links | Product Map, Architecture Map, Decisions, supporting records, contracts, related specs, design document, code entry point. | Anything else. |

- When a section covers several elements of the product (a screen, a tool, a step of a flow, a group of rules), give each element a `###` subsection, under the same heading in every section where it appears, so a reader can fetch one element across the spec.
  - Put a rule that holds for every element in a subsection headed `All elements`, in every language.
  - In a section with subsections, write no text outside them.
  - Put a rule for some elements but not all under one of them, and cross-reference it from each of the others.
  - When an element's rule depends on another element, say so with a cross-reference naming that element's section and heading.
  - When you write to a section that covers several elements without subsections, read the whole spec and give that section its subsections in the same edit: moving its lines there changes no content. Read it back and check that every old line survived.
- In a spec of a text users' AIs read, such as a skill, keep its promises with their conditions, exceptions, authority boundaries and failure cases, and link that text at its released revision for the mechanics; never restate it rule by rule.
- Keep no changelog or history page per spec unless the workspace's rule keeps one: chronology lives on the release record or changelog, replaced text in page versions.
- When content leaves a spec (the preservation rule):
  - Remove delivery history, and text whose home (code, tests, Task, Decision) you have read and found holding it, without a list.
  - Before anything else leaves, a need, choice, promise, constraint, scenario, rationale or unresolved finding included, list each one on the Task, pull request or reply, never on the spec, as kept, moved (where), replaced or unresolved. A move between sections or a link change needs no list.
  - Write moved text to its destination and read it back first.
  - Give a substantive rewrite a reviewer who did not write it, who checks both directions: nothing needed lost, nothing kept that the "Keep a line only if" rule rejects.

## Load the needed guidance

- Before you create, adopt, split, merge or substantially restructure product documentation, read [references/documentation-model.md](references/documentation-model.md).
- When you create or materially reshape a Product Map, Product Spec, Behavioral Contract, Architecture Map, Ideas page or documentation-debt Task, read [references/artifact-shapes.md](references/artifact-shapes.md).
- For setup, brainstorm classification and parking, implementation context, PR or release sync, audits and downstream drafts, read [references/lifecycle-playbooks.md](references/lifecycle-playbooks.md). Load only the section the current work needs; for an audit, load its section before the first maintained-content read.
- When the workspace contains several products, a shared component changes, a Product Fact moves, or another documentation skill owns a downstream projection, read [references/product-scope-and-seams.md](references/product-scope-and-seams.md).

## Operate with evidence

Classify the work before writing:

- create: establish the missing owner after proving none exists;
- refresh: replace stale current truth in the existing owner while preserving history;
- audit: inspect a bounded maintained set and report its gaps; it repairs nothing, safe metadata and links included, unless the request also asks for repairs;
- synchronize: propagate a changed source through this family's projections and hand other outputs to their owners.

Verification sections:
- Give a Product Spec (intent and its known limits) and the Product Map (an index) no verification section.
- Give every other page this skill owns one, in the page or, for published user documentation, in its release record.
- Write one line per group of claims checked together, naming scope, source and exact revision, date, method and limits.
- Let a new check replace the lines it covers and no other.

## Stop before writing

The Product Fact rule:
- Before you create or activate a Product Fact, read evidence, retrieved or supplied, competent to prove its exact claim, product scope and state.
  - A claim of shipped or released behavior, or of software's current capabilities or availability, needs verified release evidence, whether or not its wording mentions a release.
  - A fact about a non-software offer, service or physical specification needs the relevant authoritative decision, service record or technical evidence for its exact state; approval or validation alone proves neither availability nor launch.
  - A named artifact, or an assurance that evidence is available, is a pointer, not proof.
- When the required evidence cannot be found, create no Fact or dependent approved copy, and name the gap.

1. Before writing:
   - Confirm the connected Octopad organization and the relevant workspace.
   - Identify the affected product or products from current evidence; do not equate product, repository, project or workspace.
   - Confirm each repository and branch from current evidence, and follow their local instructions.
   - Before you create a Page, file it in the Product folder of its scope.
2. Before you create, and before you declare something absent, search:
   - Read likely matches, not only titles.
   - Reuse and link existing pages, streams, tasks, decisions, repository docs and PRs.
   - Supersede or redirect duplicates non-destructively, after preserving their unique facts and links; never delete content or overwrite history automatically.
3. Before you write a negative, prove it. `No documentation impact` is a claim about the maintained set for every affected product:
   1. Harvest terms from the changed lines and each touched file's header comments.
   2. List that maintained set without a title filter and read its descriptions or summaries.
   3. Open likely candidates, and supplement the inventory with search over the harvested names and product terms.
   4. Record the receipt beside the claim, on one line: affected product or products, terms searched, pages inventoried, candidates read or `no candidate`, and either the document the change cites or `the change cites no document`.
   - Search alone, or an inventory of the wrong product, proves nothing.
   - When behavior changed while no page owns it, that is a gap: record one documentation-debt item instead of closing the question.
4. Treat unknown facts as unknown:
   - Ask only when an unresolved system boundary, product intent or authority conflict would materially change the result.
   - When an explicit unresolved authority conflict affects this change, preserve both sources and ask, instead of choosing or rewriting either one: such a conflict always meets this bar.
   - Otherwise, use a concise `Unknown`, `Unverified` or documentation-debt marker and keep working.
5. Never fabricate:
   - Never fabricate architecture, behavior, ownership, dates, metrics, source revisions, release state or customer evidence.
   - Derive technical facts from current code and repository configuration when available.
6. Claims of state:
   - In a spec, never claim a system is built or released, beyond what a Known limits line establishes with its source and date; put that claim in user documentation or a Product Fact, with its evidence.
   - Do not present an old observation as current.
   - In an At a glance block, write answers only; keep their provenance in the page body.
7. Minimize persisted evidence:
   - Never copy private local paths, personal or customer identifiers, or unnecessary source bodies into Octopad.
   - Prefer a safe repository link, public revision or redacted summary that proves the claim without exposing unrelated data.

## Administer the documentation system

- Keep one Product Overview per offer, one Product Map per product and one evolving Product Spec per significant system.
- You own the Overview's At a glance key `offer_and_availability`; hold it to the evidence a Product Fact needs.
- For what each artifact holds, and when a Behavioral Contract, an Architecture Map or an Engineering Reference is warranted, read [documentation-model.md](references/documentation-model.md).

- When a context load makes no product choice, load the smallest slice needed.
- For implementation, follow [Implementation context retrieval](references/lifecycle-playbooks.md#implementation-context-retrieval).

## Capture exploration without waiting for a build decision

During product discussion, silently classify the likely documentation impact as `no impact`, `existing-system change`, `new system` or `technical-only`, and make the smallest useful update for that class ([definitions and updates](references/lifecycle-playbooks.md#brainstorm-and-design-maturity)).

A substantive design discussion is different from a passing thought. Once the discussion develops a real user problem, system boundary, behavior, contract or meaningful alternative, in the same turn:
1. Create or adopt the owning Product Spec.
2. Add an `[idea]` line to its Open questions holding the direction and open questions, not the discussion, or update the line the subject already has.
3. Put a choice between alternatives in a Decision.
4. Put exploration or detailed design with lasting value in a supporting record linked from the entry. Keep in that record what the exploration established, never its raw material (a transcript, the full output of a research or an analysis); for the original, open the `octopad-knowledge-evidence` skill, section "Where knowledge is written". Before you assess, accept or build the idea, read that record.
5. Add its Product Map line.
6. Remove any duplicate parked entry, preserving its unique content in the spec.

- Record the thinking without claiming approval or delivery, and without inventing an execution Task.
- On acceptance, move the line to Direction or Choices in that same spec; work tracking owns execution.

At the end of a brainstorm, and whenever an idea is raised in passing during other work, park what exploration leaves behind: each remaining passing idea the user engaged with and left open, without asking, under the [parking rule](references/lifecycle-playbooks.md#brainstorm-and-design-maturity).

## Record what work establishes about a system

When work establishes a limit of a system (through a test, a measurement, an incident, a diagnosis, an analysis or an audit of that system), meaning a way it really behaves or fails that whoever later designs, changes or judges it must take into account:
- First search the spec and the records it links: when a limit is already written there, even as the reason of another line, move it under Known limits or update it there with the new evidence, and never present it as a discovery.
- In the same turn and without asking, write it as a line under Known limits in the owning spec, even while that work stays open; a task comment, a report or a note alone does not record it.
- Put a limit several systems share in the spec of the system it belongs to, linked from the others.
- When no spec owns the system, record the limit as Key Information on the work's stream or task, say no spec owns it, and file one documentation-debt item.
- When later evidence shows a limit no longer holds, replace or remove its line and name that evidence on the Task.

Not limits: a result that confirms the intended behavior, a defect to fix, a measurement that constrains no design.

Recording a limit is not a repair of the documentation: an audit of the documentation set still only reports.

## Preserve lifecycle and product scope

- Keep `idea`, `explored`, `accepted`, `implemented`, `merged`, `released` and `retired` distinct. Never infer one from another.
- If an existing record uses `proposed` or `approved`, preserve its vocabulary while mapping it explicitly to the same evidence boundary.
- In a spec, use only two labels: `[idea <date>]`, in Open questions, and `[open]` for what is undecided, as [Write for the reader](#write-for-the-reader) says; move an accepted line to Direction, Choices or Promises, unlabelled.
- Keep implementation, merge and release states on Tasks, pull requests, release records and Product Facts.

- Code or tests can prove implementation, not approval or release.
- A pull request can prove a proposed source revision.
- A merge proves only that a revision reached its base branch.
- Mark behavior as released or shipped only after verifying the repository's actual release policy and release evidence. A merge is not a production release unless that policy proves it.

- Attribute every lifecycle claim and Product Fact to its product.
- A shared component can have one canonical spec, but deployment, activation, rollback, availability and claim scope advance separately for each consuming product: never let evidence for one product promote another.

The delivery rule:
- Record progress, pull requests, heads, tests, reviews and releases on the Task or pull request; none changes a spec.
- Change a spec only when a need, the outcome, a direction, a choice, a promise or a non-goal changes, or a known limit is established or lifted, including when building reveals one. A version bump alone changes no spec.
- When a change needs no spec edit, still name the spec in the repository's documentation-impact mark.
- When a needed spec edit is blocked, name the spec and blocker there, and create or reuse documentation-debt work.
- An `[idea]` or `[open]` line is not delivery: write an `[idea]` line under [Capture exploration without waiting for a build decision](#capture-exploration-without-waiting-for-a-build-decision) and an `[open]` mark under [Write for the reader](#write-for-the-reader).

When product work needs a Task, reuse suitable existing work and follow the active kernel and server contract for its shape, hierarchy, and dependencies.

## Pull requests

Record the change's documentation impact in the PR body: the spec it names or changes, as [Preserve lifecycle and product scope](#preserve-lifecycle-and-product-scope) says, or `No documentation impact` with the receipt of [Stop before writing](#stop-before-writing) step 3.

- When you draft a PR body, outlines and groundwork included, end it with exactly one `Octopad-Task:` line. Put it on its own line, outside comments, code blocks and quotations, with the task's bare id: a link resolves only on octopad.app.
- Take the task id from Octopad, never from a guess.
- Name a task with no open subtask: a merge into the repository's default branch closes the task the line names, and a task that still has an open subtask may wait in `pending_review` instead. A deliverable that needs several pull requests is a parent with one subtask per pull request.
- A merge into any other branch, a test or pre-production one included, leaves the task open: name the task there too, never `none`, and again on the PR that carries that work into the default branch.
- Write `Octopad-Task: none: <reason>` only when no task applies.
- Before you hand the PR body over, check that it holds exactly one `Octopad-Task:` line.
- Once a pull request to the repository's default branch is open and ready for review, set its task `pending_review`: merging it closes the task, so get its acceptance before the merge.
- To link an open pull request to its task, or to fix its line, edit the body (for example with `gh pr edit`): Octopad reads the line again whenever the body changes.

## Work with the other documentation skills

- This skill owns product behavior, release truth, Product Facts, and each Product Overview except its Marketing section, which `manage-product-marketing` owns with ICP, positioning, pricing and approved claims.
- For what the other documentation skills own, read [Pass changes between owners](references/product-scope-and-seams.md#pass-changes-between-owners).

For a pure marketing request, do not draft the output here: open the `manage-product-marketing` skill when it is available; otherwise name that owner and hand the request over without inventing copy.

When owned product truth changes:
1. Update this family's canonical records and, in the same turn, the Product Overview's `offer_and_availability` when the change alters it.
2. Identify every affected downstream output, and hand each one to its owner.
3. When that owner's skill is available, the same request authorizes the downstream edit and its own gates are satisfied, open that skill and continue rather than leaving known stale text behind.

- Product Facts are the operational seam: produce and verify them per product here; `manage-product-marketing` consumes them and owns the claims derived from them.
- On a correction or rollback, leave the Fact-to-output dependency visible, so affected messages can be reviewed without rewriting unrelated products or outputs.

## Keep human authority narrow and meaningful

- Administer templates, folders, links, classifications, drafts, parked ideas, routine sync, and safe metadata or link repair without asking, except in an audit alone, which only reports.
- Ask the user only for:
  - material ambiguity in product intent or a significant system boundary;
  - an unresolved conflict over which source is authoritative;
  - a consequential decision not already handled by the normal product or repository review;
  - deletion, irreversible overwrite, or another destructive consolidation.

The pre-release rule:
- Before release, base a user-documentation or release-note draft on approved, implemented or merged evidence only when it stays clearly labeled pre-release and cites the exact source revision.
- Draft Product Facts and marketing claims only from evidence meeting the Product Fact rule in [Stop before writing](#stop-before-writing).
- Keep every review the product or repository requires.

## State the automation boundary honestly

This skill acts only while an AI runs; it cannot observe GitHub or update Octopad after the AI stops. Never claim it enables background synchronization: that needs a separately authorized event or automation trigger.
