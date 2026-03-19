# template/ context

## Folder summary

Contains the Handlebars template used to generate SKILL.md files for each skill.

## File summaries

- `SKILL.md` — Handlebars template with `{{{variable}}}` placeholders and `{{#if}}`/`{{#each}}` blocks. Single source of truth for the generated skill format. Compiled by `builder/skillmd/build-skillmd.ts`.

## Key patterns

- **Do not hand-edit generated output** — only edit this template. All generated `SKILL.md` files in `skills/` and `.testing/` are built from this template.
- Uses triple-stash `{{{var}}}` for unescaped HTML/markdown output and double-stash `{{var}}` for escaped values.
