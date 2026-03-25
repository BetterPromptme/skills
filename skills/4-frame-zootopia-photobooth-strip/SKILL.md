---
name: 4-frame-zootopia-photobooth-strip
description: This prompt instructs an image generator to create a vertical four-frame photobooth strip on a plain gray background with warm lighting, featuring the same fixed left-to-right lineup in every frame: Nick Wilde hugging Human 1 (wearing a fox-ears headband), Human 2 (wearing gray bunny-ears headband), and Judy Hopps hugging Human 2. It specifies that the two humans must remain fully realistic and identity-locked while Nick and Judy retain their original 3D film designs, and it defines distinct poses and expressions for each of the four frames while forbidding any reordering, extra characters, props, busy backgrounds, or any animal/cartoon alterations to the humans.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs an image generator to create a vertical four-frame photobooth strip on a plain gray background with warm lighting, featuring the same fixed left-to-right lineup in every frame: Nick Wilde hugging Human 1 (wearing a fox-ears headband), Human 2 (wearing gray bunny-ears headband), and Judy Hopps hugging Human 2. It specifies that the two humans must remain fully realistic and identity-locked while Nick and Judy retain their original 3D film designs, and it defines distinct poses and expressions for each of the four frames while forbidding any reordering, extra characters, props, busy backgrounds, or any animal/cartoon alterations to the humans.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | Your friend/lover photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 2** images: image 1 (Your photo) and image 2 (Your friend/lover photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo) and image 2 (Your friend/lover photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `4-frame-zootopia-photobooth-strip`).

Command form:

```bash
betterprompt generate 4-frame-zootopia-photobooth-strip \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 4-frame-zootopia-photobooth-strip \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"1K"}'
```