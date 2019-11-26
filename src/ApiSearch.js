import {asteroidsUrl} from "./Utils";
import Axios from "axios";

export function getApiResults() {
    const $startDateInput = document.getElementById("startDateInput");
    const $endDateInput = document.getElementById("endDateInput");
    const $submitButton = document.getElementById("submit-button");

    $submitButton.addEventListener("click", async () => {
        console.log('$startDateInput.value', $startDateInput.value);
        console.log('$endDateInput.value', $endDateInput.value);

        if (asteroidsUrl($startDateInput.value, $endDateInput.value)) {
            let response = await Axios.get(asteroidsUrl($startDateInput.value, $endDateInput.value));
            console.log('response', response);
            return response;
        }
    })
}
