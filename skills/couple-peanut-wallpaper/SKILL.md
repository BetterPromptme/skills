---
name: couple-peanut-wallpaper
description: This prompt instructs an AI illustrator to convert an uploaded person into a simple, recognizable cartoon character in a classic sketchy, flat-color children’s comic style, while preserving key identity traits like clothing, hair, accessories, pose, expression, and skin tone. It also sets wallpaper-specific output requirements (desktop vs. phone aspect ratio, with extra top space on phone) and limits the look to clean, family-friendly, minimal-shading artwork with optional background and accent color choices. The result is a playful, nostalgic character illustration formatted as a ready-to-use wallpaper or avatar.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI illustrator to convert an uploaded person into a simple, recognizable cartoon character in a classic sketchy, flat-color children’s comic style, while preserving key identity traits like clothing, hair, accessories, pose, expression, and skin tone. It also sets wallpaper-specific output requirements (desktop vs. phone aspect ratio, with extra top space on phone) and limits the look to clean, family-friendly, minimal-shading artwork with optional background and accent color choices. The result is a playful, nostalgic character illustration formatted as a ready-to-use wallpaper or avatar.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `background` | Optional | Select the background style behind the character. Default is white or transparent, but you can change it to another color. | `transparent` |
| `accent_colors` | Optional | Highlight clothing or accessory colors, kept simple in the Peanuts flat-color style. | `yellow shirt` |
| `wallpaper_type` | Optional | Choose the final format so it fits your device. | `desktop` |
| `pose_expression_override` | Optional | Either keep the original pose/expression from the uploaded photo, or override it with something new. | `keep smiling with crossed arms` |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | The photo of you | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | The photo of your crush/friend/anyone you want | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `background` (default: `transparent`)
  - `accent_colors` (default: `yellow shirt`)
  - `wallpaper_type` (default: `desktop`)
  - `pose_expression_override` (default: `keep smiling with crossed arms`)
- Required images:
  - **Exactly 2** images: image 1 (The photo of you) and image 2 (The photo of your crush/friend/anyone you want). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (The photo of you) and image 2 (The photo of your crush/friend/anyone you want)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `couple-peanut-wallpaper`).

Command form:

```bash
betterprompt generate couple-peanut-wallpaper \
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
betterprompt generate couple-peanut-wallpaper \
  --input background=transparent \
  --input 'accent_colors=yellow shirt' \
  --input wallpaper_type=desktop \
  --input 'pose_expression_override=keep smiling with crossed arms' \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```