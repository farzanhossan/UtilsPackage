// TypeScript generics for better type safety
export const AsyncForEach = async <T>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => Promise<void>
): Promise<void> => {
  if (!Array.isArray(array)) {
    throw new Error(
      `AsyncForEach ~ Expected an array, instead got ${typeof array}`
    );
  }

  if (typeof callback !== "function") {
    throw new Error("AsyncForEach ~ Callback function is not provided.");
  }

  const promises: Promise<void>[] = [];

  for (let index = 0; index < array.length; index++) {
    const promise = callback(array[index], index, array).catch((error) => {
      throw error;
    });

    promises.push(promise);
  }

  // Wait for all promises to resolve (parallel execution)
  await Promise.all(promises);
};
