import React, {useState, useEffect} from "react";
import Asteroids from "./Asteroids";
import MyError from "./MyError";
import {checkInterval} from "../CheckDate";
import MyForm from "./MyForm";
import {callApiAndGetApiResults} from "../ApiCall";
import moment from "moment";
import {dateValidationSchema} from "../Validation";

const DataContainer = () => {
    const [myData, setMyData] = useState(null);
    const [asteroidsOnDisplay, setAsteroidsOnDisplay] = useState(false);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            checkInterval(startDate, endDate);
            setError(null);
        } catch (e) {
            setError({message: e.message})
        }
    }, [startDate, endDate]);

    //Ce useEffect permet juste de voir que lmes variables d'état ont bien été modifiées, car si je faisais mes console.log juste apres les fonctions set..., la vitesse de traitement ferait que je pourrais avoir leur ancienne valeur d'affichée, alors qu'elles ont bien été modifiées.
    useEffect(()=> {
        console.log("asteroidsOnDisplay", asteroidsOnDisplay);
        console.log("loading", loading);
        console.log("myData", myData);
    }, [asteroidsOnDisplay, loading, myData]);

    const onClick = async () => {
        try {
            setAsteroidsOnDisplay(true);
            setLoading(true);

            const momentStartDate = moment(startDate).format("YYYY-MM-DD");
            const momentEndDate = moment(endDate).format("YYYY-MM-DD");

            const data = await callApiAndGetApiResults(momentStartDate, momentEndDate);

            console.log("data", data.data.near_earth_objects);

            setMyData(data.data.near_earth_objects);
            setLoading(false);

        } catch (e) {
            setError({message: "Une erreur est survenue pendant la récupération des données"});
        }
    };

    return (
        <section className="main-content">
            <MyError error={error}/>

            <MyForm
                startDate={startDate}
                endDate={endDate}
                startDateChangeHandler={date => setStartDate(date)}
                endDateChangeHandler={date => setEndDate(date)}
                onClickHandler={onClick}
            />

            <Asteroids
                asteroidsOnDisplay={asteroidsOnDisplay}
                loading={loading}
                data={myData}
            />
        </section>
    );
};

export default DataContainer;