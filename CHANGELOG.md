# Changelog

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
