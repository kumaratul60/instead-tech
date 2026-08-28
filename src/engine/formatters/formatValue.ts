import type { FormattingOptions } from "../../types/schema.ts";
import { FORMATTER_TYPES } from "../../constants/formatter-constants.ts";
import { formatCurrency } from "./formatCurrency.ts";
import { formatSsnEin } from "./formatSsnEin.ts";
import { formatDate } from "./formatDate.ts";

/**
 * Universal formatter dispatcher.
 */
export function formatValue(
  value: unknown,
  options?: FormattingOptions,
): string {
  if (value === null || value === undefined) return "";
  if (!options) return String(value);

  let result = String(value);

  switch (options.formatter) {
    case FORMATTER_TYPES.CURRENCY:
      result = formatCurrency(value, options);
      break;
    case FORMATTER_TYPES.SSN:
    case FORMATTER_TYPES.EIN:
      result = formatSsnEin(value, options);
      break;
    case FORMATTER_TYPES.DATE:
      result = formatDate(value, options);
      break;
    case FORMATTER_TYPES.UPPERCASE:
      result = String(value).toUpperCase();
      break;
    case FORMATTER_TYPES.LOWERCASE:
      result = String(value).toLowerCase();
      break;
    case FORMATTER_TYPES.INTEGER: {
      const n = parseInt(String(value), 10);
      result = isNaN(n) ? String(value) : String(n);
      break;
    }
    case FORMATTER_TYPES.DECIMAL: {
      const n = typeof value === "number" ? value : parseFloat(String(value));
      result = isNaN(n)
        ? String(value)
        : options.decimalPlaces !== undefined
          ? n.toFixed(options.decimalPlaces)
          : String(n);
      break;
    }
    default:
      result = String(value);
  }

  if (options.stripNonDigits) {
    result = result.replace(/\D/g, "");
  }
  if (options.padLength) {
    result = result.padStart(options.padLength, options.padChar || "0");
  }

  return result;
}
