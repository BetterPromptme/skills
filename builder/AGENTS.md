# builder/ context

## Folder summary

TypeScript/Bun project that fetches pending skills from the backend API, renders SKILL.md files using Handlebars, commits each individually, pushes to GitHub, and writes commit-pinned URLs back to the backend.

## File summaries

- `index.ts` — Main pipeline entry point. Fetches pending skills → renders → commits → pushes → writes URLs. Uses `Bun.$` for shell commands. Requires `BACKEND_URL`, `INTERNAL_API_SECRET`, and `ENVIRONMENT` env vars. Routes output to `skills/` (production) or `.testing/<env>/skills/` (staging) based on `ENVIRONMENT`.
- `skillmd/build-skillmd.ts` — Core rendering logic. Exports `buildSkillmd(params)` which compiles `SKILL_TEMPLATE.md` via Handlebars with computed template variables (text inputs table, image inputs table, example command, etc.).
- `skillmd/build-skillmd.spec.ts` — Tests for all `buildSkillmd` helpers and the full render function.
- `types/input-type.ts` — `INPUT_BLOCK_TYPE` enum (TEXT, IMAGE, SELECT). Copied from backend core.
- `types/input-metadata.ts` — Type definitions for input metadata (text, select, image inputs). Copied from backend core.
- `SKILL_TEMPLATE.md.d.ts` — TypeScript module declaration allowing `.md` imports as string.
- `package.json` — Bun project config. Dependencies: `handlebars`.

## Key patterns

- Imports `SKILL_TEMPLATE.md` from repo root using `with { type: "text" }` (Bun text import).
- Types in `types/` are local copies of backend core types to avoid cross-repo import issues.
- Each skill is committed individually to get a unique SHA for the `skillmdUrl`.
- If `git diff --cached --quiet` shows no changes after staging, the skill is skipped (idempotency).
- `ENVIRONMENT` env var (`"production"` | `"staging"`) controls output directory and URL path prefix. Non-production commits are tagged with `[<env>]` in the commit message.
