---
name: story-based-puzzle-generator
description: This prompt instructs the AI to generate a themed puzzle of a specified type and difficulty, tailored to a stated objective and optional mechanics and audience constraints. The response must include the complete puzzle text, a full solution, and a defined number of progressively helpful hints, all presented in a fixed sectioned format.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate a themed puzzle of a specified type and difficulty, tailored to a stated objective and optional mechanics and audience constraints. The response must include the complete puzzle text, a full solution, and a defined number of progressively helpful hints, all presented in a fixed sectioned format.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `goal` | Required |  | (none) |
| `theme` | Required |  | (none) |
| `audience` | Required |  | (none) |
| `numHints` | Required |  | (none) |
| `mechanics` | Required |  | (none) |
| `difficulty` | Required |  | (none) |
| `puzzleType` | Required |  | (none) |



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
    - `goal`
  - `theme`
  - `audience`
  - `numHints`
  - `mechanics`
  - `difficulty`
  - `puzzleType`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `story-based-puzzle-generator`).

Command form:

```bash
betterprompt generate story-based-puzzle-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate story-based-puzzle-generator \
  --input goal=<value> \
  --input theme=<value> \
  --input audience=<value> \
  --input numHints=<value> \
  --input mechanics=<value> \
  --input difficulty=<value> \
  --input puzzleType=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```