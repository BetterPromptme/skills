---
name: dynamic-art-prompt
description: This prompt instructs an image-generation model to create a highly detailed, ultra-realistic cinematic illustration of a subject provided via a variable placeholder, aiming for an 8K-quality, ArtStation-trending aesthetic. The expected result is a polished, high-resolution artwork with dramatic lighting and a professional concept-art finish centered on the specified subject.
skillVersionId: 0198bb4f-7a63-7409-adc9-ce0e944dae24
---

## What it does

This prompt instructs an image-generation model to create a highly detailed, ultra-realistic cinematic illustration of a subject provided via a variable placeholder, aiming for an 8K-quality, ArtStation-trending aesthetic. The expected result is a polished, high-resolution artwork with dramatic lighting and a professional concept-art finish centered on the specified subject.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `variable` | Optional |  | `a dragon flying over a futuristic city` |



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
    - `variable` (default: `a dragon flying over a futuristic city`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":0},"quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198bb4f-7a63-7409-adc9-ce0e944dae24`).

Command form:

```bash
betterprompt generate 0198bb4f-7a63-7409-adc9-ce0e944dae24 \
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
betterprompt generate 0198bb4f-7a63-7409-adc9-ce0e944dae24 \
  --input 'variable=a dragon flying over a futuristic city' \
  --model gpt-image-1 \
  --options '{"image":{"quality":0},"quality":"low"}'
```
