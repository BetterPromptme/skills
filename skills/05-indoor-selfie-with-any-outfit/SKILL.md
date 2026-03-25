---
name: 05-indoor-selfie-with-any-outfit
description: This prompt instructs an AI image generator to produce a photorealistic 4:5 indoor portrait that looks like a casual handheld selfie taken with an iPhone 17 Pro’s 0.5x ultra-wide back camera from a slightly overhead, downward-tilted angle. It uses a provided reference image to match the subject’s facial likeness, skin tone, and proportions, applies a user-specified outfit, and stages the scene with specific cozy room props, warm low-light realism, and subtle grain while avoiding fisheye distortion or stylized effects. The intended outcome is an authentic-looking wide-angle back-camera selfie that includes the subject’s extended arm and phone, upper body and partial legs, and the detailed background elements for a playful yet slightly mysterious everyday atmosphere.
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

This prompt instructs an AI image generator to produce a photorealistic 4:5 indoor portrait that looks like a casual handheld selfie taken with an iPhone 17 Pro’s 0.5x ultra-wide back camera from a slightly overhead, downward-tilted angle. It uses a provided reference image to match the subject’s facial likeness, skin tone, and proportions, applies a user-specified outfit, and stages the scene with specific cozy room props, warm low-light realism, and subtle grain while avoiding fisheye distortion or stylized effects. The intended outcome is an authentic-looking wide-angle back-camera selfie that includes the subject’s extended arm and phone, upper body and partial legs, and the detailed background elements for a playful yet slightly mysterious everyday atmosphere.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `outfit` | Optional | description of the outfit  | `Warm knit top with plaid skirt and soft textures` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo (exact face, skin tone, and body proportions) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `outfit` (default: `Warm knit top with plaid skirt and soft textures`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your photo (exact face, skin tone, and body proportions)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo (exact face, skin tone, and body proportions))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `05-indoor-selfie-with-any-outfit`).

Command form:

```bash
betterprompt generate 05-indoor-selfie-with-any-outfit \
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
betterprompt generate 05-indoor-selfie-with-any-outfit \
  --input 'outfit=Warm knit top with plaid skirt and soft textures' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```