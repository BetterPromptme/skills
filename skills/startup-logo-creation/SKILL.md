---
name: startup-logo-creation
description: This prompt instructs an AI to act as a startup-focused brand identity and logo designer that turns a user’s brand inputs—name, industry, personality, preferred style, motif, colors, and constraints—into a clean, modern, scalable logo concept suitable for real product use (websites, apps, pitch decks). It enforces professional design rules and safety guardrails (no altered brand names, no copyrighted or inappropriate imagery, no realistic faces, minimal clutter, legible typography) so the outcome is a startup-ready logo aligned with the brand’s positioning and visual direction.
skillVersionId: 019b07a6-692b-7689-b1f7-cd834c75c5bc
---

## What it does

This prompt instructs an AI to act as a startup-focused brand identity and logo designer that turns a user’s brand inputs—name, industry, personality, preferred style, motif, colors, and constraints—into a clean, modern, scalable logo concept suitable for real product use (websites, apps, pitch decks). It enforces professional design rules and safety guardrails (no altered brand names, no copyrighted or inappropriate imagery, no realistic faces, minimal clutter, legible typography) so the outcome is a startup-ready logo aligned with the brand’s positioning and visual direction.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Industry` | Required |  | (none) |
| `Brand_name` | Required |  | (none) |
| `Logo_style` | Required |  | (none) |
| `Symbol_motif` | Optional |  | `Icon direction, metaphor, geometric shape, object` |
| `Color_palette` | Required |  | (none) |
| `Tagline_Optional` | Required | If you don't wanna add tagline into your logo, you can type "No" | (none) |
| `Brand_personality` | Required |  | (none) |



### Models and options

This skill's modality is: **`image`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"image"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "image"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:


- Required text inputs:
    - `Industry`
  - `Brand_name`
  - `Logo_style`
  - `Color_palette`
  - `Tagline_Optional`
  - `Brand_personality`
- Optional text inputs (use defaults if not provided by the human):
    - `Symbol_motif` (default: `Icon direction, metaphor, geometric shape, object`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"1:1","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"1:1","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019b07a6-692b-7689-b1f7-cd834c75c5bc`).

Command form:

```bash
betterprompt generate 019b07a6-692b-7689-b1f7-cd834c75c5bc \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"1:1","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019b07a6-692b-7689-b1f7-cd834c75c5bc \
  --input Industry=<value> \
  --input Brand_name=<value> \
  --input Logo_style=<value> \
  --input 'Symbol_motif=Icon direction, metaphor, geometric shape, object' \
  --input Color_palette=<value> \
  --input Tagline_Optional=<value> \
  --input Brand_personality=<value> \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"1:1","resolution":"1K"}'
```
