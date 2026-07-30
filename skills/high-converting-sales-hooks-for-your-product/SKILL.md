---
name: high-converting-sales-hooks-for-your-product
description: This prompt instructs the AI to act as a direct-response copywriter and positioning strategist for a digital product, first analyzing the niche’s competitive messaging to identify differentiation and a unique advantage, then defining the audience’s core dream outcome and biggest obstacle, and finally generating and ranking multiple high-conversion, scroll-stopping hook and copy variants across key channels (short-form video, social posts, email, landing pages, VSL), while requiring the AI to ask for missing product, audience, or USP details before drafting.
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

This prompt instructs the AI to act as a direct-response copywriter and positioning strategist for a digital product, first analyzing the niche’s competitive messaging to identify differentiation and a unique advantage, then defining the audience’s core dream outcome and biggest obstacle, and finally generating and ranking multiple high-conversion, scroll-stopping hook and copy variants across key channels (short-form video, social posts, email, landing pages, VSL), while requiring the AI to ask for missing product, audience, or USP details before drafting.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `niche` | Required | write the niche of your product | (none) |
| `product` | Required | your product name, the more detailed the better | (none) |
| `target_customers` | Required | detailed description of who your target customers are, including gender, age, location, jobs, etc. | (none) |



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
  - `target_customers`
- Optional: model and options.
  - Present the human with the default model **`gpt-5.5`** and its available options. Look up `gpt-5.5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `gpt-5.5`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `high-converting-sales-hooks-for-your-product`).

Command form:

```bash
betterprompt generate high-converting-sales-hooks-for-your-product \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate high-converting-sales-hooks-for-your-product \
  --input niche=<value> \
  --input product=<value> \
  --input target_customers=<value> \
  --model gpt-5.5 \
  --options '{"reasoningEffort":"none"}'
```