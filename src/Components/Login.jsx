import GoogleLogin from 'react-google-login';
import Typist from 'react-typist';
import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  successLogin(resp) {
    axios.get('/', {
      params: {
        
      }
    });
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
          onSuccess={(resp) => this.props.test(resp)}
          onFailure={this.failLogin}
        />
      </div>
    );
  }
};
