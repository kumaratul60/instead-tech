import { describe, it, expect } from "vitest";
import { segmentCombCharacters } from "../segmentCombCharacters.ts";

describe("segmentCombCharacters", () => {
  it("should segment characters into array for left alignment", () => {
    const cells = segmentCombCharacters("123", 5, "left");
    expect(cells).toEqual(["1", "2", "3", "", ""]);
  });

  it("should segment characters into array for right alignment", () => {
    const cells = segmentCombCharacters("123", 5, "right");
    expect(cells).toEqual(["", "", "1", "2", "3"]);
  });

  it("should center segment characters", () => {
    const cells = segmentCombCharacters("AB", 4, "center");
    expect(cells).toEqual(["", "A", "B", ""]);
  });
});
