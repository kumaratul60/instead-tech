import { describe, it, expect } from "vitest";
import { formatDate, splitDateComponents } from "../formatDate.ts";

describe("formatDate", () => {
  it("should format ISO date to MM/DD/YYYY", () => {
    expect(formatDate("2025-04-15")).toBe("04/15/2025");
  });

  it("should format compact date to MM-DD-YYYY", () => {
    expect(formatDate("2025-04-15", { datePattern: "MM-DD-YYYY" })).toBe(
      "04-15-2025",
    );
  });

  it("should split date components", () => {
    const parts = splitDateComponents("2025-04-15");
    expect(parts.year).toBe("2025");
    expect(parts.month).toBe("04");
    expect(parts.day).toBe("15");
  });
});
