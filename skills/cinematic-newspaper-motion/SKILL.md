---
name: cinematic-newspaper-motion
description: This prompt instructs an AI image model to take a user’s portrait and transform it into a high-fashion, cinematic editorial scene that matches a provided reference style—specifically replicating its warm studio lighting, atmospheric tone, wind-driven motion blur, and flying newspaper elements—while keeping the user’s face perfectly preserved and sharp. The outcome is a single realistic, motion-rich portrait with a minimal studio background, the user wearing their specified outfit, and no readable text or unwanted additions, ensuring identity accuracy and an elegant editorial finish.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs an AI image model to take a user’s portrait and transform it into a high-fashion, cinematic editorial scene that matches a provided reference style—specifically replicating its warm studio lighting, atmospheric tone, wind-driven motion blur, and flying newspaper elements—while keeping the user’s face perfectly preserved and sharp. The outcome is a single realistic, motion-rich portrait with a minimal studio background, the user wearing their specified outfit, and no readable text or unwanted additions, ensuring identity accuracy and an elegant editorial finish.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `desired_outfit` | Optional | The exact outfit you want: colors, style, fabric, or any fashion vibe you prefer. | `A dark olive blazer with a cream turtleneck and tailored trousers for a clean editorial look.` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload a photo that clearly shows your face | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `desired_outfit` (default: `A dark olive blazer with a cream turtleneck and tailored trousers for a clean editorial look.`)
- Required images:
  - **Exactly 1** images: image 1 (Upload a photo that clearly shows your face). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload a photo that clearly shows your face)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cinematic-newspaper-motion`).

Command form:

```bash
betterprompt generate cinematic-newspaper-motion \
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
betterprompt generate cinematic-newspaper-motion \
  --input 'desired_outfit=A dark olive blazer with a cream turtleneck and tailored trousers for a clean editorial look.' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```