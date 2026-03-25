---
name: thesis-outline-architect
description: This prompt instructs the AI to act as an academic thesis advisor in a specified field, using the user’s provided topic and unstructured notes to extract core themes, generate several precise and debatable thesis statements, select one to build a coherent thesis-level outline, critically evaluate that outline for weaknesses and missing scholarship or counterarguments, and then refine research questions while recommending and justifying appropriate qualitative, quantitative, or mixed methodologies suited to committee-level expectations.
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

This prompt instructs the AI to act as an academic thesis advisor in a specified field, using the user’s provided topic and unstructured notes to extract core themes, generate several precise and debatable thesis statements, select one to build a coherent thesis-level outline, critically evaluate that outline for weaknesses and missing scholarship or counterarguments, and then refine research questions while recommending and justifying appropriate qualitative, quantitative, or mixed methodologies suited to committee-level expectations.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_field` | Optional |  | `Environment Science, Modern History,...` |
| `Your_broad_topic` | Required |  | (none) |
| `Your_unstructured_notes` | Required | Your raw, messy notes | (none) |



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
    - `Your_broad_topic`
  - `Your_unstructured_notes`
- Optional text inputs (use defaults if not provided by the human):
    - `Your_field` (default: `Environment Science, Modern History,...`)
- Optional: model and options.
  - Present the human with the default model **`grok-4.1-fast`** and its available options. Look up `grok-4.1-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4.1-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `thesis-outline-architect`).

Command form:

```bash
betterprompt generate thesis-outline-architect \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4.1-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate thesis-outline-architect \
  --input 'Your_field=Environment Science, Modern History,...' \
  --input Your_broad_topic=<value> \
  --input Your_unstructured_notes=<value> \
  --model grok-4.1-fast \
  --options '{"reasoningEffort":"low"}'
```