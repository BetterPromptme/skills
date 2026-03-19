---
name: email-architect
description: This prompt instructs the AI to act as an experienced business communication specialist and generate a ready-to-send professional email template based on user-supplied details such as email type, recipient, purpose, key points, tone, and context. The result is a clearly structured, concise, and persuasive email—including a short subject line, appropriate greeting, organized body (with bullets when helpful), a specific call-to-action, and a professional closing—formatted for immediate use with customizable placeholders and checked against clarity, tone consistency, and completeness standards.
skillVersionId: 019a7644-1d2f-7797-9b96-d06426249498
---

## What it does

This prompt instructs the AI to act as an experienced business communication specialist and generate a ready-to-send professional email template based on user-supplied details such as email type, recipient, purpose, key points, tone, and context. The result is a clearly structured, concise, and persuasive email—including a short subject line, appropriate greeting, organized body (with bullets when helpful), a specific call-to-action, and a professional closing—formatted for immediate use with customizable placeholders and checked against clarity, tone consistency, and completeness standards.

> Requires the **betterprompt** CLI to run. For installation and general CLI usage, refer to the `betterprompt` skill in your skill list or if not yet available in skill list, install via `npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill betterprompt`

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `tone` | Optional | What communication style fits best? | `Professional, Friendly, Formal, Urgent, Persuasive, etc.` |
| `purpose` | Required | What’s the main goal or outcome you want from this email?  | (none) |
| `recipient` | Optional | Who are you writing to | `Client, Colleague, Manager, Partner, Customer` |
| `email_type` | Optional | What kind of email are you writing | `Introduction, Follow-up, Request, Apology, Announcement` |
| `key_points` | Required | List the main details or information you want to include (2–4 short bullet points). | (none) |
| `additional_context` | Required | Any background information, previous interactions, company or project details that help clarify the situation.  | (none) |



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
    - `purpose`
  - `key_points`
  - `additional_context`
- Optional text inputs (use defaults if not provided by the human):
    - `tone` (default: `Professional, Friendly, Formal, Urgent, Persuasive, etc.`)
  - `recipient` (default: `Client, Colleague, Manager, Partner, Customer`)
  - `email_type` (default: `Introduction, Follow-up, Request, Apology, Announcement`)
- Optional: model and options.
  - Present the human with the default model **`grok-4-fast`** and its available options. Look up `grok-4-fast` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `grok-4-fast`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `skillVersionId` as the positional argument (for this skill version, use `019a7644-1d2f-7797-9b96-d06426249498`).

Command form:

```bash
betterprompt generate 019a7644-1d2f-7797-9b96-d06426249498 \
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
betterprompt generate 019a7644-1d2f-7797-9b96-d06426249498 \
  --input 'tone=Professional, Friendly, Formal, Urgent, Persuasive, etc.' \
  --input purpose=<value> \
  --input 'recipient=Client, Colleague, Manager, Partner, Customer' \
  --input 'email_type=Introduction, Follow-up, Request, Apology, Announcement' \
  --input key_points=<value> \
  --input additional_context=<value> \
  --model grok-4-fast \
  --options '{"reasoningEffort":"low"}'
```
