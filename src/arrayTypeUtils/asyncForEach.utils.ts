// TypeScript generics for better type safety
export const AsyncForEach = async (array: any[], callback: any) => {
  if (!Array.isArray(array)) {
    throw Error("Expected an array");
  }
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};
