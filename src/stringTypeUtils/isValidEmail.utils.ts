import { EMAIL_REGEX } from "..";

export const IsValidEmail = <T extends string>(email: T): boolean => {
  return email ? EMAIL_REGEX.test(email) : false;
};
