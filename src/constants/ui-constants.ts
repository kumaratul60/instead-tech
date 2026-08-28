/**
 * Centralized UI, Branding, Tooltips, Action Labels & Icon Constants.
 */

export const UI_ICONS = {
  SPEC_EDITOR: "☰",
  THEME_TOGGLE: "🌓",
  RECOMPILE: "⚡",
  PRINT: "🖨️",
} as const;

export const UI_LABELS = {
  STUDIO_TITLE: "Tax Form Studio",
  SPEC_EDITOR_BUTTON: "☰ Spec Editor",
  TOGGLE_EDITOR_TOOLTIP: "Toggle Editor Drawer",
  BOXES_CHECKBOX: "Boxes",
  BOXES_TOOLTIP: "Toggle box outlines",
  THEME_TOGGLE_TOOLTIP: "Switch Light/Dark Mode",
  RECOMPILE_BUTTON: "Recompile",
  PRINT_PDF_BUTTON: "Print / PDF",
  PRINT_OVERLAY_BUTTON: "Print Form Overlay",
  SHOW_ANNOTATION_GUIDES: "Show Annotation Guides",
  PREVIOUS_PAGE: "Previous Page",
  NEXT_PAGE: "Next Page",
  APPLY_CHANGES: "Apply Changes",
  LOADING_FORM: "Loading form...",
  READY_STATUS: "Ready",
  COMPILED_SUCCESS: "Compiled successfully",
} as const;

export const STUDIO_TABS = {
  TAX_DATA: {
    key: "data" as const,
    label: "Tax Data (JSON)",
  },
  ANNOTATION_SPEC: {
    key: "annotation" as const,
    label: "Annotation Spec (JSON)",
  },
} as const;

export const MOBILE_VIEW_TABS = {
  PREVIEW: {
    key: "preview" as const,
    label: "Form Preview",
  },
  EDITOR: {
    key: "editor" as const,
    label: "JSON Spec / Data",
  },
} as const;

export const ZOOM_OPTIONS = [
  { value: "auto", label: "Auto Fit" },
  { value: "0.5", label: "50%" },
  { value: "0.65", label: "65%" },
  { value: "0.75", label: "75%" },
  { value: "1.0", label: "100%" },
  { value: "1.25", label: "125%" },
] as const;
