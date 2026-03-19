---
name: analyze-any-research-paper
description: This prompt instructs the AI to produce a structured analysis of a provided research paper, summarizing its main findings and conclusions, detailing the study’s methodologies (including sample sizes, data collection methods, and statistical tests), and calling out significant quantitative results. It also requires a critical review that surfaces limitations, inconsistencies, and potential biases, with page-referenced citations for each major point. The outcome is a clearly formatted report consisting of an executive summary, page-numbered key findings, a methodology overview, a critical analysis section, and proposed directions for future research based on identified gaps.
skillVersionId: 019a90ff-c6bf-7049-b898-112ddef247b8
---

## What it does

This prompt instructs the AI to produce a structured analysis of a provided research paper, summarizing its main findings and conclusions, detailing the study’s methodologies (including sample sizes, data collection methods, and statistical tests), and calling out significant quantitative results. It also requires a critical review that surfaces limitations, inconsistencies, and potential biases, with page-referenced citations for each major point. The outcome is a clearly formatted report consisting of an executive summary, page-numbered key findings, a methodology overview, a critical analysis section, and proposed directions for future research based on identified gaps.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Paper_content` | Required |  | (none) |



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
    - `Paper_content`
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a90ff-c6bf-7049-b898-112ddef247b8`).

Command form:

```bash
betterprompt generate 019a90ff-c6bf-7049-b898-112ddef247b8 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a90ff-c6bf-7049-b898-112ddef247b8 \
  --input Paper_content=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```
