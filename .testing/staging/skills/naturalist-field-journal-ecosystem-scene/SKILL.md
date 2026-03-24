---
name: naturalist-field-journal-ecosystem-scene
description: This prompt instructs an image model to generate an epic, photorealistic 3D documentary-style scene of a naturalist’s campsite where an open, weathered field journal magically transforms its drawn and pressed contents into living ecosystems. The outcome is a highly detailed 8K composition featuring animated botanical and insect elements, expanding watercolor landscapes, miniature camps formed from margin notes, a real creature swimming in a jar on the page, and a sketched animal stepping off the paper, all lit by lantern glow and fireflies with a pine-forest atmosphere, with placeholder variables ready to be filled for specific plants and an animal.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an image model to generate an epic, photorealistic 3D documentary-style scene of a naturalist’s campsite where an open, weathered field journal magically transforms its drawn and pressed contents into living ecosystems. The outcome is a highly detailed 8K composition featuring animated botanical and insect elements, expanding watercolor landscapes, miniature camps formed from margin notes, a real creature swimming in a jar on the page, and a sketched animal stepping off the paper, all lit by lantern glow and fireflies with a pine-forest atmosphere, with placeholder variables ready to be filled for specific plants and an animal.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `animal` | Required | Allowed options: otter, rabbit, turtle | (none) |
| `plant_1` | Required | hello | (none) |
| `plant_2` | Optional |  | `Hypoxis` |



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
    - `animal`
  - `plant_1`
- Optional text inputs (use defaults if not provided by the human):
    - `plant_2` (default: `Hypoxis`)
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `naturalist-field-journal-ecosystem-scene`).

Command form:

```bash
betterprompt generate naturalist-field-journal-ecosystem-scene \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate naturalist-field-journal-ecosystem-scene \
  --input animal=otter \
  --input plant_1=<value> \
  --input plant_2=Hypoxis \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```
