---
name: describe-image
description: It asks the AI to analyze the provided image and produce a clear description of what’s shown, summarizing the key visual elements and the overall scene as the output.
skillVersionId: 019bbbd0-ceac-7481-835f-f2bd306db7b2
---

## What it does

It asks the AI to analyze the provided image and produce a clear description of what’s shown, summarizing the key visual elements and the overall scene as the output.

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
  - Present the human with the default model **`gemini-3-flash`** and its available options. Look up `gemini-3-flash` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"minimal"}`.
  - If the human does not specify, defaults are used: model `gemini-3-flash`, options `{"reasoningEffort":"minimal"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019bbbd0-ceac-7481-835f-f2bd306db7b2`).

Command form:

```bash
betterprompt generate 019bbbd0-ceac-7481-835f-f2bd306db7b2 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-flash`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"minimal"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019bbbd0-ceac-7481-835f-f2bd306db7b2 \
  --model gemini-3-flash \
  --options '{"reasoningEffort":"minimal"}'
```
