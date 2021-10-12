import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Collections from './components/Collections.js';
import Collection from './components/Collection.js';
import './App.css';
import data from './data/data.js';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Makusu Designs</h1>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/collections'>All</Link>
            <Link to='/tees'>Tees</Link>
          </div>
        </nav>
      </header>


      <Switch>
        <Route path='/tees'>
          <Collection name='tees' />
        </Route>
        <Route path='/collections'>
          <Collections dataCol={data.collections}/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
