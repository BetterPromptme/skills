---
name: dramatic-cinematic-portrait-of-a-rugged-young-man
description: This prompt directs the AI to generate an ultra-realistic, movie-poster style cinematic portrait of a rugged young man in a smoky, ember-filled environment, using dramatic low-key lighting with warm firelight and cool shadows, shallow depth of field, volumetric haze, and high-detail facial texture. The result is a high-resolution, high-contrast image with sharp subject focus, floating particles, and a dark atmospheric background that conveys a serious, introspective mood.
skillVersionId: 019c27b8-5dbe-7159-a136-658ebcb25665
---

## What it does

This prompt directs the AI to generate an ultra-realistic, movie-poster style cinematic portrait of a rugged young man in a smoky, ember-filled environment, using dramatic low-key lighting with warm firelight and cool shadows, shallow depth of field, volumetric haze, and high-detail facial texture. The result is a high-resolution, high-contrast image with sharp subject focus, floating particles, and a dark atmospheric background that conveys a serious, introspective mood.

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
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c27b8-5dbe-7159-a136-658ebcb25665`).

Command form:

```bash
betterprompt generate 019c27b8-5dbe-7159-a136-658ebcb25665 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019c27b8-5dbe-7159-a136-658ebcb25665 \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```
