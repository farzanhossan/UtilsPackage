import { UniqueArray } from "..";

describe("UniqueArray utility function", () => {
  it("should return an array with unique elements", () => {
    const numberArray = [1, 2, 3, 3, 4, 5];
    const uniqueNumbers = UniqueArray(numberArray);
    expect(uniqueNumbers).toEqual([1, 2, 3, 4, 5]);

    const stringArray = ["apple", "banana", "orange", "banana"];
    const uniqueStrings = UniqueArray(stringArray);
    expect(uniqueStrings).toEqual(["apple", "banana", "orange"]);
  });

  it("should return an empty array when given an empty array", () => {
    const emptyArray: number[] = [];
    const uniqueEmptyArray = UniqueArray(emptyArray);
    expect(uniqueEmptyArray).toEqual([]);
  });

  it("should handle arrays with multiple data types", () => {
    const mixedArray = [1, "apple", 2, "banana", 3, "orange", "apple"];
    const uniqueMixedArray = UniqueArray(mixedArray);
    expect(uniqueMixedArray).toEqual([1, "apple", 2, "banana", 3, "orange"]);
  });

  it("should throw an error if the input is not an array", () => {
    // @ts-ignore: Testing invalid input on purpose
    expect(() => UniqueArray("not an array")).toThrow(
      "UniqueArray ~ Expected an array, instead got string"
    );

    // @ts-ignore: Testing invalid input on purpose
    expect(() => UniqueArray(123)).toThrow(
      "UniqueArray ~ Expected an array, instead got number"
    );
  });
});
