import { IsValidEmail } from "../..";

describe("IsValidEmail", () => {
  it("should return true for a valid email address", () => {
    const validEmails = [
      "user@example.com",
      "user123@example.co.uk",
      "user.name@example-domain.com",
    ];

    validEmails.forEach((email) => {
      expect(IsValidEmail(email)).toBe(true);
    });
  });

  it("should return false for an invalid email address", () => {
    const invalidEmails = [
      "userexample.com", // Missing @ symbol
      "user@", // Missing domain
      "@example.com", // Missing username
      "user@example", // Missing top-level domain
      "user@.com", // Invalid domain
      "user@exam ple.com", // Space in the email
    ];

    invalidEmails.forEach((email) => {
      expect(IsValidEmail(email)).toBe(false);
    });
  });

  it("should return false for non-string inputs", () => {
    const nonStringInputs = [123, true, null, undefined, [], {}];

    nonStringInputs.forEach((input) => {
      // @ts-ignore: Testing non-string inputs for type validation
      expect(IsValidEmail(input)).toBe(false);
    });
  });
});
