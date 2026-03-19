import { $ } from "bun";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { buildSkillmd, type BuildSkillmdParams } from "./skillmd/build-skillmd";

const BACKEND_URL = process.env.BACKEND_URL;
const INTERNAL_API_SECRET = process.env.INTERNAL_API_SECRET;
const ENVIRONMENT = process.env.ENVIRONMENT;

if (!BACKEND_URL) {
  console.error("BACKEND_URL env var is required");
  process.exit(1);
}
if (!INTERNAL_API_SECRET) {
  console.error("INTERNAL_API_SECRET env var is required");
  process.exit(1);
}
if (!ENVIRONMENT || !["production", "staging"].includes(ENVIRONMENT)) {
  console.error("ENVIRONMENT env var must be 'production' or 'staging'");
  process.exit(1);
}

const REPO_ROOT = join(import.meta.dir, "..");
const SKILLS_DIR = ENVIRONMENT === "production"
  ? join(REPO_ROOT, "skills")
  : join(REPO_ROOT, ".testing", ENVIRONMENT, "skills");
const REPO = "BetterPromptme/skills";

// Configure git for CI
await $`git config user.name "skillmd-bot"`;
await $`git config user.email "skillmd-bot@betterprompt.me"`;

// Detect current branch
const BRANCH = (await $`git rev-parse --abbrev-ref HEAD`.text()).trim();

// Pull latest to avoid push conflicts
const pull = await $`git pull --rebase origin ${BRANCH}`.quiet().nothrow();
if (pull.exitCode !== 0) {
  await $`git rebase --abort`.nothrow();
  console.error("Failed to pull latest, aborting");
  process.exit(1);
}

// Fetch pending skills from backend
console.log("Fetching pending skills...");
const response = await fetch(`${BACKEND_URL}/api/internal/skillmd/pending-params`, {
  headers: { authorization: INTERNAL_API_SECRET },
});

if (!response.ok) {
  console.error(`Failed to fetch pending params: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const { data: { rows } } = (await response.json()) as { data: { rows: BuildSkillmdParams[] } };
console.log(`Found ${rows.length} pending skills`);

if (rows.length === 0) {
  console.log("Nothing to do");
  process.exit(0);
}

const results: { skillVersionId: string; skillmdUrl: string }[] = [];

for (const skill of rows) {
  try {
    const skillmd = buildSkillmd(skill);
    const skillDir = join(SKILLS_DIR, skill.name);
    const skillPath = join(skillDir, "SKILL.md");

    await mkdir(skillDir, { recursive: true });
    await Bun.write(skillPath, skillmd);

    // Stage the file
    await $`git add ${skillPath}`;

    // Check if there are staged changes (exit 0 = no changes)
    const diff = await $`git diff --cached --quiet`.nothrow();
    if (diff.exitCode === 0) {
      console.log(`No changes for ${skill.name}, skipping`);
      continue;
    }

    // Commit
    const envTag = ENVIRONMENT === "production" ? "" : `[${ENVIRONMENT}] `;
    await $`git commit -m ${`feat(skills): ${envTag}generate ${skill.name}`}`;

    // Get commit SHA
    const sha = (await $`git rev-parse HEAD`.text()).trim();

    // Build raw GitHub URL pinned to this commit
    const encodedName = encodeURIComponent(skill.name);
    const pathPrefix = ENVIRONMENT === "production"
      ? "skills"
      : `.testing/${ENVIRONMENT}/skills`;
    const skillmdUrl = `https://raw.githubusercontent.com/${REPO}/${sha}/${pathPrefix}/${encodedName}/SKILL.md`;

    results.push({
      skillVersionId: skill.skillVersionId,
      skillmdUrl,
    });

    console.log(`Committed ${skill.name} (${sha.slice(0, 7)})`);
  } catch (error) {
    console.error(`Failed to process skill ${skill.name}:`, error);
    await $`git reset HEAD`.nothrow();
    continue;
  }
}

if (results.length === 0) {
  console.log("No new commits to push");
  process.exit(0);
}

// Pull again before push in case remote advanced
const prePush = await $`git pull --rebase origin ${BRANCH}`.quiet().nothrow();
if (prePush.exitCode !== 0) {
  await $`git rebase --abort`.nothrow();
  console.error("Failed to rebase before push, aborting");
  process.exit(1);
}

// Push all commits
console.log(`Pushing ${results.length} commits...`);
await $`git push origin ${BRANCH}`;

// Write URLs back to backend
console.log("Writing URLs to backend...");
const writeResponse = await fetch(`${BACKEND_URL}/api/internal/skillmd/write-urls`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: INTERNAL_API_SECRET,
  },
  body: JSON.stringify({ urls: results }),
});

if (!writeResponse.ok) {
  console.error(`Failed to write URLs: ${writeResponse.status} ${writeResponse.statusText}`);
  process.exit(1);
}

const writeResult = await writeResponse.json();
console.log(`Done! Updated ${(writeResult as { updatedCount: number }).updatedCount} skills`);
