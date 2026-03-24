---
name: a-weekly-plan-for-any-roles
description: This prompt instructs the AI to create a realistic, professional weekly work plan for a specified role using a provided task list, distributing work across the week with clear daily time blocks that include deadlines, meetings, focused work sessions, and short breaks. The result is an easy-to-read schedule that balances workload within normal working hours, identifies key objectives and deliverables for each block, and highlights the week’s top priorities to ensure effective execution and productivity.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a realistic, professional weekly work plan for a specified role using a provided task list, distributing work across the week with clear daily time blocks that include deadlines, meetings, focused work sessions, and short breaks. The result is an easy-to-read schedule that balances workload within normal working hours, identifies key objectives and deliverables for each block, and highlights the week’s top priorities to ensure effective execution and productivity.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `your_role` | Required |  | (none) |
| `Tasks_need_to_be_done` | Required |  | (none) |



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
    - `your_role`
  - `Tasks_need_to_be_done`
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `a-weekly-plan-for-any-roles`).

Command form:

```bash
betterprompt generate a-weekly-plan-for-any-roles \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate a-weekly-plan-for-any-roles \
  --input your_role=<value> \
  --input Tasks_need_to_be_done=<value> \
  --model gpt-5 \
  --options '{"reasoningEffort":"low"}'
```
