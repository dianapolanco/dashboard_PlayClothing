import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';


function Chart() {

    const [types, setTypes] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        console.log("Se montó el componente")
        fetch('/api/products')
            .then(results => results.json())
            .then(data => {
                setCategories(data.data.map(item => item.categoria.nombre))
                setTypes(data.data.map(item => item.tipo.nombre))
            })
    }, [])



    const categorias = categories.reduce((obj, item) => {
        if (obj[item]) {
            obj[item] = obj[item] + 1
        } else {
            obj[item] = 1
        }
        return obj
    }, [])

    const categoriasIterable = Object.entries(categorias)


    const tipos = types.reduce((obj, item) => {
        if (obj[item]) {
            obj[item] = obj[item] + 1
        } else {
            obj[item] = 1
        }
        return obj
    }, [])


    const tiposIterable = Object.entries(tipos)

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" width="35%">Categorias</th>
                                <th scope="col" width="35%">Cantidad de productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length > 0 && categoriasIterable.map(([key, value]) => { return <ChartRow key={key} nombre={key} cantidad={value} /> })}
                            {categories.length === 0 && <ChartRow nombre= "Cargando..." cantidad = "Cargando..."  />}
                        </tbody>    
                    </table>
                    </div>
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" width="35%">Tipos de producto</th>
                                <th scope="col" width="35%">Cantidad de productos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {types.length > 0 && tiposIterable.map(([key, value]) => { return <ChartRow key={key} nombre={key} cantidad={value} /> })}
                            {types.length === 0 && <ChartRow nombre= "Cargando..." cantidad = "Cargando..."  />}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;