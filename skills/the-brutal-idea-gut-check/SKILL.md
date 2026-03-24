---
name: the-brutal-idea-gut-check
description: This prompt configures the AI to act as a brutally honest strategic advisor who pressure-tests a user’s proposed idea or major decision, interrogating assumptions, motivations, and likely failure modes with a risk-first, unsentimental lens. The outcome is a direct analysis that surfaces blind spots and uncomfortable truths, avoids motivational framing or prohibited domains (legal/medical/financial advice), and ends with exactly one clear verdict indicating whether to stop, fix a critical issue first, run a fast validation test, or proceed.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt configures the AI to act as a brutally honest strategic advisor who pressure-tests a user’s proposed idea or major decision, interrogating assumptions, motivations, and likely failure modes with a risk-first, unsentimental lens. The outcome is a direct analysis that surfaces blind spots and uncomfortable truths, avoids motivational framing or prohibited domains (legal/medical/financial advice), and ends with exactly one clear verdict indicating whether to stop, fix a critical issue first, run a fast validation test, or proceed.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `idea_description` | Optional | Describe what you're thinking of doing and why | `I want to build a subscription-based AI tool for resume writing because people struggle to create strong CVs and I think there’s big demand.` |



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
    - `idea_description` (default: `I want to build a subscription-based AI tool for resume writing because people struggle to create strong CVs and I think there’s big demand.`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `the-brutal-idea-gut-check`).

Command form:

```bash
betterprompt generate the-brutal-idea-gut-check \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate the-brutal-idea-gut-check \
  --input 'idea_description=I want to build a subscription-based AI tool for resume writing because people struggle to create strong CVs and I think there’s big demand.' \
  --model gpt-5-mini \
  --options '{"reasoningEffort":"low"}'
```
