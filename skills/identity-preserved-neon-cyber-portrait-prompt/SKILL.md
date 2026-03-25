---
name: identity-preserved-neon-cyber-portrait-prompt
description: This prompt instructs the model to generate a highly realistic, identity-preserving vertical cinematic portrait of the provided subject, keeping facial proportions, age, skin tone, ethnicity, and any hair or head covering exactly unchanged while avoiding beautification or retouching. It places the subject in a neon-lit, rainy cyber street scene inspired by a specified city, with abstract non-readable signage, wet reflections, fog, and shallow depth of field, using clean front fill light and subtle cyan–magenta rim lighting to maintain natural, accurate skin color. The result is a 1080×1920 Instagram-ready cyber aesthetic portrait where the environment and lighting are stylized but the subject’s identity remains strictly consistent with the reference image.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs the model to generate a highly realistic, identity-preserving vertical cinematic portrait of the provided subject, keeping facial proportions, age, skin tone, ethnicity, and any hair or head covering exactly unchanged while avoiding beautification or retouching. It places the subject in a neon-lit, rainy cyber street scene inspired by a specified city, with abstract non-readable signage, wet reflections, fog, and shallow depth of field, using clean front fill light and subtle cyan–magenta rim lighting to maintain natural, accurate skin color. The result is a 1080×1920 Instagram-ready cyber aesthetic portrait where the environment and lighting are stylized but the subject’s identity remains strictly consistent with the reference image.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CITY` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Your image reference | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `CITY`
- Required images:
  - **Exactly 1** images: image 1 (Your image reference). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Your image reference)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `identity-preserved-neon-cyber-portrait-prompt`).

Command form:

```bash
betterprompt generate identity-preserved-neon-cyber-portrait-prompt \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate identity-preserved-neon-cyber-portrait-prompt \
  --input CITY=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"1K"}'
```