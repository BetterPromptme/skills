---
name: pastel-kawaii-vinyl-figure
description: This prompt instructs an image model to generate a studio-style product photo of a kawaii pastel vinyl figure depicting a user-specified character or object, with rounded features, big eyes, and a friendly expression in a lavender–pink–baby-blue palette. It also requests that a chosen name be incorporated as a stylized detail on the figure or base, and includes matching toy packaging in the background with themed artwork, shot with soft lighting and minimal shadows.
skillVersionId: 0197ce58-b972-7b81-a6b7-6eb035558cd9
---

## What it does

This prompt instructs an image model to generate a studio-style product photo of a kawaii pastel vinyl figure depicting a user-specified character or object, with rounded features, big eyes, and a friendly expression in a lavender–pink–baby-blue palette. It also requests that a chosen name be incorporated as a stylized detail on the figure or base, and includes matching toy packaging in the background with themed artwork, shot with soft lighting and minimal shadows.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `The_name_you’d_like_to_use` | Required |  | (none) |
| `INSERT_YOUR_CHARACTER_OR_OBJECT` | Required |  | (none) |



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
    - `The_name_you’d_like_to_use`
  - `INSERT_YOUR_CHARACTER_OR_OBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":1},"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":1},"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0197ce58-b972-7b81-a6b7-6eb035558cd9`).

Command form:

```bash
betterprompt generate 0197ce58-b972-7b81-a6b7-6eb035558cd9 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":1},"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0197ce58-b972-7b81-a6b7-6eb035558cd9 \
  --input The_name_you’d_like_to_use=<value> \
  --input INSERT_YOUR_CHARACTER_OR_OBJECT=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":1},"quality":"medium"}'
```
