/**
 * Compiler output and rendering instruction types.
 */

import type { BoundingBox, TypographyStyle } from "./schema.ts";

export type RenderInstructionType =
  "text" | "comb_cells" | "mark" | "split_amount";

export interface BaseRenderInstruction {
  fieldId: string;
  pageNumber: number;
  type: RenderInstructionType;
  styling: TypographyStyle;
  rawBounds: BoundingBox;
}

export interface TextRenderInstruction extends BaseRenderInstruction {
  type: "text";
  text: string;
  bounds: BoundingBox;
  calculatedFontSize: number;
}

export interface CombCell {
  char: string;
  bounds: BoundingBox;
  cellIndex: number;
}

export interface CombRenderInstruction extends BaseRenderInstruction {
  type: "comb_cells";
  cells: CombCell[];
  calculatedFontSize: number;
}

export interface MarkRenderInstruction extends BaseRenderInstruction {
  type: "mark";
  symbol: string;
  bounds: BoundingBox;
  checked: boolean;
}

export interface SplitAmountRenderInstruction extends BaseRenderInstruction {
  type: "split_amount";
  dollars: string;
  cents: string;
  dollarsBounds: BoundingBox;
  centsBounds: BoundingBox;
  calculatedFontSize: number;
}

export type RenderInstruction =
  | TextRenderInstruction
  | CombRenderInstruction
  | MarkRenderInstruction
  | SplitAmountRenderInstruction;

export interface CompiledFormPage {
  pageNumber: number;
  width: number;
  height: number;
  units: string;
  instructions: RenderInstruction[];
}

export interface CompiledFormResult {
  formId: string;
  taxYear: number;
  pages: CompiledFormPage[];
  totalFieldsProcessed: number;
  renderedFieldsCount: number;
  skippedFieldsCount: number;
}
