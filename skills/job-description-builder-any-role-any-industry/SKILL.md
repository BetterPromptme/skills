---
name: job-description-builder-any-role-any-industry
description: This prompt instructs the AI to act as an experienced HR consultant and recruiter to produce a complete, professional job description using the supplied role, company, and candidate requirement details. The outcome is a clear, inclusive, and candidate-attractive posting that consolidates title, team, industry, location and work arrangement, employment type, responsibilities, required and preferred qualifications, culture and values, compensation/benefits (if provided), and precise application instructions into a structured job ad ready for publication.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as an experienced HR consultant and recruiter to produce a complete, professional job description using the supplied role, company, and candidate requirement details. The outcome is a clear, inclusive, and candidate-attractive posting that consolidates title, team, industry, location and work arrangement, employment type, responsibilities, required and preferred qualifications, culture and values, compensation/benefits (if provided), and precise application instructions into a structured job ad ready for publication.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Industry` | Required |  | (none) |
| `Location` | Required |  | (none) |
| `Job_Title` | Required |  | (none) |
| `Department` | Required |  | (none) |
| `Company_Name` | Required |  | (none) |
| `Qualifications` | Required |  | (none) |
| `Company_Culture` | Required |  | (none) |
| `Employment_Type` | Required |  | (none) |
| `Salary_Benefits` | Required |  | (none) |
| `Responsibilities` | Required |  | (none) |
| `Application_Instructions` | Required |  | (none) |
| `Preferred_Qualifications` | Required |  | (none) |



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
    - `Industry`
  - `Location`
  - `Job_Title`
  - `Department`
  - `Company_Name`
  - `Qualifications`
  - `Company_Culture`
  - `Employment_Type`
  - `Salary_Benefits`
  - `Responsibilities`
  - `Application_Instructions`
  - `Preferred_Qualifications`
- Optional: model and options.
  - Present the human with the default model **`gpt-4.1-mini`** and its available options. Look up `gpt-4.1-mini` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gpt-4.1-mini`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `job-description-builder-any-role-any-industry`).

Command form:

```bash
betterprompt generate job-description-builder-any-role-any-industry \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-4.1-mini`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate job-description-builder-any-role-any-industry \
  --input Industry=<value> \
  --input Location=<value> \
  --input Job_Title=<value> \
  --input Department=<value> \
  --input Company_Name=<value> \
  --input Qualifications=<value> \
  --input Company_Culture=<value> \
  --input Employment_Type=<value> \
  --input Salary_Benefits=<value> \
  --input Responsibilities=<value> \
  --input Application_Instructions=<value> \
  --input Preferred_Qualifications=<value> \
  --model gpt-4.1-mini \
  --options '{}'
```
