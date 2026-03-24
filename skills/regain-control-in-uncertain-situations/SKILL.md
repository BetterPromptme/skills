---
name: regain-control-in-uncertain-situations
description: This prompt asks the AI to help the user move from feeling stuck and frustrated toward a calmer, more intentional response by taking in their current emotion, what’s been happening, and the part they can’t control. The AI’s task is to provide three supportive outputs in a compassionate tone: a gentle reframe that validates the feelings while shifting perspective, one small actionable step the user can take today to regain a sense of agency or clarity, and a brief reminder they can repeat throughout the day to stay emotionally grounded.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to help the user move from feeling stuck and frustrated toward a calmer, more intentional response by taking in their current emotion, what’s been happening, and the part they can’t control. The AI’s task is to provide three supportive outputs in a compassionate tone: a gentle reframe that validates the feelings while shifting perspective, one small actionable step the user can take today to regain a sense of agency or clarity, and a brief reminder they can repeat throughout the day to stay emotionally grounded.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Current_emotion` | Required |  | (none) |
| `Uncontrollable_factor` | Required |  | (none) |
| `what_is_been_going_on` | Required |  | (none) |



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
    - `Current_emotion`
  - `Uncontrollable_factor`
  - `what_is_been_going_on`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `regain-control-in-uncertain-situations`).

Command form:

```bash
betterprompt generate regain-control-in-uncertain-situations \
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
betterprompt generate regain-control-in-uncertain-situations \
  --input Current_emotion=<value> \
  --input Uncontrollable_factor=<value> \
  --input what_is_been_going_on=<value> \
  --model gpt-4o \
  --options '{}'
```
