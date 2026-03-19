---
name: abaya-fashion
description: This prompt instructs the AI to use a provided reference image of a person to generate a full-body, high-fashion portrait featuring a sage green embroidered abaya, matching hijab, and gold earrings, set against a softly blurred twilight Arabian souq with lantern bokeh. The intended outcome is a cinematic, photorealistic vertical (9:16) image with a razor-sharp subject and creamy background blur, styled as if shot on a 35mm lens at f/1.4.
skillVersionId: 019ca9fb-d2c7-7442-95df-bcd151dc972a
---

## What it does

This prompt instructs the AI to use a provided reference image of a person to generate a full-body, high-fashion portrait featuring a sage green embroidered abaya, matching hijab, and gold earrings, set against a softly blurred twilight Arabian souq with lantern bokeh. The intended outcome is a cinematic, photorealistic vertical (9:16) image with a razor-sharp subject and creamy background blur, styled as if shot on a 35mm lens at f/1.4.

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
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"1K"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019ca9fb-d2c7-7442-95df-bcd151dc972a`).

Command form:

```bash
betterprompt generate 019ca9fb-d2c7-7442-95df-bcd151dc972a \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019ca9fb-d2c7-7442-95df-bcd151dc972a \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"1K"}'
```
