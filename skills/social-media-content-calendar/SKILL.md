---
name: social-media-content-calendar
description: This prompt instructs the AI to act as a social media marketing expert and produce a multi-week, platform-specific content calendar for a specified business, organized by week and day. The output delivers cohesive weekly themes plus daily post plans that include post type, ready-to-use captions, hashtag mixes, suggested best posting times, and visual concepts, while adhering to defined content-type ratios and incorporating recurring engagement opportunities and clear calls-to-action. It also concludes with a set of weekly performance metrics to monitor, resulting in an executable, goal-aligned publishing plan for the chosen duration and platform(s).
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

This prompt instructs the AI to act as a social media marketing expert and produce a multi-week, platform-specific content calendar for a specified business, organized by week and day. The output delivers cohesive weekly themes plus daily post plans that include post type, ready-to-use captions, hashtag mixes, suggested best posting times, and visual concepts, while adhering to defined content-type ratios and incorporating recurring engagement opportunities and clear calls-to-action. It also concludes with a set of weekly performance metrics to monitor, resulting in an executable, goal-aligned publishing plan for the chosen duration and platform(s).

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `weeks` | Required | How many weeks of content to generate Allowed options: 1, 2, 4 | (none) |
| `business` | Optional | Describe your business, target audience, and main products/services | `Online fitness coaching for busy professionals` |
| `platform` | Required | Which social media platform(s) to create content for Allowed options: all, tiktok, twitter, facebook, linkedin, instagram | (none) |



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
    - `weeks`
  - `platform`
- Optional text inputs (use defaults if not provided by the human):
    - `business` (default: `Online fitness coaching for busy professionals`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5.2`** and its available options. Look up `gpt-5.2` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `gpt-5.2`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `social-media-content-calendar`).

Command form:

```bash
betterprompt generate social-media-content-calendar \
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
betterprompt generate social-media-content-calendar \
  --input weeks=1 \
  --input 'business=Online fitness coaching for busy professionals' \
  --input platform=all \
  --model gpt-5.2 \
  --options '{"reasoningEffort":"none"}'
```