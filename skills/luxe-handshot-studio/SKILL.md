---
name: luxe-handshot-studio
description: This prompt instructs an image-generation workflow to produce a hyper-realistic, ultra-high-resolution studio photograph of a single luxury product held in a woman’s hand, using controlled professional lighting and a clean, specified background color. It guides composition, camera/look fidelity, and texture-rendering priorities while enforcing constraints such as minimal props, realistic proportions, non-branded presentation, and tasteful, non-suggestive imagery. The outcome is a polished, advertising-ready product shot tailored to designers and marketers, with adjustable product type, lighting intensity, and backdrop tone.
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

This prompt instructs an image-generation workflow to produce a hyper-realistic, ultra-high-resolution studio photograph of a single luxury product held in a woman’s hand, using controlled professional lighting and a clean, specified background color. It guides composition, camera/look fidelity, and texture-rendering priorities while enforcing constraints such as minimal props, realistic proportions, non-branded presentation, and tasteful, non-suggestive imagery. The outcome is a polished, advertising-ready product shot tailored to designers and marketers, with adjustable product type, lighting intensity, and backdrop tone.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `product` | Optional | The featured item | `perfume bottle, watch, lipstick` |
| `lighting_style` | Optional | Choose between soft, medium, or crisp lighting. | `soft natural glow, medium studio light, crisp high-contrast lighting, side lighting,...` |
| `background_color` | Optional | specify studio background tone | `white, beige, charcoal,...` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload the product photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `product` (default: `perfume bottle, watch, lipstick`)
  - `lighting_style` (default: `soft natural glow, medium studio light, crisp high-contrast lighting, side lighting,...`)
  - `background_color` (default: `white, beige, charcoal,...`)
- Required images:
  - **Exactly 1** images: image 1 (Upload the product photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload the product photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `luxe-handshot-studio`).

Command form:

```bash
betterprompt generate luxe-handshot-studio \
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
betterprompt generate luxe-handshot-studio \
  --input 'product=perfume bottle, watch, lipstick' \
  --input 'lighting_style=soft natural glow, medium studio light, crisp high-contrast lighting, side lighting,...' \
  --input 'background_color=white, beige, charcoal,...' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```