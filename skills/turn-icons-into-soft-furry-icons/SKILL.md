---
name: turn-icons-into-soft-furry-icons
description: This prompt instructs the AI to take a specified flat vector icon and reimagine it as a soft, three-dimensional, fur-covered object with hyperrealistic hair detail, gentle floating presentation, and modern studio-lit rendering on a clean light gray background, resulting in a high-resolution, tactile, playful 3D image that preserves the original icon’s silhouette while adding plush depth, texture, and soft shadows.
skillVersionId: 0196f11d-3c64-73ab-80bd-4bfc73910ef6
---

## What it does

This prompt instructs the AI to take a specified flat vector icon and reimagine it as a soft, three-dimensional, fur-covered object with hyperrealistic hair detail, gentle floating presentation, and modern studio-lit rendering on a clean light gray background, resulting in a high-resolution, tactile, playful 3D image that preserves the original icon’s silhouette while adding plush depth, texture, and soft shadows.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `insert_icon_you_want_here` | Required |  | (none) |



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
    - `insert_icon_you_want_here`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0196f11d-3c64-73ab-80bd-4bfc73910ef6`).

Command form:

```bash
betterprompt generate 0196f11d-3c64-73ab-80bd-4bfc73910ef6 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0196f11d-3c64-73ab-80bd-4bfc73910ef6 \
  --input insert_icon_you_want_here=<value> \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}'
```
