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
  return (
    <div
      className="page-viewport"
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
          onClick={onFieldClick}
        />
      ))}
    </div>
  );
};
