import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Main from './Components/Main';
import Login from './Components/Login';
import About from './Components/About';
import Sidebar from './Components/Sidebar';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleLogin(googleResp) {
    axios.get('http://localhost:9000/', {
      params: {
        command: "checkUser",
        email: googleResp.w3.U3
      }
    }).then((resp) => {
      if(!resp.arkaiveAccountExists) {
        // register here
      }
      else {
        this.setState({ loggedIn: true });
      }
      this.setState({ loggedIn: true });
    });
  }

  render() {
    if(this.state.loggedIn) {
      let links = [
        <Link to="/autoarkaive">Classes</Link>,
        <Link to="/about">About</Link>,
        <Link to="/">Login</Link>
      ];

      return (
        <div>
          <Router>
            <div>

          <Sidebar links={links} shown={false}/>

              <Route
                exact path="/"
                render={(props) => <Login test={this.handleLogin.bind(this)} {...props}/>}
              />
              <Route
                path="/autoarkaive"
                component={Main}
              />
              <Route
                path="/about"
                component={About}
              />

            </div>
          </Router>
        </div>
      );
    }
    else {
      let links = [
        <Link to="/about">About</Link>,
        <Link to="/">Login</Link>
      ];

      return (
        <div>

          <Router>
            <div>

              <Sidebar links={links} shown={false}/>

              <Route
                exact path="/"
                render={(props) => <Login test={this.handleLogin.bind(this)} {...props}/>}
              />
              <Route
                path="/autoarkaive"
                component={Main}
              />
              <Route
                path="/about"
                component={About}
              />
            </div>
          </Router>

        </div>
      );
    }
  }
};
