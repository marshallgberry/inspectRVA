import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';
import Contact from '../../components/Contact.js'
import './Services.css'
import ScrollableAnchor from 'react-scrollable-anchor'
import Modal from 'react-responsive-modal';




class Services extends Component {

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
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center personalCard">
                <h1>Personal</h1>
                  <h4>Busy moms, over-scheduled dads—and working people of every kind—don’t 
                    want to waste their time. Calling us for an on site oil change eliminates 
                    your having to wait in line at some “quick-service” outlet. Somehow, that 
                    “10 minute” promise on their sign gets stretched into an hour … or more.
                  </h4>
                  <a href="#infoPersonal">
                  <button className="btn btn-danger btn-lg">Find Out More</button>
                  </a>
              </div>
              <div className="col text-center fleetCard">
                <h1>Fleet</h1>
                  <h4>Managing a fleet of vehicles is demanding enough even before you have to 
                    deal with the headache of getting every vehicle’s oil changed.  Wasted manpower, 
                    lost time, unpredictable costs—these are exactly the things that successful businesses 
                    avoid by using lubeRVA! We come to you!
                  </h4>
                  <a href="#infoFleet">
                  <button className="btn btn-danger btn-lg">Find Out More</button>
                  </a>
              </div>
            </div>
          </div>
          <Contact />
          <div className="container personalImage">
            <div className="personalInfo container-fluid">
              <ScrollableAnchor id={"infoPersonal"}>
                <h1 className="infoTop text-center">Personal Oil Changes Performed at Your Location!</h1>
              </ScrollableAnchor>
              <div>
                <h4 className="text-center">Every oil change service we do includes everything below:</h4>
                <ul className="list">
                  <li>Change oil with Synthetic Blend Oil (Full Synthetic available)</li>
                  <li>Install new, Top Quality Oil Filter</li>
                  <li>Antifreeze / Coolant Fluid, fill as needed</li>
                  <li>Brake Fluid – fill as needed</li>
                  <li>Power Steering Fluid – fill as needed</li>
                  <li>Transmission Fluid – fill as needed up to 1 pint</li>
                  <li>Windshield fluid, fill as needed</li>
                  <li>Check Tire Pressure and add air if necessary – advise customer</li>
                  <li>Check Air Filter – advise customer (replace if requested)</li>
                  <li>Check Wiper Blades (replace if requested) – advise customer</li>
                </ul>
                <div className="row text-center">
                  <div className="col blendPrice">
                    <p>Synthetic Blend Oil, Full Service at your location, most cars:</p>
                      <h3>$69.00</h3>
                  </div>
                  <div className="col syntheticPrice">
                    <p>Full Synthetic Oil, Full service at your location, most cars:</p>
                      <h3>$89.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div >  
          <div className="container fleetImage">
            <div className="fleetInfo container-fluid">
              <ScrollableAnchor id={"infoFleet"}>
                <h1 className="infoTop text-center">Our On-Site Mobile Fleet Services Keep You Rolling!</h1>
              </ScrollableAnchor>
              <div>
                <h4 className="text-center">Included With Every Fleet Oil Change Service:</h4>
                <ul className="list">
                  <li>Change oil with Synthetic Blend Oil (Full Synthetic available)</li>
                  <li>Install new, Top Quality Oil Filter</li>
                  <li>Lube chassis as required</li>
                  <li>Antifreeze / Coolant Fluid, fill as needed</li>
                  <li>Brake Fluid – fill as needed</li>
                  <li>Power Steering Fluid – fill as needed</li>
                  <li>Windshield Washer Fluid – Fill as needed</li>
                  <li>Transmission Fluid – Fill as needed up to 1 pint</li>
                  <li>Check tire pressure, add air as necessary, advise customer (tire rotations are available)</li>
                  <li>Check Air Filter – advise customer (replace if requested)</li>
                  <li>Check Wiper Blades (replace if requested) – advise customer</li>
                  <li>Check all exterior lights, advise customer (replace if requested)</li>
                </ul>
                <div className="text-center">
                  <div className="col fleetPrice">
                    <p>On-Site Fleet Services, with little or no down-time for your employees or vehicles, start at $46.50.</p>
                    <p>Contact us today for exact pricing for your fleet.</p>
                    <button className="btn btn-danger btn-lg" onClick={this.onOpenModal}>Request Quote</button>
                    <Modal open={open} onClose={this.onCloseModal} center>
                      <form>
                        <div className="form-group">
                          <label for="Email">Email Address:</label>
                          <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label for="Company">Company Name:</label>
                          <input type="text" className="form-control" id="Company"/>
                        </div>
                        <div className="form-group">
                          <label for="Phone">Phone:</label>
                          <input type="text" className="form-control" id="Phone"/>
                        </div>
                        <div className="form-group">
                          <label for="Address">Service Address:</label>
                          <small id="serviceAddress" class="form-text text-muted">Please enter the address the vehicle will be at for service.</small>
                          <input type="text" className="form-control" id="Address"/>
                        </div>
                        <div className="form-group">
                          <label for="Number">Number of Vehicles:</label>
                          <select className="form-control" id="Number">
                            <option>2-5</option>
                            <option>6-10</option>
                            <option>11-15</option>
                            <option>16-20</option>
                            <option>21-25</option>
                            <option>26 or more</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="Make">Year, Make and Model of vehicle, and any special requests:</label>
                          <textarea class="form-control" id="Make" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div >  
          
        <Footer />
      </div>
    );
  }
}


export default Services