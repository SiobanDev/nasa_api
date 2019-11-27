import React from 'react';
import {DoubleBounce} from 'better-react-spinkit';

const Asteroids = ({loading, display, data}) => {
    if (display) {
        if (!loading) {
            return (
                <div className="asteroids-data">
                    {data}
                </div>
            )
        }
        return (
            <div className="asteroids-data">
                <DoubleBounce size={50} color="white"/>
            </div>
        )
    }
    return null;
};

export default Asteroids;