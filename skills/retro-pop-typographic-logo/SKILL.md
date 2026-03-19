---
name: retro-pop-typographic-logo
description: This prompt instructs the AI to generate a single, polished, vector-style retro typographic word logo in a strict 1970s pop-art bubble-letter aesthetic, where the provided main text is warped and integrated so the letters themselves form a recognizable specified silhouette, rendered in a flat solid chosen color with a very subtle rim glow, centered on a transparent background with no extra elements, textures, gradients, shadows, or 3D effects.
skillVersionId: 019afbd9-866c-7462-8538-4e32936467ee
---

## What it does

This prompt instructs the AI to generate a single, polished, vector-style retro typographic word logo in a strict 1970s pop-art bubble-letter aesthetic, where the provided main text is warped and integrated so the letters themselves form a recognizable specified silhouette, rendered in a flat solid chosen color with a very subtle rim glow, centered on a transparent background with no extra elements, textures, gradients, shadows, or 3D effects.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Color` | Required | The dominant color or palette used in the logo design. Best results when using a hex color code (example: #cd1234). | (none) |
| `Shape` | Required | The object or silhouette the text should visually form. | (none) |
| `Main_text` | Required | The word or phrase that will be transformed into the logo. | (none) |



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
    - `Color`
  - `Shape`
  - `Main_text`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019afbd9-866c-7462-8538-4e32936467ee`).

Command form:

```bash
betterprompt generate 019afbd9-866c-7462-8538-4e32936467ee \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019afbd9-866c-7462-8538-4e32936467ee \
  --input Color=<value> \
  --input Shape=<value> \
  --input Main_text=<value> \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```
