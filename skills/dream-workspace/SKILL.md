---
name: dream-workspace
description: This prompt instructs the AI to act as an interior designer and architectural visualizer to produce a feasible, photorealistic rendering concept for a “dream workspace,” tailored to a client-defined workspace type, design style, color palette, furniture/layout, lighting, decor, and environmental context. The expected outcome is a natural-looking, ultra-realistic, visually persuasive scene that supports decision-making while staying aligned with budget and constructability, clearly stating any assumptions and requesting missing measurements, plans, or specifications when needed.
skillVersionId: 0198f53b-b5ae-7eb2-ae23-f72b02579d60
---

## What it does

This prompt instructs the AI to act as an interior designer and architectural visualizer to produce a feasible, photorealistic rendering concept for a “dream workspace,” tailored to a client-defined workspace type, design style, color palette, furniture/layout, lighting, decor, and environmental context. The expected outcome is a natural-looking, ultra-realistic, visually persuasive scene that supports decision-making while staying aligned with budget and constructability, clearly stating any assumptions and requesting missing measurements, plans, or specifications when needed.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `style` | Required |  | (none) |
| `lighting` | Required |  | (none) |
| `color_palette` | Required |  | (none) |
| `decor_elements` | Required |  | (none) |
| `workspace_type` | Required |  | (none) |
| `furniture_and_layout` | Required |  | (none) |
| `background_or_environment` | Required |  | (none) |



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
    - `style`
  - `lighting`
  - `color_palette`
  - `decor_elements`
  - `workspace_type`
  - `furniture_and_layout`
  - `background_or_environment`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198f53b-b5ae-7eb2-ae23-f72b02579d60`).

Command form:

```bash
betterprompt generate 0198f53b-b5ae-7eb2-ae23-f72b02579d60 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0198f53b-b5ae-7eb2-ae23-f72b02579d60 \
  --input style=<value> \
  --input lighting=<value> \
  --input color_palette=<value> \
  --input decor_elements=<value> \
  --input workspace_type=<value> \
  --input furniture_and_layout=<value> \
  --input background_or_environment=<value> \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
