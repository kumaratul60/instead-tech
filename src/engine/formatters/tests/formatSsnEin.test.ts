import { describe, it, expect } from "vitest";
import { formatSsnEin } from "../formatSsnEin.ts";

describe("formatSsnEin", () => {
  it("should format 9 digits as SSN", () => {
    expect(formatSsnEin("123456789")).toBe("123-45-6789");
  });

  it("should format 9 digits as EIN", () => {
    expect(formatSsnEin("123456789", { mask: "##-#######" })).toBe(
      "12-3456789",
    );
  });

  it("should apply custom mask", () => {
    expect(formatSsnEin("123456789", { mask: "###-##-####" })).toBe(
      "123-45-6789",
    );
  });
});
