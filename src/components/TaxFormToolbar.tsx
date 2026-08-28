import React from "react";
import { UI_LABELS } from "../constants/ui-constants.ts";

export interface TaxFormToolbarProps {
  formTitle: string;
  taxYear: number;
  showDebug: boolean;
  onToggleDebug: (show: boolean) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrint: () => void;
}

export const TaxFormToolbar: React.FC<TaxFormToolbarProps> = ({
  formTitle,
  taxYear,
  showDebug,
  onToggleDebug,
  currentPage,
  totalPages,
  onPageChange,
  onPrint,
}) => {
  return (
    <div className="tax-toolbar">
      <span className="tax-toolbar-title">
        {formTitle} ({taxYear})
      </span>

      <div className="tax-toolbar-actions">
        <label className="control-label">
          <input
            type="checkbox"
            checked={showDebug}
            onChange={(e) => onToggleDebug(e.target.checked)}
          />
          <span>{UI_LABELS.SHOW_ANNOTATION_GUIDES}</span>
        </label>

        {totalPages > 1 && (
          <div className="tax-toolbar-pagination">
            <button
              className="secondary tax-toolbar-page-btn"
              disabled={currentPage <= 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              {UI_LABELS.PREVIOUS_PAGE}
            </button>
            <span className="tax-toolbar-page-label">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="secondary tax-toolbar-page-btn"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              {UI_LABELS.NEXT_PAGE}
            </button>
          </div>
        )}

        <button className="tax-toolbar-print-btn" onClick={onPrint}>
          {UI_LABELS.PRINT_OVERLAY_BUTTON}
        </button>
      </div>
    </div>
  );
};
