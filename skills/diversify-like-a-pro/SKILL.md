---
name: diversify-like-a-pro
description: This prompt instructs the AI to act as an experienced portfolio strategist and produce a structured, educational diversification blueprint for an experienced investor transitioning from a concentrated, single-industry portfolio to a multi-asset, multi-sector approach. Using the investor’s stated goals, risk tolerance, time horizon, sector interests, portfolio size range, and liquidity needs, the AI synthesizes the profile, explains concentration risks and the rationale for diversification, proposes example asset classes with risk/return context, provides sample target allocation ranges that sum to 100%, and outlines a generic, tax-aware implementation and monitoring plan, all preceded by a clear disclaimer that it is illustrative and not personalized financial advice.
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

This prompt instructs the AI to act as an experienced portfolio strategist and produce a structured, educational diversification blueprint for an experienced investor transitioning from a concentrated, single-industry portfolio to a multi-asset, multi-sector approach. Using the investor’s stated goals, risk tolerance, time horizon, sector interests, portfolio size range, and liquidity needs, the AI synthesizes the profile, explains concentration risks and the rationale for diversification, proposes example asset classes with risk/return context, provides sample target allocation ranges that sum to 100%, and outlines a generic, tax-aware implementation and monitoring plan, all preceded by a clear disclaimer that it is illustrative and not personalized financial advice.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Risk_Tolerance` | Required |  | (none) |
| `Financial_Goals` | Required |  | (none) |
| `Liquidity_Needs` | Required |  | (none) |
| `Investment_Timeline` | Required |  | (none) |
| `Current_Industry_Focus` | Required |  | (none) |
| `Current_Portfolio_Value` | Required |  | (none) |
| `Interested_Sectors_Assets` | Required |  | (none) |



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
    - `Risk_Tolerance`
  - `Financial_Goals`
  - `Liquidity_Needs`
  - `Investment_Timeline`
  - `Current_Industry_Focus`
  - `Current_Portfolio_Value`
  - `Interested_Sectors_Assets`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `diversify-like-a-pro`).

Command form:

```bash
betterprompt generate diversify-like-a-pro \
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
betterprompt generate diversify-like-a-pro \
  --input Risk_Tolerance=<value> \
  --input Financial_Goals=<value> \
  --input Liquidity_Needs=<value> \
  --input Investment_Timeline=<value> \
  --input Current_Industry_Focus=<value> \
  --input Current_Portfolio_Value=<value> \
  --input Interested_Sectors_Assets=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```