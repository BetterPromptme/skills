---
name: infographic-generation
description: This prompt instructs the AI to act as a visual communication designer and infographic specialist, using provided content and placeholders to plan an infographic for a defined audience and aspect ratio. It requires a clear, modern, visually balanced layout with consistent typography, color, spacing, and hierarchy, emphasizing essential information and readability for digital use. The expected result is a production-ready infographic blueprint describing the overall structure, section breakdown, recommended visual types per section, and specific color/icon and styling guidance to support accurate final graphic creation.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a visual communication designer and infographic specialist, using provided content and placeholders to plan an infographic for a defined audience and aspect ratio. It requires a clear, modern, visually balanced layout with consistent typography, color, spacing, and hierarchy, emphasizing essential information and readability for digital use. The expected result is a production-ready infographic blueprint describing the overall structure, section breakdown, recommended visual types per section, and specific color/icon and styling guidance to support accurate final graphic creation.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Audience` | Required | State clearly your target audience of your inforgraphic | (none) |
| `Information` | Required | Paste information you wanna have in your inforgraphic | (none) |
| `Aspect_ratio` | Optional | Highly recommended to use 9:16 ratio | `9:16` |
| `Type_of_visuals` | Optional | State clearly what specific styles, elements or types of inforgraphic you want | `Vectors` |



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
    - `Audience`
  - `Information`
- Optional text inputs (use defaults if not provided by the human):
    - `Aspect_ratio` (default: `9:16`)
  - `Type_of_visuals` (default: `Vectors`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `infographic-generation`).

Command form:

```bash
betterprompt generate infographic-generation \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate infographic-generation \
  --input Audience=<value> \
  --input Information=<value> \
  --input Aspect_ratio=9:16 \
  --input Type_of_visuals=Vectors \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"1K"}'
```
