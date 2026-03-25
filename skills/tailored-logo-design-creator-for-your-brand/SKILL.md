---
name: tailored-logo-design-creator-for-your-brand
description: This prompt instructs the AI to create a logo concept for a specified brand by tailoring the shape, colors, typography, and symbolic elements to reflect the brand’s named identity and core values while aiming for a modern, clean, and recognizable look. The expected result is a cohesive logo design direction that evokes a chosen emotional tone and remains versatile and legible across both digital and print applications at various sizes.
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

This prompt instructs the AI to create a logo concept for a specified brand by tailoring the shape, colors, typography, and symbolic elements to reflect the brand’s named identity and core values while aiming for a modern, clean, and recognizable look. The expected result is a cohesive logo design direction that evokes a chosen emotional tone and remains versatile and legible across both digital and print applications at various sizes.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `shape` | Required |  | (none) |
| `Brand_Name` | Required |  | (none) |
| `Font_Style` | Required |  | (none) |
| `Core_Value_1` | Required |  | (none) |
| `Core_Value_2` | Required |  | (none) |
| `Core_Value_3` | Required |  | (none) |
| `Primary_Colors` | Required |  | (none) |
| `Secondary_Colors` | Required |  | (none) |
| `Symbolic_Elements` | Required |  | (none) |



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
    - `shape`
  - `Brand_Name`
  - `Font_Style`
  - `Core_Value_1`
  - `Core_Value_2`
  - `Core_Value_3`
  - `Primary_Colors`
  - `Secondary_Colors`
  - `Symbolic_Elements`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `tailored-logo-design-creator-for-your-brand`).

Command form:

```bash
betterprompt generate tailored-logo-design-creator-for-your-brand \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate tailored-logo-design-creator-for-your-brand \
  --input shape=<value> \
  --input Brand_Name=<value> \
  --input Font_Style=<value> \
  --input Core_Value_1=<value> \
  --input Core_Value_2=<value> \
  --input Core_Value_3=<value> \
  --input Primary_Colors=<value> \
  --input Secondary_Colors=<value> \
  --input Symbolic_Elements=<value> \
  --model gpt-image-1 \
  --options '{"quality":"medium"}'
```