import { ParseObjectToArray } from "../..";

// Define a valid input object with number values
const validInputObject = {
  age: 25,
  height: 180,
  weight: 75,
};

describe("ParseObjectToArray", () => {
  it("should parse a valid object to an array of name-value pairs", () => {
    const result = ParseObjectToArray(validInputObject);

    expect(result).toEqual([
      { name: "Age", value: 25 },
      { name: "Height", value: 180 },
      { name: "Weight", value: 75 },
    ]);
  });

  it("should handle an empty object", () => {
    const inputObject = {};

    const result = ParseObjectToArray(inputObject);

    expect(result).toEqual([]);
  });

  it("should convert camelCase keys to separate strings", () => {
    const inputObject = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
    };

    const result = ParseObjectToArray(inputObject);

    expect(result).toEqual([
      { name: "First Name", value: "John" },
      { name: "Last Name", value: "Doe" },
      { name: "Date Of Birth", value: "1990-01-01" },
    ]);
  });
});
