---
name: zodiac-soulmate-portrait-generator
description: The prompt asks the AI to play a cosmic personality profiler and relationship storyteller, using the user’s birth date, gender, zodiac sign, and preferred soulmate gender to craft a romantic but realistic portrait of an ideal soulmate. The result is a vivid, believable description covering the soulmate’s appearance, presence, and compatible personality traits, along with how they make the user feel emotionally and mentally, written in sincere poetic language without any fantasy elements, and ending with a gentle suggestion that this person may already be nearby.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

The prompt asks the AI to play a cosmic personality profiler and relationship storyteller, using the user’s birth date, gender, zodiac sign, and preferred soulmate gender to craft a romantic but realistic portrait of an ideal soulmate. The result is a vivid, believable description covering the soulmate’s appearance, presence, and compatible personality traits, along with how they make the user feel emotionally and mentally, written in sincere poetic language without any fantasy elements, and ending with a gentle suggestion that this person may already be nearby.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_Gender` | Required |  | (none) |
| `Your_birth_date` | Required |  | (none) |
| `Your_zodiac_sign` | Required |  | (none) |
| `Your_soulmate_gender` | Required |  | (none) |



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
    - `Your_Gender`
  - `Your_birth_date`
  - `Your_zodiac_sign`
  - `Your_soulmate_gender`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `zodiac-soulmate-portrait-generator`).

Command form:

```bash
betterprompt generate zodiac-soulmate-portrait-generator \
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
betterprompt generate zodiac-soulmate-portrait-generator \
  --input Your_Gender=<value> \
  --input Your_birth_date=<value> \
  --input Your_zodiac_sign=<value> \
  --input Your_soulmate_gender=<value> \
  --model gpt-4o \
  --options '{}'
```