---
name: whimsical-food-inspired-bed-design-generator
description: This prompt directs an image-generation model to create a highly detailed, vertical illustration of a cozy, whimsical bedroom scene featuring a bed stylized as an oversized food item, rendered with soft plush materials, realistic fabric folds, and fluffy pillows. The resulting image should feel dreamy and inviting, lit by warm morning sunlight filtering through sheer curtains, and set against a wooden floor for a natural, homey atmosphere.
skillVersionId: 01983031-b9cc-724a-9c32-2ddacce482fe
---

## What it does

This prompt directs an image-generation model to create a highly detailed, vertical illustration of a cozy, whimsical bedroom scene featuring a bed stylized as an oversized food item, rendered with soft plush materials, realistic fabric folds, and fluffy pillows. The resulting image should feel dreamy and inviting, lit by warm morning sunlight filtering through sheer curtains, and set against a wooden floor for a natural, homey atmosphere.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `INSERT_FOOD_ITEM` | Required |  | (none) |



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
    - `INSERT_FOOD_ITEM`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01983031-b9cc-724a-9c32-2ddacce482fe`).

Command form:

```bash
betterprompt generate 01983031-b9cc-724a-9c32-2ddacce482fe \
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
betterprompt generate 01983031-b9cc-724a-9c32-2ddacce482fe \
  --input INSERT_FOOD_ITEM=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
