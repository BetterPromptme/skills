---
name: plan-meals-for-fitness-goals
description: This prompt instructs the AI to act as a nutritionist and fitness expert to generate a personalized, nutritionally balanced 7‑day meal plan tailored to a user’s age, gender, weight, and specific fitness goal, complete with daily meals and snacks, portion sizes, and macronutrient alignment. The expected result is a practical, sustainable weekly plan that includes flexible options (such as alternatives or a planned indulgence) and a clear list of foods to limit or avoid based on the stated goal.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a nutritionist and fitness expert to generate a personalized, nutritionally balanced 7‑day meal plan tailored to a user’s age, gender, weight, and specific fitness goal, complete with daily meals and snacks, portion sizes, and macronutrient alignment. The expected result is a practical, sustainable weekly plan that includes flexible options (such as alternatives or a planned indulgence) and a clear list of foods to limit or avoid based on the stated goal.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `age` | Required |  | (none) |
| `gender` | Required |  | (none) |
| `weight_in_kg_or_lbs` | Required |  | (none) |
| `specific_fitness_goal` | Required |  | (none) |



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
    - `age`
  - `gender`
  - `weight_in_kg_or_lbs`
  - `specific_fitness_goal`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `plan-meals-for-fitness-goals`).

Command form:

```bash
betterprompt generate plan-meals-for-fitness-goals \
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
betterprompt generate plan-meals-for-fitness-goals \
  --input age=<value> \
  --input gender=<value> \
  --input weight_in_kg_or_lbs=<value> \
  --input specific_fitness_goal=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```