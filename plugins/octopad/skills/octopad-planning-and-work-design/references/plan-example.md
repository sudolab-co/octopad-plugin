# Launch example

User, on 2026-04-26: *"Lay out the launch: research, then design, then build, then ship, across the next five weeks."*

- First open the stream "Launch Q2" with its `definition_of_success`, its goal and a `target_date` of `2026-05-31`, five weeks from the ask. The span is the effort's horizon, and no task carries a date.
- Then send the whole graph in as few `batch_tasks` calls as its limits allow, the stream given once as each call's default and `depends_on_refs` carrying every edge, an earlier call's task by its ID. Make no second pass of `tasks` `link_dependency` calls: one `tasks(action:"create")` per task and then those calls take seven round trips for one plan.
- Start each top-level title with `P1 · ` to `P4 · `, with no parent holding them: the launch follows one logic, research then design then build then ship. Five independent fixes, each checked in its own Done when, follow no such logic: they get no phases, no umbrella, and a test task only when one is needed.

