export const ExcludeArray = <T>(array1: T[], array2: T[]): T[] => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("ExcludeArray ~ Both inputs should be arrays.");
  }

  // Convert array2 to a Set for faster exclusion check
  const exclusionSet = new Set(array2);

  // Filter elements from array1 that are not in the exclusion set
  return array1.filter((x) => !exclusionSet.has(x));
};
