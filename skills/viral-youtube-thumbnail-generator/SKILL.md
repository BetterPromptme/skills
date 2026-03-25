---
name: viral-youtube-thumbnail-generator
description: This prompt instructs an image-generation system to design a viral-style YouTube thumbnail in a 16:9 format using provided video-specific inputs (title, concept, character details, text, font, background, and lighting). The task is to create a scroll-stopping composition with the main character centered and highly expressive, bold readable text that doesn’t cover the face, dramatic high-contrast color and lighting, and a simplified background with optional cinematic effects. The outcome is a clickable, mobile-legible thumbnail optimized for strong emotional storytelling and clear visual hierarchy.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image-generation system to design a viral-style YouTube thumbnail in a 16:9 format using provided video-specific inputs (title, concept, character details, text, font, background, and lighting). The task is to create a scroll-stopping composition with the main character centered and highly expressive, bold readable text that doesn’t cover the face, dramatic high-contrast color and lighting, and a simplified background with optional cinematic effects. The outcome is a clickable, mobile-legible thumbnail optimized for strong emotional storytelling and clear visual hierarchy.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Gender` | Required |  | (none) |
| `Font_Style` | Required |  | (none) |
| `Video_Title` | Required |  | (none) |
| `Style_Direction` | Required |  | (none) |
| `Text_to_Display` | Required |  | (none) |
| `Emotion_and_Pose` | Required |  | (none) |
| `Thumbnail_Concept` | Required |  | (none) |
| `Background_Description` | Required |  | (none) |
| `Lighting_and_Color_Scheme` | Required |  | (none) |



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
    - `Gender`
  - `Font_Style`
  - `Video_Title`
  - `Style_Direction`
  - `Text_to_Display`
  - `Emotion_and_Pose`
  - `Thumbnail_Concept`
  - `Background_Description`
  - `Lighting_and_Color_Scheme`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `viral-youtube-thumbnail-generator`).

Command form:

```bash
betterprompt generate viral-youtube-thumbnail-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate viral-youtube-thumbnail-generator \
  --input Gender=<value> \
  --input Font_Style=<value> \
  --input Video_Title=<value> \
  --input Style_Direction=<value> \
  --input Text_to_Display=<value> \
  --input Emotion_and_Pose=<value> \
  --input Thumbnail_Concept=<value> \
  --input Background_Description=<value> \
  --input Lighting_and_Color_Scheme=<value> \
  --model gpt-image-1 \
  --options '{"quality":"high"}'
```