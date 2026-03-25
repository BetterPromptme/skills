---
name: personalized-high-achiever-study-plan
description: This prompt asks the AI to act as an academic coach that tailors proven high-achiever study habits to the user’s specific goal, challenges, available time, and learning style, producing a structured plan that includes a timed daily schedule, specific evidence-based techniques, mindset reframes matched to the user’s obstacles, recommended resources, and a clear 7-day day-by-day action plan the user can follow immediately.
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

This prompt asks the AI to act as an academic coach that tailors proven high-achiever study habits to the user’s specific goal, challenges, available time, and learning style, producing a structured plan that includes a timed daily schedule, specific evidence-based techniques, mindset reframes matched to the user’s obstacles, recommended resources, and a clear 7-day day-by-day action plan the user can follow immediately.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `insert_your_style` | Required |  | (none) |
| `insert_your_goal_here` | Optional |  | `master calculus` |
| `insert_challenges_here` | Optional |  | `no system` |
| `insert_daily_or_weekly_time` | Required |  | (none) |



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
    - `insert_your_style`
  - `insert_daily_or_weekly_time`
- Optional text inputs (use defaults if not provided by the human):
    - `insert_your_goal_here` (default: `master calculus`)
  - `insert_challenges_here` (default: `no system`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `personalized-high-achiever-study-plan`).

Command form:

```bash
betterprompt generate personalized-high-achiever-study-plan \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate personalized-high-achiever-study-plan \
  --input insert_your_style=<value> \
  --input 'insert_your_goal_here=master calculus' \
  --input 'insert_challenges_here=no system' \
  --input insert_daily_or_weekly_time=<value> \
  --model gpt-5-mini \
  --options '{}'
```