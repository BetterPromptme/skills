---
name: gibli-style-wallpaper-maker
description: This prompt directs the AI to generate an original, high‑resolution wallpaper with a soft, painterly, magical animation-inspired look, using a user-specified scene description and either a phone-tall or 4K desktop-wide composition. It emphasizes warm, nostalgic atmosphere, lush natural colors, clear foreground/midground/background depth, and subtle signs of life like wind or small creatures while avoiding text and any copyrighted characters or recognizable locations. The expected outcome is a clean, balanced, wallpaper-ready illustration tailored precisely to the chosen format.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the AI to generate an original, high‑resolution wallpaper with a soft, painterly, magical animation-inspired look, using a user-specified scene description and either a phone-tall or 4K desktop-wide composition. It emphasizes warm, nostalgic atmosphere, lush natural colors, clear foreground/midground/background depth, and subtle signs of life like wind or small creatures while avoiding text and any copyrighted characters or recognizable locations. The expected outcome is a clean, balanced, wallpaper-ready illustration tailored precisely to the chosen format.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `format` | Optional | Phone 1179 × 2556 px OR Desktop 3840 × 2160 px | `Phone` |
| `scene_description` | Required | Describe the scene you want | (none) |



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
    - `scene_description`
- Optional text inputs (use defaults if not provided by the human):
    - `format` (default: `Phone`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"16:9","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"16:9","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `gibli-style-wallpaper-maker`).

Command form:

```bash
betterprompt generate gibli-style-wallpaper-maker \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"16:9","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate gibli-style-wallpaper-maker \
  --input format=Phone \
  --input scene_description=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"16:9","resolution":"1K"}'
```
