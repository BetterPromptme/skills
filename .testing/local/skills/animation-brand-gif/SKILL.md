---
name: animation-brand-gif
description: This prompt instructs an AI to generate a high-quality animated logo reveal for a specified brand name, where swirling light particles coalesce into a clean, futuristic metallic emblem against a deep navy-to-black gradient background. The expected result is a polished, elegant 60fps animation featuring smooth transitions, high contrast, and realistic reflective lighting that highlights the logo’s metallic finish.
skillVersionId: 0199c7b1-cfed-7ed6-b9c4-1e986ba3eb95
---

## What it does

This prompt instructs an AI to generate a high-quality animated logo reveal for a specified brand name, where swirling light particles coalesce into a clean, futuristic metallic emblem against a deep navy-to-black gradient background. The expected result is a polished, elegant 60fps animation featuring smooth transitions, high contrast, and realistic reflective lighting that highlights the logo’s metallic finish.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `brand_name` | Required |  | (none) |



### Models and options

This skill's modality is: **`video`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"video"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "video"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:


- Required text inputs:
    - `brand_name`
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"1280x720"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"1280x720"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199c7b1-cfed-7ed6-b9c4-1e986ba3eb95`).

Command form:

```bash
betterprompt generate 0199c7b1-cfed-7ed6-b9c4-1e986ba3eb95 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"1280x720"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0199c7b1-cfed-7ed6-b9c4-1e986ba3eb95 \
  --input brand_name=<value> \
  --model sora-2 \
  --options '{"seconds":"4","size":"1280x720"}'
```
