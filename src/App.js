import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import './App.css';
import Test from './Test.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    axios.get().then(resp => {
      
    });
  }

  render() {
    return (
      <div className="App">
        <Test loggedIn={true}/>
      </div>
    );
  }
};
