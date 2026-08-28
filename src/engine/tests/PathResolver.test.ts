import { describe, it, expect } from "vitest";
import { resolvePath } from "../resolver.ts";

describe("PathResolver", () => {
  const sampleData = {
    primaryTaxpayer: {
      firstName: "Jane",
      ssn: "123456789",
      address: {
        zip: "90210",
      },
    },
    income: {
      w2s: [
        { employer: "Acme Corp", wages: 55000 },
        { employer: "Beta LLC", wages: 45000 },
      ],
    },
  };

  it("should resolve simple top-level property", () => {
    const val = resolvePath(sampleData, "primaryTaxpayer.firstName");
    expect(val).toBe("Jane");
  });

  it("should resolve JSONPath with leading $.", () => {
    const val = resolvePath(sampleData, "$.primaryTaxpayer.address.zip");
    expect(val).toBe("90210");
  });

  it("should resolve array indexing with brackets", () => {
    const val = resolvePath(sampleData, "$.income.w2s[0].wages");
    expect(val).toBe(55000);
  });

  it("should resolve array indexing with dot notation", () => {
    const val = resolvePath(sampleData, "income.w2s.1.employer");
    expect(val).toBe("Beta LLC");
  });

  it("should return default value when path does not exist", () => {
    const val = resolvePath(sampleData, "$.nonexistent.field", "DEFAULT");
    expect(val).toBe("DEFAULT");
  });

  it("should return default value when target is null", () => {
    const val = resolvePath(null, "$.some.path", "FALLBACK");
    expect(val).toBe("FALLBACK");
  });

  it("should handle array wildcard aggregation", () => {
    const wages = resolvePath<number[]>(sampleData, "$.income.w2s[*].wages");
    expect(wages).toEqual([55000, 45000]);
  });
});
