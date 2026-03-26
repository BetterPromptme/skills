---
name: retro-lo-fi-portrait-generator
description: This prompt instructs an image model to take a supplied reference photo and restyle it into a cinematic retro lo‑fi portrait by specifying a location, an unusual camera angle, and optional background props. It guides the look toward warm vintage color grading, soft film grain, muted tones, dreamy lighting, and off‑center composition to evoke a nostalgic, surreal film-photo feel. The outcome is a set of consistent, authentic-looking vintage portraits that can be rapidly varied by swapping simple placeholder values for place and added elements.
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

This prompt instructs an image model to take a supplied reference photo and restyle it into a cinematic retro lo‑fi portrait by specifying a location, an unusual camera angle, and optional background props. It guides the look toward warm vintage color grading, soft film grain, muted tones, dreamy lighting, and off‑center composition to evoke a nostalgic, surreal film-photo feel. The outcome is a set of consistent, authentic-looking vintage portraits that can be rapidly varied by swapping simple placeholder values for place and added elements.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `place` | Required |  | (none) |
| `weird_camera_angle` | Required |  | (none) |
| `additional_elements` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your photo that you want to transform into a Retro Lo-Fi Portrait. | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `place`
  - `weird_camera_angle`
  - `additional_elements`
- Required images:
  - **Exactly 1** images: image 1 (Your photo that you want to transform into a Retro Lo-Fi Portrait.). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo that you want to transform into a Retro Lo-Fi Portrait.)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `retro-lo-fi-portrait-generator`).

Command form:

```bash
betterprompt generate retro-lo-fi-portrait-generator \
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
betterprompt generate retro-lo-fi-portrait-generator \
  --input place=<value> \
  --input weird_camera_angle=<value> \
  --input additional_elements=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```