---
name: authentic-hand-stamped-wax-seal-with-script-monogram-realistic-and-organic-finish
description: This prompt instructs an image generator to produce a close-up, photorealistic wax seal freshly stamped on paper, emphasizing natural imperfections such as uneven edges, pressure marks, marbled texture, and angled lighting reflections. It also specifies a slightly recessed, hand-engraved script monogram using a provided letter, encircled by a subtly irregular ornamental rim, and rendered in a user-selected wax color with realistic tonal variation, resulting in an authentic hand-made seal appearance rather than a digitally perfect graphic.
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

This prompt instructs an image generator to produce a close-up, photorealistic wax seal freshly stamped on paper, emphasizing natural imperfections such as uneven edges, pressure marks, marbled texture, and angled lighting reflections. It also specifies a slightly recessed, hand-engraved script monogram using a provided letter, encircled by a subtly irregular ornamental rim, and rendered in a user-selected wax color with realistic tonal variation, resulting in an authentic hand-made seal appearance rather than a digitally perfect graphic.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Wax_Color` | Required |  | (none) |
| `Your_Letter` | Required |  | (none) |



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


- Required text inputs:
    - `Wax_Color`
  - `Your_Letter`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `authentic-hand-stamped-wax-seal-with-script-monogram-realistic-and-organic-finish`).

Command form:

```bash
betterprompt generate authentic-hand-stamped-wax-seal-with-script-monogram-realistic-and-organic-finish \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate authentic-hand-stamped-wax-seal-with-script-monogram-realistic-and-organic-finish \
  --input Wax_Color=<value> \
  --input Your_Letter=<value> \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"medium"}'
```