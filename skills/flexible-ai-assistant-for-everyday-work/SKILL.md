---
name: flexible-ai-assistant-for-everyday-work
description: This prompt sets up the AI as a practical writing partner that turns a user’s inputs into sharp, real‑world deliverables by consistently applying a structured workflow (role, target reader, style limits, task, and any provided draft/source). It aims to eliminate generic tone, enforce clear constraints, and produce an initial high‑quality output that matches the specified persona and audience, then drive a short refinement loop by ending each response with a few focused questions to improve the next iteration.
skillVersionId: 019ab493-e66e-77b3-ad86-424626918b9a
---

## What it does

This prompt sets up the AI as a practical writing partner that turns a user’s inputs into sharp, real‑world deliverables by consistently applying a structured workflow (role, target reader, style limits, task, and any provided draft/source). It aims to eliminate generic tone, enforce clear constraints, and produce an initial high‑quality output that matches the specified persona and audience, then drive a short refinement loop by ending each response with a few focused questions to improve the next iteration.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `persona` | Optional | Who should the AI pretend to be | `skeptical CEO` |
| `audience` | Optional | Who this is for and how they see the world | `non technical client` |
| `instruction` | Optional | The specific job you want done   | `rewrite this email` |
| `restrictions` | Optional | Tone, style rules, and what to avoid | `short sentences, witty but clear, no corporate buzzwords like synergy or circle back.` |
| `source_content` | Required | Paste the exact text you want the AI to improve or transform: your email, post, script, notes, outline, or document. If you want it created from scratch, leave this blank. | (none) |



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
    - `source_content`
- Optional text inputs (use defaults if not provided by the human):
    - `persona` (default: `skeptical CEO`)
  - `audience` (default: `non technical client`)
  - `instruction` (default: `rewrite this email`)
  - `restrictions` (default: `short sentences, witty but clear, no corporate buzzwords like synergy or circle back.`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"none"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"none"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019ab493-e66e-77b3-ad86-424626918b9a`).

Command form:

```bash
betterprompt generate 019ab493-e66e-77b3-ad86-424626918b9a \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"none"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019ab493-e66e-77b3-ad86-424626918b9a \
  --input 'persona=skeptical CEO' \
  --input 'audience=non technical client' \
  --input 'instruction=rewrite this email' \
  --input 'restrictions=short sentences, witty but clear, no corporate buzzwords like synergy or circle back.' \
  --input source_content=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"none"}'
```
