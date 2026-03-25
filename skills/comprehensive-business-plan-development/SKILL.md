---
name: comprehensive-business-plan-development
description: This prompt instructs the AI to act as an expert business strategist and produce a comprehensive, clearly structured business plan for a new venture using the user’s provided business details. The resulting output includes an executive summary, market analysis (customers, competitors, trends), marketing and sales strategies, financial projections (income statement, cash flow, break-even), and an implementation action plan with milestones and timelines, all organized under distinct headings with bullet points for key information.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs the AI to act as an expert business strategist and produce a comprehensive, clearly structured business plan for a new venture using the user’s provided business details. The resulting output includes an executive summary, market analysis (customers, competitors, trends), marketing and sales strategies, financial projections (income statement, cash flow, break-even), and an implementation action plan with milestones and timelines, all organized under distinct headings with bullet points for key information.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Target_market` | Required |  | (none) |
| `Type_of_business` | Required |  | (none) |
| `Projected_timeline` | Required |  | (none) |
| `Initial_investment_amount` | Required |  | (none) |
| `Unique_selling_proposition` | Required |  | (none) |



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
    - `Target_market`
  - `Type_of_business`
  - `Projected_timeline`
  - `Initial_investment_amount`
  - `Unique_selling_proposition`
- Optional: model and options.
  - Present the human with the default model **`grok-3`** and its available options. Look up `grok-3` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `grok-3`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `comprehensive-business-plan-development`).

Command form:

```bash
betterprompt generate comprehensive-business-plan-development \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-3`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate comprehensive-business-plan-development \
  --input Target_market=<value> \
  --input Type_of_business=<value> \
  --input Projected_timeline=<value> \
  --input Initial_investment_amount=<value> \
  --input Unique_selling_proposition=<value> \
  --model grok-3 \
  --options '{}'
```