---
name: make-paper-or-wood-cut-art-just-add-a-subject
description: Generates a clean, flat paper-cutout style design of the specified subject themed after a chosen character or style, formatted as a multilayer SVG optimized for plywood laser cutting. The result is a bold, simplified silhouette composition on a white background, organized into three base structural layers plus four additional color layers to support easy assembly and use in craft projects.
skillVersionId: 01987eae-2647-72bc-8eeb-810d26e2160b
---

## What it does

Generates a clean, flat paper-cutout style design of the specified subject themed after a chosen character or style, formatted as a multilayer SVG optimized for plywood laser cutting. The result is a bold, simplified silhouette composition on a white background, organized into three base structural layers plus four additional color layers to support easy assembly and use in craft projects.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `subject` | Required |  | (none) |
| `theme_or_character` | Required |  | (none) |



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
    - `subject`
  - `theme_or_character`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01987eae-2647-72bc-8eeb-810d26e2160b`).

Command form:

```bash
betterprompt generate 01987eae-2647-72bc-8eeb-810d26e2160b \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":2},"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01987eae-2647-72bc-8eeb-810d26e2160b \
  --input subject=<value> \
  --input theme_or_character=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
