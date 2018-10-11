import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';


class Contact extends Component {
    render() {
        return (
      <nav className="navbar">
        <div className="navbar">
          <div className="row">
            <div className="col ">
              <a className="nav-link phoneIcon" href="tel:+8178326045"></a>
            </div>
            <div className="col ">
              <a className="nav-link emailIcon" href="mailto:lubeRVA@aol.com"></a>
            </div>
          </div>
        </div>
      </nav>
            );
  }
}

export default Contact;
