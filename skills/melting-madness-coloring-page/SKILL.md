---
name: melting-madness-coloring-page
description: This prompt instructs an AI to generate a square, black-and-white psychedelic coloring page with a melting central subject, surrounded by spacious, playful, surreal motifs and flowing patterns. The expected result is a clean, uncluttered line-art illustration on a white background, using bold enclosed outlines suitable for coloring, with no text and no color.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs an AI to generate a square, black-and-white psychedelic coloring page with a melting central subject, surrounded by spacious, playful, surreal motifs and flowing patterns. The expected result is a clean, uncluttered line-art illustration on a white background, using bold enclosed outlines suitable for coloring, with no text and no color.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `ELEMENT_1` | Required |  | (none) |
| `ELEMENT_2` | Required |  | (none) |
| `ELEMENT_3` | Required |  | (none) |
| `ELEMENT_4` | Required |  | (none) |
| `EXTRA_MOTIFS` | Required |  | (none) |
| `MAIN_SUBJECT` | Required |  | (none) |



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
    - `ELEMENT_1`
  - `ELEMENT_2`
  - `ELEMENT_3`
  - `ELEMENT_4`
  - `EXTRA_MOTIFS`
  - `MAIN_SUBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `melting-madness-coloring-page`).

Command form:

```bash
betterprompt generate melting-madness-coloring-page \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate melting-madness-coloring-page \
  --input ELEMENT_1=<value> \
  --input ELEMENT_2=<value> \
  --input ELEMENT_3=<value> \
  --input ELEMENT_4=<value> \
  --input EXTRA_MOTIFS=<value> \
  --input MAIN_SUBJECT=<value> \
  --model gpt-image-1 \
  --options '{"quality":"medium"}'
```