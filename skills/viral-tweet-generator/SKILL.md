---
name: viral-tweet-generator
description: This prompt instructs the AI to act as a viral tweet strategist and produce 10 distinct, high-performing tweet drafts tailored to a specified topic, audience, goal, tone, optional call-to-action, and length. It enforces strict platform-native constraints (character limit, no hashtags/emojis/fluff, no fabricated stats, no unsafe content) and requires variety across multiple hook styles. The outcome is a clean, numbered list of tweet-ready options, each labeled with its hook type and presented without any extra commentary.
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

This prompt instructs the AI to act as a viral tweet strategist and produce 10 distinct, high-performing tweet drafts tailored to a specified topic, audience, goal, tone, optional call-to-action, and length. It enforces strict platform-native constraints (character limit, no hashtags/emojis/fluff, no fabricated stats, no unsafe content) and requires variety across multiple hook styles. The outcome is a clean, numbered list of tweet-ready options, each labeled with its hook type and presented without any extra commentary.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CTA` | Required | The action you want readers to take (follow, reply, bookmark, DM, click). | (none) |
| `GOAL` | Required | The outcome you want (teach, provoke debate, entertain, sell, or announce something). | (none) |
| `TONE` | Required | The vibe/style of the writing (e.g., bold, friendly, contrarian). | (none) |
| `TOPIC` | Required | The main idea the tweet is about (one clear subject). | (none) |
| `LENGTH` | Required | How tight the tweet should be on characters (shorter = punchier, max = fuller idea). | (none) |
| `AUDIENCE` | Required | Who the tweets are written for (niche, role, interest group). | (none) |



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
    - `CTA`
  - `GOAL`
  - `TONE`
  - `TOPIC`
  - `LENGTH`
  - `AUDIENCE`
- Optional: model and options.
  - Present the human with the default model **`gpt-5.2`** and its available options. Look up `gpt-5.2` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `gpt-5.2`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `viral-tweet-generator`).

Command form:

```bash
betterprompt generate viral-tweet-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate viral-tweet-generator \
  --input CTA=<value> \
  --input GOAL=<value> \
  --input TONE=<value> \
  --input TOPIC=<value> \
  --input LENGTH=<value> \
  --input AUDIENCE=<value> \
  --model gpt-5.2 \
  --options '{"reasoningEffort":"none"}'
```