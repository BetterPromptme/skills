---
name: commercial-portrait-photo-of-the-lady
description: This prompt instructs an image-generation or photo-editing system to create a high-end commercial half-body portrait of the woman from the provided image while preserving her identity, specifying her hairstyle, natural dewy makeup, black spaghetti-strap dress with rhinestone/chain details, coordinated jewelry, and a seated sideways pose with direct eye contact. It defines a minimalist studio setup with a plain gray backdrop, a glossy black marble/glass table, soft side studio lighting, and a shallow depth-of-field medium-telephoto portrait look with low-saturation warm-gray tones. The intended outcome is a clean, sophisticated, professionally lit portrait that keeps attention on the subject and maintains consistent facial features.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image-generation or photo-editing system to create a high-end commercial half-body portrait of the woman from the provided image while preserving her identity, specifying her hairstyle, natural dewy makeup, black spaghetti-strap dress with rhinestone/chain details, coordinated jewelry, and a seated sideways pose with direct eye contact. It defines a minimalist studio setup with a plain gray backdrop, a glossy black marble/glass table, soft side studio lighting, and a shallow depth-of-field medium-telephoto portrait look with low-saturation warm-gray tones. The intended outcome is a clean, sophisticated, professionally lit portrait that keeps attention on the subject and maintains consistent facial features.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | a portrail photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 1** images: image 1 (a portrail photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (a portrail photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `commercial-portrait-photo-of-the-lady`).

Command form:

```bash
betterprompt generate commercial-portrait-photo-of-the-lady \
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
betterprompt generate commercial-portrait-photo-of-the-lady \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
