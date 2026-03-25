---
name: set-your-daily-direction
description: This prompt asks the AI to act as an emotionally intelligent productivity coach who turns a user’s long-term goal and today’s constraints (time and energy) into a single, concrete micro-action that’s easy to start and designed to build momentum. It also requires the AI to provide an emotionally resonant mindset reframe, a grounded motivational tie-back to the user’s bigger transformation, and a strong closing line that sparks immediate action. The outcome is a brief, layered coaching response that reduces resistance, clarifies the next step, and helps the user feel supported while taking meaningful progress today.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt asks the AI to act as an emotionally intelligent productivity coach who turns a user’s long-term goal and today’s constraints (time and energy) into a single, concrete micro-action that’s easy to start and designed to build momentum. It also requires the AI to provide an emotionally resonant mindset reframe, a grounded motivational tie-back to the user’s bigger transformation, and a strong closing line that sparks immediate action. The outcome is a brief, layered coaching response that reduces resistance, clarifies the next step, and helps the user feel supported while taking meaningful progress today.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Energy_level` | Required |  | (none) |
| `Time_available` | Required |  | (none) |
| `long_term_goal` | Required |  | (none) |
| `Practical_reason` | Required |  | (none) |
| `Your_planned_action` | Required |  | (none) |



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
    - `Energy_level`
  - `Time_available`
  - `long_term_goal`
  - `Practical_reason`
  - `Your_planned_action`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `set-your-daily-direction`).

Command form:

```bash
betterprompt generate set-your-daily-direction \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate set-your-daily-direction \
  --input Energy_level=<value> \
  --input Time_available=<value> \
  --input long_term_goal=<value> \
  --input Practical_reason=<value> \
  --input Your_planned_action=<value> \
  --model gpt-4o \
  --options '{}'
```