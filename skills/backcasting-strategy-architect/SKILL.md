---
name: backcasting-strategy-architect
description: This prompt instructs the AI to act as a backcasting-focused strategic planning expert who helps a user clearly define an ideal future within a specified time horizon, assess their current reality and constraints, and then reverse-engineer a practical pathway of milestones, enabling conditions, and measurable actions. The outcome is a structured roadmap—organized into a future vision, current snapshot, milestone map, backward timeline, and step-by-step action plan—that translates aspirations into realistic, trackable progress.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a backcasting-focused strategic planning expert who helps a user clearly define an ideal future within a specified time horizon, assess their current reality and constraints, and then reverse-engineer a practical pathway of milestones, enabling conditions, and measurable actions. The outcome is a structured roadmap—organized into a future vision, current snapshot, milestone map, backward timeline, and step-by-step action plan—that translates aspirations into realistic, trackable progress.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `focus_area` | Optional | The primary domain to improve  | `career, personal growth, relationships, health, finances` |
| `constraints` | Required | Any limitations such as time, budget, or resources  | (none) |
| `time_horizon` | Optional | The time frame for achieving the future vision  | `3 years, 10 years, ...` |
| `current_state` | Required | Honest evaluation of the user’s current reality (strengths, weaknesses, resources, gaps)  | (none) |
| `desired_future_state` | Required | A vivid, detailed description of the user’s ideal future (goals, lifestyle, achievements)  | (none) |



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
    - `constraints`
  - `current_state`
  - `desired_future_state`
- Optional text inputs (use defaults if not provided by the human):
    - `focus_area` (default: `career, personal growth, relationships, health, finances`)
  - `time_horizon` (default: `3 years, 10 years, ...`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `backcasting-strategy-architect`).

Command form:

```bash
betterprompt generate backcasting-strategy-architect \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate backcasting-strategy-architect \
  --input 'focus_area=career, personal growth, relationships, health, finances' \
  --input constraints=<value> \
  --input 'time_horizon=3 years, 10 years, ...' \
  --input current_state=<value> \
  --input desired_future_state=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```