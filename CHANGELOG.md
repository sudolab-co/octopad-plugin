# Changelog

## 21.1.0 - Unreleased

- `manage-product-documentation` 6.7.0: each Product Spec section says what it holds and what never belongs in it, with that content's home: a choice between alternatives goes to a Decision, exploration and reviews worth keeping to a supporting record, delivery progress to the Task or pull request, history by version to the changelog or release record, implementation to code. A Next entry is updated in place rather than duplicated and links its Task, a new state replaces its label, opening a pull request or bumping a version changes no spec, figures chosen while building stay in code unless users meet them as limits, a spec of a skill holds its testable contract and links the skill text for the mechanics, and a spec keeps no changelog page of its own. On a live workspace, specs rewritten to the earlier standard regrew within two weeks, mostly with delivery history, rejected options and one Next entry per released version.

## 21.0.0 - Unreleased

This version needs the Octopad server release in which the Home Summary reads the Notepad's focus themes and accepts a theme with one reference.

- `octopad-notepad` 4.0.0: the `compass` keeps the user's ordered focus themes in one `### Focus themes` entry, at most 8, one line per theme: the theme, its reason, 1 to 4 references to the goal, stream or key task it concerns, and what they are currently on. A change the user states applies at once, and the AI never undoes it without a new fact. The AI keeps the themes true itself: when a fact about work the user does, owns or waits on changes what deserves their attention first, it moves the theme that fact fits, or adds one if none fits, and retires a theme once its purpose is met or dropped; otherwise it updates only `currently on:`. Each change gets one line in the conversation (what, the fact behind it, and that one word undoes it) and a dated `moved` note in `why:`. The AI no longer asks whether a departure from a `compass` call means the order was wrong. Asked what to work on, it weighs the themes in order. Before, the `compass` held only calls on which work comes before which, with no list, so no AI wrote the focus themes the Summary reads.

## 20.11.0 - Unreleased

- `octoplan` 8.5.0: in Claude, a supervisor that hands off starts its successor without asking when its recorded mandate covers it, and proposes the session only when the app refuses the start, as it does on a turn the user did not begin. Once the app reports that the user started a successor it could only propose, the released supervisor detaches it; it never relays its successor's turn-end reports. On a live run, a supervisor at its context limit proposed its successor on a turn the user began; once the user started that session, the released supervisor left it nested under itself, so the successor's turn-end reports would reach it.

## 20.10.0 - Unreleased

- `octoplan` 8.4.0: a usage quota or rate limit on one AI model or runtime account no longer counts as shared-infrastructure distress: the affected work runs on its saved route in the other runtime, or on paid continuation only where recorded authority covers the spend, and otherwise only that work waits. On a live run, two supervisors stopped every database read, and some work that needed none, until one tool's five-hour quota reset, although that tool still ran on its credits and other work was ready.

## 20.9.0 - Unreleased

- `octoplan` 8.3.0: a launch brief or supervisor pointer names the language the user writes in, and the session it starts addresses the user in that language until they write in another. On a live run, a successor supervisor whose launch brief was written in English talked to a French-speaking user in English: nothing in its launch text named the user's language, and the Octopad brief names it only when the user's interface is in French or Spanish.

## 20.8.0 - Unreleased

- `octoplan` 8.2.0: in Claude, a supervisor session, the first or a successor, starts in, or when opened by hand enters, its own worktree, and keeps any local file a successor needs where it survives that worktree, cited by absolute path. On a live run, a released supervisor proposed its successor in its own checkout to reach evidence files; the Claude desktop app refused to detach that session, so the released supervisor kept receiving the successor's turn notes.

## 20.7.0 - Unreleased

- `octoplan` 8.1.0: a planner or supervisor cancels, without asking the user, a task the Plan replaces, in whichever stream it sits, with a comment on what its replacement adopts; a task in progress for someone else, or inside another live supervisor's boundary, stays a conflict to reconcile. On a live run, a supervisor, the planner, a plan reviewer and the delivery contract each held a replacement task's dispatch for the user's go to cancel the task it replaced, because that task sat in another stream, although no rule asked for that go.

## 20.6.0 - Unreleased

