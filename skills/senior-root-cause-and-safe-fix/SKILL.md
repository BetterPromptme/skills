---
name: senior-root-cause-and-safe-fix
description: This prompt instructs the AI to act as a staff-level Node.js debugging engineer who, given a Node.js stack trace and the relevant source code (plus optional context), produces a production-ready incident-style report: it determines the root cause and precise failure location, proposes the smallest safe code change to fix the bug without altering intended behavior, and supplies a Jest/Vitest regression test that would have failed before the fix and passed after, with clear structure and explicit assumptions when details are ambiguous.
compatibility: Requires betterprompt >= 0.1.0
---

## What it does

This prompt instructs the AI to act as a staff-level Node.js debugging engineer who, given a Node.js stack trace and the relevant source code (plus optional context), produces a production-ready incident-style report: it determines the root cause and precise failure location, proposes the smallest safe code change to fix the bug without altering intended behavior, and supplies a Jest/Vitest regression test that would have failed before the fix and passed after, with clear structure and explicit assumptions when details are ambiguous.

> For more installation instructions go to https://raw.githubusercontent.com/BetterPromptme/skills/refs/heads/main/betterprompt/SKILL.md to check out this skill.

## Inputs


### textInputs

Pass each text input using `--input <key>=<value>` flags.

| Variable key | Required? | Description | Defaults |
| --- | ---: | --- | --- |
| `CONTEXT` | Optional | Any extra context such as: recent changes, environment (prod/stage/local), or known constraints | `- Environment: Production - Recent change: Migrated from custom auth middleware to JWT-based middleware. - Reports: Errors only appear for some routes, not all authenticated endpoints.` |
| `STACK_TRACE` | Optional | A full Node.js error stack trace, including file paths and line numbers where possible. | `TypeError: Cannot read properties of undefined (reading 'id')     at getUserProfile (/src/user/service.js:42:22)     at processRequest (/src/api/handler.js:18:11)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at next (/node_modules/express/lib/router/route.js:144:13)     at Route.dispatch (/node_modules/express/lib/router/route.js:114:3)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at /node_modules/express/lib/router/index.js:284:15` |
| `CODE_SNIPPET` | Optional | The relevant code (function, module, or small file) where the error originates.  | `// /src/user/service.js async function getUserProfile(req) {   const userId = req.user.id; // line 42   const user = await db.users.findById(userId);   return user.profile; }  module.exports = { getUserProfile };` |



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
    - `CONTEXT` (default: `- Environment: Production - Recent change: Migrated from custom auth middleware to JWT-based middleware. - Reports: Errors only appear for some routes, not all authenticated endpoints.`)
  - `STACK_TRACE` (default: `TypeError: Cannot read properties of undefined (reading 'id')     at getUserProfile (/src/user/service.js:42:22)     at processRequest (/src/api/handler.js:18:11)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at next (/node_modules/express/lib/router/route.js:144:13)     at Route.dispatch (/node_modules/express/lib/router/route.js:114:3)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at /node_modules/express/lib/router/index.js:284:15`)
  - `CODE_SNIPPET` (default: `// /src/user/service.js async function getUserProfile(req) {   const userId = req.user.id; // line 42   const user = await db.users.findById(userId);   return user.profile; }  module.exports = { getUserProfile };`)
- Optional: model and options.
  - Present the human with the default model **`gpt-5.1`** and its available options. Look up `gpt-5.1` in the `betterprompt resources` output (filtered to modality `"text"`) and show its `availableOptions` as: `key: val1, val2 (default), val3  |  key2: ...`. Mark a value `(default)` if it matches these defaults: `{"reasoningEffort":"low"}`.
  - If the human does not specify, defaults are used: model `gpt-5.1`, options `{"reasoningEffort":"low"}`. Other models from the resources call are also available.


### Step 2: Run via BetterPrompt CLI

Use the frontmatter's `name` as the positional argument (for this skill, use `senior-root-cause-and-safe-fix`).

Command form:

```bash
betterprompt generate senior-root-cause-and-safe-fix \
  [--input <key>=<value>] \
  [--model <model>] \
  [--options <options JSON>] \
  [--json]
```

Notes:

- Pass each text input as a separate `--input <key>=<value>` flag.
- If the human does **not** mention a model, **omit** `--model` and BetterPrompt will use the default model: **`gpt-5.1`**.
- If the human does **not** mention options, **omit** `--options` and BetterPrompt will use the default options: **`{"reasoningEffort":"low"}`**.
- If the run times out, the response will include a `runId` you can use to fetch the result later.

Example (using defaults shown above):

```bash
betterprompt generate senior-root-cause-and-safe-fix \
  --input 'CONTEXT=- Environment: Production - Recent change: Migrated from custom auth middleware to JWT-based middleware. - Reports: Errors only appear for some routes, not all authenticated endpoints.' \
  --input 'STACK_TRACE=TypeError: Cannot read properties of undefined (reading 'id')     at getUserProfile (/src/user/service.js:42:22)     at processRequest (/src/api/handler.js:18:11)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at next (/node_modules/express/lib/router/route.js:144:13)     at Route.dispatch (/node_modules/express/lib/router/route.js:114:3)     at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)     at /node_modules/express/lib/router/index.js:284:15' \
  --input 'CODE_SNIPPET=// /src/user/service.js async function getUserProfile(req) {   const userId = req.user.id; // line 42   const user = await db.users.findById(userId);   return user.profile; }  module.exports = { getUserProfile };' \
  --model gpt-5.1 \
  --options '{"reasoningEffort":"low"}'
```