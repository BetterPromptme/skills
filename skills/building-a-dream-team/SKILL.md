---
name: building-a-dream-team
description: This prompt guides an AI to recommend an ideal lean startup founding team for a specified industry by outlining the key co-founder roles to recruit, the must-have hands-on skills each should bring, and the personality dynamics that best support early execution. It also produces a practical checklist of warning signs—skill gaps, mismatched incentives, poor collaboration habits, or unhealthy risk profiles—to help you avoid problematic co-founder choices and assemble a complementary, high-functioning team.
skillVersionId: 019780da-a278-7f5d-808c-0c8d4b32ebea
---

## What it does

This prompt guides an AI to recommend an ideal lean startup founding team for a specified industry by outlining the key co-founder roles to recruit, the must-have hands-on skills each should bring, and the personality dynamics that best support early execution. It also produces a practical checklist of warning signs—skill gaps, mismatched incentives, poor collaboration habits, or unhealthy risk profiles—to help you avoid problematic co-founder choices and assemble a complementary, high-functioning team.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `INDUSTRY` | Required |  | (none) |



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
    - `INDUSTRY`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019780da-a278-7f5d-808c-0c8d4b32ebea`).

Command form:

```bash
betterprompt generate 019780da-a278-7f5d-808c-0c8d4b32ebea \
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
betterprompt generate 019780da-a278-7f5d-808c-0c8d4b32ebea \
  --input INDUSTRY=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
