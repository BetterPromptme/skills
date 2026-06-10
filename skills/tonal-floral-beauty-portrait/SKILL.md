---
name: tonal-floral-beauty-portrait
description: This prompt instructs an image generator to create an ultra-realistic vertical (2:3) floral editorial beauty portrait that keeps the uploaded person’s facial identity and key features unchanged, while placing them in a surreal studio setup surrounded by oversized, translucent, highly detailed poppy flowers. It specifies a cohesive monochromatic color concept based on a single chosen flower color, matching the flowers, outfit, and background within that color family, along with soft neutral makeup, gentle pose, and diffused studio lighting. The intended result is a high-resolution, face-sharp, dreamy, layered floral composition with realistic textures and depth of field, while explicitly avoiding identity changes, heavy styling, strong unrelated colors, artifacts, or non-photorealistic rendering.
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

This prompt instructs an image generator to create an ultra-realistic vertical (2:3) floral editorial beauty portrait that keeps the uploaded person’s facial identity and key features unchanged, while placing them in a surreal studio setup surrounded by oversized, translucent, highly detailed poppy flowers. It specifies a cohesive monochromatic color concept based on a single chosen flower color, matching the flowers, outfit, and background within that color family, along with soft neutral makeup, gentle pose, and diffused studio lighting. The intended result is a high-resolution, face-sharp, dreamy, layered floral composition with realistic textures and depth of field, while explicitly avoiding identity changes, heavy styling, strong unrelated colors, artifacts, or non-photorealistic rendering.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Flower_Color` | Optional |  | `butter yellow` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your photo | `--image-input-url <url>` or `--image-input-path <path>` |


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

- Optional text inputs (use defaults if not provided by the human):
    - `Flower_Color` (default: `butter yellow`)
- Required images:
  - **Exactly 1** images: image 1 (Your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `tonal-floral-beauty-portrait`).

Command form:

```bash
betterprompt generate tonal-floral-beauty-portrait \
  [--input <key>=<value>] \
  [--image-input-url <url>] \
  [--image-input-path <path>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- Pass each image using `--image-input-url` or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate tonal-floral-beauty-portrait \
  --input 'Flower_Color=butter yellow' \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```