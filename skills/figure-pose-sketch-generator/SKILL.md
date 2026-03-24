---
name: figure-pose-sketch-generator
description: This prompt instructs the AI to act as a figure-drawing instructor and produce a monochrome, construction-style line sketch of a human figure in a specified pose, camera angle, and body type, optionally including simplified props that support the action. The result is a clean, manual-like base drawing built from simple geometric forms and visible guidelines that clearly communicate gesture, proportion, anatomical landmarks, and balance, suitable for artists to use as a practice template for pose and character studies.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a figure-drawing instructor and produce a monochrome, construction-style line sketch of a human figure in a specified pose, camera angle, and body type, optionally including simplified props that support the action. The result is a clean, manual-like base drawing built from simple geometric forms and visible guidelines that clearly communicate gesture, proportion, anatomical landmarks, and balance, suitable for artists to use as a practice template for pose and character studies.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `body_type` | Optional |  | `Slim female` |
| `pose_type` | Optional |  | `Running forward with arms swinging` |
| `camera_angle` | Optional |  | `Top-down view (looking down from above)` |
| `Extra_Elements` | Optional |  | `Simple round stool` |



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
    - `body_type` (default: `Slim female`)
  - `pose_type` (default: `Running forward with arms swinging`)
  - `camera_angle` (default: `Top-down view (looking down from above)`)
  - `Extra_Elements` (default: `Simple round stool`)
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `figure-pose-sketch-generator`).

Command form:

```bash
betterprompt generate figure-pose-sketch-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate figure-pose-sketch-generator \
  --input 'body_type=Slim female' \
  --input 'pose_type=Running forward with arms swinging' \
  --input 'camera_angle=Top-down view (looking down from above)' \
  --input 'Extra_Elements=Simple round stool' \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
