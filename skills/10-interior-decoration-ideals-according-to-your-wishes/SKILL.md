---
name: 10-interior-decoration-ideals-according-to-your-wishes
description: This prompt directs the AI to act as a seasoned retail interior designer and generate 10 distinct, fully formed design concepts for a specific type of store, each aligned to a chosen aesthetic, audience, dominant color preference, desired emotional atmosphere, and intended in-store activities. For every concept, the AI delivers a consistent set of details—theme inspiration, a coordinated color palette, a functional spatial layout, recommended materials and textures, and a signature standout feature—resulting in vivid, brand-cohesive, and practical interior design options tailored to the client’s goals.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the AI to act as a seasoned retail interior designer and generate 10 distinct, fully formed design concepts for a specific type of store, each aligned to a chosen aesthetic, audience, dominant color preference, desired emotional atmosphere, and intended in-store activities. For every concept, the AI delivers a consistent set of details—theme inspiration, a coordinated color palette, a functional spatial layout, recommended materials and textures, and a signature standout feature—resulting in vivid, brand-cohesive, and practical interior design options tailored to the client’s goals.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `store_type` | Required |  | (none) |
| `desired_vibe` | Required |  | (none) |
| `intended_use` | Required |  | (none) |
| `primary_color` | Required |  | (none) |
| `desired_feeling` | Required |  | (none) |
| `target_audience` | Required |  | (none) |



### Models and options

This skill's modality is: **`text`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"text"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "text"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:


- Required text inputs:
    - `store_type`
  - `desired_vibe`
  - `intended_use`
  - `primary_color`
  - `desired_feeling`
  - `target_audience`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `10-interior-decoration-ideals-according-to-your-wishes`).

Command form:

```bash
betterprompt generate 10-interior-decoration-ideals-according-to-your-wishes \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 10-interior-decoration-ideals-according-to-your-wishes \
  --input store_type=<value> \
  --input desired_vibe=<value> \
  --input intended_use=<value> \
  --input primary_color=<value> \
  --input desired_feeling=<value> \
  --input target_audience=<value> \
  --model gpt-4o \
  --options '{}'
```