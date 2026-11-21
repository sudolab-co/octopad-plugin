---
name: manage-activity-context
description: "Use when the user explains or revises why an activity or project exists, whom it serves, its relationships, strategy or constraints; when the user says people or organizations join it, then update the Overview without asking anything; or when its Activity Overview, or an untyped Company Overview, no longer matches. Not for market evidence (manage-market-intelligence) or an offer's marketing (manage-product-marketing)."
---
Version: 8.2.0

# Purpose and boundaries

Answer: what are we trying to accomplish, for whom, through what activity, and under which durable choices and constraints?
- Do not turn a profile into a required organization type or maturity ladder.

Own durable activity context and the Activity Overview. Leave to their owners:
- product behavior: `manage-product-documentation`;
- customer and market positioning and commercial messaging: `manage-product-marketing`;
- external market evidence: `manage-market-intelligence`;
- execution state: goals, streams and tasks.

- Software needs product documentation whether sold, donated, experimental or used internally.
- Do not create commercial documentation merely because something is software.

Before deciding where context belongs, read [adaptation](references/adaptation.md) whenever:
- who acts, who benefits, who funds or who owns is unclear;
- the activity is not a business selling an offer;
- or the change would create a page or touch more than one scope.

When participants, purpose, organization or use change, read [evolution](references/evolution.md).

Use both as decision aids, not forms to fill.

# Establish the minimum context

