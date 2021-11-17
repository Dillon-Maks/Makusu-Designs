import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import getProducts from '../firebase/functions/getProducts';
import styled from 'styled-components';

import Item from './Item';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            getProducts(category)
            .then(res => setProducts(res))
            .catch(err => console.log(err));
        } else {
            getProducts()
            .then(res => setProducts(res))
            .catch(err => console.log(err));
        }
    }, [category])

    const makeNum = () => {
        let num = Math.random() * 12;
        if (Math.random() > 0.5) {
            num = -Math.abs(num);
        }
        return num;
    }

    return (
        <ProductContainer>
            {products.map(item => <Item data={item} key={item.name} rotation={() => makeNum()}/>)}
        </ProductContainer>
    )
}

export default ProductList;

const ProductContainer = styled.div`
    width: 100vw;
    margin: 2%;
    display: flex;
    flex-wrap: wrap;
`