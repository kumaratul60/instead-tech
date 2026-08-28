import { describe, it, expect } from "vitest";
import { formatCurrency, splitDollarsAndCents } from "../formatCurrency.ts";

describe("formatCurrency", () => {
  it("should format numbers with thousands separators and 2 decimal places by default", () => {
    expect(formatCurrency(1234567.89)).toBe("1,234,567.89");
    expect(formatCurrency(500)).toBe("500.00");
  });

  it("should format negative numbers with parentheses", () => {
    expect(formatCurrency(-1250.5)).toBe("(1,250.50)");
  });

  it("should include currency symbol when configured", () => {
    expect(formatCurrency(100, { includeCurrencySymbol: true })).toBe(
      "$100.00",
    );
  });

  it("should split dollars and cents correctly", () => {
    const split = splitDollarsAndCents(98765.43);
    expect(split.dollars).toBe("98,765");
    expect(split.cents).toBe("43");
  });
});
