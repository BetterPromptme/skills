---
name: realistic-bee-flight-pov
description: This prompt instructs an AI to produce an ultra-photorealistic, documentary-style video shot from a bee’s point of view as it flies through a real-looking apartment, with the camera tracking just behind the insect so its body and wings are partially visible. It specifies physically accurate flight motion, true-to-life lighting, depth of field, and detailed interior textures (including a wooden green closet), while enforcing strict constraints against any stylized/CGI appearance. It also defines a realistic soundscape dominated by spatially accurate buzzing with subtle distant human reactions and no music or artificial effects, resulting in footage intended to be indistinguishable from real wildlife cinematography.
skillVersionId: 0199ebfe-2eab-750e-9dc5-8eaa8c684de3
---

## What it does

This prompt instructs an AI to produce an ultra-photorealistic, documentary-style video shot from a bee’s point of view as it flies through a real-looking apartment, with the camera tracking just behind the insect so its body and wings are partially visible. It specifies physically accurate flight motion, true-to-life lighting, depth of field, and detailed interior textures (including a wooden green closet), while enforcing strict constraints against any stylized/CGI appearance. It also defines a realistic soundscape dominated by spatially accurate buzzing with subtle distant human reactions and no music or artificial effects, resulting in footage intended to be indistinguishable from real wildlife cinematography.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs



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

- Optional: model and options.
  - Present the human with the default model **`sora-2`** and its available options. Look up `sora-2` in the `betterprompt resources` output (filtered to modality `"video"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"seconds":"4","size":"720x1280"}`.
  - If the human does not specify, defaults are used: model `sora-2`, options `{"seconds":"4","size":"720x1280"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0199ebfe-2eab-750e-9dc5-8eaa8c684de3`).

Command form:

```bash
betterprompt generate 0199ebfe-2eab-750e-9dc5-8eaa8c684de3 \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`sora-2`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"seconds":"4","size":"720x1280"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0199ebfe-2eab-750e-9dc5-8eaa8c684de3 \
  --model sora-2 \
  --options '{"seconds":"4","size":"720x1280"}'
```
