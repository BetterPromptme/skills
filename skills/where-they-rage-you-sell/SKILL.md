---
name: where-they-rage-you-sell
description: This prompt instructs the AI to act as a customer intelligence researcher who scans a large set of online platforms to find recent, high-volume discussions about problems related to a specified product, then extracts and ranks users’ exact pain points with verbatim quotes, identifies solution-seekers versus venters along with their objections, and delivers a report listing the best communities to monitor or join (with links), the strongest recurring issues and language patterns, buyer intent signals such as urgency and budget, and a prioritized strategy for where and how to engage first.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a customer intelligence researcher who scans a large set of online platforms to find recent, high-volume discussions about problems related to a specified product, then extracts and ranks users’ exact pain points with verbatim quotes, identifies solution-seekers versus venters along with their objections, and delivers a report listing the best communities to monitor or join (with links), the strongest recurring issues and language patterns, buyer intent signals such as urgency and budget, and a prioritized strategy for where and how to engage first.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Goal` | Required |  | (none) |
| `Pain` | Required |  | (none) |
| `problem` | Required |  | (none) |
| `process` | Required |  | (none) |
| `competitor` | Required |  | (none) |
| `desired_outcome` | Required |  | (none) |
| `INSERT_YOUR_PRODUCT` | Required |  | (none) |



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
    - `Goal`
  - `Pain`
  - `problem`
  - `process`
  - `competitor`
  - `desired_outcome`
  - `INSERT_YOUR_PRODUCT`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `where-they-rage-you-sell`).

Command form:

```bash
betterprompt generate where-they-rage-you-sell \
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
betterprompt generate where-they-rage-you-sell \
  --input Goal=<value> \
  --input Pain=<value> \
  --input problem=<value> \
  --input process=<value> \
  --input competitor=<value> \
  --input desired_outcome=<value> \
  --input INSERT_YOUR_PRODUCT=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
