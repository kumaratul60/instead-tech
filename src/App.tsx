import React, { useState, useEffect, useMemo, useCallback } from "react";
import type { FormAnnotationDocument } from "./types/schema.ts";
import { compileFormAnnotation } from "./engine/compiler/index.ts";
import { StudioHeader } from "./components/studio/StudioHeader.tsx";
import { StudioMobileTabs } from "./components/studio/StudioMobileTabs.tsx";
import { StudioEditorDrawer } from "./components/studio/StudioEditorDrawer.tsx";
import { StudioPreviewStage } from "./components/studio/StudioPreviewStage.tsx";
import {
  STUDIO_TABS,
  MOBILE_VIEW_TABS,
  UI_LABELS,
  ZOOM_OPTIONS,
} from "./constants/ui-constants.ts";
import "./styles/studio.css";

export const App: React.FC = () => {
  const [annotation, setAnnotation] = useState<FormAnnotationDocument | null>(
    null,
  );
  const [taxData, setTaxData] = useState<unknown | null>(null);
  const [activeTab, setActiveTab] = useState<"data" | "annotation">(
    STUDIO_TABS.TAX_DATA.key,
  );
  const [editorText, setEditorText] = useState<string>("");
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

  // Load initial sample files with abort safety
  useEffect(() => {
    const abortController = new AbortController();

    async function loadSamples() {
      try {
        const [annRes, dataRes] = await Promise.all([
          fetch("/examples/form-1040-2025.annotation.json", {
            signal: abortController.signal,
          }),
          fetch("/examples/taxpayer-data.sample.json", {
            signal: abortController.signal,
          }),
        ]);
        const annJson = await annRes.json();
        const dataJson = await dataRes.json();

        if (!abortController.signal.aborted) {
          setAnnotation(annJson);
          setTaxData(dataJson);
          setEditorText(JSON.stringify(dataJson, null, 2));
        }
      } catch (err: unknown) {
        if (!abortController.signal.aborted) {
          setStatusMessage(`Load Error: ${(err as Error).message}`);
          setIsError(true);
        }
      }
    }

    loadSamples();

    return () => {
      abortController.abort();
    };
  }, []);

  // Compute Auto-Fit Scale
  const calculateAutoZoom = useCallback(() => {
    const container = document.getElementById("preview-stage-container");
    if (!container) return;
    const availableWidth = container.clientWidth - 32;
    const pageWidthPt = 612;
    const scale = Math.min(1.2, Math.max(0.3, availableWidth / pageWidthPt));
    setEffectiveScale(scale);
  }, []);

  useEffect(() => {
    if (zoomSelection === "auto") {
      calculateAutoZoom();
    } else {
      setEffectiveScale(parseFloat(zoomSelection));
    }
  }, [zoomSelection, calculateAutoZoom, isSidebarCollapsed, mobileView]);

  useEffect(() => {
    function handleResize() {
      if (zoomSelection === "auto") {
        calculateAutoZoom();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoomSelection, calculateAutoZoom]);

  // Tab switching
  const handleTabChange = useCallback(
    (tab: "data" | "annotation") => {
      setActiveTab(tab);
      if (tab === STUDIO_TABS.TAX_DATA.key) {
        setEditorText(JSON.stringify(taxData, null, 2));
      } else {
        setEditorText(JSON.stringify(annotation, null, 2));
      }
    },
    [taxData, annotation],
  );

  // Compile instructions via FormAnnotationCompiler
  const compiledResult = useMemo(() => {
    if (!annotation || !taxData) return null;
    return compileFormAnnotation(annotation, taxData);
  }, [annotation, taxData]);

  // Apply Changes from Textarea
  const handleApplyChanges = useCallback(() => {
    try {
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
  }, [editorText, activeTab]);

  // Toggle Theme
  const handleToggleTheme = useCallback(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
  }, []);

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
