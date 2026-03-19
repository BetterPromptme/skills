---
name: car-window-night
description: This prompt instructs an image-generation AI to produce a photorealistic, cinematic portrait of a person leaning back out of a moving car window at night, emphasizing wind, subtle motion blur, shallow depth of field, and nostalgic mood. Using variable inputs for subject type, age, clothing, hair, and ambient lighting, it guides composition, color palette, texture, and camera settings to yield a dark, dreamy scene with softly blurred city or road lights and an emotional tone of quiet freedom mixed with solitude.
skillVersionId: 019a06bc-68f9-7ca5-8dcc-40a8406f26f2
---

## What it does

This prompt instructs an image-generation AI to produce a photorealistic, cinematic portrait of a person leaning back out of a moving car window at night, emphasizing wind, subtle motion blur, shallow depth of field, and nostalgic mood. Using variable inputs for subject type, age, clothing, hair, and ambient lighting, it guides composition, color palette, texture, and camera settings to yield a dark, dreamy scene with softly blurred city or road lights and an emotional tone of quiet freedom mixed with solitude.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Gender` | Required | Place your gender here | (none) |
| `Clothing` | Optional | Describe your desirable type of clothing | `off-shoulder white knitted top, long sleeve turtleneck knitted top,` |
| `Age_range` | Required |  | (none) |
| `Hairstyle` | Optional | Place your desirable hairstyle | `Long wavy hair, bob, ...` |
| `Lightning_source` | Optional |  | `Ambient light source or color tone (e.g., neon reflections, car interior glow).` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Add your own photo here | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `Gender`
  - `Age_range`
- Optional text inputs (use defaults if not provided by the human):
    - `Clothing` (default: `off-shoulder white knitted top, long sleeve turtleneck knitted top,`)
  - `Hairstyle` (default: `Long wavy hair, bob, ...`)
  - `Lightning_source` (default: `Ambient light source or color tone (e.g., neon reflections, car interior glow).`)
- Required images:
  - **Exactly 1** images: image 1 (Add your own photo here). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Add your own photo here)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a06bc-68f9-7ca5-8dcc-40a8406f26f2`).

Command form:

```bash
betterprompt generate 019a06bc-68f9-7ca5-8dcc-40a8406f26f2 \
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
betterprompt generate 019a06bc-68f9-7ca5-8dcc-40a8406f26f2 \
  --input Gender=<value> \
  --input 'Clothing=off-shoulder white knitted top, long sleeve turtleneck knitted top,' \
  --input Age_range=<value> \
  --input 'Hairstyle=Long wavy hair, bob, ...' \
  --input 'Lightning_source=Ambient light source or color tone (e.g., neon reflections, car interior glow).' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
