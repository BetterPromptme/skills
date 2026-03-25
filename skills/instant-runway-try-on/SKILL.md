---
name: instant-runway-try-on
description: This prompt instructs an AI to generate a single, photorealistic 4‑second vertical runway video featuring a lifelike model built from provided identity attributes and wearing an uploaded outfit exactly as referenced, while maintaining a fixed cinematic runway environment, continuous forward-tracking camera move, realistic walk cycle with cloth physics, and embedded runway ambience audio, enforcing strict consistency and prohibiting any overlays, text, branding, cuts, or display of the reference image.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to generate a single, photorealistic 4‑second vertical runway video featuring a lifelike model built from provided identity attributes and wearing an uploaded outfit exactly as referenced, while maintaining a fixed cinematic runway environment, continuous forward-tracking camera move, realistic walk cycle with cloth physics, and embedded runway ambience audio, enforcing strict consistency and prohibiting any overlays, text, branding, cuts, or display of the reference image.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `gender` | Optional | The model’s gender identity. | `male/female/other` |
| `age_range` | Optional | The general age feel of the model. | `early 20s` |
| `skin_tone` | Optional | Brief description of skin color. | `fair porcelain` |
| `body_build` | Optional | Overall build or proportions. | `tall athletic` |
| `walk_style` | Optional | How the model moves on the runway. | `smooth controlled runway walk with clean turns` |
| `hair_style_color` | Optional | Hair length, style, and color. | `shoulder length wavy chestnut hair` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload a photo of the outfit you want to try on | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


### Models and options

This skill's modality is: **`video`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"video"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "video"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional text inputs (use defaults if not provided by the human):
    - `gender` (default: `male/female/other`)
  - `age_range` (default: `early 20s`)
  - `skin_tone` (default: `fair porcelain`)
  - `body_build` (default: `tall athletic`)
  - `walk_style` (default: `smooth controlled runway walk with clean turns`)
  - `hair_style_color` (default: `shoulder length wavy chestnut hair`)
- Required images:
  - **Exactly 1** images: image 1 (Upload a photo of the outfit you want to try on). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload a photo of the outfit you want to try on)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `instant-runway-try-on`).

Command form:

```bash
betterprompt generate instant-runway-try-on \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate instant-runway-try-on \
  --input gender=male/female/other \
  --input 'age_range=early 20s' \
  --input 'skin_tone=fair porcelain' \
  --input 'body_build=tall athletic' \
  --input 'walk_style=smooth controlled runway walk with clean turns' \
  --input 'hair_style_color=shoulder length wavy chestnut hair' \
  --image-input-url https://example.com/image1.png \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```