---
name: rustic-field-portrait-absolute-face-lock
description: This prompt instructs an image generator to produce a hyper‑realistic, full‑body outdoor cinematic portrait that strictly preserves the subject’s identity from a provided reference image, including exact facial geometry and the original gender. It defines a specific autumn/winter countryside setting, wardrobe, pose, camera/lens parameters, lighting, composition, and a muted brown film-grade look, while forbidding added marks, accessories, or logos and requiring a clearer reference if key facial details aren’t visible. The intended outcome is a single high-resolution PNG portrait with the subject placed far in a vast landscape, sharply focused against a softly rendered background, using identity-locking guidance to prevent any face changes.
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

This prompt instructs an image generator to produce a hyper‑realistic, full‑body outdoor cinematic portrait that strictly preserves the subject’s identity from a provided reference image, including exact facial geometry and the original gender. It defines a specific autumn/winter countryside setting, wardrobe, pose, camera/lens parameters, lighting, composition, and a muted brown film-grade look, while forbidding added marks, accessories, or logos and requiring a clearer reference if key facial details aren’t visible. The intended outcome is a single high-resolution PNG portrait with the subject placed far in a vast landscape, sharply focused against a softly rendered background, using identity-locking guidance to prevent any face changes.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | A portrail photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 1** images: image 1 (A portrail photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (A portrail photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `rustic-field-portrait-absolute-face-lock`).

Command form:

```bash
betterprompt generate rustic-field-portrait-absolute-face-lock \
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
betterprompt generate rustic-field-portrait-absolute-face-lock \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```