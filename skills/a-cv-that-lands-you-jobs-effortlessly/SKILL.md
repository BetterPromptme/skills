---
name: a-cv-that-lands-you-jobs-effortlessly
description: This prompt asks the AI to tailor a candidate’s CV content to a specific job description by generating recruiter-aligned sections: a 3–5 line career summary, a JD-linked skills section with evidence, an action-oriented experience/key projects section, an internship/part-time description framed as measurable value contribution, and a clear career objective with 2–3 year goals. Using the provided JD and existing CV details, the outcome is a set of concise, professional, and role-relevant statements that directly map the candidate’s skills and achievements to the position’s requirements while emphasizing growth mindset, adaptability, and long-term commitment.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt asks the AI to tailor a candidate’s CV content to a specific job description by generating recruiter-aligned sections: a 3–5 line career summary, a JD-linked skills section with evidence, an action-oriented experience/key projects section, an internship/part-time description framed as measurable value contribution, and a clear career objective with 2–3 year goals. Using the provided JD and existing CV details, the outcome is a set of concise, professional, and role-relevant statements that directly map the candidate’s skills and achievements to the position’s requirements while emphasizing growth mindset, adaptability, and long-term commitment.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `Your_CV` | Required |  | (none) |
| `JD_of_your_company_apply` | Required |  | (none) |



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
    - `Your_CV`
  - `JD_of_your_company_apply`
- Optional: model and options.
  - Present the human with the default model **`gemini-2.5-pro-preview`** and its available options. Look up `gemini-2.5-pro-preview` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{}`.
  - If the human does not specify, defaults are used: model `gemini-2.5-pro-preview`, options `{}`. Other models from the resources call are also available.

If any required text input is missing, **ask the human for what's missing**. Do not assume or fabricate values.

### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `a-cv-that-lands-you-jobs-effortlessly`).

Command form:

```bash
betterprompt generate a-cv-that-lands-you-jobs-effortlessly \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gemini-2.5-pro-preview`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate a-cv-that-lands-you-jobs-effortlessly \
  --input Your_CV=<value> \
  --input JD_of_your_company_apply=<value> \
  --model gemini-2.5-pro-preview \
  --options '{}'
```
