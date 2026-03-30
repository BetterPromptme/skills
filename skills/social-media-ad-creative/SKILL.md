---
name: social-media-ad-creative
description: This prompt instructs an image-generation system to create a photorealistic, scroll-stopping social media ad image that showcases a specified product in a clean, professional composition tailored to a chosen platform’s ideal aspect ratio and engagement style. It applies detailed art-direction rules for lighting, realism, composition, and a selected visual aesthetic (e.g., minimal, bold, lifestyle, gradient), while explicitly requiring a purely visual result with no text, logos, or watermarks. The outcome is a high-quality, platform-optimized product hero creative that looks like a professional photoshoot and is designed to maximize attention and engagement in-feed.
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

This prompt instructs an image-generation system to create a photorealistic, scroll-stopping social media ad image that showcases a specified product in a clean, professional composition tailored to a chosen platform’s ideal aspect ratio and engagement style. It applies detailed art-direction rules for lighting, realism, composition, and a selected visual aesthetic (e.g., minimal, bold, lifestyle, gradient), while explicitly requiring a purely visual result with no text, logos, or watermarks. The outcome is a high-quality, platform-optimized product hero creative that looks like a professional photoshoot and is designed to maximize attention and engagement in-feed.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `style` | Required | The overall visual aesthetic of the ad creative. Allowed options: bold, minimal, gradient, lifestyle | (none) |
| `product` | Optional | Describe the product to be featured in the ad. | `A bottle of luxury skincare serum with gold flakes` |
| `platform` | Required | The social media platform the ad is for. Allowed options: twitter, facebook, linkedin, instagram | (none) |



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
    - `style`
  - `platform`
- Optional text inputs (use defaults if not provided by the human):
    - `product` (default: `A bottle of luxury skincare serum with gold flakes`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `social-media-ad-creative`).

Command form:

```bash
betterprompt generate social-media-ad-creative \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate social-media-ad-creative \
  --input style=bold \
  --input 'product=A bottle of luxury skincare serum with gold flakes' \
  --input platform=twitter \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```