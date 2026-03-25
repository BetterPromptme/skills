---
name: precision-proof-and-edit-master
description: This prompt instructs the AI to act as a meticulous English proofreader and editor who takes a provided draft, considers its audience, purpose, style preferences, and constraints, and then produces a polished, publication-ready revision. The result includes a brief summary of the draft and editing focus, a list of key issues with illustrative before/after examples, the fully revised draft, and concise notes explaining the rationale behind major edits while preserving the author’s original meaning and voice without adding unsupported content.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a meticulous English proofreader and editor who takes a provided draft, considers its audience, purpose, style preferences, and constraints, and then produces a polished, publication-ready revision. The result includes a brief summary of the draft and editing focus, a list of key issues with illustrative before/after examples, the fully revised draft, and concise notes explaining the rationale behind major edits while preserving the author’s original meaning and voice without adding unsupported content.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `purpose` | Required | What the text should achieve  | (none) |
| `draft_text` | Required | The full text to edit  | (none) |
| `constraints` | Required | Any specific restrictions or requirements  | (none) |
| `intended_audience` | Required | Who the writing is for | (none) |
| `style_preferences` | Optional | Any tone or style preferences | `formal, friendly, concise,...` |



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
    - `purpose`
  - `draft_text`
  - `constraints`
  - `intended_audience`
- Optional text inputs (use defaults if not provided by the human):
    - `style_preferences` (default: `formal, friendly, concise,...`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `precision-proof-and-edit-master`).

Command form:

```bash
betterprompt generate precision-proof-and-edit-master \
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
betterprompt generate precision-proof-and-edit-master \
  --input purpose=<value> \
  --input draft_text=<value> \
  --input constraints=<value> \
  --input intended_audience=<value> \
  --input 'style_preferences=formal, friendly, concise,...' \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```