import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReactTaxFormOverlay } from "../ReactTaxFormOverlay.tsx";
import type { FormAnnotationDocument } from "../../types/schema.ts";

describe("ReactTaxFormOverlay Component DOM Rendering", () => {
  const dummyDoc: FormAnnotationDocument = {
    schemaVersion: "1.0.0",
    formId: "TEST-1040",
    formTitle: "Test Form 1040",
    taxYear: 2025,
    pageCount: 1,
    pages: [{ pageNumber: 1, width: 612, height: 792, units: "points" }],
    fields: [
      {
        id: "taxpayer_name",
        name: "Taxpayer Name",
        page: 1,
        type: "text",
        bounds: { x: 20, y: 30, width: 150, height: 16 },
        binding: { path: "$.name" },
      },
    ],
  };

  it("should render overlay with compiled taxpayer name field in DOM", () => {
    render(
      <ReactTaxFormOverlay
        document={dummyDoc}
        data={{ name: "JOHNATHAN SMITH" }}
        scale={1.0}
        initialShowDebug={false}
      />,
    );

    expect(screen.getByText(/Test Form 1040/)).toBeInTheDocument();
    expect(screen.getByText("JOHNATHAN SMITH")).toBeInTheDocument();
  });
});
