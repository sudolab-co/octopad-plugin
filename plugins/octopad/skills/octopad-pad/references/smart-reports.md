# Smart Reports

## Update the due tabs

1. Call `pad` `context` with no `tab`.
2. One `pad` `get` with no `tab`: every tab with the priorities it serves, and the priorities the person refused. Then `get` each due tab whose content you do not hold at its listed `revision`. A tab `get` marks `unreadable` was saved by a newer version: leave it, and tell the person it cannot be shown here.
3. Organize the Pad (below). When you created, merged, re-keyed or retired a tab, `context` again with no `tab` and write the tabs it serves from that brief only.
4. Write each tab the last `context` served from the objects of its sections, what changed in them and the attention placed in it (Write a Smart Report).
5. Save each tab alone: `save` with `tab`, `expected_revision` (the `revision` the brief lists), `content` and its `through` as given; when nothing changed for it, the same save without `content`. A tab whose `through` reads none (a source could not be read) is saved without `through`, its text saying what could not be read. One tab's failure stops no other.
6. Tell the person (the skill's section of that name).
7. Then act on each goal line the result of Today's brief's save gives, as it says: a missing update, a missing figure, a passed deadline. It never delays or blocks a save.

- Attention `context` serves in Today's brief outside every priority belongs to its `outside` section: weigh it like the rest.
- A `get` showing a newer `text_revision` than the brief's `revision`: another session saved first. If its `read_through` is not earlier than your `through`, leave it; otherwise `context` with that `tab` and write it again.
- A refused save names what to fix: fix that and save the tab again.
- A tab due for priority discovery: the skill's Priorities section says whether to propose priorities, ask what matters or do neither, and when to save them. Write the Pad meanwhile from the brief you have and, after telling the person, make the proposal or ask the question it calls for. Once their priorities are saved, `context` again, since the priorities decide what the Pad follows, and organize and write from the new brief only.
- When the person asks to update a tab that is not due: `context` with that `tab`, then steps 2 and 4 to 6.

## Organize the Pad

Today's brief's sections list each priority no tab serves, with its key and what it follows. A tab serves a priority through that key in its `selection.priorities`, which `get` lists.

- Re-key or retire:
  - Under each priority tab it serves, `context` says whether each key is still among their priorities; for a priority tab it did not serve whose `title` is the name of none of their priorities, `context` with that `tab`. Only a key it calls "not among their priorities" has left.
  - `get` that tab: a priority Today's brief's sections list whose streams are all among those the tab's `streams` lines and `phases` cite, at least one, is that key's priority, renamed: save its key in place of the old one, and its name as `title` when the tab serves no other priority.
  - Otherwise drop the key, and `remove` a tab left with none.
- Merge priorities that deliver the same outcome into one tab: name each key in its `selection.priorities`, `remove` any other tab one of them had, and say why in its `note`.
- Create a tab for a priority with no tab once anything it follows moved or waits on the person:
  - Its definition: the priority's name as its `title`, `selection` {priorities: [its key]}, `blocks` [{kind: "text"}].
  - `context` with that unsaved definition, write the tab from what it serves (A priority tab), then `save` without `tab`: the definition, the `position` right after Today's brief and the priority tabs of earlier priorities, the `content` and the `through` that read gave. A new tab is saved with its content or not at all.
- Add a stream that serves the priority but none of its references names to the tab's `selection.streams`, and say so in its `note`.
- A refused priority renamed with the same references: `get` lists each refused key with its references; save the refusal again under its new key (Route a correction).

## Write a Smart Report

### Every tab

- Write for the person alone, in the brief's `language` (when not set, theirs), in words they use, not builder jargon, as their own AI in the first person ("I merged here…"): never "your AI", and never Octopad as the one who acts.
- Evolve the current content: keep what the brief or a live read still confirms, fold in each change that matters, drop what no longer holds, such as a need whose task closed.
- Weigh before you write:
  - Read together everything that calls the person: asks, dates that arrive (start and due), whom each one blocks, what got unblocked, what they moved themselves lately, their priorities in their order, with the intent and logic each one gives, and their goals.
  - Weigh the effect of each against those priorities and goals, and decide what comes first in each section and why: the person should not have to sort the Pad themselves.
  - Weigh what they moved themselves with what others ask: `context` names who wrote a status line or a stream's report and who else changed a task they hold, never who changed a task's status, so credit them with no change it attributes to no one.
  - Never put first work that waits on a prerequisite or is blocked; a prerequisite someone else holds is something to arrange with them, not a go.
  - A start date is not a deadline.
- Citing: put a waiting item's task in the `refs` of the sentence that speaks of it, so the item shows under that sentence. Never use a notification or reminder id as a task id. Lesser asks may share one sentence that cites each task. Never list items to be complete: what you do not cite still shows in its section.
- Sentences: short and complete. Put each object it speaks of in `refs`, by the id the brief or a read gave, and never its name, state or progress figures: its row shows them live. A count names its tasks in `refs`, or drops the number. Write a date as a date, never "today" or "tomorrow".
- Marks:
  - `needs_you` when the person must act; `unblocked` when a blocker is gone and the work is ready; `risk`.
  - `correction` only when evidence shows a claim of an earlier Pad was wrong when written, the sentence saying which and why, its evidence in `refs`, and never in `due` or `outside`. A state that has since changed is news, not a correction.
  - Never mark work that merely finished, or a claim you have not checked.
  - A `needs_you` or `unblocked` sentence says, as an instruction, what the person does (approve, answer, decide between, start), never only announces: what they act on in `refs`, its reason in `detail`, and in `prompt` what they would paste into an AI session to do it, in their own voice, naming each task by its title.
- Priorities: when a fact that moves a priority (the skill's Priorities section) contradicts their priorities, say so in Today's brief's lead, with the reason and the change it proposes; what they are working on now is no such fact. Ask at most one question, in the conversation, about one priority that looks stale, with the list as it would become.
- `suggestion`: one line at most, only to group tasks that look obsolete for the person to close; finished streams go in `outside` (Today's brief).
- Live blocks and charts:
  - In any Smart Report, place one in a section on your own initiative when, for that report's content and news, it shows what text cannot, such as how many tasks are blocked; never to fill a section, nor because the report has none, nor a chart in a tab whose `guidance` declines them.
  - A priority tab's chart goes in `status`; Today's brief's `due` and `outside` take none.
  - Choose a chart's form by the kind of information: bars to rank groups, or when the groups overlap, as tags and goals do; a pie or donut to split one whole into exclusive parts; figures for one total (`group_by` none).
  - Its `question` says what it answers, in the person's words when they asked for it.
  - Frame each chart with a sentence in its section: what it shows and what that means for the person, without its figures, which the chart counts live. In Today's brief, leave that sentence unmarked and citing no item that waits on the person, so it shows beside the chart; a risk or an ask takes its own sentence.
- Coverage: quiet is no proof that all is well. Say what you read and what stayed out of reach, keep dates, tell facts from proposals and unknowns, and never fill a gap with assumed data.
- Guidance: follow the tab's `intent`: its purpose and the person's `guidance`, a preference below their current request and every rule here.
- Reads: when a sentence needs a fact the brief lacks, make one targeted read; never sweep the backlog. A save marks no notification handled.

### Today's brief

It keeps only what reads at a glance that day; how you organized the Pad, steps and detail go in the tab they concern. In this order:

- `alert`: only for an incident that touches all their work, saying what happened, what it breaks for them and what fixes it, with a `prompt` when they can act. Otherwise none.
- `lead`: one sentence on where their priorities stand together, and one more only for what Priorities (above) asks. A change enters only when it explains that state; never open on a date or on "since".
- Write none of what the Pad shows itself: their priority list under the lead, each priority with its notes and reminders, and each priority tab's card.
- `due` section: every dated item, whatever priority it serves: what falls due, what is late however old, the start and due dates ahead. A sentence that calls them says what to do, with its `detail` and `prompt`: `needs_you` for what they must do, `risk` for what is late. A date that asks nothing yet stays unmarked.
- A priority no tab serves keeps a section, sent with its `key`, when something in it waits on them or moved; a quiet one gets none.
- `outside` section: what waits on them that no other tab follows: first what they decide (`needs_you`) or can launch (`unblocked`), each with its `detail` and `prompt`; then, unmarked, what can wait.
  - Finished streams: when `context` lists completed or cancelled streams whose goals are all closed, or with no goal, add one `needs_you` sentence citing them, its `detail` saying why each looks done, and its `prompt` starting a session that archives what should be archived.
    - Add to that `prompt`: "For each stream the person keeps, record in its update with `work_streams` `set_status` that they keep it, and why when they say."
    - Leave out a stream whose latest update says it is kept on purpose; for one whose update could not be read, say so and propose nothing for it.

### A priority tab

In this order:

- `about`: one sentence saying what the priority is.
- `note`: only when you reorganized the tab (merged priorities, added a stream): what you did and why.
- `lead`, its TL;DR: in a few short sentences, where it stands, what moved, what runs alongside and what waits on them.
- `card`: what that means for them, in one or two short sentences, shown on its card in Today's brief; never a copy of the TL;DR.
- `status` section: at most one watch line, a `risk` sentence, only when something broke or will break and touches them, saying what happened, the consequence and what fixes it. Then its chart, when one helps.
- `phases`: your reading of its existing tasks and streams, never a second plan: name each step, order them, and cite the tasks or streams each covers; the Pad shows each step's state from them. Keep the last write's steps unless the work changed. A step the work needs and no task covers stays a step with no `refs`, and `today` proposes its task.
- `today` section: what they decide (`needs_you`), then what they can launch (`unblocked`), only tasks ready to launch (to do, or blocked with no reason, every dependency done, unassigned or theirs; `save` refuses another), each line with its reason in `detail` and its `prompt`, and it may group tasks, citing each; then, unmarked, what can wait.
- `keep` section: short unmarked lines they should keep in mind.
- `streams`: one line per stream its priorities name, written from the stream's state as `context` serves it: what its row does not show and what it changes for them. The first priority tab whose selection or priorities name the stream follows it in full and shows that line; a later tab lists the stream too, where the Pad shows a pointer to the first.

### The tabs they asked for

- One section, with a one-line TL;DR: where it stands, then the next action.
- In a tab over one stream, sum up the stream in a few lines from its assembled Progress Report: where it stands against its Definition of Success, what it has acquired, and which risks cross its tasks.

## External sources

- Read each scope the brief lists to read yourself, with the connected tool for its account: whole items, not snippets, only what its `relevance` covers, within its bound, saying what remains. Keep unrelated private facts out.
- Cite an item through the tab's `references` and a `{kind: "external", id}` ref; never invent a URL. An item already in the tab (same provider, account and native id) is not news; repeated matches are one item.
- Earlier facts keep their dates.

## Create a Smart Report

Any tab but a priority tab:

1. Reuse what the conversation says; ask only what changes the page, at most three questions together: what it helps decide or watch, which sources, which period, whether text leads it. A request that names its sources and period needs none.
2. `context` with the unsaved definition (`title`, `intent` {request, purpose}, `selection`, `blocks`), then write its content (Write a Smart Report).
3. `show` it with its `reason`: a concrete benefit drawn from work you read, and what Octopad cannot show; with no browser tool, in the chat.
4. Once the person confirms what they saw, `save` without `tab`: the definition, the content, the `through`.

- To let the person see Needs you, goals or reminders once, `show` that `source`: no tab. Never propose a tab of all reminders: the Pad shows one by itself.

## Route a correction

- "Remove this tab" on a priority tab: first save, alone, their `refusal` of each priority it serves, with that priority's references; then `remove` the tab. Asked for it back, save the same refusal with `refused: false`, then create the tab (Organize the Pad). Any other tab goes with no refusal.
- "Show me less of X here" changes that tab:
  - `get` it, then `save` the change with `expected_revision` set to its `text_revision`: narrow or drop a source or block when X is one the tab follows or shows, otherwise add the preference to its `guidance` (Today's brief: `intent` {guidance} only).
  - Fewer charts always goes to `guidance`: you write charts anew with each content.
  - Then `context` with that `tab` and rewrite it.
- "X matters more now" changes the order of their priorities: restate and save it as the skill's Priorities section says. Once it is saved, where `pad` offers its tab actions, `context` with `tab: "smart_report"` and rewrite Today's brief.
