---
name: product-spec-generator
description: This prompt instructs the AI to produce a structured feature specification document for a proposed product feature, using provided inputs such as target users, key functionalities, technical considerations, and estimated development effort. The resulting output is a clear, implementation-ready spec organized into standard product and engineering sections—overview, goals with success metrics, user stories, acceptance criteria mapped to those stories, a high-level technical design, and future considerations—so developers can begin building with aligned requirements and scope.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to produce a structured feature specification document for a proposed product feature, using provided inputs such as target users, key functionalities, technical considerations, and estimated development effort. The resulting output is a clear, implementation-ready spec organized into standard product and engineering sections—overview, goals with success metrics, user stories, acceptance criteria mapped to those stories, a high-level technical design, and future considerations—so developers can begin building with aligned requirements and scope.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `feature_idea` | Optional |  | `Shared Notes` |
| `target_users` | Optional |  | `Remote workers` |
| `development_effort` | Optional |  | `30` |
| `key_functionalities` | Optional |  | `Track expenses and split bills with roommates` |
| `technical_considerations` | Optional |  | `Web app, real-time updates` |



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

- Optional text inputs (use defaults if not provided by the human):
    - `feature_idea` (default: `Shared Notes`)
  - `target_users` (default: `Remote workers`)
  - `development_effort` (default: `30`)
  - `key_functionalities` (default: `Track expenses and split bills with roommates`)
  - `technical_considerations` (default: `Web app, real-time updates`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `product-spec-generator`).

Command form:

```bash
betterprompt generate product-spec-generator \
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
betterprompt generate product-spec-generator \
  --input 'feature_idea=Shared Notes' \
  --input 'target_users=Remote workers' \
  --input development_effort=30 \
  --input 'key_functionalities=Track expenses and split bills with roommates' \
  --input 'technical_considerations=Web app, real-time updates' \
  --model gpt-4.1-mini \
  --options '{}'
```