---
name: geometric-dream-core
description: This prompt instructs the AI to generate a clean, minimalist geometric illustration featuring a specified subject centered on a lightly textured background, rendered as an elegant, futuristic crystal formed by fine intersecting lines with blue-violet gradients and a soft neon glow. The resulting image includes subtle dots and sparkles for a dreamy cosmic atmosphere, uses smooth pastel lighting with a grainy finish for depth, maintains symmetrical, uncluttered composition, and contains no text or typography.
skillVersionId: 0199d66a-25a6-79b9-9973-6f2fe428d20d
---

## What it does

This prompt instructs the AI to generate a clean, minimalist geometric illustration featuring a specified subject centered on a lightly textured background, rendered as an elegant, futuristic crystal formed by fine intersecting lines with blue-violet gradients and a soft neon glow. The resulting image includes subtle dots and sparkles for a dreamy cosmic atmosphere, uses smooth pastel lighting with a grainy finish for depth, maintains symmetrical, uncluttered composition, and contains no text or typography.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `subject` | Optional |  | `a floating pyramid` |



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

- Optional text inputs (use defaults if not provided by the human):
    - `subject` (default: `a floating pyramid`)
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199d66a-25a6-79b9-9973-6f2fe428d20d`).

Command form:

```bash
betterprompt generate 0199d66a-25a6-79b9-9973-6f2fe428d20d \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0199d66a-25a6-79b9-9973-6f2fe428d20d \
  --input 'subject=a floating pyramid' \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"low"}'
```
