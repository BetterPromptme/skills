---
name: strategic-gift-and-packaging-generator-for-business-occasions
description: This prompt instructs the AI to act as a senior brand gifting strategist and, using details about an occasion, a company objective, and a target audience (with optional industry context), produce a cohesive, strategic gift experience. The outcome is a tailored recommendation that includes a creative gift idea, a branded gift box and unboxing concept, and a clear rationale linking the experience to the brand’s values and the desired emotional impact on recipients.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a senior brand gifting strategist and, using details about an occasion, a company objective, and a target audience (with optional industry context), produce a cohesive, strategic gift experience. The outcome is a tailored recommendation that includes a creative gift idea, a branded gift box and unboxing concept, and a clear rationale linking the experience to the brand’s values and the desired emotional impact on recipients.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Industry` | Optional |  | `tech, skincare, wellness, F&B` |
| `Brand_Message` | Optional |  | `build emotional connection` |
| `Target_audience` | Required |  | (none) |
| `Occasion_or_project` | Optional |  | `product launch` |



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
    - `Target_audience`
- Optional text inputs (use defaults if not provided by the human):
    - `Industry` (default: `tech, skincare, wellness, F&B`)
  - `Brand_Message` (default: `build emotional connection`)
  - `Occasion_or_project` (default: `product launch`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `strategic-gift-and-packaging-generator-for-business-occasions`).

Command form:

```bash
betterprompt generate strategic-gift-and-packaging-generator-for-business-occasions \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate strategic-gift-and-packaging-generator-for-business-occasions \
  --input 'Industry=tech, skincare, wellness, F&B' \
  --input 'Brand_Message=build emotional connection' \
  --input Target_audience=<value> \
  --input 'Occasion_or_project=product launch' \
  --model gpt-4o \
  --options '{}'
```
