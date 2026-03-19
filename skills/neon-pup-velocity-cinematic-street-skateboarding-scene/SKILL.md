---
name: neon-pup-velocity-cinematic-street-skateboarding-scene
description: This prompt instructs an AI to act as a cinematic video director and generate a 5–10 second photorealistic, documentary-style sequence of a real copper Maltipoo skateboarding at speed through a specific New York City location, using specified camera and lighting choices. It defines realism-focused constraints—authentic dog anatomy and fur, natural motion blur and depth of field, handheld/gimbal-like camera behavior, and true-to-life lighting with reflections—while outlining a clear action beat (tricks, passing pedestrians with coffee, close camera moment, then a jump) and safety requirements to ensure the outcome resembles professionally captured real-world footage without stylization or overlays.
skillVersionId: 0199de7e-3cb0-72e0-94f7-b885abad6bb8
---

## What it does

This prompt instructs an AI to act as a cinematic video director and generate a 5–10 second photorealistic, documentary-style sequence of a real copper Maltipoo skateboarding at speed through a specific New York City location, using specified camera and lighting choices. It defines realism-focused constraints—authentic dog anatomy and fur, natural motion blur and depth of field, handheld/gimbal-like camera behavior, and true-to-life lighting with reflections—while outlining a clear action beat (tricks, passing pedestrians with coffee, close camera moment, then a jump) and safety requirements to ensure the outcome resembles professionally captured real-world footage without stylization or overlays.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `lighting` | Optional | Describe the lighting mood, time of day, or conditions. | `golden hour sunlight with soft reflections on glass` |
| `location` | Optional | Specify where the action takes place. Choose a real, detailed setting. | `busy New York City street lined with glass buildings` |
| `camera_type` | Optional | Define the camera style or lens used for realism. | `wide-angle lens, low cinematic perspective` |
| `dog_description` | Optional | Describe the real dog’s appearance — breed, color, size, or unique traits. | `sweet copper Maltipoo with fluffy fur` |



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
    - `lighting` (default: `golden hour sunlight with soft reflections on glass`)
  - `location` (default: `busy New York City street lined with glass buildings`)
  - `camera_type` (default: `wide-angle lens, low cinematic perspective`)
  - `dog_description` (default: `sweet copper Maltipoo with fluffy fur`)
- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"1280x720"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"1280x720"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199de7e-3cb0-72e0-94f7-b885abad6bb8`).

Command form:

```bash
betterprompt generate 0199de7e-3cb0-72e0-94f7-b885abad6bb8 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"1280x720"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0199de7e-3cb0-72e0-94f7-b885abad6bb8 \
  --input 'lighting=golden hour sunlight with soft reflections on glass' \
  --input 'location=busy New York City street lined with glass buildings' \
  --input 'camera_type=wide-angle lens, low cinematic perspective' \
  --input 'dog_description=sweet copper Maltipoo with fluffy fur' \
  --model sora-2 \
  --options '{"seconds":"4","size":"1280x720"}'
```
