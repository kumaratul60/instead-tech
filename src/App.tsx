import React, { useState, useEffect, useMemo } from "react";
import type { FormAnnotationDocument } from "./types/schema.ts";
import { compileFormAnnotation } from "./engine/compiler/index.ts";
import { StudioHeader } from "./components/studio/StudioHeader.tsx";
import { StudioMobileTabs } from "./components/studio/StudioMobileTabs.tsx";
import { StudioEditorDrawer } from "./components/studio/StudioEditorDrawer.tsx";
import { StudioPreviewStage } from "./components/studio/StudioPreviewStage.tsx";
import defaultAnnotation from "../examples/form-1040-2025.annotation.json" with { type: "json" };
import defaultTaxData from "../examples/taxpayer-data.sample.json" with { type: "json" };
import {
  STUDIO_TABS,
  MOBILE_VIEW_TABS,
  UI_LABELS,
  ZOOM_OPTIONS,
} from "./constants/ui-constants.ts";
import "./styles/studio.css";

export const App: React.FC = () => {
  const [annotation, setAnnotation] = useState<FormAnnotationDocument>(
    defaultAnnotation as unknown as FormAnnotationDocument,
  );
  const [taxData, setTaxData] = useState<unknown>(defaultTaxData);
  const [activeTab, setActiveTab] = useState<"data" | "annotation">(
    STUDIO_TABS.TAX_DATA.key,
  );
  const [editorText, setEditorText] = useState<string>(
    JSON.stringify(defaultTaxData, null, 2),
  );
  const [statusMessage, setStatusMessage] = useState<string>(
    UI_LABELS.READY_STATUS,
  );
  const [isError, setIsError] = useState<boolean>(false);
  const [showDebug, setShowDebug] = useState<boolean>(true);
  const [zoomSelection, setZoomSelection] = useState<string>(
    ZOOM_OPTIONS[0].value,
  );
  const [effectiveScale, setEffectiveScale] = useState<number>(1.0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<"preview" | "editor">(
    MOBILE_VIEW_TABS.PREVIEW.key,
  );

  // Compute Auto-Fit Scale
  const calculateAutoZoom = () => {
    const container = document.getElementById("preview-stage-container");
    if (!container) return;
    const availableWidth = container.clientWidth - 32;
    const pageWidthPt = 612;
    const scale = Math.min(1.2, Math.max(0.3, availableWidth / pageWidthPt));
    setEffectiveScale(scale);
  };

  useEffect(() => {
    if (zoomSelection === "auto") {
      calculateAutoZoom();
    } else {
      setEffectiveScale(parseFloat(zoomSelection));
    }
  }, [zoomSelection, isSidebarCollapsed, mobileView]);

  useEffect(() => {
    function handleResize() {
      if (zoomSelection === "auto") {
        calculateAutoZoom();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoomSelection]);

  // Tab switching
  const handleTabChange = (tab: "data" | "annotation") => {
    setActiveTab(tab);
    if (tab === STUDIO_TABS.TAX_DATA.key) {
      setEditorText(JSON.stringify(taxData, null, 2));
    } else {
      setEditorText(JSON.stringify(annotation, null, 2));
    }
  };

  // Compile instructions via pure compileFormAnnotation (useMemo used only for heavy calculation)
  const compiledResult = useMemo(() => {
    if (!annotation || !taxData) return null;
    return compileFormAnnotation(annotation, taxData);
  }, [annotation, taxData]);

  // Apply Changes from Textarea
  const handleApplyChanges = () => {
    try {
      if (!editorText.trim()) {
        setIsError(true);
        setStatusMessage("Error: JSON input cannot be empty");
        return;
      }
      const parsed = JSON.parse(editorText);
      if (activeTab === STUDIO_TABS.TAX_DATA.key) {
        setTaxData(parsed);
      } else {
        setAnnotation(parsed);
      }
      setIsError(false);
      setStatusMessage(UI_LABELS.COMPILED_SUCCESS);
    } catch (err: unknown) {
      setIsError(true);
      setStatusMessage(`JSON Error: ${(err as Error).message}`);
    }
  };

  // Toggle Theme
  const handleToggleTheme = () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="app-root">
      <StudioHeader
        formId={annotation?.formId || "IRS-1040-2025"}
        taxYear={annotation?.taxYear || 2025}
        showDebug={showDebug}
        onToggleDebug={setShowDebug}
        zoomScale={zoomSelection}
        onZoomChange={setZoomSelection}
        onToggleTheme={handleToggleTheme}
        onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
        onRecompile={handleApplyChanges}
        onPrint={() => window.print()}
      />

      <StudioMobileTabs activeView={mobileView} onViewChange={setMobileView} />

      <div className="studio-main-container">
        <StudioEditorDrawer
          activeTab={activeTab}
          onTabChange={handleTabChange}
          editorValue={editorText}
          onEditorChange={setEditorText}
          statusMessage={statusMessage}
          isError={isError}
          isCollapsed={isSidebarCollapsed}
          isMobileHidden={mobileView === MOBILE_VIEW_TABS.PREVIEW.key}
          onApply={handleApplyChanges}
        />

        <StudioPreviewStage
          compiledResult={compiledResult}
          scale={effectiveScale}
          showDebug={showDebug}
          isMobileHidden={mobileView === MOBILE_VIEW_TABS.EDITOR.key}
        />
      </div>
    </div>
  );
};
