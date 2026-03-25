---
name: write-facebookinstagram-seo
description: This prompt instructs the AI to create an engaging, Facebook-optimized promotional post based on a product photo, showcasing stylish wireless earbuds with specified signature features, color, and a premium modern aesthetic. The resulting post is formatted with emojis and line breaks, targets young adults and professionals, includes persuasive yet natural-sounding calls-to-action, highlights any exclusive promotions, and ends with a time-sensitive urgency message to drive immediate purchases.
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

This prompt instructs the AI to create an engaging, Facebook-optimized promotional post based on a product photo, showcasing stylish wireless earbuds with specified signature features, color, and a premium modern aesthetic. The resulting post is formatted with emojis and line breaks, targets young adults and professionals, includes persuasive yet natural-sounding calls-to-action, highlights any exclusive promotions, and ends with a time-sensitive urgency message to drive immediate purchases.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `color` | Required |  | (none) |
| `product` | Required |  | (none) |
| `Signature_feature` | Required |  | (none) |
| `exclusive_promotions` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes |  | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `color`
  - `product`
  - `Signature_feature`
  - `exclusive_promotions`
- Required images:
  - **Exactly 1** images: image 1 (image 1). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-4o`** and its available options. Look up `gpt-4o` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4o`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `write-facebookinstagram-seo`).

Command form:

```bash
betterprompt generate write-facebookinstagram-seo \
  [--input <key>=<value>] \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4o`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate write-facebookinstagram-seo \
  --input color=<value> \
  --input product=<value> \
  --input Signature_feature=<value> \
  --input exclusive_promotions=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-4o \
  --options '{}'
```