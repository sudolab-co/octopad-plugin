---
name: manage-market-intelligence
metadata:
  version: "3.1.0"
description: Produce market information an activity can act on, kept in Octopad as its market report and competitor pages, covering its market, customers and what they use today, competitors and their prices, changes, and what they imply. Use when asked about a market, competitors, customers' alternatives or prices, when a competitor, a review, a customer quote, a launch or a pricing move comes up, or to refresh the market report. Applies to commercial and noncommercial activities. Does not choose positioning, target, price or strategy.
---
If the Octopad connection bundled with this plugin offers the `skill_opened` tool, call it once with `skill: "manage-market-intelligence"` when you open this skill.

# Manage market intelligence

Give the user market information they can act on: the market, customers, alternatives, prices and implications, with their limits. Compare, compute and conclude; a reading list is not a result. The user and the owners named below make the choices.

## Start from what Octopad knows

Before searching outside, read the activity's context: the Activity Overview (what it does, for whom, its constraints), each relevant Product Overview (the offer, its audience, its market, its Marketing section), the relevant Market pages and, where the CRM is on, what customers have said. They set the question, the market's boundaries (country, segment, offer) and who counts as a competitor. Ask the user only what they leave open and what would change the research; otherwise state the scope you took. Distinguish users, buyers, beneficiaries and funders where they differ, and mark a commercial question that does not apply to the activity as such.

## Work like an analyst

1. **Frame.** State the question, the decision it serves, the geography, buyer, need and period. Treat what the user and the Overviews assume as hypotheses to test, with the competing explanations and the evidence that would tell them apart. Include substitutes and doing nothing, not only products resembling the offer.
2. **Plan.** For a full market study, choose the kinds of sources for every block of the report. For a focused question or a single signal, investigate only the relevant context, claims and what depends on them; never grow it into a full study because no report exists yet.
3. **Collect and triangulate** (see Research and its limits).
4. **Quantify.** Put numbers on every answer the evidence allows, with inputs and assumptions shown; compare in tables.
5. **Conclude.** Each hypothesis ends supported, contradicted or unresolved within the researched scope; each finding says what it implies. Deepen where evidence could change a conclusion; stop when more research is unlikely to change the answer.

## The pages

A market scope, organization or workspace, keeps three kinds of pages in its Market folder; within the report, separate findings by offer and market when buyers, alternatives or geography differ:

- **Market Overview** (head page, `head_type: market_overview`), one per scope: the report.
- **One page per main competitor**: an actor a customer could realistically choose instead of the activity's offer today.
- **Other actors**: one page grouping the secondary actors, two or three lines each (who they are, what they offer, their price when known) and why they are not main. One that becomes main moves to its own page.

Market-wide customer voice and trends stay in the report; what customers say about one competitor goes on its page or entry. Collection notes, long lists and unread leads go in a working page of the task, whose keeping and archiving `octopad-knowledge-evidence` governs; assumptions and calculations stay beside the figures they support. A missing organization Market folder is created by an admin's AI; a member's AI leaves the page unfiled and says so.

## The report

The Market Overview holds, in this order:

1. **What to remember**: findings ranked by importance, each with what it implies for the activity, how sure it is and its limits. Then the status of each hypothesis, and the offer's stated target, promise and difference (its Product Overview's Marketing section) held against the evidence: supported, contradicted or unresolved, without choosing replacements.
2. **Market analysis**, one heading per block in this order; fill each, or write "unknown" or "not applicable" and why. Use tables where they compare; never leave an empty one.
   - **Size and change**: tell the customers' industry from this offer's market, businesses from sites, the whole market from the reachable segment. Estimate buyers times annual relevant spend, inputs sourced and assumptions explicit; cross-check against a separate estimate when one exists and explain the gap. Give ranges driven by the uncertain inputs. Estimate what is realistically winnable only with evidence on channel access, conversion, time and delivery capacity. Give the trend on comparable definitions and periods.
   - **Demand and buying**: for each segment, needs, what they use and spend today, triggers, decision criteria, who holds the budget, how they buy; switching costs (integrations, training, contracts) and reasons to stay.
   - **Competition and access**: alternatives grouped by the need they serve; the main ones compared with their channel and dated traction evidence; who controls access to buyers (distributors, advisers, existing suppliers).
   - **Prices and economics**: pricing models and units; totals for justified customer cases with the same needs, units, volumes, tax basis and period, including setup, hardware, usage, migration and the tools kept. Partial substitutes and quotes not obtained stay out of the comparable totals. Listed prices, actual spending and willingness to pay are different things. Where it decides the answer, weigh the customer's gain against switching costs, and the offer's revenue against acquisition, channel, onboarding and service costs.
   - **Customer voice**: praise, friction and switching experiences, who reported them, and the sample's limits.
   - **Environment**: rules, technology and channels, only when they change a conclusion.
