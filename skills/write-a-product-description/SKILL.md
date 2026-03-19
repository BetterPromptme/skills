---
name: write-a-product-description
description: This prompt instructs the AI to examine a provided product image and generate a visually vivid, emotionally compelling, marketing-focused description suitable for a product ad or launch. It directs the model to accurately translate observable design details—such as materials, form, colors, and key features—into clear benefits and lifestyle appeal, while maintaining a specified brand tone and output format. The outcome is a high-converting product description, optionally including a tagline, that stays grounded in what’s visible and avoids claiming unverified functionality.
skillVersionId: 0196e7a3-1916-7f0b-8b74-a89e2fc42edb
---

## What it does

This prompt instructs the AI to examine a provided product image and generate a visually vivid, emotionally compelling, marketing-focused description suitable for a product ad or launch. It directs the model to accurately translate observable design details—such as materials, form, colors, and key features—into clear benefits and lifestyle appeal, while maintaining a specified brand tone and output format. The outcome is a high-converting product description, optionally including a tagline, that stays grounded in what’s visible and avoids claiming unverified functionality.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `tone` | Required |  | (none) |
| `Format` | Required |  | (none) |



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
    - `tone`
  - `Format`
- Required images:
  - **Exactly 1** images: image 1 (image 1). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0196e7a3-1916-7f0b-8b74-a89e2fc42edb`).

Command form:

```bash
betterprompt generate 0196e7a3-1916-7f0b-8b74-a89e2fc42edb \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0196e7a3-1916-7f0b-8b74-a89e2fc42edb \
  --input tone=<value> \
  --input Format=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-4.1-mini \
  --options '{}'
```
