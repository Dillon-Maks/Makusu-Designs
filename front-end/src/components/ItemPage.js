import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getProduct from '../firebase/functions/getProduct';


const ItemPage = () => {
    const [item, setItem] = useState({})
    const { id } = useParams();


    useEffect(() => {
        console.log('Fetching item....')
        getProduct(id)
        .then(res => setItem(res));
    }, [])

    return(
        <div>
            <img src={item.images[0]} />
            <h1>{item.name}</h1>
        </div>
    )
}

export default ItemPage;