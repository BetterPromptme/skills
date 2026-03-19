---
name: optimize-your-biological-rhythm
description: This prompt instructs the AI to act as a chronobiology-informed performance strategist who first asks the user for details about their current routine and daily energy/creativity/tiredness patterns, then uses that information to infer a likely chronotype, model 24-hour hormonal and cognitive fluctuations, identify routine-to-biology mismatches, and produce a customized time-blocked daily framework with flexible adaptive rituals, an implementation plan, and tracking metrics—while avoiding generic productivity advice and noting any missing data needed for better personalization.
skillVersionId: 01970bd9-83d3-7d4c-a080-304b0a1abd06
---

## What it does

This prompt instructs the AI to act as a chronobiology-informed performance strategist who first asks the user for details about their current routine and daily energy/creativity/tiredness patterns, then uses that information to infer a likely chronotype, model 24-hour hormonal and cognitive fluctuations, identify routine-to-biology mismatches, and produce a customized time-blocked daily framework with flexible adaptive rituals, an implementation plan, and tracking metrics—while avoiding generic productivity advice and noting any missing data needed for better personalization.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Context` | Required |  | (none) |



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
    - `Context`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-pro-preview`** and its available options. Look up `gemini-2.5-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-pro-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `01970bd9-83d3-7d4c-a080-304b0a1abd06`).

Command form:

```bash
betterprompt generate 01970bd9-83d3-7d4c-a080-304b0a1abd06 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 01970bd9-83d3-7d4c-a080-304b0a1abd06 \
  --input Context=<value> \
  --model gemini-2.5-pro-preview \
  --options '{}'
```
