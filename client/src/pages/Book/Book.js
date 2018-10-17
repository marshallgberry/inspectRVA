import React, { Component } from 'react';
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';
import Contact from '../../components/Contact.js'
import './Book.css'
import Modal from 'react-responsive-modal';

class Book extends Component {

  state = {
    open: false,

  };
  
  onOpenModal = () => {
    this.setState({ open: true });
  };
  
  onCloseModal = () => {
    this.setState({ open: false });
  };


  render() {
    const { open } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container container-fluid">
          <h1 className="bookHeader">Book Appointment</h1>
          <form className="bookForm" action="/book" method="post">
          <div className="form-group">
              <label for="Company">Full Name:</label>
              <input type="text" className="form-control" id="Name" name="name"/>
            </div>
            <div className="form-group">
              <label for="Email">Email:</label>
              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="" name="email"/>
            </div>
            <div className="form-group">
              <label for="Company">Phone:</label>
              <input type="text" className="form-control" id="Phone" name="phone"/>
            </div>
            <div className="form-group">
              <label for="Call">Best Time To Call:</label>
              <select className="form-control" id="Number">
                <option>Anytime</option>
                <option>8 am - 10 am</option>
                <option>10 am - Noon</option>
                <option>Noon - 2pm</option>
                <option>2 pm - 4pm</option>
                <option>4 pm - We ain't calling you!</option>
              </select>
            </div>
            <div className="form-group">
              <label for="Address">Service Address:</label>
              <small id="serviceAddress" class="form-text text-muted">Please enter the address the vehicle will be at for service.</small>
              <input type="text" className="form-control" id="Address"/>
            </div>
            <div className="form-group">
              <label for="City">City:</label>
              <input type="text" className="form-control" id="City"/>
            </div>
            <div className="form-group">
              <label for="Zip">Zip Code:</label>
              <input type="text" className="form-control" id="Zip"/>
            </div>
            <div className="form-group">Service Type:</div>
              <div class="form-group form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Personal Vehicle
                </label>
              </div>
              <div class="form-group form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  Fleet Service
                </label>
              </div>  
            <div className="form-group">
              <label for="Number">Number of Vehicles:</label>
              <select className="form-control" id="Number">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6 or more</option>
              </select>
            </div>
            <div class="form-group">
              <label for="Make">Year, Make and Model of vehicle, and any special requests:</label>
              <textarea class="form-control" id="Make" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={this.onOpenModal}>Request</button>
            <Modal open={open} onClose={this.onCloseModal} center><h1 className="requestAlert">Booking Requested!</h1></Modal>
          </form>         
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Book