import * as moment from "moment";

//! Get Start Of The Date And End Of The Date
export const GetStartAndEndDateTime = (startDate: string, endDate: string): { start: Date, end: Date } | Error => {
    try {
        const startDay = moment(startDate);
        const endDay = moment(endDate);
        return {
            start: moment(startDay).startOf('day').toDate(),
            end: moment(endDay).endOf('day').toDate(),
        };
    } catch (error: any) {
        throw new Error(error)
    }
};

//! Seconds To Time
export const SecondsToTime = (secs: number): { hours: number, minutes: number, seconds: number } => {
    const hours = Math.floor(secs / (60 * 60));
    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);
    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);
    return {
        hours,
        minutes,
        seconds
    };
}

//! Get Time Difference
export const GetTimeDifference = (fromTime: string, toTime: string): { hours: number, minutes: number, seconds: number } => {
    const rDate = new Date(fromTime);
    const aDate = new Date(toTime);
    const seconds = (aDate.getTime() - rDate.getTime()) / 1000;
    return SecondsToTime(seconds);
}