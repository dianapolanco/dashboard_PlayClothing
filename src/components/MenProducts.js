import React, { useState, useEffect } from 'react';
import TableCategory from './TableCategory';
import UseProductsList from './Hooks/UseProductsList';

function MenProducts() {

    const products = UseProductsList('/api/products')

    const [menProducts, setMenProducts] = useState([])


    useEffect(() => {
        setMenProducts(products.filter(producto => producto.categoria.nombre === "hombre"))
    },[products])



    return (

        <div className="card shadow mb-4" style={{width:"100%"}}>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nombre del producto</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Color</th>
                                <th scope="col">Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menProducts.length === 0 &&
                                <tr className="card-body">
                                <th>Cargando...</th>
                            </tr>
                            }
                            {menProducts.map((product,i) => {
                                return <TableCategory {...product} key={i}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}




export default MenProducts;