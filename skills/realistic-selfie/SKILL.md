---
name: realistic-selfie
description: This prompt instructs an image model to generate an ultra-realistic, high-angle close-up selfie of a young woman in a dark room, using strong flash lighting to create dramatic contrast and a minimalist background. It specifies detailed attributes for hair, makeup, clothing, accessories, nails, pose, expression, mood, and camera aesthetics to achieve a cool-toned, cinematic film-noir look with sharp facial illumination and textured knit details as the final outcome.
skillVersionId: 019abedc-a2f7-71f4-93a1-096eb95d03c2
---

## What it does

This prompt instructs an image model to generate an ultra-realistic, high-angle close-up selfie of a young woman in a dark room, using strong flash lighting to create dramatic contrast and a minimalist background. It specifies detailed attributes for hair, makeup, clothing, accessories, nails, pose, expression, mood, and camera aesthetics to achieve a cool-toned, cinematic film-noir look with sharp facial illumination and textured knit details as the final outcome.

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
  - Present the human with the default model **`imagen-4.0-ultra-generate-001`** and its available options. Look up `imagen-4.0-ultra-generate-001` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `imagen-4.0-ultra-generate-001`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019abedc-a2f7-71f4-93a1-096eb95d03c2`).

Command form:

```bash
betterprompt generate 019abedc-a2f7-71f4-93a1-096eb95d03c2 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`imagen-4.0-ultra-generate-001`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019abedc-a2f7-71f4-93a1-096eb95d03c2 \
  --model imagen-4.0-ultra-generate-001 \
  --options '{"aspectRatio":"1:1"}'
```
