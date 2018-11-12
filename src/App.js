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
      modalShown: false,
      classList: [],
      email: '',
      arkaiveUsername: '',
      arkaivePassword: '',
      classToAdd: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  fetchClasses() {
    axios.get('http://localhost:9000/fetchClasses', {
      params: {
        command: 'fetchClasses',
        email: this.state.email
      }
    }).then(resp => {
      console.log(resp.data);
      this.setState({ classList: resp.data.classes });
    }).error((error) => {
      console.log(error);
    });
  }

  handleArkaiveLogin(event) {
    event.preventDefault();
    console.log(event);
    axios.get("http://localhost:9000/arkaiveLogin", {
      params: {
        command: "addUser",
        username: this.state.arkaiveUsername,
        password: this.state.arkaivePassword
      }
    }).then(resp => {
      resp = resp.data;
      console.log(resp);
      if(resp.isValidArkaiveAccount) {
        this.setState({ modalShown: false });
        this.setState({ loggedIn: true });
        this.fetchClasses();
      }
      else {
        alert('Arkaive account invalid!');
      }
    });
  }

  handleForm(event) {
    const fields = Array.prototype.slice.call(event.target)
          .filter(el => el.name)
          .reduce((form, el) => ({
            ...form,
            [el.name]: el.value
          }), {});
    let classStr = fields.class.split(' ');
    const className = classStr[0];
    const courseCode = classStr[2];
    event.preventDefault();
    axios.get('http://localhost:9000/addClass', {
      params: {
        command: 'addClass',
        email: this.state.email,
        picurl: '',
        arkaive_username: this.state.arkaiveUsername,
        arkaive_password: this.state.arkaivePassword,
        className: className,
        courseCode: courseCode
      }
    }).then(resp => {
      resp = resp.data;
      if(resp.successfullyAdded) {
        alert(resp.message);
        this.fetchClasses();
      }
      else {
        alert('Unable to add class!');
      }
    });
  }

  handleLogin(googleResp) {
    this.setState({ email: googleResp.w3.U3 });
    axios.get('http://localhost:9000/login', {
      params: {
        command: "checkUser",
        email: this.state.email
      }
    }).then(resp => {
      resp = resp.data;
      console.log(resp);
      if(!resp.arkaiveAccountExists) {
        this.setState({ loggedIn: false });
        this.setState({ modalShown: true });
      }
      else {
        this.setState({ loggedIn: true });
        this.fetchClasses();
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
              <Modal
                shown={this.state.modalShown}
                toggleModal={this.toggleModal.bind(this)}
              >
                <form onSubmit={this.handleForm.bind(this)}>
                  <div>
                    <label>Classes</label>
                    <select name='class' className='form-control'>
                      {this.state.classList.map((arkaiveClass, idx) => (
                        <option key={idx}>{arkaiveClass.class} - {arkaiveClass.courseCode}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                  </div>
                  <button type='submit'>Add Class</button>
                </form>
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
                <form onSubmit={this.handleArkaiveLogin.bind(this)}>
                  <div className='form-group'>
                    <label>Arkaive Username</label>
                    <input
                      type='text'
                      name='arkaiveUsername'
                      value={this.state.arkaiveUsername}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Arkaive Password</label>
                    <input
                      type='text'
                      name='arkaivePassword'
                      value={this.state.arkaivePassword}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </Modal>


              <Sidebar links={links} shown={false}/>

              <Route
                exact path="/"
                render={props => <Login handleLogin={this.handleLogin.bind(this)} {...props}/>}
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
