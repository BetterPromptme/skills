---
name: improve-your-social-post
description: This prompt instructs an AI to rewrite a provided social media post into a more engaging, high-performing version that preserves the original message while upgrading the hook, pacing, clarity, emotional impact, and platform-native rhythm. It sets specific tone and style requirements, defines the intended audience, and adds guardrails to avoid unsafe or misleading content. The expected outcome is an original, scroll-stopping post that reads like creator-level copy and ends with a strong, natural call-to-action.
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

This prompt instructs an AI to rewrite a provided social media post into a more engaging, high-performing version that preserves the original message while upgrading the hook, pacing, clarity, emotional impact, and platform-native rhythm. It sets specific tone and style requirements, defines the intended audience, and adds guardrails to avoid unsafe or misleading content. The expected outcome is an original, scroll-stopping post that reads like creator-level copy and ends with a strong, natural call-to-action.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Tone` | Required |  | (none) |
| `Your_initial_post` | Required |  | (none) |



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
    - `Tone`
  - `Your_initial_post`
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `improve-your-social-post`).

Command form:

```bash
betterprompt generate improve-your-social-post \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate improve-your-social-post \
  --input Tone=<value> \
  --input Your_initial_post=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```