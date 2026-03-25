---
name: 3d-kawaii-chibi-sticker-set-for-social-media
description: This prompt instructs an image generator to create a 10:15 vertical 3D kawaii scene featuring nine chibi sticker characters inspired by the provided reference image, each with a white sticker border and a speech bubble containing short everyday phrases. The final result is a cohesive, fun, positive sticker-sheet style composition placed on a soft white-to-pastel blue gradient background, optimized for sharing on specified social media platforms.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image generator to create a 10:15 vertical 3D kawaii scene featuring nine chibi sticker characters inspired by the provided reference image, each with a white sticker border and a speech bubble containing short everyday phrases. The final result is a cohesive, fun, positive sticker-sheet style composition placed on a soft white-to-pastel blue gradient background, optimized for sharing on specified social media platforms.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Short_dialogues` | Required |  | (none) |
| `Names_of_social_networks` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes |  | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `Short_dialogues`
  - `Names_of_social_networks`
- Required images:
  - **Exactly 1** images: image 1 (image 1). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `3d-kawaii-chibi-sticker-set-for-social-media`).

Command form:

```bash
betterprompt generate 3d-kawaii-chibi-sticker-set-for-social-media \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 3d-kawaii-chibi-sticker-set-for-social-media \
  --input Short_dialogues=<value> \
  --input Names_of_social_networks=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"low"}'
```