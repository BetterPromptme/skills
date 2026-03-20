---
name: ai-manga
description: This prompt is meant to generate an AI-made comic concept and output—typically including characters, style direction, panel-by-panel beats, and suggested dialogue/captions—centered on a project called “Nano Banana Pro.” The result is a ready-to-use blueprint (and optionally image-generation guidance) for producing a short manga-style comic featuring the theme and branding elements implied by the title.
skillVersionId: 019c2302-daf0-701c-99a1-c18dab018bdc
---

## What it does

This prompt is meant to generate an AI-made comic concept and output—typically including characters, style direction, panel-by-panel beats, and suggested dialogue/captions—centered on a project called “Nano Banana Pro.” The result is a ready-to-use blueprint (and optionally image-generation guidance) for producing a short manga-style comic featuring the theme and branding elements implied by the title.

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

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c2302-daf0-701c-99a1-c18dab018bdc`).

Command form:

```bash
betterprompt generate 019c2302-daf0-701c-99a1-c18dab018bdc \
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
betterprompt generate 019c2302-daf0-701c-99a1-c18dab018bdc \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```
