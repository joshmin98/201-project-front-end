import GoogleLogin from 'react-google-login';
import Typist from 'react-typist';
import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  successLogin(resp) {
    console.log(resp);
  }

  failLogin(resp) {
    alert('Error', resp);
  }

  render() {
    return (
      <div id="login">
        <Typist>
          <Typist.Delay ms={1000}/>
          <span>Arkaive</span>
          <Typist.Backspace count={7} delay={500}/>
          <span>AutoArkaive</span>
        </Typist>
        <GoogleLogin
          buttonText="Login"
          clientId="317302246616-hflle8oaqav6fl3ldl1asl8e2m2deket.apps.googleusercontent.com"
          onSuccess={this.successLogin}
          onFailure={this.failLogin}
        />
      </div>
    );
  }
};
