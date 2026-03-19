---
name: untitled-prompt-local-culture-and-food-explorer-the-ultimate-travel-and-conversation-guide
description: This prompt instructs the AI to act as a culturally savvy, food-focused travel guide and, using the user’s trip details (destination, traveler type, duration, interests, dietary needs, and meal budget), produce a structured guide that covers local etiquette and laws, essential greetings and travel phrases with script and pronunciation, curated street foods and recommended markets/eateries with practical visit details and dietary-friendly options, plus actionable tips on when and how to eat like a local while avoiding common food or hygiene pitfalls.
skillVersionId: 0198acd9-bdb0-7084-b498-6083e3654bcc
---

## What it does

This prompt instructs the AI to act as a culturally savvy, food-focused travel guide and, using the user’s trip details (destination, traveler type, duration, interests, dietary needs, and meal budget), produce a structured guide that covers local etiquette and laws, essential greetings and travel phrases with script and pronunciation, curated street foods and recommended markets/eateries with practical visit details and dietary-friendly options, plus actionable tips on when and how to eat like a local while avoiding common food or hygiene pitfalls.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Destination` | Required |  | (none) |
| `Trip_Duration` | Required |  | (none) |
| `Focus_and_Interests` | Required |  | (none) |
| `Budget_Range_for_Meals` | Required |  | (none) |
| `Trip_Type_and_Travelers` | Required |  | (none) |
| `Dietary_Preferences_or_Restrictions` | Required |  | (none) |



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
    - `Destination`
  - `Trip_Duration`
  - `Focus_and_Interests`
  - `Budget_Range_for_Meals`
  - `Trip_Type_and_Travelers`
  - `Dietary_Preferences_or_Restrictions`
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198acd9-bdb0-7084-b498-6083e3654bcc`).

Command form:

```bash
betterprompt generate 0198acd9-bdb0-7084-b498-6083e3654bcc \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0198acd9-bdb0-7084-b498-6083e3654bcc \
  --input Destination=<value> \
  --input Trip_Duration=<value> \
  --input Focus_and_Interests=<value> \
  --input Budget_Range_for_Meals=<value> \
  --input Trip_Type_and_Travelers=<value> \
  --input Dietary_Preferences_or_Restrictions=<value> \
  --model gpt-5 \
  --options '{}'
```