1. Interpret the request. Before any write, know which case you are in:
   - In a discussion (the user explores and has not settled) or an audit, change no Overview until the user's confirmation. In an audit, propose the change that closes each gap you find, and keep the findings on a working page of the task or stream it serves.
   - In a capture (the user states or revises the activity's context), a refresh or a synchronization, make only the requested changes, without asking.
   - When a capture holds several unrelated ideas, write each where it belongs, then say where and ask whether to adjust.
   - State material scope assumptions.
   - When the user let you draft, add faithful, minimal provenance within the scope and audience they authorized, without asking.
   - A later repair never authorizes an earlier out-of-scope write.

2. Before deciding the change, read the Activity Overview of the affected scope, with its At a glance block, and relevant context owners, plus available onboarding facts.
   - A listing of page titles is not this read; reading the page does not authorize changing it.
   - Search before declaring an owner absent: inaccessible is not absent.
   - Reuse the facts these sources state clearly enough instead of asking for them.
3. Separate the actor, activity, project, built solution, beneficiaries and contribution to value.
   - Distinguish funding from selling that solution.
   - Identify only the relationships needed for this request; do not create a relationship registry.
4. Locate the authoritative section for each changed question. An Activity Overview, charter, README or brief can own context.
   - Preserve that owner's identity; a familiar page type is not a reason to duplicate it.
   - You may adopt a custom page explicitly for a named question, after reading it; adoption is scoped, not automatic maintenance of all custom content.
5. Use the smallest adequate document.
   - Keep directly captured context in the Activity Overview if it remains clear and appropriately shared.
   - Create a separate activity or project brief only when an independent durable question, audience, scope or growing detail warrants it.
   - Create no compulsory Brief, empty skeleton, or second Activity Overview.

Before mutation, distinguish changed facts, the At a glance keys they alter, and unchanged pages; write only the first two.
- Treat a statement that another project remains unchanged as a preservation constraint, not a request to restate it in that project's page.
- Opening another skill to understand an interface does not expand the assignment: updating a solution's purpose alone does not require a product map or specification.
- Hand off product or commercial work only when an actual unresolved request needs that owner, not automatically when software or a sale is mentioned.

# The Activity Overview and its At a glance block

The Activity Overview is the Activity family's head page (`head_type: activity_overview`): one for the organization, and one in each workspace that is an activity of its own, such as a client mission or a personal project.
- Find it by its type, whatever its title.
- Onboarding seeds the organization's with every At a glance key `missing`: fill that page, never a second one.
- File Activity pages in the Activity folder of their scope.

Each session opens on the At a glance blocks of the organization's head pages and its workspace's, binding constraints first and whole; the body is read on demand. Write a block through the `pages` tool's `at_a_glance` parameter. The Activity Overview's keys:

- `what_we_do`, `for_whom`, `why`: the activity, whom it serves and what it is for.
- `binding_constraints`: only the durable constraints every session must respect.
- `who_decides`: a responsibility summary, never a member roster.

Each key holds `missing`, `not applicable` or an answer the page supports, its essential point first.
- Write `missing` for each key the person has not given, and go on.
- Ask for a fact, who decides included, only when a step other than writing this page depends on it, such as choosing a recipient or a price.
- When the user says people or organizations join the activity, update the Overview and ask nothing. A join an audit finds waits for the user's confirmation like the audit's other gaps.
- When a change you make on this page or elsewhere alters what the At a glance block says, update it in the same turn.
- Keep answers only in the block: sources, detail and history stay in the body, beside the facts they support.
- Put offers and their prices in each offer's Product Overview, not here.
- An organization-level block is read by every member: keep client or project detail in its workspace's Activity Overview.

# Cut-over from a Company Overview

An organization whose sessions still open on an untyped Company Overview switches to the Organization Overview when that page becomes its Activity Overview.
- When you work on the organization's context, offer the cut-over.
- Only an organization admin's AI can carry it out, since retyping an organization page is admin-only. As a member's AI, say so and create no organization Activity Overview beside it.
- Before carrying it out, read [the cut-over steps](references/company-overview-cut-over.md).

# Scope, access and durable change

Context can concern a person, collective, organization, client, mission or project; relationships need not form a single tree.
- Infer the relevant scope from evidence, explain consequential assumptions, and clarify ambiguity before mutation.
- Platform scopes and permissions remain authoritative: when the needed separation is unavailable, report it rather than simulate privacy with titles.

- Keep org-wide context safe for everyone who can read it. “Useful to everyone” does not authorize broader sharing.
- Participation, ownership, legal status and access are separate facts. Never infer invitations, permission changes, ownership transfers or publication authority from “we are a team now.”
- Propose scope changes with their visibility consequences; do not move, widen, narrow or archive material without the required explicit authorization.

Preserve project identity and sibling projects through evolution.
- A new participant, legal entity, paying customer or use case changes only the affected facts and relationships. It does not require restarting onboarding, rewriting the entire activity, or following a startup progression.
- Keep current established context in the body; history belongs in available version records and linked Decisions.
- Preserve relevant earlier choices without silently overwriting history.
- Keep speculative directions visibly provisional; evidence of use is not a decision to adopt a strategy.
- Record consequential chosen direction through the available Decision workflow, or report that recording remains pending.

# Exclusions and preservation rules

- Keep financial models, budgets, runway, legal text, personnel records, operating procedures, internal policies, supplier details and support answers out of these core context summaries. Leave them with their authorized specialist or ordinary workspace owners; a brief may link to them, an At a glance block never does.
- Do not generate legal or financial artifacts here.
- A safe responsibility summary is not a copied member roster.
- A durable context constraint explains a meaningful boundary on choices. Keep detailed rules for how work is performed in their process owner; summarize only their contextual consequence when useful.
- Persist no secrets, credentials, private filesystem paths, personal or customer identifiers or wholesale source copies; persist the least safe evidence needed.
- Keep client material within its authorized audience, including during summarization.
- Review imports one page at a time. Propose destinations; move or archive only on the user's confirmation, after readback confirms an adequate home. Do no bulk migration.
- Archived material is not current context.

# Finish check

Before you finish, check:
- Did the change answer the actual question without inventing a business?
- Is ownership unambiguous by section?
- Were existing onboarding content, unrelated projects and access boundaries preserved?
- Are hypotheses distinct from established facts?
- Does each At a glance block you touched still match its page?

Report what was actually verified and the next necessary handoff, not a fictional completed workflow.
