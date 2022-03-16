import React from 'react';




function Imagen({image}) {



    return (


        <div className="card-body text-center">

            <img className="img-fluid" style={{ width: 25 + 'rem' }} src={image} alt=" Último producto " />

        </div>
    )

}




export default Imagen;