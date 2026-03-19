---
name: startup-market-research-strategy-generator
description: This prompt instructs the AI to act as a market research analyst and produce a structured, end-to-end market analysis for a startup using the provided industry, region, customer segment, offering, stage, and research goal as inputs. The expected outcome is a report covering market size and growth, trends and drivers, customer needs and barriers, competitive dynamics, opportunity areas, risks and regulatory hurdles, region-specific adoption factors, and a 3–5 year outlook, concluding with a clear judgment on whether the market represents a strong opportunity for the startup given its stage and objectives.
skillVersionId: 0198c1a1-e2be-7de9-81f5-957e86f417c4
---

## What it does

This prompt instructs the AI to act as a market research analyst and produce a structured, end-to-end market analysis for a startup using the provided industry, region, customer segment, offering, stage, and research goal as inputs. The expected outcome is a report covering market size and growth, trends and drivers, customer needs and barriers, competitive dynamics, opportunity areas, risks and regulatory hurdles, region-specific adoption factors, and a 3–5 year outlook, concluding with a clear judgment on whether the market represents a strong opportunity for the startup given its stage and objectives.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `stage` | Required |  | (none) |
| `region` | Required |  | (none) |
| `industry` | Required |  | (none) |
| `research_goal` | Required |  | (none) |
| `customer_segment` | Required |  | (none) |
| `product_or_service` | Required |  | (none) |



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
    - `stage`
  - `region`
  - `industry`
  - `research_goal`
  - `customer_segment`
  - `product_or_service`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198c1a1-e2be-7de9-81f5-957e86f417c4`).

Command form:

```bash
betterprompt generate 0198c1a1-e2be-7de9-81f5-957e86f417c4 \
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
betterprompt generate 0198c1a1-e2be-7de9-81f5-957e86f417c4 \
  --input stage=<value> \
  --input region=<value> \
  --input industry=<value> \
  --input research_goal=<value> \
  --input customer_segment=<value> \
  --input product_or_service=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
