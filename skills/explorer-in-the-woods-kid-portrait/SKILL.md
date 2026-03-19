---
name: explorer-in-the-woods-kid-portrait
description: This prompt instructs an image-generation model to create a single photorealistic cinematic outdoor portrait of a child explorer on a hidden forest trail, using an uploaded child photo as the identity anchor to keep the face, skin tone, hairstyle, age, and proportions consistent. It specifies the exact wardrobe from a provided outfit description, adds only a simple explorer hat and small backpack, and defines a realistic woodland scene with dappled sunlight, shallow depth of field, and portrait-lens framing. The expected outcome is one clean, believable camera-like image with coherent lighting and no added text, logos, artifacts, or extra accessories.
skillVersionId: 019a0a37-4c35-729e-8e08-82cd739d9a93
---

## What it does

This prompt instructs an image-generation model to create a single photorealistic cinematic outdoor portrait of a child explorer on a hidden forest trail, using an uploaded child photo as the identity anchor to keep the face, skin tone, hairstyle, age, and proportions consistent. It specifies the exact wardrobe from a provided outfit description, adds only a simple explorer hat and small backpack, and defines a realistic woodland scene with dappled sunlight, shallow depth of field, and portrait-lens framing. The expected outcome is one clean, believable camera-like image with coherent lighting and no added text, logos, artifacts, or extra accessories.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `kids_outfit` | Optional | Describe the outfit the kid will wear. Keep it age appropriate, simple, and realistic. No brand logos. Avoid heavy accessories. | `Khaki utility shirt with rolled sleeves, tan shorts, light hiking boots, white socks` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | A single clear photo of the kid that shows the real face and hair in good light. Front facing or slight three quarter is best. No sunglasses. No heavy filters. Only one child in frame. | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `kids_outfit` (default: `Khaki utility shirt with rolled sleeves, tan shorts, light hiking boots, white socks`)
- Required images:
  - **Exactly 1** images: image 1 (A single clear photo of the kid that shows the real face and hair in good light. Front facing or slight three quarter is best. No sunglasses. No heavy filters. Only one child in frame.). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (A single clear photo of the kid that shows the real face and hair in good light. Front facing or slight three quarter is best. No sunglasses. No heavy filters. Only one child in frame.)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a0a37-4c35-729e-8e08-82cd739d9a93`).

Command form:

```bash
betterprompt generate 019a0a37-4c35-729e-8e08-82cd739d9a93 \
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
betterprompt generate 019a0a37-4c35-729e-8e08-82cd739d9a93 \
  --input 'kids_outfit=Khaki utility shirt with rolled sleeves, tan shorts, light hiking boots, white socks' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
