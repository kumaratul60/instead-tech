import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { StudioMobileTabs } from "../StudioMobileTabs.tsx";
import { MOBILE_VIEW_TABS } from "../../../constants/ui-constants.ts";

describe("StudioMobileTabs Component DOM Rendering", () => {
  it("should render mobile view tabs and trigger view change using accessible roles", () => {
    const handleViewChange = vi.fn();

    render(
      <StudioMobileTabs
        activeView={MOBILE_VIEW_TABS.PREVIEW.key}
        onViewChange={handleViewChange}
      />,
    );

    const editorBtn = screen.getByRole("button", {
      name: MOBILE_VIEW_TABS.EDITOR.label,
    });
    expect(editorBtn).toBeInTheDocument();

    fireEvent.click(editorBtn);
    expect(handleViewChange).toHaveBeenCalledWith(MOBILE_VIEW_TABS.EDITOR.key);
  });
});
