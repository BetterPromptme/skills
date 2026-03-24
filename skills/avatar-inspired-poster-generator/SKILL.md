---
name: avatar-inspired-poster-generator
description: This prompt instructs an AI to act as an image director and design a cinematic, highly detailed movie-poster-style artwork inspired by the Avatar film universe, using provided inputs for title, characters, theme, visual elements, color palette, and optional tagline. The expected outcome is a cohesive, official-looking promotional poster with epic composition, glowing bioluminescent atmosphere, and clear typography placement for the title and tagline, all aligned to the specified mood and palette.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to act as an image director and design a cinematic, highly detailed movie-poster-style artwork inspired by the Avatar film universe, using provided inputs for title, characters, theme, visual elements, color palette, and optional tagline. The expected outcome is a cohesive, official-looking promotional poster with epic composition, glowing bioluminescent atmosphere, and clear typography placement for the title and tagline, all aligned to the specified mood and palette.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Tagline` | Required |  | (none) |
| `Theme_Mood` | Required |  | (none) |
| `Poster_Title` | Required |  | (none) |
| `Color_Palette` | Required |  | (none) |
| `Main_Characters` | Required |  | (none) |
| `Visual_Elements` | Required |  | (none) |



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
    - `Tagline`
  - `Theme_Mood`
  - `Poster_Title`
  - `Color_Palette`
  - `Main_Characters`
  - `Visual_Elements`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `avatar-inspired-poster-generator`).

Command form:

```bash
betterprompt generate avatar-inspired-poster-generator \
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
betterprompt generate avatar-inspired-poster-generator \
  --input Tagline=<value> \
  --input Theme_Mood=<value> \
  --input Poster_Title=<value> \
  --input Color_Palette=<value> \
  --input Main_Characters=<value> \
  --input Visual_Elements=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
