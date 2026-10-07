# Changelog

## 15.1.0 - Unreleased

octopad-knowledge-evidence 1.3.0 offers to keep only a document that is authoritative in itself, such as a contract or a price grid, in `files`, attached to its task; it no longer offers to keep every file the user hands over. Kernel 2.6.0 keeps no raw material and captures in the same turn, so the skill drops its line against leaving the original outside Octopad and its own same-turn capture line, and adds only what the kernel does not say: each extract drawn from raw material keeps a pointer to the original where one exists and is permitted, and is otherwise labeled unverified. technical-writing 2.0.1 states the em-dash ban as Octopad's house rule, which overrides the Google guide; same behavior. Needs kernel 2.6.0 (sudolab-co/octopad#1196) and lands with 15.0.0. Both distributions move to 15.1.0.

## 15.0.0 - Unreleased

The four documentation skills teach head pages and their En bref. Sessions open on the Organization Overview the server composes from the En bref of the head pages each reader can read: the Activity Overview, one Product Overview per offer and the Market Overview, of the organization and of the session's workspace. Each skill names its head page, its keys and its folder, and updates an En bref in the same turn as a change that alters it. No skill patches or trims a Company Overview any more.

manage-activity-context 7.0.0 keeps the Activity Overview and its keys `what_we_do`, `for_whom`, `why`, `binding_constraints` and `who_decides`. An organization still on an untyped Company Overview cuts over with the user's agreement: its Product and Market Overviews first, then an admin's AI types the old page as the Activity Overview, then its offer, audience and money sections move into the Marketing section of the Product Overview they describe. The onboarding compatibility reference is retired. manage-product-documentation 6.0.0 keeps one Product Overview per offer, owns the page and its `offer_and_availability` key, and leaves the Marketing section to product marketing. manage-market-intelligence 2.0.0 keeps the Market Overview and its keys `main_alternatives` and `what_it_implies`, saves processed findings rather than raw files, and lets other owners link to its evidence instead of copying it. manage-product-marketing 2.0.0 is rewritten from its Product Spec in five parts: find the owner, keep useful marketing context, separate capture from choice, refresh narrowly, finish economically. It writes `audience_and_need`, `promise` and `conditions` with the Marketing section in one call, and leaves generic capture, evidence and readback rules to the kernel.

Each skill files its family's pages in the Activity, Product or Market folder of their scope; an admin's AI creates a missing organization folder, a member's AI leaves the page unfiled and says so. Needs server work production does not run yet: sudolab-co/octopad#1198 (migration 694), #1202 (the pages tool's `head_type` and `en_bref`), #1203 (the Organization Overview in the session brief), #1204 (the web app and the seeded Activity Overview) and kernel 2.6.0 (#1196, capture and raw files). Lands once production runs this build (#1198, #1202, #1203, #1204, kernel 2.6.0) and serves the kernel brief to every organization: the V1 brief shows no En bref. Both distributions move to 15.0.0.

## 14.8.0 - Unreleased

manage-product-documentation 5.3.0: only an accepted need the request does not cover stays unbuilt. "An accepted but unbuilt need stays visible without becoming an instruction to build it" sat in the check run right after writing a spec, so an AI that wrote a design the user had asked for and accepted read it as a reason to stop before building. Companion of kernel 2.5.1 in sudolab-co/octopad, whose one "When work starts" rule builds an accepted design the user asked for unless they said to stop at the design. Both distributions move to 14.8.0.

## 14.7.1 - 2026-10-07

octopad-notepad 3.1.1 names the `notepad_purge` tool as the way to erase the owner's Notepad history. 3.1.0 still named the `notepad` action `purge_history`, which since sudolab-co/octopad#1135 deletes nothing and only answers that the purge moved to `notepad_purge`. Wording fix, same behavior. Both distributions move to 14.7.1.

## 14.7.0 - 2026-10-07

