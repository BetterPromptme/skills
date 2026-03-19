---
name: the-role-playing-expert
description: This prompt instructs the AI to adopt a specified professional persona and deliver an expert-quality output for a defined goal, using provided context and tailored to a particular audience. It requires the response to explicitly state the assumed role up front, apply domain-appropriate reasoning, and, when details are missing, make clear assumptions rather than guessing. It also sets guardrails to keep the output professional and in-scope, avoiding unsupported claims, irrelevant content, and regulated advice unless explicitly requested.
skillVersionId: 019a3401-c920-7d13-89a5-4ba232ee828b
---

## What it does

This prompt instructs the AI to adopt a specified professional persona and deliver an expert-quality output for a defined goal, using provided context and tailored to a particular audience. It requires the response to explicitly state the assumed role up front, apply domain-appropriate reasoning, and, when details are missing, make clear assumptions rather than guessing. It also sets guardrails to keep the output professional and in-scope, avoiding unsupported claims, irrelevant content, and regulated advice unless explicitly requested.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `key_criteria` | Optional | The standards or rules the output should follow. | `Focus on conversion rate and mobile usability` |
| `target_audience` | Optional | Who the final output is intended for — determines tone, detail, and complexity. | `Startup founders` |
| `background_or_context` | Optional | Short background that explains the situation or purpose of the task. | `Short background that explains the situation or purpose of the task.` |
| `specific_goal_or_deliverable` | Optional | The main task or objective you want the expert to complete. | `Audit a landing page` |
| `specific_professional_or_expert` | Optional | The role or expertise you want the AI to adopt. | `Senior UX designer` |



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
    - `key_criteria` (default: `Focus on conversion rate and mobile usability`)
  - `target_audience` (default: `Startup founders`)
  - `background_or_context` (default: `Short background that explains the situation or purpose of the task.`)
  - `specific_goal_or_deliverable` (default: `Audit a landing page`)
  - `specific_professional_or_expert` (default: `Senior UX designer`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a3401-c920-7d13-89a5-4ba232ee828b`).

Command form:

```bash
betterprompt generate 019a3401-c920-7d13-89a5-4ba232ee828b \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a3401-c920-7d13-89a5-4ba232ee828b \
  --input 'key_criteria=Focus on conversion rate and mobile usability' \
  --input 'target_audience=Startup founders' \
  --input 'background_or_context=Short background that explains the situation or purpose of the task.' \
  --input 'specific_goal_or_deliverable=Audit a landing page' \
  --input 'specific_professional_or_expert=Senior UX designer' \
  --model gpt-5 \
  --options '{"reasoningEffort":"low"}'
```
