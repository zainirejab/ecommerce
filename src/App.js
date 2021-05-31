import './App.css';
import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
