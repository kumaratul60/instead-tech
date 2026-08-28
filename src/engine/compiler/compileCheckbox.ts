import type { FieldAnnotation, TypographyStyle } from "../../types/schema.ts";
import type { MarkRenderInstruction } from "../../types/rendering.ts";
import { MARK_SYMBOLS } from "../../constants/field-constants.ts";

/**
 * Compiles a boolean checkbox field into a MarkRenderInstruction.
 */
export function compileCheckbox(
  field: FieldAnnotation,
  resolvedValue: unknown,
  styling: TypographyStyle,
): MarkRenderInstruction[] {
  if (!Boolean(resolvedValue)) {
    return [];
  }

  return [
    {
      fieldId: field.id,
      pageNumber: field.page,
      type: "mark",
      symbol: field.markSymbol || MARK_SYMBOLS.CROSS,
      bounds: field.bounds,
      checked: true,
      styling,
      rawBounds: field.bounds,
    },
  ];
}

/**
 * Compiles a single-select radio option into a MarkRenderInstruction.
 */
export function compileRadioGroup(
  field: FieldAnnotation,
  resolvedValue: unknown,
  styling: TypographyStyle,
): MarkRenderInstruction[] {
  if (!field.radioOptions?.length) {
    return [];
  }

  const selectedOption = field.radioOptions.find(
    (opt) =>
      opt.value === resolvedValue ||
      String(opt.value) === String(resolvedValue),
  );

  if (!selectedOption) {
    return [];
  }

  return [
    {
      fieldId: `${field.id}_${selectedOption.value}`,
      pageNumber: field.page,
      type: "mark",
      symbol: field.markSymbol || MARK_SYMBOLS.CROSS,
      bounds: selectedOption.bounds,
      checked: true,
      styling,
      rawBounds: selectedOption.bounds,
    },
  ];
}
