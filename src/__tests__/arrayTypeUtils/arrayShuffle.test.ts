import { ArrayShuffle } from "../..";

describe("ArrayShuffle", () => {
  it("should shuffle an array of numbers", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = ArrayShuffle([...originalArray]); // Make a copy to preserve the original array
    expect(shuffledArray).not.toEqual(originalArray); // The shuffled array should not be the same as the original array
    expect(shuffledArray).toHaveLength(originalArray.length); // The shuffled array should have the same length as the original array
    expect(new Set(shuffledArray)).toEqual(new Set(originalArray)); // The shuffled array should have the same unique elements as the original array
  });

  it("should shuffle an array of strings", () => {
    const originalArray = ["apple", "banana", "orange"];
    const originalArrayCopy = originalArray.slice(); // Shallow copy the original array
    const shuffledArray = ArrayShuffle(originalArrayCopy);

    expect(shuffledArray).not.toEqual(originalArray); // The shuffled array should not be the same as the original array
    expect(shuffledArray).toHaveLength(originalArray.length); // The shuffled array should have the same length as the original array
    expect(new Set(shuffledArray)).toEqual(new Set(originalArray)); // The shuffled array should have the same unique elements as the original array
  });

  it("should shuffle an array of objects", () => {
    const originalArray = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
    const originalArrayCopy = JSON.parse(JSON.stringify(originalArray)); // Deep copy the original array
    const shuffledArray = ArrayShuffle(originalArrayCopy);

    expect(shuffledArray).not.toEqual(originalArray); // The shuffled array should not be the same as the original array
    expect(shuffledArray).toHaveLength(originalArray.length); // The shuffled array should have the same length as the original array

    // Check if both arrays have the same elements (based on the 'id' property)
    // @ts-expect-error to suppress TypeScript error for test purposes
    expect(new Set(shuffledArray.map((obj) => obj.id))).toEqual(
      new Set(originalArray.map((obj) => obj.id))
    );
  });
});
