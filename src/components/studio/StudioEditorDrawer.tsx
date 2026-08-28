import React from "react";
import { STUDIO_TABS, UI_LABELS } from "../../constants/ui-constants.ts";

export interface StudioEditorDrawerProps {
  activeTab: "data" | "annotation";
  onTabChange: (tab: "data" | "annotation") => void;
  editorValue: string;
  onEditorChange: (val: string) => void;
  statusMessage: string;
  isError: boolean;
  isCollapsed: boolean;
  isMobileHidden: boolean;
  onApply: () => void;
}

export const StudioEditorDrawer: React.FC<StudioEditorDrawerProps> = ({
  activeTab,
  onTabChange,
  editorValue,
  onEditorChange,
  statusMessage,
  isError,
  isCollapsed,
  isMobileHidden,
  onApply,
}) => {
  const sidebarClasses = [
    "studio-sidebar",
    isCollapsed ? "collapsed" : "",
    isMobileHidden ? "mobile-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={sidebarClasses}>
      <div className="tabs-header">
        <button
          className={`tab-btn ${
            activeTab === STUDIO_TABS.TAX_DATA.key ? "active" : ""
          }`}
          onClick={() => onTabChange(STUDIO_TABS.TAX_DATA.key)}
        >
          {STUDIO_TABS.TAX_DATA.label}
        </button>
        <button
          className={`tab-btn ${
            activeTab === STUDIO_TABS.ANNOTATION_SPEC.key ? "active" : ""
          }`}
          onClick={() => onTabChange(STUDIO_TABS.ANNOTATION_SPEC.key)}
        >
          {STUDIO_TABS.ANNOTATION_SPEC.label}
        </button>
      </div>

      <div className="editor-wrapper">
        <textarea
          className="studio-json-editor"
          value={editorValue}
          onChange={(e) => onEditorChange(e.target.value)}
          spellCheck="false"
        />
      </div>

      <div className="sidebar-footer">
        <div
          className={`status-label ${
            isError ? "error" : statusMessage ? "success" : ""
          }`}
        >
          {statusMessage}
        </div>
        <button className="apply-btn" onClick={onApply}>
          {UI_LABELS.APPLY_CHANGES}
        </button>
      </div>
    </aside>
  );
};
