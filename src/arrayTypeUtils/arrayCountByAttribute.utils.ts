interface CountByResult {
  [key: string]: number;
}

const getNestedAttributeValue = (obj: any, path: string): any => {
  const keys = path.split(".");
  let value = obj;

  for (const key of keys) {
    if (!value || !Object.prototype.hasOwnProperty.call(value, key)) {
      return undefined;
    }

    value = value[key];
  }

  return value;
};

export const ArrayCountByAttribute = (
  array: any[],
  attr: string
): CountByResult => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array.");
  }

  if (typeof attr !== "string" || attr === "") {
    throw new Error("Attribute must be a non-empty string.");
  }

  const result: CountByResult = array.reduce((previousValue, currentValue) => {
    const attributeValue = getNestedAttributeValue(currentValue, attr);

    if (typeof attributeValue === "undefined") {
      return previousValue; // Skip if the attribute is not found in the current object
    }

    const attributeKey = String(attributeValue).toLowerCase();
    previousValue[attributeKey] = (previousValue[attributeKey] || 0) + 1;
    return previousValue;
  }, {});

  return result;
};
