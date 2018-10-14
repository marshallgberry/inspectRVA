import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Services from './pages/Services/Services.js';
import Profile from './pages/Profile/Profile.js'
import Login from './pages/Login/Login.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;