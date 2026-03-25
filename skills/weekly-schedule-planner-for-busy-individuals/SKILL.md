---
name: weekly-schedule-planner-for-busy-individuals
description: This prompt instructs the assistant to act as a time-management and productivity-focused personal assistant and produce a detailed Monday–Sunday weekly timetable that balances work, study (including a Thursday class and homework), steady progress on an internship report toward a weekly deadline, and 2–3 badminton sessions, while guaranteeing 7–8 hours of sleep, scheduled meals, regular short breaks, relaxation blocks, and buffer time for flexibility. The expected outcome is a day-by-day timeline plus a notes section with practical productivity methods, stress-reduction techniques, energy/health guidance, and a scheduled weekly review slot to help the user stay productive without burnout.
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

This prompt instructs the assistant to act as a time-management and productivity-focused personal assistant and produce a detailed Monday–Sunday weekly timetable that balances work, study (including a Thursday class and homework), steady progress on an internship report toward a weekly deadline, and 2–3 badminton sessions, while guaranteeing 7–8 hours of sleep, scheduled meals, regular short breaks, relaxation blocks, and buffer time for flexibility. The expected outcome is a day-by-day timeline plus a notes section with practical productivity methods, stress-reduction techniques, energy/health guidance, and a scheduled weekly review slot to help the user stay productive without burnout.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Describe_Your_Schedule` | Required |  | (none) |



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
    - `Describe_Your_Schedule`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `weekly-schedule-planner-for-busy-individuals`).

Command form:

```bash
betterprompt generate weekly-schedule-planner-for-busy-individuals \
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
betterprompt generate weekly-schedule-planner-for-busy-individuals \
  --input Describe_Your_Schedule=<value> \
  --model gpt-4o \
  --options '{}'
```