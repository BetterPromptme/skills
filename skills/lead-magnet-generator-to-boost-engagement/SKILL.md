---
name: lead-magnet-generator-to-boost-engagement
description: This prompt instructs the AI to act as a sales assistant and generate 10 lead magnet ideas tailored to a specified target audience and niche, each designed to drive quick sign-ups or inquiries. For every idea, it produces a brief value-focused description plus ready-to-use copy for a cold DM, a concise cold email with a clear call to action, and an engagement-optimized social caption, all written in a natural, non-salesy tone while following formatting and style constraints.
skillVersionId: 019aba5c-5549-722c-8b91-64fa8f5c8e16
---

## What it does

This prompt instructs the AI to act as a sales assistant and generate 10 lead magnet ideas tailored to a specified target audience and niche, each designed to drive quick sign-ups or inquiries. For every idea, it produces a brief value-focused description plus ready-to-use copy for a cold DM, a concise cold email with a clear call to action, and an engagement-optimized social caption, all written in a natural, non-salesy tone while following formatting and style constraints.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Niche` | Required |  | (none) |
| `Target_audience` | Required |  | (none) |



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
    - `Niche`
  - `Target_audience`
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"medium"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019aba5c-5549-722c-8b91-64fa8f5c8e16`).

Command form:

```bash
betterprompt generate 019aba5c-5549-722c-8b91-64fa8f5c8e16 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019aba5c-5549-722c-8b91-64fa8f5c8e16 \
  --input Niche=<value> \
  --input Target_audience=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"medium"}'
```
