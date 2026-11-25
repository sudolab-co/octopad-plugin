---
name: octoplan
description: "Use when prepared work could be delivered by agents, when the user wants agents to carry a stream to its outcome, before proposing how agents should deliver a stream, and when the user names, resumes or supervises an Octoplan. It confirms a brief, has a drafted plan reviewed, writes it into Octopad as tasks, then launches one supervisor that hands each task to an executor agent. Opening it authorizes no delivery. Not for preparing the stream itself (octopad-planning-and-work-design), nor for work done with the user turn by turn."
---
Version: 11.0.1

# Octoplan

Octoplan delivers a stream's prepared work through agents:

1. **Brief.** The planner captures the need and asks only what it must to confirm its understanding. The user confirms.
2. **Plan.** The planner drafts a detailed plan, has the draft reviewed, and fixes it.
3. **Write.** The planner writes the final plan into Octopad once, as tasks.
4. **Agree.** The planner shows the plan in plain words. The user chooses the autonomy and what agents may do without asking; the planner records it in Octopad.
5. **Deliver.** The planner launches one supervisor, a separate session that runs the tasks in order, or in parallel where their writes are proved independent. It hands each task to one executor agent and does no task work itself, except fixing a few lines it already has in view.

Read [planning.md](references/planning.md) for steps 1 to 4, [supervision.md](references/supervision.md) for step 5, and your host's profile: [claude-runtime.md](references/claude-runtime.md) in Claude Code, [codex-runtime.md](references/codex-runtime.md) in Codex, [cursor-runtime.md](references/cursor-runtime.md) in Cursor. To choose routes, read the route sections of both the Claude and the Codex profiles. On another host, check that it can launch and wake agents before you promise delivery.

## After a compaction

The same supervisor or executor continues in the same session: compaction alone never replaces it. A client can bring back this file without its references. Before your next dispatch or effect:

1. Reopen the references your next step needs.
2. Reread the state from its sources: the stream's latest update, the tasks with their status and comments, the agents still running, and the target (branch, diff, uncommitted work, pull request).
3. Treat the summary as a pointer, never as permission or as proof that work is done.
4. Continue in the same role, with the same agents, mandate and pending questions. Do not ask the user again, restart the plan, launch a new session or repeat a review because of the compaction.

## What the user reads

Start each message that reports progress or asks for a decision with its step's banner, in every runtime; a short status answer needs none. Offering agent delivery while preparing a stream does not start Octoplan.

```markdown
**Octoplan · Step 1 of 3: Brief**
**Octoplan · Step 2 of 3: Plan**
**Octoplan · Step 3 of 3: Delivery**
```

- Write in the user's language and in everyday words, and name tasks by their title. Keep this skill's words out: "what agents may do without asking", not "mandate"; "which AI does each task", not "route".
- Ask the user only about consequences they own. Diagnose technical doubts and problems yourself, and solve a problem within the mandate before you ask the user anything.

When a human decision or action becomes necessary, raise it at once, never inside a progress report. Say whether it stops all delivery or one task, under these labels in the user's language:

- **State**: where the outcome stands.
- **Done**: what is finished and proved.
- **Blocked**: what waits, and why.
- **Decision expected**: the exact decision or action needed.
- **To unblock**: who must provide what.
- **Next step**: what resumes afterwards, and what continues meanwhile.

The final recap uses the same labels. With the Octopad desktop open, post the run's state with `desktop` `report` from the brief on.

## Autonomy and mandate

The mandate is what the user agreed agents may do without asking: the mode, the allowed effects with their targets, and the limits, in the user's words, with the date. An effect is a change outside the working copy, such as a push, a message, a deployment or a payment.

Delivery needs the user's explicit agreement (What needs the user's confirmation first), in one of three modes:
- **Full autonomy:** agents continue all covered work and report progress.
- **Checkpoints:** agents also stop where the user chose; by default, at each protected effect and each human step.
- **Step-by-step:** agents stop after each task.

In every mode:
- The mode changes interruptions only, never checks or reviews.
- A protected effect bills anyone or cannot be undone: disclose it even when no rule names it, and get consent that covers the actual effect and target.
- The target's written team rules bind; an action they reserve to a person stays with that person.
- Computer Use, or any automation that drives the screen, needs the user's explicit acceptance of the disclosed targets and actions; Full autonomy grants none.
- An effect the mandate does not cover waits: ask for it alone, keep the mode, and continue covered work.
- A planning-only request gets no autonomy question and no launch.

## Review

- **The plan:** one fresh adversarial review of the draft before anything is written into Octopad; two independent reviewers when the plan touches schema, permissions, money, privacy, destructive operations, publishing or deployment.
- **A delivered task:** the planner sets its `Review` line and delivery never decides it again; only a plan repair sets it, by this rule, for the tasks it changes:
  - none when both of the task's routes sit on the two simplest rows of their runtime profiles (every choice settled, runnable checks prove the result): its checks, then the supervisor's verification;
  - one fresh independent reviewer for any other task;
  - one reviewer, on any row, for a change that cannot be undone, such as a migration, a data deletion, a permission change or a payment.
- **Findings:** fix each real defect. A test that fails before the fix and passes after it proves the fix; where no test can, the executor says how it checked. No second review pass. A defect outside the task goes to the supervisor, which gives it an owning task through a plan repair.

## When something goes wrong

- A wait or a failure holds only the work that depends on it.
- Two failed fix cycles on one task stop that approach: diagnose, then try one clearly different way, or record the blocker. A new agent or plan does not reset the count.
- Never get around a permission, an authentication or a safety refusal.

## Records

- The tasks hold the plan and, at close, one short comment with the proof.
- The stream's updates hold the mandate and who supervises, or comments on the plan's first task where `work_streams` offers no `set_status` ([Record the mandate](references/planning.md#record-the-mandate)).
- Create no other page, and no Decision, for the brief, the plan, the mandate or the supervision.
- A sub-agent calls no Octopad tool unless its task's `Octopad` line grants it, read-only unless that line names a write. The session that launched it records its results.
