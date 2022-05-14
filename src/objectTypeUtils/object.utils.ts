
//! Clone Object
export const CloneObject = async (object: Object) => {
    return JSON.parse(JSON.stringify(object))
};