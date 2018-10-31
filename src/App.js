import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Main from './Components/Main';
import Login from './Components/Login';
import About from './Components/About';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleLogin(googleResp) {
    axios.get('/TESTTTTTT', {
      params: {
        email: googleResp.w3.U3
      }
    }).then(
      this.setState({ loggedIn: true })
    );
  }

  render() {
    if(this.state.loggedIn) {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/autoarkaive">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>

            <Route
              exact path="/"
              component={Login}
            />
            <Route
              path="/autoarkaive"
              render={(props) => <Login test={this.handleLogin.bind(this)} {...props}/>}
            />
            <Route
              path="/about"
              component={About}
            />
          </div>
        </Router>
      );
    }
    else {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>

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
      );
    }
  }
};
