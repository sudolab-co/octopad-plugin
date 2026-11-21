---
name: manage-market-intelligence
description: "Use when a competitor, an alternative customers use, a review, a customer's words about the market, a launch, a pricing move or a public mention comes up, when asked what rivals or the market say, and when the market report is set up, audited or refreshed. Not for one customer's record (octopad-crm) or for choosing positioning, target or price (manage-product-marketing)."
---
Version: 4.3.0

# Manage market intelligence

Give the user market information they can act on: the market, customers, alternatives, prices and implications, with their limits.
- Compare, compute and conclude: a reading list is not a result.
- Leave the choices to the user and to the owners named below.

## Start from what Octopad knows

Before searching outside, read the activity's context:
- the Activity Overview (what it does, for whom, its constraints);
- each relevant Product Overview (the offer, its audience, its market, its Marketing section);
- the relevant Market pages;
- where the CRM is on, what customers have said.

This context sets the question, the market's boundaries (country, segment, offer) and who counts as a competitor.
- Ask the user only what this context leaves open and what would change the research; otherwise state the scope you took.
- Distinguish users, buyers, beneficiaries and funders where they differ.
- Mark a commercial question that does not apply to the activity as such.

## Work like an analyst

1. Frame. State the question, the decision it serves, the geography, buyer, need and period. Treat what the user and the Overviews assume as hypotheses to test, with the competing explanations and the evidence that would tell them apart. Include substitutes and doing nothing, not only products resembling the offer.
2. Plan. For a full market study, choose the kinds of sources for every block of the report. For a focused question or a single signal, investigate only the relevant context, claims and what depends on them; never grow it into a full study because no report exists yet.
3. Collect and triangulate (see Research and its limits).
4. Quantify. Put numbers on every answer the evidence allows, with inputs and assumptions shown; compare in tables.
5. Conclude. Each hypothesis ends supported, contradicted or unresolved within the researched scope; each finding says what it implies. Deepen where evidence could change a conclusion; stop when more research is unlikely to change the answer.

## The pages

Keep three kinds of pages in the Market folder of each market scope (organization or workspace):

- Market Overview (head page, `head_type: market_overview`), one per scope: the report. Within it, separate findings by offer and market when buyers, alternatives or geography differ.
- One page per main competitor: an actor a customer could realistically choose instead of the activity's offer today.
- Other actors: one page grouping the secondary actors, two or three lines each (who they are, what they offer, their price when known) and why they are not main. Move one that becomes main to its own page.

- Keep market-wide customer voice and trends in the report; put what customers say about one competitor on its page or entry. Write each as a short expression with source and date; a customer's own words stay with their source (their CRM record where the CRM is on, otherwise the task or working page of the work that heard them).
- Put collection notes, long lists and unread leads in a working page of the task; `octopad-knowledge-evidence` governs its keeping and archiving.
- Keep assumptions and calculations beside the figures they support.
- From raw material, such as a research's full output, a scrape or a dump of reviews, keep only what matters in these pages, and advise keeping the original outside Octopad, linked from the work; for the rest, open the `octopad-knowledge-evidence` skill, section "Where knowledge is written".

## The report

Before you create, refresh, restructure or audit a Market Overview, or change a figure or comparison in it, read [its structure](references/market-report.md): what to remember, the market analysis blocks in their order, and what remains to verify.

Write the Market Overview's At a glance as two short answers, at most 1,000 characters together:
- `main_alternatives`: what people use instead, telling observed use from identified candidates;
- `what_it_implies`: the main implication, with its essential limit.

- Put the essential first: every session of the scope reads them in the Organization Overview, which may cut them at a sentence end.
- Write `missing` for one that is unknown and `not applicable` for one that does not apply.
- When a change you make on this page or elsewhere alters what these answers say, update them in the same turn.

On a main competitor's page, write its target, offer, business model, prices, channel, dated traction signals, recent moves, customer experience and sources, and its strengths and weaknesses against the activity's verified capabilities for the same need.
- Read the actor's own general description before inferring its target from a sector page.
- Tell announced, available and observed use apart.
- Never count an unknown feature as a weakness.

- On a later run, open What to remember with what changed since the last one (the market moved, something newly found, a correction), then update the passages affected, keeping the report's order. "Nothing significant changed" is a valid result.
- Put a single piece of news (a launch, a price change, a review) on its actor's page or entry, and into every passage of the report it changes.

