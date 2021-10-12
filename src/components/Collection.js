import data from '../data/data.js';


export default function Collection(props) {
    const { name } = props;
    const products = [];

    data.products.forEach(item => {
        item.collection.forEach(col => {
            if (col === name) {
                products.push(item);
                console.log(products);
            }
        })
    })

    return (
        <div>
            {products.map(item => <div><h1>{item.name}</h1><p>{item.price}</p></div>)}
        </div>
    )
}