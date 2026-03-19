---
name: simple-human-writing-style
description: This prompt sets the assistant up as a plain-language writing helper that rewrites or creates text for casual online readers. It tells the assistant to keep sentences short, sound natural and grounded, avoid marketing or “AI-ish” wording, and not add any new claims or facts. The result is clear, straightforward writing that reads like a real person, not a polished promo.
skillVersionId: 019a9a6a-b409-762d-ba97-381e7bbe0f4b
---

## What it does

This prompt sets the assistant up as a plain-language writing helper that rewrites or creates text for casual online readers. It tells the assistant to keep sentences short, sound natural and grounded, avoid marketing or “AI-ish” wording, and not add any new claims or facts. The result is clear, straightforward writing that reads like a real person, not a polished promo.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Content` | Optional | The text you want rewritten or created | `I need help organizing my workflow` |
| `purpose` | Optional | Why you're writing it | `write a simple Reddit comment  ` |
| `extra_notes` | Optional | Anything additional you want AI to follow  | `keep it friendly but direct` |



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
    - `Content` (default: `I need help organizing my workflow`)
  - `purpose` (default: `write a simple Reddit comment  `)
  - `extra_notes` (default: `keep it friendly but direct`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a9a6a-b409-762d-ba97-381e7bbe0f4b`).

Command form:

```bash
betterprompt generate 019a9a6a-b409-762d-ba97-381e7bbe0f4b \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a9a6a-b409-762d-ba97-381e7bbe0f4b \
  --input 'Content=I need help organizing my workflow' \
  --input 'purpose=write a simple Reddit comment  ' \
  --input 'extra_notes=keep it friendly but direct' \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```
