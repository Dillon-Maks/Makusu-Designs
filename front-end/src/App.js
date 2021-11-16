import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';

// Components
import Home from './components/Home.js';
import ItemPage from './components/ItemPage.js';

// Firebase Functions
import getCategories from './firebase/functions/getCategories.js';
import ProductList from './components/ProductList.js';

import navLogo from './assets/Makusu.png';
import cart from './assets/cart.PNG';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    getCategories()
    .then(res => {
      setCategories(res);
    })
  }, [])

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
        <img src={cart}/>
        {5 > 0 && <p>{10}</p>}
      </div>

      <Switch>
        <Route path='/all'>
          <ProductList />
        </Route>
        <Route path='/cart'>
          <h1>THIS IS YOUR CART</h1>
        </Route>
        <Route path='/product/:id'>
          <ItemPage />  
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
