---
name: 5-email-webinar-sales-sequence
description: This prompt instructs the AI to act as an experienced email marketing strategist and produce a five-part webinar promotion sequence (announcement, reminder, value tip, last call, and day-of reminder) tailored to the event timeline, delivering for each email a subject line, preview text, and a complete body designed to maximize engagement, clicks, and registrations, outputting only the finished email scripts.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an experienced email marketing strategist and produce a five-part webinar promotion sequence (announcement, reminder, value tip, last call, and day-of reminder) tailored to the event timeline, delivering for each email a subject line, preview text, and a complete body designed to maximize engagement, clicks, and registrations, outputting only the finished email scripts.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `days_until_event` | Required |  | (none) |
| `Your_Webinar_Title` | Required |  | (none) |



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
    - `days_until_event`
  - `Your_Webinar_Title`
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `5-email-webinar-sales-sequence`).

Command form:

```bash
betterprompt generate 5-email-webinar-sales-sequence \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 5-email-webinar-sales-sequence \
  --input days_until_event=<value> \
  --input Your_Webinar_Title=<value> \
  --model gpt-5 \
  --options '{}'
```
