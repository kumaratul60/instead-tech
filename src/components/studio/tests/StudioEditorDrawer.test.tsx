import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { StudioEditorDrawer } from "../StudioEditorDrawer.tsx";
import { STUDIO_TABS, UI_LABELS } from "../../../constants/ui-constants.ts";

describe("StudioEditorDrawer Component DOM Rendering", () => {
  it("should switch tabs, allow editing textarea, and apply changes using accessible roles", () => {
    const handleTabChange = vi.fn();
    const handleEditorChange = vi.fn();
    const handleApply = vi.fn();

    render(
      <StudioEditorDrawer
        activeTab={STUDIO_TABS.TAX_DATA.key}
        onTabChange={handleTabChange}
        editorValue='{"firstName": "John"}'
        onEditorChange={handleEditorChange}
        statusMessage={UI_LABELS.READY_STATUS}
        isError={false}
        isCollapsed={false}
        isMobileHidden={false}
        onApply={handleApply}
      />,
    );

    expect(screen.getByText(STUDIO_TABS.TAX_DATA.label)).toBeInTheDocument();
    expect(screen.getByText(UI_LABELS.READY_STATUS)).toBeInTheDocument();

    const annotationTab = screen.getByRole("button", {
      name: STUDIO_TABS.ANNOTATION_SPEC.label,
    });
    fireEvent.click(annotationTab);
    expect(handleTabChange).toHaveBeenCalledWith(
      STUDIO_TABS.ANNOTATION_SPEC.key,
    );

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: '{"firstName": "Jane"}' } });
    expect(handleEditorChange).toHaveBeenCalledWith('{"firstName": "Jane"}');

    const applyBtn = screen.getByRole("button", {
      name: UI_LABELS.APPLY_CHANGES,
    });
    fireEvent.click(applyBtn);
    expect(handleApply).toHaveBeenCalled();
  });
});
