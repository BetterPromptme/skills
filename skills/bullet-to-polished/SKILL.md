---
name: bullet-to-polished
description: This prompt instructs an expert editor to convert supplied bullet notes or fragmented ideas into polished, coherent prose that reads naturally while preserving the original meaning, intent, and logic exactly. The result is one or more clear, professional paragraphs that improve flow, grammar, transitions, and readability without adding, omitting, or reinterpreting any core information, and it outputs only the refined text with no commentary or extra formatting.
skillVersionId: 019b54bb-cc5e-75a8-8f49-d0171924911e
---

## What it does

This prompt instructs an expert editor to convert supplied bullet notes or fragmented ideas into polished, coherent prose that reads naturally while preserving the original meaning, intent, and logic exactly. The result is one or more clear, professional paragraphs that improve flow, grammar, transitions, and readability without adding, omitting, or reinterpreting any core information, and it outputs only the refined text with no commentary or extra formatting.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `BULLET_NOTES` | Required | Paste bullet notes here | (none) |



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
    - `BULLET_NOTES`
- Optional: model and options.
  - Present the human with the default model **`gpt-5.2`** and its available options. Look up `gpt-5.2` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `gpt-5.2`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019b54bb-cc5e-75a8-8f49-d0171924911e`).

Command form:

```bash
betterprompt generate 019b54bb-cc5e-75a8-8f49-d0171924911e \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019b54bb-cc5e-75a8-8f49-d0171924911e \
  --input BULLET_NOTES=<value> \
  --model gpt-5.2 \
  --options '{"reasoningEffort":"none"}'
```
