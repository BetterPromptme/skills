---
name: travel-planner
description: This prompt instructs the AI to create a detailed, category-organized packing list in markdown for a trip, customized to the specified destination, trip duration, trip type, expected weather, and planned activities. The result is a comprehensive checklist with clear headings and relevant quantities that covers clothing, toiletries, electronics, medications, documents, and other essentials appropriate to the trip context.
skillVersionId: 01979b27-a861-7873-9c35-0aecf965bf1c
---

## What it does

This prompt instructs the AI to create a detailed, category-organized packing list in markdown for a trip, customized to the specified destination, trip duration, trip type, expected weather, and planned activities. The result is a comprehensive checklist with clear headings and relevant quantities that covers clothing, toiletries, electronics, medications, documents, and other essentials appropriate to the trip context.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `duration` | Optional |  | `7 days` |
| `trip_type` | Optional |  | `leisure` |
| `activities` | Required |  | (none) |
| `destination` | Optional |  | `Paris` |
| `weather_condition` | Optional |  | `cold` |



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
    - `activities`
- Optional text inputs (use defaults if not provided by the human):
    - `duration` (default: `7 days`)
  - `trip_type` (default: `leisure`)
  - `destination` (default: `Paris`)
  - `weather_condition` (default: `cold`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01979b27-a861-7873-9c35-0aecf965bf1c`).

Command form:

```bash
betterprompt generate 01979b27-a861-7873-9c35-0aecf965bf1c \
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
betterprompt generate 01979b27-a861-7873-9c35-0aecf965bf1c \
  --input 'duration=7 days' \
  --input trip_type=leisure \
  --input activities=<value> \
  --input destination=Paris \
  --input weather_condition=cold \
  --model gpt-4.1-mini \
  --options '{}'
```
