---
name: geek-style-ascii-character-poster
description: This prompt instructs an AI to generate a mathematically precise Swiss-Style, full-bleed poster on a solid black background featuring a clearly recognizable concrete object rendered as glowing white, high-fidelity ASCII art, structured by one or two ultra-thin white grid lines that run edge-to-edge, and set with clean sans-serif typography aligned strictly to the grid while mandatorily including the phrase “Thought for a while,” resulting in a high-contrast, minimalist, Armin Hofmann–inspired composition.
skillVersionId: 019c2300-13f1-708f-b087-3b0689c7b823
---

## What it does

This prompt instructs an AI to generate a mathematically precise Swiss-Style, full-bleed poster on a solid black background featuring a clearly recognizable concrete object rendered as glowing white, high-fidelity ASCII art, structured by one or two ultra-thin white grid lines that run edge-to-edge, and set with clean sans-serif typography aligned strictly to the grid while mandatorily including the phrase “Thought for a while,” resulting in a high-contrast, minimalist, Armin Hofmann–inspired composition.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `title` | Required | This is title. | (none) |
| `textures` | Required |  | (none) |
| `object_name` | Required |  | (none) |
| `number_or_date` | Required |  | (none) |



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
    - `title`
  - `textures`
  - `object_name`
  - `number_or_date`
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c2300-13f1-708f-b087-3b0689c7b823`).

Command form:

```bash
betterprompt generate 019c2300-13f1-708f-b087-3b0689c7b823 \
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
betterprompt generate 019c2300-13f1-708f-b087-3b0689c7b823 \
  --input title=<value> \
  --input textures=<value> \
  --input object_name=<value> \
  --input number_or_date=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
