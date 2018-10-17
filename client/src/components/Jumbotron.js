import React, { Component } from 'react';
import './Jumbotron.css';
import Modal from 'react-responsive-modal';


class Jumbotron extends Component {

  state = {
    open: false,
    open2: false,
  };
  
  onOpenAlert = () => {
    this.setState({ open: true });
  };
  
  onCloseAlert = () => {
    this.setState({ open: false });
  };

  onOpenModal = () => {
    this.setState({ open2: true });
  };
  
  onCloseModal = () => {
    this.setState({ open2: false });
  };

  render() {
    const { open } = this.state;
    const { open2 } = this.state;
    return (
    
      <div className="jumbotron jumbotron-fluid">
        <div className="container container-fluid">   
            <div className="row">
              <div className="col">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
              </div>
              <div className="col"> 
                <a className="btn btnLogin" onClick={this.onOpenModal}>Login</a>
                <Modal open={open2} onClose={this.onCloseModal} center>
                <form>
                   <h1>Login</h1>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" class="btn btnSubmit">Submit</button>
                </form>
                </Modal>
                <a className="btn btnLogout" onClick={this.onOpenAlert}>Logout</a>
                <Modal open={open} onClose={this.onCloseAlert} center>
                  <form>
                  <h1>You are logged out as: marshallgberry@gmail.com</h1>
                  <button type="submit" class="btn btnSweet">Sweet!</button>
                  </form>
                </Modal>   
              </div>
            </div>
          
        </div>        
      </div>
    
    );
  }
}

export default Jumbotron;