---
name: excalidraw-style-architecture-diagram
description: This prompt instructs an AI to produce a minimalist, Excalidraw-style architecture diagram for a specified system, choosing an appropriate 16:9 horizontal or vertical layout and organizing the design into clearly labeled modules with their key functions. It requires clean box-and-arrow visuals on a white background, uses arrows for primary data/process flows and dashed lines for auxiliary or supervisory relationships, and allows limited red highlights to emphasize important lines or labels, resulting in a professional technical sketch that communicates the system’s structure and interactions.
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

This prompt instructs an AI to produce a minimalist, Excalidraw-style architecture diagram for a specified system, choosing an appropriate 16:9 horizontal or vertical layout and organizing the design into clearly labeled modules with their key functions. It requires clean box-and-arrow visuals on a white background, uses arrows for primary data/process flows and dashed lines for auxiliary or supervisory relationships, and allows limited red highlights to emphasize important lines or labels, resulting in a professional technical sketch that communicates the system’s structure and interactions.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `architecture_name` | Required |  | (none) |



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
    - `architecture_name`
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"5:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"5:4","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `excalidraw-style-architecture-diagram`).

Command form:

```bash
betterprompt generate excalidraw-style-architecture-diagram \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"5:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate excalidraw-style-architecture-diagram \
  --input architecture_name=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"5:4","resolution":"1K"}'
```