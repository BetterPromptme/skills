---
name: real-estate-seller-magnet-5-high-impact-social-media-post-ideas
description: This prompt instructs the AI to generate five seller-focused social media post concepts tailored to a specific real estate role, market/property niche, location, target platforms, and desired tone, each designed to advance a stated campaign goal. For each concept, it outputs the theme, the optimal content format per platform, a short ready-to-post caption, market-relevant hashtags, and a clear call-to-action aimed at attracting and converting potential home sellers.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate five seller-focused social media post concepts tailored to a specific real estate role, market/property niche, location, target platforms, and desired tone, each designed to advance a stated campaign goal. For each concept, it outputs the theme, the optimal content format per platform, a short ready-to-post caption, market-relevant hashtags, and a clear call-to-action aimed at attracting and converting potential home sellers.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `location` | Required |  | (none) |
| `campaign_goal` | Required |  | (none) |
| `tone_of_voice` | Required |  | (none) |
| `target_platforms` | Required |  | (none) |
| `property_type_or_market` | Required |  | (none) |
| `real_estate_professional_type` | Required |  | (none) |



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
    - `location`
  - `campaign_goal`
  - `tone_of_voice`
  - `target_platforms`
  - `property_type_or_market`
  - `real_estate_professional_type`
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `real-estate-seller-magnet-5-high-impact-social-media-post-ideas`).

Command form:

```bash
betterprompt generate real-estate-seller-magnet-5-high-impact-social-media-post-ideas \
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
betterprompt generate real-estate-seller-magnet-5-high-impact-social-media-post-ideas \
  --input location=<value> \
  --input campaign_goal=<value> \
  --input tone_of_voice=<value> \
  --input target_platforms=<value> \
  --input property_type_or_market=<value> \
  --input real_estate_professional_type=<value> \
  --model gpt-4o \
  --options '{}'
```