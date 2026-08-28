import React from "react";
import {
  UI_LABELS,
  UI_ICONS,
  ZOOM_OPTIONS,
} from "../../constants/ui-constants.ts";

export interface StudioHeaderProps {
  formId: string;
  taxYear: number;
  showDebug: boolean;
  onToggleDebug: (show: boolean) => void;
  zoomScale: string;
  onZoomChange: (zoom: string) => void;
  onToggleTheme: () => void;
  onToggleSidebar: () => void;
  onRecompile: () => void;
  onPrint: () => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  formId,
  taxYear,
  showDebug,
  onToggleDebug,
  zoomScale,
  onZoomChange,
  onToggleTheme,
  onToggleSidebar,
  onRecompile,
  onPrint,
}) => {
  return (
    <header className="studio-header">
      <div className="brand-section">
        <button
          className="secondary"
          id="toggle-sidebar-btn"
          title={UI_LABELS.TOGGLE_EDITOR_TOOLTIP}
          onClick={onToggleSidebar}
        >
          {UI_LABELS.SPEC_EDITOR_BUTTON}
        </button>
        <div className="brand-title">{UI_LABELS.STUDIO_TITLE}</div>
        <span className="badge">
          {formId} ({taxYear})
        </span>
      </div>

      <div className="toolbar-section">
        <select
          className="select-control"
          value={zoomScale}
          title="Zoom Scale"
          onChange={(e) => onZoomChange(e.target.value)}
        >
          {ZOOM_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <label className="control-label" title={UI_LABELS.BOXES_TOOLTIP}>
          <input
            type="checkbox"
            checked={showDebug}
            onChange={(e) => onToggleDebug(e.target.checked)}
          />
          <span>{UI_LABELS.BOXES_CHECKBOX}</span>
        </label>

        <button
          className="secondary icon-btn"
          title={UI_LABELS.THEME_TOGGLE_TOOLTIP}
          onClick={onToggleTheme}
        >
          {UI_ICONS.THEME_TOGGLE}
        </button>

        <button className="secondary" onClick={onRecompile}>
          {UI_LABELS.RECOMPILE_BUTTON}
        </button>

        <button onClick={onPrint}>{UI_LABELS.PRINT_PDF_BUTTON}</button>
      </div>
    </header>
  );
};
