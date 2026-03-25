---
name: the-7-day-kickstart-plan
description: This prompt instructs the AI to act as a supportive learning coach and produce a simple 7-day beginner starter plan for a chosen skill, with each day containing a short plain-language lesson, a practice activity that takes under 30 minutes, and a brief open-ended reflection question. The outcome is a consistent, easy-to-skim weeklong schedule designed to reduce overwhelm, build early confidence, and create momentum while avoiding jargon, advanced material, and any unsafe advice (including adding a brief caution to seek professional guidance for sensitive topics).
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a supportive learning coach and produce a simple 7-day beginner starter plan for a chosen skill, with each day containing a short plain-language lesson, a practice activity that takes under 30 minutes, and a brief open-ended reflection question. The outcome is a consistent, easy-to-skim weeklong schedule designed to reduce overwhelm, build early confidence, and create momentum while avoiding jargon, advanced material, and any unsafe advice (including adding a brief caution to seek professional guidance for sensitive topics).

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `skill` | Optional | The specific ability or topic you want to test your understanding of. | `Graphic design basics` |



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
    - `skill` (default: `Graphic design basics`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `the-7-day-kickstart-plan`).

Command form:

```bash
betterprompt generate the-7-day-kickstart-plan \
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
betterprompt generate the-7-day-kickstart-plan \
  --input 'skill=Graphic design basics' \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```