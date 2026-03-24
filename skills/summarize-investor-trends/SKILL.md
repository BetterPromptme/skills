---
name: summarize-investor-trends
description: This prompt instructs the AI to act as a senior equity analyst and produce a concise executive brief for a specified industry using credible data from the past 12 months. The output summarizes funding and market trends with specific metrics on deal volume, stage-level valuation benchmarks, major rounds and investors, risk sentiment indicators, and notable exits, alongside brief macro context affecting the sector. It requires clear section headers in a fixed order, numerical ranges with stated currencies, disclosure of any data discrepancies, and a short bibliography of recent sources with titles, publishers, URLs, and dates, while avoiding fabricated or vague claims.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a senior equity analyst and produce a concise executive brief for a specified industry using credible data from the past 12 months. The output summarizes funding and market trends with specific metrics on deal volume, stage-level valuation benchmarks, major rounds and investors, risk sentiment indicators, and notable exits, alongside brief macro context affecting the sector. It requires clear section headers in a fixed order, numerical ranges with stated currencies, disclosure of any data discrepancies, and a short bibliography of recent sources with titles, publishers, URLs, and dates, while avoiding fabricated or vague claims.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Industry` | Required |  | (none) |



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
    - `Industry`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `summarize-investor-trends`).

Command form:

```bash
betterprompt generate summarize-investor-trends \
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
betterprompt generate summarize-investor-trends \
  --input Industry=<value> \
  --model gpt-4o \
  --options '{}'
```
