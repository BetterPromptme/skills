---
name: develop-pricing-strategy
description: This prompt instructs the AI to act as a senior pricing strategist for a DTC brand and produce a data-driven, value-based pricing plan using provided product, cost, audience, and competitor price inputs. The expected outcome is a structured strategy that benchmarks competitors, recommends an optimal price tied to perceived value and unit economics, designs discount and promotion mechanics (including psychological tactics and urgency/scarcity triggers), proposes A/B tests for price sensitivity, and outlines an ongoing optimization process with metrics, tools, and review cadence to balance competitiveness and profitability.
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

This prompt instructs the AI to act as a senior pricing strategist for a DTC brand and produce a data-driven, value-based pricing plan using provided product, cost, audience, and competitor price inputs. The expected outcome is a structured strategy that benchmarks competitors, recommends an optimal price tied to perceived value and unit economics, designs discount and promotion mechanics (including psychological tactics and urgency/scarcity triggers), proposes A/B tests for price sensitivity, and outlines an ongoing optimization process with metrics, tools, and review cadence to balance competitiveness and profitability.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Target market` | Required |  | (none) |
| `Product Description` | Required |  | (none) |
| `Production cost per unit` | Required |  | (none) |
| `Main competitors & their prices` | Required |  | (none) |



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
    - `Target market`
  - `Product Description`
  - `Production cost per unit`
  - `Main competitors & their prices`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `develop-pricing-strategy`).

Command form:

```bash
betterprompt generate develop-pricing-strategy \
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
betterprompt generate develop-pricing-strategy \
  --input Target market=<value> \
  --input Product Description=<value> \
  --input Production cost per unit=<value> \
  --input Main competitors & their prices=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```