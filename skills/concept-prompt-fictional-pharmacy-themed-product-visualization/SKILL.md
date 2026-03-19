---
name: concept-prompt-fictional-pharmacy-themed-product-visualization
description: Generates a square, modern product-photo style image of a fictional pharmaceutical package branded for a specified pharmacy, with a minimalist box on the left displaying the given product name and a witty dosing line, alongside a silver blister pack holding 6–10 themed pills or capsules shaped like the provided icon description, all set against a neutral background with soft lighting and sharp focus.
skillVersionId: 0196f81c-870f-79b5-ab8f-c357a8ede304
---

## What it does

Generates a square, modern product-photo style image of a fictional pharmaceutical package branded for a specified pharmacy, with a minimalist box on the left displaying the given product name and a witty dosing line, alongside a silver blister pack holding 6–10 themed pills or capsules shaped like the provided icon description, all set against a neutral background with soft lighting and sharp focus.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Brand_Name` | Required |  | (none) |
| `PRODUCT_NAME` | Required |  | (none) |
| `describe_icon` | Required |  | (none) |
| `Take_one_type_daily` | Required |  | (none) |



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
    - `Brand_Name`
  - `PRODUCT_NAME`
  - `describe_icon`
  - `Take_one_type_daily`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0196f81c-870f-79b5-ab8f-c357a8ede304`).

Command form:

```bash
betterprompt generate 0196f81c-870f-79b5-ab8f-c357a8ede304 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0196f81c-870f-79b5-ab8f-c357a8ede304 \
  --input Brand_Name=<value> \
  --input PRODUCT_NAME=<value> \
  --input describe_icon=<value> \
  --input Take_one_type_daily=<value> \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","image":{"size":0,"quality":0},"quality":"low"}'
```
