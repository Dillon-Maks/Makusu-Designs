import CartItem from "./CartItem";
import './styles/Cart.css';


const Cart = ({ cart }) => {
    let amountToPay = 0;
    cart.forEach(item => {
        amountToPay += (item.price * item.amount)
    });

    return(
        <div className='cart-container'>
            {cart.map(item => <CartItem data={item} />)}
            {amountToPay}
        </div>
    )
}

export default Cart;