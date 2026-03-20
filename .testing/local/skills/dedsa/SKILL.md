---
name: dedsa
description: This prompt instructs the AI to produce a single short paragraph explaining the goal of an AI instruction and the result it is meant to generate, focusing only on the task and expected outcome while avoiding any disclosure or quotation of the original prompt text.
skillVersionId: 019b07c4-6066-73d9-a81b-1e379a7227b7
---

## What it does

This prompt instructs the AI to produce a single short paragraph explaining the goal of an AI instruction and the result it is meant to generate, focusing only on the task and expected outcome while avoiding any disclosure or quotation of the original prompt text.

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
  - Present the human with the default model **`gpt-4.1`** and its available options. Look up `gpt-4.1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019b07c4-6066-73d9-a81b-1e379a7227b7`).

Command form:

```bash
betterprompt generate 019b07c4-6066-73d9-a81b-1e379a7227b7 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019b07c4-6066-73d9-a81b-1e379a7227b7 \
  --model gpt-4.1 \
  --options '{}'
```
