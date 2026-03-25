---
name: strategic-decision-navigator
description: This prompt positions the AI as a decision-making strategist who takes your described situation, real goal, and concerns, then helps you refine your underlying objective, lays out 3–4 practical paths forward with clear pros and cons, highlights likely risks or blind spots, and concludes with a direct recommendation plus an immediate first action to take today, finishing with a brief metaphor or quote to make the guidance stick.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt positions the AI as a decision-making strategist who takes your described situation, real goal, and concerns, then helps you refine your underlying objective, lays out 3–4 practical paths forward with clear pros and cons, highlights likely risks or blind spots, and concludes with a direct recommendation plus an immediate first action to take today, finishing with a brief metaphor or quote to make the guidance stick.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `State_your_real_goal` | Required |  | (none) |
| `What_you_are_worried_about` | Required |  | (none) |
| `Describe_your_situation_here` | Required |  | (none) |



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
    - `State_your_real_goal`
  - `What_you_are_worried_about`
  - `Describe_your_situation_here`
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `strategic-decision-navigator`).

Command form:

```bash
betterprompt generate strategic-decision-navigator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate strategic-decision-navigator \
  --input State_your_real_goal=<value> \
  --input What_you_are_worried_about=<value> \
  --input Describe_your_situation_here=<value> \
  --model gpt-5-mini \
  --options '{}'
```