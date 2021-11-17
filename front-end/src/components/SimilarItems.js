import { useEffect, useState } from "react";
import getProducts from "../firebase/functions/getProducts";
import styled from 'styled-components';

import Item from '../components/Item';


const SimilarItems = ({ category, id }) => {
    const [similar, setSimilar] = useState([])
    
    // Picks 5 random products from same category to display
    useEffect(() => {
        getProducts(category)
        .then(res => {
            const myRes = res.filter(item => item.id !== id);
            const toAdd = [];
            while (toAdd.length < 5) {
                if (myRes.length > 0) {
                    const randomItem = Math.floor(Math.random() * (myRes.length));
                    toAdd.push(myRes[randomItem]);
                    myRes.splice(randomItem, 1)
                } else {
                    break;
                }
            }
            setSimilar(toAdd);
        });
        // The line below stops an unnecessary error from 'category' and 'id' props
        // eslint-disable-next-line
    }, [])

    return (
        <Div>
            {similar.map(item => <Item data={item} key={item.id}/>)}
        </Div>
    )
}

export default SimilarItems;

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`