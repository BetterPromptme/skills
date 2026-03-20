# BetterPrompt Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![betterprompt.me](https://img.shields.io/badge/BetterPrompt.me-visit-purple)](https://betterprompt.me)

A public, open collection of AI prompt skills built and maintained by [BetterPrompt](https://betterprompt.me). Each skill is a self-contained SKILL.md file that tells an AI agent exactly how to run a specific prompt — what inputs to collect, which models to use, and how to call the BetterPrompt CLI.

This repo exists so you can **browse, read, and verify** every skill before you install it. No surprises — just markdown.

---

> **BetterPrompt CLI requires a premium subscription.**
> Use code **`GHSKILLS50`** at checkout for **50% off your first month**.

---

## What's in here

```
skills/
  <skill-slug>/
    SKILL.md        # The full skill definition
```

Every directory inside [`skills/`](./skills) is a single skill, named by its slug (e.g. `3d-cartoon-render`, `1000-word-seo-blog-writer`). Each `SKILL.md` contains:

- **What it does** — a plain-language description of the prompt
- **Inputs** — text inputs, image inputs, and their defaults
- **Models and options** — which modality and models the skill supports
- **How to run** — step-by-step instructions including an example CLI command

Skills are auto-generated and kept up to date — you don't need to worry about them going stale.

## Installing a skill

### Option A: BetterPrompt CLI

```bash
betterprompt install <skill-slug>
```

For example:

```bash
betterprompt install 3d-cartoon-render
```

### Option B: skills.sh

```bash
npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill <skill-slug>
```

For example:

```bash
npx skills add https://github.com/BetterPromptme/betterprompt/skills --skill 3d-cartoon-render
```

## How skills work

Every skill in this repo follows the exact same structure. A skill is split into two parts — **instruction** and **generation** — and they are completely separate:

1. **Instruction (the SKILL.md)** — This is what you install. It's a plain markdown file that tells your AI agent what inputs to collect from you (text, images) and how to call the BetterPrompt CLI. That's it. No executable code, no scripts, no hidden logic. Every SKILL.md is generated from a single shared [template](./template/SKILL.md) filled with skill-specific data (name, description, inputs, default model, etc.).

2. **Generation (the BetterPrompt CLI)** — The actual AI prompt execution happens remotely when your agent runs `betterprompt generate <skillVersionId>`. The skill file never contains the prompt itself — it just passes your inputs to BetterPrompt's servers, which handle model selection, prompt rendering, and generation.

This separation is what makes skills safe and easy to verify. The SKILL.md you install only does two things:

- Asks you for inputs (text values, images, model preferences)
- Runs a single CLI command: `betterprompt generate <id> --input key=value ...`

There's nothing else to audit. The generation is **fully isolated** on BetterPrompt's side, and the instruction is just structured markdown.

## What is BetterPrompt?

[BetterPrompt](https://betterprompt.me) is an AI prompt marketplace where creators publish ready-to-run prompt skills and earn income every time someone runs them. The prompt logic stays server-side — creators' intellectual property is protected, and users get high-quality results across models like ChatGPT, Claude, Gemini, and Grok without needing to write prompts themselves.

You pay per execution using credits, and creators earn a share of every run. Think of it as an app store for AI prompts.

## Verifying a skill

Every skill is plain markdown — no hidden code, no scripts. Before installing, you can:

1. **Browse on GitHub** — open any skill's `SKILL.md` directly in the [`skills/`](./skills) directory
2. **Read locally** — clone the repo and inspect any file
3. **Check the template** — every skill is generated from the same [template](./template/SKILL.md), so if you've read one, you understand them all
4. **Check the history** — every skill has its own commit, so you can see exactly when it was added or updated

## Need help?

Reach out to [skills-support@betterprompt.me](mailto:skills-support@betterprompt.me) — we're happy to help.

## License

[MIT](./LICENSE) — Copyright (c) 2026 BetterPrompt
