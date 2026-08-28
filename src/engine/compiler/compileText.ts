import type { FieldAnnotation, TypographyStyle } from "../../types/schema.ts";
import type { TextRenderInstruction } from "../../types/rendering.ts";
import { formatValue } from "../formatters/index.ts";
import { calculateFittingFontSize } from "../layout.ts";
import { resolvePath } from "../resolver.ts";

/**
 * Compiles a text or numeric single-line box into a TextRenderInstruction.
 */
export function compileText(
  field: FieldAnnotation,
  resolvedValue: unknown,
  styling: TypographyStyle,
): TextRenderInstruction[] {
  if (
    resolvedValue === null ||
    resolvedValue === undefined ||
    resolvedValue === ""
  ) {
    return [];
  }

  const text = formatValue(resolvedValue, field.formatting);
  const fontSize = calculateFittingFontSize(text, field.bounds, styling);

  return [
    {
      fieldId: field.id,
      pageNumber: field.page,
      type: "text",
      text,
      bounds: field.bounds,
      calculatedFontSize: fontSize,
      styling,
      rawBounds: field.bounds,
    },
  ];
}

/**
 * Compiles a repeating tabular grid (e.g. Schedule B interest entries) into an array of TextRenderInstructions.
 */
export function compileRepeatingGroup(
  field: FieldAnnotation,
  resolvedValue: unknown,
  baseStyling: TypographyStyle,
): TextRenderInstruction[] {
  const config = field.repeatingGroupConfig;
  if (!config || !Array.isArray(resolvedValue)) {
    return [];
  }

  return resolvedValue.slice(0, config.maxRows).flatMap((row, r) => {
    const rowY = field.bounds.y + r * config.rowStride;

    return config.columns.map((col) => {
      const val = resolvePath(row, col.key);
      const text = formatValue(val, col.formatting);
      const bounds = {
        x: field.bounds.x + col.xOffset,
        y: rowY,
        width: col.width,
        height: config.rowStride,
      };
      const colStyling = { ...baseStyling, ...col.styling };

      return {
        fieldId: `${field.id}_row${r}_${col.key}`,
        pageNumber: field.page,
        type: "text" as const,
        text,
        bounds,
        calculatedFontSize: calculateFittingFontSize(text, bounds, colStyling),
        styling: colStyling,
        rawBounds: bounds,
      };
    });
  });
}
