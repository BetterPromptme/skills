---
name: horror-movie-night-1990s-edition
description: This prompt instructs the AI to use the provided person’s reference photo to create a grainy, analog-looking 1990s horror-cinema portrait set in a dim movie theater, with the subject seated beside Ghostface while clearly sharing a popcorn bucket and reacting wide-eyed to the screen. It specifies wardrobe and makeup inputs, arranges multiple rows of iconic horror characters in the background for depth, and enforces constraints such as preserving the subject’s facial features, maintaining realistic screen-lit lighting and proportions, and avoiding modern additions, gore, or disturbing violence—resulting in a nostalgic, playful, cinematic still with authentic retro film texture.
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

This prompt instructs the AI to use the provided person’s reference photo to create a grainy, analog-looking 1990s horror-cinema portrait set in a dim movie theater, with the subject seated beside Ghostface while clearly sharing a popcorn bucket and reacting wide-eyed to the screen. It specifies wardrobe and makeup inputs, arranges multiple rows of iconic horror characters in the background for depth, and enforces constraints such as preserving the subject’s facial features, maintaining realistic screen-lit lighting and proportions, and avoiding modern additions, gore, or disturbing violence—resulting in a nostalgic, playful, cinematic still with authentic retro film texture.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `makeup` | Optional | Makeup details that express mood and fit the 90s cinematic style. | `Soft glam makeup with pink lip gloss and pink lip liner, glowing lightly in the movie’s screen light.` |
| `outfit` | Optional | The wardrobe or clothing details that define your style and the 90s theme. | `A black tank top with baggy jeans for a casual, nostalgic look.` |
| `background_characters_row1` | Optional | The first row of supporting horror characters behind you to add depth and storytelling. | `Valak the Nun, Michael Myers, Freddy Krueger, and Chucky seated right behind you, watching the movie.` |
| `background_characters_row2` | Optional | The second, more distant row of horror icons to create layered cinematic depth. | `Jason Voorhees and Pennywise sitting two rows behind, also eating popcorn.` |



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes | Upload your photo | `--image-input-url <url>` or `--image-input-path <path>` |


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
    - `makeup` (default: `Soft glam makeup with pink lip gloss and pink lip liner, glowing lightly in the movie’s screen light.`)
  - `outfit` (default: `A black tank top with baggy jeans for a casual, nostalgic look.`)
  - `background_characters_row1` (default: `Valak the Nun, Michael Myers, Freddy Krueger, and Chucky seated right behind you, watching the movie.`)
  - `background_characters_row2` (default: `Jason Voorhees and Pennywise sitting two rows behind, also eating popcorn.`)
- Required images:
  - **Exactly 1** images: image 1 (Upload your photo). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-flash-image-preview`** and its available options. Look up `gemini-2.5-flash-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-flash-image-preview`, options `{}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (Upload your photo)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `horror-movie-night-1990s-edition`).

Command form:

```bash
betterprompt generate horror-movie-night-1990s-edition \
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
betterprompt generate horror-movie-night-1990s-edition \
  --input 'makeup=Soft glam makeup with pink lip gloss and pink lip liner, glowing lightly in the movie’s screen light.' \
  --input 'outfit=A black tank top with baggy jeans for a casual, nostalgic look.' \
  --input 'background_characters_row1=Valak the Nun, Michael Myers, Freddy Krueger, and Chucky seated right behind you, watching the movie.' \
  --input 'background_characters_row2=Jason Voorhees and Pennywise sitting two rows behind, also eating popcorn.' \
  --image-input-url https://example.com/image1.png \
  --model gemini-2.5-flash-image-preview \
  --options '{}'
```