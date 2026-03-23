---
name: humanize-ai
description: You give this prompt an input, and you get one short paragraph explaining what the prompt aims to do and what output you will receive. You get a plain description of the task and the expected result. You get no quotes from the prompt and no extra commentary.
skillVersionId: 019d044d-d325-74fd-9692-b910e2a55cca
---

## What it does

You give this prompt an input, and you get one short paragraph explaining what the prompt aims to do and what output you will receive. You get a plain description of the task and the expected result. You get no quotes from the prompt and no extra commentary.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `input` | Required |  | (none) |



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
    - `input`
- Optional: model and options.
  - Present the human with the default model **`gemini-3.1-pro-preview`** and its available options. Look up `gemini-3.1-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"medium"}`.
  - If the human does not specify, defaults are used: model `gemini-3.1-pro-preview`, options `{"reasoningEffort":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019d044d-d325-74fd-9692-b910e2a55cca`).

Command form:

```bash
betterprompt generate 019d044d-d325-74fd-9692-b910e2a55cca \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3.1-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019d044d-d325-74fd-9692-b910e2a55cca \
  --input input=<value> \
  --model gemini-3.1-pro-preview \
  --options '{"reasoningEffort":"medium"}'
```
