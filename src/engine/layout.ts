/**
 * Pure Functional Layout, Geometry, Comb Pitch, and Auto Font Scaling.
 */

import type {
  BoundingBox,
  CombConfiguration,
  TypographyStyle,
} from "../types/schema.ts";
import type { CombCell } from "../types/rendering.ts";
import { segmentCombCharacters } from "./formatters/index.ts";
import { DEFAULT_TYPOGRAPHY } from "../constants/font-constants.ts";

/**
 * Converts top-left coordinates to native PDF bottom-left coordinates.
 */
export function toPdfCoordinates(
  bounds: BoundingBox,
  pageHeight: number,
): BoundingBox {
  return {
    x: bounds.x,
    y: pageHeight - bounds.y - bounds.height,
    width: bounds.width,
    height: bounds.height,
  };
}

/**
 * Calculates exact sub-bounds for each cell in a comb box.
 */
export function calculateCombCells(
  container: BoundingBox,
  config: CombConfiguration,
  value: unknown,
): CombCell[] {
  const {
    cellCount,
    cellWidth = container.width / cellCount,
    pitch = container.width / cellCount,
    alignment = "left",
    segmentGaps = [],
  } = config;

  const chars = segmentCombCharacters(value, cellCount, alignment, true);
  const cells: CombCell[] = [];

  let currentX = container.x;
  let segmentCounter = 0;
  let currentSegmentIndex = 0;

  for (let i = 0; i < cellCount; i++) {
    const cellBounds: BoundingBox = {
      x: currentX,
      y: container.y,
      width: cellWidth,
      height: container.height,
    };

    cells.push({
      char: chars[i] ?? "",
      bounds: cellBounds,
      cellIndex: i,
    });

    currentX += pitch;
    segmentCounter++;

    const targetSegmentSize = segmentGaps[currentSegmentIndex];
    if (
      targetSegmentSize !== undefined &&
      segmentCounter === targetSegmentSize &&
      i < cellCount - 1
    ) {
      currentX += 4; // standard segment gap
      segmentCounter = 0;
      currentSegmentIndex++;
    }
  }

  return cells;
}

/**
 * Auto-calculates optimal font size to prevent text box overflow.
 */
export function calculateFittingFontSize(
  text: string,
  bounds: BoundingBox,
  styling: TypographyStyle,
): number {
  const baseFontSize = styling.fontSize || DEFAULT_TYPOGRAPHY.FONT_SIZE;
  const minFontSize = styling.minFontSize || DEFAULT_TYPOGRAPHY.MIN_FONT_SIZE;

  if (!text || text.length === 0) return baseFontSize;

  const charAspectRatio = 0.6;
  const estimatedWidth = text.length * baseFontSize * charAspectRatio;

  if (estimatedWidth <= bounds.width) {
    return baseFontSize;
  }

  const scaledSize = (bounds.width / (text.length * charAspectRatio)) * 0.95;
  return Math.max(
    minFontSize,
    Math.min(baseFontSize, Math.floor(scaledSize * 10) / 10),
  );
}
