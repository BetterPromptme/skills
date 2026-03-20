---
name: make-animation-for-logo
description: This prompt instructs an AI to create a smooth, seamless 3–5 second looping GIF that animates a provided logo on a clean, palette-matching background, using a specified visual style, subtle transition effect, and defined lighting. The result is an elegant, consistent motion animation that feels continuous and polished without jerky movement.
skillVersionId: 0199c891-4fa4-7abf-a556-8fc2d7d71a3b
---

## What it does

This prompt instructs an AI to create a smooth, seamless 3–5 second looping GIF that animates a provided logo on a clean, palette-matching background, using a specified visual style, subtle transition effect, and defined lighting. The result is an elegant, consistent motion animation that feels continuous and polished without jerky movement.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `style` | Required | Allowed options: cinematic, modern_tech | (none) |
| `lighting` | Required | Allowed options: glowing_neon_edges, soft_ambient_light | (none) |
| `transition` | Required | Allowed options: liquid_morph, light_streaks, particle_glow, camera_zoom-in | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | my logo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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


- Required text inputs:
    - `style`
  - `lighting`
  - `transition`
- Required images:
  - **Exactly 1** images: image 1 (my logo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (my logo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199c891-4fa4-7abf-a556-8fc2d7d71a3b`).

Command form:

```bash
betterprompt generate 0199c891-4fa4-7abf-a556-8fc2d7d71a3b \
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
betterprompt generate 0199c891-4fa4-7abf-a556-8fc2d7d71a3b \
  --input style=cinematic \
  --input lighting=glowing_neon_edges \
  --input transition=liquid_morph \
  --image-input-url https://example.com/image1.png \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```