- Claude Code: the Octopad server recognizes a conversation that resumes in a new process, such as one the Claude desktop app reopens after a pause, and gives it a short reminder instead of the full brief again. A `SessionStart` hook records a SHA-256 digest of the session id for the Claude Code process that runs it, in a private temp folder (`$TMPDIR/octopad-claude-<uid>/`, one small file per process, removed after 7 days). A `headersHelper` on the Octopad connection sends that digest as the `x-octopad-claude-session` header. The raw session id never leaves the machine. A forked conversation, a nested Claude Code process and a new conversation have their own session id, so they never present another conversation's digest; subagents inside one process share its connection, as before. Any failure sends no header, and the connection works as before. The first session on a machine, or the first after 7 days without one, sends no header. When a recent record exists but none for this process (hooks turned off for a project, `claude mcp list`), the helper waits about 2 seconds before connecting without the header.
- The hook and the helper run only in Claude Code and Cowork: claude.ai chat ignores hooks, and Codex loads neither (the hook is declared in `.claude-plugin/plugin.json` only). On Windows they send no header. Under Git Bash they stop at once. Without Git Bash, Claude Code runs the hook in PowerShell, where it does nothing and exits 0, and shows its warning that a hook ran in PowerShell at the start of each session.

## 20.5.0 - Unreleased

- `octoplan` 8.0.0: a worker keeps its final answer to what the supervisor must verify and close the task, and gives the command that reproduces longer evidence or a location that survives the workspace, because, for a worker without Octopad access, the supervisor otherwise preserves that text verbatim on a working page of the task and pays it twice. A read-only lookup that a supervisor or planner delegates may run on `Haiku 5.5` at high effort when a runnable check of correctness and completeness exists before the route is chosen; it is not a saved task route and lowers no review floor. The Claude runtime notes now name the configurable concurrent subagent cap, the error not to retry, and the Claude Code version below which Haiku 5.5 is rejected.

## 20.4.0 - Unreleased

- `octopad-planning-and-work-design` 5.1.0: a stream whose work follows one logic marks its main parts by starting each top-level task's title with its phase (`P1 · <title>`, `P2 · <title>`), instead of giving each phase a parent task. Subtasks carry no prefix, and a phase is never a parent task. A phase parent held deliverables that are not parts finished and checked alone, against the methodology's rule for subtasks; a title prefix shows the user the stream's structure without that nesting.

## 20.3.0 - Unreleased

- `octopad-crm` 1.4.0: where the organization has Octopad's own sending, the AI changes the sending configuration with `crm_send_config` `set` when a workspace admin asks it to, going live included, instead of always refusing. The server already lets workspace admins make this change. For any other user, the AI still never changes it.

## 20.2.0 - Unreleased

- `manage-product-documentation` 6.6.0: a spec edit the AI cannot make (no write access, a locked page, no Octopad connection) is named on the repository's documentation-impact mark with what blocked it, and the AI creates or reuses documentation-debt work, instead of skipping it in silence.

## 20.1.0 - Unreleased

`octoplan` 7.11.0: corrections from the first live run of 7.10.0 (2026-10-21/22), where 11 agents delivered 3 tasks at 3 to 4 agents per task instead of 2.

- A targeted recheck follows only the fix of a blocking finding from a heavy review, or a fix that reaches beyond its findings; minor fixes after a heavy review no longer trigger one. Each fix cycle gets at most one recheck, at the light-review route.
- A Claude supervisor runs at Opus 5.5 high; a stronger worker or review route no longer raises its effort.
- When every remaining wait is a person's, the Claude supervisor waits on a background command that exits when one of those waits changes state, such as a pull request merging, and reconciles it.
- Restored two rules the 7.10.0 deduplication dropped: cut each deliverable into the smallest units that make sense, and name tasks by title, never by an ID prefix, in what the user reads.

## 20.0.0 - Unreleased

Four skill lines now agree with the Octopad methodology's corrections, and three skill texts follow server changes. This version needs the Octopad server release in which `build_context` matches streams to a description of the work (`mode: "work_stream"` with `query`).

