import React, { Component } from 'react';
import './Jumbotron.css';



class Jumbotron extends Component {
  render() {
    return (
    
      <div className="jumbotron jumbotron-fluid">
        <div className="container container-fluid">   
            <div className="row">
              <div className="col">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
              </div>
              <div className="col"> 
                <a className="btn btnLogin" href="/login">Login</a>
                <a className="btn btnLogout" href="/logout">Logout</a>   
              </div>
            </div>
          
        </div>        
      </div>
    
    );
  }
}

export default Jumbotron;