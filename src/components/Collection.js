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
        <div className='container'>
            {products.map((item, index) => {
                return (
                <div className='product-card' key={index}>
                    <div className='img-container'>
                        <img src={item.images[0]} alt={item.name} />
                    </div>
                    <p><b>{item.name}</b></p>
                    <p>{item.price}</p>
                    <button>Add To Card</button>
                </div>)
            })}
        </div>
    )
}