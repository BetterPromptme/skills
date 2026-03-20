---
name: naturalist-field-journal-ecosystem-scene
description: This prompt directs the AI to generate an epic, photorealistic 3D documentary-style scene of a naturalist’s camp table where an open, weathered field journal magically transforms its recorded observations into living, animated ecosystems. It specifies dynamic elements—plants, insects, landscapes, notes, specimens, and a sketched animal coming to life—along with environmental details like a tent, lantern glow, and fireflies, while leaving placeholders for specific species to be inserted. The intended result is a richly detailed, cinematic 8K image that blends tactile realism (paper, stains, jars) with surreal emergence of nature from the journal’s pages.
skillVersionId: 019c2653-9ebb-7226-8b6a-b6c227515726
---

## What it does

This prompt directs the AI to generate an epic, photorealistic 3D documentary-style scene of a naturalist’s camp table where an open, weathered field journal magically transforms its recorded observations into living, animated ecosystems. It specifies dynamic elements—plants, insects, landscapes, notes, specimens, and a sketched animal coming to life—along with environmental details like a tent, lantern glow, and fireflies, while leaving placeholders for specific species to be inserted. The intended result is a richly detailed, cinematic 8K image that blends tactile realism (paper, stains, jars) with surreal emergence of nature from the journal’s pages.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `animal` | Required |  | (none) |
| `plant_1` | Required |  | (none) |
| `plant_2` | Required |  | (none) |



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
  - `plant_2`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1"}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{"aspectRatio":"1:1"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019c2653-9ebb-7226-8b6a-b6c227515726`).

Command form:

```bash
betterprompt generate 019c2653-9ebb-7226-8b6a-b6c227515726 \
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
betterprompt generate 019c2653-9ebb-7226-8b6a-b6c227515726 \
  --input animal=<value> \
  --input plant_1=<value> \
  --input plant_2=<value> \
  --model gemini-2.5-flash-image-preview \
  --options '{"aspectRatio":"1:1"}'
```
