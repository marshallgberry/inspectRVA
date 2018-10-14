import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
    
      <nav className="navbar">
        <div className="navbar">
          <div className="row">
            <div className="col ">
              <Link className="nav-link homeIcon" data-toggle="popover" title="Home" to="/"></Link>
            </div>
            <div className="col ">
              <Link className="nav-link aboutIcon" data-toggle="popover" title="About" to="/about"></Link>
            </div>
            <div className="col ">
              <Link className="nav-link serviceIcon" data-toggle="popover" title="Services" to="/services"></Link>
            </div>
            <div className="col ">
              <Link className="nav-link profileIcon " data-toggle="popover" title="Sign In to View Profile" to="/profile"></Link>
            </div>
          </div>
        </div>
      </nav>
    
    );
  }
}

export default Navbar;
