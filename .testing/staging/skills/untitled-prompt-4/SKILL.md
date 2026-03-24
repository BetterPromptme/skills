---
name: untitled-prompt-4
description: This prompt asks the AI to generate or describe an image featuring a cup placed in a forest setting, focusing on composing a nature scene where the cup is a clear subject among trees and foliage. The result is a forest-themed picture (or detailed visual description) that centers on the cup and conveys the atmosphere, lighting, and surroundings of the woodland environment.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to generate or describe an image featuring a cup placed in a forest setting, focusing on composing a nature scene where the cup is a clear subject among trees and foliage. The result is a forest-themed picture (or detailed visual description) that centers on the cup and conveys the atmosphere, lighting, and surroundings of the woodland environment.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

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
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `untitled-prompt-4`).

Command form:

```bash
betterprompt generate untitled-prompt-4 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate untitled-prompt-4 \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
