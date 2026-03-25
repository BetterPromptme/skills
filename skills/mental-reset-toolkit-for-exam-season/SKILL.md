---
name: mental-reset-toolkit-for-exam-season
description: This prompt asks the AI to use the user’s stated stress level, triggers, and usual relaxation method to generate a structured 7-day mental wellness plan for exam season, written in a calm, high-achieving friend’s voice. The result is a day-by-day schedule that includes a consistent 3-minute mental reset habit, tailored motivational quotes or affirmations, grounding strategies to prevent burnout, and a brief daily reminder to support emotional balance, delivered succinctly without greetings or summaries.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to use the user’s stated stress level, triggers, and usual relaxation method to generate a structured 7-day mental wellness plan for exam season, written in a calm, high-achieving friend’s voice. The result is a day-by-day schedule that includes a consistent 3-minute mental reset habit, tailored motivational quotes or affirmations, grounding strategies to prevent burnout, and a brief daily reminder to support emotional balance, delivered succinctly without greetings or summaries.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Stress_triggers` | Required |  | (none) |
| `Current_stress_level` | Required |  | (none) |
| `My_usual_way_to_relax` | Required |  | (none) |



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
    - `Stress_triggers`
  - `Current_stress_level`
  - `My_usual_way_to_relax`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `mental-reset-toolkit-for-exam-season`).

Command form:

```bash
betterprompt generate mental-reset-toolkit-for-exam-season \
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
betterprompt generate mental-reset-toolkit-for-exam-season \
  --input Stress_triggers=<value> \
  --input Current_stress_level=<value> \
  --input My_usual_way_to_relax=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```