/**
 * Segments characters for comb / character-by-character boxes.
 */
export function segmentCombCharacters(
  value: unknown,
  cellCount: number,
  alignment: "left" | "right" | "center" = "left",
  stripNonDigits: boolean = false,
): string[] {
  if (value === null || value === undefined || value === "") {
    return Array(cellCount).fill("");
  }

  let clean = String(value);
  if (stripNonDigits) clean = clean.replace(/\D/g, "");

  const chars = clean.split("");
  const result: string[] = Array(cellCount).fill("");

  if (alignment === "right") {
    const startIdx = Math.max(0, cellCount - chars.length);
    for (let i = 0; i < chars.length && startIdx + i < cellCount; i++) {
      result[startIdx + i] = chars[i] ?? "";
    }
  } else if (alignment === "center") {
    const startIdx = Math.max(0, Math.floor((cellCount - chars.length) / 2));
    for (let i = 0; i < chars.length && startIdx + i < cellCount; i++) {
      result[startIdx + i] = chars[i] ?? "";
    }
  } else {
    for (let i = 0; i < Math.min(cellCount, chars.length); i++) {
      result[i] = chars[i] ?? "";
    }
  }

  return result;
}
