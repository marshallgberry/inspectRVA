import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import Contact from '../../components/Contact.jsx'
import './Services.css'


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
                  <button className="btn btn-danger btn-lg">Find Out More</button>
              </div>
              <div className="col text-center serviceCard">
                <h1>Fleet</h1>
                  <h4>Managing a fleet of vehicles is demanding enough even before you have to 
                    deal with the headache of getting every vehicle’s oil changed.  Wasted manpower, 
                    lost time, unpredictable costs—these are exactly the things that successful businesses 
                    avoid by using lubeRVA! We come to you!
                  </h4>
                  <button className="btn btn-danger btn-lg">Find Out More</button>
              </div>
            </div>
          </div>
          <Contact />
          <div data-spy="scroll" data-target="#serviceCard" data-offset="0">
                <h1 id="list-item-1">Personal</h1>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Services