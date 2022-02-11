import { BD_NUMBER_REGEX, EMAIL_REGEX } from "./regex.helper";

//! Email Validation True/False
export const IsValidEmail = (email: string): boolean => {
    return email ? email.match(EMAIL_REGEX) ? true : false : false
};

//! BD Phone Number Validation True/False
export const IsValidPhoneNumber = (number: string): boolean => {
    return number ? number.match(BD_NUMBER_REGEX) ? true : false : false
};

//! CamelCaseToSeparateString
export const CamelCaseToSeparateString = (string: any): string => {
    const strReplace = string.replace(/([A-Z])/g, ' $1');
    const str = strReplace.charAt(0).toUpperCase() + strReplace.slice(1);
    return str;
};