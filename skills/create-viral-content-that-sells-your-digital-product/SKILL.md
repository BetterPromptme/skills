---
name: create-viral-content-that-sells-your-digital-product
description: This prompt instructs the AI to research and reverse-engineer top-performing sales content in a specified niche across chosen platforms, distill the recurring viral hooks, psychological triggers, storytelling structures, and CTA patterns into a reusable template system, then generate a large set of original, platform-native short-form and post-style sales assets tailored to a defined product and target customer—each with performance rationale and conversion-focused elements—culminating in a ranked top 10 predicted to drive the most organic sales while requesting any missing product/audience details and avoiding unverified regulated claims.
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

This prompt instructs the AI to research and reverse-engineer top-performing sales content in a specified niche across chosen platforms, distill the recurring viral hooks, psychological triggers, storytelling structures, and CTA patterns into a reusable template system, then generate a large set of original, platform-native short-form and post-style sales assets tailored to a defined product and target customer—each with performance rationale and conversion-focused elements—culminating in a ranked top 10 predicted to drive the most organic sales while requesting any missing product/audience details and avoiding unverified regulated claims.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `niche` | Required | the industry or market niche where you're selling | (none) |
| `product` | Required | describe your product as detailed as possible | (none) |
| `platform` | Required | TIKTOK / INSTAGRAM / YOUTUBE / FACEBOOK / X | (none) |
| `target_customers` | Required | describe your target customers, go specific into gender, age, location, etc. | (none) |



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
    - `niche`
  - `product`
  - `platform`
  - `target_customers`
- Optional: model and options.
  - Present the human with the default model **`claude-fable-5`** and its available options. Look up `claude-fable-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"minimal"}`.
  - If the human does not specify, defaults are used: model `claude-fable-5`, options `{"reasoningEffort":"minimal"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `create-viral-content-that-sells-your-digital-product`).

Command form:

```bash
betterprompt generate create-viral-content-that-sells-your-digital-product \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-fable-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"minimal"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate create-viral-content-that-sells-your-digital-product \
  --input niche=<value> \
  --input product=<value> \
  --input platform=<value> \
  --input target_customers=<value> \
  --model claude-fable-5 \
  --options '{"reasoningEffort":"minimal"}'
```