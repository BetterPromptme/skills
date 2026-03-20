---
name: make-design-structure
description: This prompt directs an AI to infer a reusable design-system “profile” from provided UI screenshots and output it as structured JSON that captures the consistent visual language—such as layout primitives, spacing scale, typography hierarchy, color tokens, component anatomy, interaction states, and accessibility rules—without reproducing any specific screen content. The result is a portable, tool-friendly JSON schema you can paste into Cursor to give downstream generation tasks clear stylistic and structural constraints, enabling the AI to recreate new interfaces that match the same design system consistently.
skillVersionId: 0198ea94-204c-70fa-896f-96098eecc3e6
---

## What it does

This prompt directs an AI to infer a reusable design-system “profile” from provided UI screenshots and output it as structured JSON that captures the consistent visual language—such as layout primitives, spacing scale, typography hierarchy, color tokens, component anatomy, interaction states, and accessibility rules—without reproducing any specific screen content. The result is a portable, tool-friendly JSON schema you can paste into Cursor to give downstream generation tasks clear stylistic and structural constraints, enabling the AI to recreate new interfaces that match the same design system consistently.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | A photo design ref | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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

- Required images:
  - **Exactly 1** images: image 1 (A photo design ref). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`claude-3-5-haiku`** and its available options. Look up `claude-3-5-haiku` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `claude-3-5-haiku`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (A photo design ref)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198ea94-204c-70fa-896f-96098eecc3e6`).

Command form:

```bash
betterprompt generate 0198ea94-204c-70fa-896f-96098eecc3e6 \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`claude-3-5-haiku`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0198ea94-204c-70fa-896f-96098eecc3e6 \
  --image-input-url https://example.com/image1.png \
  --model claude-3-5-haiku \
  --options '{}'
```
