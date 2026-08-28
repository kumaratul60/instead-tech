/**
 * Field types, checkbox symbols, alignment and overflow handling constants.
 */

export const FIELD_TYPES = {
  TEXT: "text",
  NUMERIC: "numeric",
  COMB: "comb",
  CHECKBOX: "checkbox",
  RADIO_GROUP: "radio_group",
  SPLIT_AMOUNT: "split_amount",
  REPEATING_GROUP: "repeating_group",
} as const;

export type FieldType = (typeof FIELD_TYPES)[keyof typeof FIELD_TYPES];

export const MARK_SYMBOLS = {
  CROSS: "X",
  CHECK: "✓",
  SOLID_SQUARE: "■",
  BULLET: "●",
} as const;

export type MarkSymbol =
  (typeof MARK_SYMBOLS)[keyof typeof MARK_SYMBOLS] | string;

export const TEXT_ALIGNMENTS = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

export type TextAlignment =
  (typeof TEXT_ALIGNMENTS)[keyof typeof TEXT_ALIGNMENTS];

export const VERTICAL_ALIGNMENTS = {
  TOP: "top",
  MIDDLE: "middle",
  BOTTOM: "bottom",
} as const;

export type VerticalAlignment =
  (typeof VERTICAL_ALIGNMENTS)[keyof typeof VERTICAL_ALIGNMENTS];

export const OVERFLOW_BEHAVIORS = {
  TRUNCATE: "truncate",
  AUTO_SHRINK_FONT: "auto_shrink_font",
  WRAP: "wrap",
  CLIP: "clip",
} as const;

export type OverflowBehavior =
  (typeof OVERFLOW_BEHAVIORS)[keyof typeof OVERFLOW_BEHAVIORS];

export const CONDITION_OPERATORS = {
  EQUALS: "equals",
  NOT_EQUALS: "not_equals",
  IN: "in",
  NOT_IN: "not_in",
  GREATER_THAN: "greater_than",
  LESS_THAN: "less_than",
  TRUTHY: "truthy",
  FALSY: "falsy",
  EXISTS: "exists",
} as const;

export type ConditionOperator =
  (typeof CONDITION_OPERATORS)[keyof typeof CONDITION_OPERATORS];
