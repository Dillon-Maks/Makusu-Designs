import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Collections from './components/Collections.js';
import Collection from './components/Collection.js';
import './App.css';
import navLogo from './assets/Makusu.png';
import data from './data/data.js';

function App() {


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
            <Link to='/tees'>Tees</Link>
            <Link to='/hoodies'>Hoodies</Link>
            <Link to='/bottoms'>Bottoms</Link>
            <Link to='/womens'>Women's</Link>
            <Link to='/accessories'>Accessories</Link>
            <Link to='/limitedEdition' className='limited-ed-link'>Limited Edition</Link>
          </div>
        </nav>
      </header>


      <Switch>
        <Route path='/collections'>
          <Collections dataCol={data.collections}/>
        </Route>
        <Route path='/:category'>
          <Collection />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
