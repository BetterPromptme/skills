---
name: exact-font-text-generator
description: This prompt instructs the AI to render a user-provided text string exactly as written in a specified real-world font, matching authentic typographic details (glyph shapes, spacing, and proportions) and using the font’s commonly associated default color, placed centered on a solid white background with no additional visual effects or decorations, producing a clean final image containing only the styled text.
skillVersionId: 019afbec-ff88-701b-b8e4-b02c8709ef87
---

## What it does

This prompt instructs the AI to render a user-provided text string exactly as written in a specified real-world font, matching authentic typographic details (glyph shapes, spacing, and proportions) and using the font’s commonly associated default color, placed centered on a solid white background with no additional visual effects or decorations, producing a clean final image containing only the styled text.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Font` | Required | Enter the name of the font style you want your text to appear in. For example: Grab, Spotify, Coca Cola, etc. | (none) |
| `Text` | Required | Write the exact phrase you want the AI to generate. | (none) |



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


- Required text inputs:
    - `Font`
  - `Text`
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019afbec-ff88-701b-b8e4-b02c8709ef87`).

Command form:

```bash
betterprompt generate 019afbec-ff88-701b-b8e4-b02c8709ef87 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019afbec-ff88-701b-b8e4-b02c8709ef87 \
  --input Font=<value> \
  --input Text=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
