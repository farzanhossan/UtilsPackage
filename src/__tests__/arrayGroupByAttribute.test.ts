import { ArrayGroupByAttribute } from "../index"; // Replace with the correct import path

interface Person {
  id: number;
  name: string;
  age: number;
}

const people: Person[] = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "Dave", age: 25 },
];

describe("ArrayGroupByAttribute", () => {
  it("groups an array of objects by the provided attribute", () => {
    const result = ArrayGroupByAttribute(people, "age");

    // Check if the result is as expected
    expect(result).toEqual({
      "25": [
        { id: 2, name: "Bob", age: 25 },
        { id: 4, name: "Dave", age: 25 },
      ],
      "30": [
        { id: 1, name: "Alice", age: 30 },
        { id: 3, name: "Charlie", age: 30 },
      ],
    });
  });

  it("throws an error if the input is not an array", () => {
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(() => ArrayGroupByAttribute("invalidInput", "age")).toThrow(
      "ArrayGroupByAttribute ~ Expected an array."
    );
  });

  it("throws an error if an invalid attribute is provided", () => {
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(() => ArrayGroupByAttribute(people, 123)).toThrow(
      "ArrayGroupByAttribute ~ Invalid attribute provided."
    );
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(() => ArrayGroupByAttribute(people, "invalidAttribute")).toThrow(
      "ArrayGroupByAttribute ~ Invalid attribute provided."
    );
  });
});
