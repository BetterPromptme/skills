---
name: id-photo-generator
description: This prompt instructs the AI to create a hyper-realistic, passport-style ID portrait in a 4:6 vertical format, using the provided character description, pose, background, lighting, and style preferences. The outcome is a clean, professional head-and-shoulders image with sharp focus, neutral expression as specified, even lighting for natural skin tones, and a distraction-free background suitable for official identification or similar professional use.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a hyper-realistic, passport-style ID portrait in a 4:6 vertical format, using the provided character description, pose, background, lighting, and style preferences. The outcome is a clean, professional head-and-shoulders image with sharp focus, neutral expression as specified, even lighting for natural skin tones, and a distraction-free background suitable for official identification or similar professional use.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Style` | Required |  | (none) |
| `Background` | Required |  | (none) |
| `Pose_Action` | Required |  | (none) |
| `Lighting_Mood` | Required |  | (none) |
| `Character_Description` | Required |  | (none) |



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
    - `Style`
  - `Background`
  - `Pose_Action`
  - `Lighting_Mood`
  - `Character_Description`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `id-photo-generator`).

Command form:

```bash
betterprompt generate id-photo-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate id-photo-generator \
  --input Style=<value> \
  --input Background=<value> \
  --input Pose_Action=<value> \
  --input Lighting_Mood=<value> \
  --input Character_Description=<value> \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"low"}'
```