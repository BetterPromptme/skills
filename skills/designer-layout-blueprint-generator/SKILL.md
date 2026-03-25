---
name: designer-layout-blueprint-generator
description: This prompt instructs an AI, acting as a professional layout designer, to take supplied campaign inputs (message, audience, format size, and visual tone) and produce a dimensionally accurate blueprint-style mockup image for the specified surface, showing placeholder regions for key elements (headline, supporting text, imagery, logo/CTA) along with measured margins, spacing, safe zones, and alignment grids; the outcome is a ready-to-follow annotated layout image plus a brief rationale explaining why the arrangement suits the intended audience and format.
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

This prompt instructs an AI, acting as a professional layout designer, to take supplied campaign inputs (message, audience, format size, and visual tone) and produce a dimensionally accurate blueprint-style mockup image for the specified surface, showing placeholder regions for key elements (headline, supporting text, imagery, logo/CTA) along with measured margins, spacing, safe zones, and alignment grids; the outcome is a ready-to-follow annotated layout image plus a brief rationale explaining why the arrangement suits the intended audience and format.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `format_size` | Optional | The format and surface where the design will appear, with exact size if possible. | `A3 vertical poster 297x420mm` |
| `key_message` | Optional | The main slogan or call-to-action you want to highlight in the design | `Stay energized, stay natural` |
| `visual_tone` | Optional | The mood or style that best represents the brand in this design. | `playful and colorful` |
| `target_audience` | Optional | The group of people this design is meant to reach. | `Eco-conscious young adults` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload a clear image of the product that will appear in the poster (main subject of the design) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `format_size` (default: `A3 vertical poster 297x420mm`)
  - `key_message` (default: `Stay energized, stay natural`)
  - `visual_tone` (default: `playful and colorful`)
  - `target_audience` (default: `Eco-conscious young adults`)
- Required images:
  - **Exactly 1** images: image 1 (Upload a clear image of the product that will appear in the poster (main subject of the design)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload a clear image of the product that will appear in the poster (main subject of the design))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `designer-layout-blueprint-generator`).

Command form:

```bash
betterprompt generate designer-layout-blueprint-generator \
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
betterprompt generate designer-layout-blueprint-generator \
  --input 'format_size=A3 vertical poster 297x420mm' \
  --input 'key_message=Stay energized, stay natural' \
  --input 'visual_tone=playful and colorful' \
  --input 'target_audience=Eco-conscious young adults' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```