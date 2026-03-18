import { describe, it, expect } from "bun:test";

import type { InputMetadata } from "../types/input-metadata";
import { INPUT_BLOCK_TYPE } from "../types/input-type";
import {
  buildTextInputsTable,
  buildImageInputsTable,
  buildRequiredTextInputsList,
  buildOptionalTextInputsList,
  buildExampleCommand,
  buildSkillmd,
  buildMissingInputsMessage,
  formatOptionsJson,
  joinWithAnd,
  type BuildSkillmdParams,
} from "./build-skillmd";

// --- Fixtures ---

const textOnlyMeta: InputMetadata = {
  variables: {
    character_role: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The main character role",
      defaultValues: [],
    },
    story_theme: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The story theme",
      defaultValues: ["funny"],
    },
  },
  images: [],
};

const withImagesMeta: InputMetadata = {
  variables: {
    character_role: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The main character role",
      defaultValues: [],
    },
    story_theme: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The story theme",
      defaultValues: ["funny"],
    },
  },
  images: [{ description: "Char" }, { description: "Background" }],
};

const imageOnlyMeta: InputMetadata = {
  variables: {},
  images: [{ description: "Char" }, { description: "Background" }],
};

const singleImageMeta: InputMetadata = {
  variables: {
    prompt: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The prompt text",
      defaultValues: [],
    },
  },
  images: [{ description: "Reference photo" }],
};

const withSelectMeta: InputMetadata = {
  variables: {
    tone: {
      type: INPUT_BLOCK_TYPE.SELECT,
      description: "Choose tone",
      options: { formal: "Formal", casual: "Casual" },
    },
    content: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "The text content",
      defaultValues: [],
    },
  },
  images: [],
};

const spacesInDefaultMeta: InputMetadata = {
  variables: {
    greeting: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "A greeting message",
      defaultValues: ["hello world"],
    },
    name: {
      type: INPUT_BLOCK_TYPE.TEXT,
      description: "Your name",
      defaultValues: ["Alice"],
    },
  },
  images: [],
};

function makeParams(
  overrides: Partial<BuildSkillmdParams> = {}
): BuildSkillmdParams {
  return {
    name: "Test Skill",
    description: "A test skill",
    skillVersionId: "sv_abc123",
    whatItDoes: "This skill generates a short story.",
    inputMetadata: textOnlyMeta,
    modality: "text",
    defaultModel: "gpt-5-mini",
    defaultOptions: { temperature: 0.7 },
    ...overrides,
  };
}

// --- Tests ---

describe("buildTextInputsTable", () => {
  it("produces correct Required/Optional columns and Defaults for text-only variables", () => {
    const table = buildTextInputsTable(textOnlyMeta.variables);
    const lines = table.split("\n");

    // Header
    expect(lines[0]).toBe(
      "| Variable key | Required? | Description | Defaults |"
    );
    // Separator
    expect(lines[1]).toBe("| --- | ---: | --- | --- |");
    // character_role: no defaults → Required, Defaults = (none)
    expect(lines[2]).toContain("`character_role`");
    expect(lines[2]).toContain("Required");
    expect(lines[2]).toContain("The main character role");
    expect(lines[2]).toContain("(none)");
    // story_theme: has default → Optional, Defaults = `funny`
    expect(lines[3]).toContain("`story_theme`");
    expect(lines[3]).toContain("Optional");
    expect(lines[3]).toContain("The story theme");
    expect(lines[3]).toContain("`funny`");
  });

  it("lists select variable options in description and marks as Required", () => {
    const table = buildTextInputsTable(withSelectMeta.variables);
    const lines = table.split("\n");

    // tone: select → always Required, options listed
    const toneLine = lines[2];
    expect(toneLine).toContain("`tone`");
    expect(toneLine).toContain("Required");
    expect(toneLine).toContain("Allowed options: formal, casual");
    expect(toneLine).toContain("(none)");

    // content: text, no defaults → Required
    const contentLine = lines[3];
    expect(contentLine).toContain("`content`");
    expect(contentLine).toContain("Required");
  });
});

