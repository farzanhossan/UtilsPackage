import { CamelCaseToSeparateString } from "..";

//! Asynchronous Foreach
export const AsyncForEach = async (array: any[], callback: any) => {
    if (!Array.isArray(array)) {
        throw new Error(
            `asyncForEach ~ Expected an array, instead got ${typeof array}`
        );
    }
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

//! Array of Objects GroupBy Using Attribute --- Return A Object
export const ArrayGroupByAttribute = (array: any[], attr: string): any => {
    const result = array.reduce((r, a) => {
        r[a[attr]] = r[a[attr]] || [];
        r[a[attr]].push(a);
        return r;
    }, Object.create(null));
    return result;
};

//! Array of Objects CountBy Using Attribute --- Return A Object
export const ArrayCountByAttribute = (array: any[], attr: string): any => {
    const result = array.reduce((previousValue, currentValue) => ((previousValue[currentValue[attr]] = ++previousValue[currentValue[attr]] || 1), previousValue), {});
    return result
};

//! Array of Objects Unique Using Attribute --- Return An Array
export const UniqueArrayOfObjects = (array: any[], attr: string): any[] => {
    return [...new Map(array.map(item => [item[attr], item])).values()];
};

//! Plain Array Unique ---Return An Array
export const UniqueArray = (array: any[]): any[] => {
    return [...new Set(array)]
};

//! Plain Array Intersection ---Return An Array
export const IntersectionArray = (array1: any[], array2: any[]): any[] => {
    return array1.filter(function (n) {
        return array2.indexOf(n) !== -1;
    });
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
    })
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
}