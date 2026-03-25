---
name: billie-eilish-subaquatic-album-cover
description: This prompt directs the creation of a square, ultra‑high‑resolution, photorealistic underwater album cover by transforming a provided portrait into a cinematic scene where the same recognizable subject—kept fully identity-accurate—floats horizontally in loose dark streetwear beneath a pale wooden door near the water’s surface. It specifies precise pose, framing, lens and exposure characteristics, and a clean cobalt-to-navy environment with volumetric sunlight, subtle bubbles, and dreamy door reflections, while enforcing strict realism constraints to avoid cutout edges, graphic artifacts, or extraneous elements, resulting in a moody, editorial, Billie Eilish–inspired cover image ready for release use.
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

This prompt directs the creation of a square, ultra‑high‑resolution, photorealistic underwater album cover by transforming a provided portrait into a cinematic scene where the same recognizable subject—kept fully identity-accurate—floats horizontally in loose dark streetwear beneath a pale wooden door near the water’s surface. It specifies precise pose, framing, lens and exposure characteristics, and a clean cobalt-to-navy environment with volumetric sunlight, subtle bubbles, and dreamy door reflections, while enforcing strict realism constraints to avoid cutout edges, graphic artifacts, or extraneous elements, resulting in a moody, editorial, Billie Eilish–inspired cover image ready for release use.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `pose` | Optional | Define how the subject’s body should be positioned in the underwater scene  | `horizontal floating with arms relaxed, head tilted upward, knees slightly bent` |
| `wardrobe` | Optional | Specify how the subject’s clothing should be transformed to match the Billie Eilish vibe | ` loose, oversized, dark-colored outfit` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload a clear portrait photo of you (frontal or three-quarter view) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `pose` (default: `horizontal floating with arms relaxed, head tilted upward, knees slightly bent`)
  - `wardrobe` (default: ` loose, oversized, dark-colored outfit`)
- Required images:
  - **Exactly 1** images: image 1 (Upload a clear portrait photo of you (frontal or three-quarter view)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload a clear portrait photo of you (frontal or three-quarter view))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `billie-eilish-subaquatic-album-cover`).

Command form:

```bash
betterprompt generate billie-eilish-subaquatic-album-cover \
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
betterprompt generate billie-eilish-subaquatic-album-cover \
  --input 'pose=horizontal floating with arms relaxed, head tilted upward, knees slightly bent' \
  --input 'wardrobe= loose, oversized, dark-colored outfit' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```