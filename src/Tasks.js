import React, { Component } from 'react';
import data from './data';
import List from './List'

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.setState({ tasks: [...data] });
  }

  render() {
    console.log(this.state.tasks);
    return <><
        <List />
        </>;
  }
}

export default Tasks;
