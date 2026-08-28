import React from "react";
import type { CompiledFormPage } from "../types/rendering.ts";
import { TaxFormFieldElement } from "./TaxFormFieldElement.tsx";

export interface TaxFormPageViewProps {
  page: CompiledFormPage;
  scale: number;
  showDebug: boolean;
  backgroundImageUrl?: string;
  onFieldClick?: (fieldId: string) => void;
}

export const TaxFormPageView: React.FC<TaxFormPageViewProps> = ({
  page,
  scale,
  showDebug,
  backgroundImageUrl,
  onFieldClick,
}) => {
  const handleViewportClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onFieldClick) return;
    const target = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-field-id]",
    );
    if (target?.dataset?.fieldId) {
      onFieldClick(target.dataset.fieldId);
    }
  };

  return (
    <div
      className="page-viewport"
      onClick={onFieldClick ? handleViewportClick : undefined}
      style={{
        width: `${page.width * scale}px`,
        height: `${page.height * scale}px`,
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
      }}
    >
      {page.instructions.map((inst) => (
        <TaxFormFieldElement
          key={inst.fieldId}
          instruction={inst}
          scale={scale}
          showDebug={showDebug}
        />
      ))}
    </div>
  );
};
