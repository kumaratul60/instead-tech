import type { FieldAnnotation, TypographyStyle } from "../../types/schema.ts";
import type { CombRenderInstruction } from "../../types/rendering.ts";
import { DEFAULT_TYPOGRAPHY } from "../../constants/font-constants.ts";
import { calculateCombCells } from "../layout.ts";

/**
 * Compiles a segmented character comb field into a CombRenderInstruction.
 */
export function compileComb(
  field: FieldAnnotation,
  resolvedValue: unknown,
  styling: TypographyStyle,
): CombRenderInstruction[] {
  if (!field.combConfig) {
    return [];
  }

  const cells = calculateCombCells(
    field.bounds,
    field.combConfig,
    resolvedValue,
  );

  return [
    {
      fieldId: field.id,
      pageNumber: field.page,
      type: "comb_cells",
      cells,
      calculatedFontSize: styling.fontSize || DEFAULT_TYPOGRAPHY.FONT_SIZE,
      styling,
      rawBounds: field.bounds,
    },
  ];
}
