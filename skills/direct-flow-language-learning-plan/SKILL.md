---
name: direct-flow-language-learning-plan
description: This prompt instructs the AI to create a personalized, practical language-learning plan using the learner’s target language, current level, goals, available daily time, learning style, and timeframe. The AI outputs a structured daily and weekly schedule allocating time across vocabulary, listening, speaking, reading, and writing, plus level-appropriate video recommendations with progressive difficulty and specific video-based exercises (shadowing, dictation, oral/written summaries). It also includes periodic checkpoints with video-based progress measures (e.g., reducing subtitles, real-time summarizing) and finishes with motivation strategies to help the learner stay consistent.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a personalized, practical language-learning plan using the learner’s target language, current level, goals, available daily time, learning style, and timeframe. The AI outputs a structured daily and weekly schedule allocating time across vocabulary, listening, speaking, reading, and writing, plus level-appropriate video recommendations with progressive difficulty and specific video-based exercises (shadowing, dictation, oral/written summaries). It also includes periodic checkpoints with video-based progress measures (e.g., reducing subtitles, real-time summarizing) and finishes with motivation strategies to help the learner stay consistent.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Timeframe` | Required |  | (none) |
| `Current_Level` | Optional |  | `Beginner` |
| `Learning_Goal` | Optional |  | `Conversational fluency ` |
| `Learning_Style` | Optional |  | `Visual ` |
| `Target_Language` | Optional |  | `English` |
| `Available_Time_Per_Day` | Required |  | (none) |



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
    - `Timeframe`
  - `Available_Time_Per_Day`
- Optional text inputs (use defaults if not provided by the human):
    - `Current_Level` (default: `Beginner`)
  - `Learning_Goal` (default: `Conversational fluency `)
  - `Learning_Style` (default: `Visual `)
  - `Target_Language` (default: `English`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `direct-flow-language-learning-plan`).

Command form:

```bash
betterprompt generate direct-flow-language-learning-plan \
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
betterprompt generate direct-flow-language-learning-plan \
  --input Timeframe=<value> \
  --input Current_Level=Beginner \
  --input 'Learning_Goal=Conversational fluency ' \
  --input 'Learning_Style=Visual ' \
  --input Target_Language=English \
  --input Available_Time_Per_Day=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
