import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import Contact from '../../components/Contact.jsx'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="aboutBody">
          <div className="card aboutCard">
               <div className="aboutText">
                  <h1 className="aboutTitle">The lubeRVA Story</h1>
                    <h4 className="aboutTop">
                      Connecting you to an oil change, at the tap of a button.
                      Born & raised in the conference room of the Special Programs building at
                      University of Richmond, lubeRVA has always had an affinity for technology.
                    </h4> 
                    <h4 className="aboutMiddle">
                      The lubeRVA app allows customers to conveniently schedule a high-quality 
                      oil change service at the time and location of their choosing.
                    </h4>
                    <h4 className="aboutBottom">
                      lubeRVA redefines the entire oil change experience. No longer do 
                      consumers have to deal with inconvenient, inconsistent and frustrating 
                      visits to fixed oilchange locations. Your time is precious so TREAT YO
                      SELF to a lubeRVA oil change!
                    </h4>                   
                </div>           
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default About