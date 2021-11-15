import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import getProducts from '../firebase/functions/getProducts';

import Item from './Item';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
        .then(res => setProducts(res))
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {products.map(item => <Item data={item} key={item.name}/>)}
        </div>
    )
}

export default ProductList;