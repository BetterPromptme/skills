---
name: change-background-for-your-photo
description: This prompt instructs the AI to perform a precise photo edit where the subject from the first image is kept exactly unchanged (pixel-for-pixel) while the background is replaced with the background from a second image. The intended outcome is a realistic, professional-looking composite that matches perspective, lighting, and color grading, with no alteration, regeneration, distortion, or enhancement of the subject’s face, body, clothing, or foreground elements.
skillVersionId: 0197432e-1392-7c6b-b2cd-d8379e2534ad
---

## What it does

This prompt instructs the AI to perform a precise photo edit where the subject from the first image is kept exactly unchanged (pixel-for-pixel) while the background is replaced with the background from a second image. The intended outcome is a realistic, professional-looking composite that matches perspective, lighting, and color grading, with no alteration, regeneration, distortion, or enhancement of the subject’s face, body, clothing, or foreground elements.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes |  | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes |  | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 2** images: image 1 (image 1) and image 2 (image 2). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","image":{"n":0,"size":0,"quality":1},"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","image":{"n":0,"size":0,"quality":1},"quality":"medium"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1) and image 2 (image 2)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0197432e-1392-7c6b-b2cd-d8379e2534ad`).

Command form:

```bash
betterprompt generate 0197432e-1392-7c6b-b2cd-d8379e2534ad \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","image":{"n":0,"size":0,"quality":1},"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0197432e-1392-7c6b-b2cd-d8379e2534ad \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","image":{"n":0,"size":0,"quality":1},"quality":"medium"}'
```
