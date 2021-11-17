import { useEffect, useState } from "react";
import getProducts from "../firebase/functions/getProducts";
import styled from 'styled-components';

import Item from '../components/Item';


const SimilarItems = ({ category, id }) => {
    const [similar, setSimilar] = useState([])
    
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