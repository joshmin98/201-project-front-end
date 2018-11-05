import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: this.props.shown
    };
  }

  handleClick() {
    this.props.toggleModal();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.shown !== this.props.shown) {
      this.setState({ shown: this.props.shown });
    }
  }

  render() {
    if(this.state.shown) {
      return(
        <div>
          <div id="backdrop" onClick={this.handleClick.bind(this)}/>
          <div id="modal">
            {this.props.children}
          </div>
        </div>
      );
    }
    else {
      return(
        null
      );
    }
  }
}
