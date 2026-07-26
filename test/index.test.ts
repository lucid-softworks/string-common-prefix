import { describe, expect, it } from "vitest";

import { commonPrefix } from "../src/index.js";

describe("commonPrefix", () => {
  it("finds a shared prefix", () => {
    expect(commonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  it("handles no common text, empty input, and one value", () => {
    expect(commonPrefix(["a", "b"])).toBe("");
    expect(commonPrefix([])).toBe("");
    expect(commonPrefix(["only"])).toBe("only");
  });
});
