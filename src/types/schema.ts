/**
 * Tax Form Annotation Specification - TypeScript Interfaces.
 */

import type {
  FieldType,
  MarkSymbol,
  TextAlignment,
  VerticalAlignment,
  OverflowBehavior,
  ConditionOperator,
} from "../constants/field-constants.ts";
import type { FormatterType } from "../constants/formatter-constants.ts";
import type { StandardFont } from "../constants/font-constants.ts";

/**
 * 2D Bounding Box in standard coordinates.
 */
export interface BoundingBox {
  /** X coordinate (points or normalized 0-1) from origin (top-left default) */
  x: number;
  /** Y coordinate (points or normalized 0-1) from origin (top-left default) */
  y: number;
  /** Width of the bounding box */
  width: number;
  /** Height of the bounding box */
  height: number;
}

/**
 * Page dimension specification.
 */
export interface PageSpecification {
  /** 1-based page index */
  pageNumber: number;
  /** Page width in specified units */
  width: number;
  /** Page height in specified units */
  height: number;
  /** Coordinate unit: points (1/72 inch) or normalized */
  units: "points" | "percentage" | "inches" | "mm";
  /** Origin point of the coordinate system. Defaults to top_left */
  origin?: "top_left" | "bottom_left";
  /** Optional background image/PDF asset reference for preview */
  backgroundImageUrl?: string;
}

/**
 * Data binding configuration for pulling deeply nested values.
 */
export interface DataBinding {
  /**
   * JSONPath or dot-notation path to extract from data payload.
   * Examples:
   * - "$.taxpayer.personalInfo.ssn"
   * - "taxpayer.w2s[0].box1_wages"
   * - "return.filing_status"
   */
  path: string;
  /** Default value if resolved path is null, undefined, or missing */
  defaultValue?: string | number | boolean | null;
  /** Optional transformation expression or secondary path */
  fallbackPath?: string;
}

/**
 * Conditional rule to determine if a field/mark should be rendered.
 */
export interface FieldCondition {
  /** JSONPath or dot-notation path to the variable to evaluate */
  path: string;
  /** Operator for comparison */
  operator: ConditionOperator;
  /** Target value for comparison */
  value?: string | number | boolean | Array<string | number | boolean>;
}

/**
 * Formatting options for values.
 */
export interface FormattingOptions {
  /** Formatter type */
  formatter?: FormatterType;
  /** Date pattern (e.g. 'MM/DD/YYYY', 'YYYY-MM-DD', 'MMDDYYYY') */
  datePattern?: string;
  /** Custom regex pattern or character mask (e.g. 'XXX-XX-XXXX') */
  mask?: string;
  /** Number of decimal places for numeric/currency formatting */
  decimalPlaces?: number;
  /** Whether to include currency symbol ($) */
  includeCurrencySymbol?: boolean;
  /** Style for negative values ('minus' | 'parentheses') */
  negativeStyle?: "minus" | "parentheses";
  /** Pad with leading zeroes or spaces to a fixed length */
  padLength?: number;
  /** Character to pad with (default '0' or ' ') */
  padChar?: string;
  /** Strip non-digit characters before formatting */
  stripNonDigits?: boolean;
}

/**
 * Typography and visual rendering styles.
 */
export interface TypographyStyle {
  /** Font family (Standard PDF font or web-safe font) */
  fontFamily?: StandardFont | string;
  /** Font size in points */
  fontSize?: number;
  /** Minimum font size when auto-scaling is enabled */
  minFontSize?: number;
  /** Horizontal alignment within bounds */
  textAlign?: TextAlignment;
  /** Vertical alignment within bounds */
  verticalAlign?: VerticalAlignment;
  /** Line height multiplier */
  lineHeight?: number;
  /** Additional letter spacing in points */
  letterSpacing?: number;
  /** Text/Stroke Color hex code (e.g. '#000000') */
  color?: string;
  /** How to handle text overflow */
  overflow?: OverflowBehavior;
}

/**
 * Configuration for Comb (segmented character-by-character) boxes.
 * Used for SSN, EIN, routing numbers, name character grids.
 */