## Research and its limits

- Search broadly, then deepen on credible alternatives.
- Give a research sub-agent the scope, a budget and only search and fetch tools, never the user's own browser or accounts.
- Look for existing work before building your own: published market studies and their public summaries, reports from trade bodies, chambers of commerce and public agencies, academic theses, and the files the user already holds in Octopad. Note each one's date, method and sponsor, and check its figures against yours.
- Match sources to claims:
  - statistics and registries for populations and filed figures;
  - vendor pages for stated offers and prices;
  - reviews, customer records and interviews for experience;
  - trade press, trade shows, distributors, tenders and job posts for leads.
- Open the original source behind every decisive claim: a menu link or a search snippet is a lead, not a source.
- Rest each main conclusion on at least two independent sources suited to the claim, preferably of different methods or interests; when research finds only one, narrow the conclusion and state the coverage limit. Syndicated stories and vendor-chosen testimonials are not independent.
- Look for counterexamples and other explanations.
- Check every count and calculation against the observations it comes from.
- Tell facts, reported claims, proxies and inference apart:
  - a vendor's page establishes its stated offer and price, never adoption or quality;
  - funding, hiring, reviews and logos do not establish revenue or market share;
  - "not mentioned on the page read" never means "missing from the product".
- Check dates, entity and geography.
- Count original experiences, not reposts: a count describes the sample read, not how common something is.
- Quote only wording verified at its source.
- When the internet does not answer (a niche market's size, prices "on quote", what customers really use):
  1. use what Octopad holds;
  2. then ask the user one grouped set of questions (quotes received, tools in use, customer feedback);
  3. estimate only from stated inputs, with the calculation shown;
  4. otherwise write "unknown", say what it changes, and, outside an audit, file collecting it (interviews, the sales network) as a task.
- Beside each finding it supports, give an external source its publication date when shown and the day you read it.
- Empty results never prove absence: say which channels you covered and which failed.

## Review before delivering

Scale the review to the stakes.
- Before you deliver a market report or an audit, or write a new or changed conclusion, comparison or computed figure into a page, give a fresh reviewer, a sub-agent that did not draft it, the draft and the source material needed to check it: interpretation is where unsupported claims slip in. The reviewer:
  - checks each conclusion and figure against its source;
  - recomputes the calculations;
  - looks for evidence against the main conclusions;
  - finds contradictions between the report, its tables and the competitor pages.
- Without sub-agents, do this check yourself and say it was not independent.
- Check that each comparison meets its stated basis and that every summary, At a glance and the conversation included, keeps the evidence's scope and uncertainty; a confidence label never repairs an unsupported claim.
- Fix, qualify or drop what fails, recheck the changed claims and the tables and summaries that depend on them, and say in the report what the review changed.
- When the report leaves the organization or is published, give it a second fresh reviewer with its own focus, such as the reader's.
- For a conclusion, comparison or figure you give in chat and record nowhere, no reviewer is needed: check it against its sources yourself and say what you checked.
- For a capture that only records one sourced fact where it belongs, such as a competitor's new list price quoted from its pricing page onto its page, no reviewer is needed: check the fact against its source and read the page back.

## Write and keep it true

- In an audit or a dry run, change nothing in the report until the user's confirmation: report each gap with the change that closes it, and keep the findings on a working page of the task or stream it serves.
- Do an ordinary update in one read of the destination and its sources, one write, version-checked so it never overwrites newer content, and one verification.
- Keep each fact in one place: a competitor's detail on its page or entry, which the report summarizes and links.
- Never rewrite what other owners hold:
  - the offer's chosen target, positioning, promise and terms: `manage-product-marketing`, in its Product Overview's Marketing section, which links to the customer words kept here;
  - the product's behavior and availability: `manage-product-documentation`;
  - the activity's identity: `manage-activity-context`;
  - individual customers: the CRM (`octopad-crm`).
- When your evidence makes their text stale, open that owner's skill and fix it when the request covers it and its gates allow; otherwise file a task naming the stale passage and the evidence, and say so.
- Keep private client evidence in its permitted context: a quote, paraphrase or summary keeps its source's audience.

## Present the report

End by presenting the report in the conversation:
1. Answer the user's question first.
2. For a requested full study, present the whole report; on a later run, present what changed and what it implies.
3. Close with your questions for the user and the links to the pages written.
4. End with the coverage: which channels you covered and which failed.
