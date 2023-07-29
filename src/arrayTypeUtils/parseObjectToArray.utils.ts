import { CamelCaseToSeparateString } from "../stringTypeUtils/string.utils";

type KeyValueType = {
  [key: string]: any;
};

export const ParseObjectToArray = <T extends KeyValueType>(
  object: T
): Array<{ name: string; value: T[keyof T] }> => {
  const mappedData: Array<{ name: string; value: T[keyof T] }> = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const payload = {
        name: CamelCaseToSeparateString(key),
        value: object[key],
      };
      mappedData.push(payload);
    }
  }

  return mappedData;
};
