---
name: manage-market-intelligence
description: "Use when a competitor, an alternative customers use, a review of an offer, a customer's words about the market, a rival's launch or pricing move, or a public mention comes up; when asked what rivals or the market say; or when the market report is set up, audited or refreshed. Keeps the market report (the Market Overview) and competitor pages, from sourced and cross-checked research. Not for one customer's record (octopad-crm) or for choosing positioning, target or price (manage-product-marketing)."
---
Version: 5.0.0

# Manage market intelligence

Give the user usable market findings and their limits.
- Compare, compute and conclude: a reading list is not a result.
- Leave choices to the user and the owners below.

## Start from what Octopad knows

Before searching outside, read:
- the Activity Overview;
- each relevant Product Overview: the offer, its audience, its market, its Marketing section;
- the relevant Market pages;
- where the CRM is on, what customers have said.

Use that context to set the question, country, segment, offer and who counts as a competitor.
- Ask the user only what this context leaves open and what would change the research; otherwise state the scope you took.
- Distinguish users, buyers, beneficiaries and funders where they differ.
- Mark a commercial question that does not apply to the activity as such.

## Work like an analyst

1. Frame the question, decision, geography, buyer, need and period. Test the user’s and Overviews’ assumptions as hypotheses, with competing explanations and evidence to tell them apart. Include substitutes and doing nothing, not only similar products.
2. Plan sources for every report block of a full market study. For a focused question or single signal, investigate only the relevant context, claims and what depends on them. Keep that question or signal focused even when no report exists.
3. Collect and triangulate, as "Research and its limits" says.
4. Quantify every answer the evidence allows, with inputs and assumptions shown; compare in tables.
5. Conclude: mark each hypothesis supported, contradicted or unresolved within the researched scope, and state each finding’s implication. Deepen where evidence could change a conclusion; stop when more research is unlikely to change the answer.

## The pages

Keep three kinds of pages in the Market folder of each market scope (organization or workspace):
- Market Overview (head page, `head_type: market_overview`): the report. Within it, separate findings by offer and market when buyers, alternatives or geography differ.
- One page per main competitor: an actor a customer could realistically choose instead of the activity's offer today.
- Other actors: one page grouping the secondary actors, two or three lines each (who they are, what they offer, their price when known) and why they are not main. Move one that becomes main to its own page.

- Keep market-wide customer voice and trends in the report, and what customers say about one competitor on its page or entry, each as a short expression with source and date.
- Keep a customer's own words with their source: their CRM record where the CRM is on, otherwise the task or working page of the work that heard them.
- Put collection notes, long lists and unread leads on the task’s working page; open the `octopad-knowledge-evidence` skill, section "Where knowledge is written", for keeping and archiving it.
- Keep assumptions, calculations and decisive sources beside the figures and findings they support.
- From raw research, scrapes or review dumps, keep only what matters in these pages. Advise keeping the original outside Octopad, linked from the work; for the rest, open the `octopad-knowledge-evidence` skill, section "Where knowledge is written".

## The report

Before creating, refreshing, restructuring or auditing a Market Overview, or changing its figures or comparisons, read [The Market Overview](references/market-report.md#the-market-overview).

Write the Market Overview's At a glance as two short answers:
- `main_alternatives`: what people use instead, telling observed use from identified candidates;
- `what_it_implies`: the main implication, with its essential limit.

- Put the essential first: every session of the scope reads them in the Organization Overview, which may cut them at a sentence end.
- When a change you make on this page or elsewhere alters what these answers say, update them in the same turn.

On a main competitor's page, write its target, offer, business model, prices, channel, dated traction signals, recent moves, customer experience and sources, and its strengths and weaknesses against the activity's verified capabilities for the same need.
- Read the actor's own general description before inferring its target from a sector page.
- Tell announced, available and observed use apart.
- Never count an unknown feature as a weakness.

- On a later run, start What to remember with changes since the last run: market moves, new findings or corrections. Update affected passages in the report’s order. "Nothing significant changed" is valid.
- Put a single piece of news (a launch, a price change, a review) on its actor's page or entry, and into every passage of the report it changes.

## Research and its limits

- Give a research sub-agent the scope, a budget and only search and fetch tools, never the user's own browser or accounts.
- Look for existing work before building your own: published market studies and their public summaries, reports from trade bodies, chambers of commerce and public agencies, academic theses, and the user's files in Octopad. Note each one's date, method and sponsor, and check its figures against yours.
- Match sources to claims:
  - statistics and registries for populations and filed figures;
  - vendor pages for stated offers and prices;
  - reviews, customer records and interviews for experience;
  - trade press, trade shows, distributors, tenders and job posts for leads.
- Open the original source behind every decisive claim: a menu link or a search snippet is a lead, not a source.
- Support each main conclusion with at least two independent sources suited to the claim, preferably with different methods or interests. With only one, narrow the conclusion and state the coverage limit. Syndicated stories and vendor-chosen testimonials are not independent.
- Look for counterexamples.
- Check every count and calculation against the observations it comes from.
- Tell facts, reported claims, proxies and inference apart:
  - a vendor's page establishes its stated offer and price, never adoption or quality;
  - funding, hiring, reviews and logos establish no revenue or market share;
  - "not mentioned on the page read" never means "missing from the product".
- Check dates, entity and geography.
- Count original experiences, not reposts: a count describes the sample read, not how common something is.
- Quote only wording verified at its source.
- When the internet does not answer (a niche market's size, prices "on quote", what customers really use):
  1. use what Octopad holds;
  2. then ask the user one grouped set of questions (quotes received, tools in use, customer feedback);
  3. estimate only from stated inputs, with the calculation shown;
  4. otherwise write "unknown", say what it changes and, outside an audit, file collecting it (interviews, the sales network) as a task.
- Beside each finding it supports, give an external source its publication date when shown and the day you read it.
- Empty results never prove absence: say which channels you covered and which failed.

## Review before delivering

Scale the review to the stakes.
- Before delivering a market report or audit, or writing a new or changed conclusion, comparison or computed figure on a page, give a fresh sub-agent reviewer the draft and needed sources. The reviewer must not have drafted it and:
  - checks each conclusion and figure against its source;
  - recomputes the calculations;
  - looks for evidence against the main conclusions;
  - finds contradictions between the report, its tables and the competitor pages.
- Without sub-agents, do this check yourself and say it was not independent.
- Check that each comparison meets its stated basis and that every summary, the At a glance and the conversation included, keeps the evidence's scope and uncertainty; a confidence label never repairs an unsupported claim.
- Fix, qualify or drop what fails, recheck the changed claims and the tables and summaries that depend on them, and say in the report what the review changed.
- Before the report leaves the organization or is published, give it a second fresh reviewer with its own focus, such as the reader’s.
- For a conclusion, comparison or figure you give in chat and record nowhere, no reviewer is needed: check it against its sources yourself and say what you checked.
- For a capture that only records one sourced fact where it belongs, such as a competitor's new list price onto its page, no reviewer is needed: check the fact against its source and read the page back.

## Write and keep it true

- In an audit or a dry run, change nothing in the report until the user's confirmation: report each gap with the change that closes it, and keep the findings on a working page of the task or stream it serves.
- For an ordinary update: read the destination and sources once, write once, then verify.
- Keep each fact in one place: a competitor's detail on its page or entry, which the report summarizes and links.
- Never rewrite what other owners hold:
  - the offer's chosen target, positioning, promise and terms: `manage-product-marketing`, in its Product Overview's Marketing section;
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
