---
name: clear-technical-explainer-with-use-case
description: This prompt instructs the AI to act as a technical explainer who adapts an explanation of a specified technical topic to a defined audience and knowledge level. It requires the response to start by stating scope and assumptions, give a high-level overview, then break the concept into 3–5 clear steps using plain language, brief definitions of necessary jargon, and helpful analogies or simple visuals when appropriate. It also asks the AI to note limitations and common pitfalls, avoid speculation, and finish with a practical real-world example based on the provided use case, while requesting more details if key inputs are missing.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a technical explainer who adapts an explanation of a specified technical topic to a defined audience and knowledge level. It requires the response to start by stating scope and assumptions, give a high-level overview, then break the concept into 3–5 clear steps using plain language, brief definitions of necessary jargon, and helpful analogies or simple visuals when appropriate. It also asks the AI to note limitations and common pitfalls, avoid speculation, and finish with a practical real-world example based on the provided use case, while requesting more details if key inputs are missing.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `audience_type` | Required |  | (none) |
| `knowledge_level` | Required |  | (none) |
| `technical_topic` | Required |  | (none) |
| `example_or_use_case` | Required |  | (none) |



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
    - `audience_type`
  - `knowledge_level`
  - `technical_topic`
  - `example_or_use_case`
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `clear-technical-explainer-with-use-case`).

Command form:

```bash
betterprompt generate clear-technical-explainer-with-use-case \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate clear-technical-explainer-with-use-case \
  --input audience_type=<value> \
  --input knowledge_level=<value> \
  --input technical_topic=<value> \
  --input example_or_use_case=<value> \
  --model gpt-5 \
  --options '{}'
```