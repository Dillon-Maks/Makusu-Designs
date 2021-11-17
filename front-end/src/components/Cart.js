import CartItem from "./CartItem";
import './styles/Cart.css';


const Cart = ({ cart, setCart }) => {
    let amountToPay = 0;
    cart.forEach(item => {
        amountToPay += (item.price * item.amount)
    });

    return(
        <div className='cart-container'>
            {cart.map(item => <CartItem data={item} cart={cart} setCart={setCart}/>)}
            {amountToPay}
        </div>
    )
}

export default Cart;