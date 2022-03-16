import React, { useState, useEffect} from 'react';
import SmallCard from './SmallCard';
import {faUserAstronaut, faShirt, faBoxOpen, faUserGroup} from '@fortawesome/free-solid-svg-icons'



function ContentRowPC() {

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        console.log("Se montó el componente")
        let usuarios = fetch('/api/users')
        let productos = fetch('/api/products')
        Promise
            .all([usuarios, productos])
            .then(([usuarios, productos]) => {
                let data1 = usuarios.json()
                let data2 = productos.json()
                return Promise.all([data1, data2])
            })
            .then(([data1, data2]) => {
                setUsers(data1.data)
                setProducts(data2)
            })
    }, [])

    return (
        <div className="row">

            <SmallCard nombre="Usuarios registrados" total={users.length} icon={faUserAstronaut}/>
            <SmallCard nombre="Productos" total={products.length} icon={faShirt}/>
            <SmallCard nombre="Tipos de productos" total={products.totalTipos} icon={faBoxOpen} />
            <SmallCard nombre="Categorias" total={products.totalCategorias} icon={faUserGroup}/>


        </div>

    )

}
export default ContentRowPC;