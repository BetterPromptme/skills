---
name: ebook-outline-generator
description: This prompt instructs the AI to create a detailed, reader-focused outline for an ebook on a specified title and topic, starting with the ebook’s objective and intended audience and then organizing the content into well-scoped chapters. For each chapter, it requires a concise summary, key points, and suggested examples or case studies to support clarity and engagement, while also integrating practical reader-value elements like actionable tips, worksheets, and checklists. The outcome is a structured blueprint that guides the ebook’s narrative flow and ensures comprehensive coverage of the subject.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a detailed, reader-focused outline for an ebook on a specified title and topic, starting with the ebook’s objective and intended audience and then organizing the content into well-scoped chapters. For each chapter, it requires a concise summary, key points, and suggested examples or case studies to support clarity and engagement, while also integrating practical reader-value elements like actionable tips, worksheets, and checklists. The outcome is a structured blueprint that guides the ebook’s narrative flow and ensures comprehensive coverage of the subject.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `book_title` | Required |  | (none) |
| `book_topic` | Required |  | (none) |



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
    - `book_title`
  - `book_topic`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `ebook-outline-generator`).

Command form:

```bash
betterprompt generate ebook-outline-generator \
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
betterprompt generate ebook-outline-generator \
  --input book_title=<value> \
  --input book_topic=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
