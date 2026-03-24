---
name: famous-landmarks-as-furniture
description: This prompt directs the AI to generate a photorealistic image of a chosen landmark redesigned as a fully functional, normally scaled piece of living-room furniture, emphasizing realistic materials, craftsmanship, and integration into a typical interior. If a main color is provided, the output will prioritize that color in the furniture’s design while keeping the scene detailed and believable.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the AI to generate a photorealistic image of a chosen landmark redesigned as a fully functional, normally scaled piece of living-room furniture, emphasizing realistic materials, craftsmanship, and integration into a typical interior. If a main color is provided, the output will prioritize that color in the furniture’s design while keeping the scene detailed and believable.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `landmark` | Optional |  | `Statue of Liberty` |
| `mainColor` | Optional |  | `red` |
| `furniturePiece` | Optional |  | `lamp` |



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
    - `landmark` (default: `Statue of Liberty`)
  - `mainColor` (default: `red`)
  - `furniturePiece` (default: `lamp`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":0},"quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `famous-landmarks-as-furniture`).

Command form:

```bash
betterprompt generate famous-landmarks-as-furniture \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate famous-landmarks-as-furniture \
  --input 'landmark=Statue of Liberty' \
  --input mainColor=red \
  --input furniturePiece=lamp \
  --model gpt-image-1 \
  --options '{"image":{"quality":0},"quality":"low"}'
```
