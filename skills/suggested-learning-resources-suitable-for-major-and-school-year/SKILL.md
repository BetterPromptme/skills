---
name: suggested-learning-resources-suitable-for-major-and-school-year
description: This prompt asks the AI to act as a personalized learning advisor by using the student’s year, major, and target subject to suggest high-quality resources—such as books, courses, websites, and YouTube channels—suited to their current proficiency and long-term objectives. The outcome is a curated, level-appropriate study roadmap with recommended materials that align with the learner’s academic background and goals.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to act as a personalized learning advisor by using the student’s year, major, and target subject to suggest high-quality resources—such as books, courses, websites, and YouTube channels—suited to their current proficiency and long-term objectives. The outcome is a curated, level-appropriate study roadmap with recommended materials that align with the learner’s academic background and goals.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `YEAR` | Required |  | (none) |
| `MAJOR` | Required |  | (none) |
| `SUBJECT` | Required |  | (none) |



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
    - `YEAR`
  - `MAJOR`
  - `SUBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `suggested-learning-resources-suitable-for-major-and-school-year`).

Command form:

```bash
betterprompt generate suggested-learning-resources-suitable-for-major-and-school-year \
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
betterprompt generate suggested-learning-resources-suitable-for-major-and-school-year \
  --input YEAR=<value> \
  --input MAJOR=<value> \
  --input SUBJECT=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```