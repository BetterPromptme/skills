---
name: reality-reminder-portrait
description: This prompt instructs the AI to generate a single new urban, wide‑angle street-style image that preserves the exact identity and outfit of the provided person photo while using a separate reference image only to guide composition, pose, camera angle, typography placement, and overall aesthetic. The result is a gritty, candid full-body scene with oversized background text (exactly Text_input_2) positioned behind and partially occluded by the subject, plus an iOS-style “Reminder” alert box containing Text_input_1 that appears physically held in the subject’s extended hand with correct perspective, occlusion, and lighting, and a small bottom-center credit reading Text_input_3—all without copying the reference’s specific person, location, or wording.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate a single new urban, wide‑angle street-style image that preserves the exact identity and outfit of the provided person photo while using a separate reference image only to guide composition, pose, camera angle, typography placement, and overall aesthetic. The result is a gritty, candid full-body scene with oversized background text (exactly Text_input_2) positioned behind and partially occluded by the subject, plus an iOS-style “Reminder” alert box containing Text_input_1 that appears physically held in the subject’s extended hand with correct perspective, occlusion, and lighting, and a small bottom-center credit reading Text_input_3—all without copying the reference’s specific person, location, or wording.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Text_input_1` | Optional | The quote text that appears inside the reminder box. | `Fill in a few blanks and get instant AI results from expert-built templates. No more prompt tinkering.` |
| `Text_input_2` | Optional | The background text placed behind the subject. | `Prompts that work like apps` |
| `Text_input_3` | Optional | The credit name at the bottom. | `BetterPrompt` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo (portrait photo recommended) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `Text_input_1` (default: `Fill in a few blanks and get instant AI results from expert-built templates. No more prompt tinkering.`)
  - `Text_input_2` (default: `Prompts that work like apps`)
  - `Text_input_3` (default: `BetterPrompt`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your photo (portrait photo recommended)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo (portrait photo recommended))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `reality-reminder-portrait`).

Command form:

```bash
betterprompt generate reality-reminder-portrait \
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
betterprompt generate reality-reminder-portrait \
  --input 'Text_input_1=Fill in a few blanks and get instant AI results from expert-built templates. No more prompt tinkering.' \
  --input 'Text_input_2=Prompts that work like apps' \
  --input Text_input_3=BetterPrompt \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```
