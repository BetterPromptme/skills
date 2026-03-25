---
name: ai-text-prompt-generator
description: This prompt configures the AI to act as a text-only prompt generator: given any user-provided topic, it outputs exactly 10 distinct, professionally structured prompts that explore varied angles and use cases while remaining safe and ethical. Each generated prompt is immediately usable in chat-based AI systems and includes a clear role, task, objectives, input variables, constraints, and a specified output format, without producing any topic answers or any visual-related requests.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt configures the AI to act as a text-only prompt generator: given any user-provided topic, it outputs exactly 10 distinct, professionally structured prompts that explore varied angles and use cases while remaining safe and ethical. Each generated prompt is immediately usable in chat-based AI systems and includes a clear role, task, objectives, input variables, constraints, and a specified output format, without producing any topic answers or any visual-related requests.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_topic` | Required | Wrtie down the topic so that this chat bot can create high-quality prompts related to any topic you provide.  | (none) |



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
    - `Your_topic`
- Optional: model and options.
  - Present the human with the default model **`gpt-5.1`** and its available options. Look up `gpt-5.1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-5.1`, options `{"reasoningEffort":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `ai-text-prompt-generator`).

Command form:

```bash
betterprompt generate ai-text-prompt-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate ai-text-prompt-generator \
  --input Your_topic=<value> \
  --model gpt-5.1 \
  --options '{"reasoningEffort":"medium"}'
```