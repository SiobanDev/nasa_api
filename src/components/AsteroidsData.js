import React from 'react';

const AsteroidsData = ({asteroidsCollection}) => {
        console.log("asteroidsCollection", asteroidsCollection);

        if (asteroidsCollection) {
            const asteroidsDates = Object.keys(asteroidsCollection);
            console.log("asteroidsDates", asteroidsDates);

            return (
                <tbody>
                {
                    //.map construit un nouveau tableau ! Il faut donc retourner ce tableau, sinon on ne retourne rien !
                    //La parenthèse avec le => est un return implicite ! J'aurais aussi pu écrire { return(.
                    asteroidsDates.map(asteroidDate => (
                        asteroidsCollection[asteroidDate].map(asteroidElement => (
                            <tr key={asteroidElement.id}>
                                <td className="col-4 date">{asteroidDate}</td>
                                <td className="col-4 date">{asteroidElement.name}</td>
                                <td className="col-4">{asteroidElement.estimated_diameter.meters.estimated_diameter_max}</td>
                                <td className="col-4">
                                    {
                                        //Les conditions avec des éléments de langage type IF ne sont pas acceptées, mais les expressions de type ternaires oui ( à ne pas confondre avec opérateur coalescent)
                                    asteroidElement.is_potentially_hazardous_asteroid ? "true" : "false"
                                }
                                </td>
                            </tr>
                        ))
                    ))
                }
                </tbody>
            )
        }
        console.log("errooooooor")
        return null;
    }
;

export default AsteroidsData;