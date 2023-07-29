export const UniqueArray = <T>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error(
      `UniqueArray ~ Expected an array, instead got ${typeof array}`
    );
  }

  return [...new Set(array)];
};
