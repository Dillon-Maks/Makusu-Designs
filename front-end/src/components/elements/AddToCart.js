import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import getProduct from '../../firebase/functions/getProduct';

const AddToCart = ({ cartTotal, setCartTotal, cart, setCart }) => {
    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then(res => {
            setItem(res)
        });
    }, [id])


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

const Text = styled.span`

`