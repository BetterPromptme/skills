---
name: cross-view-image-generation
description: This prompt instructs the assistant to generate a photorealistic, spatially consistent top-down (bird’s-eye) view corresponding to a given ground-level photograph, conditioned on specified environment type, preferred resolution, and output format. The result is a technical, informative overhead map that preserves real-world proportions, lighting, and color fidelity while explicitly marking the photographer’s location with a red dot labeled “Photographer,” avoiding any stylized or non-photographic renderings.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the assistant to generate a photorealistic, spatially consistent top-down (bird’s-eye) view corresponding to a given ground-level photograph, conditioned on specified environment type, preferred resolution, and output format. The result is a technical, informative overhead map that preserves real-world proportions, lighting, and color fidelity while explicitly marking the photographer’s location with a red dot labeled “Photographer,” avoiding any stylized or non-photographic renderings.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `output_format` | Optional | Specifies the structure or file type in which the generated result should be returned. Ensures compatibility with different use cases. | `PNG, JPEG, vector map, annotated diagram` |
| `environment_type` | Optional | Defines the type of environment in which the ground-level photo was taken. This helps AI adjust spatial interpretation and object recognition. | `urban, rural, indoor` |
| `resolution_preference` | Optional | Determines the quality and clarity level of the generated top-down view. Higher resolution provides more detail, while lower resolution reduces complexity. | `low, medium, high, 4K` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload the original ground-level photo that will be converted into a top-down view | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `output_format` (default: `PNG, JPEG, vector map, annotated diagram`)
  - `environment_type` (default: `urban, rural, indoor`)
  - `resolution_preference` (default: `low, medium, high, 4K`)
- Required images:
  - **Exactly 1** images: image 1 (Upload the original ground-level photo that will be converted into a top-down view). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload the original ground-level photo that will be converted into a top-down view)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `cross-view-image-generation`).

Command form:

```bash
betterprompt generate cross-view-image-generation \
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
betterprompt generate cross-view-image-generation \
  --input 'output_format=PNG, JPEG, vector map, annotated diagram' \
  --input 'environment_type=urban, rural, indoor' \
  --input 'resolution_preference=low, medium, high, 4K' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```