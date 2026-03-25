---
name: improve-one-daily-habit
description: This prompt asks the AI to help you replace an unhelpful habit with a healthier one by analyzing your specific habit, its negative impact, and the trigger situation, then redesigning the trigger → action → reward loop into a simple, realistic alternative. The outcome is a concise plan that includes a clear replacement behavior and one practical environmental tweak or mindset anchor to make the new habit easier to follow in the moments you typically slip into the old one.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to help you replace an unhelpful habit with a healthier one by analyzing your specific habit, its negative impact, and the trigger situation, then redesigning the trigger → action → reward loop into a simple, realistic alternative. The outcome is a concise plan that includes a clear replacement behavior and one practical environmental tweak or mindset anchor to make the new habit easier to follow in the moments you typically slip into the old one.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `New_habit` | Required |  | (none) |
| `Describe_habit` | Required |  | (none) |
| `Negative_impact` | Required |  | (none) |
| `common_trigger_or_situation` | Required |  | (none) |



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
    - `New_habit`
  - `Describe_habit`
  - `Negative_impact`
  - `common_trigger_or_situation`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `improve-one-daily-habit`).

Command form:

```bash
betterprompt generate improve-one-daily-habit \
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
betterprompt generate improve-one-daily-habit \
  --input New_habit=<value> \
  --input Describe_habit=<value> \
  --input Negative_impact=<value> \
  --input common_trigger_or_situation=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```