import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
    
      <div className="jumbotron jumbotron-fluid">
        <div className="container">   
            <div className="row">
              <div className="col">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
              </div>
              <div className="col"> 
                <button>
                  <a href="/login">Login</a>
                </button>
                <button>
                  <a href="/logout">Logout</a>
                </button>
              </div>
            </div>
          
        </div>        
      </div>
    
    );
  }
}

export default Jumbotron;