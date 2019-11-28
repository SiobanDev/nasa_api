import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyForm = ({startDate, endDate, startDateChangeHandler, endDateChangeHandler, onClickHandler}) => {
    return (
        <div>
            <div className="form-group startDateRow">
                <label htmlFor="startDateInput">Date de début</label>
                <DatePicker
                    id="startDateInput"
                    className="form-control"
                    name="startDateInput"
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={startDateChangeHandler}
                />
            </div>
            <div className="form-group endDateRow">
                <label htmlFor="endDateInput">Date de fin</label>
                <DatePicker
                    id="endDateInput"
                    className="form-control"
                    name="endDateInput"
                    dateFormat="dd/MM/yyyy"
                    selected={endDate}
                    onChange={endDateChangeHandler}
                />
            </div>

            <button
                id="submit-button"
                className="btn btn-info"
                onClick={onClickHandler}
            >
                Chercher
            </button>
        </div>
    );
};

export default MyForm;