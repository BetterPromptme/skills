---
name: blog-post-generator
description: This prompt instructs the AI to generate a well-structured blog post on a specified topic, targeting an approximate word count and a defined writing tone while optionally integrating a given SEO keyword. It requires the content to be original, informative, and easy to read through the use of headings, subheadings, and bullet points where appropriate. The expected outcome is a polished, engaging article that delivers clear value to readers and ends with a compelling call-to-action.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate a well-structured blog post on a specified topic, targeting an approximate word count and a defined writing tone while optionally integrating a given SEO keyword. It requires the content to be original, informative, and easy to read through the use of headings, subheadings, and bullet points where appropriate. The expected outcome is a polished, engaging article that delivers clear value to readers and ends with a compelling call-to-action.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Blog_topic` | Required |  | (none) |
| `Word_count` | Required |  | (none) |
| `Seo_keyword` | Required |  | (none) |
| `Writing_style` | Required |  | (none) |



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
    - `Blog_topic`
  - `Word_count`
  - `Seo_keyword`
  - `Writing_style`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `blog-post-generator`).

Command form:

```bash
betterprompt generate blog-post-generator \
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
betterprompt generate blog-post-generator \
  --input Blog_topic=<value> \
  --input Word_count=<value> \
  --input Seo_keyword=<value> \
  --input Writing_style=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
