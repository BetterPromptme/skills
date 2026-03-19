---
name: saas-idea-validator
description: This prompt instructs the AI to act as an experienced SaaS analyst and produce a structured validation report for a given SaaS concept, using the provided idea details, target audience, pricing model, and stage. It evaluates the opportunity across market, competition, product-market fit, technical feasibility, monetization, and execution risk, assigns scores, summarizes key risks, and outputs clear next steps, success metrics, and estimated resources to guide a founder’s go/no-go decision.
skillVersionId: 019ce19a-eca5-7028-aefe-b6f5f5497b82
---

## What it does

This prompt instructs the AI to act as an experienced SaaS analyst and produce a structured validation report for a given SaaS concept, using the provided idea details, target audience, pricing model, and stage. It evaluates the opportunity across market, competition, product-market fit, technical feasibility, monetization, and execution risk, assigns scores, summarizes key risks, and outputs clear next steps, success metrics, and estimated resources to guide a founder’s go/no-go decision.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `idea` | Optional | Describe your SaaS product idea, including the main problem it solves and key features | `An AI-powered tool that automatically generates changelogs from git commits` |
| `stage` | Required | What stage is your idea currently in? Allowed options: mvp, concept, scaling, launched, research | (none) |
| `pricingModel` | Required | What pricing model are you considering? Allowed options: usage, onetime, freemium, enterprise, subscription | (none) |
| `targetAudience` | Optional | Who is your primary target audience or customer segment? | `Developer teams and open-source maintainers` |



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
    - `stage`
  - `pricingModel`
- Optional text inputs (use defaults if not provided by the human):
    - `idea` (default: `An AI-powered tool that automatically generates changelogs from git commits`)
  - `targetAudience` (default: `Developer teams and open-source maintainers`)
- Optional: model and options.
  - Present the human with the default model **`claude-sonnet-4`** and its available options. Look up `claude-sonnet-4` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `claude-sonnet-4`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019ce19a-eca5-7028-aefe-b6f5f5497b82`).

Command form:

```bash
betterprompt generate 019ce19a-eca5-7028-aefe-b6f5f5497b82 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-sonnet-4`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019ce19a-eca5-7028-aefe-b6f5f5497b82 \
  --input 'idea=An AI-powered tool that automatically generates changelogs from git commits' \
  --input stage=mvp \
  --input pricingModel=usage \
  --input 'targetAudience=Developer teams and open-source maintainers' \
  --model claude-sonnet-4 \
  --options '{}'
```
