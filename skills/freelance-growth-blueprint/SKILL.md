---
name: freelance-growth-blueprint
description: This prompt instructs the AI to act as a seasoned freelance business strategist and produce a practical, inspiring 90-day growth blueprint tailored to the user’s role, current and target income, platforms, strengths, challenges, weekly availability, and non-negotiables. The outcome is a structured plan with a motivating goal-alignment statement, a three-phase timeline (foundation, outreach/marketing, scaling), clear platform and outreach recommendations, portfolio and branding upgrades, concrete client-acquisition tactics (including sample messaging), pricing and offer packaging guidance with rate-increase timing, workflow automation systems, and a closing encouragement to sustain consistent action across the full 90 days.
skillVersionId: 019864cd-8e25-7495-8fef-2cd8dcfd04af
---

## What it does

This prompt instructs the AI to act as a seasoned freelance business strategist and produce a practical, inspiring 90-day growth blueprint tailored to the user’s role, current and target income, platforms, strengths, challenges, weekly availability, and non-negotiables. The outcome is a structured plan with a motivating goal-alignment statement, a three-phase timeline (foundation, outreach/marketing, scaling), clear platform and outreach recommendations, portfolio and branding upgrades, concrete client-acquisition tactics (including sample messaging), pricing and offer packaging guidance with rate-increase timing, workflow automation systems, and a closing encouragement to sustain consistent action across the full 90 days.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Current_income` | Required |  | (none) |
| `Freelance_role` | Required |  | (none) |
| `Non-negotiables` | Required |  | (none) |
| `Main_platforms_used` | Required |  | (none) |
| `Available_time_per_week` | Required |  | (none) |
| `Weak_spots_or_challenges` | Required |  | (none) |
| `Target_income_after_90_days` | Required |  | (none) |
| `Strengths_AND_specializations` | Required |  | (none) |



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
    - `Current_income`
  - `Freelance_role`
  - `Non-negotiables`
  - `Main_platforms_used`
  - `Available_time_per_week`
  - `Weak_spots_or_challenges`
  - `Target_income_after_90_days`
  - `Strengths_AND_specializations`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019864cd-8e25-7495-8fef-2cd8dcfd04af`).

Command form:

```bash
betterprompt generate 019864cd-8e25-7495-8fef-2cd8dcfd04af \
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
betterprompt generate 019864cd-8e25-7495-8fef-2cd8dcfd04af \
  --input Current_income=<value> \
  --input Freelance_role=<value> \
  --input Non-negotiables=<value> \
  --input Main_platforms_used=<value> \
  --input Available_time_per_week=<value> \
  --input Weak_spots_or_challenges=<value> \
  --input Target_income_after_90_days=<value> \
  --input Strengths_AND_specializations=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
