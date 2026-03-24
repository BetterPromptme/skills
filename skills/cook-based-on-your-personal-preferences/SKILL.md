---
name: cook-based-on-your-personal-preferences
description: This prompt instructs the AI to act as a professional chef and nutritionist to produce a customized recipe for a specified dish and serving size, tailored to the user’s flavor preferences, dietary restrictions, required main ingredients, excluded ingredients (with alternatives), available cooking equipment, and preferred cuisine/presentation style. The result is a structured, step-by-step recipe including an introduction, precise ingredient measurements, timed preparation instructions, plating guidance, and a notes section with substitutions, side-dish pairings, flavor-boosting tips, estimated calories per serving with lighter-adjustment options, and a summary of nutritional benefits aligned to the stated needs.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a professional chef and nutritionist to produce a customized recipe for a specified dish and serving size, tailored to the user’s flavor preferences, dietary restrictions, required main ingredients, excluded ingredients (with alternatives), available cooking equipment, and preferred cuisine/presentation style. The result is a structured, step-by-step recipe including an introduction, precise ingredient measurements, timed preparation instructions, plating guidance, and a notes section with substitutions, side-dish pairings, flavor-boosting tips, estimated calories per serving with lighter-adjustment options, and a summary of nutritional benefits aligned to the stated needs.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Dish_name` | Required |  | (none) |
| `Personal_taste` | Required |  | (none) |
| `Preferred_style` | Required |  | (none) |
| `Main_ingredients` | Required |  | (none) |
| `Cooking_equipment` | Required |  | (none) |
| `number_of_servings` | Required |  | (none) |
| `Health_restrictions` | Required |  | (none) |
| `Ingredients_to_avoid` | Required |  | (none) |



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
    - `Dish_name`
  - `Personal_taste`
  - `Preferred_style`
  - `Main_ingredients`
  - `Cooking_equipment`
  - `number_of_servings`
  - `Health_restrictions`
  - `Ingredients_to_avoid`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cook-based-on-your-personal-preferences`).

Command form:

```bash
betterprompt generate cook-based-on-your-personal-preferences \
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
betterprompt generate cook-based-on-your-personal-preferences \
  --input Dish_name=<value> \
  --input Personal_taste=<value> \
  --input Preferred_style=<value> \
  --input Main_ingredients=<value> \
  --input Cooking_equipment=<value> \
  --input number_of_servings=<value> \
  --input Health_restrictions=<value> \
  --input Ingredients_to_avoid=<value> \
  --model gpt-4o \
  --options '{}'
```
