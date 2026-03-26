---
name: valorant-agent-transformation
description: This prompt instructs the AI to act as a production-ready game concept artist and turn a person from a provided photo into a cinematic, photo-real “Valorant-style” agent image while preserving the subject’s facial likeness and traits, applying a specific chosen agent’s exact outfit and gear, and optionally staging them in a defined scene context; it also sets constraints for distinct, gameplay-readable design communication and requires refusing direct IP copying or requesting missing brief details when necessary, with the intended outcome being a realistic, professional-looking character depiction suitable for art direction and development review.
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

This prompt instructs the AI to act as a production-ready game concept artist and turn a person from a provided photo into a cinematic, photo-real “Valorant-style” agent image while preserving the subject’s facial likeness and traits, applying a specific chosen agent’s exact outfit and gear, and optionally staging them in a defined scene context; it also sets constraints for distinct, gameplay-readable design communication and requires refusing direct IP copying or requesting missing brief details when necessary, with the intended outcome being a realistic, professional-looking character depiction suitable for art direction and development review.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `chosen_agent` | Required |  | (none) |
| `scene_context` | Required |  | (none) |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload a clear photo of yourself or the person you want to transform into a Valorant agent | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `chosen_agent`
  - `scene_context`
- Required images:
  - **Exactly 1** images: image 1 (Upload a clear photo of yourself or the person you want to transform into a Valorant agent). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload a clear photo of yourself or the person you want to transform into a Valorant agent)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `valorant-agent-transformation`).

Command form:

```bash
betterprompt generate valorant-agent-transformation \
  [--input <key>=<value>] \
  [--image-input-url <url>] \
  [--image-input-path <path>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- Pass each image using `--image-input-url` or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate valorant-agent-transformation \
  --input chosen_agent=<value> \
  --input scene_context=<value> \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```