# Pull requests

## Contents

- The PR body
- Proving no documentation impact
- Pull request and delivery sync

## The PR body

- Record the change's documentation impact in the PR body: the spec it names or changes, as SKILL.md's delivery rule (section "Preserve lifecycle and product scope") says, or `No documentation impact` with the receipt [below](#proving-no-documentation-impact).
- When you draft a PR body, outlines and groundwork included, end it with exactly one `Octopad-Task:` line. Put it on its own line, outside comments, code blocks and quotations, with the task's bare id: a link resolves only on octopad.app.
- Take the task id from Octopad, never from a guess.
- Name a task with no open subtask: a merge into the repository's default branch closes the task the line names, and a task that still has an open subtask may wait in `pending_review` instead. A deliverable that needs several pull requests is a parent with one subtask per pull request.
- A merge into any other branch, a test or pre-production one included, leaves the task open: name the task there too, never `none`, and again on the PR that carries that work into the default branch.
- Write `Octopad-Task: none: <reason>` only when no task applies.
- When the body leaves needed work for later, a spec edit that waits for production included, create or reuse its task first and name it beside that work, never in the `Octopad-Task:` line, as the delivery rule says.
- Before you hand the PR body over, check that it holds exactly one `Octopad-Task:` line.

## Proving no documentation impact

Prove it for the maintained set of every affected product:

1. Harvest terms from the changed lines and each touched file's header comments.
2. List that maintained set without a title filter and read its descriptions or summaries.
3. Open likely candidates, and supplement the inventory with search over the harvested names and product terms.
4. Record the receipt beside the claim, on one line: affected product or products, terms searched, pages inventoried, candidates read or `no candidate`, and either the document the change cites or `the change cites no document`.

## Pull request and delivery sync

1. Determine documentation impact: none, existing-system change, new system, or technical-only. Record it on the PR in the repository's normal way, naming affected documents or carrying the proven negative receipt. `technical-only` does not imply `none` when durable architecture or an Engineering Reference changed.
2. Link the existing Task to the PR through the `Octopad-Task:` line of its body, and a stream through the repository's normal fields; the spec's Direction links that Task or stream when it serves an accepted direction.
3. Record exact head and base revisions on the pull request or Task. Re-check after material drift.
4. Change the Architecture Map only under [its rule](documentation-model.md#architecture-map).
5. Verify coverage under SKILL.md, section "Work from product intent", using code, tests and the actual diff rather than the PR description alone.
6. Draft pre-release user documentation or release notes when useful, under SKILL.md's pre-release rule (section "Keep human authority narrow and meaningful"); never as shipped wording, Product Facts or marketing claims.
7. When evidence remains missing, mark the update stale or unverified and create or reuse documentation-debt work.

Follow repository review and merge controls. This skill grants no merge authority and creates no separate approval system.
