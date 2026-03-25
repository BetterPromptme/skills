---
name: academic-student-portrait-poster
description: This prompt instructs an AI image editor to take an uploaded student portrait and recreate it as a classic, formal academic studio headshot while preserving the subject’s identity and natural features. It specifies a controlled yearbook-style setup—centered head-and-shoulders framing, neutral expression, soft even lighting, and a muted blue gradient backdrop—along with realistic formal attire (black suit, white shirt, black tie). The output is a single high-resolution, realistic “portrait poster” that includes a clean white margin beneath the photo with centered black serif typography displaying the student’s name in uppercase and a short quote below, with strict constraints against stylization, heavy retouching, casual elements, or distracting backgrounds.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image editor to take an uploaded student portrait and recreate it as a classic, formal academic studio headshot while preserving the subject’s identity and natural features. It specifies a controlled yearbook-style setup—centered head-and-shoulders framing, neutral expression, soft even lighting, and a muted blue gradient backdrop—along with realistic formal attire (black suit, white shirt, black tie). The output is a single high-resolution, realistic “portrait poster” that includes a clean white margin beneath the photo with centered black serif typography displaying the student’s name in uppercase and a short quote below, with strict constraints against stylization, heavy retouching, casual elements, or distracting backgrounds.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `student_name` | Required | The full name of the student to be displayed under the portrait. | (none) |
| `student_quote` | Required | A short quote or sentence to be displayed under the student name. | (none) |



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


- Required text inputs:
    - `student_name`
  - `student_quote`
- Required images:
  - **Exactly 1** images: image 1 (Upload your portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `academic-student-portrait-poster`).

Command form:

```bash
betterprompt generate academic-student-portrait-poster \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate academic-student-portrait-poster \
  --input student_name=<value> \
  --input student_quote=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```