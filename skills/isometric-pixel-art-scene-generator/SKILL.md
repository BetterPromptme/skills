---
name: isometric-pixel-art-scene-generator
description: This prompt is used to generate a highly detailed isometric, top-down pixel art scene for a retro-style 2D video game environment. By filling in the placeholders for setting, color palette, key scene elements, lighting, and a visual style reference, it produces a cohesive environment image that matches the specified aesthetic and game inspiration.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt is used to generate a highly detailed isometric, top-down pixel art scene for a retro-style 2D video game environment. By filling in the placeholders for setting, color palette, key scene elements, lighting, and a visual style reference, it produces a cohesive environment image that matches the specified aesthetic and game inspiration.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `color_palette` | Required |  | (none) |
| `scene_setting` | Required |  | (none) |
| `lighting_style` | Required |  | (none) |
| `key_elements_in_the_scene` | Required |  | (none) |
| `visual_reference_or_game_style` | Required |  | (none) |



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
    - `color_palette`
  - `scene_setting`
  - `lighting_style`
  - `key_elements_in_the_scene`
  - `visual_reference_or_game_style`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `isometric-pixel-art-scene-generator`).

Command form:

```bash
betterprompt generate isometric-pixel-art-scene-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate isometric-pixel-art-scene-generator \
  --input color_palette=<value> \
  --input scene_setting=<value> \
  --input lighting_style=<value> \
  --input key_elements_in_the_scene=<value> \
  --input visual_reference_or_game_style=<value> \
  --model gpt-image-1 \
  --options '{"quality":"medium"}'
```