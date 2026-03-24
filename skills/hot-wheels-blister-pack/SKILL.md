---
name: hot-wheels-blister-pack
description: This prompt instructs an image-generation/editing task to turn the uploaded person into a stylized, vinyl-like Hot Wheels toy figure and place them fully inside a realistic clear blister bubble on a classic bright blue Hot Wheels card, alongside a chosen Hot Wheels vehicle in the same blister. The result is a convincing collectible blister-pack mockup with accurate packaging aesthetics—logo, gradient background, metallic flame accents, reflections, glare, and subtle embossed collector details—while ensuring the figure and car remain entirely enclosed by the plastic and no extra text is added.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image-generation/editing task to turn the uploaded person into a stylized, vinyl-like Hot Wheels toy figure and place them fully inside a realistic clear blister bubble on a classic bright blue Hot Wheels card, alongside a chosen Hot Wheels vehicle in the same blister. The result is a convincing collectible blister-pack mockup with accurate packaging aesthetics—logo, gradient background, metallic flame accents, reflections, glare, and subtle embossed collector details—while ensuring the figure and car remain entirely enclosed by the plastic and no extra text is added.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Vehicle` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | your image | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `Vehicle`
- Required images:
  - **Exactly 1** images: image 1 (your image). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (your image)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `hot-wheels-blister-pack`).

Command form:

```bash
betterprompt generate hot-wheels-blister-pack \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":2},"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate hot-wheels-blister-pack \
  --input Vehicle=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
