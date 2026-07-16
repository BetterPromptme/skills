---
name: find-your-digital-product-idea-using-competitor-reviews
description: This prompt instructs the AI to act as a niche-specific product research and direct-response marketing analyst: it gathers and synthesizes recurring complaints and negative feedback about leading offers in the chosen niche, identifies the core outcome customers want and the primary obstacles and unmet expectations creating a “hidden demand gap,” then turns those insights into ten concrete digital product opportunities with positioning, formats, hooks, feasibility and monetization scoring, recommended sales platforms, and a final ranking of the top three ideas most likely to drive fast organic sales.
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

This prompt instructs the AI to act as a niche-specific product research and direct-response marketing analyst: it gathers and synthesizes recurring complaints and negative feedback about leading offers in the chosen niche, identifies the core outcome customers want and the primary obstacles and unmet expectations creating a “hidden demand gap,” then turns those insights into ten concrete digital product opportunities with positioning, formats, hooks, feasibility and monetization scoring, recommended sales platforms, and a final ranking of the top three ideas most likely to drive fast organic sales.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `niche` | Optional | Your product niche | `App to customize shorcuts` |



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
    - `niche` (default: `App to customize shorcuts`)
- Optional: model and options.
  - Present the human with the default model **`claude-fable-5`** and its available options. Look up `claude-fable-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"high"}`.
  - If the human does not specify, defaults are used: model `claude-fable-5`, options `{"reasoningEffort":"high"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `find-your-digital-product-idea-using-competitor-reviews`).

Command form:

```bash
betterprompt generate find-your-digital-product-idea-using-competitor-reviews \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-fable-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate find-your-digital-product-idea-using-competitor-reviews \
  --input 'niche=App to customize shorcuts' \
  --model claude-fable-5 \
  --options '{"reasoningEffort":"high"}'
```