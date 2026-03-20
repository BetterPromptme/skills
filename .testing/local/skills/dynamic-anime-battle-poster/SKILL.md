---
name: dynamic-anime-battle-poster
description: This prompt directs an image model to generate a high-resolution, dynamic anime key-visual poster of a specified character engaged in battle, matching the style, background, and overall vibe of a provided reference image. It emphasizes dramatic lighting, intense aura and signature energy effects, and highly detailed action composition. The result also includes adding a specified Japanese text element at a chosen position near the attack, rendered in a chaotic, power-matching anime font to complete the poster-like layout.
skillVersionId: 019c4714-02b2-76ea-bd8e-8d6549567b36
---

## What it does

This prompt directs an image model to generate a high-resolution, dynamic anime key-visual poster of a specified character engaged in battle, matching the style, background, and overall vibe of a provided reference image. It emphasizes dramatic lighting, intense aura and signature energy effects, and highly detailed action composition. The result also includes adding a specified Japanese text element at a chosen position near the attack, rendered in a chaotic, power-matching anime font to complete the poster-like layout.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `text_position` | Optional |  | `top` |
| `text_to_write` | Optional |  | `Hello` |
| `character_name` | Required | Character or Anime name | (none) |



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
    - `character_name`
- Optional text inputs (use defaults if not provided by the human):
    - `text_position` (default: `top`)
  - `text_to_write` (default: `Hello`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c4714-02b2-76ea-bd8e-8d6549567b36`).

Command form:

```bash
betterprompt generate 019c4714-02b2-76ea-bd8e-8d6549567b36 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019c4714-02b2-76ea-bd8e-8d6549567b36 \
  --input text_position=top \
  --input text_to_write=Hello \
  --input character_name=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"1K"}'
```
