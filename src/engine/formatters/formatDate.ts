import type { FormattingOptions } from "../../types/schema.ts";
import { DEFAULT_DATE_FORMATS } from "../../constants/formatter-constants.ts";

/**
 * Parses and splits a date into its month, day, and year components.
 */
export function splitDateComponents(value: unknown): {
  month: string;
  day: string;
  year: string;
} {
  if (!value) return { month: "", day: "", year: "" };
  const str = String(value).trim();

  if (str.includes("-")) {
    const [y = "", m = "", d = ""] = str.split("-");
    return { year: y, month: m.padStart(2, "0"), day: d.padStart(2, "0") };
  }

  if (str.includes("/")) {
    const [m = "", d = "", y = ""] = str.split("/");
    return { month: m.padStart(2, "0"), day: d.padStart(2, "0"), year: y };
  }

  if (str.length === 8 && /^\d+$/.test(str)) {
    const isYearFirst = parseInt(str.slice(0, 4), 10) > 1900;
    return isYearFirst
      ? { year: str.slice(0, 4), month: str.slice(4, 6), day: str.slice(6, 8) }
      : { month: str.slice(0, 2), day: str.slice(2, 4), year: str.slice(4, 8) };
  }

  return { month: "", day: "", year: "" };
}

/**
 * Formats a date value into standard US or ISO representations.
 */
export function formatDate(
  value: unknown,
  options?: FormattingOptions,
): string {
  if (value === null || value === undefined || value === "") return "";
  const { month, day, year } = splitDateComponents(value);
  if (!month || !day || !year) return String(value).trim();

  const pattern = options?.datePattern ?? DEFAULT_DATE_FORMATS.US_SLASH;

  switch (pattern) {
    case DEFAULT_DATE_FORMATS.US_SLASH:
      return `${month}/${day}/${year}`;
    case DEFAULT_DATE_FORMATS.US_DASH:
      return `${month}-${day}-${year}`;
    case DEFAULT_DATE_FORMATS.ISO:
      return `${year}-${month}-${day}`;
    case DEFAULT_DATE_FORMATS.COMPACT:
      return `${month}${day}${year}`;
    case DEFAULT_DATE_FORMATS.MONTH_DAY:
      return `${month}/${day}`;
    case DEFAULT_DATE_FORMATS.YEAR_ONLY:
      return year;
    default:
      return `${month}/${day}/${year}`;
  }
}
