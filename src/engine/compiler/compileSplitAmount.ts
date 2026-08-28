import type { FieldAnnotation, TypographyStyle } from "../../types/schema.ts";
import type { SplitAmountRenderInstruction } from "../../types/rendering.ts";
import { DEFAULT_TYPOGRAPHY } from "../../constants/font-constants.ts";
import { splitDollarsAndCents } from "../formatters/index.ts";

/**
 * Compiles a split dollar / cent tax box into a SplitAmountRenderInstruction.
 */
export function compileSplitAmount(
  field: FieldAnnotation,
  resolvedValue: unknown,
  styling: TypographyStyle,
): SplitAmountRenderInstruction[] {
  if (!field.splitAmountConfig) {
    return [];
  }

  const { dollars, cents } = splitDollarsAndCents(resolvedValue);

  return [
    {
      fieldId: field.id,
      pageNumber: field.page,
      type: "split_amount",
      dollars,
      cents,
      dollarsBounds: field.splitAmountConfig.dollarsBounds,
      centsBounds: field.splitAmountConfig.centsBounds,
      calculatedFontSize: styling.fontSize || DEFAULT_TYPOGRAPHY.FONT_SIZE,
      styling,
      rawBounds: field.bounds,
    },
  ];
}
