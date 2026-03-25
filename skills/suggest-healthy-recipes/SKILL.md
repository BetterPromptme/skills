---
name: suggest-healthy-recipes
description: This prompt instructs the AI to act as a nutritionist and fitness expert to generate five easy, high-protein recipes tailored to a person’s age, gender, weight, diet type, and optional fitness goal and activity level. The expected result is a set of recipes that use common ingredients, comply with the specified dietary restrictions, and support the individual’s nutritional needs, each presented with a dish name, precise ingredient quantities, step-by-step instructions, prep and cook times, serving size, and per-serving nutrition facts with protein clearly emphasized, including at least one option that is meal-prep friendly or ready in under 20 minutes.
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

This prompt instructs the AI to act as a nutritionist and fitness expert to generate five easy, high-protein recipes tailored to a person’s age, gender, weight, diet type, and optional fitness goal and activity level. The expected result is a set of recipes that use common ingredients, comply with the specified dietary restrictions, and support the individual’s nutritional needs, each presented with a dish name, precise ingredient quantities, step-by-step instructions, prep and cook times, serving size, and per-serving nutrition facts with protein clearly emphasized, including at least one option that is meal-prep friendly or ready in under 20 minutes.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Age` | Required |  | (none) |
| `Gender` | Required |  | (none) |
| `Weight` | Required |  | (none) |
| `Diet_Type` | Required |  | (none) |
| `Fitness_Goal` | Required |  | (none) |
| `Activity_Level` | Required |  | (none) |



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
    - `Age`
  - `Gender`
  - `Weight`
  - `Diet_Type`
  - `Fitness_Goal`
  - `Activity_Level`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `suggest-healthy-recipes`).

Command form:

```bash
betterprompt generate suggest-healthy-recipes \
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
betterprompt generate suggest-healthy-recipes \
  --input Age=<value> \
  --input Gender=<value> \
  --input Weight=<value> \
  --input Diet_Type=<value> \
  --input Fitness_Goal=<value> \
  --input Activity_Level=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```