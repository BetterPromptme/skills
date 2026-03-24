---
name: product-mockup-for-marketing
description: This prompt instructs the AI to create a professional, on-brand studio-style product mockup image by inserting the specified product, brand logo, and packaging type into a controlled scene with defined background, lighting, and subtle visual effects, optimized for clarity and commercial shelf impact. The expected outcome is a sharp, natural-textured, high-resolution, color-accurate visual suitable for the stated marketing use case (e.g., e-commerce or ads), while also calling for manufacturable packaging considerations and requesting missing brand or print specifications when needed.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a professional, on-brand studio-style product mockup image by inserting the specified product, brand logo, and packaging type into a controlled scene with defined background, lighting, and subtle visual effects, optimized for clarity and commercial shelf impact. The expected outcome is a sharp, natural-textured, high-resolution, color-accurate visual suitable for the stated marketing use case (e.g., e-commerce or ads), while also calling for manufacturable packaging considerations and requesting missing brand or print specifications when needed.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `USE_CASE` | Required |  | (none) |
| `BRAND_LOGO` | Required |  | (none) |
| `PRODUCT_ITEM` | Required |  | (none) |
| `LIGHTING_STYLE` | Required |  | (none) |
| `PACKAGING_TYPE` | Required |  | (none) |
| `VISUAL_EFFECTS` | Required |  | (none) |
| `BACKGROUND_STYLE` | Required |  | (none) |



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
    - `USE_CASE`
  - `BRAND_LOGO`
  - `PRODUCT_ITEM`
  - `LIGHTING_STYLE`
  - `PACKAGING_TYPE`
  - `VISUAL_EFFECTS`
  - `BACKGROUND_STYLE`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `product-mockup-for-marketing`).

Command form:

```bash
betterprompt generate product-mockup-for-marketing \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate product-mockup-for-marketing \
  --input USE_CASE=<value> \
  --input BRAND_LOGO=<value> \
  --input PRODUCT_ITEM=<value> \
  --input LIGHTING_STYLE=<value> \
  --input PACKAGING_TYPE=<value> \
  --input VISUAL_EFFECTS=<value> \
  --input BACKGROUND_STYLE=<value> \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
