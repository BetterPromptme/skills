---
name: elite-global-investment-intelligence-report
description: This prompt instructs the AI to act as a senior global market analyst and generate a structured, 12-section investment intelligence report on a specified publicly traded company over two time horizons, combining conventional fundamentals with alternative signals (e.g., order backlog, off-exchange trading activity, leadership quality, and cyber/geopolitical exposure). The expected outcome is a neutral, evidence-based synthesis that postpones any call to action until the final section, where it delivers quantified short- and long-term price outlooks and a summarized Buy/Hold/Sell recommendation accompanied by a conviction score and confidence level, with key financial metrics presented in clear tables.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a senior global market analyst and generate a structured, 12-section investment intelligence report on a specified publicly traded company over two time horizons, combining conventional fundamentals with alternative signals (e.g., order backlog, off-exchange trading activity, leadership quality, and cyber/geopolitical exposure). The expected outcome is a neutral, evidence-based synthesis that postpones any call to action until the final section, where it delivers quantified short- and long-term price outlooks and a summarized Buy/Hold/Sell recommendation accompanied by a conviction score and confidence level, with key financial metrics presented in clear tables.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `ISIN` | Optional | The International Securities Identification Number, a unique 12-character code that identifies a specific security or stock. | `US0378331005 (Apple Inc.)` |
| `Horizon_1` | Optional | The short-term period for price or performance forecasting, usually between 3 to 12 months. | `6 months` |
| `Horizon_2` | Optional | The long-term period for forecasting and strategic assessment, typically 1 to 3 years. | `24 months` |
| `company_name` | Required | The full legal or commonly recognized name of the publicly traded company being analyzed. | (none) |



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
    - `company_name`
- Optional text inputs (use defaults if not provided by the human):
    - `ISIN` (default: `US0378331005 (Apple Inc.)`)
  - `Horizon_1` (default: `6 months`)
  - `Horizon_2` (default: `24 months`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `elite-global-investment-intelligence-report`).

Command form:

```bash
betterprompt generate elite-global-investment-intelligence-report \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate elite-global-investment-intelligence-report \
  --input 'ISIN=US0378331005 (Apple Inc.)' \
  --input 'Horizon_1=6 months' \
  --input 'Horizon_2=24 months' \
  --input company_name=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```