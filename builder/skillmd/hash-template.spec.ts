import { describe, it, expect } from "bun:test";
import { hashTemplate } from "./hash-template";

describe("hashTemplate", () => {
  it("returns a 64-character hex string", () => {
    const hash = hashTemplate();
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it("returns the same value on repeated calls", () => {
    expect(hashTemplate()).toBe(hashTemplate());
  });
});
