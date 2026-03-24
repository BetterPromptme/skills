---
name: kinetic-lightflow-render
description: This prompt instructs an AI image generator to depict a chosen subject enveloped in translucent, flowing energy currents that trace motion with luminous filaments, using two specified colors to heighten the glowing trails against a dark, minimal background. The resulting image emphasizes fluid movement and an ethereal digital look with soft transitions, avoiding harsh outlines in favor of smooth, radiant lines.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image generator to depict a chosen subject enveloped in translucent, flowing energy currents that trace motion with luminous filaments, using two specified colors to heighten the glowing trails against a dark, minimal background. The resulting image emphasizes fluid movement and an ethereal digital look with soft transitions, avoiding harsh outlines in favor of smooth, radiant lines.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `COLOR_1` | Required |  | (none) |
| `COLOR_2` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | YOUR SUBJECT | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `COLOR_1`
  - `COLOR_2`
- Required images:
  - **Exactly 1** images: image 1 (YOUR SUBJECT). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":1},"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":1},"quality":"medium"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (YOUR SUBJECT)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `kinetic-lightflow-render`).

Command form:

```bash
betterprompt generate kinetic-lightflow-render \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":1},"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate kinetic-lightflow-render \
  --input COLOR_1=<value> \
  --input COLOR_2=<value> \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"image":{"quality":1},"quality":"medium"}'
```
