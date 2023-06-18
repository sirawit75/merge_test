import { merge } from "./index";

describe("merge", () => {
  it("should merge correctly", () => {
    const collection_1 = [1, 3, 6];
    const collection_2 = [2, 4, 5];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(merge.merge(collection_1, collection_2)).toEqual(expected);
  });
  it("should merge when one array is empty", () => {
    const collection_1 = [1, 3, 6];
    const collection_2 = [];
    const expected = [1, 3, 6];
    expect(merge.merge(collection_1, collection_2)).toEqual(expected);
  });
  it("should merge when both are empty", () => {
    const collection_1 = [];
    const collection_2 = [];
    const expected = [];
    expect(merge.merge(collection_1, collection_2)).toEqual(expected);
  });
});
