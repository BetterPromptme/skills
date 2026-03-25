---
name: dreamy-y2k-suburban-night
description: This prompt instructs an image generator to create a full-body, photorealistic cinematic portrait based on an input face, preserving the subject’s identity while styling them in Y2K-inspired fashion and placing them in a dim suburban night setting. It specifies environment details, pose, props, lighting, lens and film-grain texture to produce a dreamy, nostalgic frame with a subtle horror undertone, resulting in a high-detail vertical image that feels like a still from a late-90s/early-2000s movie.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image generator to create a full-body, photorealistic cinematic portrait based on an input face, preserving the subject’s identity while styling them in Y2K-inspired fashion and placing them in a dim suburban night setting. It specifies environment details, pose, props, lighting, lens and film-grain texture to produce a dreamy, nostalgic frame with a subtle horror undertone, resulting in a high-detail vertical image that feels like a still from a late-90s/early-2000s movie.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `image` | Required |  | (none) |
| `gender` | Required |  | (none) |
| `hairstyle` | Required |  | (none) |
| `accessories` | Required |  | (none) |
| `makeup_style` | Required |  | (none) |
| `outfit_style` | Required |  | (none) |



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
  - `gender`
  - `hairstyle`
  - `accessories`
  - `makeup_style`
  - `outfit_style`
- Required images:
  - **Exactly 1** images: image 1 (your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `dreamy-y2k-suburban-night`).

Command form:

```bash
betterprompt generate dreamy-y2k-suburban-night \
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
betterprompt generate dreamy-y2k-suburban-night \
  --input image=<value> \
  --input gender=<value> \
  --input hairstyle=<value> \
  --input accessories=<value> \
  --input makeup_style=<value> \
  --input outfit_style=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```