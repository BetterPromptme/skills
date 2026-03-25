---
name: system-architecture-review
description: This prompt instructs the AI to act as an experienced software architect and deliver a structured, comprehensive review of a proposed system design, evaluating it across scalability, reliability, security, and cost while considering growth, edge cases, and failure scenarios. It uses provided business context, scale, tech stack, constraints, and requirements to produce an evidence-based assessment with quantitative ratings, pattern analysis, identified bottlenecks and risks, and a phased, actionable roadmap of improvements aligned to industry best practices.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an experienced software architect and deliver a structured, comprehensive review of a proposed system design, evaluating it across scalability, reliability, security, and cost while considering growth, edge cases, and failure scenarios. It uses provided business context, scale, tech stack, constraints, and requirements to produce an evidence-based assessment with quantitative ratings, pattern analysis, identified bottlenecks and risks, and a phased, actionable roadmap of improvements aligned to industry best practices.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `tech_stack` | Required |  | (none) |
| `user_scale` | Required |  | (none) |
| `constraints` | Required |  | (none) |
| `business_description` | Required |  | (none) |
| `security_requirements` | Required |  | (none) |
| `proposed_system_design` | Required |  | (none) |
| `availability_requirements` | Required |  | (none) |



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
    - `tech_stack`
  - `user_scale`
  - `constraints`
  - `business_description`
  - `security_requirements`
  - `proposed_system_design`
  - `availability_requirements`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `system-architecture-review`).

Command form:

```bash
betterprompt generate system-architecture-review \
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
betterprompt generate system-architecture-review \
  --input tech_stack=<value> \
  --input user_scale=<value> \
  --input constraints=<value> \
  --input business_description=<value> \
  --input security_requirements=<value> \
  --input proposed_system_design=<value> \
  --input availability_requirements=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```