---
name: seasonal-merchandising-plan
description: This prompt instructs the AI to act as a seasonal retail merchandiser and produce a complete four-quarter merchandising plan for a specific store by assuming or filling in missing details (store type, location, product focus, brand style, and business goal). The expected outcome is a season-by-season set of in-store display concepts with promotional hooks plus low-cost suburban marketing tactics—such as flyers, events, and email—aligned to the desired store vibe and the stated business objective.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a seasonal retail merchandiser and produce a complete four-quarter merchandising plan for a specific store by assuming or filling in missing details (store type, location, product focus, brand style, and business goal). The expected outcome is a season-by-season set of in-store display concepts with promotional hooks plus low-cost suburban marketing tactics—such as flyers, events, and email—aligned to the desired store vibe and the stated business objective.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `insert_location` | Required |  | (none) |
| `insert_brand_style` | Required |  | (none) |
| `insert_business_goal` | Required |  | (none) |
| `insert_product_focus` | Required |  | (none) |
| `insert_type_of_store` | Required |  | (none) |



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
    - `insert_location`
  - `insert_brand_style`
  - `insert_business_goal`
  - `insert_product_focus`
  - `insert_type_of_store`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `seasonal-merchandising-plan`).

Command form:

```bash
betterprompt generate seasonal-merchandising-plan \
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
betterprompt generate seasonal-merchandising-plan \
  --input insert_location=<value> \
  --input insert_brand_style=<value> \
  --input insert_business_goal=<value> \
  --input insert_product_focus=<value> \
  --input insert_type_of_store=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
