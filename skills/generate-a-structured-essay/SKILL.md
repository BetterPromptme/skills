---
name: generate-a-structured-essay
description: This prompt instructs the AI to create an academically formatted, detailed essay outline using the user’s supplied topic, thesis, essay type, and desired number of body paragraphs, incorporating any provided key points or generating appropriate ones if none are given. The resulting output includes a structured introduction, logically ordered body paragraphs with main ideas, supporting evidence, and transitions, and a conclusion that reinforces the thesis, with the outline tailored to the specified essay type (including counterarguments and rebuttals for argumentative essays or heightened persuasive emphasis for persuasive essays).
skillVersionId: 01977706-bb7f-7b1f-9e99-b008b18835dd
---

## What it does

This prompt instructs the AI to create an academically formatted, detailed essay outline using the user’s supplied topic, thesis, essay type, and desired number of body paragraphs, incorporating any provided key points or generating appropriate ones if none are given. The resulting output includes a structured introduction, logically ordered body paragraphs with main ideas, supporting evidence, and transitions, and a conclusion that reinforces the thesis, with the outline tailored to the specified essay type (including counterarguments and rebuttals for argumentative essays or heightened persuasive emphasis for persuasive essays).

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Essay_type` | Required |  | (none) |
| `Essay_Topic` | Required |  | (none) |
| `Thesis_Statement` | Required |  | (none) |
| `Key_Points_to_Include` | Required |  | (none) |
| `Number_of_Body_Paragraphs` | Required |  | (none) |



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
    - `Essay_type`
  - `Essay_Topic`
  - `Thesis_Statement`
  - `Key_Points_to_Include`
  - `Number_of_Body_Paragraphs`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01977706-bb7f-7b1f-9e99-b008b18835dd`).

Command form:

```bash
betterprompt generate 01977706-bb7f-7b1f-9e99-b008b18835dd \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01977706-bb7f-7b1f-9e99-b008b18835dd \
  --input Essay_type=<value> \
  --input Essay_Topic=<value> \
  --input Thesis_Statement=<value> \
  --input Key_Points_to_Include=<value> \
  --input Number_of_Body_Paragraphs=<value> \
  --model gpt-4o \
  --options '{}'
```
