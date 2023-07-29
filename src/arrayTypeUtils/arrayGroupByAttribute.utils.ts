type KeyType = string | number | symbol;

export const ArrayGroupByAttribute = <
  T extends Record<KeyType, any>,
  K extends keyof T
>(
  array: T[],
  attribute: K
): Record<string, T[]> => {
  if (!Array.isArray(array)) {
    throw new Error(
      `ArrayGroupByAttribute ~ Expected an array, instead got ${typeof array}`
    );
  }

  if (!attribute || typeof attribute !== "string" || !(attribute in array[0])) {
    throw new Error("ArrayGroupByAttribute ~ Invalid attribute provided.");
  }

  const result: Record<string, T[]> = {};

  for (const item of array) {
    const keyValue = String(item[attribute]);
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }

  return result;
};
