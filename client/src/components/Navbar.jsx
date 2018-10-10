import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm">
        <div className="container">
          <div>
            <a>
              <Link className="navbar-brand" to="/">
              Home
              </Link>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookappointment">Book Appointment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
