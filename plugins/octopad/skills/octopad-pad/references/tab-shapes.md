# Tab shapes

Illustrative shapes, not defaults: take ids and choices from the person's request and the work you read.

## A tab with text and a task view

```json
{
  "action": "save",
  "title": "Launch week",
  "intent": { "request": "A tab on the launch", "purpose": "Watch what holds the launch back and what waits on me" },
  "selection": { "scope": "all", "streams": ["22222222-2222-4222-8222-222222222222"], "period": { "rolling_days": 7 } },
  "blocks": [
    { "kind": "text" },
    { "kind": "work_view", "definition": {
      "app": "work", "scope": "all", "layout": "list", "filter": {},
      "work": { "version": 1, "itemType": "tasks", "groupBy": "none",
        "filters": {
          "workspace": { "include": [], "exclude": [] }, "goal": { "include": [], "exclude": [] },
          "stream": { "include": ["22222222-2222-4222-8222-222222222222"], "exclude": [] },
          "assignee": { "include": [], "exclude": [] }, "tags": { "include": [], "exclude": [] },
          "subStatus": { "include": [], "exclude": [] },
          "statuses": ["todo", "in_progress", "blocked", "on_hold", "pending_review", "done", "cancelled"],
          "finishedWindow": "never", "waitingOnMe": false },
        "columns": { "order": ["title", "status", "updated_at"], "visible": ["title", "status", "updated_at"], "widths": {} },
        "sort": "updated_at", "direction": "desc" } } }
  ],
  "content": { "sections": [ {
    "tldr": "Review holds the launch; your answer on pricing frees it.",
    "sentences": [ { "mark": "needs_you", "text": "The release waits on your pricing answer.", "refs": [ { "kind": "task", "id": "33333333-3333-4333-8333-333333333333" } ] } ]
  } ] },
  "through": "<the through the context gave>"
}
```

- `{ "kind": "text" }` says where the text shows; a tab's first text comes with it. A tab over one stream needs none: its report is the summary.
- Other blocks: `{ "kind": "progress_report", "streams": [...] }`, `{ "kind": "needs_you", "kinds": [] }`, `{ "kind": "goals", "states": [] }`, `{ "kind": "reminders", "scope": "all" }` (or `"unclassified"`, or `{ "refs": [{ "kind": "task", "id": "…" }] }`). An empty list means all. A view's `worked_by_agent` names an agent key and shows that agent's dated actions in the period.
- Every stream, goal, tag and agent a block names is in `selection`; tag filters take tag ids. With a workspace `scope`, each view and workspace filter stays on that workspace. In a tab with a period, a view shows the tasks that moved in it: set `finishedWindow` to `never`.
- `intent`, `blocks`, `references` and each `selection` key are saved whole: resend what stays, such as `request` and `purpose` with a `guidance` you change, or the current `external_scopes` with a new scope. Keep the person's earlier preferences in `guidance` unless they replace them.
- A tab that shows the AI Notepad is `{ "kind": "notepad" }` alone; save one only when the person asks.

## A priority tab

Read it before it exists, with `context` on its unsaved definition:

```json
{ "action": "context", "title": "Atlas launch", "selection": { "scope": "all", "priorities": ["theme:3f9a1c27", "theme:5b81e0d4"] },
  "blocks": [ { "kind": "text" } ] }
```

Then create it in one save: the same definition, its `position`, the `through` that read gave and its first `content`. A later save sends `tab`, `expected_revision`, `through` and `content`.

```json
{ "action": "save", "title": "Atlas launch", "selection": { "scope": "all", "priorities": ["theme:3f9a1c27", "theme:5b81e0d4"] },
  "blocks": [ { "kind": "text" } ], "position": 1, "through": "2026-11-16T07:29:20.412927Z",
  "content": {
    "about": "The release of the Atlas app to every customer.",
    "note": "I merged here your priorities Atlas launch and Launch video: they deliver the same launch.",
    "lead": "The app passed its build review and waits for the store. The launch video is in editing alongside. What waits on you: the pricing answer.",
    "card": "The release waits only on your pricing answer; the rest runs without you.",
    "phases": [
      { "label": "Build the app", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444441" } ] },
      { "label": "Store review", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444442" } ] },
      { "label": "Press kit", "refs": [] }
    ],
    "sections": [
      { "key": "status", "sentences": [ { "mark": "risk", "text": "The store rejected the build on 2026-11-15 for a missing privacy label: the release slips until the label is added and the build resent.", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444443" } ] } ] },
      { "key": "today", "sentences": [
        { "mark": "needs_you", "text": "Answer the pricing question so the store listing can go out.", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444444" } ],
          "detail": "Waiting since 2026-11-12; the listing needs the price.", "prompt": "Open the task \"Set the Atlas price\" and walk me through the two options so I can answer." },
        { "mark": "unblocked", "text": "Start the store screenshots and the release notes.", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444445" }, { "kind": "task", "id": "44444444-4444-4444-8444-444444444446" } ],
          "detail": "Both are ready since the build passed review.", "prompt": "Start \"Make the store screenshots\" and \"Write the release notes\" and show me each draft." },
        { "text": "The launch email can wait until the price is set.", "refs": [ { "kind": "task", "id": "44444444-4444-4444-8444-444444444447" } ] }
      ] },
      { "key": "keep", "sentences": [ { "text": "Support asks for two days' notice before the release." } ] }
    ],
    "streams": [ { "ref": { "kind": "stream", "id": "22222222-2222-4222-8222-222222222222" }, "text": "Built and in store review; only the price holds it." } ]
  }
}
```

