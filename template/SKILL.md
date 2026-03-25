---
name: {{{name}}}
description: {{{description}}}
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

{{{whatItDoes}}}

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs

{{#if hasTextInputs}}

### textInputs

Pass each text input using `--input <key>=<value>` flags.

{{{textInputsTable}}}

{{/if}}

{{#if hasImages}}

### imageInputs

This prompt requires **exactly {{{imageCount}}} {{pluralize imageCount "image" "images"}}**. You **must pass exactly {{{imageCount}}} {{pluralize imageCount "image flag" "image flags"}}** (no more, no fewer), in the order matching the descriptions below.

{{{imageInputsTable}}}

{{/if}}

### Models and options

This skill's modality is: **`{{{modality}}}`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"{{{modality}}}"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "{{{modality}}}"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

{{#if hasRequiredTextInputs}}

- Required text inputs:
  {{{requiredTextInputsList}}}
  {{/if}}
  {{#if hasOptionalTextInputs}}
- Optional text inputs (use defaults if not provided by the human):
  {{{optionalTextInputsList}}}
  {{/if}}
  {{#if hasImages}}
- Required images:
  - **Exactly {{{imageCount}}}** images: {{{imageOrderDescription}}}. Images must be provided in this order.
    {{/if}}
- Optional: model and options.
  - Present the human with the default model **`{{{defaultModel}}}`** and its available options. Look up `{{{defaultModel}}}` in the `betterprompt resources` output (filtered to modality `"{{{modality}}}"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{{{defaultOptionsJson}}}`.
  - If the human does not specify, defaults are used: model `{{{defaultModel}}}`, options `{{{defaultOptionsJson}}}`. Other models from the resources call are also available.

{{#if missingInputsMessage}}
{{{missingInputsMessage}}}
{{/if}}

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `{{{name}}}`).

Command form:

```bash
betterprompt generate {{{name}}} \
{{#if hasTextInputs}}
  [--input <key>=<value>] \
{{/if}}
{{#if hasImages}}
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
{{/if}}
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

{{#if hasTextInputs}}
- Pass each text input as a separate `--input <key>=<value>` flag.
{{/if}}
  {{#if hasImages}}
- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
  {{/if}}
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`{{{defaultModel}}}`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{{{defaultOptionsJson}}}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
{{{exampleCommand}}}
```