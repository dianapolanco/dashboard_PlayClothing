import { useState, useEffect } from 'react';


function UseProductsList(url) {

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('/api/products')
            .then(results => results.json())
            .then(data => setProducts(data.data)
            )
    }, [])

    return products

}

export default UseProductsList
