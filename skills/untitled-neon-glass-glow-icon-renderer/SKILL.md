---
name: untitled-neon-glass-glow-icon-renderer
description: This prompt instructs the AI to generate a centered, isolated futuristic holographic 3D icon of a specified subject, preserving its original silhouette while applying sharp stylized outlines and geometry-aware detailing. It specifies neon glass-like materials, a high-contrast fluorescent color palette, and intense backlit lighting to produce refractive surfaces, glowing edge auras, rim bloom, and soft luminous shadows. The intended outcome is a crisp, high-gloss “Neon Glass Glow Icons” style render on a pure black background with a subtle halo glow.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to generate a centered, isolated futuristic holographic 3D icon of a specified subject, preserving its original silhouette while applying sharp stylized outlines and geometry-aware detailing. It specifies neon glass-like materials, a high-contrast fluorescent color palette, and intense backlit lighting to produce refractive surfaces, glowing edge auras, rim bloom, and soft luminous shadows. The intended outcome is a crisp, high-gloss “Neon Glass Glow Icons” style render on a pure black background with a subtle halo glow.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `SUBJECT` | Required |  | (none) |



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
    - `SUBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":1},"quality":"medium"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":1},"quality":"medium"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `untitled-neon-glass-glow-icon-renderer`).

Command form:

```bash
betterprompt generate untitled-neon-glass-glow-icon-renderer \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":1},"quality":"medium"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate untitled-neon-glass-glow-icon-renderer \
  --input SUBJECT=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":1},"quality":"medium"}'
```
