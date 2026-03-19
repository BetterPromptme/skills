---
name: taylor-swift-the-life-of-a-showgirl-poster-transformation
description: This prompt instructs the AI to create a photorealistic, cinematic luxury album-style poster that closely matches a specific “The Life of a Showgirl” reference in composition, pose, water-bath environment, lighting, color grade, jeweled styling, and glittery serif typography layout, while replacing the original subject with the user by preserving the user’s facial identity and expression and adapting the outfit concept appropriately for gender; the result is a high-end editorial poster featuring the user in the same framed, underwater-glow aesthetic with identical text placement and overall mood.
skillVersionId: 019a4874-b216-7324-a171-d67f002206dd
---

## What it does

This prompt instructs the AI to create a photorealistic, cinematic luxury album-style poster that closely matches a specific “The Life of a Showgirl” reference in composition, pose, water-bath environment, lighting, color grade, jeweled styling, and glittery serif typography layout, while replacing the original subject with the user by preserving the user’s facial identity and expression and adapting the outfit concept appropriately for gender; the result is a high-end editorial poster featuring the user in the same framed, underwater-glow aesthetic with identical text placement and overall mood.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your normal portrait photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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

- Required images:
  - **Exactly 1** images: image 1 (Upload your normal portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your normal portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a4874-b216-7324-a171-d67f002206dd`).

Command form:

```bash
betterprompt generate 019a4874-b216-7324-a171-d67f002206dd \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a4874-b216-7324-a171-d67f002206dd \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
