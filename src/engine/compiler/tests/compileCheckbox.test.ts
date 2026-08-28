import { describe, it, expect } from "vitest";
import { compileCheckbox, compileRadioGroup } from "../compileCheckbox.ts";
import type { FieldAnnotation } from "../../../types/schema.ts";

describe("compileCheckbox & compileRadioGroup", () => {
  const checkboxField: FieldAnnotation = {
    id: "chk_test",
    name: "Test Checkbox",
    page: 1,
    type: "checkbox",
    bounds: { x: 10, y: 20, width: 12, height: 12 },
    markSymbol: "X",
  };

  const radioField: FieldAnnotation = {
    id: "status_radio",
    name: "Status",
    page: 1,
    type: "radio_group",
    bounds: { x: 10, y: 10, width: 100, height: 20 },
    radioOptions: [
      {
        label: "Single",
        value: "SINGLE",
        bounds: { x: 10, y: 10, width: 10, height: 10 },
      },
      {
        label: "Married",
        value: "MARRIED",
        bounds: { x: 50, y: 10, width: 10, height: 10 },
      },
    ],
  };

  describe("compileCheckbox", () => {
    it("should return mark instruction when resolved value is truthy", () => {
      const res = compileCheckbox(checkboxField, true, {});
      expect(res).toHaveLength(1);
      expect(res[0]?.type).toBe("mark");
      expect(res[0]?.symbol).toBe("X");
      expect(res[0]?.fieldId).toBe("chk_test");
    });

    it("should return empty array when resolved value is falsy", () => {
      const res = compileCheckbox(checkboxField, false, {});
      expect(res).toHaveLength(0);
    });
  });

  describe("compileRadioGroup", () => {
    it("should return mark instruction for matching selected value", () => {
      const res = compileRadioGroup(radioField, "MARRIED", {});
      expect(res).toHaveLength(1);
      expect(res[0]?.fieldId).toBe("status_radio_MARRIED");
      expect(res[0]?.bounds.x).toBe(50);
    });

    it("should return empty array if no option matches", () => {
      const res = compileRadioGroup(radioField, "OTHER", {});
      expect(res).toHaveLength(0);
    });
  });
});
