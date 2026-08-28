# U.S. Tax Form Field Annotation Specification & React/TypeScript Engine

A complete, production-grade specification, JSON Schema, TypeScript type system, and modular reference engine for annotating and printing values onto U.S. tax forms (e.g. IRS Form 1040, W-2).

> 🚀 **Quick Jump**: See the complete [Step-by-Step Data Processing Pipeline (Mermaid Flowchart)](https://github.com/kumaratul60/instead-tech/blob/main/SPECIFICATION.md#5-step-by-step-data-processing-pipeline) in [`SPECIFICATION.md`](https://github.com/kumaratul60/instead-tech/blob/main/SPECIFICATION.md).

---

## Key Features

- **Standardized Coordinate System**: PDF Points ($1/72$ inch, $72\text{ DPI}$) with Top-Left origin $(0,0)$ and native PDF Bottom-Left coordinate transformation formulas.
- **Rich Field Type Support**:
  - `text` / `numeric`: standard text and currency lines with auto-font-scaling (`FontScaler`) to prevent box overflow.
  - `comb`: segmented character-by-character boxes with pitch and gap calculation (SSN 9-cell combs, EIN, Routing/Account numbers).
  - `checkbox` / `radio_group`: booleans and single-select options with customizable glyphs (`X`, `✓`, `■`).
  - `split_amount`: separated dollar and cent boxes for standard IRS tax lines.
  - `repeating_group`: tabular grids for multi-item schedules (Schedule B interest, W-2 state lines).
- **Deep Nested Data Binding**: JSONPath and dot-notation resolution (`$.primaryTaxpayer.ssn`, `$.income.w2s[0].wages`, `$.income.w2s[*].wages`) with fallback values and conditional rules (`condition.show_if`).
- **Clean Architecture & SRP**:
  - Constants isolated in `src/constants/`
  - Types & Interfaces in `src/types/`
  - Pure Single-Responsibility Engine modules in `src/engine/` (`resolver.ts`, `formatters.ts`, `layout.ts`, `compiler.ts`, `renderers.ts`)
  - Modular React Studio in `src/components/studio/` and Universal Overlay in `src/components/ReactTaxFormOverlay.tsx`
- **Interactive Studio UI**: Light/Dark theme support, responsive auto-fit zoom for small screens/mobile, and live side-by-side JSON editor with recompile.
- **Transparent Data Overlay Layer**: Designed to sit directly on top of pre-printed official IRS Form PDF/SVG/PNG templates, positioning values with exact $(x,y)$ point coordinates for Page 1 (Identity, Status, Wages, Total Income) and Page 2 (Withholding, Payments, Refunds, Routing/Account combs, Signatures).

---

## Development Scripts

| Command                  | Purpose                                                                     |
| :----------------------- | :-------------------------------------------------------------------------- |
| **`npm run dev`**        | Starts the interactive Tax Form Studio with Vite at `http://localhost:3000` |
| **`npm test`**           | Runs the 52 automated Vitest + React Testing Library unit & DOM tests       |
| **`npm run test:watch`** | Starts Vitest in interactive watch mode                                     |
| **`npm run typecheck`**  | Validates TypeScript types using `tsc --noEmit`                             |
| **`npm run format`**     | Checks code formatting with Prettier                                        |
| **`npm run format:fix`** | Automatically formats all TypeScript and JSON files with Prettier           |
| **`npm run validate`**   | Runs full CI verification pipeline (`typecheck` + `test`)                   |

---

## File Structure

```
├── SPECIFICATION.md                     # Complete unified specification & architecture manual
├── schema/
│   └── tax-form-annotation.schema.json  # Validatable JSON Schema (Draft 7 / 2020-12)
├── examples/
│   ├── form-1040-2025.annotation.json   # Full IRS Form 1040 layout annotation
│   └── taxpayer-data.sample.json        # Deeply nested realistic taxpayer return payload
├── src/
│   ├── constants/                       # Page, field, font, and formatter constants
│   ├── types/                           # TypeScript interfaces & types
│   ├── styles/                          # Studio Light/Dark and Print stylesheets
│   ├── engine/
│   │   ├── resolver.ts                  # PathResolver (JSONPath) & ConditionEvaluator
│   │   ├── layout.ts                    # CoordinateTransformer, CombLayoutCalculator, FontScaler
│   │   ├── tests/                       # Engine-level unit tests
│   │   ├── formatters/                  # formatCurrency, formatSsnEin, formatDate, formatValue
│   │   │   └── tests/                   # Formatter unit tests
│   │   └── compiler/                    # compileCheckbox, compileComb, compileText, etc.
│   │       └── tests/                   # Compiler unit tests
│   ├── components/                      # Modular React Components (TSX)
│   │   ├── tests/                       # Component contract tests
│   │   ├── studio/                      # StudioHeader, StudioEditorDrawer, StudioPreviewStage
│   │   │   └── tests/                   # Studio component tests
│   │   ├── TaxFormFieldElement.tsx      # Single Unified Instruction Element Renderer
│   │   ├── TaxFormToolbar.tsx           # Toolbar component
│   │   ├── TaxFormPageView.tsx          # Page view component
│   │   └── ReactTaxFormOverlay.tsx      # Universal Overlay Component
│   ├── App.tsx                          # Root Studio App
│   ├── main.tsx                         # Entry point mounting to #root
│   └── index.ts                         # Public Library API
```
