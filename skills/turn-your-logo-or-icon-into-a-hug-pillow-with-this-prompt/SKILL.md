---
name: turn-your-logo-or-icon-into-a-hug-pillow-with-this-prompt
description: Il prompt richiede di realizzare un rendering 3D ad alta risoluzione del logo trasformato in un oggetto gonfiabile, con forme morbide e arrotondate, texture liscia opaca e dettagli come pieghe e cuciture, inquadrato a 45° per mettere in risalto la profondità e inserito in una scena di soggiorno dove il logo è appoggiato su un divano e l’arredamento riprende i suoi colori, ottenendo un’immagine finale realistica e coerente con l’estetica “inflatable”.
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

Il prompt richiede di realizzare un rendering 3D ad alta risoluzione del logo trasformato in un oggetto gonfiabile, con forme morbide e arrotondate, texture liscia opaca e dettagli come pieghe e cuciture, inquadrato a 45° per mettere in risalto la profondità e inserito in una scena di soggiorno dove il logo è appoggiato su un divano e l’arredamento riprende i suoi colori, ottenendo un’immagine finale realistica e coerente con l’estetica “inflatable”.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs



### imageInputs

This prompt requires **exactly 1 image**. You **must pass exactly 1 image flag** (no more, no fewer), in the order matching the descriptions below.

| Index | Required | Description | Allowed CLI flags |
| ---: | ---: | --- | --- |
| 1 | Yes |  | `--image-input-url <url>` or `--image-input-base64 <base64>` or `--image-input-path <absolute path to image>` |


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

- Required images:
  - **Exactly 1** images: image 1 (image 1). Images must be provided in this order.
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"size":"1024x1024","quality":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"size":"1024x1024","quality":"low"}`. Other models from the resources call are also available.

If the required images are missing, **ask the human for what's missing**. Do not assume or fabricate values. Tell the human: **"Please provide images in this order: image 1 (image 1)"**.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `turn-your-logo-or-icon-into-a-hug-pillow-with-this-prompt`).

Command form:

```bash
betterprompt generate turn-your-logo-or-icon-into-a-hug-pillow-with-this-prompt \
  [--image-input-url <url>] \
  [--image-input-base64 <base64>] \
  [--image-input-path <absolute path to image>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each image using one of `--image-input-url`, `--image-input-base64`, or `--image-input-path`, in the order matching the imageInputs descriptions (image 1 first, then image 2, etc.).
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"size":"1024x1024","quality":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate turn-your-logo-or-icon-into-a-hug-pillow-with-this-prompt \
  --image-input-url https://example.com/image1.png \
  --model gpt-image-1 \
  --options '{"size":"1024x1024","quality":"low"}'
```