import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar">
          <div className="row">
            <div className="col col">
              <Link className="nav-link active homeIcon" to="/"></Link>
            </div>
            <div className="col col">
              <Link className="nav-link aboutIcon" to="/about"></Link>
            </div>
            <div className="col col">
              <Link className="nav-link serviceIcon" to="/services"></Link>
            </div>
            <div className="col col">
              <Link className="nav-link profileIcon" to="/profile"></Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
