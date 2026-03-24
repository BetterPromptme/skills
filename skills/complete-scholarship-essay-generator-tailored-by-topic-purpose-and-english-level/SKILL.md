---
name: complete-scholarship-essay-generator-tailored-by-topic-purpose-and-english-level
description: This prompt instructs the AI to produce a full, polished scholarship application essay tailored to a specific topic, university, purpose, language proficiency level, and word count. It incorporates optional personal anecdotes, achievements, goals, and the university’s mission to craft a sincere first-person narrative with a clear introduction, body, and conclusion. The outcome is a compelling, well-structured essay that demonstrates motivation, fit with the institution’s values, and the impact of the scholarship on the applicant’s future, while staying close to the requested length and appropriate to the stated English level.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to produce a full, polished scholarship application essay tailored to a specific topic, university, purpose, language proficiency level, and word count. It incorporates optional personal anecdotes, achievements, goals, and the university’s mission to craft a sincere first-person narrative with a clear introduction, body, and conclusion. The outcome is a compelling, well-structured essay that demonstrates motivation, fit with the institution’s values, and the impact of the scholarship on the applicant’s future, while staying close to the requested length and appropriate to the stated English level.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CEFR_Level` | Required |  | (none) |
| `Word_Count` | Required |  | (none) |
| `Essay_Topic` | Required |  | (none) |
| `Future_Goals` | Required |  | (none) |
| `University_Name` | Required |  | (none) |
| `Purpose_of_the_essay` | Required |  | (none) |
| `Key_Achievements_Involvements` | Required |  | (none) |
| `University’s_Values_or_Mission` | Required |  | (none) |
| `A_specific_personal_story_or_background_experience_to_include` | Required |  | (none) |



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
    - `CEFR_Level`
  - `Word_Count`
  - `Essay_Topic`
  - `Future_Goals`
  - `University_Name`
  - `Purpose_of_the_essay`
  - `Key_Achievements_Involvements`
  - `University’s_Values_or_Mission`
  - `A_specific_personal_story_or_background_experience_to_include`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `complete-scholarship-essay-generator-tailored-by-topic-purpose-and-english-level`).

Command form:

```bash
betterprompt generate complete-scholarship-essay-generator-tailored-by-topic-purpose-and-english-level \
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
betterprompt generate complete-scholarship-essay-generator-tailored-by-topic-purpose-and-english-level \
  --input CEFR_Level=<value> \
  --input Word_Count=<value> \
  --input Essay_Topic=<value> \
  --input Future_Goals=<value> \
  --input University_Name=<value> \
  --input Purpose_of_the_essay=<value> \
  --input Key_Achievements_Involvements=<value> \
  --input University’s_Values_or_Mission=<value> \
  --input A_specific_personal_story_or_background_experience_to_include=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
