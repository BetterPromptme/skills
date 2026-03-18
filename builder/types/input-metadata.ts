import { INPUT_BLOCK_TYPE } from "./input-type";

export type TextVariableInputMetadata = {
  [key: string]: unknown;
  type: INPUT_BLOCK_TYPE.TEXT;
  description?: string;
  allowEmpty?: boolean;
  defaultValues?: string[];
};

export type SelectVariableInputMetadata = {
  [key: string]: unknown;
  type: INPUT_BLOCK_TYPE.SELECT;
  description?: string;
  /**
   * Is the select input multiple
   *
   * If `multiple` is `true`, default separator is `, `
   */
  multiple?:
    | {
        /**
         * The maximum number of options that can be selected
         */
        max?: number;
        /**
         * The minimum number of options that must be selected
         */
        min?: number;
      }
    | true;
  options: {
    [optionName: string]: string;
  };
};

export type VariableInputMetadata =
  | TextVariableInputMetadata
  | SelectVariableInputMetadata;

export type ImageInputMetadata = {
  [key: string]: unknown;
  description?: string;
};

export type InputMetadata = {
  variables: {
    [name: string]: VariableInputMetadata;
  };
  images: ImageInputMetadata[];
};
