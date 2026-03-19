---
name: stranger-things-5-poster
description: This prompt directs an image-generation model to create a vertical, ultra-realistic cinematic character poster with an ominous 1980s neon-horror aesthetic, featuring a close-up young man in a varsity jacket under intense red neon lighting against a black background, with a glowing retro-styled number 5 behind his head for halo-like rim light and depth. The result is a high-resolution, shallow–depth-of-field, film-grain portrait designed to resemble a premium streaming-series promotional poster, leaving space for title typography at the bottom.
skillVersionId: 019a5997-c080-71bd-8a00-ba850a7adb5c
---

## What it does

This prompt directs an image-generation model to create a vertical, ultra-realistic cinematic character poster with an ominous 1980s neon-horror aesthetic, featuring a close-up young man in a varsity jacket under intense red neon lighting against a black background, with a glowing retro-styled number 5 behind his head for halo-like rim light and depth. The result is a high-resolution, shallow–depth-of-field, film-grain portrait designed to resemble a premium streaming-series promotional poster, leaving space for title typography at the bottom.

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
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a5997-c080-71bd-8a00-ba850a7adb5c`).

Command form:

```bash
betterprompt generate 019a5997-c080-71bd-8a00-ba850a7adb5c \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a5997-c080-71bd-8a00-ba850a7adb5c \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
