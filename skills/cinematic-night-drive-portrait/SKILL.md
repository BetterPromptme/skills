---
name: cinematic-night-drive-portrait
description: This prompt instructs an AI image model to take a user-provided portrait and restyle it into a safe-for-work, nostalgic late-night cinematic scene where the same person leans out of a moving car window, with wind-swept hair, ambient city glow, motion-blurred streetlights and traffic streaks, and a subtle film-grain finish. It emphasizes single-pass execution, strong identity preservation (no changes to age, facial structure, skin tone, or defining traits), natural adaptation of clothing and styling based on the subject, and prohibits unsafe content, watermarks, and overly smoothing retouching, resulting in a dreamy, film-like night-drive portrait.
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

This prompt instructs an AI image model to take a user-provided portrait and restyle it into a safe-for-work, nostalgic late-night cinematic scene where the same person leans out of a moving car window, with wind-swept hair, ambient city glow, motion-blurred streetlights and traffic streaks, and a subtle film-grain finish. It emphasizes single-pass execution, strong identity preservation (no changes to age, facial structure, skin tone, or defining traits), natural adaptation of clothing and styling based on the subject, and prohibits unsafe content, watermarks, and overly smoothing retouching, resulting in a dreamy, film-like night-drive portrait.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `mood` | Optional | Sets the emotional tone and cinematic atmosphere of the image. Guides the expression, color grading, and overall aesthetic.  | `nostalgic, cinematic, late-night drive ` |
| `grain` | Optional | Adds film-style texture to the photo for a cinematic, nostalgic finish. Adjust intensity based on the desired level of realism. | `subtle film grain overlay  ` |
| `Clothing_style` | Optional | Defines the outfit style of the subject. Clothing should match the late-night, cinematic vibe while adapting naturally to the subject’s gender, body type, and context. | `casual, white knit sweater  ` |
| `motion_effects` | Optional | Visual effects that suggest movement and speed, applied to hair, fabric, or background elements to emphasize the late-night drive feeling. | `blurred city lights streaking in the background` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | upload your portrait photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `mood` (default: `nostalgic, cinematic, late-night drive `)
  - `grain` (default: `subtle film grain overlay  `)
  - `Clothing_style` (default: `casual, white knit sweater  `)
  - `motion_effects` (default: `blurred city lights streaking in the background`)
- Required images:
  - **Exactly 1** images: image 1 (upload your portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (upload your portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cinematic-night-drive-portrait`).

Command form:

```bash
betterprompt generate cinematic-night-drive-portrait \
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
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate cinematic-night-drive-portrait \
  --input 'mood=nostalgic, cinematic, late-night drive ' \
  --input 'grain=subtle film grain overlay  ' \
  --input 'Clothing_style=casual, white knit sweater  ' \
  --input 'motion_effects=blurred city lights streaking in the background' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```