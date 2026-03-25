---
name: custom-song-lyric-generator
description: This prompt instructs the AI to generate original song lyrics tailored to user-provided theme, genre, and vibe, following a specified song structure with set counts of verses and choruses and an optional bridge. The expected result is a creative, engaging set of lyrics arranged into labeled sections (verses, choruses, and possibly a bridge) with attention to rhythm and rhyme for memorability and impact.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate original song lyrics tailored to user-provided theme, genre, and vibe, following a specified song structure with set counts of verses and choruses and an optional bridge. The expected result is a creative, engaging set of lyrics arranged into labeled sections (verses, choruses, and possibly a bridge) with attention to rhythm and rhyme for memorability and impact.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `vibe` | Required |  | (none) |
| `genre` | Required |  | (none) |
| `song_theme` | Required |  | (none) |
| `include_bridge` | Required |  | (none) |
| `number_of_verses` | Required |  | (none) |
| `number_of_choruses` | Required |  | (none) |



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
    - `vibe`
  - `genre`
  - `song_theme`
  - `include_bridge`
  - `number_of_verses`
  - `number_of_choruses`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `custom-song-lyric-generator`).

Command form:

```bash
betterprompt generate custom-song-lyric-generator \
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
betterprompt generate custom-song-lyric-generator \
  --input vibe=<value> \
  --input genre=<value> \
  --input song_theme=<value> \
  --input include_bridge=<value> \
  --input number_of_verses=<value> \
  --input number_of_choruses=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```