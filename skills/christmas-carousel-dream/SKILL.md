---
name: christmas-carousel-dream
description: This prompt instructs an AI image editor to take a user-provided portrait and restyle it into a warm, cinematic Christmas carousel scene shot at night, using a Kodak ColorPlus 200–inspired film look. It preserves the subject’s exact facial identity while applying cozy winter wardrobe details and a specified pose, placing them against a glowing merry-go-round with festive lights and decorations. The outcome is a family-friendly, nostalgic holiday portrait with soft warm illumination, subtle film grain, and a candid mid-shot composition, avoiding exaggerated effects, unsafe content, or non-Christmas settings.
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

This prompt instructs an AI image editor to take a user-provided portrait and restyle it into a warm, cinematic Christmas carousel scene shot at night, using a Kodak ColorPlus 200–inspired film look. It preserves the subject’s exact facial identity while applying cozy winter wardrobe details and a specified pose, placing them against a glowing merry-go-round with festive lights and decorations. The outcome is a family-friendly, nostalgic holiday portrait with soft warm illumination, subtle film grain, and a candid mid-shot composition, avoiding exaggerated effects, unsafe content, or non-Christmas settings.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `pose` | Optional | Describe the pose or action you want | `leaning on the fence with lights behind` |
| `oufit_description` | Optional |  Describe your desired winter outfit | `cream knit sweater with scarf,” “striped cardigan with white muffler,” “long beige coat and beret` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your clear portrait photo | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `pose` (default: `leaning on the fence with lights behind`)
  - `oufit_description` (default: `cream knit sweater with scarf,” “striped cardigan with white muffler,” “long beige coat and beret`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your clear portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your clear portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `christmas-carousel-dream`).

Command form:

```bash
betterprompt generate christmas-carousel-dream \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate christmas-carousel-dream \
  --input 'pose=leaning on the fence with lights behind' \
  --input 'oufit_description=cream knit sweater with scarf,” “striped cardigan with white muffler,” “long beige coat and beret' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```