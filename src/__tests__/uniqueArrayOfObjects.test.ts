import { UniqueArrayOfObjects } from "../index";

describe("UniqueArrayOfObjects", () => {
  it("should return an empty array for an empty input array", () => {
    const inputArray: any[] = [];
    const result = UniqueArrayOfObjects(inputArray, "attr");
    expect(result).toEqual([]);
  });

  it("should return the same array if all elements have unique values for the given attribute", () => {
    const inputArray = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const result = UniqueArrayOfObjects(inputArray, "id");
    expect(result).toEqual(inputArray);
  });

  it("should return an array with duplicate values removed based on the given attribute", () => {
    const inputArray = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Charlie" },
      { id: 3, name: "David" },
      { id: 2, name: "Eve" },
    ];
    const expectedArray = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "David" },
    ];
    const result = UniqueArrayOfObjects(inputArray, "id");
    expect(result).toEqual(expectedArray);
  });

  it("should handle arrays with non-object elements", () => {
    const inputArray = [1, 2, 3, 2, 4, 1, 5];
    const expectedArray = [1, 2, 3, 4, 5];
    const result = UniqueArrayOfObjects(
      inputArray.map((item) => ({ value: item })),
      "value"
    );
    expect(result).toEqual(expectedArray.map((item) => ({ value: item })));
  });

  it("should throw an error for invalid input array", () => {
    const inputArray = "notAnArray";
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(() => UniqueArrayOfObjects(inputArray, "attr")).toThrowError(
      "UniqueArrayOfObjects ~ Expected an array."
    );
  });
});