- `octopad-knowledge-evidence` 2.3.0: in a workspace where the CRM is on, what one customer did or said goes to their CRM record, not to `knowledge`.
- `octopad-planning-and-work-design` 5.0.0: a plan goes in as few `batch_tasks` calls as the tool's limits allow, every dependency in `depends_on_refs`, instead of always one call. Closing a goal files no post-mortem when the user explicitly accepts closing without one. A task's stream is chosen by describing the work to `build_context(mode: "work_stream", query: "…")` and reading the one-liner of each stream it returns, instead of reading stream descriptions in the session brief.
- `octopad-session`: the AI may call `start_session` again when its context was compacted or cleared since it received the Octopad orientation, as the server's instructions ask.
- `manage-product-documentation` 6.5.0: the Behavioral Contract and Architecture Map shapes drop their `Last verified:` line, which only a retired background check read.

## 19.12.0 - Unreleased

`octoplan` 7.10.0: an executor owns its task, its review and its fixes. A live Octoplan on 2026-10-21 spent 38 agents on two pull requests: between the supervisor and each worker sat a batch lead, each unit of a task had its own worker, and each fix and each recheck had another.

- Claude supervisors launch executors directly; batch leads are gone.
- One executor builds a task's units in order, as commits on its branch. A fresh executor takes over only after a failure or when its context runs out.
- The executor has its work reviewed as its last step, by a fresh reviewer at the task's review route, and fixes blocking findings itself, test first. A targeted recheck by a fresh reviewer follows only a plan fix, a heavy review, or a fix that reaches beyond its findings; otherwise a test that fails before the fix and passes after proves it.
- Small bounded Claude work with settled choices and runnable checks runs on Sonnet 5.5 high, Opus 5.5 medium on failed checks.
- A plan repair that only re-cuts reviewed work or changes a route within its rubric is checked by the planner, without a fresh review, on Opus 5.5 high.
- The skill states each rule once, in the file that owns it, and drops the manual task chains no runtime uses: 15,839 words before, 12,458 after.

## 19.11.0 - Unreleased

`manage-product-documentation` 6.4.0 has the AI read a behavior's spec before it judges it. Twice an AI analyzed a feature from what it already had, once the Notepad's usage and once a failed Octoplan run, and proposed changes without opening the feature's Product Spec.

- Before judging, diagnosing or redesigning a behavior, the AI reads its owning Product Spec in full. Its shortcut for a narrow fix now applies only once the fix's cause is known. When no spec owns the behavior, the AI says so and leaves conclusions about intended behavior open.
- The exception for agent instructions covers only the AI's own working instructions. A skill or AI behavior that a product ships to its users is product behavior, like any other feature.

## 19.10.0 - Unreleased

`octoplan` 7.9.0 sizes review to what a task risks. A live Octoplan ran two reviewers from two providers on every code task, reviewed each unit and then its parent again, and reinstalled the project for each new agent. The skill's own floors asked for none of that; their wording allowed it.

- One fresh review per deliverable, on the task's integrated diff. It covers the task's units, the parent and the pull request at once. A unit gets its own review only when the plan names a risk later work must not build on unchecked.
- A second, focused judgment only for a change that cannot be undone, or for an expertise the plan names that the first reviewer lacks. Reviews stay on the worker's provider: a task's Claude and Codex review routes are alternatives for whichever runtime runs it, never two reviewers.
- A task's pull request stays one coherent change a single reviewer can judge well; a larger one is split into more tasks, not into more reviews.
- Units of one task share its workspace and installed dependencies. Integration checks run as soon as units connect, full checks run once on the final head merged with its base, and a check is rerun whenever its inputs may have changed.
- Two failed fix cycles stop the current strategy: the supervisor diagnoses what failed and tries one materially different approach or records the blocker. Each task's closing note counts its reviewer runs and rounds.
- Plan reviews keep their floors.
- The plugin now ships the Claude Code lane agents that pin a model and an effort for each default route (`octopad:octoplan-sonnet-high`, `-opus-medium`, `-opus-high`, `-opus-xhigh`, `-opus-max`, `-fable-xhigh`). A supervisor dispatches the lane matching a task's saved route, so the route's effort holds even where the launch call cannot set one.

## 19.9.0 - Unreleased

`octoplan` 7.8.0: a supervisor's messages to the user name tasks by title. An Octoplan supervisor reported to its user with bare task-ID prefixes, carried over from the ID-based records it keeps. Its journal and pointer blocks still keep exact IDs; whatever it tells the user names tasks by title. The Codex-only line on opaque IDs is folded into this shared rule.

