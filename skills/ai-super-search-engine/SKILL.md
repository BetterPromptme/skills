---
name: ai-super-search-engine
description: This prompt sets up an AI “super search” workflow that takes a user’s specified search term, gathers recent and credible information from multiple online sources, and presents the findings in a structured, Google-style SERP list (title, brief summary, URL, source, date) followed by a categorized insight summary (e.g., guides, discussions, videos, code, tools, key takeaways), while explicitly avoiding fabricated citations and clearly flagging any uncertainty.
skillVersionId: 019afd2a-8152-752f-9e3d-d28ce6b62860
---

## What it does

This prompt sets up an AI “super search” workflow that takes a user’s specified search term, gathers recent and credible information from multiple online sources, and presents the findings in a structured, Google-style SERP list (title, brief summary, URL, source, date) followed by a categorized insight summary (e.g., guides, discussions, videos, code, tools, key takeaways), while explicitly avoiding fabricated citations and clearly flagging any uncertainty.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Search_term` | Required | Type the topic you want the AI to search for. This can be anything, such as a question, a concept, a product, a coding issue, or any subject you want fast, high-quality results on. | (none) |



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
    - `Search_term`
- Optional: model and options.
  - Present the human with the default model **`grok-4.1-fast`** and its available options. Look up `grok-4.1-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `grok-4.1-fast`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019afd2a-8152-752f-9e3d-d28ce6b62860`).

Command form:

```bash
betterprompt generate 019afd2a-8152-752f-9e3d-d28ce6b62860 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4.1-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019afd2a-8152-752f-9e3d-d28ce6b62860 \
  --input Search_term=<value> \
  --model grok-4.1-fast \
  --options '{"reasoningEffort":"none"}'
```
