---
name: realistic-4-frame-photobooth-print-strip
description: This prompt instructs the AI to act as a professional photobooth-strip photographer and produce a realistic, print-style vertical strip featuring a specified person or character in four evenly spaced frames, each with a distinct playful pose or expression, all shot with consistent lighting, composition, background, and photo style. It also directs the AI to apply client-chosen border colors and frame elements, add authentic photobooth print cues (clean margins, glossy texture, and natural shadows), and maintain a client-facing workflow mindset—preserving skin tones, respecting consent and copyrights, and prompting for missing event specs or approvals to ensure a cohesive, shareable, print/web-ready final strip.
skillVersionId: 01991419-e69d-7166-9798-50c35e5bc5a6
---

## What it does

This prompt instructs the AI to act as a professional photobooth-strip photographer and produce a realistic, print-style vertical strip featuring a specified person or character in four evenly spaced frames, each with a distinct playful pose or expression, all shot with consistent lighting, composition, background, and photo style. It also directs the AI to apply client-chosen border colors and frame elements, add authentic photobooth print cues (clean margins, glossy texture, and natural shadows), and maintain a client-facing workflow mindset—preserving skin tones, respecting consent and copyrights, and prompting for missing event specs or approvals to ensure a cohesive, shareable, print/web-ready final strip.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `frame_color` | Required |  | (none) |
| `photo_style` | Required |  | (none) |
| `frame_elements` | Required |  | (none) |
| `background_style` | Required |  | (none) |
| `person_or_character` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 4 images**. You **must pass exactly 4 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload reference photo for frame 1 of the strip | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | Upload reference photo for frame 2 of the strip | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 3 | Yes | Upload reference photo for frame 3 of the strip | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 4 | Yes | Upload reference photo for frame 4 of the strip | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `frame_color`
  - `photo_style`
  - `frame_elements`
  - `background_style`
  - `person_or_character`
- Required images:
  - **Exactly 4** images: image 1 (Upload reference photo for frame 1 of the strip), image 2 (Upload reference photo for frame 2 of the strip), image 3 (Upload reference photo for frame 3 of the strip), and image 4 (Upload reference photo for frame 4 of the strip). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload reference photo for frame 1 of the strip), image 2 (Upload reference photo for frame 2 of the strip), image 3 (Upload reference photo for frame 3 of the strip), and image 4 (Upload reference photo for frame 4 of the strip)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01991419-e69d-7166-9798-50c35e5bc5a6`).

Command form:

```bash
betterprompt generate 01991419-e69d-7166-9798-50c35e5bc5a6 \
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
betterprompt generate 01991419-e69d-7166-9798-50c35e5bc5a6 \
  --input frame_color=<value> \
  --input photo_style=<value> \
  --input frame_elements=<value> \
  --input background_style=<value> \
  --input person_or_character=<value> \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --image-input-url https://example.com/image3.png \
  --image-input-path /path/to/image4.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
