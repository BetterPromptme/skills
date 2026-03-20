---
name: generate-random-image
description: This prompt asks the AI to create a small, randomly generated image and return it as the output, producing a minimal-dimension visual (typically the smallest practical size) with arbitrary pixel content rather than a specific subject or scene.
skillVersionId: 019b3086-1f28-7488-82f4-17bcb1fc4c59
---

## What it does

This prompt asks the AI to create a small, randomly generated image and return it as the output, producing a minimal-dimension visual (typically the smallest practical size) with arbitrary pixel content rather than a specific subject or scene.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



### Models and options

This skill's modality is: **`image`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"image"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "image"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional: model and options.
  - Present the human with the default model **`gpt-image-1-mini`** and its available options. Look up `gpt-image-1-mini` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1-mini`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019b3086-1f28-7488-82f4-17bcb1fc4c59`).

Command form:

```bash
betterprompt generate 019b3086-1f28-7488-82f4-17bcb1fc4c59 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019b3086-1f28-7488-82f4-17bcb1fc4c59 \
  --model gpt-image-1-mini \
  --options '{"size":"1024x1024","quality":"low"}'
```
