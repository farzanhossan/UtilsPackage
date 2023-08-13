import { GetStartAndEndDateTime } from "../.."; // Update the path

describe("GetStartAndEndDateTime", () => {
  it("should return start and end of the date", () => {
    const startDateString = "13-08-2023T10:00:00";
    const endDateString = "13-08-2023T18:30:00";
    const result = GetStartAndEndDateTime(startDateString, endDateString);
    const expectedStart = new Date("13-08-2023T00:00:00.000Z").getTime();
    const expectedEnd = new Date("13-08-2023T23:59:59.999Z").getTime();
    expect(result.start.getTime()).toEqual(expectedStart);
    expect(result.end.getTime()).toEqual(expectedEnd);
  });
});
