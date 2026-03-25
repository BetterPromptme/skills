---
name: christmas-tree-film-style-photo
description: This prompt instructs the AI to take a user-uploaded photo (optionally matching a specified single-person pose) and transform it into a realistic, festive Christmas portrait where the subject is wrapped like a Christmas tree with snug, depth-aware white crayon ribbon spirals, red/green crayon ornaments, and a yellow crayon star above the head, all rendered with imperfect waxy crayon texture. The result is composited into an outside-at-midnight city street setting and graded to emulate warm Kodak 200 film shot on a Fuji point-and-shoot, including analog-flash lighting, soft halation, and natural film grain while preserving the person’s facial identity.
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

This prompt instructs the AI to take a user-uploaded photo (optionally matching a specified single-person pose) and transform it into a realistic, festive Christmas portrait where the subject is wrapped like a Christmas tree with snug, depth-aware white crayon ribbon spirals, red/green crayon ornaments, and a yellow crayon star above the head, all rendered with imperfect waxy crayon texture. The result is composited into an outside-at-midnight city street setting and graded to emulate warm Kodak 200 film shot on a Fuji point-and-shoot, including analog-flash lighting, soft halation, and natural film grain while preserving the person’s facial identity.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `pose` | Optional | Describe the pose you want.  | `hands in pockets` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your clear photo. Best results if the photo contains one person only. | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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

- Optional text inputs (use defaults if not provided by the human):
    - `pose` (default: `hands in pockets`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your clear photo. Best results if the photo contains one person only.). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your clear photo. Best results if the photo contains one person only.)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `christmas-tree-film-style-photo`).

Command form:

```bash
betterprompt generate christmas-tree-film-style-photo \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-flash-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate christmas-tree-film-style-photo \
  --input 'pose=hands in pockets' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```