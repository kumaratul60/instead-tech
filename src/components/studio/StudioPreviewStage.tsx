import React from "react";
import type { CompiledFormResult } from "../../types/rendering.ts";
import { TaxFormPageView } from "../TaxFormPageView.tsx";
import { UI_LABELS } from "../../constants/ui-constants.ts";

export interface StudioPreviewStageProps {
  compiledResult: CompiledFormResult | null;
  scale: number;
  showDebug: boolean;
  isMobileHidden: boolean;
  backgroundImages?: Record<number, string>;
  onFieldClick?: (fieldId: string) => void;
}

export const StudioPreviewStage: React.FC<StudioPreviewStageProps> = ({
  compiledResult,
  scale,
  showDebug,
  isMobileHidden,
  backgroundImages = {},
  onFieldClick,
}) => {
  if (!compiledResult) {
    return <div className="studio-preview-stage">{UI_LABELS.LOADING_FORM}</div>;
  }

  const stageClasses = [
    "studio-preview-stage",
    isMobileHidden ? "mobile-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stageClasses} id="preview-stage-container">
      {compiledResult.pages.map((page) => (
        <div
          key={`page_wrapper_${page.pageNumber}`}
          className="page-scale-wrapper"
          style={{
            transform: `scale(${scale})`,
            marginBottom: `${page.height * (scale - 1)}px`,
          }}
        >
          <div
            className="page-sheet"
            style={{
              width: `${page.width}pt`,
              height: `${page.height}pt`,
            }}
          >
            <div className="page-watermark">
              Page {page.pageNumber} ({compiledResult.formId})
            </div>
            <TaxFormPageView
              page={page}
              scale={1.0}
              showDebug={showDebug}
              backgroundImageUrl={backgroundImages[page.pageNumber]}
              onFieldClick={onFieldClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
