---
name: cinematic-mirror-reflection-generator
description: This prompt instructs an AI video generator to produce a short, hyper-realistic cinematic mirror-shot sequence of a specified character performing a specified grooming or self-adjustment action, framed chest-up with both the subject and their synchronized reflection visible under bright, clean lighting against a dark background. The intended result is an intimate, modern-feeling clip with subtle handheld camera micro-movement, accurate mirror behavior and lighting consistency, faithful preservation of the character’s appearance from an input image, and action-matched natural sound effects with no music, text, logos, or stylized/CGI elements.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI video generator to produce a short, hyper-realistic cinematic mirror-shot sequence of a specified character performing a specified grooming or self-adjustment action, framed chest-up with both the subject and their synchronized reflection visible under bright, clean lighting against a dark background. The intended result is an intimate, modern-feeling clip with subtle handheld camera micro-movement, accurate mirror behavior and lighting consistency, faithful preservation of the character’s appearance from an input image, and action-matched natural sound effects with no music, text, logos, or stylized/CGI elements.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `action` | Optional | Describe what the character is doing in front of the mirror | `applying lip gloss` |
| `character_description` | Optional | Describe the person’s appearance, style, and mood | `a young woman with long wavy brown hair wearing a black tank top` |



### Models and options

This skill's modality is: **`video`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"video"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "video"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional text inputs (use defaults if not provided by the human):
    - `action` (default: `applying lip gloss`)
  - `character_description` (default: `a young woman with long wavy brown hair wearing a black tank top`)
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cinematic-mirror-reflection-generator`).

Command form:

```bash
betterprompt generate cinematic-mirror-reflection-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate cinematic-mirror-reflection-generator \
  --input 'action=applying lip gloss' \
  --input 'character_description=a young woman with long wavy brown hair wearing a black tank top' \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```
