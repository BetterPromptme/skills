---
name: tiktok-viral-video-generator
description: This prompt instructs the AI to act as a TikTok content strategist and produce three viral-ready short-form video concepts tailored to a specific product or niche, audience, goal, vibe, and region. For each concept, it delivers a strong opening hook, a clear format/angle, a concise storyline of what unfolds, and an optional call-to-action, while also requiring the AI to ask up to two clarifying questions if the provided inputs are too vague. The outcome is a set of shareable, high-converting TikTok video ideas optimized for retention and engagement.
skillVersionId: 019873bf-71f1-7a4f-bf31-f96ebc410f09
---

## What it does

This prompt instructs the AI to act as a TikTok content strategist and produce three viral-ready short-form video concepts tailored to a specific product or niche, audience, goal, vibe, and region. For each concept, it delivers a strong opening hook, a clear format/angle, a concise storyline of what unfolds, and an optional call-to-action, while also requiring the AI to ask up to two clarifying questions if the provided inputs are too vague. The outcome is a set of shareable, high-converting TikTok video ideas optimized for retention and engagement.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Target_audience` | Required |  | (none) |
| `Goal_of_the_video` | Required |  | (none) |
| `Language_or_region` | Required |  | (none) |
| `Product_Topic_Niche` | Required |  | (none) |
| `Vibe_style_preference` | Required |  | (none) |



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
    - `Target_audience`
  - `Goal_of_the_video`
  - `Language_or_region`
  - `Product_Topic_Niche`
  - `Vibe_style_preference`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019873bf-71f1-7a4f-bf31-f96ebc410f09`).

Command form:

```bash
betterprompt generate 019873bf-71f1-7a4f-bf31-f96ebc410f09 \
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
betterprompt generate 019873bf-71f1-7a4f-bf31-f96ebc410f09 \
  --input Target_audience=<value> \
  --input Goal_of_the_video=<value> \
  --input Language_or_region=<value> \
  --input Product_Topic_Niche=<value> \
  --input Vibe_style_preference=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
