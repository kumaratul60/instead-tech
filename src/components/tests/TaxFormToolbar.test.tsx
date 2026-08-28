import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaxFormToolbar } from "../TaxFormToolbar.tsx";
import { UI_LABELS } from "../../constants/ui-constants.ts";

describe("TaxFormToolbar Component DOM Rendering", () => {
  it("should render toolbar titles and trigger page / print actions", () => {
    const handlePageChange = vi.fn();
    const handlePrint = vi.fn();
    const handleToggleDebug = vi.fn();

    render(
      <TaxFormToolbar
        formTitle="Form 1040"
        taxYear={2025}
        showDebug={false}
        onToggleDebug={handleToggleDebug}
        currentPage={1}
        totalPages={2}
        onPageChange={handlePageChange}
        onPrint={handlePrint}
      />,
    );

    expect(screen.getByText(/Form 1040/)).toBeInTheDocument();
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();

    const nextBtn = screen.getByText(UI_LABELS.NEXT_PAGE);
    fireEvent.click(nextBtn);
    expect(handlePageChange).toHaveBeenCalledWith(2);

    const printBtn = screen.getByText(UI_LABELS.PRINT_OVERLAY_BUTTON);
    fireEvent.click(printBtn);
    expect(handlePrint).toHaveBeenCalled();

    const debugCheckbox = screen.getByLabelText(
      UI_LABELS.SHOW_ANNOTATION_GUIDES,
    );
    fireEvent.click(debugCheckbox);
    expect(handleToggleDebug).toHaveBeenCalledWith(true);
  });
});
