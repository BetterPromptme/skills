---
name: 3d-cartoon-render
description: This prompt directs an image-generation model to create a high-quality 3D cartoon portrait of a thoughtful young boy in a pondering pose, specifying key facial features, hairstyle, clothing textures, lighting, background, and a polished cinematic “Pixar-like” aesthetic, along with rendering and aspect-ratio settings to produce a detailed vertical render.
skillVersionId: 0197d02c-7701-7563-ac66-b9aebeff4fa4
---

## What it does

This prompt directs an image-generation model to create a high-quality 3D cartoon portrait of a thoughtful young boy in a pondering pose, specifying key facial features, hairstyle, clothing textures, lighting, background, and a polished cinematic “Pixar-like” aesthetic, along with rendering and aspect-ratio settings to produce a detailed vertical render.

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
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0197d02c-7701-7563-ac66-b9aebeff4fa4`).

Command form:

```bash
betterprompt generate 0197d02c-7701-7563-ac66-b9aebeff4fa4 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":2},"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0197d02c-7701-7563-ac66-b9aebeff4fa4 \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
