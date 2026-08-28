import type { FormattingOptions } from "../../types/schema.ts";
import { FORMATTER_TYPES } from "../../constants/formatter-constants.ts";

/**
 * Formats a 9-digit string as SSN (XXX-XX-XXXX) or EIN (XX-XXXXXXX).
 */
export function formatSsnEin(
  value: unknown,
  options?: FormattingOptions,
): string {
  if (value === null || value === undefined || value === "") return "";
  const digits = String(value).replace(/\D/g, "");
  const mask = options?.mask;

  if (mask) {
    let digitIdx = 0;
    let out = "";
    for (const ch of mask) {
      if (ch === "#" || ch === "X" || ch === "x") {
        if (digitIdx < digits.length) {
          out += digits[digitIdx++];
        }
      } else {
        out += ch;
      }
    }
    return out;
  }

  if (options?.formatter === FORMATTER_TYPES.EIN) {
    return digits.length === 9
      ? `${digits.slice(0, 2)}-${digits.slice(2, 9)}`
      : String(value);
  }

  return digits.length === 9
    ? `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`
    : String(value);
}
