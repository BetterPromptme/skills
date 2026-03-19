---
name: customizable-travel-ad-image-generator
description: This prompt instructs an AI image generator to produce an advertising-style travel campaign visual tailored to a specific brand or service, location, time of day, and seasonal or weather conditions, featuring designated landmarks and added scene details to achieve a chosen mood. The outcome is a cohesive, marketing-ready image that visually emphasizes the requested destination attributes and atmosphere in a polished promotional style.
skillVersionId: 0198c08e-b78e-7e08-8a8f-2ca8b5f070f4
---

## What it does

This prompt instructs an AI image generator to produce an advertising-style travel campaign visual tailored to a specific brand or service, location, time of day, and seasonal or weather conditions, featuring designated landmarks and added scene details to achieve a chosen mood. The outcome is a cohesive, marketing-ready image that visually emphasizes the requested destination attributes and atmosphere in a polished promotional style.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Time_of_Day` | Required |  | (none) |
| `Season_or_Weather` | Required |  | (none) |
| `Additional_Details` | Required |  | (none) |
| `Location_or_Region` | Required |  | (none) |
| `Mood_or_Atmosphere` | Required |  | (none) |
| `Travel_Brand_or_Service` | Required |  | (none) |
| `Key_Features_or_Landmarks` | Required |  | (none) |



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
    - `Time_of_Day`
  - `Season_or_Weather`
  - `Additional_Details`
  - `Location_or_Region`
  - `Mood_or_Atmosphere`
  - `Travel_Brand_or_Service`
  - `Key_Features_or_Landmarks`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `0198c08e-b78e-7e08-8a8f-2ca8b5f070f4`).

Command form:

```bash
betterprompt generate 0198c08e-b78e-7e08-8a8f-2ca8b5f070f4 \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-image-1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"image":{"quality":2},"quality":"high"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 0198c08e-b78e-7e08-8a8f-2ca8b5f070f4 \
  --input Time_of_Day=<value> \
  --input Season_or_Weather=<value> \
  --input Additional_Details=<value> \
  --input Location_or_Region=<value> \
  --input Mood_or_Atmosphere=<value> \
  --input Travel_Brand_or_Service=<value> \
  --input Key_Features_or_Landmarks=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
