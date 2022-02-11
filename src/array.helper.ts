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

//! Array of Objects GroupBy Using Attribute
export const groupByAttribute = (array: any[], attr: string) => {
    const result = array.reduce((r, a) => {
        r[a[attr]] = r[a[attr]] || [];
        r[a[attr]].push(a);
        return r;
    }, Object.create(null));
    return result;
};