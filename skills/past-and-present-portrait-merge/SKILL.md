---
name: past-and-present-portrait-merge
description: This prompt directs an image model to generate a photorealistic, vertically framed (9:16) cinematic portrait that places the same person’s present-day self and younger child self together in one nostalgic golden-hour alleyway scene, with strict identity preservation from an input portrait. It specifies exact staging—adult leaning against a wall looking down reflectively, child standing slightly forward looking up curiously—while enforcing a warm, vintage film-still mood with subtle haze and lens flare. The outcome is a timeless, emotionally resonant side-by-side generational image that maintains consistent facial traits, skin texture, and unique features, and adapts clothing style (casual/formal/neutral) without adding modern artifacts, logos, extra characters, or altering the setting.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt directs an image model to generate a photorealistic, vertically framed (9:16) cinematic portrait that places the same person’s present-day self and younger child self together in one nostalgic golden-hour alleyway scene, with strict identity preservation from an input portrait. It specifies exact staging—adult leaning against a wall looking down reflectively, child standing slightly forward looking up curiously—while enforcing a warm, vintage film-still mood with subtle haze and lens flare. The outcome is a timeless, emotionally resonant side-by-side generational image that maintains consistent facial traits, skin texture, and unique features, and adapts clothing style (casual/formal/neutral) without adding modern artifacts, logos, extra characters, or altering the setting.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `clothing_style` | Optional | Defines how both the childhood and present versions of the subject are dressed. The clothing should harmonize naturally so the two versions look like they belong in the same photo. Avoid jarring or mismatched outfits.  | `casual: white T-shirt and jeans, light sweater  ` |



### imageInputs

This prompt requires **exactly 2 images**. You **must pass exactly 2 image flags** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | your childhood portrait | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |
| 2 | Yes | your present-day portrait | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `clothing_style` (default: `casual: white T-shirt and jeans, light sweater  `)
- Required images:
  - **Exactly 2** images: image 1 (your childhood portrait) and image 2 (your present-day portrait). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (your childhood portrait) and image 2 (your present-day portrait)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `past-and-present-portrait-merge`).

Command form:

```bash
betterprompt generate past-and-present-portrait-merge \
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
betterprompt generate past-and-present-portrait-merge \
  --input 'clothing_style=casual: white T-shirt and jeans, light sweater  ' \
  --image-input-url https://example.com/image1.png \
  --image-input-path /path/to/image2.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```