3. **What remains to verify**: the material unknowns ranked, the cheapest useful check for each, and which answer would change a conclusion.

Each actor named links to its page or its entry in Other actors. Assumptions, calculations and decisive sources stay beside the findings they support.

Its At a glance holds two short answers, the essential first, at most 1,000 characters together: `main_alternatives`, what people use instead, telling observed use from identified candidates; `what_it_implies`, the main implication with its essential limit. Each is `missing` when unknown, `not applicable` when it does not apply. Every session of the scope reads them and the brief may cut them at a sentence end. With every update of the report, send the At a glance keys that change, or `at_a_glance: "unchanged"`.

A main competitor's page holds its target, offer, business model, prices, channel, dated traction signals, recent moves, customer experience and sources, and its strengths and weaknesses against the activity's verified capabilities for the same need. Read the actor's own general description before inferring its target from a sector page. Tell announced, available and observed use apart; an unknown feature is not a weakness.

On a later run, open What to remember with what changed since the last one (the market moved, something newly found, a correction), then update the passages affected, keeping the report's order. "Nothing significant changed" is a valid result. A single piece of news (a launch, a price change, a review) goes to its actor's page or entry, and to every passage of the report it changes.

## Research and its limits

- Search broadly, then deepen on credible alternatives. A research sub-agent gets the scope, a budget and only search and fetch tools, never the user's own browser or accounts.
- Look for existing work before building your own: published market studies and their public summaries, reports from trade bodies, chambers of commerce and public agencies, academic theses, and the files the user already holds in Octopad. Note each one's date, method and sponsor, and check its figures against yours.
- Match sources to claims: statistics and registries for populations and filed figures; vendor pages for stated offers and prices; reviews, customer records and interviews for experience; trade press, trade shows, distributors, tenders and job posts for leads. Open the original source behind every decisive claim: a menu link or a search snippet is a lead, not a source.
- Rest each main conclusion on at least two independent sources suited to the claim, preferably of different methods or interests; when research finds only one, narrow the conclusion and state the coverage limit. Syndicated stories and vendor-chosen testimonials are not independent.
- Look for counterexamples and other explanations; check every count and calculation against the observations it comes from.
- Tell facts, reported claims, proxies and inference apart. A vendor's page establishes its stated offer and price, never adoption or quality; funding, hiring, reviews and logos do not establish revenue or market share; "not mentioned on the page read" never means "missing from the product". Check dates, entity and geography. Count original experiences, not reposts: a count describes the sample read, not how common something is. Quote only wording verified at its source.
- When the internet does not answer (a niche market's size, prices "on quote", what customers really use): use what Octopad holds, then ask the user one grouped set of questions (quotes received, tools in use, customer feedback). Estimate only from stated inputs, with the calculation shown. Otherwise write "unknown", say what it changes, and, outside an audit, file collecting it (interviews, the sales network) as a task.
- Beside each finding it supports, an external source carries its publication date when shown and the day you read it.
- Empty results never prove absence: say which channels you covered and which failed.

## Review before delivering

Before delivering, an audit included, give a fresh reviewer, a sub-agent that did not draft the report, the draft and the source material needed to check it. It checks each conclusion and figure against its source, recomputes the calculations, looks for evidence against the main conclusions, and finds contradictions between the report, its tables and the competitor pages. Without sub-agents, do this check yourself and say it was not independent. Check that each comparison meets its stated basis and that every summary, At a glance and the conversation included, keeps the evidence's scope and uncertainty; a confidence label never repairs an unsupported claim. Fix, qualify or drop what fails, recheck the changed claims and the tables and summaries that depend on them, and say in the report what the review changed.

## Write and keep it true

- An audit or dry run reports gaps and proposals without writing.
- An ordinary update costs one read of the destination and its sources, one write, version-checked so it never overwrites newer content, and one verification.
- A fact lives in one place: a competitor's detail on its page or entry, the report summarizing and linking it.
- The offer's chosen target, positioning, promise and terms belong to product marketing, in its Product Overview's Marketing section, which links to the customer words kept here; the product's behavior and availability belong to product documentation; the activity's identity to activity context; individual customers to the CRM. Never rewrite them. When your evidence makes their text stale, that owner's skill makes the fix when the request covers it; otherwise tell the user.
- Private client evidence stays in its permitted context; a quote, paraphrase or summary keeps its source's audience.

## Present the report

End by presenting the report in the conversation, answering the user's question first. For a requested full study, present the whole report; on a later run, present what changed and what it implies. Close with your questions for the user and the links to the pages written. How you worked comes last, in a line.
