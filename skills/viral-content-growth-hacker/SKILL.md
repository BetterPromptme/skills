---
name: viral-content-growth-hacker
description: This prompt instructs the AI to act as a growth-focused content strategist and produce 10 platform-native, viral-oriented content ideas to promote a specified product or service on a chosen social platform. For each idea, it requires a concise hook title, an emotionally driven caption, a clear format/style, the target emotion, the virality mechanism behind it, and a simple call-to-action—resulting in a ready-to-execute list of low-cost, repeatable concepts optimized for high reach.
skillVersionId: 0198c571-235c-7b90-88f4-febb5578b47c
---

## What it does

This prompt instructs the AI to act as a growth-focused content strategist and produce 10 platform-native, viral-oriented content ideas to promote a specified product or service on a chosen social platform. For each idea, it requires a concise hook title, an emotionally driven caption, a clear format/style, the target emotion, the virality mechanism behind it, and a simple call-to-action—resulting in a ready-to-execute list of low-cost, repeatable concepts optimized for high reach.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Platform` | Required |  | (none) |
| `Product_or_Service` | Required |  | (none) |



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
    - `Platform`
  - `Product_or_Service`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198c571-235c-7b90-88f4-febb5578b47c`).

Command form:

```bash
betterprompt generate 0198c571-235c-7b90-88f4-febb5578b47c \
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
betterprompt generate 0198c571-235c-7b90-88f4-febb5578b47c \
  --input Platform=<value> \
  --input Product_or_Service=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
