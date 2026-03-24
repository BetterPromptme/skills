---
name: luxury-crystal-surface-generator
description: This prompt takes a specified object (such as a logo, icon, or everyday item) and renders it in a hyper-realistic, fully diamond-encrusted glamour style, covering the entire surface with ultra-fine faceted gemstones that produce intense specular highlights and prismatic sparkle. It sets a hard directional lighting setup with flare-like glints, soft low-opacity shadows, and a minimalist solid-color backdrop to maximize contrast, using a slight top-down macro viewpoint with shallow depth of field. The outcome is a luxurious, surreal, high-detail image where the subject appears completely crystal-coated and brilliantly reflective against a clean, unobtrusive background.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt takes a specified object (such as a logo, icon, or everyday item) and renders it in a hyper-realistic, fully diamond-encrusted glamour style, covering the entire surface with ultra-fine faceted gemstones that produce intense specular highlights and prismatic sparkle. It sets a hard directional lighting setup with flare-like glints, soft low-opacity shadows, and a minimalist solid-color backdrop to maximize contrast, using a slight top-down macro viewpoint with shallow depth of field. The outcome is a luxurious, surreal, high-detail image where the subject appears completely crystal-coated and brilliantly reflective against a clean, unobtrusive background.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `OBJECT` | Required |  | (none) |



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
    - `OBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":1},"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":1},"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `luxury-crystal-surface-generator`).

Command form:

```bash
betterprompt generate luxury-crystal-surface-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":1},"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate luxury-crystal-surface-generator \
  --input OBJECT=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":1},"quality":"medium"}'
```
