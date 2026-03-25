---
name: weekly-workflow-automator-for-solo-founders
description: This prompt instructs the AI to act as an automation architect who reviews provided details about a user’s business type, weekly activities, current tools, and biggest time-wasters, then identifies five likely repetitive weekly tasks and outlines practical ways to fully or partially automate each using ChatGPT and free/no-code tools (e.g., Notion, Zapier/Make, Google Workspace), including specific tool recommendations, step-by-step workflow ideas, time-saving tactics, and a few creative “bonus” automations the user may not have considered.
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

This prompt instructs the AI to act as an automation architect who reviews provided details about a user’s business type, weekly activities, current tools, and biggest time-wasters, then identifies five likely repetitive weekly tasks and outlines practical ways to fully or partially automate each using ChatGPT and free/no-code tools (e.g., Notion, Zapier/Make, Google Workspace), including specific tool recommendations, step-by-step workflow ideas, time-saving tactics, and a few creative “bonus” automations the user may not have considered.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Type_of_business` | Required |  | (none) |
| `Weekly_activities` | Required |  | (none) |
| `Tools_I_currently_use` | Required |  | (none) |
| `My_biggest_time-wasting_tasks` | Required |  | (none) |



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
    - `Type_of_business`
  - `Weekly_activities`
  - `Tools_I_currently_use`
  - `My_biggest_time-wasting_tasks`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `weekly-workflow-automator-for-solo-founders`).

Command form:

```bash
betterprompt generate weekly-workflow-automator-for-solo-founders \
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
betterprompt generate weekly-workflow-automator-for-solo-founders \
  --input Type_of_business=<value> \
  --input Weekly_activities=<value> \
  --input Tools_I_currently_use=<value> \
  --input My_biggest_time-wasting_tasks=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```