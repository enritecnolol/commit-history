import { DateTime } from "luxon";

const getTimeAgo = (date: string) => {
    const somePastDate = new Date(date);
    const dateTime = DateTime.fromJSDate(somePastDate);
    return dateTime.toRelative();
}

export default getTimeAgo;