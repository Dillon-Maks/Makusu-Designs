import './styles/Cart.css';


const CartItem = ({ data, cart, setCart }) => {

    const changeQuantity = (type) => {
        if (type === '+') {
            console.log('adding more!')
            data.amount ++;
        } else if (type === '-') {
            console.log('removing some!')
            data.amount --;
        }
    }

    return(
        <>
            <div className='item-container'>
                <img src={data.images[0]} alt={data.name + `${'array num'}`}/>
                <div className='item-info'>
                    <span className='name'><strong>{data.name}</strong></span>
                    <span className='price'>${data.price}</span>
                    <span>Quantity: {data.amount}</span>
                    <div>
                        <button onClick={() => changeQuantity('+')}>+</button>
                        <button onClick={() => changeQuantity('-')}>-</button>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default CartItem;