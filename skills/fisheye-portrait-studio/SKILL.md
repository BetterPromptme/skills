---
name: fisheye-portrait-studio
description: This prompt instructs an AI to take a user-provided portrait photo and generate a realistic, playful high-angle fisheye-style close-up that preserves the person’s true identity while applying an exaggerated big-head/small-body perspective. It uses two text inputs—outfit description and facial expression—to guide the subject’s styling and mood, and it requires the final image to match a specified reference look in camera angle, bright white background, soft even lighting, and sharp eye focus. The intended outcome is a single-person, professional-quality, modern fisheye portrait with consistent tone and no added elements, text, props, or stylizations outside the defined photographic style.
skillVersionId: 019a57e9-fd3d-741a-8e0a-f7d861864549
---

## What it does

This prompt instructs an AI to take a user-provided portrait photo and generate a realistic, playful high-angle fisheye-style close-up that preserves the person’s true identity while applying an exaggerated big-head/small-body perspective. It uses two text inputs—outfit description and facial expression—to guide the subject’s styling and mood, and it requires the final image to match a specified reference look in camera angle, bright white background, soft even lighting, and sharp eye focus. The intended outcome is a single-person, professional-quality, modern fisheye portrait with consistent tone and no added elements, text, props, or stylizations outside the defined photographic style.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `facial_expression` | Optional | short text input describing the desired emotion or expression | `smiling, surprised, funny face, curious, pouting,...` |
| `outfit_description` | Optional | short text input describing what the subject is wearing | `bright yellow hoodie` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo to generate | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `facial_expression` (default: `smiling, surprised, funny face, curious, pouting,...`)
  - `outfit_description` (default: `bright yellow hoodie`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your photo to generate). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo to generate)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a57e9-fd3d-741a-8e0a-f7d861864549`).

Command form:

```bash
betterprompt generate 019a57e9-fd3d-741a-8e0a-f7d861864549 \
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
betterprompt generate 019a57e9-fd3d-741a-8e0a-f7d861864549 \
  --input 'facial_expression=smiling, surprised, funny face, curious, pouting,...' \
  --input 'outfit_description=bright yellow hoodie' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
