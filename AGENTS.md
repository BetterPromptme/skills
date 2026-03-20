# AGENTS.md

This file provides guidance to Agents when working with code in this repository.

## Overview

This repo contains **BetterPrompt skills** — auto-generated SKILL.md files. A GitHub Actions cronjob (every 15 min) fetches pending skill data from the backend API, renders each skill's markdown using Handlebars, commits each individually, pushes, and writes the commit-pinned `skillmdUrl` back to the backend.

The pipeline supports **two environments** (staging and production) with separate backends, secrets, and output directories.

**Do not hand-edit files in `skills/` or `.testing/`** — they are overwritten on every build.

## Architecture

- `template/SKILL.md` — Handlebars template with `{{{variable}}}` placeholders and `{{#if}}`/`{{#each}}` blocks. Single source of truth for the generated skill format.
- `skills/` — Output directory for **production** SKILL.md files (`skills/<name>/SKILL.md`). Treated as build artifacts.
- `.testing/staging/skills/` — Output directory for **staging** SKILL.md files (`.testing/staging/skills/<name>/SKILL.md`). Kept separate to avoid slug collisions with production.
- `builder/` — TypeScript/Bun project containing the build pipeline (`index.ts`) and the skillmd rendering logic (`skillmd/build-skillmd.ts`).
- `.github/workflows/generate-skillmd-staging.yml` — GitHub Actions workflow for **staging** (runs every 5 min on `self-hosted` runner).
- `.github/workflows/generate-skillmd-production.yml` — GitHub Actions workflow for **production** (runs every 15 min on `ubuntu-latest`).

## Multi-Environment Setup

### Directory layout

```
skills/<name>/SKILL.md                        # production
.testing/staging/skills/<name>/SKILL.md       # staging
```

Staging uses a dot-prefixed `.testing/` directory to stay hidden by convention. The structure is extensible for future environments (e.g., `.testing/dev/skills/`).

### Workflow scheduling

Each environment has its own workflow file with an independent cron schedule. Each environment uses its own concurrency group (`skillmd-gen-staging`, `skillmd-gen-production`) to prevent overlapping runs within the same environment without blocking the other. The staging job has a 5-minute timeout to prevent hanging when the self-hosted runner is unavailable. Individual workflows can be disabled from the GitHub Actions UI.

### GitHub Environments

Secrets (`BACKEND_URL`, `INTERNAL_API_SECRET`) are scoped per GitHub Environment (`staging`, `production`), not at the repo level.

### Commit tagging

- Production commits: `feat(skills): generate <name>`
- Staging commits: `feat(skills): [staging] generate <name>`

## Pipeline Flow

1. `builder/index.ts` fetches `GET {BACKEND_URL}/api/internal/skillmd/pending-params` (skills with `whatItDoes` but no `skillmdUrl`)
2. For each skill: renders SKILL.md via `buildSkillmd()`, writes to the environment-specific output directory, commits individually
3. Pushes all commits to `origin main`
4. POSTs batch of `{ skillVersionId, skillmdUrl, skillmd }` to `POST {BACKEND_URL}/api/internal/skillmd/write-urls`

## Build Commands

```bash
# Install builder dependencies
cd builder && bun install

# Run the builder pipeline (ENVIRONMENT required)
cd builder && ENVIRONMENT=production bun run index.ts
cd builder && ENVIRONMENT=staging bun run index.ts

# Run tests
cd builder && bun test

# Type-check
cd builder && npx tsc --noEmit
```

## Environment Variables

- `BACKEND_URL` — Base URL of the backend API
- `INTERNAL_API_SECRET` — Authorization header value for internal API calls
- `ENVIRONMENT` — `"production"` or `"staging"`. Determines output directory and URL prefix.

## Key Constraints

- Runtime is **Bun**, not Node.js
- Template changes affect every generated skill — verify the template renders correctly before modifying
- Each skill gets its own commit so `skillmdUrl` can be pinned to a specific SHA
- Idempotent: if a skill's SKILL.md hasn't changed, the commit is skipped
