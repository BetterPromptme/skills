---
name: soft-jelly-3d-icon-style-prompt
description: This prompt directs an image-generation system to create a consistent set of modern 1:1 jelly-like 3D icons for UI use, specifying materials, layered composition with floating internal elements, a cohesive pastel color palette, soft studio lighting, and a neutral background to ensure clean depth, contrast, and uniform style across the icon pack at high resolution.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs an image-generation system to create a consistent set of modern 1:1 jelly-like 3D icons for UI use, specifying materials, layered composition with floating internal elements, a cohesive pastel color palette, soft studio lighting, and a neutral background to ensure clean depth, contrast, and uniform style across the icon pack at high resolution.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `YOUR_ICON_NAME_HERE` | Required |  | (none) |



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
    - `YOUR_ICON_NAME_HERE`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `soft-jelly-3d-icon-style-prompt`).

Command form:

```bash
betterprompt generate soft-jelly-3d-icon-style-prompt \
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
betterprompt generate soft-jelly-3d-icon-style-prompt \
  --input YOUR_ICON_NAME_HERE=<value> \
  --model gpt-image-1 \
  --options '{"quality":"medium"}'
```