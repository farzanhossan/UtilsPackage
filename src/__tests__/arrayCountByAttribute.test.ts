import { ArrayCountByAttribute } from "..";

describe("ArrayCountByAttribute", () => {
  const people = [
    { id: 1, name: "Alice", age: 30, address: { city: "New York" } },
    { id: 2, name: "Bob", age: 25, address: { city: "Los Angeles" } },
    { id: 3, name: "Alice", age: 28, address: { city: "Chicago" } },
    { id: 4, name: "Charlie", age: 30, address: { city: "New York" } },
    { id: 5, name: "Alice", age: 30, address: { city: "Chicago" } },
    { id: 6, age: 22 }, // This object does not have the "name" attribute
  ];

  it("should count occurrences of top-level attribute", () => {
    const result = ArrayCountByAttribute(people, "name");
    expect(result).toEqual({
      alice: 3,
      bob: 1,
      charlie: 1,
    });
  });

  it("should count occurrences of nested attribute using dot notation", () => {
    const result = ArrayCountByAttribute(people, "address.city");
    expect(result).toEqual({
      "new york": 2,
      "los angeles": 1,
      chicago: 2,
    });
  });

  it("should handle nested attributes with missing values", () => {
    const result = ArrayCountByAttribute(people, "address.street");
    expect(result).toEqual({});
  });
  it("should count occurrences of a valid attribute", () => {
    const result = ArrayCountByAttribute(people, "name");
    expect(result).toEqual({
      alice: 3,
      bob: 1,
      charlie: 1,
    });
  });

  it("should throw an error for invalid input", () => {
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(() => ArrayCountByAttribute(null, "name")).toThrowError(
      "Input must be an array."
    );
    expect(() => ArrayCountByAttribute(people, "")).toThrowError(
      "Attribute must be a non-empty string."
    );
  });
});
