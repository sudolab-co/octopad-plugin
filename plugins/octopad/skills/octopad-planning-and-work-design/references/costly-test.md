# Costly test fields

- **Decision:** the observable result and its threshold, and what you do on pass, on fail (step 4) and on an inconclusive result.
- **Method and ceiling:**
  - the cheapest method able to establish that result, and why each cheaper one cannot;
  - treat the method the person suggests as one option, not the brief;
  - the smallest series that could change the decision: a large expected effect needs few runs, and distinct real cases come before repeats of one;
  - never claim how often something happens from one AI run: it shows only that it can;
  - a numeric ceiling on runs, retries and grading included, and for AI runs on the tokens they may use, counting the context each run reloads and their output;
  - say so when nothing can stop the runs at that token ceiling;
  - a stop rule, set before the first result;
  - at the ceiling, stop, report and leave any extension to the person;
  - the model the question is about, kept;
  - every other agent on the smallest model that does its job.
- **Proof:**
  - a known failing case the test must catch and a sound case it must pass;
  - after the runs, every attempt, aborted ones included, reconciled with its traces, and what it changed, restored and checked.
