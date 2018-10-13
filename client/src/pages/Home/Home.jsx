import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import Jumbotron from '../../components/Jumbotron.jsx';
import Contact from '../../components/Contact.jsx'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="">
        <Jumbotron title="lubeRVA" subtitle="mobile oil change" />
          <Navbar />
            <div className="homeBody">
              <h2 className="bodyTop">Too busy to go get an oil change? No problem!</h2>
              <h2 className="bodyTop2">lubeRVA is the oil change service that comes to you!</h2>
              <h4 className="bodyBottom">No one has time to go get their oil changed, and we have the solution. We come to your location (home or business) and carefully perform the service there while you work or relax. No mess, no hassle and much less interruption to your day. Cars, trucks, RVs and Fleets!</h4>
            </div>
            <Contact />
        <Footer/>
      </div>
    );
  }
}

export default Home