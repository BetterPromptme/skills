import crypto from "node:crypto";
import template from "../../template/SKILL.md" with { type: "text" };

export function hashTemplate(): string {
  return crypto.createHash("sha256").update(template).digest("hex");
}
