import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

// Components
import Home from './components/Home.js';
import ItemPage from './components/ItemPage.js';
import Item from './components/Item';
import ProductList from './components/ProductList.js';

// Firebase Functions
import getCategories from './firebase/functions/getCategories.js';

import navLogo from './assets/Makusu.png';
import cartImg from './assets/cart.PNG';
import './App.css';


function App() {
  const [categories, setCategories] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([])
  const { push } = useHistory();

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      const savedCart = JSON.parse(localStorage.getItem('cart'))
      setCart(savedCart)
      setCartTotal(savedCart.length)
    }
    getCategories()
    .then(res => {
      setCategories(res);
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const handleCart = () => {
    push('/cart');
  }

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo-container">
            <img src={navLogo} alt='logo' />
          </div>
          <div className='links-container'>
            <Link to='/'>Home</Link>
            <Link to='/all'>All</Link>
            {categories.map(cat => <Link to={`/${cat.id}`} key={cat.id}>{cat.data.name}</Link>)}
            <Link to='/limitedEdition'>Limited Edition</Link>
          </div>
        </nav>
      </header>

      <div className='cart' onClick={handleCart}>
        <img src={cartImg}/>
        {cartTotal > 0 && <p>{cartTotal}</p>}
      </div>

      <Switch>
        <Route path='/all'>
          <ProductList />
        </Route>
        <Route path='/cart'>
          {cart.map(item => <p>{item.name}</p>)}
        </Route>
        <Route path='/product/:id'>
          <ItemPage cartTotal={cartTotal} setCartTotal={setCartTotal} cart={cart} setCart={setCart}/>  
        </Route>
        <Route path='/:category'>
          <ProductList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
