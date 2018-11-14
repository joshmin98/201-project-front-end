import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      classes: []
    };
  }

  fetchAutoArkaiveClasses() {
    axios.get('http://localhost:9999/endPointThatIHit').then(
      resp => {
        console.log(resp.data);
        this.setState(resp.data);
      }
    );
  }

  componentWillMount() {
    this.fetchAutoArkaiveClasses();
  }

  handleClick() {
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="container">
        <h1>Hi {this.state.name}, we got you for:</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Class Location</th>
              <th scope="col">Time of Class</th>
              <th scope="col">Arkaive Code</th>
            </tr>
          </thead>
          <tbody>
            {this.state.classes.map((event, idx) => (
              <tr key={idx}>
                <th scope="row">{event.class}</th>
                <td>{event.location}</td>
                <td>{event.time}</td>
                <td>{event.code}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <i id="add" className="fas fa-plus" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}
