---
name: phone-screen-miniature-human-effect
description: This prompt instructs an AI image generator to composite a hyper-realistic forced-perspective photograph in which a real, full-body person appears miniaturized and physically standing on top of an iPhone’s glass screen while the phone is naturally held in a hand and a believable camera app interface remains visible beneath them. It specifies strict realism requirements—matching perspective, lighting, contact shadows, slight screen reflections, and partial UI occlusion by the person’s feet—while prohibiting any interpretation where the person is inside the screen, part of the display content, framed by the UI, floating, or rendered as a toy/CGI effect. The intended outcome is a single vertical street-photography-style image that instantly reads as a practical, physical illusion with consistent scale and photographic imperfections.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to composite a hyper-realistic forced-perspective photograph in which a real, full-body person appears miniaturized and physically standing on top of an iPhone’s glass screen while the phone is naturally held in a hand and a believable camera app interface remains visible beneath them. It specifies strict realism requirements—matching perspective, lighting, contact shadows, slight screen reflections, and partial UI occlusion by the person’s feet—while prohibiting any interpretation where the person is inside the screen, part of the display content, framed by the UI, floating, or rendered as a toy/CGI effect. The intended outcome is a single vertical street-photography-style image that instantly reads as a practical, physical illusion with consistent scale and photographic imperfections.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your phone photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | Upload your portrait photo (outfit and pose will be kept exactly in the output) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
  - **Exactly 2** images: image 1 (Upload your phone photo) and image 2 (Upload your portrait photo (outfit and pose will be kept exactly in the output)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your phone photo) and image 2 (Upload your portrait photo (outfit and pose will be kept exactly in the output))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `phone-screen-miniature-human-effect`).

Command form:

```bash
betterprompt generate phone-screen-miniature-human-effect \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate phone-screen-miniature-human-effect \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```