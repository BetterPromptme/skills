---
name: i-will-change-the-background-behind-an-object-use-now
description: This prompt instructs the AI to extract a specified foreground object from a first image without altering it, then replace that image’s background with the background from a second image, compositing the object so it blends realistically. The outcome is a seamless, undetectable composite that preserves fine edge detail (including hair or transparency), maintains original shadows/reflections and perspective, matches lighting/color temperature/grain/depth of field to the new scene, and provides non-destructive layered deliverables plus export-ready versions.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to extract a specified foreground object from a first image without altering it, then replace that image’s background with the background from a second image, compositing the object so it blends realistically. The outcome is a seamless, undetectable composite that preserves fine edge detail (including hair or transparency), maintains original shadows/reflections and perspective, matches lighting/color temperature/grain/depth of field to the new scene, and provides non-destructive layered deliverables plus export-ready versions.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `object` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | The original image | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | The background | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `object`
- Required images:
  - **Exactly 2** images: image 1 (The original image) and image 2 (The background). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (The original image) and image 2 (The background)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `i-will-change-the-background-behind-an-object-use-now`).

Command form:

```bash
betterprompt generate i-will-change-the-background-behind-an-object-use-now \
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
betterprompt generate i-will-change-the-background-behind-an-object-use-now \
  --input object=<value> \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
