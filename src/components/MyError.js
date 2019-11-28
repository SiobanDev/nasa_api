import React from 'react';
import Alert from "./Alert";

const MyError = ({error}) => (
    error && <Alert type="danger" message={error.message}/>
);

export default MyError;
