import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home.js';

// Firebase Functions
import getCategories from './firebase/functions/getCategories.js';
import ProductList from './components/ProductList.js';

import navLogo from './assets/Makusu.png';
import './App.css';



function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
    .then(res => {
      console.log(res);
      setCategories(res);
    })
  }, [])

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo-container">
            <img src={navLogo} alt='logo' />
          </div>
          <div className='links-container'>
            <Link to='/'>Home</Link>
            <Link to='/collections'>All</Link>
            {categories.map(cat => <Link to={`/${cat.id}`} key={cat.id}>{cat.data.name}</Link>)}
            <Link to='/limitedEdition'>Limited Edition</Link>
          </div>
        </nav>
      </header>


      <Switch>
        <Route path='/collections'>

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
