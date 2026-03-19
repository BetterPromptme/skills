---
name: create-an-artistic-photo-for-yourself
description: This prompt instructs an image model to create a cinematic double-exposure, color film–style portrait featuring the side-profile face of a specified subject blended with a chosen city or location. The outcome is a music album–poster composition that preserves the subject’s recognizable features while integrating the location imagery into a cohesive, stylized overlay.
skillVersionId: 0196faf3-ad67-7929-8e31-41baf8c8cbe6
---

## What it does

This prompt instructs an image model to create a cinematic double-exposure, color film–style portrait featuring the side-profile face of a specified subject blended with a chosen city or location. The outcome is a music album–poster composition that preserves the subject’s recognizable features while integrating the location imagery into a cohesive, stylized overlay.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CITY_or_LOCATION` | Required |  | (none) |



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
    - `CITY_or_LOCATION`
- Required images:
  - **Exactly 1** images: image 1 (image 1). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0196faf3-ad67-7929-8e31-41baf8c8cbe6`).

Command form:

```bash
betterprompt generate 0196faf3-ad67-7929-8e31-41baf8c8cbe6 \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0196faf3-ad67-7929-8e31-41baf8c8cbe6 \
  --input CITY_or_LOCATION=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}'
```
