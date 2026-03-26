---
name: 1980s-cinematic-couple-split-bedroom-editorial
description: This prompt instructs an AI image editor to take an uploaded couple’s photo and recreate it as a hyper-photorealistic late-1980s split-room editorial portrait: the pair are separated by a wall yet emotionally connected via vintage rotary phones, with one side lit by cool natural daylight and the other by warm tungsten. It emphasizes exact facial preservation, realistic anatomy, authentic film-era camera/film characteristics and lighting (without artificial grading or stylized artifacts), and outputs a high-resolution vertical cinematic image suitable for editorial or concept use.
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

This prompt instructs an AI image editor to take an uploaded couple’s photo and recreate it as a hyper-photorealistic late-1980s split-room editorial portrait: the pair are separated by a wall yet emotionally connected via vintage rotary phones, with one side lit by cool natural daylight and the other by warm tungsten. It emphasizes exact facial preservation, realistic anatomy, authentic film-era camera/film characteristics and lighting (without artificial grading or stylized artifacts), and outputs a high-resolution vertical cinematic image suitable for editorial or concept use.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `gender_pair` | Optional | two early-twenties lovers | `two early-twenties lovers.` |
| `outfit_details` | Optional |  Optional wardrobe styling to match the 1980s tone | `cream blouse and corduroy shirt with soft retro texture.` |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your portrait photo | `--image-input-url <url>` or `--image-input-path <path>` |
| 2 | Yes | Upload your crush/lover portrait photo | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `gender_pair` (default: `two early-twenties lovers.`)
  - `outfit_details` (default: `cream blouse and corduroy shirt with soft retro texture.`)
- Required images:
  - **Exactly 2** images: image 1 (Upload your portrait photo) and image 2 (Upload your crush/lover portrait photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your portrait photo) and image 2 (Upload your crush/lover portrait photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `1980s-cinematic-couple-split-bedroom-editorial`).

Command form:

```bash
betterprompt generate 1980s-cinematic-couple-split-bedroom-editorial \
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
betterprompt generate 1980s-cinematic-couple-split-bedroom-editorial \
  --input 'gender_pair=two early-twenties lovers.' \
  --input 'outfit_details=cream blouse and corduroy shirt with soft retro texture.' \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```