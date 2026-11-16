# Sending an approved draft

Octopad sends no outreach email for most organizations. The prospect octobot drafts; the member approves; the email leaves from their own mailbox.

1. Approve with `crm_outreach` `approve`, with an optional edited `subject` and `body` that become the email, or `reject` with a `reason`, which the next draft run learns from.
2. Send the approved draft as the `crm_outreach` description says, with your own mail tool, such as a Gmail or Outlook connection. Without one, give the user the text to send from their own mailbox; once it went out, they mark it sent on the CRM Outreach page, or give you the message id to record with `mark_sent`.

Never send a draft whose contact was deleted, or that was already sent.

- Where a reply goes: a reply comes back to the mailbox that sent the email, never to Octopad. When the user's mail shows one, record it with `record_reply`: `draft_id`, the reply's `provider_message_id`, `thread_id` and `received_at` (`reply_body` is optional). That marks the draft replied and logs it on the contact. A reply to an email that has no draft is a signal or an entry.
- A message sent outside a draft is recorded afterwards. Where the organization has `crm_interventions`, record it there, one phase at a time, for a contact, on the email, in-app or assistant channel, and never with the message body; a reply to a recorded intervention is its `responded` phase, which already writes the signal. Elsewhere, write it as a signal or an entry. A call or a message on another channel is a signal or an entry.
- Octopad's own sending exists only for some organizations: `crm_outreach` `send` and `crm_send_config`. It stays a rehearsal until a workspace admin makes the workspace live there. Where the organization has it, change the sending configuration with `crm_send_config` `set` when a workspace admin asks you to; for any other user, never change it. Before such a send, say whether it will really go out.
