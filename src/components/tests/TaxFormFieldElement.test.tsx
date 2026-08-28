import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaxFormFieldElement } from "../TaxFormFieldElement.tsx";
import type {
  TextRenderInstruction,
  MarkRenderInstruction,
  CombRenderInstruction,
} from "../../types/rendering.ts";

describe("TaxFormFieldElement Component DOM Rendering", () => {
  it("should render text instruction in DOM and handle click events", () => {
    const handleClick = vi.fn();
    const instruction: TextRenderInstruction = {
      fieldId: "f1040_first_name",
      pageNumber: 1,
      type: "text",
      text: "ALEXANDER",
      bounds: { x: 50, y: 100, width: 200, height: 16 },
      calculatedFontSize: 10,
      styling: { textAlign: "left" },
      rawBounds: { x: 50, y: 100, width: 200, height: 16 },
    };

    render(
      <TaxFormFieldElement
        instruction={instruction}
        scale={1.0}
        showDebug={true}
        onClick={handleClick}
      />,
    );

    const el = screen.getByText("ALEXANDER");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("tax-field", "align-left", "debug-box", "clickable");
    expect(el).toHaveStyle({
      left: "50px",
      top: "100px",
      width: "200px",
      height: "16px",
      fontSize: "10px",
    });

    fireEvent.click(el);
    expect(handleClick).toHaveBeenCalledWith("f1040_first_name");
  });

  it("should render comb character cells in DOM", () => {
    const instruction: CombRenderInstruction = {
      fieldId: "f1040_ssn",
      pageNumber: 1,
      type: "comb_cells",
      cells: [
        {
          char: "1",
          cellIndex: 0,
          bounds: { x: 10, y: 20, width: 10, height: 14 },
        },
        {
          char: "2",
          cellIndex: 1,
          bounds: { x: 20, y: 20, width: 10, height: 14 },
        },
      ],
      calculatedFontSize: 10,
      styling: {},
      rawBounds: { x: 10, y: 20, width: 20, height: 14 },
    };

    render(
      <TaxFormFieldElement
        instruction={instruction}
        scale={1.0}
        showDebug={true}
      />,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should render mark instruction symbol in DOM", () => {
    const instruction: MarkRenderInstruction = {
      fieldId: "f1040_single_check",
      pageNumber: 1,
      type: "mark",
      symbol: "X",
      bounds: { x: 15, y: 25, width: 12, height: 12 },
      checked: true,
      styling: {},
      rawBounds: { x: 15, y: 25, width: 12, height: 12 },
    };

    render(
      <TaxFormFieldElement
        instruction={instruction}
        scale={1.0}
        showDebug={false}
      />,
    );

    const markEl = screen.getByText("X");
    expect(markEl).toBeInTheDocument();
    expect(markEl).toHaveClass("tax-field", "mark");
  });
});
