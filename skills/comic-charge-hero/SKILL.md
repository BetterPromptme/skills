---
name: comic-charge-hero
description: This prompt generates a high-energy 2D cartoon comic-book illustration featuring a specified subject charging forward in a chosen action pose. The result is a dynamic, print-ready image with bold black outlines, vivid primary colors, expressive motion lines, exaggerated perspective, and an energetic composition designed for strong visual impact in a 3:2 aspect ratio.
skillVersionId: 01987329-56d9-7447-96fe-22cf112799bd
---

## What it does

This prompt generates a high-energy 2D cartoon comic-book illustration featuring a specified subject charging forward in a chosen action pose. The result is a dynamic, print-ready image with bold black outlines, vivid primary colors, expressive motion lines, exaggerated perspective, and an energetic composition designed for strong visual impact in a 3:2 aspect ratio.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `SUBJECT` | Required |  | (none) |
| `action_pose` | Required |  | (none) |



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
    - `SUBJECT`
  - `action_pose`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01987329-56d9-7447-96fe-22cf112799bd`).

Command form:

```bash
betterprompt generate 01987329-56d9-7447-96fe-22cf112799bd \
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
betterprompt generate 01987329-56d9-7447-96fe-22cf112799bd \
  --input SUBJECT=<value> \
  --input action_pose=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
