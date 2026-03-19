---
name: urban-chibi-portrait-generator-bold-cartoon-style
description: This prompt instructs an AI image generator to produce a sticker-ready, square-format cartoon full-body portrait of a specified character rendered in a bold, urban chibi style, with customizable expression, pose, outfit, and accessories. The result is a clean vector-like illustration featuring thick black outlines, vibrant flat colors on a white background, and simplified facial details, designed to convey an energetic, modern personality.
skillVersionId: 01982fdc-4718-77cc-9001-93a2b3f04181
---

## What it does

This prompt instructs an AI image generator to produce a sticker-ready, square-format cartoon full-body portrait of a specified character rendered in a bold, urban chibi style, with customizable expression, pose, outfit, and accessories. The result is a clean vector-like illustration featuring thick black outlines, vibrant flat colors on a white background, and simplified facial details, designed to convey an energetic, modern personality.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Pose` | Required |  | (none) |
| `Expression` | Required |  | (none) |
| `accessories` | Required |  | (none) |
| `CHARACTER_NAME` | Required |  | (none) |



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
    - `Pose`
  - `Expression`
  - `accessories`
  - `CHARACTER_NAME`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01982fdc-4718-77cc-9001-93a2b3f04181`).

Command form:

```bash
betterprompt generate 01982fdc-4718-77cc-9001-93a2b3f04181 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01982fdc-4718-77cc-9001-93a2b3f04181 \
  --input Pose=<value> \
  --input Expression=<value> \
  --input accessories=<value> \
  --input CHARACTER_NAME=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":0},"quality":"low"}'
```
