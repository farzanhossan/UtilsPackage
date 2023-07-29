import { CamelCaseToSeparateString } from "..";

// //! Parse A Object To An Array
// export const ParseObjectToArray = (object: any): any => {
//   const mappedData: any[] = [];
//   Object.keys(object).map((obj: any) => {
//     const payload = {
//       name: CamelCaseToSeparateString(obj),
//       value: object[obj],
//     };
//     mappedData.push(payload);
//   });
//   return mappedData;
// };

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
