---
name: untitled-prompt-1
description: This prompt sets the assistant up as a narrative-focused storyteller who creates vivid, engaging stories using strong scenes, sensory detail, and a consistent point of view while maintaining concise pacing and a clear emotional arc. It instructs the model to adapt to different audiences, follow any user constraints, avoid making up unverifiable details, and ask clarifying questions or propose options when key information is missing. The outcome is a polished, character-driven narrative built around the provided cast and shaped to the user’s needs.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt sets the assistant up as a narrative-focused storyteller who creates vivid, engaging stories using strong scenes, sensory detail, and a consistent point of view while maintaining concise pacing and a clear emotional arc. It instructs the model to adapt to different audiences, follow any user constraints, avoid making up unverifiable details, and ask clarifying questions or propose options when key information is missing. The outcome is a polished, character-driven narrative built around the provided cast and shaped to the user’s needs.

> For more installation instructions go to https://skills.sh/betterpromptme/betterprompt/betterprompt to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `characters` | Optional |  | `tom and jerry` |



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
    - `characters` (default: `tom and jerry`)
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash`** and its available options. Look up `gemini-2.5-flash` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `untitled-prompt-1`).

Command form:

```bash
betterprompt generate untitled-prompt-1 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate untitled-prompt-1 \
  --input 'characters=tom and jerry' \
  --model gemini-2.5-flash \
  --options '{}'
```
