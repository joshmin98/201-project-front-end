import React, { Component } from 'react';
import ReactTable from 'react-table';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: [],
      columns: [
        {
          Header: 'Class',
          accessor:'class'
        },
        {
          Header: 'Time',
          accessor: 'time'
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({name: 'Josh'});
    let data = [
      {
        class: 'CSCI201',
        time: '9:00AM'
      }
    ];
    this.setState({data: data});
  }

  render() {
    return (
      <div class="container">
       <h1>Hi {this.state.name}, we got you for:</h1>
       <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Class</th>
      <th scope="col">Class Location</th>
      <th scope="col">Time of Class</th>
      <th scope="col">Arkaive Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">CSCI 201</th>
      <td>SAL 109</td>
      <td>11:30 AM</td>
      <td>KR21K</td>
    </tr>
  </tbody>
</table>
        
     </div>
    );
  }
}
