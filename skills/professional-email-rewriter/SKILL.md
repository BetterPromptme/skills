---
name: professional-email-rewriter
description: This prompt instructs the AI to transform a provided email draft into a polished, professional business email that preserves the original intent while improving clarity, structure, tone, and correctness. It produces a complete email with a suggested subject line, proper greeting and closing, and a brief summary of the key edits made to enhance professionalism and concision.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs the AI to transform a provided email draft into a polished, professional business email that preserves the original intent while improving clarity, structure, tone, and correctness. It produces a complete email with a suggested subject line, proper greeting and closing, and a brief summary of the key edits made to enhance professionalism and concision.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `tone` | Required | The desired tone for the professional email Allowed options: formal, friendly, assertive, diplomatic | (none) |
| `purpose` | Required | The primary purpose of the email Allowed options: apology, request, followup, announcement | (none) |
| `emailDraft` | Optional | The original email draft that needs to be rewritten professionally | `hey john, can you send me that report by tomorrow? i really need it for the meeting. thanks` |



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
    - `tone`
  - `purpose`
- Optional text inputs (use defaults if not provided by the human):
    - `emailDraft` (default: `hey john, can you send me that report by tomorrow? i really need it for the meeting. thanks`)
- Optional: model and options.
  - Present the human with the default model **`claude-sonnet-4`** and its available options. Look up `claude-sonnet-4` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `claude-sonnet-4`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `professional-email-rewriter`).

Command form:

```bash
betterprompt generate professional-email-rewriter \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-sonnet-4`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate professional-email-rewriter \
  --input tone=formal \
  --input purpose=apology \
  --input 'emailDraft=hey john, can you send me that report by tomorrow? i really need it for the meeting. thanks' \
  --model claude-sonnet-4 \
  --options '{}'
```