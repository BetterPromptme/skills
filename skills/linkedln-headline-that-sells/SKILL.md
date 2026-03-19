---
name: linkedln-headline-that-sells
description: This prompt instructs the AI to act as a LinkedIn personal-branding specialist and generate three concise, recruiter-attractive LinkedIn headline options tailored to a user’s field, current role, key expertise areas, and career level. The outcome is three professional, bold, SEO-optimized yet readable headlines (each under 220 characters) designed to boost search visibility and credibility with both recruiters and peers.
skillVersionId: 019a6b9c-ef1d-73ba-86c0-aaa450a32b1d
---

## What it does

This prompt instructs the AI to act as a LinkedIn personal-branding specialist and generate three concise, recruiter-attractive LinkedIn headline options tailored to a user’s field, current role, key expertise areas, and career level. The outcome is three professional, bold, SEO-optimized yet readable headlines (each under 220 characters) designed to boost search visibility and credibility with both recruiters and peers.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_field` | Required |  | (none) |
| `Career_level` | Required |  | (none) |
| `Current_role` | Required |  | (none) |
| `Your_expertises` | Required | Write down highlight skills or expertises that make you outstanding and stay ahead from others. You can paste your certificates or degrees also.  | (none) |



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
    - `Your_field`
  - `Career_level`
  - `Current_role`
  - `Your_expertises`
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a6b9c-ef1d-73ba-86c0-aaa450a32b1d`).

Command form:

```bash
betterprompt generate 019a6b9c-ef1d-73ba-86c0-aaa450a32b1d \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a6b9c-ef1d-73ba-86c0-aaa450a32b1d \
  --input Your_field=<value> \
  --input Career_level=<value> \
  --input Current_role=<value> \
  --input Your_expertises=<value> \
  --model gpt-5 \
  --options '{"reasoningEffort":"low"}'
```
