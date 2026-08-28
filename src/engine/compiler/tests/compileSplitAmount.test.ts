import { describe, it, expect } from "vitest";
import { compileSplitAmount } from "../compileSplitAmount.ts";
import type { FieldAnnotation } from "../../../types/schema.ts";

describe("compileSplitAmount", () => {
  const splitField: FieldAnnotation = {
    id: "wages_split",
    name: "Wages Split Amount",
    page: 1,
    type: "split_amount",
    bounds: { x: 100, y: 100, width: 120, height: 16 },
    splitAmountConfig: {
      dollarsBounds: { x: 100, y: 100, width: 90, height: 16 },
      centsBounds: { x: 195, y: 100, width: 25, height: 16 },
    },
  };

  it("should compile separate dollars and cents instructions", () => {
    const res = compileSplitAmount(splitField, 12345.67, {});
    expect(res).toHaveLength(1);
    expect(res[0]?.type).toBe("split_amount");
    expect(res[0]?.dollars).toBe("12,345");
    expect(res[0]?.cents).toBe("67");
  });
});
