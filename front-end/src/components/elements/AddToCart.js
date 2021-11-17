import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import getProduct from '../../firebase/functions/getProduct';

const AddToCart = ({ cartTotal, setCartTotal, cart, setCart }) => {
    const [item, setItem] = useState();
    const { id } = useParams();


    // Fetches current pages item
    useEffect(() => {
        getProduct(id)
        .then(res => {
            setItem(res)
        });
    }, [id])


    // Adds item to cart and updates values
    const handleClick = () => {
        setCartTotal(cartTotal + 1)
        setCart([item, ...cart])
    }

    return(
        <Button onClick={handleClick}>
            Add to Cart
        </Button>
    )
}

export default AddToCart;

const Button = styled.div`
    padding: 2%;
    border: 3px solid black;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: black;
        color: white;
    }
`