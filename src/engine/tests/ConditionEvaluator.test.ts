import { describe, it, expect } from "vitest";
import { evaluateCondition } from "../resolver.ts";

describe("ConditionEvaluator", () => {
  const sampleData = {
    filingStatus: "HEAD_OF_HOUSEHOLD",
    age: 67,
    isBlind: true,
    spouse: null,
  };

  it("should return true if condition is undefined", () => {
    expect(evaluateCondition(undefined, sampleData)).toBe(true);
  });

  it("should evaluate EQUALS correctly", () => {
    expect(
      evaluateCondition(
        {
          path: "filingStatus",
          operator: "equals",
          value: "HEAD_OF_HOUSEHOLD",
        },
        sampleData,
      ),
    ).toBe(true);
    expect(
      evaluateCondition(
        { path: "filingStatus", operator: "equals", value: "SINGLE" },
        sampleData,
      ),
    ).toBe(false);
  });

  it("should evaluate IN operator with arrays", () => {
    expect(
      evaluateCondition(
        {
          path: "filingStatus",
          operator: "in",
          value: ["SINGLE", "HEAD_OF_HOUSEHOLD"],
        },
        sampleData,
      ),
    ).toBe(true);
    expect(
      evaluateCondition(
        {
          path: "filingStatus",
          operator: "in",
          value: ["MARRIED_FILING_JOINTLY"],
        },
        sampleData,
      ),
    ).toBe(false);
  });

  it("should evaluate GREATER_THAN correctly", () => {
    expect(
      evaluateCondition(
        { path: "age", operator: "greater_than", value: 65 },
        sampleData,
      ),
    ).toBe(true);
    expect(
      evaluateCondition(
        { path: "age", operator: "greater_than", value: 70 },
        sampleData,
      ),
    ).toBe(false);
  });

  it("should evaluate TRUTHY and FALSY", () => {
    expect(
      evaluateCondition({ path: "isBlind", operator: "truthy" }, sampleData),
    ).toBe(true);
    expect(
      evaluateCondition({ path: "isBlind", operator: "falsy" }, sampleData),
    ).toBe(false);
  });

  it("should evaluate EXISTS", () => {
    expect(
      evaluateCondition(
        { path: "filingStatus", operator: "exists" },
        sampleData,
      ),
    ).toBe(true);
    expect(
      evaluateCondition({ path: "spouse", operator: "exists" }, sampleData),
    ).toBe(false);
  });
});
