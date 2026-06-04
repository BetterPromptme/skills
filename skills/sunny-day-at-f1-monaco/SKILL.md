---
name: sunny-day-at-f1-monaco
description: This prompt instructs an image-generation model to produce a photorealistic, high-end luxury lifestyle photo set during the Monaco Grand Prix, featuring a stylish young woman on a balcony with the F1 circuit and Monaco scenery behind her. It specifies her pose, facial expression, hair and makeup, exact outfit and luxury accessories, and the handbag and cap she carries, while also defining a DSLR editorial look with bright natural daylight, shallow depth of field, and cinematic color grading. It additionally lists strict exclusions (e.g., eyewear, incorrect clothing, anatomical artifacts, low quality, fake logos) to reduce common generation errors and ensure an authentic, polished Instagram-fashion outcome with the subject in sharp focus and the race background slightly blurred.
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

This prompt instructs an image-generation model to produce a photorealistic, high-end luxury lifestyle photo set during the Monaco Grand Prix, featuring a stylish young woman on a balcony with the F1 circuit and Monaco scenery behind her. It specifies her pose, facial expression, hair and makeup, exact outfit and luxury accessories, and the handbag and cap she carries, while also defining a DSLR editorial look with bright natural daylight, shallow depth of field, and cinematic color grading. It additionally lists strict exclusions (e.g., eyewear, incorrect clothing, anatomical artifacts, low quality, fake logos) to reduce common generation errors and ensure an authentic, polished Instagram-fashion outcome with the subject in sharp focus and the race background slightly blurred.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



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

- Required images:
  - **Exactly 1** images: image 1 (Your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3.1-flash-image-preview`** and its available options. Look up `gemini-3.1-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"minimal","aspectRatio":"3:4","resolution":"0.5K"}`.
  - If the human does not specify, defaults are used: model `gemini-3.1-flash-image-preview`, options `{"reasoningEffort":"minimal","aspectRatio":"3:4","resolution":"0.5K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `sunny-day-at-f1-monaco`).

Command form:

```bash
betterprompt generate sunny-day-at-f1-monaco \
  [--image-input-url <url>] \
  [--image-input-path <path>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using `--image-input-url` or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3.1-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"minimal","aspectRatio":"3:4","resolution":"0.5K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate sunny-day-at-f1-monaco \
  --image-input-url https://example.com/image1.png \
  --model gemini-3.1-flash-image-preview \
  --options '{"reasoningEffort":"minimal","aspectRatio":"3:4","resolution":"0.5K"}'
```