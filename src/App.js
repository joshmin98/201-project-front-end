import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import './App.css';
import Test from './Test.jsx';

let App = () => (
  <div className="App">
    <Test loggedIn={true}/>
  </div>
);

export default App;
