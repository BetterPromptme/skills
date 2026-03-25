---
name: seo-optimized-blog-post-writer-1
description: This prompt instructs the AI to create a complete, SEO-optimized blog post tailored to a given topic, keyword, tone, and word count, including an on-brand title and meta description, a well-structured article with headings and concise paragraphs, a keyword-focused FAQ, internal link ideas, and a clear call-to-action, resulting in a publish-ready piece designed to rank for the primary keyword and guide readers toward next steps.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to create a complete, SEO-optimized blog post tailored to a given topic, keyword, tone, and word count, including an on-brand title and meta description, a well-structured article with headings and concise paragraphs, a keyword-focused FAQ, internal link ideas, and a clear call-to-action, resulting in a publish-ready piece designed to rank for the primary keyword and guide readers toward next steps.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `tone` | Required | The overall writing tone for the article Allowed options: persuasive, educational, professional, conversational | (none) |
| `topic` | Optional | The main topic or subject of the blog post | `How to Start a Vegetable Garden` |
| `length` | Required | The target word count for the blog post Allowed options: 800, 1500, 2500 | (none) |
| `keyword` | Optional | The primary SEO keyword to target | `vegetable garden for beginners` |



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
    - `tone`
  - `length`
- Optional text inputs (use defaults if not provided by the human):
    - `topic` (default: `How to Start a Vegetable Garden`)
  - `keyword` (default: `vegetable garden for beginners`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `seo-optimized-blog-post-writer-1`).

Command form:

```bash
betterprompt generate seo-optimized-blog-post-writer-1 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate seo-optimized-blog-post-writer-1 \
  --input tone=persuasive \
  --input 'topic=How to Start a Vegetable Garden' \
  --input length=800 \
  --input 'keyword=vegetable garden for beginners' \
  --model gpt-4o \
  --options '{}'
```