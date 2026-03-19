---
name: blueprint-mode-technical-line-art
description: This prompt instructs the AI to examine a provided reference image and recreate its subject as a precise blueprint-style technical schematic, preserving key visual details such as form, structure, design elements, colors, and background. The output is a clean, engineering-oriented line drawing rendered in multiple specified pen colors on a specified paper type, enhanced with technical annotations, dimension lines, and other drafting conventions to produce a professional, highly detailed technical blueprint aesthetic.
skillVersionId: 019c22f5-5e69-757f-8a13-2c4f49235351
---

## What it does

This prompt instructs the AI to examine a provided reference image and recreate its subject as a precise blueprint-style technical schematic, preserving key visual details such as form, structure, design elements, colors, and background. The output is a clean, engineering-oriented line drawing rendered in multiple specified pen colors on a specified paper type, enhanced with technical annotations, dimension lines, and other drafting conventions to produce a professional, highly detailed technical blueprint aesthetic.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `pen_colors` | Optional |  | `green` |
| `papper_type` | Optional |  | `beige` |



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
    - `pen_colors` (default: `green`)
  - `papper_type` (default: `beige`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c22f5-5e69-757f-8a13-2c4f49235351`).

Command form:

```bash
betterprompt generate 019c22f5-5e69-757f-8a13-2c4f49235351 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019c22f5-5e69-757f-8a13-2c4f49235351 \
  --input pen_colors=green \
  --input papper_type=beige \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
