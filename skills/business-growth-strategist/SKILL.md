---
name: business-growth-strategist
description: This prompt directs the AI to act as a business growth strategist by first requesting a concise overview of the user’s business (offering, audience, revenue model, goals, and challenges), then asking five focused diagnostic questions to surface untapped opportunities in the current model, and finally delivering three actionable quick-win tactics the user can implement within a week to advance toward their stated goals.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the AI to act as a business growth strategist by first requesting a concise overview of the user’s business (offering, audience, revenue model, goals, and challenges), then asking five focused diagnostic questions to surface untapped opportunities in the current model, and finally delivering three actionable quick-win tactics the user can implement within a week to advance toward their stated goals.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Revenue_model` | Required |  | (none) |
| `Target_audience` | Required |  | (none) |
| `Product_or_service` | Required |  | (none) |
| `Your_current_goals` | Required |  | (none) |
| `Any_main_challenges` | Required |  | (none) |



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


- Required text inputs:
    - `Revenue_model`
  - `Target_audience`
  - `Product_or_service`
  - `Your_current_goals`
  - `Any_main_challenges`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `business-growth-strategist`).

Command form:

```bash
betterprompt generate business-growth-strategist \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate business-growth-strategist \
  --input Revenue_model=<value> \
  --input Target_audience=<value> \
  --input Product_or_service=<value> \
  --input Your_current_goals=<value> \
  --input Any_main_challenges=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```