---
name: research-overview-of-industry-and-industry-topics
description: This prompt instructs the AI to act as an experienced semantic SEO and topical authority strategist for a specified brand and industry, then build a comprehensive, four-level topical map centered on a given seed keyword. The outcome is a structured content-planning framework with at least 10 subcategories and a minimum of 8 uniquely assigned, nested related keywords per subcategory, tailored to the target audience and market to guide systematic content creation without topic duplication.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an experienced semantic SEO and topical authority strategist for a specified brand and industry, then build a comprehensive, four-level topical map centered on a given seed keyword. The outcome is a structured content-planning framework with at least 10 subcategories and a minimum of 8 uniquely assigned, nested related keywords per subcategory, tailored to the target audience and market to guide systematic content creation without topic duplication.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Keyword` | Optional |  | `content SEO website` |
| `Industry` | Optional |  | `comestic` |
| `Solution` | Optional |  | `Designing profile, catalog, menu, advertising images, website banner, fanpage care and SEO standard content for website, email marketing, landing page design script` |
| `Brand_name` | Optional |  | `Cocoon` |
| `Target_Market` | Optional |  | `US` |
| `Target_audience` | Optional |  | `ROI-driven SMB marketers (24–40, US). Want speed, trust, and cost clarity; blocked by budget and quality concerns.` |



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
    - `Keyword` (default: `content SEO website`)
  - `Industry` (default: `comestic`)
  - `Solution` (default: `Designing profile, catalog, menu, advertising images, website banner, fanpage care and SEO standard content for website, email marketing, landing page design script`)
  - `Brand_name` (default: `Cocoon`)
  - `Target_Market` (default: `US`)
  - `Target_audience` (default: `ROI-driven SMB marketers (24–40, US). Want speed, trust, and cost clarity; blocked by budget and quality concerns.`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `research-overview-of-industry-and-industry-topics`).

Command form:

```bash
betterprompt generate research-overview-of-industry-and-industry-topics \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate research-overview-of-industry-and-industry-topics \
  --input 'Keyword=content SEO website' \
  --input Industry=comestic \
  --input 'Solution=Designing profile, catalog, menu, advertising images, website banner, fanpage care and SEO standard content for website, email marketing, landing page design script' \
  --input Brand_name=Cocoon \
  --input Target_Market=US \
  --input 'Target_audience=ROI-driven SMB marketers (24–40, US). Want speed, trust, and cost clarity; blocked by budget and quality concerns.' \
  --model gpt-5-mini \
  --options '{}'
```
