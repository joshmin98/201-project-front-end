import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Components/Main.jsx';
import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleLogin
          buttonText="Login"
        />
      </div>
    );
  }
}

export default App;
