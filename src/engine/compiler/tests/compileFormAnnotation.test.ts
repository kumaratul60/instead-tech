import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compileFormAnnotation } from "../compileFormAnnotation.ts";
import type { FormAnnotationDocument } from "../../../types/schema.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("compileFormAnnotation End-to-End", () => {
  const annotationPath = path.resolve(
    __dirname,
    "../../../../examples/form-1040-2025.annotation.json",
  );
  const sampleDataPath = path.resolve(
    __dirname,
    "../../../../examples/taxpayer-data.sample.json",
  );

  const annotationDoc: FormAnnotationDocument = JSON.parse(
    fs.readFileSync(annotationPath, "utf8"),
  );
  const taxpayerData = JSON.parse(fs.readFileSync(sampleDataPath, "utf8"));

  it("should successfully compile complete Form 1040 specification document", () => {
    const result = compileFormAnnotation(annotationDoc, taxpayerData);

    expect(result.formId).toBe("IRS-1040-2025");
    expect(result.taxYear).toBe(2025);
    expect(result.pages).toHaveLength(2);
    expect(result.renderedFieldsCount).toBeGreaterThan(10);

    const page1 = result.pages[0];
    const page2 = result.pages[1];

    expect(page1).toBeDefined();
    expect(page2).toBeDefined();
    expect(page1?.pageNumber).toBe(1);
    expect(page2?.pageNumber).toBe(2);

    const nameInst = page1?.instructions.find(
      (i) => i.fieldId === "f1040_p1_taxpayer_first_name",
    );
    expect(nameInst).toBeDefined();
    expect(nameInst?.type).toBe("text");
    if (nameInst?.type === "text") {
      expect(nameInst.text).toBe("ALEXANDER");
    }
  });
});
