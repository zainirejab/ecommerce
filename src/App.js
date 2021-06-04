import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './components/firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: null
     }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() { 
    return ( 
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
     );
  }
}

export default App;
