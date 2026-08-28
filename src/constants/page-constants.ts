/**
 * Page dimension and coordinate system constants.
 * Standard PDF point resolution: 72 points per inch (DPI = 72).
 */

export const PDF_DPI = 72;

export const STANDARD_PAGE_SIZES = {
  LETTER: {
    name: "Letter",
    width: 612, // 8.5 inches * 72 points/inch
    height: 792, // 11 inches * 72 points/inch
    units: "points" as const,
  },
  LEGAL: {
    name: "Legal",
    width: 612, // 8.5 inches * 72 points/inch
    height: 1008, // 14 inches * 72 points/inch
    units: "points" as const,
  },
  A4: {
    name: "A4",
    width: 595.28,
    height: 841.89,
    units: "points" as const,
  },
} as const;

export const DEFAULT_PAGE_SIZE = STANDARD_PAGE_SIZES.LETTER;

export const COORDINATE_ORIGINS = {
  TOP_LEFT: "top_left",
  BOTTOM_LEFT: "bottom_left",
} as const;

export const COORDINATE_UNITS = {
  POINTS: "points",
  PERCENTAGE: "percentage",
  INCHES: "inches",
  MILLIMETERS: "mm",
} as const;
