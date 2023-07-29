import { CloneObject } from "../..";

describe("CloneObject", () => {
  it("should return a deep copy of the object", () => {
    const originalObject = {
      name: "John",
      age: 30,
      hobbies: ["reading", "traveling"],
      address: {
        city: "New York",
        country: "USA",
      },
    };

    const clonedObject = CloneObject(originalObject);

    // Check if the cloned object is not the same reference as the original object
    expect(clonedObject).not.toBe(originalObject);

    // Check if the cloned object has the same properties as the original object
    expect(clonedObject).toEqual(originalObject);

    // Check if modifying the cloned object does not affect the original object
    clonedObject.name = "Jane";
    clonedObject.address.city = "Los Angeles";
    expect(originalObject.name).toBe("John");
    expect(originalObject.address.city).toBe("New York");
  });

  it("should handle circular references correctly", () => {
    const obj1 = { name: "Object 1" };
    const obj2 = { name: "Object 2" };
    // @ts-expect-error to suppress TypeScript error for test purposes
    obj1.reference = obj2;
    // @ts-expect-error to suppress TypeScript error for test purposes
    obj2.reference = obj1;

    const clonedObj = CloneObject(obj1);

    // Check if circular references are handled correctly and the objects are not the same reference
    expect(clonedObj).not.toBe(obj1);
    expect(clonedObj.reference).not.toBe(obj2);
    expect(clonedObj.reference.reference).toBe(clonedObj);
  });

  it("should handle special objects correctly", () => {
    const dateObj = new Date();
    const regExpObj = /test/g;

    const clonedDateObj = CloneObject(dateObj);
    const clonedRegExpObj = CloneObject(regExpObj);

    // Custom comparison function for Date objects
    const areDatesEqual = (date1: Date, date2: Date) =>
      date1.getTime() === date2.getTime();

    // Check if special objects are handled correctly
    expect(clonedDateObj).toEqual(dateObj); // Using toEqual() as a fallback for a more detailed error message
    expect(areDatesEqual(clonedDateObj, dateObj)).toBe(true); // Use custom comparison for Date objects
    expect(clonedRegExpObj).toEqual(regExpObj); // Using toEqual() as a fallback for a more detailed error message
  });
});
