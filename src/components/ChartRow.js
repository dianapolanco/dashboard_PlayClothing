import React from 'react';


function ChartRow({
    nombre,
    cantidad
}){
    
    return (
                <tr>
                    <td>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</td>
                    <td>{cantidad}</td>
                </tr>
            )
    }
    
        

export default ChartRow;