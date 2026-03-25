---
name: generate-50-personalized-english-vocabulary-words
description: This prompt asks the AI to act as an English instructor and generate 50 two-sided flashcards tailored to the learner’s level, goal, and chosen topic focus. The flashcards’ fronts present key English concepts or terms, and the backs provide brief explanations plus a memorable image idea or example to aid recall. The outcome is a curated set of basic-to-intermediate English learning cards designed for efficient study and preparation for the specified purpose.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to act as an English instructor and generate 50 two-sided flashcards tailored to the learner’s level, goal, and chosen topic focus. The flashcards’ fronts present key English concepts or terms, and the backs provide brief explanations plus a memorable image idea or example to aid recall. The outcome is a curated set of basic-to-intermediate English learning cards designed for efficient study and preparation for the specified purpose.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `level` | Required |  | (none) |
| `topic` | Required |  | (none) |
| `purpose` | Required |  | (none) |



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
    - `level`
  - `topic`
  - `purpose`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `generate-50-personalized-english-vocabulary-words`).

Command form:

```bash
betterprompt generate generate-50-personalized-english-vocabulary-words \
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
betterprompt generate generate-50-personalized-english-vocabulary-words \
  --input level=<value> \
  --input topic=<value> \
  --input purpose=<value> \
  --model gpt-4o \
  --options '{}'
```