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
export const GroupByAttribute = (array: any[], attr: string): any => {
    const result = array.reduce((r, a) => {
        r[a[attr]] = r[a[attr]] || [];
        r[a[attr]].push(a);
        return r;
    }, Object.create(null));
    return result;
};

//! Array of Objects Unique Using Attribute --- Return An Array
export const UniqueArrayOfObjects = (array: any[], attr: string): any[] => {
    return [...new Map(array.map(item => [item[attr], item])).values()];
};

//! Plain Array Unique Using Attribute ---Return An Array
export const UniqueArray = (array: any[]): any[] => {
    return [...new Set(array)]
};