- `status`, `today` and `keep` take no title and show fixed labels. `status` takes unmarked, `risk` and `correction` sentences and blocks; `today` takes `needs_you`, `unblocked`, unmarked and `correction`; `keep` unmarked and `correction`.
- `about`, `card`, each `detail`, phase label and stream line is one line. A phase cites tasks or streams only.
- A refusal of a priority's tab, by its key and the priority's references:

```json
{ "action": "save", "refusal": { "priority": { "key": "theme:3f9a1c27", "refs": [ { "kind": "stream", "id": "22222222-2222-4222-8222-222222222222" } ] }, "refused": true } }
```

## Today's brief's content

```json
{
  "lead": "Everything leads to the Atlas release: the app waits for the store, billing moves next week and hiring is paused.",
  "priority_lines": [
    { "key": "theme:3f9a1c27", "text": "Ship the Atlas app to every customer." },
    { "key": "theme:7d20be4a", "text": "Move billing to the new payment provider." }
  ],
  "sections": [
    { "key": "due", "sentences": [
      { "mark": "needs_you", "text": "Send the signed vendor contract back, due 2026-11-16.", "refs": [ { "kind": "task", "id": "55555555-5555-4555-8555-555555555552" } ],
        "detail": "Legal approved it on 2026-11-14; the vendor starts once it is back.", "prompt": "Open \"Return the vendor contract\" and draft the email that sends it back, for me to approve." },
      { "mark": "risk", "text": "Move or close the two late tasks.", "refs": [ { "kind": "task", "id": "55555555-5555-4555-8555-555555555553" }, { "kind": "task", "id": "55555555-5555-4555-8555-555555555554" } ],
        "detail": "They were due on 2026-10-02 and 2026-10-20.", "prompt": "Show me my two late tasks and help me move, drop the date of, or close each one." }
    ] },
    { "key": "outside", "sentences": [
      { "mark": "needs_you", "text": "Answer the office move question.", "refs": [ { "kind": "task", "id": "55555555-5555-4555-8555-555555555555" } ],
        "detail": "The office manager needs your choice of desk area.", "prompt": "Open \"Choose desk areas for the move\" and give me the options." },
      { "text": "The newsletter draft can wait.", "refs": [ { "kind": "task", "id": "55555555-5555-4555-8555-555555555556" } ] }
    ] }
  ]
}
```

- `due` takes `needs_you`, `risk` and unmarked sentences; `outside` `needs_you`, `unblocked` and unmarked; neither takes a title or blocks. `alert` ({text, refs, prompt}) and `priority_lines` go in Today's brief only.

## A chart in a section

```json
{ "kind": "chart", "question": "How do the launch's open tasks split by status?", "form": "donut", "group_by": "status",
  "definition": { "app": "work", "scope": "all", "layout": "list", "filter": {},
    "work": { "version": 1, "itemType": "tasks", "groupBy": "none",
      "filters": { "workspace": { "include": [], "exclude": [] }, "goal": { "include": [], "exclude": [] },
        "stream": { "include": ["22222222-2222-4222-8222-222222222222"], "exclude": [] },
        "assignee": { "include": [], "exclude": [] }, "tags": { "include": [], "exclude": [] }, "subStatus": { "include": [], "exclude": [] },
        "statuses": ["todo", "in_progress", "blocked", "on_hold", "pending_review"], "finishedWindow": "never", "waitingOnMe": false },
      "columns": { "order": ["title"], "visible": ["title"], "widths": {} }, "sort": null, "direction": "asc" } } }
```

The Pad counts it among the tasks the tab follows. In a section of the first Smart Report its filters name no stream, goal or tag.

## An external scope and a reference

```json
{ "id": "30000000-0000-4000-8000-000000000001", "provider": "slack", "account": "example-workspace",
  "label": "Launch channel", "selector": "C12345", "relevance": "Only the launch; leave out other topics in the channel" }
```

`selector` is a Gmail or Drive query, or an exact Slack channel id. A scope goes in `selection.external_scopes`.

```json
{ "id": "launch-thread", "scope_id": "30000000-0000-4000-8000-000000000001", "provider": "slack",
  "native_id": "C12345:1730000000123456", "label": "Launch thread",
  "url": "https://example-workspace.slack.com/archives/C12345/p1730000000123456" }
```

A reference goes in the tab's `references` and a sentence cites it as `{ "kind": "external", "id": "launch-thread" }`. Its `url` is the item's own address from the tool that read it.
