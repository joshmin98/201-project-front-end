import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: props.shown
    };
  }
  handleClick() {
    this.setState({ shown: !this.state.shown });
  }

  render() {
    if(this.state.shown) {
      return(
        <div>
          <nav>
            {this.props.links.map((link, idx) => (
              <li key={idx}>
                {link}
              </li>
            ))}
          </nav>
          <div id="backdrop" onClick={this.handleClick.bind(this)}/>
        </div>
      );
    }
    else {
      return(
        <i className="fas fa-bars" onClick={this.handleClick.bind(this)}></i>
      );
    }
  }
}
