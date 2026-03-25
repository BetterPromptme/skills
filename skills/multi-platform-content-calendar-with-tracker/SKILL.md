---
name: multi-platform-content-calendar-with-tracker
description: This prompt instructs the AI to act as a short-form, cross-platform social growth strategist and produce a ready-to-execute 7-day cross-posting plan for a campaign, tailored to a specified timezone and campaign inputs. The output is a platform-aware calendar with recommended posting times per channel, practical editing/logistics guidance (aspect ratios, cropping, and cover/thumbnail text placement), a reusable two-line caption/description template with a clear CTA, and a performance tracker table to log key metrics (views, watch time, saves, comments, clicks, opt-ins) so the creator can measure and optimize reach, engagement, and conversions across platforms.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a short-form, cross-platform social growth strategist and produce a ready-to-execute 7-day cross-posting plan for a campaign, tailored to a specified timezone and campaign inputs. The output is a platform-aware calendar with recommended posting times per channel, practical editing/logistics guidance (aspect ratios, cropping, and cover/thumbnail text placement), a reusable two-line caption/description template with a clear CTA, and a performance tracker table to log key metrics (views, watch time, saves, comments, clicks, opt-ins) so the creator can measure and optimize reach, engagement, and conversions across platforms.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CTA` | Optional | The short call-to-action (CTA) that should appear at the end of the 2-line description template. | `Click link in bio 🌐` |
| `TIMEZONE` | Optional | The posting timezone you want the schedule optimized for, so posting times match your target audience. | `America/New_York` |
| `CONTENT_TYPE` | Optional | The main theme or style of content for the 7-day posting schedule. This sets the direction of the posts. | `Behind-the-scenes of startup life` |
| `CAMPAIGN_NAME` | Optional | The name of your campaign or content series, used for organization and consistency. | `7 Days of Productivity Hacks` |
| `CONTENT_FOCUS` | Optional | The main focus, niche, or message you want each day’s posts to cover. The AI will generate specific titles around this focus. | `Daily productivity hacks for entrepreneurs` |



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

- Optional text inputs (use defaults if not provided by the human):
    - `CTA` (default: `Click link in bio 🌐`)
  - `TIMEZONE` (default: `America/New_York`)
  - `CONTENT_TYPE` (default: `Behind-the-scenes of startup life`)
  - `CAMPAIGN_NAME` (default: `7 Days of Productivity Hacks`)
  - `CONTENT_FOCUS` (default: `Daily productivity hacks for entrepreneurs`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `multi-platform-content-calendar-with-tracker`).

Command form:

```bash
betterprompt generate multi-platform-content-calendar-with-tracker \
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
betterprompt generate multi-platform-content-calendar-with-tracker \
  --input 'CTA=Click link in bio 🌐' \
  --input TIMEZONE=America/New_York \
  --input 'CONTENT_TYPE=Behind-the-scenes of startup life' \
  --input 'CAMPAIGN_NAME=7 Days of Productivity Hacks' \
  --input 'CONTENT_FOCUS=Daily productivity hacks for entrepreneurs' \
  --model gpt-5 \
  --options '{}'
```