## 19.8.0 - Unreleased

`octoplan` 7.7.0 and `octopad-planning-and-work-design` 4.5.0 change how work is cut and handed to agents. An audit of six recent Octoplans found that the planner cut work by deliverable only: a task could carry a migration, server code, a screen and AI-facing text at once, and one worker built it whole, with most review findings landing on choices the plan had left open.

- The planner cuts each deliverable into the smallest units that make sense in the logic of the work: one coherent change that can be built, checked and reviewed on its own, split at natural seams (in code: schema, then server, then client, then AI-facing text), never mid-change, an atomic change kept whole. A deliverable of several units is one task with one subtask per unit; in code, the units are commits of the task's pull request.
- Each unit goes to its own fresh worker. Units that need one another run in order on the task's branch; independent ones may run in parallel. The task's whole diff is reviewed once its units are in. Fixes also go to a fresh worker, with the current diff and the findings.
- A unit is dispatched only once the choices it shares with other work are settled: who writes each shared value and in what order, which unit produces each input it uses, and how it relates to open pull requests, active tasks and Decisions on the same files or behavior. What cannot be settled yet becomes its own design or probe unit first.
- An evaluation runs on two or three real inputs, one with a known answer, before it is scaled. Two fix cycles on one unit that do not pass trigger a diagnosis and a different approach.
- Plan review now checks unit size, unsettled shared choices and rehearsal evidence. A plan resumed under this version first sends any remaining task that breaks these rules back to the planner to be split, keeping finished work.
- Workers may read a small file whole; only large files are read by range.

## 19.6.0 - Unreleased

`octoplan` 7.6.0 changes how a delivery runs in the Claude desktop app. The planner opens the supervisor session itself, checks its model and effort, and stops receiving its turn-end notes. The supervisor hands each batch of tasks to a fresh batch lead, a subagent that runs the workers and reviewers and returns a short receipt per task; the supervisor still validates and closes every task. Where the Octopad desktop is open, each batch lead shows on its tasks what its agents are doing, step by step; this needs the Octopad server's methodology 2.14.0, released with this version. A plan defect goes back to the planner session when it is free and has room, otherwise to a planner subagent, never to both. In both Claude and Codex, a supervisor now keeps its context under 70% (or the lower limit you set): 10 points before that limit it starts nothing new, finishes what is running and hands off, and after a compaction it starts no new work and instead reconciles and hands off. The app's instructions say a session started by another session cannot open a new session on its own, so a successor session starts without your click only on a turn you began; otherwise your AI says delivery waits until you open it, and that your next message to it is enough to start the successor while your instructions still cover it.

The first live run showed avoidable overhead. These changes target it and keep every required check; the savings are not measured yet:

- A batch lead stays in its own turn: it runs every check and Codex review in the foreground and gives a fix or a recheck to a fresh agent with the previous report, so it no longer wakes the supervisor mid-batch.
- Workers keep each tool result short, send test and build output to a log file and report only totals and failures. They stay off Octopad unless their deliverable lives there: they return any spec or record change as exact text, and the supervisor or batch lead writes it. A worker no longer launches its own reviewer: it names any pre-ship review its rules require, and the supervisor meets it or keeps it as a gate.
- Reviews follow what they judge: a bounded change proved by its checks gets a light review, and a one-way-door surface, security, a migration, weak checks, a published deliverable, a Plan or an eval protocol gets a heavy one. In Claude, light reviews run on Opus 5.5 at `high` and heavy ones at `xhigh`, whatever the worker's model. When a review fits both, it is heavy. A reviewer uses the worker's provider unless your own rules name another, and reruns only the proof it doubts.
- In Claude, mechanical tasks, where every choice is settled and checks prove the result, run on Sonnet 5.5 at `high`, with one Opus 5.5 `medium` retry if the checks fail. Without a matching agent definition, the supervisor sets effort on the launch call where it accepts one.

Both distributions move to 19.6.0.

## 19.5.1 - Unreleased

Lines meant for the Octopad team no longer load into your AI. `technical-writing` 2.0.2 and `pmm-check` 1.0.1 drop their "candidate" status lines, and `pmm-check`'s reading list drops its notes on an earlier internal method. `octoplan` 7.5.1 drops its maintainer section, now in this repository's README. In `octopad-knowledge-evidence` 2.2.1, "Building a complete set" again reads as one instruction: settle each doubtful item with one check aimed at it alone.

