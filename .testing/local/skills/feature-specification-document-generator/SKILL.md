---
name: feature-specification-document-generator
description: This prompt instructs the AI to produce a structured feature specification document for a proposed product feature, using provided inputs for the feature idea, target users, key functionalities, and estimated development effort. The resulting output is a clear, implementation-ready spec organized into standard sections—overview, goals with success metrics, user stories, acceptance criteria, high-level technical design, and future considerations—so stakeholders and developers can align on scope, requirements, and next steps.
skillVersionId: 01990ed4-14a1-7830-888d-8df091f8d821
---

## What it does

This prompt instructs the AI to produce a structured feature specification document for a proposed product feature, using provided inputs for the feature idea, target users, key functionalities, and estimated development effort. The resulting output is a clear, implementation-ready spec organized into standard sections—overview, goals with success metrics, user stories, acceptance criteria, high-level technical design, and future considerations—so stakeholders and developers can align on scope, requirements, and next steps.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `feature_idea` | Optional | One short line that names the feature. Be specific and outcome‑oriented. | `Task Board` |
| `target_users` | Optional | Examples: Product Managers, Prompt Creators, Agency Designers, Data Analysts | `Team members` |
| `development_effort` | Required | Rough t‑shirt sizing only. You can refine after scoping. Allowed options: 15, 30, 50 | (none) |
| `key_functionalities` | Required | Allowed options: Task creation, status updates, drag-and-drop prioritization | (none) |



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
    - `development_effort`
  - `key_functionalities`
- Optional text inputs (use defaults if not provided by the human):
    - `feature_idea` (default: `Task Board`)
  - `target_users` (default: `Team members`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4o-mini`** and its available options. Look up `gpt-4o-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01990ed4-14a1-7830-888d-8df091f8d821`).

Command form:

```bash
betterprompt generate 01990ed4-14a1-7830-888d-8df091f8d821 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01990ed4-14a1-7830-888d-8df091f8d821 \
  --input 'feature_idea=Task Board' \
  --input 'target_users=Team members' \
  --input development_effort=15 \
  --input 'key_functionalities=Task creation' \
  --model gpt-4o-mini \
  --options '{}'
```
