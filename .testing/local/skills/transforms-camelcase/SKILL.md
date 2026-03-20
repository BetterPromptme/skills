---
name: transforms-camelcase
description: This prompt asks for a TypeScript-only solution that takes an unknown value and converts any snake_case keys to camelCase recursively, including within nested objects and arrays, returning a transformed structure while preserving non-object values.
skillVersionId: 019a9b3d-9601-712f-b23f-fce84d440369
---

## What it does

This prompt asks for a TypeScript-only solution that takes an unknown value and converts any snake_case keys to camelCase recursively, including within nested objects and arrays, returning a transformed structure while preserving non-object values.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`gemini-3.1-pro-preview`** and its available options. Look up `gemini-3.1-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"high"}`.
  - If the human does not specify, defaults are used: model `gemini-3.1-pro-preview`, options `{"reasoningEffort":"high"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a9b3d-9601-712f-b23f-fce84d440369`).

Command form:

```bash
betterprompt generate 019a9b3d-9601-712f-b23f-fce84d440369 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3.1-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a9b3d-9601-712f-b23f-fce84d440369 \
  --model gemini-3.1-pro-preview \
  --options '{"reasoningEffort":"high"}'
```
