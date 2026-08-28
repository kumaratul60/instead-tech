import type { FormAnnotationDocument } from "../../types/schema.ts";
import type {
  CompiledFormResult,
  CompiledFormPage,
} from "../../types/rendering.ts";
import { evaluateCondition } from "../resolver.ts";
import { compileField } from "./compileField.ts";

/**
 * Pure compiler that transforms a FormAnnotationDocument and tax data payload into a CompiledFormResult.
 */
export function compileFormAnnotation(
  document: FormAnnotationDocument,
  data: unknown,
): CompiledFormResult {
  const pagesMap = new Map<number, CompiledFormPage>();

  for (const pageSpec of document.pages) {
    pagesMap.set(pageSpec.pageNumber, {
      pageNumber: pageSpec.pageNumber,
      width: pageSpec.width,
      height: pageSpec.height,
      units: pageSpec.units,
      instructions: [],
    });
  }

  let totalFields = 0;
  let renderedCount = 0;
  let skippedCount = 0;

  for (const field of document.fields) {
    totalFields++;

    if (field.condition && !evaluateCondition(field.condition, data)) {
      skippedCount++;
      continue;
    }

    const instructions = compileField(field, data, document.defaultStyling);

    if (instructions.length > 0) {
      renderedCount++;
      for (const instruction of instructions) {
        const targetPage = pagesMap.get(instruction.pageNumber);
        if (targetPage) {
          targetPage.instructions.push(instruction);
        }
      }
    } else {
      skippedCount++;
    }
  }

  return {
    formId: document.formId,
    taxYear: document.taxYear,
    pages: Array.from(pagesMap.values()),
    totalFieldsProcessed: totalFields,
    renderedFieldsCount: renderedCount,
    skippedFieldsCount: skippedCount,
  };
}
