import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Users from './components/Users'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/users' component={Users} />

        </header>
      </div>
    );
  }
}

export default App;
