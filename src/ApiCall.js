import {asteroidsUrl} from "./Utils";
import Axios from "axios";

export const callApiAndGetApiResults = async (startDate, endDate) => {
    let response = await Axios.get(asteroidsUrl(startDate,endDate));
    console.log('response in callApiAndGetApiResults', response);
    return response;
}
