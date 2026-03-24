---
name: cinematic-mirror-self-portrait
description: This prompt instructs an image model to create a hyperrealistic, full-body cinematic self-portrait of a specific woman based on a provided reference image, shown as a standing-mirror reflection in a minimalist bedroom. It specifies the exact pose (drawing a red heart on the mirror with lipstick), wardrobe and jewelry details, lens and depth-of-field choices, and a single diffused neutral-warm lighting setup to achieve a moody, intimate filmic look. The expected result is a vertically framed, identity-faithful portrait with sharp focus on the face and reflection, soft background blur, clean composition, and no added text, distortions, or clutter.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image model to create a hyperrealistic, full-body cinematic self-portrait of a specific woman based on a provided reference image, shown as a standing-mirror reflection in a minimalist bedroom. It specifies the exact pose (drawing a red heart on the mirror with lipstick), wardrobe and jewelry details, lens and depth-of-field choices, and a single diffused neutral-warm lighting setup to achieve a moody, intimate filmic look. The expected result is a vertically framed, identity-faithful portrait with sharp focus on the face and reflection, soft background blur, clean composition, and no added text, distortions, or clutter.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `image` | Required |  | (none) |
| `outfit_style` | Required |  | (none) |
| `jewelry_style` | Required |  | (none) |
| `lipstick_color` | Required |  | (none) |
| `lighting_temperature` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | your photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `image`
  - `outfit_style`
  - `jewelry_style`
  - `lipstick_color`
  - `lighting_temperature`
- Required images:
  - **Exactly 1** images: image 1 (your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cinematic-mirror-self-portrait`).

Command form:

```bash
betterprompt generate cinematic-mirror-self-portrait \
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
betterprompt generate cinematic-mirror-self-portrait \
  --input image=<value> \
  --input outfit_style=<value> \
  --input jewelry_style=<value> \
  --input lipstick_color=<value> \
  --input lighting_temperature=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
