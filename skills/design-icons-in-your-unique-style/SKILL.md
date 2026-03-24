---
name: design-icons-in-your-unique-style
description: This prompt instructs an image-generation system to create a high‑resolution, 3D‑rendered cute character tailored for a specific UI screen, with configurable character type, action, expression, and design details aligned to the UI’s purpose. It specifies a playful minimalist look with soft studio lighting, matte plush materials, centered full‑body composition, and no background, resulting in a transparent PNG (square, 1024×1024+), saved with a UI‑relevant filename.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image-generation system to create a high‑resolution, 3D‑rendered cute character tailored for a specific UI screen, with configurable character type, action, expression, and design details aligned to the UI’s purpose. It specifies a playful minimalist look with soft studio lighting, matte plush materials, centered full‑body composition, and no background, resulting in a transparent PNG (square, 1024×1024+), saved with a UI‑relevant filename.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Body_shape` | Optional |  | `Small` |
| `Expression` | Optional |  | `sad` |
| `UI_purpose` | Optional |  | `404 Page, , Loading Screen, Maintenance Notice` |
| `Character_pose` | Optional |  | `standing, sitting, lying down ` |
| `Facial_details` | Optional |  | `dot eyes, line mouth, rosy cheeks, subtle blush` |
| `Character_action` | Optional |  | `peeking from a box` |
| `Pastel_skin_color` | Optional |  | `lavender,` |
| `creature_or_character` | Required |  | (none) |
| `Optional_small_accessory` | Optional |  | `magnifying glass` |



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
    - `creature_or_character`
- Optional text inputs (use defaults if not provided by the human):
    - `Body_shape` (default: `Small`)
  - `Expression` (default: `sad`)
  - `UI_purpose` (default: `404 Page, , Loading Screen, Maintenance Notice`)
  - `Character_pose` (default: `standing, sitting, lying down `)
  - `Facial_details` (default: `dot eyes, line mouth, rosy cheeks, subtle blush`)
  - `Character_action` (default: `peeking from a box`)
  - `Pastel_skin_color` (default: `lavender,`)
  - `Optional_small_accessory` (default: `magnifying glass`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `design-icons-in-your-unique-style`).

Command form:

```bash
betterprompt generate design-icons-in-your-unique-style \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":2},"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate design-icons-in-your-unique-style \
  --input Body_shape=Small \
  --input Expression=sad \
  --input 'UI_purpose=404 Page, , Loading Screen, Maintenance Notice' \
  --input 'Character_pose=standing, sitting, lying down ' \
  --input 'Facial_details=dot eyes, line mouth, rosy cheeks, subtle blush' \
  --input 'Character_action=peeking from a box' \
  --input Pastel_skin_color=lavender, \
  --input creature_or_character=<value> \
  --input 'Optional_small_accessory=magnifying glass' \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
