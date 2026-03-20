---
name: create-japanese-image
description: This prompt directs an AI to generate a Japanese-inspired digital painting featuring a gnarled, white pointillist-blossomed tree set against a giant red-orange sun, with a small traditional building glowing beside a still black lake that reflects the sun in bold horizontal bands. It specifies a dark, patterned sky and distant hills rendered in flowing black-and-white line art to add depth, while enforcing a dramatic yet serene mood, high contrast, minimalist color palette, and richly textured finish.
skillVersionId: 019768bc-d17b-7e14-ab52-5134e380dd10
---

## What it does

This prompt directs an AI to generate a Japanese-inspired digital painting featuring a gnarled, white pointillist-blossomed tree set against a giant red-orange sun, with a small traditional building glowing beside a still black lake that reflects the sun in bold horizontal bands. It specifies a dark, patterned sky and distant hills rendered in flowing black-and-white line art to add depth, while enforcing a dramatic yet serene mood, high contrast, minimalist color palette, and richly textured finish.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1536x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1536x1024","quality":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019768bc-d17b-7e14-ab52-5134e380dd10`).

Command form:

```bash
betterprompt generate 019768bc-d17b-7e14-ab52-5134e380dd10 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1536x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019768bc-d17b-7e14-ab52-5134e380dd10 \
  --model gpt-image-1 \
  --options '{"size":"1536x1024","quality":"low"}'
```
