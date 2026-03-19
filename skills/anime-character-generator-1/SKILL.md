---
name: anime-character-generator-1
description: This prompt instructs an AI image generator to produce a polished, high-quality anime character illustration by filling in the character description, art style, pose, and mood variables, then applying specific visual constraints such as clean line work, expressive facial detail, appropriate proportions, cohesive composition, subtle complementary background, and mood-matched lighting and color, resulting in a vibrant, ready-to-use character artwork without any text or watermarks.
skillVersionId: 019ce157-59ea-74be-8742-a727efed7ae0
---

## What it does

This prompt instructs an AI image generator to produce a polished, high-quality anime character illustration by filling in the character description, art style, pose, and mood variables, then applying specific visual constraints such as clean line work, expressive facial detail, appropriate proportions, cohesive composition, subtle complementary background, and mood-matched lighting and color, resulting in a vibrant, ready-to-use character artwork without any text or watermarks.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `mood` | Required | The character's expression and overall mood Allowed options: fierce, cheerful, determined, mysterious, melancholic | (none) |
| `pose` | Required | The character's pose and body position Allowed options: action, sitting, dramatic, portrait, standing | (none) |
| `style` | Required | The anime art style to use for the illustration Allowed options: chibi, retro, shojo, shonen, realistic | (none) |
| `description` | Optional | Describe the character's appearance, outfit, and distinctive features | `A young warrior with silver hair and blue eyes, wearing a dark cloak over light armor` |



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
    - `mood`
  - `pose`
  - `style`
- Optional text inputs (use defaults if not provided by the human):
    - `description` (default: `A young warrior with silver hair and blue eyes, wearing a dark cloak over light armor`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019ce157-59ea-74be-8742-a727efed7ae0`).

Command form:

```bash
betterprompt generate 019ce157-59ea-74be-8742-a727efed7ae0 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019ce157-59ea-74be-8742-a727efed7ae0 \
  --input mood=fierce \
  --input pose=action \
  --input style=chibi \
  --input 'description=A young warrior with silver hair and blue eyes, wearing a dark cloak over light armor' \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"low"}'
```
