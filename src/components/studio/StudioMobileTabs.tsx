import React from "react";
import { MOBILE_VIEW_TABS } from "../../constants/ui-constants.ts";

export interface StudioMobileTabsProps {
  activeView: "preview" | "editor";
  onViewChange: (view: "preview" | "editor") => void;
}

export const StudioMobileTabs: React.FC<StudioMobileTabsProps> = ({
  activeView,
  onViewChange,
}) => {
  return (
    <nav className="mobile-view-tabs">
      <button
        className={`mobile-tab-btn ${
          activeView === MOBILE_VIEW_TABS.PREVIEW.key ? "active" : ""
        }`}
        onClick={() => onViewChange(MOBILE_VIEW_TABS.PREVIEW.key)}
      >
        {MOBILE_VIEW_TABS.PREVIEW.label}
      </button>
      <button
        className={`mobile-tab-btn ${
          activeView === MOBILE_VIEW_TABS.EDITOR.key ? "active" : ""
        }`}
        onClick={() => onViewChange(MOBILE_VIEW_TABS.EDITOR.key)}
      >
        {MOBILE_VIEW_TABS.EDITOR.label}
      </button>
    </nav>
  );
};
