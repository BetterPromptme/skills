---
name: hero-section-prompt
description: This prompt instructs the AI to produce a structured feature specification document for a provided product feature concept, tailored to a defined audience, functionality set, and development timeline. The output is a clear, implementation-ready spec organized into overview, goals with success metrics, user stories, acceptance criteria mapped to those stories, a high-level technical design, and future enhancements to guide both planning and development.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to produce a structured feature specification document for a provided product feature concept, tailored to a defined audience, functionality set, and development timeline. The output is a clear, implementation-ready spec organized into overview, goals with success metrics, user stories, acceptance criteria mapped to those stories, a high-level technical design, and future enhancements to guide both planning and development.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `feature_idea` | Optional |  | `Task Board` |
| `target_users` | Required | Allowed options: Team members, Remote workers, Event organizers | (none) |
| `development_effort` | Required | Allowed options: 30, 60, 90 | (none) |
| `key_functionalities` | Optional |  | `Task creation, drag-and-drop prioritization, status updates` |



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
    - `target_users`
  - `development_effort`
- Optional text inputs (use defaults if not provided by the human):
    - `feature_idea` (default: `Task Board`)
  - `key_functionalities` (default: `Task creation, drag-and-drop prioritization, status updates`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `hero-section-prompt`).

Command form:

```bash
betterprompt generate hero-section-prompt \
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
betterprompt generate hero-section-prompt \
  --input 'feature_idea=Task Board' \
  --input 'target_users=Team members' \
  --input development_effort=30 \
  --input 'key_functionalities=Task creation, drag-and-drop prioritization, status updates' \
  --model gpt-4.1-mini \
  --options '{}'
```
