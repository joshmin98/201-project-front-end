import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Main from './Components/Main';
import Login from './Components/Login';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import Modal from './Modal';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      modalShown: false
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
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: true });
      }
      this.setState({ loggedIn: true });
    });
  }

  toggleModal() {
    this.setState({ modalShown: !this.state.modalShown });
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

              <Modal shown={this.state.modalShown} toggleModal={this.toggleModal.bind(this)}>
                class form here
              </Modal>

              <Sidebar links={links} shown={this.state.modalShown}/>

              <Route
                exact path="/"
                render={props => <Login handleLogin={this.handleLogin.bind(this)} {...props}/>}
              />
              <Route
                path="/autoarkaive"
                render={props => <Main toggleModal={this.toggleModal.bind(this)} {...props}/>}
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

              <Modal shown={this.state.modalShown} toggleModal={this.toggleModal.bind(this)}>
                sign up form here
              </Modal>


              <Sidebar links={links} shown={false}/>

              <Route
                exact path="/"
                render={props => <Login handleLogin={this.handleLogin.bind(this)} {...props}/>}
              />
              <Route
                path="/autoarkaive"
                render={props => <Main toggleModal={this.toggleModal.bind(this)} {...props}/>}
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
