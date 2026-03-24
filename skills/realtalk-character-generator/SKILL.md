---
name: realtalk-character-generator
description: This prompt instructs an AI to direct and generate a 6–10 second, cinematic, hyper-realistic talking-head video based on a user-provided portrait, with the subject delivering a short supplied script in a specified emotional tone and setting. It defines realism requirements (accurate lip-sync, natural micro-expressions and gestures, subtle camera movement, warm lighting, clear audio with ambient sound, and shallow depth of field) while preserving the person’s identity and avoiding robotic motion. The outcome is a polished, authentic-looking announcement-style clip suitable for social media or updates, constrained by safety rules that limit misuse and require consent and non-misleading content.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI to direct and generate a 6–10 second, cinematic, hyper-realistic talking-head video based on a user-provided portrait, with the subject delivering a short supplied script in a specified emotional tone and setting. It defines realism requirements (accurate lip-sync, natural micro-expressions and gestures, subtle camera movement, warm lighting, clear audio with ambient sound, and shallow depth of field) while preserving the person’s identity and avoiding robotic motion. The outcome is a polished, authentic-looking announcement-style clip suitable for social media or updates, constrained by safety rules that limit misuse and require consent and non-misleading content.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `script` | Required | The dialogue or message to be spoken in the video. Keep it under 50 words for best realism | (none) |
| `setting` | Optional | The scene or background context. | `casual indoor room, bright studio, modern office,....` |
| `emotion_tone` | Optional | The general mood of delivery  | `enthusiastic, friendly, confident, calm,...` |
| `character_description` | Optional | Describe the person’s appearance, age, style, and energy. | `Lively young woman with short dark hair and natural makeup` |



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


- Required text inputs:
    - `script`
- Optional text inputs (use defaults if not provided by the human):
    - `setting` (default: `casual indoor room, bright studio, modern office,....`)
  - `emotion_tone` (default: `enthusiastic, friendly, confident, calm,...`)
  - `character_description` (default: `Lively young woman with short dark hair and natural makeup`)
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"8","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"8","size":"720x1280"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `realtalk-character-generator`).

Command form:

```bash
betterprompt generate realtalk-character-generator \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"8","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate realtalk-character-generator \
  --input script=<value> \
  --input 'setting=casual indoor room, bright studio, modern office,....' \
  --input 'emotion_tone=enthusiastic, friendly, confident, calm,...' \
  --input 'character_description=Lively young woman with short dark hair and natural makeup' \
  --model sora-2 \
  --options '{"seconds":"8","size":"720x1280"}'
```
