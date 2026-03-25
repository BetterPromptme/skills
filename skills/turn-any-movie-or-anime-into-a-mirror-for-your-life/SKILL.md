---
name: turn-any-movie-or-anime-into-a-mirror-for-your-life
description: This prompt asks the AI to use the user’s stated life challenge, chosen movie/show, goal, timeline, and the story’s complexity to produce a tailored reflection: it summarizes the plot, draws parallels between the narrative and the user’s situation, extracts practical lessons as an analogy, and turns those insights into a concrete step-by-step action plan aimed at achieving the goal within the specified period, concluding with an interpretation of how the story symbolically mirrors the user’s own life.
compatibility: Requires betterprompt >= 0.1.3
metadata:
  openclaw:
    homepage: https://github.com/BetterPromptme/skills
    emoji: 🧩
    requires:
      anyBins:
        - betterprompt
        - bp
    os:
      - linux
      - darwin
    install:
      - id: node
        kind: node
        package: betterprompt
        bins: [betterprompt, bp]
        label: Install BetterPrompt CLI (node)
---

## What it does

This prompt asks the AI to use the user’s stated life challenge, chosen movie/show, goal, timeline, and the story’s complexity to produce a tailored reflection: it summarizes the plot, draws parallels between the narrative and the user’s situation, extracts practical lessons as an analogy, and turns those insights into a concrete step-by-step action plan aimed at achieving the goal within the specified period, concluding with an interpretation of how the story symbolically mirrors the user’s own life.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `goal` | Optional |  | `Setlle all my debts` |
| `movie` | Optional |  | `Harry Potter: Goblet Of Fire` |
| `level_of_plot` | Optional |  | `Easy/Medium/Hard` |
| `life_challenge` | Optional |  | `I am broke. Just lost my savings through stock crash` |
| `period_to_goal` | Optional |  | `12 months` |



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
    - `goal` (default: `Setlle all my debts`)
  - `movie` (default: `Harry Potter: Goblet Of Fire`)
  - `level_of_plot` (default: `Easy/Medium/Hard`)
  - `life_challenge` (default: `I am broke. Just lost my savings through stock crash`)
  - `period_to_goal` (default: `12 months`)
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `turn-any-movie-or-anime-into-a-mirror-for-your-life`).

Command form:

```bash
betterprompt generate turn-any-movie-or-anime-into-a-mirror-for-your-life \
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
betterprompt generate turn-any-movie-or-anime-into-a-mirror-for-your-life \
  --input 'goal=Setlle all my debts' \
  --input 'movie=Harry Potter: Goblet Of Fire' \
  --input level_of_plot=Easy/Medium/Hard \
  --input 'life_challenge=I am broke. Just lost my savings through stock crash' \
  --input 'period_to_goal=12 months' \
  --model gpt-4o \
  --options '{}'
```