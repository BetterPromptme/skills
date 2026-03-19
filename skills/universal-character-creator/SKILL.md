---
name: universal-character-creator
description: This prompt guides an AI image model to generate a hyper-realistic, cinematic studio portrait of a human character using user-specified traits (e.g., nationality/ethnicity, gender identity, age, framing, expression, and outfit), producing a natural, professionally lit casting-photo look. It enforces a softly lit warm off-white background, centered composition, accurate anatomy, and subtle emotional expression while prohibiting text, logos, props, stylization, fantasy elements, and unsafe or controversial content, resulting in a clean, timeless 4K portrait aligned to strict realism and safety constraints.
skillVersionId: 0199cbfc-e0d1-7e9f-aecf-2e96acd3892b
---

## What it does

This prompt guides an AI image model to generate a hyper-realistic, cinematic studio portrait of a human character using user-specified traits (e.g., nationality/ethnicity, gender identity, age, framing, expression, and outfit), producing a natural, professionally lit casting-photo look. It enforces a softly lit warm off-white background, centered composition, accurate anatomy, and subtle emotional expression while prohibiting text, logos, props, stylization, fantasy elements, and unsafe or controversial content, resulting in a clean, timeless 4K portrait aligned to strict realism and safety constraints.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `age` | Optional | Describe the approximate age of the character. | `middle-aged` |
| `gender` | Optional | Specify the gender identity of the character. | `male/female` |
| `outfit` | Optional | Describe the character’s outfit or clothing tone | `casual shirt and jeans` |
| `framing` | Optional | Indicate whether the image should be a headshot, waist-up, or full-body view. | `front-facing portrait` |
| `expression` | Optional | Describe the facial expression or emotional tone. | `slightly smiling` |
| `nationality` | Optional | Specify the nationality or ethnicity of the character. | `Indian` |



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
    - `age` (default: `middle-aged`)
  - `gender` (default: `male/female`)
  - `outfit` (default: `casual shirt and jeans`)
  - `framing` (default: `front-facing portrait`)
  - `expression` (default: `slightly smiling`)
  - `nationality` (default: `Indian`)
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199cbfc-e0d1-7e9f-aecf-2e96acd3892b`).

Command form:

```bash
betterprompt generate 0199cbfc-e0d1-7e9f-aecf-2e96acd3892b \
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
betterprompt generate 0199cbfc-e0d1-7e9f-aecf-2e96acd3892b \
  --input age=middle-aged \
  --input gender=male/female \
  --input 'outfit=casual shirt and jeans' \
  --input 'framing=front-facing portrait' \
  --input 'expression=slightly smiling' \
  --input nationality=Indian \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
