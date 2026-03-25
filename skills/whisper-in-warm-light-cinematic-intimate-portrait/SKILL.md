---
name: whisper-in-warm-light-cinematic-intimate-portrait
description: This prompt instructs an AI image generator to produce an ultra-high-resolution, photo-realistic 8K cinematic close-up portrait of a woman in a dark, minimal indoor setting, leaning over a polished wooden surface and holding a small white flower near her face while making soft eye contact with the camera. It specifies strict identity preservation to match a provided reference face exactly, and tightly defines pose, styling, makeup, lighting, color palette, lens/depth-of-field, framing, and finishing grade to achieve an intimate, warm, high-contrast fine-art result with crisp facial and texture detail against a deep, moody background.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to produce an ultra-high-resolution, photo-realistic 8K cinematic close-up portrait of a woman in a dark, minimal indoor setting, leaning over a polished wooden surface and holding a small white flower near her face while making soft eye contact with the camera. It specifies strict identity preservation to match a provided reference face exactly, and tightly defines pose, styling, makeup, lighting, color palette, lens/depth-of-field, framing, and finishing grade to achieve an intimate, warm, high-contrast fine-art result with crisp facial and texture detail against a deep, moody background.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `whisper-in-warm-light-cinematic-intimate-portrait`).

Command form:

```bash
betterprompt generate whisper-in-warm-light-cinematic-intimate-portrait \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate whisper-in-warm-light-cinematic-intimate-portrait \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```