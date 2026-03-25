---
name: synthesizing-intelligence-and-contrarian-thinker
description: This prompt instructs the AI to adopt a synthesizing, contrarian thinker persona and generate a user-specified number of non-consensus insights or hypotheses about a given topic, tuned to a chosen speculation level and target audience. It requires the model to scan across domains, identify novel or underappreciated connections, and for each idea provide a clear statement, rationale, and potential implications, delivering the results in a strictly structured markdown format designed to provoke critical thinking and highlight future-relevant possibilities.
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

This prompt instructs the AI to adopt a synthesizing, contrarian thinker persona and generate a user-specified number of non-consensus insights or hypotheses about a given topic, tuned to a chosen speculation level and target audience. It requires the model to scan across domains, identify novel or underappreciated connections, and for each idea provide a clear statement, rationale, and potential implications, delivering the results in a strictly structured markdown format designed to provoke critical thinking and highlight future-relevant possibilities.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Topic` | Required |  | (none) |
| `Number_of_Ideas` | Required |  | (none) |
| `Target_Audience` | Required |  | (none) |
| `Speculation_Level` | Required |  | (none) |



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
    - `Topic`
  - `Number_of_Ideas`
  - `Target_Audience`
  - `Speculation_Level`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `synthesizing-intelligence-and-contrarian-thinker`).

Command form:

```bash
betterprompt generate synthesizing-intelligence-and-contrarian-thinker \
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
betterprompt generate synthesizing-intelligence-and-contrarian-thinker \
  --input Topic=<value> \
  --input Number_of_Ideas=<value> \
  --input Target_Audience=<value> \
  --input Speculation_Level=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```