import Handlebars from "handlebars";

import type {
  ImageInputMetadata,
  InputMetadata,
  SelectVariableInputMetadata,
  TextVariableInputMetadata,
  VariableInputMetadata,
} from "../types/input-metadata";
import { INPUT_BLOCK_TYPE } from "../types/input-type";
import template from "../../template/SKILL.md" with { type: "text" };

Handlebars.registerHelper("pluralize", function (count, singular, plural) {
  return count === 1 ? singular : plural;
});

export interface BuildSkillmdParams {
  name: string;
  /**
   * @deprecated Use whatItDoes instead
   */
  description: string;
  skillVersionId: string;
  whatItDoes: string;
  inputMetadata: InputMetadata;
  modality: string;
  defaultModel: string;
  defaultOptions: Record<string, unknown>;
}

function isTextVariable(
  v: VariableInputMetadata
): v is TextVariableInputMetadata {
  return v.type === INPUT_BLOCK_TYPE.TEXT;
}

function isSelectVariable(
  v: VariableInputMetadata
): v is SelectVariableInputMetadata {
  return v.type === INPUT_BLOCK_TYPE.SELECT;
}

function isRequired(v: VariableInputMetadata): boolean {
  if (isSelectVariable(v)) return true;
  return !v.defaultValues || v.defaultValues.length === 0;
}

function escapeTableCell(value: string): string {
  return value.replace(/\|/g, "&#124;").replace(/\r?\n/g, " ");
}

export function buildTextInputsTable(
  variables: Record<string, VariableInputMetadata>
): string {
  const header = "| Variable key | Required? | Description | Defaults |";
  const separator = "| --- | ---: | --- | --- |";
  const rows = Object.entries(variables).map(([key, v]) => {
    const required = isRequired(v) ? "Required" : "Optional";
    let description = v.description ?? "";
    if (isSelectVariable(v)) {
      const optionNames = Object.keys(v.options);
      description +=
        (description ? " " : "") +
        `Allowed options: ${optionNames.join(", ")}`;
    }
    let defaults = "(none)";
    if (isTextVariable(v) && v.defaultValues && v.defaultValues.length > 0) {
      defaults = `\`${v.defaultValues[0]}\``;
    }
    return `| \`${key}\` | ${required} | ${escapeTableCell(description)} | ${defaults} |`;
  });
  return [header, separator, ...rows].join("\n");
}

export function buildImageInputsTable(
  images: ImageInputMetadata[]
): string {
  const header = "| Index | Required | Description | Allowed CLI flags |";
  const separator = "| ---: | ---: | --- | --- |";
  const cliFlags =
    "`--image-input-url <url>` or `--image-input-path <path>`";
  const rows = images.map((img, i) => {
    return `| ${i + 1} | Yes | ${escapeTableCell(img.description ?? "")} | ${cliFlags} |`;
  });
  return [header, separator, ...rows].join("\n");
}

export function buildRequiredTextInputsList(
  variables: Record<string, VariableInputMetadata>
): string {
  return Object.entries(variables)
    .filter(([, v]) => isRequired(v))
    .map(([key]) => `  - \`${key}\``)
    .join("\n");
}

export function buildOptionalTextInputsList(
  variables: Record<string, VariableInputMetadata>
): string {
  return Object.entries(variables)
    .filter(([, v]) => !isRequired(v))
    .map(([key, v]) => {
      const defaultVal =
        isTextVariable(v) && v.defaultValues?.[0] ? v.defaultValues[0] : "";
      return `  - \`${key}\` (default: \`${defaultVal}\`)`;
    })
    .join("\n");
}

export function sanitizeOptions(
  options: Record<string, unknown>
): Record<string, unknown> {
  const { image: _, ...rest } = options;
  return rest;
}

export function formatOptionsJson(
  options: Record<string, unknown>
): string {
  return JSON.stringify(sanitizeOptions(options));
}

