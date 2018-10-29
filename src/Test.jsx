import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import './App.css';


let Test = (props) => { 
  if(props.loggedIn) {
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

          <Route exact path="/" component={Login}/>
          <Route path="/autoarkaive" component={Main}/>
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

          <Route exact path="/" component={Login}/>
          <Route path="/autoarkaive" component={Main}/>
        </div>
      </Router>
    );
  }
};

export default Test;
