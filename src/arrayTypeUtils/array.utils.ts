import { CamelCaseToSeparateString } from "..";

//! Array of Objects Unique Using Attribute --- Return An Array
export const UniqueArrayOfObjects = (array: any[], attr: string): any[] => {
  return [...new Map(array.map((item) => [item[attr], item])).values()];
};

//! Plain Array Unique ---Return An Array
export const UniqueArray = (array: any[]): any[] => {
  return [...new Set(array)];
};

//! Plain Array Intersection ---Return An Array
export const IntersectionArray = (array1: any[], array2: any[]): any[] => {
  return array1.filter(function (n) {
    return array2.indexOf(n) !== -1;
  });
};
//! Plain Array Exclude ---Return An Array
export const ExcludeArray = (array1: any[], array2: any[]): any[] => {
  return array1.filter((x) => !array2.includes(x));
};

//! Parse A Object To An Array
export const ParseObjectToArray = (object: any): any => {
  const mappedData: any[] = [];
  Object.keys(object).map((obj: any) => {
    const payload = {
      name: CamelCaseToSeparateString(obj),
      value: object[obj],
    };
    mappedData.push(payload);
  });
  return mappedData;
};

//! JSON Chunk To Array
export const JsonChunkArray = (array: any[], dataPerChunk: number): any[] => {
  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / dataPerChunk);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);
};
