import React from 'react';
import { Link } from 'react-router-dom';


function TableCategory({
    id,
    nombreDelProducto,
    imagen,
    precio,
    color,
    tipo
}) {

    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <React.Fragment >
            <tr>
                <th scope="row">{id}</th>
                <td>{nombreDelProducto}</td>
                <td><Link to={imagen}>{imagen}</Link></td>
                <td>${toThousand(precio)}</td>
                <td>{color}</td>
                <td>{Object.values(tipo)}</td>
            </tr>

        </React.Fragment >
    )
}

export default TableCategory