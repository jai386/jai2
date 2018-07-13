import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import login from './login.js';
import signUp from './signUp.js';
import api from './Component/api.js';
const Home = () => (
  <div>
     <ul></ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
      <center>
        <ul>
          <Link to="/"><h4>Home</h4></Link>
          <Link to="/login"><h4>Login</h4></Link>
          <Link to="/signUp"><h4>SignUp</h4></Link>
          <Link to="/api"><h4></h4></Link>

        </ul>
         <Route path="/" component={Home}/>
         <Route path="/login" component={login}/>
         <Route path="/signUp" component={signUp}/>
         <Route path="/api" component={api}/>
        </center>
      </div>
    );
  }
}

export default App;
