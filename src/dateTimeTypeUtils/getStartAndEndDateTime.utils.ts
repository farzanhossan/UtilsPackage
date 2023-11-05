export const GetStartAndEndDateTime = <T extends Date | string>(
  startDate: T,
  endDate: T
): { start: Date; end: Date } => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  return { start, end };
};
