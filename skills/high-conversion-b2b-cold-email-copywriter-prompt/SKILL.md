---
name: high-conversion-b2b-cold-email-copywriter-prompt
description: This prompt instructs the AI to act as an expert B2B cold email copywriter and, using your provided business inputs (target persona, core problem/value hook, product details, tone preferences, and optional relevance triggers), produce three high-open-rate subject line options plus a concise 100–150 word personalized cold email. The resulting email is designed to feel natural and non-fluffy, lead with an ICP-relevant hook, include a standout insight or stat, connect the offering directly to the recipient’s pain point, spark curiosity rather than oversell, and finish with a clear low-friction call to action, optionally capped with a brief P.S. for personality or urgency.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an expert B2B cold email copywriter and, using your provided business inputs (target persona, core problem/value hook, product details, tone preferences, and optional relevance triggers), produce three high-open-rate subject line options plus a concise 100–150 word personalized cold email. The resulting email is designed to feel natural and non-fluffy, lead with an ICP-relevant hook, include a standout insight or stat, connect the offering directly to the recipient’s pain point, spark curiosity rather than oversell, and finish with a clear low-friction call to action, optionally capped with a brief P.S. for personality or urgency.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Action` | Required |  | (none) |
| `Product` | Required |  | (none) |
| `Preference` | Required |  | (none) |
| `Target_Persona` | Required |  | (none) |
| `Core_topic_or_problem` | Required |  | (none) |
| `Trigger_for_relevance` | Required |  | (none) |



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
    - `Action`
  - `Product`
  - `Preference`
  - `Target_Persona`
  - `Core_topic_or_problem`
  - `Trigger_for_relevance`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `high-conversion-b2b-cold-email-copywriter-prompt`).

Command form:

```bash
betterprompt generate high-conversion-b2b-cold-email-copywriter-prompt \
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
betterprompt generate high-conversion-b2b-cold-email-copywriter-prompt \
  --input Action=<value> \
  --input Product=<value> \
  --input Preference=<value> \
  --input Target_Persona=<value> \
  --input Core_topic_or_problem=<value> \
  --input Trigger_for_relevance=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```