export interface CombConfiguration {
  /** Total number of character cells in the comb */
  cellCount: number;
  /** Width of each individual character cell in points (optional if evenly divided) */
  cellWidth?: number;
  /** Pitch (horizontal distance from start of one cell to start of next) */
  pitch?: number;
  /** Alignment of characters within the comb ('left' | 'right' | 'center') */
  alignment?: "left" | "right" | "center";
  /** Gap between segmented groups (e.g. SSN 3-2-4 segments) */
  segmentGaps?: number[];
}

/**
 * Radio button option item.
 */
export interface RadioOption {
  /** The value in the data model that selects this option */
  value: string | number | boolean;
  /** Human-readable label for the option */
  label: string;
  /** Bounding box of the checkbox/radio target box on the form */
  bounds: BoundingBox;
}

/**
 * Split amount box configuration (separate Dollar and Cent boxes).
 */
export interface SplitAmountConfiguration {
  /** Bounding box for the whole dollars portion */
  dollarsBounds: BoundingBox;
  /** Bounding box for the 2-digit cents portion */
  centsBounds: BoundingBox;
  /** Whether cents is rounded or strict 2-digits */
  decimals?: number;
}

/**
 * Column definition for repeating tabular groups.
 */
export interface RepeatingGroupColumn {
  /** Key name in row object */
  key: string;
  /** Relative X offset from row start */
  xOffset: number;
  /** Width of the column box */
  width: number;
  /** Column data type/formatting */
  formatting?: FormattingOptions;
  /** Column typography */
  styling?: TypographyStyle;
}

/**
 * Repeating table / grid configuration (e.g. Schedule B interest rows, W-2 state rows).
 */
export interface RepeatingGroupConfiguration {
  /** Maximum number of rows that fit on the form page */
  maxRows: number;
  /** Vertical height / stride per row in points */
  rowStride: number;
  /** Columns definition */
  columns: RepeatingGroupColumn[];
}

/**
 * Comprehensive Field Annotation definition.
 */
export interface FieldAnnotation {
  /** Unique identifier for the box / field (e.g. "f1040_p1_taxpayer_ssn") */
  id: string;
  /** IRS line number or human label (e.g. "Line 1a - Total amount from Form(s) W-2") */
  name: string;
  /** 1-based page number */
  page: number;
  /** Field type */
  type: FieldType;
  /** Primary bounding box on the form page */
  bounds: BoundingBox;
  /** Data binding path to nested data */
  binding?: DataBinding;
  /** Value formatting options */
  formatting?: FormattingOptions;
  /** Visual typography & styling */
  styling?: TypographyStyle;
  /** Checkbox mark symbol when checked ('X', '✓', '■') */
  markSymbol?: MarkSymbol;
  /** Configuration for comb/segmented boxes */
  combConfig?: CombConfiguration;
  /** Configuration for radio option groups */
  radioOptions?: RadioOption[];
  /** Configuration for split dollar/cents boxes */
  splitAmountConfig?: SplitAmountConfiguration;
  /** Configuration for repeating tabular line items */
  repeatingGroupConfig?: RepeatingGroupConfiguration;
  /** Conditional visibility rule */
  condition?: FieldCondition;
  /** Optional metadata / notes for tax software developers */
  metadata?: Record<string, unknown>;
}

/**
 * Complete Tax Form Annotation Document.
 */
export interface FormAnnotationDocument {
  /** Specification version */
  schemaVersion: string;
  /** Unique form identifier (e.g. "IRS-1040-2025") */
  formId: string;
  /** Official title of the form */
  formTitle: string;
  /** Tax Year (e.g. 2025) */
  taxYear: number;
  /** Total number of pages */
  pageCount: number;
  /** Page dimension specifications */
  pages: PageSpecification[];
  /** Global default typography styles */
  defaultStyling?: TypographyStyle;
  /** All annotated field definitions */
  fields: FieldAnnotation[];
  /** Document metadata */
  metadata?: {
    author?: string;
    createdAt?: string;
    updatedAt?: string;
    description?: string;
    irsRevDate?: string;
  };
}
