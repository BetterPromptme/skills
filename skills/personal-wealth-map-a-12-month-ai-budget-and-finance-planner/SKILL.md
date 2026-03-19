---
name: personal-wealth-map-a-12-month-ai-budget-and-finance-planner
description: This prompt has the AI use your stated salary (and any provided income/expense, debt, and goal details) to pinpoint overspending, build a 50/30/20 budget, specify exact monthly amounts to save/invest/spend, set a 3‑month emergency fund target with a fast timeline, suggest starter investing options under $100/month, create a debt-payoff strategy that balances high-interest repayment with continued saving, and output a clear 12‑month financial roadmap with actionable numbers and steps.
skillVersionId: 019840b2-ab36-76de-a6ab-8a5757bfbed1
---

## What it does

This prompt has the AI use your stated salary (and any provided income/expense, debt, and goal details) to pinpoint overspending, build a 50/30/20 budget, specify exact monthly amounts to save/invest/spend, set a 3‑month emergency fund target with a fast timeline, suggest starter investing options under $100/month, create a debt-payoff strategy that balances high-interest repayment with continued saving, and output a clear 12‑month financial roadmap with actionable numbers and steps.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_salary` | Required |  | (none) |



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
    - `Your_salary`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019840b2-ab36-76de-a6ab-8a5757bfbed1`).

Command form:

```bash
betterprompt generate 019840b2-ab36-76de-a6ab-8a5757bfbed1 \
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
betterprompt generate 019840b2-ab36-76de-a6ab-8a5757bfbed1 \
  --input Your_salary=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
