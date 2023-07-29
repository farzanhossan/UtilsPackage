import { IntersectionArray } from "..";

describe("IntersectionArray", () => {
  it("should return the intersection of two number arrays", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    const result = IntersectionArray(array1, array2);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should return the intersection of two string arrays", () => {
    const array1 = ["apple", "banana", "orange"];
    const array2 = ["banana", "grape", "orange"];
    const result = IntersectionArray(array1, array2);
    expect(result).toEqual(["banana", "orange"]);
  });

  it("should handle an empty intersection", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = IntersectionArray(array1, array2);
    expect(result).toEqual([]);
  });

  it("should handle arrays with duplicate elements", () => {
    const array1 = [1, 2, 2, 3, 4, 5];
    const array2 = [3, 3, 4, 4, 5, 5];
    const result = IntersectionArray(array1, array2);
    expect(result).toEqual([3, 4, 5]);
  });

  it("should handle arrays with mixed types", () => {
    const array1 = [1, "two", true, null];
    const array2 = [false, 0, "two", null];
    const result = IntersectionArray(array1, array2);
    expect(result).toEqual(["two", null]);
  });

  it("should throw an error if either input is not an array", () => {
    // @ts-ignore: Testing invalid input for the sake of the test
    expect(() => IntersectionArray([1, 2, 3], "not_an_array")).toThrowError(
      "IntersectionArray ~ Both parameters must be arrays."
    );
    // @ts-ignore: Testing invalid input for the sake of the test
    expect(() => IntersectionArray({}, [4, 5, 6])).toThrowError(
      "IntersectionArray ~ Both parameters must be arrays."
    );
  });
});
