---
name: monochrome-couture-dog-portrait
description: This prompt instructs an image-generation system to create an ultra-realistic, black-and-white high-fashion studio portrait that closely matches the uploaded person’s facial identity and hair, while depicting them in a minimalist editorial setup holding a realistically rendered dog defined by a provided description or optional dog reference photo. It specifies wardrobe, pose, framing, lens and depth-of-field, lighting, tonal finish, and detailed realism requirements, and it includes extensive constraints to prevent identity drift, anatomical errors, obstructed faces, incorrect dog traits, non-photorealistic styles, and unwanted artifacts, resulting in a crisp cinematic monochrome fashion image.
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

This prompt instructs an image-generation system to create an ultra-realistic, black-and-white high-fashion studio portrait that closely matches the uploaded person’s facial identity and hair, while depicting them in a minimalist editorial setup holding a realistically rendered dog defined by a provided description or optional dog reference photo. It specifies wardrobe, pose, framing, lens and depth-of-field, lighting, tonal finish, and detailed realism requirements, and it includes extensive constraints to prevent identity drift, anatomical errors, obstructed faces, incorrect dog traits, non-photorealistic styles, and unwanted artifacts, resulting in a crisp cinematic monochrome fashion image.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Dog_description_` | Optional |  | `a small husky puppy with blue eyes and gray-white fur` |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your photo | `--image-input-url <url>` or `--image-input-path <path>` |
| 2 | Yes | Your dog photo | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `Dog_description_` (default: `a small husky puppy with blue eyes and gray-white fur`)
- Required images:
  - **Exactly 2** images: image 1 (Your photo) and image 2 (Your dog photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo) and image 2 (Your dog photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `monochrome-couture-dog-portrait`).

Command form:

```bash
betterprompt generate monochrome-couture-dog-portrait \
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
betterprompt generate monochrome-couture-dog-portrait \
  --input 'Dog_description_=a small husky puppy with blue eyes and gray-white fur' \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```