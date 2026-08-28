/**
 * Formatter names and formatting default configuration constants.
 */

export const FORMATTER_TYPES = {
  NONE: "none",
  CURRENCY: "currency",
  INTEGER: "integer",
  DECIMAL: "decimal",
  SSN: "ssn",
  EIN: "ein",
  PHONE: "phone",
  ZIP: "zip",
  DATE: "date",
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
  TITLECASE: "titlecase",
  COMB_ARRAY: "comb_array",
  DOLLARS_ONLY: "dollars_only",
  CENTS_ONLY: "cents_only",
} as const;

export type FormatterType =
  (typeof FORMATTER_TYPES)[keyof typeof FORMATTER_TYPES];

export const DEFAULT_DATE_FORMATS = {
  ISO: "YYYY-MM-DD",
  US_SLASH: "MM/DD/YYYY",
  US_DASH: "MM-DD-YYYY",
  COMPACT: "MMDDYYYY",
  MONTH_DAY: "MM/DD",
  YEAR_ONLY: "YYYY",
} as const;

export const DEFAULT_CURRENCY_CONFIG = {
  CURRENCY_SYMBOL: "$",
  THOUSANDS_SEPARATOR: ",",
  DECIMAL_SEPARATOR: ".",
  DECIMAL_PLACES: 2,
  SHOW_ZERO_AS_BLANK: false,
  NEGATIVE_STYLE: "parentheses" as const, // 'minus' | 'parentheses'
  INCLUDE_SYMBOL: false, // On IRS forms, box usually has pre-printed $ sign
} as const;

export const DEFAULT_SSN_MASK = "XXX-XX-XXXX";
export const DEFAULT_EIN_MASK = "XX-XXXXXXX";
export const DEFAULT_PHONE_MASK = "(XXX) XXX-XXXX";
