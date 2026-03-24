---
name: professional-multidocument-drafting-assistant
description: This prompt instructs the AI to act as a professional documentation specialist and produce fully drafted, business-ready documents of a specified type using provided source information, formatted to formal standards and written in clear, concise language. It requires the inclusion of specific company and contact details, well-structured sections appropriate to each document, consistent formatting, and the removal of informal phrasing, delivering for each document a complete polished draft plus a short list of assumptions and optional placeholders for any missing or customizable details.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a professional documentation specialist and produce fully drafted, business-ready documents of a specified type using provided source information, formatted to formal standards and written in clear, concise language. It requires the inclusion of specific company and contact details, well-structured sections appropriate to each document, consistent formatting, and the removal of informal phrasing, delivering for each document a complete polished draft plus a short list of assumptions and optional placeholders for any missing or customizable details.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Gmail` | Required |  | (none) |
| `Your_name` | Required |  | (none) |
| `Company_name` | Required |  | (none) |
| `Company_address` | Required |  | (none) |
| `Raw_information` | Required | State clearly pieces of information you wanna put in the document. | (none) |
| `Type_of_document` | Required | SOP, proposal, agreement, guidelines,... | (none) |



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
    - `Gmail`
  - `Your_name`
  - `Company_name`
  - `Company_address`
  - `Raw_information`
  - `Type_of_document`
- Optional: model and options.
  - Present the human with the default model **`gpt-5.1`** and its available options. Look up `gpt-5.1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-5.1`, options `{"reasoningEffort":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `professional-multidocument-drafting-assistant`).

Command form:

```bash
betterprompt generate professional-multidocument-drafting-assistant \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate professional-multidocument-drafting-assistant \
  --input Gmail=<value> \
  --input Your_name=<value> \
  --input Company_name=<value> \
  --input Company_address=<value> \
  --input Raw_information=<value> \
  --input Type_of_document=<value> \
  --model gpt-5.1 \
  --options '{"reasoningEffort":"medium"}'
```