describe("buildImageInputsTable", () => {
  it("produces correct 1-indexed table with CLI flags", () => {
    const table = buildImageInputsTable(withImagesMeta.images);
    const lines = table.split("\n");

    expect(lines[0]).toBe(
      "| Index | Required | Description | Allowed CLI flags |"
    );
    expect(lines[1]).toBe("| ---: | ---: | --- | --- |");
    // Image 1
    expect(lines[2]).toContain("| 1 |");
    expect(lines[2]).toContain("Yes");
    expect(lines[2]).toContain("Char");
    expect(lines[2]).toContain("--image-input-url");
    expect(lines[2]).toContain("--image-input-base64");
    expect(lines[2]).toContain("--image-input-path");
    // Image 2
    expect(lines[3]).toContain("| 2 |");
    expect(lines[3]).toContain("Background");
  });
});

describe("buildRequiredTextInputsList", () => {
  it("lists only required variables", () => {
    const list = buildRequiredTextInputsList(textOnlyMeta.variables);
    expect(list).toContain("`character_role`");
    // story_theme has defaults, so it's optional → should NOT be in required list
    expect(list).not.toContain("`story_theme`");
  });
});

describe("buildOptionalTextInputsList", () => {
  it("lists optional variables with their default values", () => {
    const list = buildOptionalTextInputsList(textOnlyMeta.variables);
    // story_theme is optional with default "funny"
    expect(list).toContain("`story_theme`");
    expect(list).toContain("(default: `funny`)");
    // character_role is required → should NOT be in optional list
    expect(list).not.toContain("`character_role`");
  });
});

describe("buildExampleCommand", () => {
  it("produces valid CLI command with placeholders and defaults", () => {
    const cmd = buildExampleCommand(
      "sv_abc123",
      textOnlyMeta.variables,
      textOnlyMeta.images,
      "gpt-5-mini",
      { temperature: 0.7 }
    );

    expect(cmd).toContain("betterprompt generate sv_abc123");
    // character_role has no defaults → uses <value> placeholder
    expect(cmd).toContain("--input character_role=<value>");
    // story_theme has default → uses the default value
    expect(cmd).toContain("--input story_theme=funny");
    expect(cmd).toContain("--model gpt-5-mini");
    expect(cmd).toContain(`--options '{"temperature":0.7}'`);
    // No images → no image flags
    expect(cmd).not.toContain("--image-input");
  });

  it("includes image flags when images are present", () => {
    const cmd = buildExampleCommand(
      "sv_abc123",
      withImagesMeta.variables,
      withImagesMeta.images,
      "gpt-5-mini",
      { temperature: 0.7 }
    );

    // Alternates between url (even index) and path (odd index)
    expect(cmd).toContain("--image-input-url");
    expect(cmd).toContain("--image-input-path");
  });

  it("quotes values that contain spaces", () => {
    const cmd = buildExampleCommand(
      "sv_abc123",
      spacesInDefaultMeta.variables,
      [],
      "gpt-5-mini",
      {}
    );

    // "hello world" has a space → should be quoted
    expect(cmd).toContain("--input 'greeting=hello world'");
    // "Alice" has no space → should NOT be quoted
    expect(cmd).toContain("--input name=Alice");
    expect(cmd).not.toContain("'name=Alice'");
  });
});

describe("formatOptionsJson", () => {
  it("formats options as valid JSON", () => {
    expect(formatOptionsJson({ aspectRatio: "1:1" })).toBe(
      '{"aspectRatio":"1:1"}'
    );
  });

  it("handles multiple keys", () => {
    expect(formatOptionsJson({ a: 1, b: "two" })).toBe('{"a":1,"b":"two"}');
  });

  it("handles empty options", () => {
    expect(formatOptionsJson({})).toBe("{}");
  });
});

describe("joinWithAnd", () => {
  it("returns empty string for empty array", () => {
    expect(joinWithAnd([])).toBe("");
  });

  it("returns single item as-is", () => {
    expect(joinWithAnd(["image 1 (Char)"])).toBe("image 1 (Char)");
  });

  it("joins two items with 'and'", () => {
    expect(joinWithAnd(["image 1 (Char)", "image 2 (Background)"])).toBe(
      "image 1 (Char) and image 2 (Background)"
    );
  });

  it("joins three+ items with commas and 'and'", () => {
    expect(joinWithAnd(["A", "B", "C"])).toBe("A, B, and C");
  });
});

