import type { FormattingOptions } from "../../types/schema.ts";
import { DEFAULT_CURRENCY_CONFIG } from "../../constants/formatter-constants.ts";

/**
 * Formats a numeric value as currency (e.g. $1,234.56 or (1,234.56)).
 */
export function formatCurrency(
  value: unknown,
  options?: FormattingOptions,
): string {
  if (value === null || value === undefined || value === "") return "";

  const num =
    typeof value === "number"
      ? value
      : parseFloat(String(value).replace(/[^0-9.-]+/g, ""));
  if (isNaN(num)) return String(value);

  const decimalPlaces =
    options?.decimalPlaces ?? DEFAULT_CURRENCY_CONFIG.DECIMAL_PLACES;
  const includeSymbol =
    options?.includeCurrencySymbol ?? DEFAULT_CURRENCY_CONFIG.INCLUDE_SYMBOL;
  const negativeStyle =
    options?.negativeStyle ?? DEFAULT_CURRENCY_CONFIG.NEGATIVE_STYLE;

  const isNegative = num < 0;
  const absVal = Math.abs(num);

  const parts = absVal.toFixed(decimalPlaces).split(".");
  const integerPart = (parts[0] ?? "0").replace(
    /\B(?=(\d{3})+(?!\d))/g,
    DEFAULT_CURRENCY_CONFIG.THOUSANDS_SEPARATOR,
  );
  const decimalPart =
    parts.length > 1 && parts[1] !== undefined
      ? `${DEFAULT_CURRENCY_CONFIG.DECIMAL_SEPARATOR}${parts[1]}`
      : "";

  let formatted = `${integerPart}${decimalPart}`;
  if (includeSymbol)
    formatted = `${DEFAULT_CURRENCY_CONFIG.CURRENCY_SYMBOL}${formatted}`;

  if (isNegative) {
    formatted =
      negativeStyle === "parentheses" ? `(${formatted})` : `-${formatted}`;
  }

  return formatted;
}

/**
 * Splits an amount into separate integer dollars and 2-digit cents strings.
 */
export function splitDollarsAndCents(value: unknown): {
  dollars: string;
  cents: string;
} {
  if (value === null || value === undefined || value === "")
    return { dollars: "", cents: "" };

  const num =
    typeof value === "number"
      ? value
      : parseFloat(String(value).replace(/[^0-9.-]+/g, ""));
  if (isNaN(num)) return { dollars: String(value), cents: "" };

  const isNegative = num < 0;
  const absVal = Math.abs(num);
  const parts = absVal.toFixed(2).split(".");

  let dollars = (parts[0] ?? "0").replace(
    /\B(?=(\d{3})+(?!\d))/g,
    DEFAULT_CURRENCY_CONFIG.THOUSANDS_SEPARATOR,
  );
  const cents = parts[1] ?? "00";

  if (isNegative) dollars = `(${dollars})`;
  return { dollars, cents };
}
