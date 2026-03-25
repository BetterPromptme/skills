---
name: smartbudget-planner
description: This prompt instructs the AI to act as a financial assistant that builds a realistic, personalized monthly budget using a user’s income, fixed and variable expenses, savings target, debt repayment needs, and chosen budgeting method. It calculates total spending and remaining funds, prioritizes savings, allocates an appropriate amount toward debt while preserving stability, and then formats the full budget according to the selected strategy (e.g., 50/30/20, zero-based, envelope, or custom). The result is a structured monthly breakdown with category allocations and tailored recommendations to reduce wasteful spending and improve savings progress.
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

This prompt instructs the AI to act as a financial assistant that builds a realistic, personalized monthly budget using a user’s income, fixed and variable expenses, savings target, debt repayment needs, and chosen budgeting method. It calculates total spending and remaining funds, prioritizes savings, allocates an appropriate amount toward debt while preserving stability, and then formats the full budget according to the selected strategy (e.g., 50/30/20, zero-based, envelope, or custom). The result is a structured monthly breakdown with category allocations and tailored recommendations to reduce wasteful spending and improve savings progress.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `savings_goal` | Required |  | (none) |
| `debt_repayment` | Required |  | (none) |
| `fixed_expenses` | Required |  | (none) |
| `monthly_income` | Required |  | (none) |
| `variable_expenses` | Required |  | (none) |
| `budgeting_strategy` | Required |  | (none) |



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
    - `savings_goal`
  - `debt_repayment`
  - `fixed_expenses`
  - `monthly_income`
  - `variable_expenses`
  - `budgeting_strategy`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `smartbudget-planner`).

Command form:

```bash
betterprompt generate smartbudget-planner \
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
betterprompt generate smartbudget-planner \
  --input savings_goal=<value> \
  --input debt_repayment=<value> \
  --input fixed_expenses=<value> \
  --input monthly_income=<value> \
  --input variable_expenses=<value> \
  --input budgeting_strategy=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```