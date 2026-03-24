---
name: strategic-content-pillar-planner
description: This prompt instructs the AI to act as a senior content strategist and create a structured content system for a specified brand or product, using provided details like industry, audience, tone, and business objectives. The output delivers 3–5 strategic content pillars aligned to goals, each broken into 3–5 actionable content angles, and for every angle includes a one-sentence core message, a recommended content format, and a concrete example post idea presented in a clear Pillar → Angles framework.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a senior content strategist and create a structured content system for a specified brand or product, using provided details like industry, audience, tone, and business objectives. The output delivers 3–5 strategic content pillars aligned to goals, each broken into 3–5 actionable content angles, and for every angle includes a one-sentence core message, a recommended content format, and a concrete example post idea presented in a clear Pillar → Angles framework.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Audience` | Optional |  | `Gen Z freelancer` |
| `Industry` | Required |  | (none) |
| `Brand_tone` | Required |  | (none) |
| `brand_product` | Required |  | (none) |
| `Main_objectives` | Optional |  | `boost leads` |



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
    - `Industry`
  - `Brand_tone`
  - `brand_product`
- Optional text inputs (use defaults if not provided by the human):
    - `Audience` (default: `Gen Z freelancer`)
  - `Main_objectives` (default: `boost leads`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `strategic-content-pillar-planner`).

Command form:

```bash
betterprompt generate strategic-content-pillar-planner \
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
betterprompt generate strategic-content-pillar-planner \
  --input 'Audience=Gen Z freelancer' \
  --input Industry=<value> \
  --input Brand_tone=<value> \
  --input brand_product=<value> \
  --input 'Main_objectives=boost leads' \
  --model gpt-4.1-mini \
  --options '{}'
```
