---
name: vogue-editorial-torn-collage-cover-style
description: This prompt instructs an AI image generator to produce a 4:5 high-fashion magazine cover in a minimal torn-paper editorial style, featuring a dominant, uninterrupted top portrait against a deep royal-blue background with oversized white serif type partially obscured behind the subject, and a single horizontal torn-paper strip across the lower third that reveals only a close-up of the lips. It also specifies premium Vogue-like layout elements (logo bottom left, small centered editorial text, barcode bottom right) and luxury beauty lighting/retouching, ensuring the outcome is elegant, intentional, and limited to exactly two image sections.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to produce a 4:5 high-fashion magazine cover in a minimal torn-paper editorial style, featuring a dominant, uninterrupted top portrait against a deep royal-blue background with oversized white serif type partially obscured behind the subject, and a single horizontal torn-paper strip across the lower third that reveals only a close-up of the lips. It also specifies premium Vogue-like layout elements (logo bottom left, small centered editorial text, barcode bottom right) and luxury beauty lighting/retouching, ensuring the outcome is elegant, intentional, and limited to exactly two image sections.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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

- Required images:
  - **Exactly 1** images: image 1 (Upload your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `vogue-editorial-torn-collage-cover-style`).

Command form:

```bash
betterprompt generate vogue-editorial-torn-collage-cover-style \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate vogue-editorial-torn-collage-cover-style \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```