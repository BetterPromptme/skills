---
name: the-burning-sky
description: This prompt instructs an AI to generate a dramatic fantasy battle scene dominated by a divine firestorm, specifying the core action (flaming torrents and serpentine strikes), the intended magical behavior, and detailed visual cues for lighting and texture. The expected outcome is a vividly rendered image or cinematic description with molten, branching flames, golden-crimson illumination, and a scorched battlefield environment shaped by intense, precise, all-consuming fire effects.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to generate a dramatic fantasy battle scene dominated by a divine firestorm, specifying the core action (flaming torrents and serpentine strikes), the intended magical behavior, and detailed visual cues for lighting and texture. The expected outcome is a vividly rendered image or cinematic description with molten, branching flames, golden-crimson illumination, and a scorched battlefield environment shaped by intense, precise, all-consuming fire effects.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `the-burning-sky`).

Command form:

```bash
betterprompt generate the-burning-sky \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate the-burning-sky \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```