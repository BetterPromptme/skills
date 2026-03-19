---
name: hyper-realistic-beauiful-girl
description: This prompt instructs an image-generation model to create a hyperrealistic, cinematic 8K portrait of a beautiful young girl with expressive eyes and a radiant smile, wearing an elegant flowing dress in a vivid randomly chosen color, posed in a dynamic, natural environment such as a golden-hour enchanted forest clearing or an artistic city street with soft bokeh, with meticulously detailed hair and lighting that together produce an intricate, dreamlike, photorealistic final image.
skillVersionId: 019a4dec-f1db-74ac-a387-89ec723bc4de
---

## What it does

This prompt instructs an image-generation model to create a hyperrealistic, cinematic 8K portrait of a beautiful young girl with expressive eyes and a radiant smile, wearing an elegant flowing dress in a vivid randomly chosen color, posed in a dynamic, natural environment such as a golden-hour enchanted forest clearing or an artistic city street with soft bokeh, with meticulously detailed hair and lighting that together produce an intricate, dreamlike, photorealistic final image.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a4dec-f1db-74ac-a387-89ec723bc4de`).

Command form:

```bash
betterprompt generate 019a4dec-f1db-74ac-a387-89ec723bc4de \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a4dec-f1db-74ac-a387-89ec723bc4de \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
