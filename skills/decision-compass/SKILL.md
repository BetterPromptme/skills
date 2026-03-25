---
name: decision-compass
description: This prompt asks the assistant to act as a decision partner: after the user fills in their situation, true goal, and worries, it surfaces the deeper underlying objective, presents 3–4 actionable paths with trade-offs, flags likely blind spots and risks, then delivers a clear recommended choice with an immediate first step to take today, finishing with a concise metaphor or quote to reinforce the guidance.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the assistant to act as a decision partner: after the user fills in their situation, true goal, and worries, it surfaces the deeper underlying objective, presents 3–4 actionable paths with trade-offs, flags likely blind spots and risks, then delivers a clear recommended choice with an immediate first step to take today, finishing with a concise metaphor or quote to reinforce the guidance.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Write_your_true_goal` | Required |  | (none) |
| `what_you_re_worried_about` | Required |  | (none) |
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
    - `Write_your_true_goal`
  - `what_you_re_worried_about`
  - `Describe_your_situation_here`
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `decision-compass`).

Command form:

```bash
betterprompt generate decision-compass \
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
betterprompt generate decision-compass \
  --input Write_your_true_goal=<value> \
  --input what_you_re_worried_about=<value> \
  --input Describe_your_situation_here=<value> \
  --model gpt-5-mini \
  --options '{}'
```