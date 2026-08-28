import type { FieldAnnotation, TypographyStyle } from "../../types/schema.ts";
import type { RenderInstruction } from "../../types/rendering.ts";
import { FIELD_TYPES } from "../../constants/field-constants.ts";
import { DEFAULT_TYPOGRAPHY } from "../../constants/font-constants.ts";
import { resolvePath } from "../resolver.ts";
import { compileCheckbox, compileRadioGroup } from "./compileCheckbox.ts";
import { compileComb } from "./compileComb.ts";
import { compileSplitAmount } from "./compileSplitAmount.ts";
import { compileText, compileRepeatingGroup } from "./compileText.ts";

/**
 * Pure dispatcher that compiles any individual field definition into RenderInstructions.
 */
export function compileField(
  field: FieldAnnotation,
  data: unknown,
  globalDefaultStyling?: TypographyStyle,
): RenderInstruction[] {
  const resolvedValue = field.binding
    ? resolvePath(data, field.binding.path, field.binding.defaultValue)
    : undefined;

  const styling: TypographyStyle = {
    ...DEFAULT_TYPOGRAPHY,
    ...globalDefaultStyling,
    ...field.styling,
  };

  switch (field.type) {
    case FIELD_TYPES.CHECKBOX:
      return compileCheckbox(field, resolvedValue, styling);

    case FIELD_TYPES.RADIO_GROUP:
      return compileRadioGroup(field, resolvedValue, styling);

    case FIELD_TYPES.COMB:
      return compileComb(field, resolvedValue, styling);

    case FIELD_TYPES.SPLIT_AMOUNT:
      return compileSplitAmount(field, resolvedValue, styling);

    case FIELD_TYPES.REPEATING_GROUP:
      return compileRepeatingGroup(field, resolvedValue, styling);

    case FIELD_TYPES.NUMERIC:
    case FIELD_TYPES.TEXT:
    default:
      return compileText(field, resolvedValue, styling);
  }
}
