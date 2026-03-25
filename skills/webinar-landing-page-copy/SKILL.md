---
name: webinar-landing-page-copy
description: This prompt instructs the AI to act as a conversion-focused copywriter and produce plain-text landing page copy designed to maximize free webinar registrations, using provided details like the webinar name, audience, duration, and language. The output is a structured set of sections (headline, optional subheadline, benefit-driven bullets, optional learning points and host bio, required logistics, and a repeated primary call-to-action) written in clear, concrete, grade-level language with character limits and compliance constraints to avoid hype or unsupported claims.
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

This prompt instructs the AI to act as a conversion-focused copywriter and produce plain-text landing page copy designed to maximize free webinar registrations, using provided details like the webinar name, audience, duration, and language. The output is a structured set of sections (headline, optional subheadline, benefit-driven bullets, optional learning points and host bio, required logistics, and a repeated primary call-to-action) written in clear, concrete, grade-level language with character limits and compliance constraints to avoid hype or unsupported claims.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Language` | Required |  | (none) |
| `Webinar_Name` | Required |  | (none) |
| `Target_Audience` | Required |  | (none) |
| `Webinar_Duration` | Required |  | (none) |



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
    - `Language`
  - `Webinar_Name`
  - `Target_Audience`
  - `Webinar_Duration`
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `webinar-landing-page-copy`).

Command form:

```bash
betterprompt generate webinar-landing-page-copy \
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
betterprompt generate webinar-landing-page-copy \
  --input Language=<value> \
  --input Webinar_Name=<value> \
  --input Target_Audience=<value> \
  --input Webinar_Duration=<value> \
  --model gpt-5-mini \
  --options '{}'
```