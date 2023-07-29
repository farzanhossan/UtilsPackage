// AsyncForEach.test.ts (unit test file)
import { AsyncForEach } from "../../index";

// Example utility function for testing purposes
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("AsyncForEach", () => {
  it("should process each item in the array", async () => {
    const array = [1, 2, 3, 4, 5];
    const processedItems: number[] = [];

    await AsyncForEach(array, async (item, index) => {
      await delay(100); // Simulate some asynchronous operation
      processedItems.push(item);
    });

    expect(processedItems).toEqual(array);
  });

  it("should handle an empty array", async () => {
    const array: number[] = [];
    const processedItems: number[] = [];

    await AsyncForEach(array, async (item, index) => {
      await delay(100); // Simulate some asynchronous operation
      processedItems.push(item);
    });

    expect(processedItems).toEqual([]);
  });

  it("should handle an array with non-integer values", async () => {
    const array = ["a", "b", "c"];
    const processedItems: string[] = [];

    await AsyncForEach(array, async (item, index) => {
      await delay(100); // Simulate some asynchronous operation
      processedItems.push(item);
    });

    expect(processedItems).toEqual(array);
  });

  it("should handle errors in the callback function", async () => {
    const array = [1, 2, 3, 4, 5];

    const errorCallback = jest
      .fn()
      .mockRejectedValue(new Error("Error in callback"));
    await expect(AsyncForEach(array, errorCallback)).rejects.toThrowError(
      "Error in callback"
    );
    expect(errorCallback).toHaveBeenCalledTimes(array.length);
  });

  it("should throw an error if the input is not an array", async () => {
    const invalidInput = "not_an_array";
    const invalidCallback = jest.fn();

    await expect(
      AsyncForEach(invalidInput as any, invalidCallback)
    ).rejects.toThrowError(
      "AsyncForEach ~ Expected an array, instead got string"
    );
    expect(invalidCallback).not.toHaveBeenCalled();
  });

  it("should throw an error if the callback is not a function", async () => {
    const array = [1, 2, 3];
    const invalidCallback = "not_a_function";

    await expect(
      AsyncForEach(array, invalidCallback as any)
    ).rejects.toThrowError("AsyncForEach ~ Callback function is not provided.");
  });
});