octopad-knowledge-evidence 1.2.0 teaches working pages. Material that later sessions of a task or a time-bound stream need goes on a working page of it, and nothing that matters stays only there: the AI moves it to Key Information, a page or an open task it informs, or proposes a home for it. When the AI hands the work over, it keeps the working pages that are reference as a whole as ordinary pages and archives the rest; when the work reopens, it takes the pages it needs out of Archive. When widened searches still find nothing, it searches Archive. Octoplan 6.3.0 preserves the verbatim answer of a worker without Octopad on a working page of its task. Ships with the matching server changes (sudolab-co/octopad#1176, #1179 and #1175; task 20f9fba6).

## 14.6.0 - 2026-10-07

octopad-session follows the session brief's **Octopad desktop (early access)** line as written, instead of acting on it before the first reply. The line now says when to open the desktop: right before the AI's first Octopad write, before it shows a list, board or calendar of work, or when the user asks. Ships with the matching server change (sudolab-co/octopad#1168). Both distributions move to 14.6.0.

## 14.5.0 - 2026-10-07

octopad-knowledge-evidence 1.1.0 says that research or analysis for one decision is never kept or offered as a page: its Decision's rationale cites the decisive sources. The skill's list of page-worthy reference no longer names "what a piece of research found", which led an AI to offer to keep a one-off research report as a page once the Decision was recorded. Research that serves more than one decision is still reference that outlives the effort. Ships with the matching server change (sudolab-co/octopad task 0ce4668e).

## 14.4.0 - 2026-10-07

octopad-planning-and-work-design 4.1.0 says that getting a deliverable accepted is never a task of its own, even when someone else gives the acceptance. Checking a deliverable, getting it accepted and delivering it (sending, publishing, deploying) stay in its Done when; only a step another person carries out as their own work, such as a deploy they run, can be its own task. The old wording, "unless another person owns that step", led an AI to turn "the client approves the logo" into a task for the client. While only a yes or no on the result is left, the task waits in `pending_review` for its approver, the creator unless one is named. The AI asks the approver now if they are in the conversation; when the yes came outside Octopad, it tells the user who must record it (the approver, the creator or an admin); a refusal sends the task back with `reject_completion` and its reason. A task waiting on a reply is `blocked` only when the reply carries something the work needs. Octoplan 6.2.1 applies the same rule when it plans a stream. Ships with the matching server change (sudolab-co/octopad task ed3632f7), which adds the named approver.

## 14.3.0 - 2026-10-07

octopad-notepad 3.1.0 lets the AI set a reminder on its own when it leaves the user a next step, or sets a task `blocked`, that waits on an event it cannot watch: a pull request merged, a deploy live, a reply received, a date passed. The event may be someone else's act, such as a teammate's merge. The AI sets one only when the event frees something the user must do and a later session can check it. The reminder names the event and what it frees: a check to run, or a task to resume or close. At every opening of a main session, the AI checks whether each such event has happened and, once it has, says so in one line with what it frees as of now, such as the tasks a merge unblocked. Until then it says nothing, and a cleanup never removes a reminder whose event has happened before it is delivered. Work the user hands to another person stays a task assigned to that person. Ships with the matching server change, kernel 2.4.0. Shared update for Claude Code and Codex: both distributions move to 14.3.0.

## 14.2.0 - 2026-10-07

Octoplan 6.2.0 routes Claude workers doing hard bounded code, configuration or command-line work, cross-file coordination and consequential changes included, to Opus 5.5 at `high` instead of `xhigh`. On Anthropic's published per-effort coding results for Opus 5.5, `xhigh` costs 1.8 to 2.1 times `high`, for 2.2 more points on Terminal-Bench 4.0, 2.6 fewer on FrontierCode v1.1 (main set) and the same score on CursorBench 4.0. Hard document or knowledge work, and a mixed task whose document part is the hard one, stays at `xhigh`: on AA-Briefcase v1.1, the same page's long-horizon knowledge-work benchmark, `xhigh` gains 75 Elo for 1.96 times the cost. Reviews, open design (with Fable 5.1 under its existing conditions), plan composition and repair, and broad audits also keep `xhigh`; any other worker gets it only with a recorded reason.

A saved `Sonnet 5` worker route is now read as Opus 5.5 at `medium`, recorded once like the existing `Opus 5` reading, since Claude Code's `sonnet` alias selects Sonnet 5.5 on the Claude API from version 2.1.284. Sonnet stays out of the default routes. Other routes saved at `xhigh` before 6.2.0 keep their reason and run as saved, and other saved routes stay floors.

Claude runtime only: Codex routes are unchanged. Both distributions move to 14.2.0.

## 14.1.0 - 2026-10-07

manage-product-documentation 5.2.0 also loads when a product feature is assessed (a usage or performance review, a diagnosis), so the AI reads the feature's spec before judging it. It matches Octopad's served methodology, which opens the skill before the AI assesses or changes a product feature (sudolab-co/octopad#1159).

## 14.0.1 - 2026-10-06

Codex loads its own MCP configuration, `.mcp.codex.json`, which gives `start_session` a 15,000-token output budget so the session brief reaches the AI whole. Claude Code keeps `.mcp.json`, since it refuses that per-tool field. In Codex Code Mode, octopad-session asks for a 20,000-token emission budget, keeps the response and, if it is still cut, reads the rest back in chunks before acting; those numbers are Octopad's choices, not Codex defaults. Ships with the matching server change (sudolab-co/octopad#1132).

## 14.0.0 - 2026-10-05

This version brings in the skill changes the Octopad team had made in its private copy and not yet published here. From now on, every change to the plugin is made in this repository.

octopad-crm 1.2.0 teaches the AI the CRM's background agents, the octobots, as Octopad opens them to organizations that have the CRM on. The skill now tells three sets of tools apart: the record tools every CRM workspace has; the octobot tools (Distill and Prospect runs, outreach drafts, proposals and signals) once Octopad opens them to the organization; and further octobot features, which `crm_status` lists for the organizations that have them. It also says how an owner or admin turns the CRM on, since no tool does it.

A new CRM section covers running octobots: launch only on the user's instruction after a dry run, what a run costs and who pays for it, the organization's daily budget of contacts and what happens once it is used up, how to follow a run, and how to read why a run did nothing. Another walks through sending an approved draft: the member approves it, the AI reads it in full, sends it with the user's own mail tool on their go, then records the send and any reply. Octopad's own sending stays limited to some organizations. A connection that uses an agent key may send approved drafts and record them, but may not approve or reject a draft, decide a proposal, resolve a quarantined identity or switch a contact's AI summary on or off. A distill preview no longer needs the nightly switch on, and the skill now names `explain_due` and `request_refold`.

octopad-planning-and-work-design 4.0.0 keeps checking a deliverable, getting it accepted, opening its pull request and deploying it in that deliverable's Done when, never as tasks or subtasks of their own, unless another person owns that step. While only someone's acceptance is left, the task waits in `pending_review`; while it waits on an outside event, it is `blocked`. A deliverable takes subtasks only when it breaks into parts that are each finished and checked on their own, and an effort takes one parent per phase only when each phase holds several deliverables. Octoplan 6.1.0 applies the same subtask rule when it plans and reviews a stream.

octopad-notepad 3.0.0 gives the private Notepad five sections again: open loops, premises, compass, reminders and context gaps. Reminders are claimed and delivered through conditional saves, and the Notepad supports a daily briefing and spaced follow-ups.

manage-activity-context 6.0.0 keeps an organization's Overview to facts only, with no link, identifier, revision date, source line or maintainer name, within the 2,000 characters the session brief loads whole. Where a fact came from goes in the page edit's change summary. manage-product-documentation 5.1.0 and manage-product-marketing 1.1.0 each refresh the Overview facts their own source supplies.

The rest of Octoplan and of octopad-planning-and-work-design is unchanged from 13.0.0. The octopad-crm and octopad-notepad descriptions are now quoted, so strict YAML parsers read their frontmatter. Shared update for Claude Code and Codex: both distributions move to 14.0.0.

## 13.0.0 - 2026-10-04

Octoplan 6.0.0 and octopad-planning-and-work-design 3.0.0 put the reviewed Plan summary before the autonomy choice. It names what agents can finish and verify without the user, the first expected intervention, who must act, affected work and continuation limits. Existing applicable mandates carry forward without a second approval.

Planning probes uncertain capabilities on the actual target before relying on them; unproved access limits the promise. Supervisors own the Brief's outcome, repair the affected Plan when methods change its meaning or proof, and surface human needs promptly while continuing independent work. Both runtime profiles disclose manual session handoffs; Codex also distinguishes native input, notification delivery and capabilities across environments. Computer Use requires disclosed scope, explicit user acceptance and verified access; delegates inherit those bounds, not system permissions. Refusal or unavailable access requires an allowed alternative or a visible human intervention, without weaker proof.

Shared update for Claude Code and Codex. Both distributions move to 13.0.0. Review, acceptance criteria, protected effects, runtime-specific permissions and saved-route compatibility remain binding. No automatic Goal, schedule or migration of active delivery is introduced.

## 12.0.0 - 2026-10-03

octopad-crm 1.1.0 lets the AI run the CRM's contact summaries for the user instead of sending them to the settings page. A new section names the tool and action for each setting and, where one applies, what it costs: the workspace's directions and questions, with a preview before saving; the nightly switch and its cap; which field changes trigger a new summary; summarising chosen contacts now; filtering contacts on their answers; switching a contact's summary off; and reading the spend. Settings change only on the user's instruction, after the AI says what they will cost.

Where the outreach privacy check is on, the AI picks prospects by an answer, the summary switch or a sensitive usage or activity field only through a segment, so the check can refuse it, never by launching on contacts found another way. The import guidance now says that registering a source creates the custom fields it declares.

Shared update for Claude Code and Codex. Both distributions move to 12.0.0; no saved state changes.

## 11.2.0 - 2026-10-01 (Codex)

Octoplan 5.2.0 starts Codex delivery in a separate supervisor chat when the user has requested or accepted that destination. This chat owns delivery and launches workers and reviewers directly. The planner verifies startup, links the chat and finishes its planning role; no permanent relay or nested supervisor is added.

Launch respects the native tools' permissions, pending setup and directory checks. Resume reuses the recorded owner. Replacement requires predecessor cessation and guarded ownership transfer; unavailable native launch or safe replacement uses a stated manual handoff. Existing child-supervisor deliveries and session-owned Goals remain with their owners until an authorized transition.

Codex capability update only. Model routes, delivery authority and review floors are unchanged; the Claude distribution remains 11.0.0. Shared references defer session mechanics to the runtime profile. This release does not promise continuation after a runtime stops or prove local installation.

## 11.1.0 - 2026-10-01 (Codex)

Octoplan 5.1.0 uses `gpt-6.1-sol` at `high` for new Codex supervisors and workers with bounded judgment. It also restores the `gpt-6-luna` at `xhigh` first-candidate route published in Octoplan 4.2.0, which was missing from this repository's imported profile. The table and role admission now name the same exact models and efforts.

Existing saved plans and running actors keep their exact model IDs and efforts until an explicit replan and affected review. Planner and reviewer defaults, the shared delivery contract and the Claude runtime are unchanged; the Claude distribution remains 11.0.0. Availability must still be checked on the target host. These defaults are not a measured cost or performance comparison.

## 11.0.0 - 2026-10-01

Streams and Octoplan now share a proportionate brief and preparation. The AI can offer delivery by agents when there is useful work to complete between human interventions, without requiring the user to know the name Octoplan.

Switching to agent delivery keeps the same stream, tasks, decisions, evidence and progress. A bounded delivery inside an ongoing stream does not complete that stream. Existing valid confirmations and mandates carry forward; creating a stream, preparing a plan or staying silent never authorizes delivery. Required reviews and human gates remain in place.

A missing delivery mandate is distinguished from a user request limited to planning. When agent delivery is intended and useful, the AI asks once for autonomy and covered effects before concluding preparation. Explicit planning-only requests, pauses, postponements and unanswered choices remain respected. Plan reviews check this reading against the user's request and context.

Shared protocol update for Claude Code and Codex: Octoplan 5.0.0 and octopad-planning-and-work-design 2.0.0. Existing valid delivery contracts need no migration. The companion server kernel change has its own deployment gate.
