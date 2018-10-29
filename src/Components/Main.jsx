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
      <div>
       <h1>Hi {this.state.name}, we got you for:</h1>
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}
        />
     </div>
    );
  }
}
