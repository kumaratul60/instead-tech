/**
 * Pure Functional Path Resolution & Condition Evaluation.
 */

import type { FieldCondition } from "../types/schema.ts";
import { CONDITION_OPERATORS } from "../constants/field-constants.ts";

/**
 * Resolves nested values from data using JSONPath ('$.a.b[0].c') or dot notation ('a.b.0.c').
 */
export function resolvePath<T = unknown>(
  data: unknown,
  path: string,
  defaultValue: unknown = null,
): T | null {
  if (
    data === null ||
    data === undefined ||
    !path ||
    typeof path !== "string"
  ) {
    return (defaultValue as T) ?? null;
  }

  let cleanPath = path.trim();
  if (cleanPath.startsWith("$.")) {
    cleanPath = cleanPath.substring(2);
  } else if (cleanPath.startsWith("$")) {
    cleanPath = cleanPath.substring(1);
  }

  if (!cleanPath) {
    return (data as T) ?? (defaultValue as T) ?? null;
  }

  const segments = cleanPath
    .replace(/\[(\w+|\*)\]/g, ".$1")
    .replace(/^\./, "")
    .split(".")
    .filter((s) => s.length > 0);

  let current: unknown = data;

  for (let i = 0; i < segments.length; i++) {
    if (current === null || current === undefined) {
      return (defaultValue as T) ?? null;
    }

    const segment = segments[i];
    if (!segment) continue;

    // Handle wildcard aggregation e.g. w2s[*].wages
    if (segment === "*" && Array.isArray(current)) {
      const remaining = segments.slice(i + 1);
      if (remaining.length === 0) return current as T;
      const aggregated = current.map((item) =>
        resolvePath(item, remaining.join("."), null),
      );
      return (aggregated as T) ?? (defaultValue as T) ?? null;
    }

    if (
      typeof current === "object" &&
      segment in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[segment];
    } else if (Array.isArray(current) && !isNaN(Number(segment))) {
      current = current[Number(segment)];
    } else {
      return (defaultValue as T) ?? null;
    }
  }

  return current !== undefined && current !== null
    ? (current as T)
    : ((defaultValue as T) ?? null);
}

/**
 * Evaluates dynamic conditional display rules on field annotations.
 */
export function evaluateCondition(
  condition: FieldCondition | undefined,
  data: unknown,
): boolean {
  if (!condition || !condition.path) {
    return true;
  }

  const actualValue = resolvePath(data, condition.path);
  const expectedValue = condition.value;
  const operator = condition.operator || CONDITION_OPERATORS.EQUALS;

  switch (operator) {
    case CONDITION_OPERATORS.EQUALS:
      return (
        actualValue === expectedValue ||
        String(actualValue) === String(expectedValue)
      );

    case CONDITION_OPERATORS.NOT_EQUALS:
      return (
        actualValue !== expectedValue &&
        String(actualValue) !== String(expectedValue)
      );

    case CONDITION_OPERATORS.IN:
      if (Array.isArray(expectedValue)) {
        return expectedValue.some(
          (item) =>
            item === actualValue || String(item) === String(actualValue),
        );
      }
      return false;

    case CONDITION_OPERATORS.NOT_IN:
      if (Array.isArray(expectedValue)) {
        return !expectedValue.some(
          (item) =>
            item === actualValue || String(item) === String(actualValue),
        );
      }
      return true;

    case CONDITION_OPERATORS.GREATER_THAN:
      return Number(actualValue) > Number(expectedValue);

    case CONDITION_OPERATORS.LESS_THAN:
      return Number(actualValue) < Number(expectedValue);

    case CONDITION_OPERATORS.EXISTS:
      return (
        actualValue !== null && actualValue !== undefined && actualValue !== ""
      );

    case CONDITION_OPERATORS.TRUTHY:
      return Boolean(actualValue);

    case CONDITION_OPERATORS.FALSY:
      return !Boolean(actualValue);

    default:
      return true;
  }
}
