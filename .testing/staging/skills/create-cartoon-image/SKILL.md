---
name: create-cartoon-image
description: This prompt instructs an AI image generator to produce a playful, hand-drawn cartoon infographic of a specified office, depicting two desk-working characters and a break-room doorway while visually integrating five color-coded objects that symbolize the Chinese five elements, plus extra office details. The result is a soft pastel, clean-line illustration with a Chinese aesthetic that includes clear English annotations describing the office’s benefits and a cute yet practical overall atmosphere.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to produce a playful, hand-drawn cartoon infographic of a specified office, depicting two desk-working characters and a break-room doorway while visually integrating five color-coded objects that symbolize the Chinese five elements, plus extra office details. The result is a soft pastel, clean-line illustration with a Chinese aesthetic that includes clear English annotations describing the office’s benefits and a cute yet practical overall atmosphere.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `office_name` | Optional | test | `Feng Shui-inspired` |



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
    - `office_name` (default: `Feng Shui-inspired`)
- Optional: model and options.
  - Present the human with the default model **`imagen-3.0-generate-002`** and its available options. Look up `imagen-3.0-generate-002` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16"}`.
  - If the human does not specify, defaults are used: model `imagen-3.0-generate-002`, options `{"aspectRatio":"9:16"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `create-cartoon-image`).

Command form:

```bash
betterprompt generate create-cartoon-image \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`imagen-3.0-generate-002`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate create-cartoon-image \
  --input 'office_name=Feng Shui-inspired' \
  --model imagen-3.0-generate-002 \
  --options '{"aspectRatio":"9:16"}'
```
