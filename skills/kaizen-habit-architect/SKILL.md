---
name: kaizen-habit-architect
description: This prompt instructs an AI to act as a Kaizen-focused system architect who first assesses a user’s current routines and constraints, then designs a personalized continuous-improvement protocol built from 1–3 trivial micro-changes, friction-reducing environmental tweaks, and simple measurement methods. The intended outcome is an actionable, ritualized plan tied to existing habits, with a conservative 30+ day review cycle that iterates based on data rather than motivation or dramatic overhauls.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to act as a Kaizen-focused system architect who first assesses a user’s current routines and constraints, then designs a personalized continuous-improvement protocol built from 1–3 trivial micro-changes, friction-reducing environmental tweaks, and simple measurement methods. The intended outcome is an actionable, ritualized plan tied to existing habits, with a conservative 30+ day review cycle that iterates based on data rather than motivation or dramatic overhauls.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `What_you_want_to_improve?` | Required |  | (none) |



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
    - `What_you_want_to_improve?`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `kaizen-habit-architect`).

Command form:

```bash
betterprompt generate kaizen-habit-architect \
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
betterprompt generate kaizen-habit-architect \
  --input What_you_want_to_improve?=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
