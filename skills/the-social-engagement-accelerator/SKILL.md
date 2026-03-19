---
name: the-social-engagement-accelerator
description: This prompt instructs the AI to act as a social media content strategist and produce a numbered list of 10 scroll-stopping post ideas tailored to a specified platform and topic/product. Each idea is constrained to under 20 words and must include a hook, an emotional angle, and a call-to-action suggestion, all written in the requested brand tone.
skillVersionId: 0198e460-1899-731e-888c-335930d668f3
---

## What it does

This prompt instructs the AI to act as a social media content strategist and produce a numbered list of 10 scroll-stopping post ideas tailored to a specified platform and topic/product. Each idea is constrained to under 20 words and must include a hook, an emotional angle, and a call-to-action suggestion, all written in the requested brand tone.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `platform` | Required |  | (none) |
| `brand_tone` | Required |  | (none) |
| `topic_or_product` | Required |  | (none) |



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
    - `platform`
  - `brand_tone`
  - `topic_or_product`
- Optional: model and options.
  - Present the human with the default model **`o3-mini`** and its available options. Look up `o3-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `o3-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198e460-1899-731e-888c-335930d668f3`).

Command form:

```bash
betterprompt generate 0198e460-1899-731e-888c-335930d668f3 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`o3-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0198e460-1899-731e-888c-335930d668f3 \
  --input platform=<value> \
  --input brand_tone=<value> \
  --input topic_or_product=<value> \
  --model o3-mini \
  --options '{}'
```
