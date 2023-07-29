export const CloneObject = (obj: any, visited?: WeakMap<any, any>): any => {
  if (
    obj === null ||
    typeof obj !== "object" ||
    obj instanceof Date ||
    obj instanceof RegExp
  ) {
    return obj;
  }

  if (visited === undefined) {
    visited = new WeakMap();
  } else if (visited.has(obj)) {
    return visited.get(obj);
  }

  const clone: any = Array.isArray(obj) ? [] : {};

  visited.set(obj, clone);

  Object.keys(obj).forEach((key) => {
    clone[key] = CloneObject(obj[key], visited);
  });

  return clone;
};
