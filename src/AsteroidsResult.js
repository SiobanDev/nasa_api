import React from 'react';
import {getApiResults} from "./ApiSearch";

const AsteroidsResult = () => {
    return (
        <div>
            {getApiResults()}
        </div>
    )
};

export default AsteroidsResult;