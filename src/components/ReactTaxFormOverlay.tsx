import React, { useMemo, useState } from "react";
import { compileFormAnnotation } from "../engine/compiler/index.ts";
import type { FormAnnotationDocument } from "../types/schema.ts";
import { TaxFormPageView } from "./TaxFormPageView.tsx";
import { TaxFormToolbar } from "./TaxFormToolbar.tsx";

export interface ReactTaxFormOverlayProps {
  /** Form annotation specification document */
  document: FormAnnotationDocument;
  /** Taxpayer data payload */
  data: unknown;
  /** Background image or template URL for each page (keyed by pageNumber) */
  backgroundImages?: Record<number, string>;
  /** Initial debug bounding box visibility */
  initialShowDebug?: boolean;
  /** Scale factor for preview rendering */
  scale?: number;
  /** Callback when a field box is clicked in preview mode */
  onFieldClick?: (fieldId: string) => void;
}

export const ReactTaxFormOverlay: React.FC<ReactTaxFormOverlayProps> = ({
  document: doc,
  data,
  backgroundImages = {},
  initialShowDebug = false,
  scale = 1.0,
  onFieldClick,
}) => {
  const [showDebug, setShowDebug] = useState(initialShowDebug);
  const [currentPage, setCurrentPage] = useState(1);

  // Compile instructions using pure compileFormAnnotation
  const compiledResult = useMemo(() => {
    return compileFormAnnotation(doc, data);
  }, [doc, data]);

  const activePage =
    compiledResult.pages.find((p) => p.pageNumber === currentPage) ||
    compiledResult.pages[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="tax-form-overlay-root">
      <TaxFormToolbar
        formTitle={doc.formTitle}
        taxYear={doc.taxYear}
        showDebug={showDebug}
        onToggleDebug={setShowDebug}
        currentPage={currentPage}
        totalPages={compiledResult.pages.length}
        onPageChange={setCurrentPage}
        onPrint={handlePrint}
      />

      {activePage && (
        <TaxFormPageView
          page={activePage}
          scale={scale}
          showDebug={showDebug}
          backgroundImageUrl={backgroundImages[activePage.pageNumber]}
          onFieldClick={onFieldClick}
        />
      )}
    </div>
  );
};
