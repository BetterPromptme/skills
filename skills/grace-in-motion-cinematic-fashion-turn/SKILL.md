---
name: grace-in-motion-cinematic-fashion-turn
description: This prompt instructs an AI video generator to produce a calm, modern, editorial fashion clip in which a character is filmed from behind and slowly turns into a profile view, showcasing an elegant outfit through subtle movement, fabric texture, and light glints. It specifies a soft neutral background and refined lighting to emphasize depth and sophistication, resulting in a cinematic, high-end fashion video focused on graceful motion and detailed styling.
skillVersionId: 0199e76b-48df-734b-8640-a277be627911
---

## What it does

This prompt instructs an AI video generator to produce a calm, modern, editorial fashion clip in which a character is filmed from behind and slowly turns into a profile view, showcasing an elegant outfit through subtle movement, fabric texture, and light glints. It specifies a soft neutral background and refined lighting to emphasize depth and sophistication, resulting in a cinematic, high-end fashion video focused on graceful motion and detailed styling.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `lighting_style` | Optional | The lighting recipe that shapes profile lines, fabric texture, and separation from the background. Specify key direction, quality, and any rim or fill. | `Soft key from camera left with warm rim on shoulders and hair` |
| `background_style` | Optional | A neutral or gently toned backdrop that keeps focus on the subject and wardrobe. Think studio gradients, textured walls, or minimal locations that add depth without stealing attention. | `Soft beige studio gradient with faint falloff` |
| `outfit_description` | Optional | The wardrobe focus that drives texture, silhouette, and movement. Mention fabric, color, cut, and any detail that will catch light during the turn. | `Ivory silk blouse tucked into high waisted tailored trousers with soft pleats` |
| `character_description` | Optional | A concise portrait of the subject that hints at age, hair, posture, and vibe. Keep it visual and specific so motion reads clearly in profile and during the turn. | `A tall woman with long black hair in a sleek low bun, poised and calm` |



### Models and options

This skill's modality is: **`video`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"video"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "video"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional text inputs (use defaults if not provided by the human):
    - `lighting_style` (default: `Soft key from camera left with warm rim on shoulders and hair`)
  - `background_style` (default: `Soft beige studio gradient with faint falloff`)
  - `outfit_description` (default: `Ivory silk blouse tucked into high waisted tailored trousers with soft pleats`)
  - `character_description` (default: `A tall woman with long black hair in a sleek low bun, poised and calm`)
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199e76b-48df-734b-8640-a277be627911`).

Command form:

```bash
betterprompt generate 0199e76b-48df-734b-8640-a277be627911 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0199e76b-48df-734b-8640-a277be627911 \
  --input 'lighting_style=Soft key from camera left with warm rim on shoulders and hair' \
  --input 'background_style=Soft beige studio gradient with faint falloff' \
  --input 'outfit_description=Ivory silk blouse tucked into high waisted tailored trousers with soft pleats' \
  --input 'character_description=A tall woman with long black hair in a sleek low bun, poised and calm' \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```
