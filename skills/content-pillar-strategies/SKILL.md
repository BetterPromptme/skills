---
name: content-pillar-strategies
description: This prompt instructs the AI to act as a content marketing strategist and build a scalable content pillar strategy for a specified product or service using five pillar frameworks (brand objectives, customer journey, expertise level, target audience segments, and content themes). The outcome is a structured set of 15 broad pillar topics (three per framework), each with short descriptions, multiple reusable content angles, example content assets, and a summarized table, plus a brief implementation guide recommending channel mix, content allocation, and metrics—making clear assumptions if key inputs are missing.
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

This prompt instructs the AI to act as a content marketing strategist and build a scalable content pillar strategy for a specified product or service using five pillar frameworks (brand objectives, customer journey, expertise level, target audience segments, and content themes). The outcome is a structured set of 15 broad pillar topics (three per framework), each with short descriptions, multiple reusable content angles, example content assets, and a summarized table, plus a brief implementation guide recommending channel mix, content allocation, and metrics—making clear assumptions if key inputs are missing.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Product` | Optional |  | `AI Prompt Marketplace` |
| `Competitors` | Optional |  | `PromptBase; PromptHero; FlowGPT; AIPRM; Promptist` |
| `Key_Message` | Optional |  | `Key Message = Prompt is not just a command, it’s an asset. BetterPrompt helps you unlock its value.  Emotion = Trust + Empowerment + Growth.` |
| `Local_cuture` | Optional |  | `US context → emphasize innovation, speed, and earning potential.  EU context → emphasize privacy, trust, and compliance.` |
| `Market_Trends` | Optional |  | `Prompt = the new digital commodity → can be bought, traded, and protected.  The creator economy is shifting toward AI → prompt creators are the first wave.  The US/EU market is highly sensitive to productivity & marketing → strong demand for practical, business-focused prompts.` |
| `Marketing_Goals` | Optional |  | `The marketing objective of BetterPrompt is to build brand awareness and grow its user base (both creators and users), increase the number of “successful runs” to drive revenue, and position BetterPrompt as a leading platform in the Prompt Economy across the US and EU.` |
| `Target_Audience` | Optional |  | `Creators → want to monetize prompts (supply side).  Businesses & Solopreneurs (US/EU) → want high-quality prompts for productivity and marketing (demand side).  Learners & General Users → want to explore and learn (long-tail demand).` |
| `Preferred_Channels` | Optional |  | `LinkedIn & Twitter → thought leadership + expertise.  TikTok/YouTube Shorts → viral reach, creator market.  Reddit/Product Hunt → launch & buzz.  Discord → retention & community building.` |
| `Budget_and_resources` | Optional |  | `Budget: prioritize Marketing (US/EU reach) & Product Development (Private Mode, monetization features).  Resources: require a lean team (tech + growth + community), strong payment system, and scalable cloud infrastructure.  Strategy: run low-cost viral campaigns (TikTok, Product Hunt, Twitter) to maximize awareness while keeping paid ads budget moderate.` |
| `Unique_Selling_Proposition` | Optional |  | `USP of BetterPrompt = “A secure prompt marketplace where creators can earn from every successful run — without exposing their original prompt.”` |



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
    - `Product` (default: `AI Prompt Marketplace`)
  - `Competitors` (default: `PromptBase; PromptHero; FlowGPT; AIPRM; Promptist`)
  - `Key_Message` (default: `Key Message = Prompt is not just a command, it’s an asset. BetterPrompt helps you unlock its value.  Emotion = Trust + Empowerment + Growth.`)
  - `Local_cuture` (default: `US context → emphasize innovation, speed, and earning potential.  EU context → emphasize privacy, trust, and compliance.`)
  - `Market_Trends` (default: `Prompt = the new digital commodity → can be bought, traded, and protected.  The creator economy is shifting toward AI → prompt creators are the first wave.  The US/EU market is highly sensitive to productivity & marketing → strong demand for practical, business-focused prompts.`)
  - `Marketing_Goals` (default: `The marketing objective of BetterPrompt is to build brand awareness and grow its user base (both creators and users), increase the number of “successful runs” to drive revenue, and position BetterPrompt as a leading platform in the Prompt Economy across the US and EU.`)
  - `Target_Audience` (default: `Creators → want to monetize prompts (supply side).  Businesses & Solopreneurs (US/EU) → want high-quality prompts for productivity and marketing (demand side).  Learners & General Users → want to explore and learn (long-tail demand).`)
  - `Preferred_Channels` (default: `LinkedIn & Twitter → thought leadership + expertise.  TikTok/YouTube Shorts → viral reach, creator market.  Reddit/Product Hunt → launch & buzz.  Discord → retention & community building.`)
  - `Budget_and_resources` (default: `Budget: prioritize Marketing (US/EU reach) & Product Development (Private Mode, monetization features).  Resources: require a lean team (tech + growth + community), strong payment system, and scalable cloud infrastructure.  Strategy: run low-cost viral campaigns (TikTok, Product Hunt, Twitter) to maximize awareness while keeping paid ads budget moderate.`)
  - `Unique_Selling_Proposition` (default: `USP of BetterPrompt = “A secure prompt marketplace where creators can earn from every successful run — without exposing their original prompt.”`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-nano`** and its available options. Look up `gpt-5-nano` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-nano`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `content-pillar-strategies`).

Command form:

```bash
betterprompt generate content-pillar-strategies \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-nano`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate content-pillar-strategies \
  --input 'Product=AI Prompt Marketplace' \
  --input 'Competitors=PromptBase; PromptHero; FlowGPT; AIPRM; Promptist' \
  --input 'Key_Message=Key Message = Prompt is not just a command, it’s an asset. BetterPrompt helps you unlock its value.  Emotion = Trust + Empowerment + Growth.' \
  --input 'Local_cuture=US context → emphasize innovation, speed, and earning potential.  EU context → emphasize privacy, trust, and compliance.' \
  --input 'Market_Trends=Prompt = the new digital commodity → can be bought, traded, and protected.  The creator economy is shifting toward AI → prompt creators are the first wave.  The US/EU market is highly sensitive to productivity & marketing → strong demand for practical, business-focused prompts.' \
  --input 'Marketing_Goals=The marketing objective of BetterPrompt is to build brand awareness and grow its user base (both creators and users), increase the number of “successful runs” to drive revenue, and position BetterPrompt as a leading platform in the Prompt Economy across the US and EU.' \
  --input 'Target_Audience=Creators → want to monetize prompts (supply side).  Businesses & Solopreneurs (US/EU) → want high-quality prompts for productivity and marketing (demand side).  Learners & General Users → want to explore and learn (long-tail demand).' \
  --input 'Preferred_Channels=LinkedIn & Twitter → thought leadership + expertise.  TikTok/YouTube Shorts → viral reach, creator market.  Reddit/Product Hunt → launch & buzz.  Discord → retention & community building.' \
  --input 'Budget_and_resources=Budget: prioritize Marketing (US/EU reach) & Product Development (Private Mode, monetization features).  Resources: require a lean team (tech + growth + community), strong payment system, and scalable cloud infrastructure.  Strategy: run low-cost viral campaigns (TikTok, Product Hunt, Twitter) to maximize awareness while keeping paid ads budget moderate.' \
  --input 'Unique_Selling_Proposition=USP of BetterPrompt = “A secure prompt marketplace where creators can earn from every successful run — without exposing their original prompt.”' \
  --model gpt-5-nano \
  --options '{}'
```