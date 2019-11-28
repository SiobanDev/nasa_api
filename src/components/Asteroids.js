import React from 'react';
import {DoubleBounce} from 'better-react-spinkit';
import AsteroidsData from "./AsteroidsData";

const Asteroids = ({loading, asteroidsOnDisplay, data}) => {
    if (asteroidsOnDisplay) {
        if (!loading) {
            return (
                <div className="asteroids-data">
                    <table>
                        <tbody>
                        <AsteroidsData data={data}/>
                        </tbody>
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