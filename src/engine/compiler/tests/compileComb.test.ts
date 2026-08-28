import { describe, it, expect } from "vitest";
import { compileComb } from "../compileComb.ts";
import type { FieldAnnotation } from "../../../types/schema.ts";

describe("compileComb", () => {
  const combField: FieldAnnotation = {
    id: "ssn_comb",
    name: "SSN Comb",
    page: 1,
    type: "comb",
    bounds: { x: 50, y: 50, width: 90, height: 15 },
    combConfig: { cellCount: 9, pitch: 10, cellWidth: 10, alignment: "left" },
  };

  it("should compile comb character cells correctly", () => {
    const res = compileComb(combField, "987654321", {});
    expect(res).toHaveLength(1);
    expect(res[0]?.type).toBe("comb_cells");
    expect(res[0]?.cells).toHaveLength(9);
    expect(res[0]?.cells[0]?.char).toBe("9");
    expect(res[0]?.cells[8]?.char).toBe("1");
  });
});
