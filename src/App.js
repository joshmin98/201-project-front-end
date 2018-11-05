import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

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

  handleForm(event) {
    event.preventDefault();
    axios.get('http://localhost:9000/', {
      params: 'check'
    });
  }

  handleLogin(googleResp) {
    axios.get('http://localhost:9000/login', {
      params: {
        command: "checkUser",
        email: googleResp.w3.U3
      }
    }).then(resp => {
      resp = resp.data;
      if(!resp.arkaiveAccountExists) {
        this.setState({ loggedIn: false });
        // open modal here
        axios.get("localhost:9000/arkaivelogin", {
          params: {
            //username and password
            command: "addUser"
          }
        }).then(resp => {
          if(resp.isValidArkaiveAccount) {
            return;
          }
          else {
            alert('Arkaive account invalid!');
          }
        });
      }
      else {
        this.setState({ loggedIn: true });
      }
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

              <Modal shown={this.state.modalShown}
                     toggleModal={this.toggleModal.bind(this)}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: ''}}
                >
                </GoogleMapReact>
              </Modal>

              <Sidebar links={links}
                       shown={this.state.modalShown}/>

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

              <Modal
                shown={this.state.modalShown}
                toggleModal={this.toggleModal.bind(this)}>
                <form onSubmit={this.handleForm.bind(this)}>
                  <label>Arkaive Username</label>
                  <input type="text"></input>
                  <br/>
                  <label>Arkaive Password</label>
                  <input type="text"></input>
                  <br/>
                  <button type="submit">Submit</button>
                </form>
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
