---
name: minimalist-glass-emoji-generator
description: This prompt instructs an AI image generator to produce a square, 1024×1024 high-resolution 3D render of a specified icon as a minimalist, Apple-inspired frosted-glass object, featuring rounded edges, matte semi-transparency with an icy blue–to–lavender/pink gradient, subtle refraction and internal glow, centered on a pure white background with an orthographic camera and a soft top-left-lit drop shadow for gentle elevation.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs an AI image generator to produce a square, 1024×1024 high-resolution 3D render of a specified icon as a minimalist, Apple-inspired frosted-glass object, featuring rounded edges, matte semi-transparency with an icy blue–to–lavender/pink gradient, subtle refraction and internal glow, centered on a pure white background with an orthographic camera and a soft top-left-lit drop shadow for gentle elevation.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `An_icon` | Optional |  | `icon` |



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
    - `An_icon` (default: `icon`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `minimalist-glass-emoji-generator`).

Command form:

```bash
betterprompt generate minimalist-glass-emoji-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate minimalist-glass-emoji-generator \
  --input An_icon=icon \
  --model gpt-image-1 \
  --options '{"quality":"low"}'
```