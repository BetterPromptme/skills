---
name: ariana-grandes-album-cover
description: This prompt instructs an AI image system to edit a user-provided portrait into a photorealistic, square-format album-cover style image with a specific intimate floor-lying pose, dreamy pastel lavender/blue environment, and a diagonal mint-tinted spotlight across the face, using a separate reference only for color/lighting mood while strictly preserving the subject’s identity. The intended outcome is an Ultra-HD, cinematic editorial cover that matches the requested soft-focus, shallow depth-of-field look and overall vibe without adding text, logos, clutter, or copying any other person’s features.
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

This prompt instructs an AI image system to edit a user-provided portrait into a photorealistic, square-format album-cover style image with a specific intimate floor-lying pose, dreamy pastel lavender/blue environment, and a diagonal mint-tinted spotlight across the face, using a separate reference only for color/lighting mood while strictly preserving the subject’s identity. The intended outcome is an Ultra-HD, cinematic editorial cover that matches the requested soft-focus, shallow depth-of-field look and overall vibe without adding text, logos, clutter, or copying any other person’s features.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `outfit` | Optional |  Short description of the clothing style that fits Ariana Grande’s vibe. | `Light neutral top with soft textures` |
| `hairstyle` | Optional | Short description of how the hair should be styled. | `Sleek high ponytail` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your portrait photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `outfit` (default: `Light neutral top with soft textures`)
  - `hairstyle` (default: `Sleek high ponytail`)
- Required images:
  - **Exactly 1** images: image 1 (Your portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `ariana-grandes-album-cover`).

Command form:

```bash
betterprompt generate ariana-grandes-album-cover \
  [--input <key>=<value>] \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate ariana-grandes-album-cover \
  --input 'outfit=Light neutral top with soft textures' \
  --input 'hairstyle=Sleek high ponytail' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```