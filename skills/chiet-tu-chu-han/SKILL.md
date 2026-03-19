---
name: chiet-tu-chu-han
description: Prompt này yêu cầu AI đóng vai giáo viên tiếng Trung để phân tích một chữ Hán giản thể do người dùng cung cấp, trình bày pinyin, âm Hán‑Việt, nghĩa gốc và các từ ghép thường gặp, đồng thời chiết tự chữ đó thành các bộ/thành phần cấu tạo (kèm giải thích liên hệ giữa các phần) theo đúng cấu trúc và phong cách của ví dụ, nhằm tạo ra một bài phân tích rõ ràng, có hệ thống và dễ học.
skillVersionId: 019a2984-683c-761c-9a33-f93afd98d0bc
---

## What it does

Prompt này yêu cầu AI đóng vai giáo viên tiếng Trung để phân tích một chữ Hán giản thể do người dùng cung cấp, trình bày pinyin, âm Hán‑Việt, nghĩa gốc và các từ ghép thường gặp, đồng thời chiết tự chữ đó thành các bộ/thành phần cấu tạo (kèm giải thích liên hệ giữa các phần) theo đúng cấu trúc và phong cách của ví dụ, nhằm tạo ra một bài phân tích rõ ràng, có hệ thống và dễ học.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `chữ_cần_chiết_tự` | Required | chữ cần chiết tự | (none) |



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


- Required text inputs:
    - `chữ_cần_chiết_tự`
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a2984-683c-761c-9a33-f93afd98d0bc`).

Command form:

```bash
betterprompt generate 019a2984-683c-761c-9a33-f93afd98d0bc \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`grok-4-fast`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate 019a2984-683c-761c-9a33-f93afd98d0bc \
  --input chữ_cần_chiết_tự=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```
