---
name: 1000-word-seo-blog-writer
description: This prompt instructs the AI to act as an experienced SEO content strategist and copywriter to produce a ~1,000-word, search-optimized blog post on a provided topic and supporting details, formatted in professional Markdown with specific required sections (including meta fields, multiple H2s, a checklist, FAQ, internal/external link suggestions, a conclusion, and a brief SEO rationale). If essential inputs are missing—such as audience, region, tone, or data requirements—the AI must pause and ask up to three clarifying questions before writing, ensuring the final article is both reader-focused and structured for strong on-page SEO outcomes.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an experienced SEO content strategist and copywriter to produce a ~1,000-word, search-optimized blog post on a provided topic and supporting details, formatted in professional Markdown with specific required sections (including meta fields, multiple H2s, a checklist, FAQ, internal/external link suggestions, a conclusion, and a brief SEO rationale). If essential inputs are missing—such as audience, region, tone, or data requirements—the AI must pause and ask up to three clarifying questions before writing, ensuring the final article is both reader-focused and structured for strong on-page SEO outcomes.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `topic` | Optional | The main subject or keyword focus of the blog post. This determines the H1 title, meta fields, and overall direction of the content. | `Sustainable packaging for e-commerce brands` |
| `details` | Optional | Any additional background, context, or constraints to guide tone, scope, or perspective. This might include the target audience, region, examples to include, data preferences, or specific brand/product mentions. | `Target audience: small business owners in the US; tone: professional yet conversational; include recent 2025 trends.` |



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

- Optional text inputs (use defaults if not provided by the human):
    - `topic` (default: `Sustainable packaging for e-commerce brands`)
  - `details` (default: `Target audience: small business owners in the US; tone: professional yet conversational; include recent 2025 trends.`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `1000-word-seo-blog-writer`).

Command form:

```bash
betterprompt generate 1000-word-seo-blog-writer \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 1000-word-seo-blog-writer \
  --input 'topic=Sustainable packaging for e-commerce brands' \
  --input 'details=Target audience: small business owners in the US; tone: professional yet conversational; include recent 2025 trends.' \
  --model gpt-5 \
  --options '{"reasoningEffort":"low"}'
```