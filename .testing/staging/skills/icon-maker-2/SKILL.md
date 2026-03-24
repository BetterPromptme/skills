---
name: icon-maker-2
description: This prompt instructs an AI image generator to create an icon depicting a specified item, matching a given visual style and using a designated primary color. If the transparency option is enabled, it also requires the icon to have a transparent background, producing a ready-to-use asset suitable for UI or branding.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to create an icon depicting a specified item, matching a given visual style and using a designated primary color. If the transparency option is enabled, it also requires the icon to have a transparent background, producing a ready-to-use asset suitable for UI or branding.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `item` | Required |  | (none) |
| `color` | Optional |  | `red` |
| `tranparent` | Optional |  | `true` |



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
    - `item`
- Optional text inputs (use defaults if not provided by the human):
    - `color` (default: `red`)
  - `tranparent` (default: `true`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `icon-maker-2`).

Command form:

```bash
betterprompt generate icon-maker-2 \
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
betterprompt generate icon-maker-2 \
  --input item=<value> \
  --input color=red \
  --input tranparent=true \
  --model gpt-image-1 \
  --options '{"image":{"quality":0},"quality":"low"}'
```
