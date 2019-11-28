import React from 'react';

const AsteroidsData = ({data}) => {
    console.log("data in AsteroidsData", data);

    if (data) {
        const datesArray = Object.keys(data);
        console.log("datesArray", datesArray);

        //.map construit un nouveau tableau ! Il faut donc retourner ce tableau, sinon on ne retourne rien !
        const tablePart = datesArray.map(element => (
            <tr key={element}>
                <td className="col-4 date">{element.value}</td>
                <td className="col-4">{}</td>
                <td className="col-4">{}</td>
            </tr>
        ));
        console.log("tablePart", tablePart);
        return tablePart;
    }
    console.log("errooooooor")
    return null;
};

export default AsteroidsData;