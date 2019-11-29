import React from 'react';
import {DoubleBounce} from 'better-react-spinkit';
import AsteroidsData from "./AsteroidsData";

const Asteroids = ({loading, asteroidsOnDisplay, data}) => {
    if (asteroidsOnDisplay) {
        if (!loading) {
            return (
                <div className="asteroids-data">
                    <table className="table-bordered">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Max Diameter</th>
                            <th>Hazardous</th>
                        </tr>
                        </thead>
                        <AsteroidsData asteroidsCollection={data}/>
                    </table>
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