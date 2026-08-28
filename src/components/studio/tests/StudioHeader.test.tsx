import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { StudioHeader } from "../StudioHeader.tsx";
import { UI_LABELS } from "../../../constants/ui-constants.ts";

describe("StudioHeader Component DOM Rendering", () => {
  it("should render header elements and trigger callbacks", () => {
    const handleRecompile = vi.fn();
    const handlePrint = vi.fn();
    const handleToggleTheme = vi.fn();
    const handleZoomChange = vi.fn();

    render(
      <StudioHeader
        formId="IRS-1040-2025"
        taxYear={2025}
        showDebug={true}
        onToggleDebug={() => {}}
        zoomScale="auto"
        onZoomChange={handleZoomChange}
        onToggleTheme={handleToggleTheme}
        onToggleSidebar={() => {}}
        onRecompile={handleRecompile}
        onPrint={handlePrint}
      />,
    );

    expect(screen.getByText(/IRS-1040-2025/)).toBeInTheDocument();

    const recompileBtn = screen.getByText(UI_LABELS.RECOMPILE_BUTTON);
    fireEvent.click(recompileBtn);
    expect(handleRecompile).toHaveBeenCalled();

    const printBtn = screen.getByText(UI_LABELS.PRINT_PDF_BUTTON);
    fireEvent.click(printBtn);
    expect(handlePrint).toHaveBeenCalled();

    const themeBtn = screen.getByTitle(UI_LABELS.THEME_TOGGLE_TOOLTIP);
    fireEvent.click(themeBtn);
    expect(handleToggleTheme).toHaveBeenCalled();
  });
});
