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
- `intent` is saved whole: resend `request` and `purpose` with a `guidance` you add or change, and keep the person's earlier preferences in it unless they replace them.
- A tab that shows the AI Notepad is `{ "kind": "notepad" }` alone; save one only when the person asks.

## A chart in a section

```json
{ "kind": "chart", "question": "How many launch tasks are blocked?", "form": "bars", "group_by": "status",
  "definition": { "app": "work", "scope": "all", "layout": "list", "filter": {},
    "work": { "version": 1, "itemType": "tasks", "groupBy": "none",
      "filters": { "workspace": { "include": [], "exclude": [] }, "goal": { "include": [], "exclude": [] },
        "stream": { "include": ["22222222-2222-4222-8222-222222222222"], "exclude": [] },
        "assignee": { "include": [], "exclude": [] }, "tags": { "include": [], "exclude": [] }, "subStatus": { "include": [], "exclude": [] },
        "statuses": ["todo", "in_progress", "blocked"], "finishedWindow": "never", "waitingOnMe": false },
      "columns": { "order": ["title"], "visible": ["title"], "widths": {} }, "sort": null, "direction": "asc" } } }
```

The Pad counts it among the tasks the tab follows. In a Smart Brief section its filters name no stream, goal or tag.

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
