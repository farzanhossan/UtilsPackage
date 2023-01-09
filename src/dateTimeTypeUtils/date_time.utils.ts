import * as moment from "moment";
import { DateTime } from "./types";

//! Get Start Of The Date And End Of The Date
export const GetStartAndEndDateTime = (startDate: DateTime, endDate: DateTime): { start: Date, end: Date } => {
    const startDay = moment(startDate);
    const endDay = moment(endDate);
    return {
        start: moment(startDay).startOf('day').toDate(),
        end: moment(endDay).endOf('day').toDate(),
    };
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
export const GetTimeDifference = (fromTime: DateTime, toTime: DateTime): { hours: number, minutes: number, seconds: number } => {
    try {
        const rDate = new Date(fromTime);
        const aDate = new Date(toTime);
        const seconds = (aDate.getTime() - rDate.getTime()) / 1000;
        return SecondsToTime(seconds);
    } catch (error: any) {
        throw new Error(error);
    }
}

//! Get Time Difference In Days
export const GetTimeDifferenceInDays = (fromDate: DateTime, toDate: DateTime): number => {
    try {
        const date2: any = new Date(toDate)
        const date1: any = new Date(fromDate)
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    } catch (error: any) {
        throw new Error(error)
    }

}

//! Get Time Difference In Hours
export const GetTimeDifferenceInHours = (fromDate: DateTime, toDate: DateTime): number => {
    try {
        const date2: any = new Date(toDate)
        const date1: any = new Date(fromDate)
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60);
    } catch (error: any) {
        throw new Error(error)
    }

}

//! Get Time Difference In Minutes
export const GetTimeDifferenceInMinutes = (fromDate: DateTime, toDate: DateTime): number => {
    try {
        const date2: any = new Date(toDate)
        const date1: any = new Date(fromDate)
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60);
    } catch (error: any) {
        throw new Error(error)
    }

}

//! Get Time Difference In Seconds
export const GetTimeDifferenceInSeconds = (fromDate: DateTime, toDate: DateTime): number => {
    try {
        const date2: any = new Date(toDate)
        const date1: any = new Date(fromDate)
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / 1000;
    } catch (error: any) {
        throw new Error(error)
    }

}