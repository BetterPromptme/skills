---
name: mindfulness-integration-strategist
description: This prompt directs the assistant to create a practical, step-by-step plan for embedding mindfulness and meditation into a specified work routine, emphasizing brief transition-based techniques, attention-sharpening (not purely relaxing) meditations, and metacognitive exercises that maintain clarity during demanding or repetitive tasks. The resulting output should cover multiple real-world work scenarios (complex problem-solving, frustration/pressure, routine maintenance, post-distraction recovery) and present a progressive training system that delivers immediate performance benefits while building capacity over time, including both structured formal sessions and efficient informal practices woven seamlessly into the workday.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs the assistant to create a practical, step-by-step plan for embedding mindfulness and meditation into a specified work routine, emphasizing brief transition-based techniques, attention-sharpening (not purely relaxing) meditations, and metacognitive exercises that maintain clarity during demanding or repetitive tasks. The resulting output should cover multiple real-world work scenarios (complex problem-solving, frustration/pressure, routine maintenance, post-distraction recovery) and present a progressive training system that delivers immediate performance benefits while building capacity over time, including both structured formal sessions and efficient informal practices woven seamlessly into the workday.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `your_specific_work_routine` | Optional | Describe your daily professional activities, including the type of work you do, your typical schedule, and key mental demands. | `I’m a UX designer who spends long hours brainstorming, creating wireframes, and reviewing feedback with the team. My day alternates between deep solo work and collaborative meetings.”` |



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
    - `your_specific_work_routine` (default: `I’m a UX designer who spends long hours brainstorming, creating wireframes, and reviewing feedback with the team. My day alternates between deep solo work and collaborative meetings.”`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5`** and its available options. Look up `gpt-5` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `mindfulness-integration-strategist`).

Command form:

```bash
betterprompt generate mindfulness-integration-strategist \
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
betterprompt generate mindfulness-integration-strategist \
  --input 'your_specific_work_routine=I’m a UX designer who spends long hours brainstorming, creating wireframes, and reviewing feedback with the team. My day alternates between deep solo work and collaborative meetings.”' \
  --model gpt-5 \
  --options '{"reasoningEffort":"low"}'
```