import { USERNAME_REGEX } from "..";
import { BD_NUMBER_REGEX, EMAIL_REGEX, UUID_REGEX } from "../helpers/regex.helper";

//! Email Validation True/False
export const IsValidEmail = (email: string): boolean => {
  return email ? (email.match(EMAIL_REGEX) ? true : false) : false;
};

//! BD Phone Number Validation True/False
export const IsValidBDPhoneNumber = (number: string): boolean => {
  return number ? (number.match(BD_NUMBER_REGEX) ? true : false) : false;
};

//! CamelCaseToSeparateString
export const CamelCaseToSeparateString = (string: any): string => {
  const strReplace = string.replace(/([A-Z])/g, " $1");
  const str = strReplace.charAt(0).toUpperCase() + strReplace.slice(1);
  return str;
};

//! UUID Validation  True/False
export const IsValidUuid = (uuid: string): boolean => {
  try {
    const res = uuid.match(UUID_REGEX);

    if (res && res.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

//! Generate Key Or Code
export const GenerateKeyOrCode = (digit: number, charType?: string): string => {
  const stringType = charType
    ? charType === "OCTAL"
      ? 8
      : charType === "HEX"
        ? 16
        : 8
    : 8;
  const length = digit ? digit : 10;
  return "x".repeat(length).replace(/[xy]/g, function (char) {
    const randomNumber = (Math.random() * stringType) | 0;
    const value = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
    return value.toString(stringType).toUpperCase();
  });
};

//! Username Validation True/False
export const IsValidUserName = (username: string): boolean => {
  return username ? (username.match(USERNAME_REGEX) ? true : false) : false;
};
