---
name: proposal-for-weset-english-center-ielts-event
description: This prompt requests an event proposal for an offline IELTS-learning talkshow aimed at university students, outlining the objective, target audience, agenda and engagement plan, measurable goals, budget scope, task timeline with responsibilities, and agency deliverables (costing, risk management, and reporting). The result is a structured, ready-to-use talkshow proposal document that can be customized by filling in placeholders such as names, dates, university details, attendee numbers, and team roles.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt requests an event proposal for an offline IELTS-learning talkshow aimed at university students, outlining the objective, target audience, agenda and engagement plan, measurable goals, budget scope, task timeline with responsibilities, and agency deliverables (costing, risk management, and reporting). The result is a structured, ready-to-use talkshow proposal document that can be customized by filling in placeholders such as names, dates, university details, attendee numbers, and team roles.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Date` | Required |  | (none) |
| `Grade` | Required |  | (none) |
| `Agency` | Required |  | (none) |
| `Deadline` | Required |  | (none) |
| `Your_Name` | Required |  | (none) |
| `WESET_team` | Required |  | (none) |
| `Project_Name` | Required |  | (none) |
| `Campus_Location` | Required |  | (none) |
| `University_Name` | Required |  | (none) |
| `Number_of_students` | Required |  | (none) |



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
    - `Date`
  - `Grade`
  - `Agency`
  - `Deadline`
  - `Your_Name`
  - `WESET_team`
  - `Project_Name`
  - `Campus_Location`
  - `University_Name`
  - `Number_of_students`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `proposal-for-weset-english-center-ielts-event`).

Command form:

```bash
betterprompt generate proposal-for-weset-english-center-ielts-event \
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
betterprompt generate proposal-for-weset-english-center-ielts-event \
  --input Date=<value> \
  --input Grade=<value> \
  --input Agency=<value> \
  --input Deadline=<value> \
  --input Your_Name=<value> \
  --input WESET_team=<value> \
  --input Project_Name=<value> \
  --input Campus_Location=<value> \
  --input University_Name=<value> \
  --input Number_of_students=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
