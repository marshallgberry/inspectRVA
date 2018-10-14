import React, { Component } from 'react';
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';
import Contact from '../../components/Contact.js'
import './Services.css'
import ScrollableAnchor from 'react-scrollable-anchor'



class Services extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col text-center serviceCard">
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
              <div className="col text-center serviceCard">
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
          </div>  
            <div>
              <ScrollableAnchor id={"infoFleet"}>
                <h1>Personal Oil Changes Performed at Your Location!</h1>
              </ScrollableAnchor>
              <div>
                Sweet
              </div>
            </div>
          
        <Footer />
      </div>
    );
  }
}

export default Services