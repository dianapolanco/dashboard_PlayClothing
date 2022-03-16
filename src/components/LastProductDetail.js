import React, { useState, useEffect } from 'react';


function LastProductDetail() {

    const [product, setProduct] = useState([])


    useEffect(() => {
        console.log("Se montó el componente")
        fetch('/api/products')
            .then(results => results.json())
            .then(data => {
                const ultimoProducto = data.data[data.data.length - 1]
                const idUltimoProducto = ultimoProducto.id
                // console.log(ultimoProducto)
                return fetch(`/api/products/${idUltimoProducto}`)
            })
            .then(response => response.json())
            .then(data => setProduct(data.data))
    }, [])


    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // const nombreCategoria = () => {
    //    return product.categoria.nombre.charAt(0).toUpperCase() + product.categoria.nombre.slice(1)

    // }

    console.log(product)

    return (


        <div className="container col-lg-6" style={{marginTop:30, marginBottom:50}}>

            <div className="card border border-dark">
                <div className="card-header bg-dark border-bottom border-dark py-3">
                    <h3 className="m-0 font-weight-bold text-center text-white">Último producto creado</h3>
                </div>
                {typeof product.id === undefined &&
                    <div className="card-body">
                        <p>Cargando...</p>
                    </div>
                }

                {typeof product.id === "number" &&
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 + 'rem'}} src={product.imagen} alt=" Último producto " />
                        </div>
                        <h4><b>{product.nombreDelProducto}</b></h4>
                        <p>{product.descripcion}</p>
                        <p className="text-capitalize"><b>Categoria: </b>{product.categoria.nombre}</p>
                        <p><b>Tipo de producto: </b> {product.tipo.nombre}</p>
                        <p><b>Precio: </b>${toThousand(product.precio)}</p>
                    </div>
                }


            </div>
        </div>



    )

}




export default LastProductDetail;
