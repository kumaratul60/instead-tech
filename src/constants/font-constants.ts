/**
 * Typography and font styling constants.
 */

export const STANDARD_FONTS = {
  HELVETICA: "Helvetica",
  HELVETICA_BOLD: "Helvetica-Bold",
  COURIER: "Courier",
  COURIER_BOLD: "Courier-Bold",
  TIMES_ROMAN: "Times-Roman",
  TIMES_BOLD: "Times-Bold",
} as const;

export type StandardFont = (typeof STANDARD_FONTS)[keyof typeof STANDARD_FONTS];

export const DEFAULT_TYPOGRAPHY = {
  FONT_FAMILY: STANDARD_FONTS.COURIER, // Fixed-pitch / standard print font common in tax forms
  FONT_SIZE: 10, // points
  MIN_FONT_SIZE: 6, // minimum size when auto-scaling to prevent overflow
  LINE_HEIGHT: 1.2,
  COLOR: "#000000",
  LETTER_SPACING: 0,
} as const;
