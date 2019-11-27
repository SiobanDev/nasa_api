import React, {useState, useEffect} from "react";
import Asteroids from "./Asteroids";
import FormikFormular from "./FormikFormular";
import moment from "moment";
import {callApiAndGetApiResults} from "../ApiCall";


const DataContainer = () => {
    const [data, setData] = useState(null);
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);
    const startDate = null;
    const endDate = null;

    if (this.props.values) {
        this.startDate = this.props.values.startDate;
        this.endDate = this.props.values.endDate;
        // const [startDate, setStartDate] = useState(null);
        // const [endDate, setEndDate] = useState(null);
        // const [formIsSubmit, setFormIsSubmti] = useState(true);


        const checkInterval = (startDate, endDate) => {
            const momentStartDate = moment(startDate);
            const momentEndDate = moment(endDate);

            if (momentEndDate.isBefore(momentStartDate)) {
                throw new Error("La date de fin ne peut être avant la date de début");
            }

            if (momentStartDate.add(7, "days").isBefore(momentEndDate)) {
                throw new Error("L'intervalle maximum est de 7 jours");
            }
        };
    }

    useEffect(() => {
        try {
            // setStartDate(this.props.values.startDate);
            // setEndDate(this.props.values.endDate);
            console.log("startDate, endDate before if", this.startDate, endDate);

            if (startDate && endDate) {
                console.log("startDate, endDate after if", startDate, endDate);

                console.log("startDate, endDate after set", startDate, endDate);

                checkInterval(startDate, endDate);

                setDisplay(true);
                console.log("display", display);
                setLoading(true);

                async function fetchData() {
                    return await callApiAndGetApiResults(startDate, endDate);
                }

                const data = fetchData();
                console.log("data", data);

                if (data) {
                    setData(data);
                    setLoading(false);
                }
            }

            console.log('no entendio');

        } catch (e) {
            console.log(e.message);
        }
    }, [data, loading, display]);

    return (
        <section className="main-content">
            <FormikFormular/>
            <Asteroids display={display} loading={loading} data={data}/>
        </section>
    );
}

export default DataContainer;