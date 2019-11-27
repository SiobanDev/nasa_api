import React from 'react';
import {dateValidationSchema} from "../Validation";
import {Formik, Form, Field, ErrorMessage} from 'formik';

const FormikFormular = () => (

    <Formik
        initialValues={{startDate: '', endDate: ''}}
        enableReinitialize={true}
        validationSchema={dateValidationSchema}

        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
    >
        {({isSubmitting}) => (
            <Form>
                <div className="form-group startDateRow">
                    <label htmlFor="startDateInput">Date de début</label>
                    <Field id="startDateInput" className="form-control" type="date" name="startDate"/>
                    <ErrorMessage name="startDate" component="div"/>
                </div>

                <div className="form-group endDateRow">
                    <label htmlFor="endDateInput">Date de fin</label>
                    <Field id="endDateInput" className="form-control" type="date" name="endDate"/>
                    <ErrorMessage name="endDate" component="div"/>
                </div>

                <button id="submit-button" className="btn btn-info" type="submit" disabled={isSubmitting}>
                    Chercher
                </button>
            </Form>
        )}
    </Formik>
);

export default FormikFormular;