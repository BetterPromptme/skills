---
name: minimalist-flat-icon-design
description: This prompt instructs an AI to generate a minimalist, modern flat icon representing a specified topic, using clean symmetrical shapes, bold outlines, and a limited 2–3 color palette drawn from provided color choices. The expected outcome is a scalable, digital-ready, vector-like icon suitable for apps or websites, delivered on a fully transparent (or solid white) background with no extraneous elements.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to generate a minimalist, modern flat icon representing a specified topic, using clean symmetrical shapes, bold outlines, and a limited 2–3 color palette drawn from provided color choices. The expected outcome is a scalable, digital-ready, vector-like icon suitable for apps or websites, delivered on a fully transparent (or solid white) background with no extraneous elements.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Topic` | Required |  | (none) |
| `Color_1` | Required |  | (none) |
| `Color_2` | Required |  | (none) |
| `Color_3` | Required |  | (none) |



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
    - `Topic`
  - `Color_1`
  - `Color_2`
  - `Color_3`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `minimalist-flat-icon-design`).

Command form:

```bash
betterprompt generate minimalist-flat-icon-design \
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
betterprompt generate minimalist-flat-icon-design \
  --input Topic=<value> \
  --input Color_1=<value> \
  --input Color_2=<value> \
  --input Color_3=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":0},"quality":"low"}'
```
