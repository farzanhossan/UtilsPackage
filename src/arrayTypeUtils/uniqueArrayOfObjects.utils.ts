export const UniqueArrayOfObjects = <T extends Record<string, any>>(
  array: T[],
  attr: keyof T
): T[] => {
  if (!Array.isArray(array)) {
    throw new Error(
      `UniqueArrayOfObjects ~ Expected an array, instead got ${typeof array}`
    );
  }

  const seenValues = new Set<T[keyof T]>();
  const uniqueArray: T[] = [];

  for (const item of array) {
    const value = item[attr];
    if (!seenValues.has(value)) {
      seenValues.add(value);
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
};
