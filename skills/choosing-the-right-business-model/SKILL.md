---
name: choosing-the-right-business-model
description: This prompt asks the AI to compare three proposed business models for a resource-limited startup in a specified industry, outlining the key advantages and disadvantages of each option with an emphasis on early-stage constraints (capital, team, time, customer acquisition, and execution risk). It then directs the AI to recommend the most suitable model for the user’s situation and justify the choice based on fit, feasibility, and likelihood of success in the given industry context.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to compare three proposed business models for a resource-limited startup in a specified industry, outlining the key advantages and disadvantages of each option with an emphasis on early-stage constraints (capital, team, time, customer acquisition, and execution risk). It then directs the AI to recommend the most suitable model for the user’s situation and justify the choice based on fit, feasibility, and likelihood of success in the given industry context.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `MODEL_A` | Required |  | (none) |
| `MODEL_B` | Required |  | (none) |
| `MODEL_C` | Required |  | (none) |
| `INDUSTRY` | Required |  | (none) |



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
    - `MODEL_A`
  - `MODEL_B`
  - `MODEL_C`
  - `INDUSTRY`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `choosing-the-right-business-model`).

Command form:

```bash
betterprompt generate choosing-the-right-business-model \
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
betterprompt generate choosing-the-right-business-model \
  --input MODEL_A=<value> \
  --input MODEL_B=<value> \
  --input MODEL_C=<value> \
  --input INDUSTRY=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
