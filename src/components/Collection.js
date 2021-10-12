import data from '../data/data.js';
import { useParams } from 'react-router-dom';
import './styles/Collection.css';

export default function Collection() {
    const { category } = useParams();
    const products = [];

    data.products.forEach(item => {
        item.collection.forEach(col => {
            if (col === category) {
                products.push(item);
                console.log(products);
            }
        })
    })

    return (
        <div>
            {products.map((item, index) => {
                return (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <div className='img-container'>
                        <img src={item.images[0]} alt={item.name} />
                    </div>
                    <p>{item.price}</p>
                </div>)
            })}
        </div>
    )
}