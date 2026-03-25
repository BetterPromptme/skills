---
name: personalized-health-advice-prompt
description: This prompt instructs the assistant to act as an experienced health expert and generate personalized, medically sound wellness guidance using the user’s name, age, gender, weight, and current health condition. The response must follow a fixed structure—greeting, gentle exercise recommendations tailored to the condition, a list of things to avoid, additional practical wellness advice (e.g., nutrition, hydration, rest), and a supportive closing with a reminder to care for one’s health and a thank-you. The outcome is an empathetic, easy-to-follow set of individualized recommendations designed to support recovery and prevent worsening symptoms.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the assistant to act as an experienced health expert and generate personalized, medically sound wellness guidance using the user’s name, age, gender, weight, and current health condition. The response must follow a fixed structure—greeting, gentle exercise recommendations tailored to the condition, a list of things to avoid, additional practical wellness advice (e.g., nutrition, hydration, rest), and a supportive closing with a reminder to care for one’s health and a thank-you. The outcome is an empathetic, easy-to-follow set of individualized recommendations designed to support recovery and prevent worsening symptoms.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Enter_Age` | Required |  | (none) |
| `Enter_Name` | Required |  | (none) |
| `Enter_Gender` | Required |  | (none) |
| `Enter_Weight` | Required |  | (none) |
| `Enter_Present_Condition` | Required |  | (none) |



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
    - `Enter_Age`
  - `Enter_Name`
  - `Enter_Gender`
  - `Enter_Weight`
  - `Enter_Present_Condition`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1`** and its available options. Look up `gpt-4.1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `personalized-health-advice-prompt`).

Command form:

```bash
betterprompt generate personalized-health-advice-prompt \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate personalized-health-advice-prompt \
  --input Enter_Age=<value> \
  --input Enter_Name=<value> \
  --input Enter_Gender=<value> \
  --input Enter_Weight=<value> \
  --input Enter_Present_Condition=<value> \
  --model gpt-4.1 \
  --options '{}'
```