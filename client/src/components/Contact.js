import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
    render() {
        return (
      <nav className="navbar navbar-fluid">
        <div className="navbar">
          <div className="row">
            <div className="col ">
              <a className="nav-link phoneIcon" data-toggle="popover" title="Call Us!" href="tel:+18178326045"></a>
            </div>
            <div className="col ">
              <a className="nav-link emailIcon" data-toggle="popover" title="Email Us!" href="mailto:lubeRVA@aol.com"></a>
            </div>
          </div>
        </div>
      </nav>
            );
  }
}

export default Contact;
