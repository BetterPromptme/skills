---
name: fisheye-style-generation
description: This prompt instructs the AI to take an uploaded reference photo and re-render it as a realistic fisheye-lens image, using a specified distortion strength, scene context, color grading, and described background. The task focuses on producing a circular, ultra-wide camera look with smooth edge curvature while keeping people recognizable and maintaining the original lighting and overall tone, resulting in a fun, photobooth-style wide-angle photo rather than a collage-like edit.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to take an uploaded reference photo and re-render it as a realistic fisheye-lens image, using a specified distortion strength, scene context, color grading, and described background. The task focuses on producing a circular, ultra-wide camera look with smooth edge curvature while keeping people recognizable and maintaining the original lighting and overall tone, resulting in a fun, photobooth-style wide-angle photo rather than a collage-like edit.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `backdrop` | Optional | Defines what appears behind the subjects inside the fisheye lens frame — important for realism and vibe | `curtain backdrop like a photo booth` |
| `color_tone` | Optional | Adjusts the mood and post-processing style of the photo. | ``natural` → realistic, true-to-life colors` |
| `scene_type` | Optional | Helps the model keep lighting realistic to the environment. | ``indoor` → bedroom, studio, party room` |
| `distortion_intensity` | Optional | Controls how much fisheye effect is applied. | ``low` → subtle curve, almost wide-angle look` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | upload your photo | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `backdrop` (default: `curtain backdrop like a photo booth`)
  - `color_tone` (default: ``natural` → realistic, true-to-life colors`)
  - `scene_type` (default: ``indoor` → bedroom, studio, party room`)
  - `distortion_intensity` (default: ``low` → subtle curve, almost wide-angle look`)
- Required images:
  - **Exactly 1** images: image 1 (upload your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (upload your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `fisheye-style-generation`).

Command form:

```bash
betterprompt generate fisheye-style-generation \
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
betterprompt generate fisheye-style-generation \
  --input 'backdrop=curtain backdrop like a photo booth' \
  --input 'color_tone=`natural` → realistic, true-to-life colors' \
  --input 'scene_type=`indoor` → bedroom, studio, party room' \
  --input 'distortion_intensity=`low` → subtle curve, almost wide-angle look' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```