export function joinWithAnd(items: string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function buildMissingInputsMessage(
  hasRequiredTextInputs: boolean,
  hasImages: boolean,
  imageOrderDescription: string
): string {
  if (!hasRequiredTextInputs && !hasImages) return "";

  let subject: string;
  if (hasRequiredTextInputs && hasImages) {
    subject = "any required text input or the required images are";
  } else if (hasRequiredTextInputs) {
    subject = "any required text input is";
  } else {
    subject = "the required images are";
  }

  let msg = `If ${subject} missing, **ask the human for what's missing**. Do not assume or fabricate values.`;
  if (hasImages) {
    msg += ` Tell the human: **"Please provide images in this order: ${imageOrderDescription}"**.`;
  }
  return msg;
}

export function buildExampleCommand(
  name: string,
  variables: Record<string, VariableInputMetadata>,
  images: ImageInputMetadata[],
  defaultModel: string,
  defaultOptions: Record<string, unknown>
): string {
  const parts: string[] = [`betterprompt generate ${name}`];

  for (const [key, v] of Object.entries(variables)) {
    if (isTextVariable(v) && v.defaultValues && v.defaultValues.length > 0) {
      const val = v.defaultValues[0]!;
      const kvPair = `${key}=${val}`;
      parts.push(
        `  --input ${val.includes(" ") ? `'${kvPair}'` : kvPair}`
      );
    } else if (isSelectVariable(v)) {
      const firstOption = Object.keys(v.options)[0] ?? "<value>";
      const kvPair = `${key}=${firstOption}`;
      parts.push(
        `  --input ${firstOption.includes(" ") ? `'${kvPair}'` : kvPair}`
      );
    } else {
      parts.push(`  --input ${key}=<value>`);
    }
  }

  for (let i = 0; i < images.length; i++) {
    if (i % 2 === 0) {
      parts.push(
        `  --image-input-url https://example.com/image${i + 1}.png`
      );
    } else {
      parts.push(`  --image-input-path /path/to/image${i + 1}.png`);
    }
  }

  parts.push(`  --model ${defaultModel}`);
  parts.push(`  --options '${formatOptionsJson(defaultOptions)}'`);

  return parts.join(" \\\n");
}

export function buildSkillmd(params: BuildSkillmdParams): string {
  const {
    name,
    description,
    skillVersionId,
    whatItDoes,
    inputMetadata,
    modality,
    defaultModel,
    defaultOptions,
  } = params;

  const hasImages = inputMetadata.images.length > 0;
  const imageCount = inputMetadata.images.length;
  const hasTextInputs = Object.keys(inputMetadata.variables).length > 0;

  const textInputsTable = hasTextInputs
    ? buildTextInputsTable(inputMetadata.variables)
    : "";
  const imageInputsTable = hasImages
    ? buildImageInputsTable(inputMetadata.images)
    : "";
  const requiredTextInputsList = buildRequiredTextInputsList(
    inputMetadata.variables
  );
  const optionalTextInputsList = buildOptionalTextInputsList(
    inputMetadata.variables
  );
  const hasRequiredTextInputs = requiredTextInputsList.length > 0;
  const hasOptionalTextInputs = optionalTextInputsList.length > 0;
  const exampleCommand = buildExampleCommand(
    name,
    inputMetadata.variables,
    inputMetadata.images,
    defaultModel,
    defaultOptions
  );
  const defaultOptionsJson = formatOptionsJson(defaultOptions);

  const imageOrderDescription = hasImages
    ? joinWithAnd(
        inputMetadata.images.map(
          (img, i) =>
            `image ${i + 1} (${img.description ?? `image ${i + 1}`})`
        )
      )
    : "";

  const missingInputsMessage = buildMissingInputsMessage(
    hasRequiredTextInputs,
    hasImages,
    imageOrderDescription
  );

  const compiled = Handlebars.compile(template);
  return compiled({
    name,
    // Decisions: use whatItDoes instead of description
    description: whatItDoes,
    skillVersionId,
    whatItDoes,
    hasTextInputs,
    textInputsTable,
    hasImages,
    imageCount,
    imageInputsTable,
    imageOrderDescription,
    modality,
    defaultModel,
    defaultOptionsJson,
    hasRequiredTextInputs,
    requiredTextInputsList,
    hasOptionalTextInputs,
    optionalTextInputsList,
    missingInputsMessage,
    exampleCommand,
  });
}
