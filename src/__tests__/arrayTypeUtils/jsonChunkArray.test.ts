import { JsonChunkArray } from "../..";

describe("JsonChunkArray", () => {
  it("should chunk the array correctly with generic type", () => {
    // Test input
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunkSize = 3;

    // Expected output
    const expectedOutput = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

    // Call the utility function
    const result = JsonChunkArray(inputArray, chunkSize);

    // Assertion
    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty array for empty input", () => {
    // Test input
    const inputArray: number[] = [];
    const chunkSize = 5;

    // Expected output
    const expectedOutput: number[][] = [];

    // Call the utility function
    const result = JsonChunkArray(inputArray, chunkSize);

    // Assertion
    expect(result).toEqual(expectedOutput);
  });

  it("should throw an error for invalid input", () => {
    // Test input with invalid array (not an array)
    const invalidArray: any = "not an array";
    const chunkSize = 2;

    // Call the utility function and expect it to throw an error
    expect(() => JsonChunkArray(invalidArray, chunkSize)).toThrow(
      "JsonChunkArray ~ Invalid input: array should be an array and dataPerChunk should be a positive integer."
    );

    // Test input with invalid chunk size (not a positive integer)
    const validArray = [1, 2, 3, 4];
    const invalidChunkSize = 0;

    // Call the utility function and expect it to throw an error
    expect(() => JsonChunkArray(validArray, invalidChunkSize)).toThrow(
      "JsonChunkArray ~ Invalid input: array should be an array and dataPerChunk should be a positive integer."
    );
  });
});
