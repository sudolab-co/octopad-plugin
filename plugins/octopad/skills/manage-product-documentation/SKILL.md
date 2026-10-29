---
name: manage-product-documentation
description: Keep one or more products' documentation true to the work as it happens. In a multi-product workspace, establish the affected product scope before choosing a page; the first matching document does not establish scope. Load it when product behavior is explored, assessed, decided, implemented, merged, released, rolled back, or retired; for product ideas, specs, contracts, architecture, user documentation, release notes, and Product Facts; and before claiming no product or documentation impact. It owns product truth and passes claim-safe facts to product marketing. A change confined to the AI's own working instructions, internal notes, or pure marketing does not need it, but a skill or AI behavior a product ships is product behavior; build tooling still needs an impact check when durable architecture or release behavior moves.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "manage-product-documentation"` when you open this skill.

Version: 6.8.0

# Manage Product Documentation

Keep a living account of what the user wants each part of the product to achieve and why, attributed, even before code exists; code, tests, Tasks and release records hold what exists and when it shipped. Organize and link the documents so the user's AI can find and apply the right context without making the user administer the structure.

## Resolve the product first

Before selecting a document to change, establish the affected products by [Resolve product scope](references/product-scope-and-seams.md#resolve-product-scope); a workspace name, document or search result is not a product selection.

## Work from product intent

Before judging, diagnosing or redesigning a behavior, and before choosing how to serve a user need, establish the requested outcome and constraints from the request, the owning Product Spec read in full, the Tasks and records its Direction links for the work, and Decisions that change its scope. A narrow fix whose cause is already known may use the spec's purpose, constraints and the clause it restores; name that clause before taking this shortcut. If the fix requires a product choice or its boundaries are unclear, read the whole owning spec. When no spec owns the behavior, say so, keep establishing the facts, and leave conclusions about its intended behavior unresolved. A summary or truncated result is not a full read: retrieve the missing text, or name the access limit and leave dependent conclusions unresolved. Read other specs or history when a dependency, contradiction or the request calls for them, not by default.

Before concluding or handing off, check the result against that intent: each need within the request covered with evidence, still unmet, or out of the request with its reason; which source-defined scenarios it touches were checked and which were not. An accepted need the request does not cover stays visible without becoming an instruction to build it. Never narrow the request to fit the result. Use the existing task, PR or reply, not a new document or approval step.

Changing or regrouping the means does not retire a need: name where it is now served, or the attributed Decision that retires or replaces it. Before your first change, record the spec's version id or `updated_at` on the task or PR as the baseline, and judge your edits against that revision, reconciled with material source changes and explicit user directions during the work. If the baseline is missing or its version has been pruned, name that gap and leave dependent conclusions unresolved. Record a direction already given without asking for it again; unresolved authority conflicts still follow step 4 of [Stop before writing](#stop-before-writing). A required review uses these primary sources, not only the author's summary or rewritten spec.

## Write for the reader

A Product Spec gives the AI or person who must decide, build, change or judge a system what code cannot: what the people it serves need, the result sought, where it is going, the choices already made and why, and what it must never do. It describes the intended product, built or not.

- Keep a line only if a reader without it could build the wrong thing, undo a choice or break a promise. What the code does, how it does it, values and steps chosen while building (screens, wording, parameters, limits, budgets, ordering) and delivery history (pull requests, revisions, reviews, releases) never pass: code, tests, the design document, Tasks and release records hold them. A value stays only when it is the promise itself. Never invent a need or a reason to keep a line. Not "`create` requires `title`; at most 80 characters" but "each item says in one line what it is for; input is never cut silently". Not "at most 5 Product Overviews share 3,000 characters" but "identity comes before offers, so many offers cannot crowd out what the company is".
- Write intent (Need, Outcome, Direction, Choices) in short full sentences, because a reason needs its "because"; Promises and Non-goals one bullet each. Mark what is undecided `[open]`; never guess it. No transitions, history or comments on sources. A fact lives once; elsewhere it is linked. Write in the page's language and the workspace's style.
- Each section holds only its own content; everything else goes to its home, linked when still needed:

| Section | Holds | Never holds, and its home |
|---|---|---|
| Need | Who it serves and their situation, as job stories: "When <situation>, I want <motivation>, so <outcome>." | Personas; features. |
| Outcome | The result sought and the signal that shows it is reached. | Delivery status (Task). |
| Direction | Where the system is going beyond what exists: each accepted direction, with its Task or stream linked. | Progress, branches, test runs (Task, pull request); a replaced design (page versions). |
| Choices | Choices that shape the system, each with its because; a rejected alternative as a link to its Decision. | Who chose when (Decision); how code implements it. |
| Promises | What the system must always or never do for the people it serves: rules protecting their work, data or privacy, accessibility, safety and compatibility, and any guarantee they rely on; conditions and audience when limited. | How a promise is kept (code, tests); a defect breaking it (Task, linked). |
| Non-goals | What it could reasonably do and deliberately does not, with the reason; neighbouring owners, linked. | Negated bugs ("does not crash"). |
| Open questions | Undecided points, each `[open]`; ideas not yet accepted, each `[idea <date>]` with its direction and the supporting record to read before assessing or building it. | Exploration narrative (supporting record); a settled choice (Choices, Decision). |
| Links | Product Map, Architecture Map, Decisions, supporting records, contracts, related specs, design document, code entry point. | Anything else. |

- A spec of a text users' AIs read, such as a skill, holds its promises and links that text at its released revision for the mechanics, never restating it rule by rule.
- No changelog or history page per spec unless the workspace's rule keeps one: chronology lives on the release record or changelog, replaced text in page versions.
- Text the first rule rejects leaves without a list. Before a need, outcome, direction, choice, promise, non-goal or open question leaves a spec (not for a move between sections or a link change), list on the Task, pull request or reply, never on the spec, each one as kept, moved (where), replaced or unresolved; write moved text to its destination and read it back first. A substantive rewrite also gets a reviewer who did not write it, who checks both directions: nothing needed lost, nothing kept that the first rule rejects.

## Load the needed guidance

- Read [references/documentation-model.md](references/documentation-model.md) before creating, adopting, splitting, merging, or substantially restructuring product documentation.
- Read [references/artifact-shapes.md](references/artifact-shapes.md) when creating or materially reshaping a Product Map, Product Spec, Behavioral Contract, Architecture Map, Ideas page, or documentation-debt Task.
- Read [references/lifecycle-playbooks.md](references/lifecycle-playbooks.md) for setup, brainstorm classification and parking, implementation context, PR or release sync, audits, and downstream drafts. Load only the section the current work needs; for an audit, load its section before the first maintained-content read.
- Read [references/product-scope-and-seams.md](references/product-scope-and-seams.md) when the workspace contains several products, a shared component changes, a Product Fact moves, or another documentation skill owns a downstream projection.

## Operate with evidence

Classify the work before writing; the documentation family reuses these four classes:

- **create:** establish the missing owner after proving none exists;
- **refresh:** replace stale current truth in the existing owner while preserving history;
- **audit:** inspect a bounded maintained set, repair the unambiguous, and record gaps;
- **synchronize:** propagate a changed source through this family's projections and hand other outputs to their owners.

A Product Spec carries no verification section: it states intent, and code proves what exists. The Architecture Map and Product Facts keep one verification line per group of claims checked together, naming scope, source and exact revision, date, method and limits; a check replaces the lines it covers and no other. The Product Map indexes only and carries none.

## Stop before writing

- Create or activate a Product Fact only after reading evidence, retrieved or supplied, competent to prove its exact claim, product scope and state. Claims of shipped or released behavior, or of software's current capabilities or availability, require verified release evidence, whether or not their wording mentions a release. Facts about a non-software offer, service or physical specification require the relevant authoritative decision, service record or technical evidence for their exact state; approval or validation alone proves neither availability nor launch. A named artifact or an assurance that evidence is available is a pointer, not proof. If the required evidence cannot be found, create no Fact or dependent approved copy and name the gap.

1. Confirm the connected Octopad organization and relevant workspace before writing. Identify the affected product or products from current evidence; do not equate product, repository, project, or workspace. Confirm each repository and branch from current evidence. Follow their local instructions. Before creating a Page, file it in the Product folder of its scope, and follow its page-preparation guidance; a missing organization folder is created by an admin's AI, while a member's AI leaves the page unfiled and says so.
2. Search before creating, and before declaring absence. Read likely matches, not only titles. Reuse and link existing pages, streams, tasks, decisions, repository docs, and PRs. Supersede or redirect duplicates non-destructively after preserving unique facts and links; never automatically delete content or overwrite history.
3. Prove a negative before writing one. `No documentation impact` is a claim about the maintained set for every affected product. Harvest terms from the changed lines and each touched file's header comments. First list that maintained set without a title filter and read its descriptions or summaries; then open likely candidates and supplement the inventory with search over the harvested names and product terms. Record the receipt beside the claim, on one line: affected product or products, terms searched, pages inventoried, candidates read or `no candidate`, and either the document the change cites or `the change cites no document`. Search alone, or an inventory of the wrong product, proves nothing. Behavior that changed while no page owns it is a gap: record one documentation-debt item instead of closing the question.
4. Treat unknown facts as unknown. Ask only when an unresolved system boundary, product intent, or authority conflict would materially change the result. An explicit unresolved authority conflict affecting this change always meets this bar: preserve both sources and ask instead of choosing or rewriting either one. Otherwise use a concise `Unknown`, `Unverified`, or documentation-debt marker and keep working.
5. Never fabricate architecture, behavior, ownership, dates, metrics, source revisions, release state, or customer evidence. Derive technical facts from current code and repository configuration when available.
6. A spec never claims a system is built or released; that claim belongs in user documentation or a Product Fact, with its evidence. Do not present an old observation as current. An At a glance block holds answers only: their provenance stays in the page body.
7. Minimize persisted evidence. Never copy secrets, credentials, private local paths, personal or customer identifiers, or unnecessary source bodies into Octopad. Prefer a safe repository link, public revision, or redacted summary that proves the claim without exposing unrelated data.

## Administer the documentation system

Use this asymmetric structure:

- Keep one **Product Overview** per offer, a head page (`head_type: product_overview`; at most 10 live per organization and per workspace) for purpose, experience, design pillars, non-goals and relationships above system specs, with a Marketing section that `manage-product-marketing` writes. Products sold together to one audience at one price share one; a product gets its own only when its audience or its price differs. Its At a glance key `offer_and_availability` is yours, held to the evidence a Product Fact needs; `audience_and_need`, `promise` and `conditions` are product marketing's.
- Keep exactly one **Product Map** per product: the index of every system, nothing else (shape in [artifact-shapes.md](references/artifact-shapes.md)). Adopt an existing index when it already serves as the entry point.
- Keep one evolving **Product Spec** for each significant product system.
- Add a **Behavioral Contract** only when risk, ambiguity, or cross-boundary precision warrants one.
- Keep one short canonical **Architecture Map** in Octopad. Put it in a connected repository instead when the team wants architecture to change in the same review as the code; then keep the Octopad entry as its link, ownership, status, related systems, and verification metadata. Either way, name the one canonical home and do not maintain both.
- Add targeted **Engineering References** only for stable, important knowledge that cannot be cheaply derived from code. Never create one per Product Spec by default.

Keep durable knowledge in Pages, or in the repository docs that already hold it. Keep finite execution, owners, and current status in existing work streams and Tasks. Reuse an existing Octoplan-created stream or task graph when present; do not require Octoplan and do not create a parallel planning system.

When a context load makes no product choice, load the smallest slice needed; for implementation, follow [Implementation context retrieval](references/lifecycle-playbooks.md#implementation-context-retrieval).

## Capture exploration without waiting for a build decision

During product discussion, silently classify the likely documentation impact as `no impact`, `existing-system change`, `new system` or `technical-only`, and make the smallest useful update for that class ([definitions and updates](references/lifecycle-playbooks.md#brainstorm-and-design-maturity)).

A substantive design discussion is different from a passing thought. Once the discussion develops a real user problem, system boundary, behavior, contract, or meaningful alternative, in the same turn: create or adopt the owning Product Spec and add an `[idea]` line to its Open questions holding the direction and open questions, not the discussion, or update the line the subject already has; a choice between alternatives goes to a Decision, and exploration or detailed design with lasting value to a supporting record linked from the entry, which must then be read before assessing, accepting or building the idea; add its Product Map line; then remove any duplicate parked entry while preserving its unique content in the spec. It records the thinking without claiming approval or delivery and without inventing an execution Task. On acceptance, move it to Direction or Choices in that same spec; work tracking owns execution.

Park what exploration leaves behind: at the end of a brainstorm, and whenever an idea is raised in passing during other work, park each remaining passing idea the user engaged with and left open, without asking, under the [parking rule](references/lifecycle-playbooks.md#brainstorm-and-design-maturity).

## Preserve lifecycle and product scope

Keep `idea`, `explored`, `accepted`, `implemented`, `merged`, `released`, and `retired` distinct. Never infer one from another. If an existing record uses `proposed` or `approved`, preserve its vocabulary while mapping it explicitly to the same evidence boundary. A spec carries only `[idea <date>]` and `[open]`, in Open questions; an accepted line moves to Direction, Choices or Promises unlabelled. Implementation, merge and release states live on Tasks, pull requests, release records and Product Facts.

- Code or tests can prove implementation, not approval or release.
- A pull request can prove a proposed source revision.
- A merge proves only that a revision reached its base branch.
- Mark behavior as released or shipped only after verifying the repository's actual release policy and release evidence. A merge is not a production release unless that policy proves it.

Attribute every lifecycle claim and Product Fact to its product. A shared component can have one canonical spec, but deployment, activation, rollback, availability, and claim scope advance separately for each consuming product. Evidence for one product never promotes another.

Record progress, pull requests, heads, tests, reviews and releases on the Task or pull request; none changes a spec. Change a spec only when a need, the outcome, a direction, a choice, a promise or a non-goal changes, including when building reveals one; a version bump alone changes no spec. A change needing no spec edit still names the spec in the repository's documentation-impact mark; if a needed spec edit is blocked, name the spec and blocker there and create or reuse documentation-debt work.

When product work needs a Task, reuse suitable existing work and follow the active kernel and server contract for its shape, hierarchy, and dependencies.

## Work with the other documentation skills

Product documentation owns product behavior, release truth, Product Facts, and each Product Overview except its Marketing section. Product marketing consumes Product Facts and owns that section, with ICP, positioning, pricing, campaigns, approved claims, and their messages. Activity context owns business-level context and the Activity Overview. Technical writing improves technical and user documentation without deciding its facts or evidence state.

For a pure marketing request, do not draft the output here. Load product marketing when it is available; otherwise name that owner and hand the request over without inventing copy.

When owned product truth changes, update this family's canonical records, and in the same turn the Product Overview's `offer_and_availability` when the change alters it, then identify every affected downstream output. Hand each one to its owner. If that skill is available, the same request authorizes the downstream edit, and its own gates are satisfied, load it and continue rather than leaving known stale text behind.

Product Facts are the operational seam: this skill produces and verifies them per product; product marketing consumes them and owns claims derived from them. A correction or rollback must leave the Fact-to-output dependency visible so affected messages can be reviewed without rewriting unrelated products or outputs.

## Keep human authority narrow and meaningful

Administer templates, folders, links, classifications, drafts, parked ideas, routine sync, and safe metadata or link repair without asking. Ask the user only for:

- material ambiguity in product intent or a significant system boundary;
- an unresolved conflict over which source is authoritative;
- a consequential decision not already handled by the normal product or repository review;
- deletion, irreversible overwrite, or another destructive consolidation;
- approval to publish externally.

Do not automatically publish user docs, release notes, Product Facts, or marketing copy. Before release, user-documentation and release-note drafts may use approved, implemented, or merged evidence only when they remain clearly labeled pre-release and cite the exact source revision. Draft Product Facts and marketing claims only from evidence meeting the Product Fact rule in [Stop before writing](#stop-before-writing). Preserve every applicable review and publication gate.

## State the automation boundary honestly

This skill acts only while an AI runs; it cannot observe GitHub or update Octopad after the AI stops. Never claim it enables background synchronization: that needs a separately authorized event or automation trigger.
