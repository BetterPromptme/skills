---
name: predict-your-future
description: This prompt instructs the AI to produce a supportive, practical astrological future outlook using the user’s birth details and selected focus areas, defaulting to Western Tropical astrology (or optionally Vedic Sidereal). The result includes a brief natal snapshot (highlighting Sun, Moon, and Ascendant if birth time is known), a transit-based forecast for the next three and/or twelve months with opportunity and challenge windows, 5–8 key date ranges with strength ratings and recommended actions, targeted guidance and checklists for the chosen life areas, optional balancing/timing suggestions (e.g., journaling prompts or rituals), and a clear note of any assumptions made due to missing data and how they affect confidence, all delivered in a specified structured format with a gentle disclaimer.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to produce a supportive, practical astrological future outlook using the user’s birth details and selected focus areas, defaulting to Western Tropical astrology (or optionally Vedic Sidereal). The result includes a brief natal snapshot (highlighting Sun, Moon, and Ascendant if birth time is known), a transit-based forecast for the next three and/or twelve months with opportunity and challenge windows, 5–8 key date ranges with strength ratings and recommended actions, targeted guidance and checklists for the chosen life areas, optional balancing/timing suggestions (e.g., journaling prompts or rituals), and a clear note of any assumptions made due to missing data and how they affect confidence, all delivered in a specified structured format with a gentle disclaimer.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Name` | Optional |  | `Noi` |
| `Focus_areas` | Optional |  | `Focus areas career finances personal growth` |
| `Date_of_birth` | Optional |  | `2004 01 07` |
| `Time_of_birth` | Optional |  | `1 oclock` |
| `Place_of_birth` | Optional |  | `Đắk Lắk, Việt Nam` |
| `Preferred_tradition` | Optional |  | `Tradition preference Western Tropical` |
| `Time_horizon_preference` | Optional |  | `Time horizon next three months and next twelve months` |



### Models and options

This skill's modality is: **`text`**.

To discover which `model` values you can use (and which `options` keys/values are valid for each model), run:

```bash
betterprompt resources --models-only --json
```

Then filter the returned JSON array to entries where `modality` is `"text"`.

## How to run

### Step 1: Collect inputs

First, run `betterprompt resources --models-only --json` and filter to `modality: "text"` to discover valid models and available options:

```bash
betterprompt resources --models-only --json
```

Use only the models and option values that appear in the filtered results.

Then collect all inputs from the human:

- Optional text inputs (use defaults if not provided by the human):
    - `Name` (default: `Noi`)
  - `Focus_areas` (default: `Focus areas career finances personal growth`)
  - `Date_of_birth` (default: `2004 01 07`)
  - `Time_of_birth` (default: `1 oclock`)
  - `Place_of_birth` (default: `Đắk Lắk, Việt Nam`)
  - `Preferred_tradition` (default: `Tradition preference Western Tropical`)
  - `Time_horizon_preference` (default: `Time horizon next three months and next twelve months`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5-mini`** and its available options. Look up `gpt-5-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-5-mini`, options `{}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `predict-your-future`).

Command form:

```bash
betterprompt generate predict-your-future \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate predict-your-future \
  --input Name=Noi \
  --input 'Focus_areas=Focus areas career finances personal growth' \
  --input 'Date_of_birth=2004 01 07' \
  --input 'Time_of_birth=1 oclock' \
  --input 'Place_of_birth=Đắk Lắk, Việt Nam' \
  --input 'Preferred_tradition=Tradition preference Western Tropical' \
  --input 'Time_horizon_preference=Time horizon next three months and next twelve months' \
  --model gpt-5-mini \
  --options '{}'
```
