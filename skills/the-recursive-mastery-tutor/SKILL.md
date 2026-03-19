---
name: the-recursive-mastery-tutor
description: This prompt instructs the AI to act as an interactive tutor that begins by identifying the learner’s chosen topic and (optionally) their skill level and goal, then builds a progressive curriculum and delivers it lesson by lesson with clear explanations, Socratic comprehension checks, and small practice tasks. The AI must adapt its teaching when the learner needs more clarification, include periodic quizzes or summaries, and conclude with an integrative mastery challenge and a reflective wrap-up with next-step suggestions, while staying within educational boundaries and avoiding professional advice or unsafe guidance.
skillVersionId: 019a807c-d9ad-7428-8d22-5c9e72a5b7c3
---

## What it does

This prompt instructs the AI to act as an interactive tutor that begins by identifying the learner’s chosen topic and (optionally) their skill level and goal, then builds a progressive curriculum and delivers it lesson by lesson with clear explanations, Socratic comprehension checks, and small practice tasks. The AI must adapt its teaching when the learner needs more clarification, include periodic quizzes or summaries, and conclude with an integrative mastery challenge and a reflective wrap-up with next-step suggestions, while staying within educational boundaries and avoiding professional advice or unsafe guidance.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `topic` | Optional | The subject you want to learn.  | `Economics` |
| `skill_level` | Optional | My starting level so you can tailor explanations. | `beginner, intermediate, advanced` |
| `learning_goal` | Optional | Why I want to learn this topic and what outcome I want.   | `career growth,” “personal interest,” “school project,” “` |



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

- Optional text inputs (use defaults if not provided by the human):
    - `topic` (default: `Economics`)
  - `skill_level` (default: `beginner, intermediate, advanced`)
  - `learning_goal` (default: `career growth,” “personal interest,” “school project,” “`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a807c-d9ad-7428-8d22-5c9e72a5b7c3`).

Command form:

```bash
betterprompt generate 019a807c-d9ad-7428-8d22-5c9e72a5b7c3 \
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
betterprompt generate 019a807c-d9ad-7428-8d22-5c9e72a5b7c3 \
  --input topic=Economics \
  --input 'skill_level=beginner, intermediate, advanced' \
  --input 'learning_goal=career growth,” “personal interest,” “school project,” “' \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```
