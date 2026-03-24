---
name: idea-generator-when-i-feel-stuck
description: This prompt turns the AI into a practical brainstorming partner for an unspecified problem by first gathering a few key details, then generating five progressively more demanding solution ideas. Each idea includes a rapid 15-minute test to validate it quickly, and it concludes by identifying the option with the best effort-to-upside ratio so the user knows what to try first.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt turns the AI into a practical brainstorming partner for an unspecified problem by first gathering a few key details, then generating five progressively more demanding solution ideas. Each idea includes a rapid 15-minute test to validate it quickly, and it concludes by identifying the option with the best effort-to-upside ratio so the user knows what to try first.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `problem` | Required | test | (none) |



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
    - `problem`
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `idea-generator-when-i-feel-stuck`).

Command form:

```bash
betterprompt generate idea-generator-when-i-feel-stuck \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate idea-generator-when-i-feel-stuck \
  --input problem=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"none"}'
```
