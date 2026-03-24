---
name: customizable-fashion-model
description: This prompt instructs an AI image generator to produce a highly detailed, photorealistic fashion model illustration tailored to user-defined attributes (such as demographics, facial features, hair, body type, expression, pose, wardrobe, makeup, setting, lighting, style, and mood), resulting in a visually striking, vibrant, professional composition with refined textures and background detail suitable for a high-end fashion magazine cover.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to produce a highly detailed, photorealistic fashion model illustration tailored to user-defined attributes (such as demographics, facial features, hair, body type, expression, pose, wardrobe, makeup, setting, lighting, style, and mood), resulting in a visually striking, vibrant, professional composition with refined textures and background detail suitable for a high-end fashion magazine cover.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Age` | Required |  | (none) |
| `Hair` | Required |  | (none) |
| `Pose` | Required |  | (none) |
| `Gender` | Required |  | (none) |
| `Height` | Required |  | (none) |
| `Makeup` | Required |  | (none) |
| `Clothing` | Required |  | (none) |
| `Lighting` | Required |  | (none) |
| `Art_Style` | Required |  | (none) |
| `Body_Type` | Required |  | (none) |
| `Expression` | Required |  | (none) |
| `Facial_Features` | Required |  | (none) |
| `Mood_or_Atmosphere` | Required |  | (none) |
| `Background_or_Setting` | Required |  | (none) |
| `Ethnicity_or_Skin_Tone` | Required |  | (none) |



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
    - `Age`
  - `Hair`
  - `Pose`
  - `Gender`
  - `Height`
  - `Makeup`
  - `Clothing`
  - `Lighting`
  - `Art_Style`
  - `Body_Type`
  - `Expression`
  - `Facial_Features`
  - `Mood_or_Atmosphere`
  - `Background_or_Setting`
  - `Ethnicity_or_Skin_Tone`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `customizable-fashion-model`).

Command form:

```bash
betterprompt generate customizable-fashion-model \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate customizable-fashion-model \
  --input Age=<value> \
  --input Hair=<value> \
  --input Pose=<value> \
  --input Gender=<value> \
  --input Height=<value> \
  --input Makeup=<value> \
  --input Clothing=<value> \
  --input Lighting=<value> \
  --input Art_Style=<value> \
  --input Body_Type=<value> \
  --input Expression=<value> \
  --input Facial_Features=<value> \
  --input Mood_or_Atmosphere=<value> \
  --input Background_or_Setting=<value> \
  --input Ethnicity_or_Skin_Tone=<value> \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}'
```
