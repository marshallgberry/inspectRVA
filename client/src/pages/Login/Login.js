import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';

const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component{
  
  
  

  render(){
    
    return(
      
      <div>
        <Navbar />
          <GoogleLogin clientId="47267667248-2747nsioi6btra14e91mp89g72ompg8s.apps.googleusercontent.com"
           buttonText="Login"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           />
        <Footer />
      </div>
    );
  }
}

export default Login