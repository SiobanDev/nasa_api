import {apiUrl} from "./constants";

export function asteroidsUrl(startDate, endDate) {
    var preFormattedStartDate = new Date(startDate);
    var preFormattedSndDate = new Date(endDate);

    let dateArray = [preFormattedStartDate, preFormattedSndDate];

    var formattedDatesArray = dateArray.map(date => {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();

        date = yyyy + "-" + mm + "-" + dd;

        return date;
    })

    return `${apiUrl}start_date=${formattedDatesArray[0]}&end_date=${formattedDatesArray[1]}&api_key=${process.env.NASA_API_KEY}`;
}