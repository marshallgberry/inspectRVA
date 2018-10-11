import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Profile from './pages/Profile/Profile.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;