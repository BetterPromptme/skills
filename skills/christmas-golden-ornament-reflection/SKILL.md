---
name: christmas-golden-ornament-reflection
description: This prompt instructs an image transformation system to take a user-provided portrait and re-render it as a photorealistic, macro close-up scene of a reflective golden Christmas ornament hanging on a spruce branch, using a separate reference image only for overall style, lighting, color, and mood. The user’s face and identity must remain fully preserved and recognizable while appearing centered within the ornament’s fisheye reflection of a nostalgic late-Soviet/1990s New Year interior (holiday table, warm incandescent light, vintage TV, decorated tree), with the subject dressed per a specified outfit style and holding champagne. The intended result is a family-friendly, cinematic, warm-toned ornament image with shallow depth of field, soft film grain, and bokeh, without copying any identity from the reference or altering the subject’s core features.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image transformation system to take a user-provided portrait and re-render it as a photorealistic, macro close-up scene of a reflective golden Christmas ornament hanging on a spruce branch, using a separate reference image only for overall style, lighting, color, and mood. The user’s face and identity must remain fully preserved and recognizable while appearing centered within the ornament’s fisheye reflection of a nostalgic late-Soviet/1990s New Year interior (holiday table, warm incandescent light, vintage TV, decorated tree), with the subject dressed per a specified outfit style and holding champagne. The intended result is a family-friendly, cinematic, warm-toned ornament image with shallow depth of field, soft film grain, and bokeh, without copying any identity from the reference or altering the subject’s core features.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `outfit_style` | Optional | Optional clothing guidelines matching the vintage Christmas aesthetic. | `Elegant dark outfit` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your portrait photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `outfit_style` (default: `Elegant dark outfit`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `christmas-golden-ornament-reflection`).

Command form:

```bash
betterprompt generate christmas-golden-ornament-reflection \
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
betterprompt generate christmas-golden-ornament-reflection \
  --input 'outfit_style=Elegant dark outfit' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```