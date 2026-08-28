import React from "react";
import type { RenderInstruction } from "../types/rendering.ts";
import type { BoundingBox } from "../types/schema.ts";

export interface TaxFormFieldElementProps {
  instruction: RenderInstruction;
  scale?: number;
  showDebug?: boolean;
  onClick?: (fieldId: string) => void;
}

export const TaxFormFieldElement: React.FC<TaxFormFieldElementProps> = ({
  instruction,
  scale = 1.0,
  showDebug = false,
  onClick,
}) => {
  const handleClick = onClick ? () => onClick(instruction.fieldId) : undefined;

  const toBoxStyle = (
    bounds: BoundingBox,
    fontSize = 12,
  ): React.CSSProperties => ({
    left: `${bounds.x * scale}px`,
    top: `${bounds.y * scale}px`,
    width: `${bounds.width * scale}px`,
    height: `${bounds.height * scale}px`,
    fontSize: `${fontSize * scale}px`,
  });

  const getClassName = (typeClass = "", isComb = false) =>
    [
      "tax-field",
      typeClass,
      showDebug ? (isComb ? "debug-comb" : "debug-box") : "",
      onClick ? "clickable" : "",
    ]
      .filter(Boolean)
      .join(" ");

  switch (instruction.type) {
    case "text": {
      const { bounds, text, calculatedFontSize, styling } = instruction;
      return (
        <div
          id={instruction.fieldId}
          className={getClassName(`align-${styling.textAlign || "left"}`)}
          onClick={handleClick}
          title={`${instruction.fieldId}: ${text}`}
          style={toBoxStyle(bounds, calculatedFontSize)}
        >
          {text}
        </div>
      );
    }

    case "comb_cells": {
      const { cells, calculatedFontSize } = instruction;
      return (
        <div id={instruction.fieldId}>
          {cells.map((cell) => (
            <div
              key={`${instruction.fieldId}_cell_${cell.cellIndex}`}
              className={getClassName("align-center", true)}
              onClick={handleClick}
              style={toBoxStyle(cell.bounds, calculatedFontSize)}
            >
              {cell.char}
            </div>
          ))}
        </div>
      );
    }

    case "mark": {
      const { bounds, symbol, styling } = instruction;
      return (
        <div
          id={instruction.fieldId}
          className={getClassName("mark")}
          onClick={handleClick}
          style={toBoxStyle(bounds, styling.fontSize || 12)}
        >
          {symbol}
        </div>
      );
    }

    case "split_amount": {
      const { dollars, cents, dollarsBounds, centsBounds, calculatedFontSize } =
        instruction;
      return (
        <div id={instruction.fieldId} onClick={handleClick}>
          <div
            className={getClassName("align-right")}
            style={toBoxStyle(dollarsBounds, calculatedFontSize)}
          >
            {dollars}
          </div>
          <div
            className={getClassName("align-center")}
            style={toBoxStyle(centsBounds, calculatedFontSize)}
          >
            {cents}
          </div>
        </div>
      );
    }
  }
};
