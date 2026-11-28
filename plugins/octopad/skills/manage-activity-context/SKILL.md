---
name: manage-activity-context
description: "Use when the user explains or revises an activity's or project's purpose, beneficiaries, relationships, strategy or constraints; its Activity Overview, or an untyped Company Overview, no longer matches; people or organizations join the activity; you write an Activity Overview; or you work on the organization's context, such as its Company Overview or an Activity Overview, while its sessions still open on an untyped Company Overview. Keeps the Activity Overview and At a glance block. Not for market evidence (manage-market-intelligence) or an offer's marketing (manage-product-marketing)."
---
Version: 9.0.0

# Purpose and boundaries

Keep durable activity context in the Activity Overview: what the activity seeks, for whom, how, and under which durable choices and constraints. Leave to their owners:
- product behavior: `manage-product-documentation`;
- customer and market positioning and commercial messaging: `manage-product-marketing`;
- external market evidence: `manage-market-intelligence`;
- execution state, a finite experiment included: goals, streams and tasks.

- Impose no organization type, template, persona or maturity ladder on the activity, and invent no business.
- Software needs product documentation whether sold, donated, experimental or used internally; create no commercial documentation merely because something is software.

Before deciding where context belongs, read [the adaptation guide](references/adaptation.md#adapt-from-first-principles) when:
- who acts, benefits, funds or owns is unclear;
- the activity is not a business selling an offer;
- or the change would create a page or touch more than one scope.

# Establish the minimum context

1. Before any write, know which case you are in:
   - In a discussion (the user explores and has not settled) or an audit, change no Overview until the user's confirmation. In an audit, propose the change that closes each gap you find, and keep the findings on a working page of the task or stream it serves.
   - In a capture (the user states or revises the activity's context), a refresh or a synchronization, write the stated or requested context changes without asking.
   - When a capture holds several unrelated ideas, write each where it belongs, then say where and ask whether to adjust.
   - Context may concern a person, collective, organization, client, mission or project; relationships need not form one tree. Infer scope from evidence, state material assumptions and clarify ambiguity before any write.
   - Treat what the user tells you as their account, not externally verified evidence.
   - When the user authorized a draft, add faithful, minimal provenance within that scope and audience, without asking.
   - A later repair never authorizes an earlier out-of-scope write.
2. Before deciding the change, read the Activity Overview of the affected scope with its At a glance block, the relevant context owners and the available onboarding facts. Reuse the facts they state clearly enough instead of asking for them.
   - Read the pages, not only their titles. Reading a page never authorizes changing it.
   - Search before declaring an owner absent: inaccessible is not absent, and lost access is no permission to retrieve it through another channel.
3. Separate the actor, activity, project, built solution, beneficiaries and contribution to value, and funding from selling that solution.
   - Identify only the relationships this request needs; create no relationship registry.
4. Locate the authoritative section for each changed question: an Activity Overview, charter, README or brief can own context.
   - Preserve that owner's identity and keep detail there; never duplicate it for a more familiar page type.
   - You may adopt a custom page for a named question, explicitly and after reading it. The adoption covers that question alone.
5. Use the smallest adequate document.
   - Keep captured context in the Activity Overview while it stays clear and appropriately shared.
   - Create an activity or project brief only for an independent durable question, audience, scope or growing detail.
   - Create no compulsory Brief or empty skeleton.

Before mutation, distinguish changed facts, the At a glance keys they alter, and unchanged pages; write only the first two.
- Preserve a project the user says is unchanged; do not restate it in that project's page.
- Opening another skill to understand an interface never widens the assignment. Updating a solution's purpose alone needs no Product Map or Product Spec.
- Hand off product, commercial or execution work only when an actual unresolved request needs that owner, not because software or a sale is mentioned.

# The Activity Overview and its At a glance block

The Activity Overview is the Activity family's head page (`head_type: activity_overview`): one for the organization, and one in each workspace that is an activity of its own, such as a client mission or a personal project.
- Find it by its type, whatever its title.
- Onboarding seeds the organization's with every At a glance key `missing`: fill that page.
- File Activity pages in the Activity folder of their scope.

The Activity Overview's keys:

- `what_we_do`, `for_whom`, `why`: the activity, whom it serves and what it is for.
- `binding_constraints`: only the durable constraints every session must respect.
- `who_decides`: a responsibility summary, never a member roster.

Each key holds an answer the page supports, its essential point first.
- Write `missing` for each key the person has not given, and go on.
- Ask for a fact, who decides included, only when a step other than writing this page depends on it, such as choosing a recipient or a price.
- When the user says people or organizations join the activity, update the Overview and ask nothing. A join an audit finds waits for the user's confirmation like the audit's other gaps.
- When a change you make on this page or elsewhere alters what the At a glance block says, update it in the same turn.
- Keep only answers in the block: sources and detail stay in the body, beside the facts they support.
- Put offers and their prices in each offer's Product Overview, not here.
- An organization-level block is read by every member: keep client or project detail in its workspace's Activity Overview.

# Cut-over from a Company Overview

An organization whose sessions still open on an untyped Company Overview switches to the Organization Overview when that page becomes its Activity Overview.
- When you work on the organization's context, such as its Company Overview or an Activity Overview, offer the cut-over.
- Only an organization admin's AI can carry it out. As a member's AI, say so and create no parallel organization Activity Overview.
- Before carrying it out, read [the cut-over steps](references/company-overview-cut-over.md#cut-over-from-a-company-overview).

# Scope, access and durable change

- Follow platform scopes and permissions. When the needed separation is unavailable, report it; titles never create privacy.
- Keep org-wide context safe for all its readers and client material, summaries included, within its authorized audience. Usefulness to everyone never authorizes broader sharing.
- The organization's Activity Overview may hold an approved, safe summary of a client relationship, never private mission details by default.
- When a project becomes an established activity of the organization, such as one a legal entity operates, propose an organization-wide summary if useful, subject to authorization and audience.
- Participation, ownership, legal status and access are separate facts: never infer invitations, permission changes, ownership transfers or publication authority from "we are a team now".
- Propose a scope, access or ownership change separately, with its visibility consequences; move, widen, narrow, archive or delete material only with the required explicit authorization.

Preserve project identity and sibling projects through evolution.
- When something changes, identify exactly what changed, who stated it, and the owners and audiences it affects.
- Keep established facts, intentions, open questions and required decisions apart.
- A participant, legal entity, paying customer or use case joining or leaving changes only the affected facts and relationships. None requires restarting onboarding, rewriting the whole activity or following a startup progression.
- Keep current established context in the body; history belongs in available version records and linked Decisions.
- Preserve relevant earlier choices without silently overwriting history.
- Keep speculative directions visibly provisional: evidence of use is not a decision to adopt a strategy, and a sale does not prove the current public price, repeatable demand or a pricing decision.
- Record consequential chosen direction as a Decision in the same turn. If that write fails or is refused, report what remains unrecorded.
- When current sources conflict, resolve their ownership and evidence before synchronizing that point; safe unrelated corrections may proceed. Report the disputed point with the smallest question that resolves it.

# Exclusions and preservation rules

- Keep financial models, budgets, runway, legal text, personnel records, operating procedures, internal policies, supplier details and support answers out of these core context summaries: leave them with their authorized specialist or ordinary workspace owners. A brief may link to them; an At a glance block never does.
- Generate no legal or financial artifact here.
- A durable context constraint bounds choices. Keep detailed work rules with their process owner; summarize only their contextual consequence when useful.
- Persist no secrets, credentials, private filesystem paths, personal or customer identifiers or wholesale source copies; persist the least safe evidence needed.
- Review imports one page at a time: propose destinations, and move or archive only on the user's confirmation, after a readback confirms an adequate home. Do no bulk migration.
- Archived material is not current context.

# Finish check

Before you finish, read back what you wrote and check:
- Did the change answer the actual question without inventing a business?
- Is ownership unambiguous by section?
- Were existing onboarding content, unrelated projects and access boundaries preserved?
- Are hypotheses distinct from established facts?
- Does each At a glance block you touched still match its page?

Report what was actually verified, the next necessary handoff and only a gap a next step depends on.
