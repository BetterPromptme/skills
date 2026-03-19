---
name: step-by-step-math-solver-with-hints-and-practice
description: This prompt instructs the AI to act as a patient math tutor and solution checker by taking a user-specified math context (subject, topic, audience, language, notation) and a fully defined problem (statement, data, constraints, goal) and producing a structured, step-by-step solution with formulas, brief justifications, intermediate results, domain checks, and a final verified answer. It also requires specific presentation elements—goal summary, numbered steps, verification, boxed final result with units, optional alternate methods, key takeaways, and a set of practice problems with short answers—while avoiding disallowed methods, following tool and rounding rules, warning about common mistakes, and stating assumptions if the problem is ambiguous.
skillVersionId: 0198ca88-2a20-77a8-8840-81cc90ad0297
---

## What it does

This prompt instructs the AI to act as a patient math tutor and solution checker by taking a user-specified math context (subject, topic, audience, language, notation) and a fully defined problem (statement, data, constraints, goal) and producing a structured, step-by-step solution with formulas, brief justifications, intermediate results, domain checks, and a final verified answer. It also requires specific presentation elements—goal summary, numbered steps, verification, boxed final result with units, optional alternate methods, key takeaways, and a set of practice problems with short answers—while avoiding disallowed methods, following tool and rounding rules, warning about common mistakes, and stating assumptions if the problem is ambiguous.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Goal` | Required |  | (none) |
| `Number` | Required |  | (none) |
| `Yes_or_No` | Required |  | (none) |
| `Given_data` | Required |  | (none) |
| `Allowed_tools` | Required |  | (none) |
| `Audience_level` | Required |  | (none) |
| `Formula_format` | Required |  | (none) |
| `Specific_topic` | Required |  | (none) |
| `Tone_and_style` | Required |  | (none) |
| `Common_mistakes` | Required |  | (none) |
| `Output_language` | Required |  | (none) |
| `Methods_to_avoid` | Required |  | (none) |
| `Subject_or_field` | Required |  | (none) |
| `Number_of_methods` | Required |  | (none) |
| `Problem_statement` | Required |  | (none) |
| `Step_detail_level` | Required |  | (none) |
| `Rounding_and_units` | Required |  | (none) |
| `Notation_convention` | Required |  | (none) |
| `Domain_and_constraints` | Required |  | (none) |



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
    - `Goal`
  - `Number`
  - `Yes_or_No`
  - `Given_data`
  - `Allowed_tools`
  - `Audience_level`
  - `Formula_format`
  - `Specific_topic`
  - `Tone_and_style`
  - `Common_mistakes`
  - `Output_language`
  - `Methods_to_avoid`
  - `Subject_or_field`
  - `Number_of_methods`
  - `Problem_statement`
  - `Step_detail_level`
  - `Rounding_and_units`
  - `Notation_convention`
  - `Domain_and_constraints`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198ca88-2a20-77a8-8840-81cc90ad0297`).

Command form:

```bash
betterprompt generate 0198ca88-2a20-77a8-8840-81cc90ad0297 \
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
betterprompt generate 0198ca88-2a20-77a8-8840-81cc90ad0297 \
  --input Goal=<value> \
  --input Number=<value> \
  --input Yes_or_No=<value> \
  --input Given_data=<value> \
  --input Allowed_tools=<value> \
  --input Audience_level=<value> \
  --input Formula_format=<value> \
  --input Specific_topic=<value> \
  --input Tone_and_style=<value> \
  --input Common_mistakes=<value> \
  --input Output_language=<value> \
  --input Methods_to_avoid=<value> \
  --input Subject_or_field=<value> \
  --input Number_of_methods=<value> \
  --input Problem_statement=<value> \
  --input Step_detail_level=<value> \
  --input Rounding_and_units=<value> \
  --input Notation_convention=<value> \
  --input Domain_and_constraints=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
