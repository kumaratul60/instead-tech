import { describe, it, expect } from "vitest";
import { formatValue } from "../formatValue.ts";

describe("formatValue dispatcher", () => {
  it("should format uppercase correctly", () => {
    expect(formatValue("john doe", { formatter: "uppercase" })).toBe(
      "JOHN DOE",
    );
  });

  it("should format lowercase correctly", () => {
    expect(formatValue("JOHN DOE", { formatter: "lowercase" })).toBe(
      "john doe",
    );
  });

  it("should pad values with leading zeroes when requested", () => {
    expect(formatValue(42, { padLength: 5 })).toBe("00042");
  });

  it("should format decimals with specific precision", () => {
    expect(
      formatValue(12.3456, { formatter: "decimal", decimalPlaces: 2 }),
    ).toBe("12.35");
  });
});
