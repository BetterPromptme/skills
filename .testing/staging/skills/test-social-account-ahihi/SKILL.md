---
name: test-social-account-ahihi
description: This prompt instructs the AI to generate a simple greeting addressed to a specific person by inserting the provided name into a “hello” message, resulting in a personalized salutation output for that named recipient.
skillVersionId: 01979c31-0177-7e81-a515-979238824e6a
---

## What it does

This prompt instructs the AI to generate a simple greeting addressed to a specific person by inserting the provided name into a “hello” message, resulting in a personalized salutation output for that named recipient.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `name` | Required |  | (none) |



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
    - `name`
- Optional: model and options.
  - Present the human with the default model **`deepseek-r1`** and its available options. Look up `deepseek-r1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `deepseek-r1`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01979c31-0177-7e81-a515-979238824e6a`).

Command form:

```bash
betterprompt generate 01979c31-0177-7e81-a515-979238824e6a \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`deepseek-r1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01979c31-0177-7e81-a515-979238824e6a \
  --input name=<value> \
  --model deepseek-r1 \
  --options '{}'
```
