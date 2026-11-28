---
name: technical-writing
description: "Use when writing, editing or reviewing technical or user documentation, in English or French. Removes AI-flavored prose in the Google developer style. Not for chat, emails, social posts, blogs or marketing copy (pmm-check)."
---
Version: 3.0.2

# Technical writing

Write documentation for readers who missed the conversation. Use documentation style, without chat or assistant phrasing.

- Follow the [Google developer documentation style guide](https://developers.google.com/style), distilled below. Consult it for cases not covered here.
- Apply this guidance in English and French. The target language’s grammar and established product terms take precedence.

## Voice and grammar

- Second person ("you"), active voice, present tense.
- One term per concept: never alternate terms for variety.
- Define unfamiliar terms on first use. Write for the reader who needs the document with the least prior context.
- Plain words for a global audience: no idioms, no Latin ("for example", not "e.g.").
- Sentence case for headings. Task headings say the task: "Install the CLI", not "Installation".
- Recast em-dashes with commas, full stops, colons or parentheses. This default overrides Google’s guide; use em-dashes when the workspace’s own style does.

## Kill the AI flavor

- No filler: "please", "simply", "just", "easily", "note that", "in order to", "it's important to note".
- State what you know. Hedge only real uncertainty and explain why.
- No inflated vocabulary: "use" not "leverage" or "utilize", "check" not "delve into". Ban "seamless", "robust", "powerful", "comprehensive" unless measured.
- Use bullets for parallel items, not in place of paragraphs. Avoid walls of bold-label bullets.
- Do not praise the product or the reader. State what it does.

## Structure

- List required facts and literal identifiers before drafting. Check the finished text against the list.
- Lead with what the reader can do or must know; context after.
- Number steps in execution order, one action per step. Give the goal before step 1 and the expected result after the last step.
- Show the command, input and output instead of explaining them abstractly.
- Document the why, the constraints and the failure modes. Skip what the interface already makes obvious.
- Write timelessly: no "currently", "new", "coming soon". Date what must be dated.
- Link text says where it goes ("the style guide"), never "click here".
- Images get alt text; never rely on color alone to carry meaning.

## Scope boundary

- Follow repository conventions and delivery-skill formats when they conflict with this skill, including changelog or PR handoff templates. This skill governs the sentences inside.
- Never choose facts, document ownership, evidence state or publication authority with this skill.
- Preserve facts, audience and evidence state, and retain required literal identifiers, user-facing error codes, counts and units.
- Preserve conflicting sources and return the conflict to the fact owner or user. Choose neither source, edit no disputed fact and mark no resolution.
