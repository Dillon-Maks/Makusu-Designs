import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getProduct from '../firebase/functions/getProduct';

import AddToCart from './elements/AddToCart';
import SimilarItems from './SimilarItems';

import './styles/ItemPage.css';


const ItemPage = ({ cartTotal, setCartTotal, cart, setCart }) => {
    const [item, setItem] = useState([])
    const { id } = useParams();


    // Set the current item
    useEffect(() => {
        getProduct(id)
        .then(res => {
            setItem(res)
        });
    }, [id])

    return(
        <>
            <div className='itempage-container'>
                <div className='center-items'>
                    {item.images && <img src={item.images[0]} alt={item.name + `${'array num'}`}/>}
                </div>
                <div className='item-info'>
                    <h1>{item.name}</h1>
                    <h2>${item.price}</h2>
                    <p>{item.description}</p>
                    <hr/>
                    <AddToCart cartTotal={cartTotal} setCartTotal={setCartTotal} cart={cart} setCart={setCart} />
                </div>
            </div>
            <span className='similar-items'>Similar Items</span>
            {item.category && <SimilarItems category={item.category} id={id}/>}
        </>
    )
}

export default ItemPage;