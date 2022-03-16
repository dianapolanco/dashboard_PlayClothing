import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function LastProductInDb() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        console.log("Se montó el componente")
        fetch('/api/products')
            .then(results => results.json())
            .then(data => setProducts(data.data))
    }, [])


    let indexUltimoProducto = products.length - 1
    let ultimoProducto = products[indexUltimoProducto]
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-dark text-center" style={{color:"#303028"}}>Último producto creado</h4>
                </div>
                {ultimoProducto === undefined &&
                    <div className="card-body">
                        <p>Cargando...</p>
                    </div>
                }

                {indexUltimoProducto !== -1 &&

                    <div className="card-body text-center">

                        <img className="img-fluid" style={{ width: 15 + 'rem' }} src={ultimoProducto.imagen} alt=" Último producto " />
                        <div style={{paddingTop: 10}}>
                            <h5><b>{ultimoProducto.nombreDelProducto}</b></h5>
                            <p>${toThousand(ultimoProducto.precio)}</p>
                            <Link className="btn btn-dark" rel="nofollow" to="/UltimoProducto">Ver detalle del producto</Link>
                        </div>
                    </div>

                }


            </div>
        </div>
    )

}




export default LastProductInDb;
