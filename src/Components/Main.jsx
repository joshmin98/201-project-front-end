import React, { Component } from 'react';
import ReactTable from 'react-table';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: []
    };
  }

  componentWillMount() {
    // Call out to API here
    this.setState({name: 'Josh'});
    let data = [
      {
        class: 'CSCI201',
        time: '9:00AM',
        location: 'SAL 109',
        code: 'KR21K'
      }
    ];
    this.setState({data: data});
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
            {this.state.data.map((event, idx) => (
              <tr key={idx}>
                <th scope="row">{event.class}</th>
                <td>{event.location}</td>
                <td>{event.time}</td>
                <td>{event.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}