describe("buildMissingInputsMessage", () => {
  it("returns empty string when no required text inputs and no images", () => {
    expect(buildMissingInputsMessage(false, false, "")).toBe("");
  });

  it("uses singular 'is' for text-only case", () => {
    const msg = buildMissingInputsMessage(true, false, "");
    expect(msg).toContain("any required text input is missing");
    expect(msg).not.toContain("images");
  });

  it("uses 'are' for images-only case", () => {
    const msg = buildMissingInputsMessage(false, true, "Char and Background");
    expect(msg).toContain("the required images are missing");
    expect(msg).toContain(
      'Please provide images in this order: Char and Background'
    );
    expect(msg).not.toContain("text input");
  });

  it("combines text and images with 'are'", () => {
    const msg = buildMissingInputsMessage(true, true, "Char and Background");
    expect(msg).toContain(
      "any required text input or the required images are missing"
    );
    expect(msg).toContain("Char and Background");
  });
});

describe("buildSkillmd", () => {
  it("text-only: output has textInputs section but NO imageInputs section", () => {
    const result = buildSkillmd(makeParams());

    expect(result).toContain("### textInputs");
    expect(result).not.toContain("### imageInputs");
    expect(result).not.toContain("image-input-url");
  });

  it("with images: output has imageInputs section with correct image count", () => {
    const result = buildSkillmd(
      makeParams({ inputMetadata: withImagesMeta })
    );

    expect(result).toContain("### imageInputs");
    expect(result).toContain("exactly 2 images");
    expect(result).toContain("exactly 2 image flags");
    expect(result).toContain("image 1 (Char) and image 2 (Background)");
  });

  it("single image uses singular grammar", () => {
    const result = buildSkillmd(
      makeParams({ inputMetadata: singleImageMeta })
    );

    expect(result).toContain("exactly 1 image**");
    expect(result).toContain("exactly 1 image flag**");
    expect(result).not.toContain("exactly 1 images");
  });

  it("image-only: no textInputs section and no empty bullet lists", () => {
    const result = buildSkillmd(
      makeParams({ inputMetadata: imageOnlyMeta })
    );

    expect(result).not.toContain("### textInputs");
    expect(result).toContain("### imageInputs");
    expect(result).not.toContain("Required text inputs:");
    expect(result).not.toContain("Optional text inputs");
    // Missing message should reference images only, not text
    expect(result).toContain("the required images are missing");
    expect(result).not.toContain("text input is missing");
    expect(result).not.toContain("text input or");
    // Missing message uses indexed image descriptions
    expect(result).toContain("image 1 (Char) and image 2 (Background)");
  });

  it("uses valid JSON for defaultOptionsJson", () => {
    const result = buildSkillmd(
      makeParams({ defaultOptions: { aspectRatio: "1:1" } })
    );

    expect(result).toContain('{"aspectRatio":"1:1"}');
  });

  it("full output structure matches expected section headings in order", () => {
    const result = buildSkillmd(
      makeParams({ inputMetadata: withImagesMeta })
    );

    const expectedHeadings = [
      "---", // frontmatter start
      "## What it does",
      "## Inputs",
      "### textInputs",
      "### imageInputs",
      "### Models and options",
      "## How to run",
      "### Step 1: Collect inputs",
      "### Step 2: Run via BetterPrompt CLI",
    ];

    let lastIndex = -1;
    for (const heading of expectedHeadings) {
      const index = result.indexOf(heading, lastIndex + 1);
      expect(index).toBeGreaterThan(lastIndex);
      lastIndex = index;
    }
  });

  it("includes frontmatter with correct values", () => {
    const result = buildSkillmd(makeParams());

    expect(result).toContain("name: Test Skill");
    expect(result).toContain("description: A test skill");
    expect(result).toContain("skillVersionId: sv_abc123");
  });

  it("text-only output structure has no imageInputs heading", () => {
    const result = buildSkillmd(makeParams());

    const expectedHeadings = [
      "---",
      "## What it does",
      "## Inputs",
      "### textInputs",
      "### Models and options",
      "## How to run",
      "### Step 1: Collect inputs",
      "### Step 2: Run via BetterPrompt CLI",
    ];

    let lastIndex = -1;
    for (const heading of expectedHeadings) {
      const index = result.indexOf(heading, lastIndex + 1);
      expect(index).toBeGreaterThan(lastIndex);
      lastIndex = index;
    }

    // imageInputs should NOT appear
    expect(result).not.toContain("### imageInputs");
  });
});
