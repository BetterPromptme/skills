---
name: create-focus-challenges-for-adhd-person
description: This prompt instructs the AI to create an interactive, ADHD-friendly focus challenge that breaks concentration and productivity skills into small, daily, easy-to-follow steps, using gamified progress tracking to keep participants motivated. The resulting output is a structured yet flexible program with clear instructions, objectives, and expected outcomes for each segment, offering varied activities to suit different learning styles, plus practical strategies to handle distractions and sustain attention so participants can build lasting habits that improve personal and professional performance.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create an interactive, ADHD-friendly focus challenge that breaks concentration and productivity skills into small, daily, easy-to-follow steps, using gamified progress tracking to keep participants motivated. The resulting output is a structured yet flexible program with clear instructions, objectives, and expected outcomes for each segment, offering varied activities to suit different learning styles, plus practical strategies to handle distractions and sustain attention so participants can build lasting habits that improve personal and professional performance.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `create-focus-challenges-for-adhd-person`).

Command form:

```bash
betterprompt generate create-focus-challenges-for-adhd-person \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate create-focus-challenges-for-adhd-person \
  --model gpt-4.1-mini \
  --options '{}'
```
