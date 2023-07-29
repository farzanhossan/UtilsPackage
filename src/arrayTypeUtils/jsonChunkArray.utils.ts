export const JsonChunkArray = <T>(array: T[], dataPerChunk: number): T[][] => {
  if (
    !Array.isArray(array) ||
    !Number.isInteger(dataPerChunk) ||
    dataPerChunk <= 0
  ) {
    throw new Error(
      "JsonChunkArray ~ Invalid input: array should be an array and dataPerChunk should be a positive integer."
    );
  }

  const result: T[][] = [];
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index += dataPerChunk) {
    result.push(array.slice(index, index + dataPerChunk));
  }

  return result;
};
