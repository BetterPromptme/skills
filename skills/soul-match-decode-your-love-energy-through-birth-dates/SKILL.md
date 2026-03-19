---
name: soul-match-decode-your-love-energy-through-birth-dates
description: This prompt instructs the AI to act as a spiritually oriented love compatibility analyst, using numerology-style calculations and an “energy matrix” approach to evaluate the romantic connection between two people from their birth dates. The result is a structured, empathetic compatibility reading that covers emotional alignment, karmic themes, harmony vs. friction points, guidance for nurturing the relationship, a concluding intuitive message, and a final percentage-based compatibility score categorized into defined relationship types.
skillVersionId: 019883cb-2cdf-7fad-9a36-575fe7600411
---

## What it does

This prompt instructs the AI to act as a spiritually oriented love compatibility analyst, using numerology-style calculations and an “energy matrix” approach to evaluate the romantic connection between two people from their birth dates. The result is a structured, empathetic compatibility reading that covers emotional alignment, karmic themes, harmony vs. friction points, guidance for nurturing the relationship, a concluding intuitive message, and a final percentage-based compatibility score categorized into defined relationship types.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Birth_date_of_Person_A` | Required |  | (none) |
| `Birth_date_of_Person_B` | Required |  | (none) |



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
    - `Birth_date_of_Person_A`
  - `Birth_date_of_Person_B`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019883cb-2cdf-7fad-9a36-575fe7600411`).

Command form:

```bash
betterprompt generate 019883cb-2cdf-7fad-9a36-575fe7600411 \
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
betterprompt generate 019883cb-2cdf-7fad-9a36-575fe7600411 \
  --input Birth_date_of_Person_A=<value> \
  --input Birth_date_of_Person_B=<value> \
  --model gpt-4o \
  --options '{}'
```
