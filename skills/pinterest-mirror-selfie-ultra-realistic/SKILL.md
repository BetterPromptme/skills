---
name: pinterest-mirror-selfie-ultra-realistic
description: This prompt instructs an image model to generate a hyper-realistic mirror selfie of a gender-neutral person in a specified location, wearing a defined outfit with particular hair and accessories, conveying a chosen vibe and pose under specified lighting. It emphasizes an authentic smartphone aesthetic with natural skin and fabric detail, subtle lens distortion, and realistic reflections while explicitly forbidding common artificial or stylized traits, resulting in a believable iPhone-style RAW photo rather than a polished or cinematic image.
skillVersionId: 019bf0f1-3e0b-7648-af77-b5432808cdd0
---

## What it does

This prompt instructs an image model to generate a hyper-realistic mirror selfie of a gender-neutral person in a specified location, wearing a defined outfit with particular hair and accessories, conveying a chosen vibe and pose under specified lighting. It emphasizes an authentic smartphone aesthetic with natural skin and fabric detail, subtle lens distortion, and realistic reflections while explicitly forbidding common artificial or stylized traits, resulting in a believable iPhone-style RAW photo rather than a polished or cinematic image.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Pose` | Optional | Natural mirror selfie pose (realistic body posture + phone hold). | `PHONE IN ONE HAND, OTHER HAND IN POCKET` |
| `Vibe` | Optional | Facial expression + mood of the mirror selfie (keep it natural + human). | `SERIOUS / MOODY` |
| `Lighting` | Optional | Lighting style for the mirror selfie (realistic indoor lighting, no studio). | `COOL WHITE BATHROOM LIGHT` |
| `Hair_style` | Optional | Choose the hairstyle + vibe (natural, trendy, not overly styled). | `BLOWOUT VOLUME` |
| `Accessories` | Optional | Small accessories to add realism + personality (keep it minimal and believable). | `SMALL SILVER HOOPS` |
| `Outfit_color` | Optional | Choose the main color palette of the outfit (can be one color or neutral tones). | `ALL BLACK` |
| `Outfit_style` | Optional | Choose the outfit vibe for the mirror selfie (works for any gender). | `CLEAN GIRL BASICS` |
| `Mirror_location` | Optional | Where the mirror selfie is taken. Pick a popular aesthetic location. | `GYM LOCKER ROOM MIRROR` |
| `Gender_neutral_person` | Optional | Who is in the mirror selfie (gender-neutral). Example: young adult / adult person / person in their 20s | `Young adult` |



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
    - `Pose` (default: `PHONE IN ONE HAND, OTHER HAND IN POCKET`)
  - `Vibe` (default: `SERIOUS / MOODY`)
  - `Lighting` (default: `COOL WHITE BATHROOM LIGHT`)
  - `Hair_style` (default: `BLOWOUT VOLUME`)
  - `Accessories` (default: `SMALL SILVER HOOPS`)
  - `Outfit_color` (default: `ALL BLACK`)
  - `Outfit_style` (default: `CLEAN GIRL BASICS`)
  - `Mirror_location` (default: `GYM LOCKER ROOM MIRROR`)
  - `Gender_neutral_person` (default: `Young adult`)
- Optional: model and options.
  - Present the human with the default model **`gemini-3-pro-image-preview`** and its available options. Look up `gemini-3-pro-image-preview` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"aspectRatio":"9:16","resolution":"2K"}`.
  - If the human does not specify, defaults are used: model `gemini-3-pro-image-preview`, options `{"aspectRatio":"9:16","resolution":"2K"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019bf0f1-3e0b-7648-af77-b5432808cdd0`).

Command form:

```bash
betterprompt generate 019bf0f1-3e0b-7648-af77-b5432808cdd0 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-3-pro-image-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"aspectRatio":"9:16","resolution":"2K"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019bf0f1-3e0b-7648-af77-b5432808cdd0 \
  --input 'Pose=PHONE IN ONE HAND, OTHER HAND IN POCKET' \
  --input 'Vibe=SERIOUS / MOODY' \
  --input 'Lighting=COOL WHITE BATHROOM LIGHT' \
  --input 'Hair_style=BLOWOUT VOLUME' \
  --input 'Accessories=SMALL SILVER HOOPS' \
  --input 'Outfit_color=ALL BLACK' \
  --input 'Outfit_style=CLEAN GIRL BASICS' \
  --input 'Mirror_location=GYM LOCKER ROOM MIRROR' \
  --input 'Gender_neutral_person=Young adult' \
  --model gemini-3-pro-image-preview \
  --options '{"aspectRatio":"9:16","resolution":"2K"}'
```
