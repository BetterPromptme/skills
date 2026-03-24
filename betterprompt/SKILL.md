---
name: betterprompt
description: Discover, install, and run reusable AI prompt skills from the BetterPrompt registry via the CLI (betterprompt / bp). Use when a user needs to find a prompt skill, generate AI output (text, images, video), or manage their skill library. Covers installation, auth, skill discovery, generation, and output review for OpenClaw and Claude Code agents.
---

# BetterPrompt Skill

This skill uses the open-source BetterPrompt CLI ([github.com/BetterPromptme/betterprompt](https://github.com/BetterPromptme/betterprompt)) to:

- Generate AI output (text, images, video)
- Install and manage BetterPrompt skills
- Search and discover BetterPrompt skills

Both binary names (`betterprompt` / `bp`) work interchangeably; prefer `betterprompt` over `bp`. Supports OpenClaw and Claude Code agents.

## Installation

```sh
npm install -g betterprompt@latest
# or
bun install -g betterprompt@latest
# or
yarn global add betterprompt@latest
# or
pnpm add -g betterprompt@latest
```

```sh
# Binary release (macOS / Linux, no Node.js required)
curl -fsSL https://raw.githubusercontent.com/BetterPromptme/betterprompt/main/install.sh | bash
```

## Authentication

Authenticate via browser:

```sh
betterprompt login
```

## Skill Discovery

```sh
betterprompt skill search "<query>"
betterprompt skill info <skill-slug>
```

## Output Generation

Run a skill to generate output:

```sh
betterprompt generate <skillVersionId> [input flags] [--model <model>] [--options <json>] [--json]
```

Input methods (use the one that matches the skill's input contract):

```sh
# Key-value pairs (repeatable)
betterprompt generate <skillVersionId> --input key=value --input key2=value2

# Image via URL
betterprompt generate <skillVersionId> --image-input-url <url>

# Image via base64
betterprompt generate <skillVersionId> --image-input-base64 <base64string>

# JSON payload (all inputs as a single JSON object)
betterprompt generate <skillVersionId> --input-payload '{"key": "value"}'

# Stdin pipe
echo "input text" | betterprompt generate <skillVersionId> --stdin
```

Flags:

```sh
--model <model>       override the default model for this skill
--options <json>      pass provider-specific model options as JSON
--json                output structured JSON (includes run-id, status, outputs)
```

The `--json` response includes a `runId` field used to retrieve outputs later.

## Output Review

Retrieve outputs for a specific run:

```sh
betterprompt outputs <run-id>
```

List past outputs:

```sh
betterprompt outputs list
```

Output types:

| Type  | Value   |
| ----- | ------- |
| TEXT  | "text"  |
| IMAGE | "image" |
| ERROR | "error" |
| VIDEO | "video" |

## Skill Management

```sh
betterprompt skill install <skill-slug>
betterprompt skill uninstall <skill-slug>
betterprompt skill list
betterprompt skill update <skill-slug>
```

## Global Flags

These flags work on most commands:

```sh
--project       scope to the current project (vs global)
--global        scope to global install
--dir <path>    use an explicit working directory
--registry <url> override API registry endpoint
--json          structured JSON output (machine-readable)
--quiet         reduce non-essential output
--verbose       enable verbose output
--no-color      disable ANSI colors
--yes           answer yes to all confirmations
-h, --help      show help for any command
-V, --version   show CLI version
```

## Resources

Fetch available models and their supported options (e.g., aspect ratio, resolution, reasoning effort):

```sh
betterprompt resources --models-only
```

## Agent Instructions

### Execution Pipeline

Run these steps in order and stop when the user's goal is satisfied:

1. **Search** — `betterprompt skill search ...`
2. **Inspect** — `betterprompt skill info <slug> --json`
3. **Fetch resources** — `betterprompt resources --models-only --json`
4. **Validate** from `skillmd`
5. **Present execution choices**:

- required inputs in the skill.md
- default model
- default model's options
- other supported models

6. **Execute** only after required inputs are present

Do not skip any steps. If any step fails due to transient error, retry once.

If the user only wants discovery (e.g. "search prompts", "show me skills"), stop after Search and return immediately. If a later step is blocked (missing input, API failure, user pause), return the best available result from completed steps without waiting for the full pipeline.

### Skill Selection Rubric

When multiple skills match, prefer higher score on:

1. Intent match to user request
2. Input contract clarity in skillmd
3. Output predictability/repeatability
4. Fewer ambiguous runtime options

If tied, pick the skill with clearer skillmd run instructions.

### Failure and Timeout Handling

- Show key error directly; provide one corrective action
- Retry once if safe and likely to succeed
- If timeout returns a `runId`, report it and offer `betterprompt outputs <run-id> --sync` as follow-up
- If blocked by CLI version, upgrade CLI then rerun full pipeline

### OpenClaw Instructions

#### Channel Display Rules

All content returned to users must render natively in their channel platform. Never send raw URLs, raw JSON, or unformatted dumps. The rules below apply to every content type the agent presents: search results, skill details, generation outputs, and resources.

##### Platform-Specific Image Rendering

Never send an image URL as plain text — always use the platform's native image mechanism so the image displays inline in the chat. The URL must be publicly accessible over HTTPS.

| Platform            | Method                              | Key Details                                                                          |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| **Discord**         | Embed with `image.url`              | Bare URLs may not unfurl reliably; always use embeds                                 |
| **Slack**           | Block Kit `image` block             | `image_url` + `alt_text` (required); URL unfurling depends on workspace settings     |
| **Telegram**        | `sendPhoto` Bot API method          | `sendMessage` with a URL does not render images; URL in `photo` param                |
| **Microsoft Teams** | Adaptive Card `Image` element       | `"type": "Image", "url": "…"`; bare URLs render as links, not images; HTTPS required |
| **WhatsApp**        | Messages API with `"type": "image"` | `image.link`; PNG/JPG only, max 5 MB, valid SSL + Content-Type headers required      |

- If the URL is behind auth or ephemeral, download the image first and upload it as a direct attachment
- If multiple image URLs are returned, send each as a separate image message

##### Platform-Specific Text & Rich Content

| Platform            | Formatting                                                | Lists / Tables                                                                      | Code Blocks                                |
| ------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------ |
| **Discord**         | Markdown (bold, italic, headers, links)                   | Numbered/bulleted lists; no native tables — use code block alignment                | ` ```lang ` fenced blocks                  |
| **Slack**           | mrkdwn (`*bold*`, `_italic_`, `<url\|text>`)              | Bulleted with `•`; numbered manually; no native tables — use Section blocks or code | ` ``` ` blocks (no language hint)          |
| **Telegram**        | MarkdownV2 or HTML (`<b>`, `<i>`, `<a>`, `<code>`)        | Manual numbered/bulleted; no native tables — use `<pre>` aligned columns            | `<pre>` or ` ``` `                         |
| **Microsoft Teams** | Subset of HTML + Adaptive Cards                           | Adaptive Card `FactSet` for key-value; `TextBlock` with markdown for lists          | `<pre><code>` or Adaptive Card `CodeBlock` |
| **WhatsApp**        | Limited: `*bold*`, `_italic_`, `~strike~`, ` ```mono``` ` | Manual numbered/bulleted only; no rich formatting for tables                        | ` ``` ` blocks (no language hint)          |

##### Search Results (item list)

Present each skill as **one message** — do not split a single skill across multiple messages:

- Number items (`1.`, `2.`, …) with `<title>` + `<short description>` in the same message
- If sample output is an image URL → render inline using platform image method (see table above) with numbered caption
- If sample output is text → quote block (`> <sample text>` or platform equivalent)
- If no sample output → include "No sample output available." in the item message

##### Skill Details (info) / Execution Choices

When presenting skill info from `betterprompt skill info`:

- **Title + description** as a header or bold line
- **Required inputs**
  - List of text inputs: name, description, is required. E.g:

    ```markdown
    Inputs:

    - story_theme (required): The story theme
    - character_role (required): The character role
    ```

  - List of image inputs: name, description, is required. E.g:

    ```markdown
    ** Exactly 1 ** image(s)

    - image 1 (required): The character reference image
    ```

- **Default model and their available options** E.g:

  ```markdown
  - Default model: gemini-3.1-flash-image-preview (default)
  - Available options: aspectRatio: 1:1 (default) / 16:9 / 9:16, resolution: 1024x1024 / 2048x2048
  ```

- **Other supported models** as a model list. E.g: gpt-image-1, dall-e-3, ...

- **Sample output** rendered inline (image or quoted text per platform rules)
- Keep it to one message; use the platform's rich formatting (embeds, cards, blocks) to structure sections visually

##### Generation Output

After a successful run, return exactly:

1. **Exact result** — same content BetterPrompt returned, formatted for readability only
2. **One next step** — exactly one actionable suggestion

Fidelity rules:

- Text: light formatting only (line breaks, short intro); preserve all content verbatim
- Images: render inline per platform image rules above
- Never invent, summarize away, or alter output content
- Do not include skill IDs, prompt version IDs, raw JSON, or internal logs unless explicitly asked

##### Resources

When presenting results from `betterprompt resources --models-only`:

- **Models list**: formatted as a numbered list or compact table showing model name and provider
- **Resource details**: key-value pairs using the platform's native structured format (Discord embed fields, Slack `section` blocks, Teams `FactSet`, Telegram bold key + value)
- Keep it scannable — one message, no walls of text