import { describe, it, expect } from "vitest";
import { compileText, compileRepeatingGroup } from "../compileText.ts";
import type { FieldAnnotation } from "../../../types/schema.ts";

describe("compileText & compileRepeatingGroup", () => {
  const textField: FieldAnnotation = {
    id: "name_field",
    name: "Taxpayer Name",
    page: 1,
    type: "text",
    bounds: { x: 50, y: 50, width: 200, height: 16 },
    formatting: { formatter: "uppercase" },
  };

  const repeatingField: FieldAnnotation = {
    id: "sched_b_interest",
    name: "Interest entries",
    page: 1,
    type: "repeating_group",
    bounds: { x: 50, y: 100, width: 400, height: 80 },
    repeatingGroupConfig: {
      maxRows: 3,
      rowStride: 15,
      columns: [
        { key: "bank", xOffset: 0, width: 250 },
        {
          key: "amount",
          xOffset: 260,
          width: 100,
          formatting: { formatter: "currency" },
        },
      ],
    },
  };

  describe("compileText", () => {
    it("should compile text instruction and format value", () => {
      const res = compileText(textField, "jane doe", {});
      expect(res).toHaveLength(1);
      expect(res[0]?.type).toBe("text");
      expect(res[0]?.text).toBe("JANE DOE");
      expect(res[0]?.fieldId).toBe("name_field");
    });

    it("should return empty array when value is null or empty", () => {
      expect(compileText(textField, null, {})).toHaveLength(0);
      expect(compileText(textField, "", {})).toHaveLength(0);
    });
  });

  describe("compileRepeatingGroup", () => {
    it("should compile tabular rows into individual text instructions", () => {
      const data = [
        { bank: "Chase", amount: 150 },
        { bank: "Wells Fargo", amount: 350.75 },
      ];

      const res = compileRepeatingGroup(repeatingField, data, {});
      expect(res).toHaveLength(4);
      expect(res[0]?.fieldId).toBe("sched_b_interest_row0_bank");
      expect(res[0]?.text).toBe("Chase");
      expect(res[1]?.fieldId).toBe("sched_b_interest_row0_amount");
      expect(res[1]?.text).toBe("150.00");
      expect(res[2]?.fieldId).toBe("sched_b_interest_row1_bank");
      expect(res[2]?.text).toBe("Wells Fargo");
      expect(res[3]?.fieldId).toBe("sched_b_interest_row1_amount");
      expect(res[3]?.text).toBe("350.75");
    });
  });
});
