---
name: decision-filter-stay-focused-achieve-your-long-term-goals
description: This prompt asks the AI to help you design a simple, repeatable decision filter for evaluating new options or opportunities against your long-term goals so you can stay focused. It guides you to clarify your priorities, define objective criteria (e.g., goal alignment, impact, time cost, opportunity cost, and timing), and produce a checklist or scoring rubric you can apply quickly whenever a distraction appears. The outcome is a practical framework—often including rules for when to say yes/no, a short set of questions to ask, and a process for parking ideas—that reduces impulsive pivots and keeps your time and energy aligned with what matters most.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to help you design a simple, repeatable decision filter for evaluating new options or opportunities against your long-term goals so you can stay focused. It guides you to clarify your priorities, define objective criteria (e.g., goal alignment, impact, time cost, opportunity cost, and timing), and produce a checklist or scoring rubric you can apply quickly whenever a distraction appears. The outcome is a practical framework—often including rules for when to say yes/no, a short set of questions to ask, and a process for parking ideas—that reduces impulsive pivots and keeps your time and energy aligned with what matters most.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `options_or_opportunities` | Required |  | (none) |



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
    - `options_or_opportunities`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-pro-preview`** and its available options. Look up `gemini-2.5-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-pro-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `decision-filter-stay-focused-achieve-your-long-term-goals`).

Command form:

```bash
betterprompt generate decision-filter-stay-focused-achieve-your-long-term-goals \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate decision-filter-stay-focused-achieve-your-long-term-goals \
  --input options_or_opportunities=<value> \
  --model gemini-2.5-pro-preview \
  --options '{}'
```
