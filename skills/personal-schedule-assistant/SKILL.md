---
name: personal-schedule-assistant
description: This prompt gathers your profession, fixed work hours and workdays, days off, and the additional commitments you want to prioritize (a personal project, a subject you’re studying, and preferred entertainment). Using those details, it enables an AI to generate a balanced weekly time plan that fits around your work schedule and intentionally allocates dedicated blocks for each goal and leisure activity, especially leveraging your days off.
skillVersionId: 0197eeba-a566-7f29-8b5a-3bbc64360a30
---

## What it does

This prompt gathers your profession, fixed work hours and workdays, days off, and the additional commitments you want to prioritize (a personal project, a subject you’re studying, and preferred entertainment). Using those details, it enables an AI to generate a balanced weekly time plan that fits around your work schedule and intentionally allocates dedicated blocks for each goal and leisure activity, especially leveraging your days off.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `subject` | Required |  | (none) |
| `end_time` | Required |  | (none) |
| `start_time` | Required |  | (none) |
| `entertainment` | Required |  | (none) |
| `day_of_the_week` | Required |  | (none) |
| `main_profession` | Required |  | (none) |
| `specific_personal_project` | Required |  | (none) |
| `days_off_from_work_or_school` | Required |  | (none) |



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
    - `subject`
  - `end_time`
  - `start_time`
  - `entertainment`
  - `day_of_the_week`
  - `main_profession`
  - `specific_personal_project`
  - `days_off_from_work_or_school`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0197eeba-a566-7f29-8b5a-3bbc64360a30`).

Command form:

```bash
betterprompt generate 0197eeba-a566-7f29-8b5a-3bbc64360a30 \
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
betterprompt generate 0197eeba-a566-7f29-8b5a-3bbc64360a30 \
  --input subject=<value> \
  --input end_time=<value> \
  --input start_time=<value> \
  --input entertainment=<value> \
  --input day_of_the_week=<value> \
  --input main_profession=<value> \
  --input specific_personal_project=<value> \
  --input days_off_from_work_or_school=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
