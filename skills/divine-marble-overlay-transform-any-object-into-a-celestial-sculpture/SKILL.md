---
name: divine-marble-overlay-transform-any-object-into-a-celestial-sculpture
description: This prompt instructs an image-editing system to retexture the attached image in a stylized 3D celestial marble aesthetic while preserving the original object’s silhouette and geometry. It specifies high-fidelity detail retention for sculptural folds and depth, applies polished cosmic stone materials with sparkles, iridescent edge glints, and chiseled grooves, and sets high-intensity studio spotlight lighting with soft shadows and glowing reflective highlights. The output is a clean, solid white–background image where the subject appears as luminous divine marble with subtle gold and cool-tinted accents, enhanced by glow, specular bloom, and depth boosting.
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

This prompt instructs an image-editing system to retexture the attached image in a stylized 3D celestial marble aesthetic while preserving the original object’s silhouette and geometry. It specifies high-fidelity detail retention for sculptural folds and depth, applies polished cosmic stone materials with sparkles, iridescent edge glints, and chiseled grooves, and sets high-intensity studio spotlight lighting with soft shadows and glowing reflective highlights. The output is a clean, solid white–background image where the subject appears as luminous divine marble with subtle gold and cool-tinted accents, enhanced by glow, specular bloom, and depth boosting.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | your image | `--image-input-url <url>` or `--image-input-path <path>` |


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
  - **Exactly 1** images: image 1 (your image). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"high"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (your image)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `divine-marble-overlay-transform-any-object-into-a-celestial-sculpture`).

Command form:

```bash
betterprompt generate divine-marble-overlay-transform-any-object-into-a-celestial-sculpture \
  [--image-input-url <url>] \
  [--image-input-path <path>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using `--image-input-url` or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate divine-marble-overlay-transform-any-object-into-a-celestial-sculpture \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"quality":"high"}'
```