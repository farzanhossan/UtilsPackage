import { ExcludeArray } from "..";

describe("ExcludeArray", () => {
  it("should exclude elements from array2 in array1", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 4];
    const expectedOutput = [1, 3, 5];

    const result = ExcludeArray(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle arrays with duplicate elements", () => {
    const array1 = [1, 2, 2, 3, 4, 5, 5];
    const array2 = [2, 4];
    const expectedOutput = [1, 3, 5, 5]; // Note that 5 is still present because only one 5 is removed

    const result = ExcludeArray(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle arrays with different types", () => {
    const array1 = [1, "two", true, { name: "John" }];
    const array2 = [true, 3];
    const expectedOutput = [1, "two", { name: "John" }];

    const result = ExcludeArray(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty array if array1 is empty", () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3];
    const expectedOutput: number[] = [];

    const result = ExcludeArray(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  it("should return array1 if array2 is empty", () => {
    const array1 = [1, 2, 3];
    const array2: number[] = [];
    const expectedOutput = [1, 2, 3];

    const result = ExcludeArray(array1, array2);

    expect(result).toEqual(expectedOutput);
  });

  it("should throw an error if either input is not an array", () => {
    const array1 = [1, 2, 3];
    const array2: any = "notAnArray";

    expect(() => ExcludeArray(array1, array2)).toThrow();
  });
});
