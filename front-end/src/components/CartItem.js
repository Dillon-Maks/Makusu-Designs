import './styles/Cart.css';


const CartItem = ({ data }) => {

    return(
        <>
            <div className='item-container'>
                <img src={data.images[0]} alt={data.name + `${'array num'}`}/>
                <div className='item-info'>
                    <span className='name'><strong>{data.name}</strong></span>
                    <span className='price'>${data.price}</span>
                    <span>Quantity: {data.amount}</span>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default CartItem;