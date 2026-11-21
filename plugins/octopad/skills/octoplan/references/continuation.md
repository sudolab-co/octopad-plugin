# Manual continuation

## Pointers and settings

- A continuation is a pointer, never a payload: before handing over, persist facts, authority, pending effects and work state in Octopad.
- The receiving session reads the current workspace and task context and the canonical delivery records under [records.md](records.md); it does not infer authority or completion from the block.
- A block is not an active successor.
- A manual launch does not widen the mandate or require a duplicate confirmation from the user.

Supervisor pointer:

```text
Octoplan <stream>
Octopad · Organisation: <organisation> · Workspace: <workspace>
Journal: <page title> (<page ID>) · Boundary: <boundary> · Workspace: <owning workspace ID>
User language: <the language the user writes in>
```

- Use the stream's plain name, without ` (octoplanned)`.
- Supervisor pointers name the canonical journal, so that separate deliveries in one stream cannot be confused.

- An additional line may name an indispensable environment fact Octopad cannot hold.
- Immediately below the fence of every block you give the user, put one plain settings line: the recorded supervisor route, and `solo` or `parallel-safe`. Interpret each runtime's route with its own profile.
- Before any work, the receiver verifies readiness, ownership and authority, and proves cessation under [recovery.md](recovery.md#reconcile-actors-before-replacement).
- A block offered before a gate clears is expressly for later use and cannot waive that gate.

- After an accepted takeover, a manually launched supervisor owns sequencing and uses the selected runtime's supported worker mechanisms.
- If those are unavailable, report the actual limit rather than silently acting as its own workers.
