# Manual continuation

Supervised tasks need no Next lines, and supervised workers ignore existing ones.

## Pointers and settings

A continuation is a pointer, never a payload. Persist facts, authority, pending effects and work state in Octopad before handing over. The receiving session reads current workspace/task context and canonical delivery records under [records.md](records.md); it does not infer authority or completion from the block. A block is not an active successor. Manual launch does not widen the mandate or require a duplicate go.

Supervisor pointer:

```text
Octoplan <work stream>
Octopad · Organisation: <organisation> · Workspace: <workspace>
Journal: <page title> (<page ID>) · Boundary: <boundary> · Workspace: <owning workspace ID>
```

Use the stream's plain name without ` (octoplanned)`. Supervisor pointers identify the canonical journal so separate deliveries in one stream cannot be confused.

An additional line may name an indispensable environment fact Octopad cannot hold. Every block emitted to the user has one plain settings line immediately below its fence: the recorded supervisor route, and `solo` or `parallel-safe`. Interpret each runtime's route with its own profile. Before any work, the receiver verifies readiness, ownership and authority, and proves cessation under [recovery.md](recovery.md); a block offered before a gate clears is expressly for later use and cannot waive that gate.

A manually launched supervisor owns sequencing after accepted takeover and uses the selected runtime's supported worker mechanisms; if those are unavailable, report the actual limit rather than silently acting as its own workers.
