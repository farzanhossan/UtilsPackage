import * as moment from "moment";

//! Get Start Of The Date And End Of The Date
export const GetStartAndEndDateTime = (startDate: string, endDate: string) => {
    const startDay = moment(startDate);
    const endDay = moment(endDate);
    return {
        start: moment(startDay).startOf('day').toDate(),
        end: moment(endDay).endOf('day').toDate(),
    };
};