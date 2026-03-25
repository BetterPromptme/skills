---
name: machine-error-greater-human-readable-response-writer
description: This prompt instructs the AI to take an HTTP error (status code plus what the user was trying to do, and optional context) and rewrite it into a short, user-friendly message. The output clearly explains what happened in plain language, suggests 1–3 concrete next steps, uses a specified tone, avoids blame, and redacts any sensitive technical details while keeping the response brief and text-only.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt instructs the AI to take an HTTP error (status code plus what the user was trying to do, and optional context) and rewrite it into a short, user-friendly message. The output clearly explains what happened in plain language, suggests 1–3 concrete next steps, uses a specified tone, avoids blame, and redacts any sensitive technical details while keeping the response brief and text-only.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Tone` | Optional |  | `friendly` |
| `User_Action` | Optional |  | `uploading a photo` |
| `Error_Context` | Required |  | (none) |
| `HTTP_status_code` | Optional |  | `400` |



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
    - `Error_Context`
- Optional text inputs (use defaults if not provided by the human):
    - `Tone` (default: `friendly`)
  - `User_Action` (default: `uploading a photo`)
  - `HTTP_status_code` (default: `400`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `machine-error-greater-human-readable-response-writer`).

Command form:

```bash
betterprompt generate machine-error-greater-human-readable-response-writer \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate machine-error-greater-human-readable-response-writer \
  --input Tone=friendly \
  --input 'User_Action=uploading a photo' \
  --input Error_Context=<value> \
  --input HTTP_status_code=400 \
  --model gpt-5-mini \
  --options '{}'
```