Both distributions move to 19.5.1.

## 19.5.0 - Unreleased

Six skills lose about 3,000 words of repeated or obsolete text in all; each rule now has one home and the others point to it.

- `octoplan` 7.5.0 drops the readers for plans saved by older Octoplan versions (Octoplan 18 briefs, routes saved before 5.1.0, the Opus 5 and Sonnet 5 readings, forced migrations, the legacy Codex pointer) and the two empty reference files `routing.md` and `codex-supervision.md`. A plan saved under an older version is read as unknown saved state and goes through recovery. Two task closes that advance no outcome now fall under recovery's stalled-progress trigger, which also owns cessation proof; `records.md` alone says a status-only update keeps a review and the mandate. The Codex internal supervisor Goal section is shorter, with the same rules.
- `manage-product-documentation` 6.2.0 keeps each rule once: the Product Fact evidence stop in the skill, scope resolution in `product-scope-and-seams.md`, impact classification and idea parking in `lifecycle-playbooks.md`, and the Product Map's contents in `artifact-shapes.md`. Its main file is about 300 words shorter.
- `octopad-notepad` 3.3.0 gives the briefing, a reminder's delivery and a follow-up question one shared claim rule in place of three. A claim still does not prove delivery, and an interrupted briefing now follows the same evidence path as the other two.
- `manage-market-intelligence` 3.1.0 states the cost of an ordinary update: one read of the destination and its sources, one version-checked write, one verification.
- `octopad-crm` 1.3.1 no longer repeats the distill and Enrich limits the `crm_runs` tool states, and keeps the judgment: rehearse, confirm the spend, leave what can wait to the nightly job.
- `manage-activity-context` 7.0.1 shortens the exact-wording attribution rule and keeps each example once.

Both distributions move to 19.5.0.

## 19.4.0 - Unreleased

`octopad-knowledge-evidence` 2.2.0 stops your AI from turning code into a decision nobody took. When the code differs from a decision, the code, its commit or pull request and their author show what was built, not who chose it: the decision is neither superseded nor reversed on that ground and keeps its choice until a source records the new choice and who made it; otherwise your AI asks you which holds, for each decision on its own, never through your yes to a cleanup batch. A path or a name in a decision still follows the code. A cleanup's proposed actions now include asking you. This version pairs with an Octopad server release in which the `knowledge` tool asks every decision to cite where its choice was made or recorded and say who chose (a person, a group, or an AI under a cited mandate), when and why ("unknown" for what the source lacks), no longer counts how things work today as a decision, tells your AI never to attribute a choice to whoever recorded or implemented it, and to ask you before a decision whose chooser is unknown rules out what you ask.

Both distributions move to 19.4.0.

## 19.3.0 - Unreleased

