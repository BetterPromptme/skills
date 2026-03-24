---
name: the-strategic-blind-spot-interrogator
description: This prompt turns the AI into a direct, structured strategic interrogator that helps a user uncover hidden blind spots in their business or career by first summarizing their situation from provided context, goals, actions, metrics, and perceived blockers, then asking eight sequential, uncomfortable questions with pushback after each answer to force specificity and separate activity from results. After the Q&A, it synthesizes findings into a tailored “blind spot map,” reframes the user’s narrative into a more accurate decision lens and behavior shift, and ends with one small, measurable 7-day experiment to test the most critical assumption or constraint.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt turns the AI into a direct, structured strategic interrogator that helps a user uncover hidden blind spots in their business or career by first summarizing their situation from provided context, goals, actions, metrics, and perceived blockers, then asking eight sequential, uncomfortable questions with pushback after each answer to force specificity and separate activity from results. After the Q&A, it synthesizes findings into a tailored “blind spot map,” reframes the user’s narrative into a more accurate decision lens and behavior shift, and ends with one small, measurable 7-day experiment to test the most critical assumption or constraint.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `goals` | Optional | The specific outcomes they want in the next 6 to 12 months. | `Grow from $3k/month to $10k/month in the next 9–12 months.` |
| `actions_taken` | Optional | What they have already tried, projects launched, strategies used, habits adopted.  | `Posting 3 times a week on LinkedIn, sending a small newsletter, taking random discovery calls, and tweaking my landing page every month.` |
| `business_context` | Optional | What they do, what they sell or what their role is, who they serve or report to. | `I run a 1-person marketing agency helping coaches get clients with content and email. I handle strategy, copy, and basic funnel setup myself.` |
| `perceived_blockers` | Optional | What they currently believe is holding them back. | `I think my main problem is visibility and not having a clear niche. I feel like I’m shouting into the void.` |
| `metrics_and_signals` | Optional | Numbers, results, or signals they are currently tracking (for example revenue, leads, traffic, promotions, feedback). | `Revenue is stuck around $3–4k/month. I get 5–10 inbound leads per month, but only 1–2 convert. My email list is at 800 subs and growing very slowly.` |



### Models and options

This skill's modality is: **`text`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"text"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "text"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional text inputs (use defaults if not provided by the human):
    - `goals` (default: `Grow from $3k/month to $10k/month in the next 9–12 months.`)
  - `actions_taken` (default: `Posting 3 times a week on LinkedIn, sending a small newsletter, taking random discovery calls, and tweaking my landing page every month.`)
  - `business_context` (default: `I run a 1-person marketing agency helping coaches get clients with content and email. I handle strategy, copy, and basic funnel setup myself.`)
  - `perceived_blockers` (default: `I think my main problem is visibility and not having a clear niche. I feel like I’m shouting into the void.`)
  - `metrics_and_signals` (default: `Revenue is stuck around $3–4k/month. I get 5–10 inbound leads per month, but only 1–2 convert. My email list is at 800 subs and growing very slowly.`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3.1-pro-preview`** and its available options. Look up `gemini-3.1-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gemini-3.1-pro-preview`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `the-strategic-blind-spot-interrogator`).

Command form:

```bash
betterprompt generate the-strategic-blind-spot-interrogator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3.1-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate the-strategic-blind-spot-interrogator \
  --input 'goals=Grow from $3k/month to $10k/month in the next 9–12 months.' \
  --input 'actions_taken=Posting 3 times a week on LinkedIn, sending a small newsletter, taking random discovery calls, and tweaking my landing page every month.' \
  --input 'business_context=I run a 1-person marketing agency helping coaches get clients with content and email. I handle strategy, copy, and basic funnel setup myself.' \
  --input 'perceived_blockers=I think my main problem is visibility and not having a clear niche. I feel like I’m shouting into the void.' \
  --input 'metrics_and_signals=Revenue is stuck around $3–4k/month. I get 5–10 inbound leads per month, but only 1–2 convert. My email list is at 800 subs and growing very slowly.' \
  --model gemini-3.1-pro-preview \
  --options '{"reasoningEffort":"low"}'
```
