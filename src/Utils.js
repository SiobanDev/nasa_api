import {apiUrl} from "./constants";

export function asteroidsUrl(startDate, endDate) {
    return `${apiUrl}start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`;
}