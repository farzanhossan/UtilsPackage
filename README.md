# UtilsPackage

![UtilsPackage Logo](https://example.com/path/to/logo.png)

UtilsPackage is a collection of utility functions designed to simplify common tasks in your projects. Whether you're working with dates, arrays, strings, or objects, these functions will help you get the job done efficiently. Just enjoy the convenience and boost your productivity!

## How to Use

You can use these utility functions in your projects by simply importing the `UtilsPackage` and calling the functions as needed.

## Installation

To install UtilsPackage, you can use your package manager of choice:

```bash
npm install utils-package

# or

yarn add utils-package
```

## Features

### Date Time Related

- [**GetStartAndEndDateTime(fromDate, toDate)**](#getstartandenddatetime)

  Get the start and end date and time between two given dates.

- [**SecondsToTime(seconds)**](#secondstotime)

  Convert the given seconds into a human-readable time format.

- [**GetTimeDifference(fromDate, toDate)**](#gettimedifference)

  Calculate the time difference between two dates.

- [**GetTimeDifferenceInDays(fromDate, toDate)**](#gettimedifferenceindays)

  Get the number of days between two dates.

- [**GetTimeDifferenceInHours(fromDate, toDate)**](#gettimedifferenceinhours)

  Get the number of hours between two dates.

- [**GetTimeDifferenceInMinutes(fromDate, toDate)**](#gettimedifferenceinminutes)

  Get the number of minutes between two dates.

- [**GetTimeDifferenceInSeconds(fromDate, toDate)**](#gettimedifferenceinseconds)

  Get the number of seconds between two dates.

- [**FormatDate(date, format)**](#formatdate)

  Format a date object or a date string into a specified format.

### Array Related

- [**ArrayGroupByAttribute(array[], key)**](#arraygroupbyattribute)

  Group an array of objects by a specific attribute.

- [**ArrayCountByAttribute(array[], key)**](#arraycountbyattribute)

  Count occurrences of a specific attribute in an array of objects.

- [**AsyncForEach(array[], callback)**](#asyncforeach)

  Asynchronously iterate over an array and apply a callback function.

- [**UniqueArrayOfObjects(array[], attribute)**](#uniquearrayofobjects)

  Get a new array with unique objects based on a specified attribute.

- [**UniqueArray(array[])**](#uniquearray)

  Get a new array with unique elements from the given array.

- [**IntersectionArray(array1[], array2[])**](#intersectionarray)

  Get an array containing elements present in both array1 and array2.

- [**ExcludeArray(array1[], array2[])**](#excludearray)

  Get an array excluding elements present in array2 from array1.

- [**ParseObjectToArray(object)**](#parseobjecttoarray)

  Convert an object into an array.

- [**JsonChunkArray(array[objects], size)**](#jsonchunkarray)

  Split a JSON array of objects into smaller chunks of a given size.

### String Related

- [**IsValidEmail(email)**](#isvalidemail)

  Check if the given string is a valid email address.

- [**IsValidBDPhoneNumber(number)**](#isvalidbdphonenumber)

  Check if the given string is a valid Bangladesh phone number.

- [**IsValidUserName(username)**](#isvalidusername)

  Check if the given string is a valid username.

- [**IsValidUUID(uuid)**](#isvaliduuid)

  Check if the given string is a valid UUID (Universally Unique Identifier).

- [**CamelCaseToSeparateString(camelCaseString)**](#camelcasetoseparatestring)

  Convert a CamelCase string into a separated string.

- [**GenerateKeyOrCode(codeLength, type)**](#generatekeyorcode)

  Generate a random key or code of a specified length and type (HEX or OCTAL).

- [**GenerateKeyOrCodeWithPrefix(prefix, length, code)**](#generatekeyorcodewithprefix)

  Generate a random key or code with a specified prefix and length.

- [**SlugifyString(inputString)**](#slugifystring)

  Convert a string into a URL-friendly slug.

### Object Related

- [**CloneObject(object)**](#cloneobject)

  Create a deep copy of the given object.

- [**MergeObjects(object1, object2, overwrite)**](#mergeobjects)

  Merge two objects into one. If `overwrite` is true, existing properties in `object1` will be overwritten by `object2` properties.

- [**ObjectToArray(object)**](#objecttoarray)

  Convert an object into an array of key-value pairs.

### Date Time Related

- **GetStartAndEndDateTime(fromDate, toDate)** {#getstartandenddatetime}

  Get the start and end date and time between two given dates.

  **Example:**

  ```javascript
  const { GetStartAndEndDateTime } = require("utils-package");

  const fromDate = "2021-01-01";
  const toDate = "2021-01-02";

  const { startDateTime, endDateTime } = GetStartAndEndDateTime(
    fromDate,
    toDate
  );

  console.log(startDateTime); // Output: 2021-01-01T00:00:00.000Z
  console.log(endDateTime); // Output: 2021-01-02T23:59:59.999Z
  ```

- **SecondsToTime(seconds)**

  Convert the given seconds into a human-readable time format.

  **Example:**

  ```javascript
  const { SecondsToTime } = require("utils-package");

  const seconds = 5000;

  const time = SecondsToTime(seconds);

  console.log(time); // Output: 1 hour, 23 minutes, 20 seconds
  ```

- **GetTimeDifference(fromDate, toDate)**

  Calculate the time difference between two dates.

  **Example:**

  ```javascript
  const { GetTimeDifference } = require("utils-package");

  const fromDate = "2021-01-01";
  const toDate = "2021-01-02";

  const timeDifference = GetTimeDifference(fromDate, toDate);

  console.log(timeDifference); // Output: { days: 1, hours: 0, minutes: 0, seconds: 0 }
  ```

- **GetTimeDifferenceInDays(fromDate, toDate)**

  Get the number of days between two dates.

  **Example:**

  ```javascript
  const { GetTimeDifferenceInDays } = require("utils-package");

  const fromDate = "2021-01-01";
  const toDate = "2021-01-03";

  const daysDifference = GetTimeDifferenceInDays(fromDate, toDate);

  console.log(daysDifference); // Output: 2
  ```

- **GetTimeDifferenceInHours(fromDate, toDate)**

  Get the number of hours between two dates.

  **Example:**

  ```javascript
  const { GetTimeDifferenceInHours } = require("utils-package");

  const fromDate = "2021-01-01T12:00:00";
  const toDate = "2021-01-02T12:00:00";

  const hoursDifference = GetTimeDifferenceInHours(fromDate, toDate);

  console.log(hoursDifference); // Output: 24
  ```

- **GetTimeDifferenceInMinutes(fromDate, toDate)**

  Get the number of minutes between two dates.

  **Example:**

  ```javascript
  const { GetTimeDifferenceInMinutes } = require("utils-package");

  const fromDate = "2021-01-01T12:00:00";
  const toDate = "2021-01-01T12:30:00";

  const minutesDifference = GetTimeDifferenceInMinutes(fromDate, toDate);

  console.log(minutesDifference); // Output: 30
  ```

- **GetTimeDifferenceInSeconds(fromDate, toDate)**

  Get the number of seconds between two dates.

  **Example:**

  ```javascript
  const { GetTimeDifferenceInSeconds } = require("utils-package");

  const fromDate = "2021-01-01T12:00:00";
  const toDate = "2021-01-01T12:00:15";

  const secondsDifference = GetTimeDifferenceInSeconds(fromDate, toDate);

  console.log(secondsDifference); // Output: 15
  ```

### Array Related

- **ArrayGroupByAttribute(array[], key)**

  Group an array of objects by a specific attribute.

  **Example:**

  ```javascript
  const { ArrayGroupByAttribute } = require("utils-package");

  const array = [
    { name: "Jhon Doe", age: 25 },
    { name: "Alexa", age: 27 },
    { name: "Alexa", age: 28 },
  ];
  const key = "name";

  const groupedArray = ArrayGroupByAttribute(array, key);

  console.log(groupedArray);
  /* Output:
  {
    "Jhon Doe": [{ name: "Jhon Doe", age: 25 }],
    "Alexa": [
      { name: "Alexa", age: 27 },
      { name: "Alexa", age: 28 },
    ],
  }
  */
  ```

- **ArrayCountByAttribute(array[], key)**

  Count occurrences of a specific attribute in an array of objects.

  **Example:**

  ```javascript
  const { ArrayCountByAttribute } = require("utils-package");

  const array = [
    { name: "Jhon Doe", age: 25 },
    { name: "Alexa", age: 27 },
    { name: "Alexa", age: 28 },
  ];
  const key = "name";

  const counts = ArrayCountByAttribute(array, key);

  console.log(counts); // Output: { "Jhon Doe": 1, "Alexa": 2 }
  ```

- **AsyncForEach(array[], callback)**

  Asynchronously iterate over an array and apply a callback function.

  **Example:**

  ```javascript
  const { AsyncForEach } = require("utils-package");

  const array = [1, 2, 3, 4];

  AsyncForEach(array, async (item) => {
    await someAsyncTask(item);
  });
  ```

- **UniqueArrayOfObjects(array[], attribute)**

  Get a new array with unique objects based on a specified attribute.

  **Example:**

  ```javascript
  const { UniqueArrayOfObjects } = require("utils-package");

  const array = [{ name: "Jhon Doe" }, { name: "Alexa" }];
  const attribute = "name";

  const uniqueArray = UniqueArrayOfObjects(array, attribute);

  console.log(uniqueArray); // Output: [{ name: "Jhon Doe" }, { name: "Alexa" }]
  ```

- **UniqueArray(array[])**

  Get a new array with unique elements from the given array.

  **Example:**

  ```javascript
  const { UniqueArray } = require("utils-package");

  const array = [1, 2, 3, 4, 2, 3];

  const uniqueArray = UniqueArray(array);

  console.log(uniqueArray); // Output: [1, 2, 3, 4]
  ```

- **IntersectionArray(array1[], array2[])**

  Get an array containing elements present in both array1 and array2.

  **Example:**

  ```javascript
  const { IntersectionArray } = require("utils-package");

  const array1 = [1, 2, 3, 4];
  const array2 = [2, 3, 4, 5];

  const intersection = IntersectionArray(array1, array2);

  console.log(intersection); // Output: [2, 3, 4]
  ```

- **ExcludeArray(array1[], array2[])**

  Get an array excluding elements present in array2 from array1.

  **Example:**

  ```javascript
  const { ExcludeArray } = require("utils-package");

  const array1 = [1, 2, 3, 4];
  const array2 = [2, 3, 4, 5];

  const excludedArray = ExcludeArray(array1, array2);

  console.log(excludedArray); // Output: [1]
  ```

- **ParseObjectToArray(object)**

  Convert an object into an array.

  **Example:**

  ```javascript
  const { ParseObjectToArray } = require("utils-package");

  const object = { a: 1, b: 2 };

  const array = ParseObjectToArray(object);

  console.log(array); // Output: [1, 2]
  ```

- **JsonChunkArray(array[objects], size)**

  Split a JSON array of objects into smaller chunks of a given size.

  **Example:**

  ```javascript
  const { JsonChunkArray } = require("utils-package");

  const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
  const size = 2;

  const chunkedArray = JsonChunkArray(array, size);

  console.log(chunkedArray);
  /* Output:
  [
    [{ a: 1 }, { b: 2 }],
    [{ c: 3 }],
  ]
  */
  ```

### String Related

- **IsValidEmail(email)**

  Check if the given string is a valid email address.

  **Example:**

  ```javascript
  const { IsValidEmail } = require("utils-package");

  const email = "example@example.com";

  const isValid = IsValidEmail(email);

  console.log(isValid); // Output: true
  ```

- **IsValidBDPhoneNumber(number)**

  Check if the given string is a valid Bangladesh phone number.

  **Example:**

  ```javascript
  const { IsValidBDPhoneNumber } = require("utils-package");

  const number = "+8801700000000";

  const isValid = IsValidBDPhoneNumber(number);

  console.log(isValid); // Output: true
  ```

- **IsValidUserName(username)**

  Check if the given string is a valid username.

  **Example:**

  ```javascript
  const { IsValidUserName } = require("utils-package");

  const username = "aamaruf131";

  const isValid = IsValidUserName(username);

  console.log(isValid); // Output: true
  ```

- **IsValidUUID(uuid)**

  Check if the given string is a valid UUID (Universally Unique Identifier).

  **Example:**

  ```javascript
  const { IsValidUUID } = require("utils-package");

  const uuid = "48a2d845-edfa-4681-926e-31f635771da5";

  const isValid = IsValidUUID(uuid);

  console.log(isValid); // Output: true
  ```

- **CamelCaseToSeparateString(camelCaseString)**

  Convert a CamelCase string into a separated string.

  **Example:**

  ```javascript
  const { CamelCaseToSeparateString } = require("utils-package");

  const camelCaseString = "exampleCamelCase";

  const separatedString = CamelCaseToSeparateString(camelCaseString);

  console.log(separatedString); // Output: "example Camel Case"
  ```

- **GenerateKeyOrCode(codeLength, type)**

  Generate a random key or code of a specified length and type (HEX or OCTAL).

  **Example:**

  ```javascript
  const { GenerateKeyOrCode } = require("utils-package");

  const codeLength = 5;
  const type = "HEX";

  const code = GenerateKeyOrCode(codeLength, type);

  console.log(code); // Output: "a1b2c"
  ```

- **GenerateKeyOrCodeWithPrefix(prefix, length, code)**

  Generate a random key or code with a specified prefix and length.

  **Example:**

  ```javascript
  const { GenerateKeyOrCodeWithPrefix } = require("utils-package");

  const prefix = "0";
  const length = 8;
  const code = "ABC";

  const generatedCode = GenerateKeyOrCodeWithPrefix(prefix, length, code);

  console.log(generatedCode); // Output: "0ABCxxxx"
  ```

### Object Related

- **CloneObject(object)**

  Create a deep copy of the given object.

  **Example:**

  ```javascript
  const { CloneObject } = require("utils-package");

  const originalObject = {
    name: "John",
    age: 30,
    address: { city: "New York", zip: "10001" },
  };

  const clonedObject = CloneObject(originalObject);

  console.log(clonedObject); // Output: { name: "John", age: 30, address: { city: "New York", zip: "10001" } }
  ```

## How to Use

You can use these utility functions in your projects by simply importing the `UtilsPackage` and calling the functions as needed.

## Installation

To install UtilsPackage, you can use your package manager of choice:

```bash
npm install utils-package

# or

yarn add utils-package
```

## Contributors

- Farzan Hossan Shaikat

Feel free to contribute to this project by submitting pull requests or reporting issues.

## License

---

Thank you for using UtilsPackage! We hope these utility functions make your coding experience more enjoyable and productive. If you have any questions or feedback, please don't hesitate to reach out to us. Happy coding!
