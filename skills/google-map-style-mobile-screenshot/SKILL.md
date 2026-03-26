---
name: google-map-style-mobile-screenshot
description: This prompt instructs the AI to create a realistic 9:16 mobile screenshot styled like a Google Maps place preview, using the user’s uploaded group selfie unchanged as the top image area and generating an authentic-looking Google Maps info card beneath it. The user can customize the place name, rating, review count, category, open/close status, action buttons, and the language/UI style, while the AI reconstructs matching Maps typography, icons, spacing, colors, and rounded card layout. The intended result is a high-quality, Google Maps–identical composite screenshot where the photo remains intact and all UI elements look native to the app.
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

This prompt instructs the AI to create a realistic 9:16 mobile screenshot styled like a Google Maps place preview, using the user’s uploaded group selfie unchanged as the top image area and generating an authentic-looking Google Maps info card beneath it. The user can customize the place name, rating, review count, category, open/close status, action buttons, and the language/UI style, while the AI reconstructs matching Maps typography, icons, spacing, colors, and rounded card layout. The intended result is a high-quality, Google Maps–identical composite screenshot where the photo remains intact and all UI elements look native to the app.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Place_name` | Required |  | (none) |
| `Place_category` | Optional |  | `Convenience store, restaurant or shop` |
| `Language_of_map` | Optional |  | `English, Korean, Japanese,...` |



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


- Required text inputs:
    - `Place_name`
- Optional text inputs (use defaults if not provided by the human):
    - `Place_category` (default: `Convenience store, restaurant or shop`)
  - `Language_of_map` (default: `English, Korean, Japanese,...`)
- Required images:
  - **Exactly 1** images: image 1 (Your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"3:4"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `google-map-style-mobile-screenshot`).

Command form:

```bash
betterprompt generate google-map-style-mobile-screenshot \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate google-map-style-mobile-screenshot \
  --input Place_name=<value> \
  --input 'Place_category=Convenience store, restaurant or shop' \
  --input 'Language_of_map=English, Korean, Japanese,...' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"3:4"}'
```