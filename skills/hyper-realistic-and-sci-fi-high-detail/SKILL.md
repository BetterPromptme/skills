---
name: hyper-realistic-and-sci-fi-high-detail
description: This prompt instructs the AI to generate an ultra-high-resolution, studio-lit, microscopic-style photograph of an impossibly tiny “Nano Banana” presented as a Google-engineered object, featuring a chrome metallic peel with subtle, glowing blue circuitry visible beneath the surface, rendered with extreme depth of field and crisp detail to create a convincing nano-scale sci‑fi product shot.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate an ultra-high-resolution, studio-lit, microscopic-style photograph of an impossibly tiny “Nano Banana” presented as a Google-engineered object, featuring a chrome metallic peel with subtle, glowing blue circuitry visible beneath the surface, rendered with extreme depth of field and crisp detail to create a convincing nano-scale sci‑fi product shot.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `hyper-realistic-and-sci-fi-high-detail`).

Command form:

```bash
betterprompt generate hyper-realistic-and-sci-fi-high-detail \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate hyper-realistic-and-sci-fi-high-detail \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```