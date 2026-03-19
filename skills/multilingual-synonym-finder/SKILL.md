---
name: multilingual-synonym-finder
description: This prompt instructs the AI to act as a multilingual vocabulary expert and generate a curated set of natural, native-sounding synonyms for a given word in a specified language. The output is organized by nuance (such as formal vs. casual or stronger vs. softer meanings), and each synonym includes a brief meaning note plus a short example sentence to demonstrate correct usage. The result is an educational, learner-friendly synonym guide that improves word choice while staying strictly within the target language and clarifying subtle tone or context differences.
skillVersionId: 019abe1a-19ea-73a4-bbdd-c9ef86909071
---

## What it does

This prompt instructs the AI to act as a multilingual vocabulary expert and generate a curated set of natural, native-sounding synonyms for a given word in a specified language. The output is organized by nuance (such as formal vs. casual or stronger vs. softer meanings), and each synonym includes a brief meaning note plus a short example sentence to demonstrate correct usage. The result is an educational, learner-friendly synonym guide that improves word choice while staying strictly within the target language and clarifying subtle tone or context differences.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Language` | Required | Your word is from which language? | (none) |
| `Your_word` | Required |  | (none) |



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
    - `Language`
  - `Your_word`
- Optional: model and options.
  - Present the human with the default model **`claude-haiku-4.5`** and its available options. Look up `claude-haiku-4.5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `claude-haiku-4.5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019abe1a-19ea-73a4-bbdd-c9ef86909071`).

Command form:

```bash
betterprompt generate 019abe1a-19ea-73a4-bbdd-c9ef86909071 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-haiku-4.5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019abe1a-19ea-73a4-bbdd-c9ef86909071 \
  --input Language=<value> \
  --input Your_word=<value> \
  --model claude-haiku-4.5 \
  --options '{"reasoningEffort":"low"}'
```
