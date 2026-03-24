---
name: object-poster-transformation
description: This prompt instructs the AI to take a user-supplied image of an object and redesign it into a polished, print-ready poster by applying the user’s chosen poster style, headline and subtext, color palette, and any requested design accents. It ensures the original object remains clearly recognizable and central, while guiding composition, lighting, typography hierarchy, and visual balance to achieve a cohesive, professional poster look. The outcome is a high-quality poster concept tailored to the user’s creative direction, with guardrails that prevent unwanted object replacement, distortions, or unrequested additions.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to take a user-supplied image of an object and redesign it into a polished, print-ready poster by applying the user’s chosen poster style, headline and subtext, color palette, and any requested design accents. It ensures the original object remains clearly recognizable and central, while guiding composition, lighting, typography hierarchy, and visual balance to achieve a cohesive, professional poster look. The outcome is a high-quality poster concept tailored to the user’s creative direction, with guardrails that prevent unwanted object replacement, distortions, or unrequested additions.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Sub_text` | Optional |  | `Tagline, slogan, or subordinate line,...` |
| `Main_text` | Optional |  | `The headline, title,...` |
| `Poster_style` | Required |  | (none) |
| `Color_palette` | Optional |  | `Monochrome, pastel, metallic, neon,...` |
| `Additional_elements` | Optional |  | `light particles, geometric shapes, gradient background, textured paper,....` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Object image | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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
    - `Poster_style`
- Optional text inputs (use defaults if not provided by the human):
    - `Sub_text` (default: `Tagline, slogan, or subordinate line,...`)
  - `Main_text` (default: `The headline, title,...`)
  - `Color_palette` (default: `Monochrome, pastel, metallic, neon,...`)
  - `Additional_elements` (default: `light particles, geometric shapes, gradient background, textured paper,....`)
- Required images:
  - **Exactly 1** images: image 1 (Object image). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"3:4","resolution":"1K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"3:4","resolution":"1K"}`. Other models from the resources call are also available.

If any required text input or the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Object image)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `object-poster-transformation`).

Command form:

```bash
betterprompt generate object-poster-transformation \
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
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"3:4","resolution":"1K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate object-poster-transformation \
  --input 'Sub_text=Tagline, slogan, or subordinate line,...' \
  --input 'Main_text=The headline, title,...' \
  --input Poster_style=<value> \
  --input 'Color_palette=Monochrome, pastel, metallic, neon,...' \
  --input 'Additional_elements=light particles, geometric shapes, gradient background, textured paper,....' \
  --image-input-url https://example.com/image1.png \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"3:4","resolution":"1K"}'
```
