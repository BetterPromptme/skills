---
name: product-packaging-design
description: This prompt instructs an AI to create a photorealistic, retail-ready packaging mockup by placing an uploaded product image into an appropriate package design defined by user-supplied style, colors, material, quantity, and a clear main title. It specifies studio lighting, a pure white background, high resolution, legible minimal text, and generic branding unless assets are provided, while avoiding unrelated elements or prohibited content. The outcome is a clean, high-fidelity e-commerce–style packaging visualization suitable for online listings, marketing presentations, and rapid design iteration.
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

This prompt instructs an AI to create a photorealistic, retail-ready packaging mockup by placing an uploaded product image into an appropriate package design defined by user-supplied style, colors, material, quantity, and a clear main title. It specifies studio lighting, a pure white background, high resolution, legible minimal text, and generic branding unless assets are provided, while avoiding unrelated elements or prohibited content. The outcome is a clean, high-fidelity e-commerce–style packaging visualization suitable for online listings, marketing presentations, and rapid design iteration.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `style` | Optional | describe design style | `minimalist, luxury, playful, futuristic` |
| `material` | Optional | material of packaging | ` cardboard, plastic, kraft paper, glass` |
| `main_title` | Required | primary title text to appear on packaging | (none) |
| `color_palette` | Required | list of key packaging colors | (none) |
| `pack_quantity` | Optional | number of products per package | `1,2,3...` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo of product | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `main_title`
  - `color_palette`
- Optional text inputs (use defaults if not provided by the human):
    - `style` (default: `minimalist, luxury, playful, futuristic`)
  - `material` (default: ` cardboard, plastic, kraft paper, glass`)
  - `pack_quantity` (default: `1,2,3...`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your photo of product). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo of product)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `product-packaging-design`).

Command form:

```bash
betterprompt generate product-packaging-design \
  [--input <key>=<value>] \
  [--image-input-url <url>] \
  [--image-input-path <path>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- Pass each image using `--image-input-url` or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate product-packaging-design \
  --input 'style=minimalist, luxury, playful, futuristic' \
  --input 'material= cardboard, plastic, kraft paper, glass' \
  --input main_title=<value> \
  --input color_palette=<value> \
  --input pack_quantity=1,2,3... \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```