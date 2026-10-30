---
name: manage-activity-context
metadata:
  version: "7.2.0"
description: "Use when the user explains or revises why an activity or project exists, whom it serves, its relationships, strategy or constraints, when people or organizations join it, or when its Activity Overview, or an untyped Company Overview, no longer matches. Not for market evidence (manage-market-intelligence) or an offer's marketing (manage-product-marketing)."
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "manage-activity-context"` when you open this skill.

# Purpose and boundaries

Answer: what are we trying to accomplish, for whom, through what activity, and under which durable choices and constraints? Do not turn a profile into a required organization type or maturity ladder.

Own durable activity context and the Activity Overview. Product behavior belongs to `manage-product-documentation`; customer/market positioning and commercial messaging to `manage-product-marketing`; external market evidence to `manage-market-intelligence`. Software needs product documentation whether sold, donated, experimental or used internally. Goals, streams and tasks retain execution state. Do not create commercial documentation merely because something is software.

Never ask for a fact just to complete a profile: ask only if the next action could plausibly go wrong without it. Read [adaptation](references/adaptation.md) before deciding where context belongs whenever who acts, who benefits, who funds or who owns is unclear, the activity is not a business selling an offer, or the change would create a page or touch more than one scope. For changes of participants, purpose, organization or use, read [evolution](references/evolution.md). Both are decision aids, not forms to fill.

# Establish the minimum context

1. Interpret the request: discussion and audit are read-only; capture, refresh or synchronization permits only the requested mutations. State material scope assumptions. If several unrelated ideas fit, ask one routing question before writing.

   Before any write, know which case you are in. When the user approved exact wording, the page after your write must read exactly as approved, separators and whitespace included: compute the result from the current page and your operation, and compare. Add no attribution the approval lacks: put it in existing metadata you may already write, or ask the user to approve its minimal form. If the user approved "Independent bakeries in Lyon" as `for_whom`, write exactly that, not "Independent bakeries in Lyon (per the founder, March)". When the user let you draft, add faithful, minimal provenance within the scope and audience they authorized, without asking. A later repair never authorizes an earlier out-of-scope write.

2. Read the Activity Overview of the affected scope, with its At a glance block, and relevant context owners, plus available onboarding facts, before deciding the change. A listing of page titles is not this read; reading the page does not authorize changing it. Search before declaring an owner absent. Inaccessible is not absent. Reuse sufficiently clear facts; ask only about a gap that changes the next action.
3. Separate the actor, activity, project, built solution, beneficiaries and contribution to value. Distinguish funding from selling that solution. Identify only the relationships needed for this request; do not create a relationship registry.
4. Locate the authoritative section for each changed question. An Activity Overview, charter, README or brief can own context. Preserve that owner's identity; a familiar page type is not a reason to duplicate it. Custom pages may be explicitly adopted for a named question after reading them; adoption is scoped, not automatic maintenance of all custom content.
5. Use the smallest adequate document. Keep directly captured context in the Activity Overview if it remains clear and appropriately shared. Create a separate activity/project brief only when an independent durable question, audience, scope or growing detail warrants it. No compulsory Brief, empty skeleton, or second Activity Overview.

Before mutation, distinguish changed facts, the At a glance keys they alter, and unchanged pages. Write only the first two. A statement that another project remains unchanged is a preservation constraint, not a request to restate it in that project's page. Opening another skill to understand an interface does not expand the assignment: updating a solution's purpose alone does not require a product map or specification. Hand off product or commercial work only when an actual unresolved request needs that owner, not automatically when software or a sale is mentioned.

# The Activity Overview and its At a glance block

The Activity Overview is the Activity family's head page (`head_type: activity_overview`): one for the organization, and one in each workspace that is an activity of its own, such as a client mission or a personal project. Find it by its type, whatever its title. Onboarding seeds the organization's with every At a glance key `missing`: fill that page, never a second one. File Activity pages in the Activity folder of their scope; a missing organization folder is created by an admin's AI, while a member's AI leaves the page unfiled and says so.

Each session opens on the At a glance blocks of the organization's head pages and its workspace's, binding constraints first and whole; the body is read on demand. The `pages` tool writes a block through its `at_a_glance` parameter. The Activity Overview's keys:

- `what_we_do`, `for_whom`, `why`: the activity, whom it serves and what it is for.
- `binding_constraints`: only the durable constraints every session must respect.
- `who_decides`: a responsibility summary, never a member roster.

Each holds `missing`, `not applicable` or an answer the page supports, essential first. When your change alters what the At a glance block says, update it in the same turn. The block holds answers only: sources, detail and history stay in the body, beside the facts they support. Offers and their prices go in each offer's Product Overview, not here. An organization-level block is read by every member, so client or project detail stays in its workspace's Activity Overview.

# Cut-over from a Company Overview

An organization whose sessions still open on an untyped Company Overview switches to the composed Overview when that page becomes its Activity Overview. Offer the cut-over when you work on the organization's context. Only an organization admin's AI can carry it out, since retyping an organization page is admin-only; a member's AI says so and creates no organization Activity Overview beside it.

Before carrying it out, read [the cut-over steps](references/company-overview-cut-over.md).

# Scope, access and durable change

Context can concern a person, collective, organization, client, mission or project; relationships need not form a single tree. Infer the relevant scope from evidence, explain consequential assumptions, and clarify ambiguity before mutation. Platform scopes and permissions remain authoritative: if the needed separation is unavailable, report it rather than simulate privacy with titles.

Org-wide context must be safe for everyone who can read it. “Useful to everyone” does not authorize broader sharing. Participation, ownership, legal status and access are separate facts. Never infer invitations, permission changes, ownership transfers or publication authority from “we are a team now.” Propose scope changes with their visibility consequences; do not move, widen, narrow or archive material without the required explicit authorization.

Preserve project identity and sibling projects through evolution. A new participant, legal entity, paying customer or use case changes only the affected facts and relationships. It does not require restarting onboarding, rewriting the entire activity, or following a startup progression. Current established context belongs in the body; history belongs in available version records and linked Decisions. Preserve relevant earlier choices without silently overwriting history. Speculative directions remain visibly provisional; evidence of use is not a decision to adopt a strategy. Record consequential chosen direction through the available Decision workflow, or report that recording remains pending.

# Exclusions and preservation rules

- Financial models, budgets, runway, legal text, personnel records, operating procedures, internal policies, supplier details and support answers do not belong in these core context summaries. Leave them with their authorized specialist or ordinary workspace owners; a brief may link to them, an At a glance block never does. Do not generate legal/financial artifacts here. A safe responsibility summary is not a copied member roster.
- A durable context constraint explains a meaningful boundary on choices. Detailed rules for how work is performed stay in their process owner; summarize only their contextual consequence when useful.
- No secrets, credentials, private filesystem paths, personal/customer identifiers or wholesale source copies. Persist the least safe evidence needed. Client material stays within its authorized audience, including during summarization.
- Imports are reviewed one page at a time. Propose destinations; move or archive only under the required approval, after readback confirms an adequate home. No bulk migration. Archived material is not current context.

# Finish check

Did the change answer the actual question without inventing a business? Is ownership unambiguous by section? Were existing onboarding content, unrelated projects and access boundaries preserved? Are hypotheses distinct from established facts? Does each At a glance block you touched still match its page? Report what was actually verified and the next necessary handoff, not a fictional completed workflow.
