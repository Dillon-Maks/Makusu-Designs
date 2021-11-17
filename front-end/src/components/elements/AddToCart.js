import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import getProduct from '../../firebase/functions/getProduct';

const AddToCart = ({ cart, setCart }) => {
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
        const itemsInCart = cart.filter(product => product.name === item.name);
        if (itemsInCart.length > 0) {
            if (item.amount) {
                item.amount ++;
                setCart([...cart])
            } else {
                item.amount = 1;
                setCart([...cart])
            }
        } else {
            console.log('not yet in cart');
            item.amount = 1;
            setCart([item, ...cart])
        }
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