import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getProduct from '../firebase/functions/getProduct';

import './styles/ItemPage.css';


const ItemPage = () => {
    const [item, setItem] = useState({})
    const { id } = useParams();


    useEffect(() => {
        console.log('Fetching item....')
        getProduct(id)
        .then(res => setItem(res));
    }, [])

    return(
        <div className='itempage-container'>
            <div className='center-items'>
                <img src={item.images[0]} />
            </div>
            <div className='item-info'>
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemPage;