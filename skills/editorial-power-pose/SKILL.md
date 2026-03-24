---
name: editorial-power-pose
description: This prompt directs the AI to transform a user’s portrait into a high-end, photorealistic fashion editorial beauty campaign image by preserving the person’s exact facial identity while recreating a specified outfit and a strict, reference-matched pose featuring a clearly visible lipstick held near the lips, an upward gaze, elegant raised hands, and a dynamic, elongated stance. The result is a sharp, studio-lit, white-background full or near full-body photograph with intentional high-angle editorial perspective, clean makeup, and a bold, confident attitude, while avoiding any pose drift, extra props, logos, or non-photographic stylization.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the AI to transform a user’s portrait into a high-end, photorealistic fashion editorial beauty campaign image by preserving the person’s exact facial identity while recreating a specified outfit and a strict, reference-matched pose featuring a clearly visible lipstick held near the lips, an upward gaze, elegant raised hands, and a dynamic, elongated stance. The result is a sharp, studio-lit, white-background full or near full-body photograph with intentional high-angle editorial perspective, clean makeup, and a bold, confident attitude, while avoiding any pose drift, extra props, logos, or non-photographic stylization.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo (recommended: clear portrait with face fully visible) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | Outfit photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 2** images: image 1 (Upload your photo (recommended: clear portrait with face fully visible)) and image 2 (Outfit photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo (recommended: clear portrait with face fully visible)) and image 2 (Outfit photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `editorial-power-pose`).

Command form:

```bash
betterprompt generate editorial-power-pose \
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
betterprompt generate editorial-power-pose \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```
