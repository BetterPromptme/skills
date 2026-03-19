---
name: movie-storyboard
description: This prompt instructs an AI to produce a visually cohesive, 12-frame cinematic neo-noir storyboard featuring a detective duo investigating a missing treasure in a smoky, high-contrast urban setting. It specifies consistent character faces, outfits, and atmosphere across all frames, with each image representing a distinct story beat that escalates tension through emotional highs and lows before landing on a twist and satisfying resolution. The outcome is a sequence of exactly twelve text-free, film-noir-style images in a 16:9 format that can be used by creators as a consistent visual planning tool.
skillVersionId: 019950ad-d531-7759-8e34-4016c8464737
---

## What it does

This prompt instructs an AI to produce a visually cohesive, 12-frame cinematic neo-noir storyboard featuring a detective duo investigating a missing treasure in a smoky, high-contrast urban setting. It specifies consistent character faces, outfits, and atmosphere across all frames, with each image representing a distinct story beat that escalates tension through emotional highs and lows before landing on a twist and satisfying resolution. The outcome is a sequence of exactly twelve text-free, film-noir-style images in a 16:9 format that can be used by creators as a consistent visual planning tool.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `seed` | Optional | A randomization number to ensure reproducible results (if the AI engine supports it). Using the same seed usually recreates the same composition. | `12345` |
| `story_theme` | Optional | The central plot theme or narrative arc that drives the storyboard. | `missing treasure` |
| `aspect_ratio` | Optional | The frame ratio of your storyboard images. | `16:9` |
| `lighting_style` | Optional | The overall lighting mood that defines the atmosphere. | `high-contrast, smoky atmosphere` |
| `character_roles` | Optional | The archetype or role of the characters in the story. Helps the model keep their narrative function consistent. | `detective, partner,...` |
| `location_setting` | Optional | The main environment where the story takes place. Sets the visual backdrop. | `urban noir city` |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | A clear reference photo of your main character (front-facing if possible) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | A clear reference photo of the supporting character (partner, rival, or secondary lead) | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `seed` (default: `12345`)
  - `story_theme` (default: `missing treasure`)
  - `aspect_ratio` (default: `16:9`)
  - `lighting_style` (default: `high-contrast, smoky atmosphere`)
  - `character_roles` (default: `detective, partner,...`)
  - `location_setting` (default: `urban noir city`)
- Required images:
  - **Exactly 2** images: image 1 (A clear reference photo of your main character (front-facing if possible)) and image 2 (A clear reference photo of the supporting character (partner, rival, or secondary lead)). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (A clear reference photo of your main character (front-facing if possible)) and image 2 (A clear reference photo of the supporting character (partner, rival, or secondary lead))"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019950ad-d531-7759-8e34-4016c8464737`).

Command form:

```bash
betterprompt generate 019950ad-d531-7759-8e34-4016c8464737 \
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
betterprompt generate 019950ad-d531-7759-8e34-4016c8464737 \
  --input seed=12345 \
  --input 'story_theme=missing treasure' \
  --input aspect_ratio=16:9 \
  --input 'lighting_style=high-contrast, smoky atmosphere' \
  --input 'character_roles=detective, partner,...' \
  --input 'location_setting=urban noir city' \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
