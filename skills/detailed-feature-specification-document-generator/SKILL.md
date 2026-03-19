---
name: detailed-feature-specification-document-generator
description: This prompt instructs the AI to produce a structured feature specification document for a proposed product capability, using the provided inputs (feature idea, target users, key functionalities, technical considerations, and estimated effort). The resulting output is a clear, implementation-ready spec organized into standard sections—overview, goals with success metrics, user stories, acceptance criteria tied to each story, a high-level technical design addressing architecture and nonfunctional needs, and future enhancements—so teams can align on scope and begin development.
skillVersionId: 0197c439-295b-7fb6-8d1c-5c6dda61729f
---

## What it does

This prompt instructs the AI to produce a structured feature specification document for a proposed product capability, using the provided inputs (feature idea, target users, key functionalities, technical considerations, and estimated effort). The resulting output is a clear, implementation-ready spec organized into standard sections—overview, goals with success metrics, user stories, acceptance criteria tied to each story, a high-level technical design addressing architecture and nonfunctional needs, and future enhancements—so teams can align on scope and begin development.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Feature_Idea` | Required |  | (none) |
| `Target_Users` | Required |  | (none) |
| `Key_Functionalities` | Required |  | (none) |
| `Technical_Considerations` | Required |  | (none) |
| `Estimated_Development_Effort` | Required |  | (none) |



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
    - `Feature_Idea`
  - `Target_Users`
  - `Key_Functionalities`
  - `Technical_Considerations`
  - `Estimated_Development_Effort`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0197c439-295b-7fb6-8d1c-5c6dda61729f`).

Command form:

```bash
betterprompt generate 0197c439-295b-7fb6-8d1c-5c6dda61729f \
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
betterprompt generate 0197c439-295b-7fb6-8d1c-5c6dda61729f \
  --input Feature_Idea=<value> \
  --input Target_Users=<value> \
  --input Key_Functionalities=<value> \
  --input Technical_Considerations=<value> \
  --input Estimated_Development_Effort=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
