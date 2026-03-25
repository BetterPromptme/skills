---
name: my-city-in-cyberpunk-style
description: This prompt instructs the AI to transform a user-supplied photograph of a specific city into a film-quality cyberpunk future while preserving the city’s recognizable architecture and composition, then amplifying a named focal element as the central subject using neon glow, holographic overlays, and a defined color palette within a chosen atmospheric mood (e.g., rain, mist, neon haze). The intended outcome is a striking, narratively coherent, technically reproducible concept-art image with cinematic lighting, reflective surfaces, and hyper-detailed Blade Runner/Cyberpunk-style ambience, along with production-ready guidance and a request for additional references if required details are missing.
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

This prompt instructs the AI to transform a user-supplied photograph of a specific city into a film-quality cyberpunk future while preserving the city’s recognizable architecture and composition, then amplifying a named focal element as the central subject using neon glow, holographic overlays, and a defined color palette within a chosen atmospheric mood (e.g., rain, mist, neon haze). The intended outcome is a striking, narratively coherent, technically reproducible concept-art image with cinematic lighting, reflective surfaces, and hyper-detailed Blade Runner/Cyberpunk-style ambience, along with production-ready guidance and a request for additional references if required details are missing.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `mood` | Required |  | (none) |
| `city_name` | Required |  | (none) |
| `main_element` | Required |  | (none) |
| `neon_palette` | Required |  | (none) |



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
    - `mood`
  - `city_name`
  - `main_element`
  - `neon_palette`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `my-city-in-cyberpunk-style`).

Command form:

```bash
betterprompt generate my-city-in-cyberpunk-style \
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
betterprompt generate my-city-in-cyberpunk-style \
  --input mood=<value> \
  --input city_name=<value> \
  --input main_element=<value> \
  --input neon_palette=<value> \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```