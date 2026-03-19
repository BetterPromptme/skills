---
name: dynamic-motion-sketch
description: Prompt này dùng để tạo (hoặc hướng dẫn vẽ) một bản phác thảo bút chì dạng “nghiên cứu chuyển động” cho chủ thể bạn điền vào {{ SUBJECT }}, nhấn mạnh tư thế động và dòng chảy chuyển động bằng nét vẽ mạnh, quét rộng và đổ bóng nhiều lớp; kết quả là hình sketch giàu cảm giác hành động, có điểm nhấn màu bằng bút chì ở hai màu bạn chọn trong {{ COLOR1 }} và {{ COLOR2 }} để tăng độ sống động.
skillVersionId: 019878f7-1d19-7494-a858-444be096282a
---

## What it does

Prompt này dùng để tạo (hoặc hướng dẫn vẽ) một bản phác thảo bút chì dạng “nghiên cứu chuyển động” cho chủ thể bạn điền vào {{ SUBJECT }}, nhấn mạnh tư thế động và dòng chảy chuyển động bằng nét vẽ mạnh, quét rộng và đổ bóng nhiều lớp; kết quả là hình sketch giàu cảm giác hành động, có điểm nhấn màu bằng bút chì ở hai màu bạn chọn trong {{ COLOR1 }} và {{ COLOR2 }} để tăng độ sống động.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `COLOR1` | Required |  | (none) |
| `COLOR2` | Required |  | (none) |
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
    - `COLOR1`
  - `COLOR2`
  - `SUBJECT`
- Optional: model and options.
  - Present the human with the default model **`gpt-image-1`** and its available options. Look up `gpt-image-1` in the `betterprompt resources` output (filtered to modality `"image"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"image":{"quality":2},"quality":"high"}`.
  - If the human does not specify, defaults are used: model `gpt-image-1`, options `{"image":{"quality":2},"quality":"high"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019878f7-1d19-7494-a858-444be096282a`).

Command form:

```bash
betterprompt generate 019878f7-1d19-7494-a858-444be096282a \
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
betterprompt generate 019878f7-1d19-7494-a858-444be096282a \
  --input COLOR1=<value> \
  --input COLOR2=<value> \
  --input SUBJECT=<value> \
  --model gpt-image-1 \
  --options '{"image":{"quality":2},"quality":"high"}'
```
