---
name: vintage-patent-drawing-with-nano-banana-pro-in-openart
description: Generates a museum-quality, 1890s-inspired patent technical illustration of the specified object, rendered as black-ink linework with sepia accents on aged cream parchment. The result includes hand-lettered labels, numbered component callouts, cross-section views, and an official-looking patent border with a fictional patent number and date, producing an elegant, authoritative vintage engineering drawing.
skillVersionId: 019c27d2-908b-75c3-8aab-45abc6b215a7
---

## What it does

Generates a museum-quality, 1890s-inspired patent technical illustration of the specified object, rendered as black-ink linework with sepia accents on aged cream parchment. The result includes hand-lettered labels, numbered component callouts, cross-section views, and an official-looking patent border with a fictional patent number and date, producing an elegant, authoritative vintage engineering drawing.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `object` | Optional |  | `a complex mechanical device` |



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
    - `object` (default: `a complex mechanical device`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c27d2-908b-75c3-8aab-45abc6b215a7`).

Command form:

```bash
betterprompt generate 019c27d2-908b-75c3-8aab-45abc6b215a7 \
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
betterprompt generate 019c27d2-908b-75c3-8aab-45abc6b215a7 \
  --input 'object=a complex mechanical device' \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
