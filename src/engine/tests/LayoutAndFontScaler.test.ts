import { describe, it, expect } from "vitest";
import {
  calculateCombCells,
  calculateFittingFontSize,
  toPdfCoordinates,
} from "../layout.ts";

describe("Layout and Geometry", () => {
  describe("CombLayoutCalculator", () => {
    it("should generate exact cell positions for a 9-digit SSN comb", () => {
      const container = { x: 100, y: 50, width: 90, height: 15 };
      const config = {
        cellCount: 9,
        pitch: 10,
        cellWidth: 10,
        alignment: "left" as const,
      };
      const cells = calculateCombCells(container, config, "123456789");

      expect(cells).toHaveLength(9);
      expect(cells[0]?.char).toBe("1");
      expect(cells[0]?.bounds.x).toBe(100);
      expect(cells[8]?.char).toBe("9");
      expect(cells[8]?.bounds.x).toBe(180);
    });
  });

  describe("FontScaler", () => {
    it("should maintain base font size if text fits", () => {
      const bounds = { x: 0, y: 0, width: 200, height: 15 };
      const fontSize = calculateFittingFontSize("Short text", bounds, {
        fontSize: 10,
        minFontSize: 6,
      });
      expect(fontSize).toBe(10);
    });

    it("should auto-shrink font size if text exceeds width", () => {
      const bounds = { x: 0, y: 0, width: 50, height: 15 };
      const longText =
        "A very very long taxpayer name that exceeds standard width";
      const fontSize = calculateFittingFontSize(longText, bounds, {
        fontSize: 10,
        minFontSize: 6,
      });
      expect(fontSize).toBeLessThan(10);
      expect(fontSize).toBeGreaterThanOrEqual(6);
    });
  });

  describe("CoordinateTransformer", () => {
    it("should convert top-left coordinates to PDF bottom-left coordinates", () => {
      const bounds = { x: 50, y: 100, width: 200, height: 20 };
      const pageHeight = 792;
      const pdfBounds = toPdfCoordinates(bounds, pageHeight);

      expect(pdfBounds.x).toBe(50);
      expect(pdfBounds.y).toBe(792 - 100 - 20); // 672
      expect(pdfBounds.width).toBe(200);
      expect(pdfBounds.height).toBe(20);
    });
  });
});
