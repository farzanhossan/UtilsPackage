export const IntersectionArray = <T>(array1: T[], array2: T[]): T[] => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("IntersectionArray ~ Both parameters must be arrays.");
  }
  if (array1.length === 0 || array2.length === 0) {
    return [];
  }

  // Convert array2 to a Set for faster lookup
  const array2Set = new Set(array2);

  // Filter array1 based on whether each element exists in the Set
  return array1.filter((n) => array2Set.has(n));
};