`manage-market-intelligence` 3.0.0 is rewritten to give users market information they can act on. Your AI starts from what Octopad already knows about the activity and its offers, then works like an analyst: it frames hypotheses, looks for existing studies and reports, plans its sources, rests each main conclusion on at least two independent sources, quantifies and concludes. It keeps three kinds of Market pages: the Market Overview as the market report (what to remember, including how the offer's stated positioning holds against the evidence; a market analysis in fixed blocks, from size and buying to prices and economics; what remains to verify), one page per main competitor, and one page for the other actors. When the internet does not answer, it uses what Octopad holds, asks you one grouped set of questions, estimates with its calculation shown or marks the point unknown. It estimates the market's size bottom-up, from counts of potential buyers and their annual spend, with assumptions and the calculation shown. Before writing, a fresh reviewer checks each conclusion and figure against its source. It ends by presenting the report in the conversation and, on later runs, what changed.

Both distributions move to 19.3.0.

## 19.2.1 - Unreleased

The planning skill 4.4.1 no longer sends an AI to a "Strategy block" to read stream descriptions: the early-access session brief has none. It reads each stream's description beside it in the session brief and, for a stream the brief does not list, the stream's framing through `build_context`.

Both distributions move to 19.2.1.

## 19.2.0 - 2026-10-18

The planning skill 4.4.0 no longer asks an AI to recheck finished work: a done task stays settled unless evidence contradicts its completion.

Both distributions move to 19.2.0.

## 19.1.0 - 2026-10-18

`octopad-knowledge-evidence` 2.1.0 teaches your AI to keep Key Information true, not only to record it. When something it writes or reads changes an item, such as a later decision, merged work, the code or an ended effort, it fixes the item in the same turn with the evidence: a fact is updated, a question closes only on a complete answer, a risk is mitigated or marked occurred, a changed choice becomes a new decision that supersedes only what it wholly replaces, and a decision whose detail moved, or whose part a later decision replaced, is edited in place. A deferred question reopens when its event happens. A decision is reversed, with its reason in its text, shortening the old wording to fit, when its choice was dropped, its own term passed, it only steered how a finished effort ran and no open work relies on it, or a decision of another workspace wholly replaced it; a choice about what an effort delivered stays active. Each detail of a new text is checked against its source. When the code that runs contradicts a decision's choice, the AI supersedes it only when the change was meant, and otherwise asks which holds; a choice not built yet is never reversed for that. Age and similarity prompt a check, never by themselves a change or a removal. When a stream is completed or archived, its open questions and risks are settled and the decisions that only steered how it ran are reversed; a stream archived to resume is left as it is. An item of the wrong kind is recreated as the right kind. A new section gives the procedure for an audit or cleanup the user asks for: a complete list, batches by subject, evidence per item, a fresh reviewer on every proposed change and on a sample of kept items the code or a later decision touched, the user's yes on each exact batch kept on a working page, version-checked writes and a readback. The skill's definition of what enters Key Information now matches the server's: what someone outside the current task will need; checks, approvals and blockers stay on the task. That definition takes effect fully once production runs kernel 2.12.0 (companion sudolab-co/octopad pull request #1347).

Both distributions move to 19.1.0.

## 19.0.0 - 2026-10-15

Tasks gain two statuses: `on_hold`, for work paused by choice, and `cancelled`, for work stopped without meeting its Done when. The planning skill 4.3.0 now cancels a task nobody will do, with a status line naming why and what replaces it, instead of archiving it; archiving only takes a task out of sight. The Notepad skill 3.2.0 also sets a reminder for an `on_hold` task waiting on a date or an event. This version needs the Octopad server release that adds these statuses.

Both distributions move to 19.0.0.

## 18.0.0 - 2026-10-14

Claude Code no longer asks you to sign in to Octopad again after each plugin update. The MCP configuration sent the plugin version in a header, and Claude Code stores the sign-in under the server's whole configuration, so every new version lost it. Both MCP configurations now carry the server address alone. Claude Code asks you to sign in once more after this update; later updates keep the sign-in. The `octopad-session` skill passes its version to `start_session` as `plugin_version`, which the Octopad server needs to keep its update notice. The README now covers installing from the Claude app as well as Claude Code.

Both distributions move to 18.0.0.

## 17.7.0 - 2026-10-14

Octoplan 7.4.0 lowers the default effort for checkable work in Claude. A bounded task whose tests, build or other deterministic check proves the result now runs on Opus 5.5 at medium effort instead of high, and continues once at high if those checks fail; code, configuration or command-line work with unresolved judgment or weak checks stays at high. In Codex, a worker on settled choices with reliable checks still starts on `gpt-6-luna` at xhigh effort and continues once on `gpt-6.1-sol` at high if its checks fail, and the default reviewer for bounded verification moves from the retired `gpt-5.6-sol` to `gpt-6.1-sol` at high effort. Routes already saved on existing tasks run as saved.

Both distributions move to 17.7.0.

## 17.6.0 - 2026-10-14

Octoplan 7.3.0 gives each newly planned task two routes: a Claude model and effort and a Codex model and effort, each chosen from that tool's own guidance with its reason. A team member who uses only Claude or only ChatGPT can run the task. The planner checks both routes against the task's steps, verification and access, naming an equivalent or recording a blocker where one tool cannot perform a step. The supervisor dispatches its own tool's route, and a manual task launch line shows both. Existing tasks keep their single route; running one in the other tool first adds the missing route, with a short review of that choice. The planning tool checks its route's availability before saving it, the other tool before launch; Fable is saved only once its conditions hold. Consent and takeover rules are unchanged.

Both distributions move to 17.6.0.

## 17.5.0 - 2026-10-14

A session that launches sub-agents keeps the Octopad connection for them, whether it works alone or supervises an Octoplan. octopad-session 17.5.0 tells a sub-agent to call no Octopad tool unless its brief grants access. Octoplan 7.2.0 makes no Octopad access the default for a task, kept only when the work or its proof needs it, such as a deliverable that lives in Octopad, and applies the same rule to reviewers and planning helpers. A sub-agent that connected used to receive the whole workspace orientation on its first Octopad call. The served kernel 2.10.0 carries the rule (companion sudolab-co/octopad pull request).

Both distributions move to 17.5.0. Takes effect fully once production runs the kernel 2.10.0 companion.

## 17.4.0 - 2026-10-14

octopad-session 17.4.0 says what the AI does with Octopad's follow-up when the connection offers the `followup` tool. It adds no comment or mention only to tell someone of a change it explained, unless the user asks. It checks a follow-up situation's sources before acting on it, and corrects one by recording the true fact on the item it cites. It follows something only when the user asks to be kept informed of it. When to explain changes is the served kernel's rule (kernel 2.9.0, in the companion sudolab-co/octopad pull request), not the skill's.

Without the tool, nothing changes. Takes effect once production runs sudolab-co/octopad#1285, #1289, #1292, #1303, #1304, #1305 and the kernel 2.9.0 companion, with the follow-up switched on.

Both distributions move to 17.4.0.

## 17.3.0 - 2026-10-14

Product documentation 6.1.0 keeps product specs lean. A spec now holds its purpose, its principles, the behavior users get today, the work still to come and one Verified section, in compact language where every line says who does what, when and where. History, delivery notes, release receipts and code inventories move to tasks, pull requests and history pages. Unreleased changes sit under Next with a state label, so a reader never mistakes them for live behavior. The Product Map becomes a plain index: one line per feature, linked to its spec. Before a need, rule, constraint or scenario leaves a spec, your AI records where it went: kept, moved, replaced or unresolved. A substantive rewrite gets a review by someone who did not write it.

Both distributions move to 17.3.0.

## 17.2.0 - 2026-10-14

CRM 1.3.0 has the AI agree an Enrich run with the user before launching it. For contacts, it asks which values to buy, email, phone or both (email alone unless chosen), and confirms the most the run may spend: the contacts it names, or its record limit once it targets a segment, times the price of each value. It offers a dry run first, which spends nothing, and says how to buy phones for contacts that already have an email. The cost guidance now says that Scout and Enrich spend Octopad credits per candidate proposed and per value found on Octopad's FullEnrich access, and nothing on the organization's own FullEnrich key.

Both distributions move to 17.2.0.

## 17.1.0 - 2026-10-13

Octoplan 7.1.0 keeps its agents' context small. Every agent searches before reading, reads only the parts of files and pages it needs, and prints summaries and failures instead of full logs, while still fetching any evidence it left out before relying on it. Workers hand long external waits, such as CI, back to the supervisor instead of waiting on them. Agents process their whole context again on every turn, so carrying less output should lower usage. Reviews, gates and records are unchanged.

Both distributions move to 17.1.0.

## 17.0.1 - 2026-10-13

Planning and work design 4.2.1 clarifies that creating a stream or a plan grants no agent-delivery mandate and does not pause work the user already asked to execute. Requests limited to planning stay limited to planning. Existing autonomy choices and human gates remain in place.

Both distributions move to 17.0.1.

## 17.0.0 - 2026-10-10

Octoplan 7.0.0 keeps delivery records in working documents instead of Decisions. Tasks stay the plan. Each delivery gets a journal holding your go, plan reviews and current supervision, plus a short contract page only when the tasks lack shared details. New plans no longer add routine Decisions to Key Information. Plans already under way keep their records; nothing is migrated.

A bounded delivery in an ongoing stream can keep its working documents on that stream. When it ends, only its own documents move to Archive; the stream and its other work are untouched. Working documents stay searchable until archived. Knowledge guidance records only lasting findings as Key Information.

Both distributions move to 17.0.0.

## 16.0.0 - 2026-10-10

Both MCP configurations now send the installed plugin version to Octopad in the `x-octopad-plugin-version` header (Claude Code `headers`, Codex `http_headers`). Nothing else is added and session behavior is unchanged. Both distributions move to 16.0.0.

## 15.3.0 - 2026-10-09

Octoplan 6.5.0 puts long reports on a working page of the task or stream, links required files, and records execution receipts in task comments rather than Decisions. Required Octoplan Decisions and existing contract-page receipts stay in place. Both distributions move to 15.3.0.

## 15.2.0 - 2026-10-09

Octoplan 6.4.0 makes a Codex native Goal an internal supervisor mechanism instead of an option offered at autonomy choice. A supported, permitted Goal names the full confirmed Brief outcome within the supervisor's boundary and its acceptance proof. The supervisor checks native state, ownership and the current mandate before continuing, respects human gates, and completes only on proof of that whole objective.

Creation still needs an applicable explicit user request or system/developer instruction under the host's rules; choosing delivery or reading this skill grants none. Without that permission or capability, delivery continues without adding a Goal or asking the user to enable one. Existing stops and budgets are respected, and handoff never transfers a Goal or justifies false completion. No new scheduler, delivery mode or Claude runtime behavior. Both distributions move to 15.2.0.

## 15.1.0 - 2026-10-09

octopad-knowledge-evidence 1.3.0 puts only a document that is authoritative in itself, such as a contract or a price grid, into `files`, attached to its task, without asking first; it no longer offers to keep every file the user hands over. Kernel 2.6.0 keeps no raw material and captures in the same turn, so the skill drops its line against leaving the original outside Octopad and its own same-turn capture line, and adds only what the kernel does not say: each extract drawn from raw material keeps a pointer to the original where one exists and is permitted, and is otherwise labeled unverified. technical-writing 2.0.1 states the em-dash ban as Octopad's house rule, which overrides the Google guide; same behavior. Needs kernel 2.6.0 (sudolab-co/octopad#1196) and lands with 15.0.0. Both distributions move to 15.1.0.

## 15.0.0 - 2026-10-09

The four documentation skills teach head pages and their At a glance blocks. Sessions open on the Organization Overview the server composes from the At a glance blocks of the head pages each reader can read: the Activity Overview, one Product Overview per offer and the Market Overview, of the organization and of the session's workspace. Each skill names its head page, its keys and its folder, and updates an At a glance block in the same turn as a change that alters it. No skill patches or trims a Company Overview any more.

manage-activity-context 7.0.0 keeps the Activity Overview and its keys `what_we_do`, `for_whom`, `why`, `binding_constraints` and `who_decides`. An organization still on an untyped Company Overview cuts over with the user's agreement: its Product and Market Overviews first, then an admin's AI types the old page as the Activity Overview, then its offer, audience and money sections move into the Marketing section of the Product Overview they describe. The onboarding compatibility reference is retired. manage-product-documentation 6.0.0 keeps one Product Overview per offer, owns the page and its `offer_and_availability` key, and leaves the Marketing section to product marketing. manage-market-intelligence 2.0.0 keeps the Market Overview and its keys `main_alternatives` and `what_it_implies`, saves processed findings rather than raw files, and lets other owners link to its evidence instead of copying it. manage-product-marketing 2.0.0 is rewritten from its Product Spec in five parts: find the owner, keep useful marketing context, separate capture from choice, refresh narrowly, finish economically. It writes `audience_and_need`, `promise` and `conditions` with the Marketing section in one call, and leaves generic capture, evidence and readback rules to the kernel.

Each skill files its family's pages in the Activity, Product or Market folder of their scope; an admin's AI creates a missing organization folder, a member's AI leaves the page unfiled and says so. manage-product-documentation says a scope holds at most 10 live Product Overviews. Needs server work production does not run yet: sudolab-co/octopad#1198 (migration 694), #1202 (the pages tool's `head_type` and `at_a_glance`), #1203 (the Organization Overview in the session brief), #1204 (the web app and the seeded Activity Overview) and kernel 2.6.0 (#1196, capture and raw files). Lands once production runs this build (#1198, #1202, #1203, #1204, kernel 2.6.0) and serves the kernel brief to every organization: the V1 brief shows no At a glance. Both distributions move to 15.0.0.

## 14.8.0 - 2026-10-09

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
